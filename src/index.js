// Coach Alex — blind chat study Worker.
// Serves a small JSON API under /api/*; everything else falls through to the
// static assets in ./public (participant page + researcher dashboard).

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const now = () => Date.now();

// ---- config helpers --------------------------------------------------------

async function getConfig(env, key, fallback = null) {
  const row = await env.DB.prepare("SELECT value FROM config WHERE key = ?")
    .bind(key)
    .first();
  return row ? row.value : fallback;
}

async function setConfig(env, key, value) {
  await env.DB.prepare(
    "INSERT INTO config (key, value) VALUES (?1, ?2) " +
      "ON CONFLICT(key) DO UPDATE SET value = ?2"
  )
    .bind(key, value)
    .run();
}

// ---- natural delay ---------------------------------------------------------
// Make the AI reply arrive after a human-like pause: a base "thinking" delay
// plus typing time proportional to length, with a little jitter. Clamped so a
// participant never waits absurdly long.
function replyDelayMs(text) {
  const base = 6000; // thinking / reading pause
  const perChar = 45; // ~ typing speed
  const jitter = Math.floor(Math.random() * 6000);
  const d = base + text.length * perChar + jitter;
  return Math.min(Math.max(d, 8000), 75000);
}

// ---- OpenAI ----------------------------------------------------------------

async function generateAiReply(env, conversation) {
  const history = await env.DB.prepare(
    "SELECT role, content FROM messages WHERE conversation_id = ? ORDER BY id ASC"
  )
    .bind(conversation.id)
    .all();

  const systemPrompt =
    conversation.system_prompt ||
    (await getConfig(env, "system_prompt")) ||
    "You are Coach Alex, a helpful coach.";
  const model =
    (await getConfig(env, "model")) || env.OPENAI_MODEL || "gpt-4o";

  const messages = [
    { role: "system", content: systemPrompt },
    ...history.results.map((m) => ({ role: m.role, content: m.content })),
  ];

  // No temperature: reasoning models (gpt-5*, o*) reject non-default values,
  // so we always use the model's default.
  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({ model, messages }),
  });

  if (!resp.ok) {
    const detail = await resp.text();
    throw new Error(`OpenAI ${resp.status}: ${detail}`);
  }
  const data = await resp.json();
  const content = data.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error("OpenAI returned empty content");
  return content;
}

async function insertMessage(env, convId, role, content, sender, visibleAt) {
  const t = now();
  await env.DB.prepare(
    "INSERT INTO messages (conversation_id, role, content, sender, created_at, visible_at) " +
      "VALUES (?, ?, ?, ?, ?, ?)"
  )
    .bind(convId, role, content, sender, t, visibleAt)
    .run();
}

// ---- auth ------------------------------------------------------------------

function isResearcher(request, env) {
  const pw = request.headers.get("x-researcher-auth");
  return pw && env.RESEARCHER_PASSWORD && pw === env.RESEARCHER_PASSWORD;
}

// ---- participant API -------------------------------------------------------

async function handleParticipantGet(request, env) {
  const url = new URL(request.url);
  const c = url.searchParams.get("c");
  const after = parseInt(url.searchParams.get("after") || "0", 10) || 0;
  if (!c) return json({ error: "missing conversation" }, 400);

  const conv = await env.DB.prepare("SELECT id FROM conversations WHERE id = ?")
    .bind(c)
    .first();
  if (!conv) return json({ error: "not found" }, 404);

  const t = now();
  const msgs = await env.DB.prepare(
    "SELECT id, role, content, created_at FROM messages " +
      "WHERE conversation_id = ? AND id > ? AND visible_at <= ? ORDER BY id ASC"
  )
    .bind(c, after, t)
    .all();

  return json({ messages: msgs.results });
}

async function handleParticipantPost(request, env) {
  const body = await request.json().catch(() => ({}));
  const c = body.c;
  const content = (body.content || "").toString().trim();
  if (!c || !content) return json({ error: "missing fields" }, 400);
  if (content.length > 4000) return json({ error: "message too long" }, 400);

  const conv = await env.DB.prepare(
    "SELECT id, mode, system_prompt FROM conversations WHERE id = ?"
  )
    .bind(c)
    .first();
  if (!conv) return json({ error: "not found" }, 404);

  await insertMessage(env, c, "user", content, "participant", now());

  if (conv.mode === "ai") {
    try {
      const reply = await generateAiReply(env, conv);
      const visibleAt = now() + replyDelayMs(reply);
      await insertMessage(env, c, "assistant", reply, "ai", visibleAt);
      return json({ ok: true });
    } catch (err) {
      console.error("AI reply failed:", err.message);
      // Fall through: researcher can still intervene manually.
      return json({ ok: true, aiError: true });
    }
  }

  return json({ ok: true });
}

// ---- researcher API --------------------------------------------------------

async function handleResearcher(request, env, path) {
  if (path === "/api/researcher/login") {
    const body = await request.json().catch(() => ({}));
    if (body.password && body.password === env.RESEARCHER_PASSWORD) {
      return json({ ok: true });
    }
    return json({ error: "invalid password" }, 401);
  }

  if (!isResearcher(request, env)) return json({ error: "unauthorized" }, 401);

  // ---- list conversations ----
  if (path === "/api/researcher/conversations" && request.method === "GET") {
    const rows = await env.DB.prepare(
      `SELECT c.id, c.mode, c.label, c.created_at,
              (SELECT COUNT(*) FROM messages m WHERE m.conversation_id = c.id) AS msg_count,
              (SELECT content FROM messages m WHERE m.conversation_id = c.id ORDER BY id DESC LIMIT 1) AS last_content,
              (SELECT role FROM messages m WHERE m.conversation_id = c.id ORDER BY id DESC LIMIT 1) AS last_role,
              (SELECT created_at FROM messages m WHERE m.conversation_id = c.id ORDER BY id DESC LIMIT 1) AS last_at
       FROM conversations c ORDER BY COALESCE(last_at, c.created_at) DESC`
    ).all();
    return json({ conversations: rows.results });
  }

  // ---- full conversation (with sender audit) ----
  if (path === "/api/researcher/conversation" && request.method === "GET") {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const conv = await env.DB.prepare("SELECT * FROM conversations WHERE id = ?")
      .bind(id)
      .first();
    if (!conv) return json({ error: "not found" }, 404);
    const msgs = await env.DB.prepare(
      "SELECT id, role, content, sender, created_at, visible_at FROM messages " +
        "WHERE conversation_id = ? ORDER BY id ASC"
    )
      .bind(id)
      .all();
    return json({ conversation: conv, messages: msgs.results });
  }

  // ---- reply as Coach Alex (human) ----
  if (path === "/api/researcher/reply" && request.method === "POST") {
    const body = await request.json().catch(() => ({}));
    const id = body.id;
    const content = (body.content || "").toString().trim();
    if (!id || !content) return json({ error: "missing fields" }, 400);
    const conv = await env.DB.prepare("SELECT id FROM conversations WHERE id = ?")
      .bind(id)
      .first();
    if (!conv) return json({ error: "not found" }, 404);
    await insertMessage(env, id, "assistant", content, "researcher", now());
    return json({ ok: true });
  }

  // ---- create invite ----
  if (path === "/api/researcher/invite" && request.method === "POST") {
    const body = await request.json().catch(() => ({}));
    const mode = body.mode === "human" ? "human" : "ai";
    const label = (body.label || "").toString().slice(0, 200) || null;
    const systemPrompt = body.system_prompt
      ? body.system_prompt.toString()
      : null;
    const id = crypto.randomUUID();
    await env.DB.prepare(
      "INSERT INTO conversations (id, mode, label, system_prompt, created_at) VALUES (?, ?, ?, ?, ?)"
    )
      .bind(id, mode, label, systemPrompt, now())
      .run();
    return json({ ok: true, id, mode });
  }

  // ---- change mode / label / per-chat prompt ----
  if (path === "/api/researcher/update-conversation" && request.method === "POST") {
    const body = await request.json().catch(() => ({}));
    const id = body.id;
    if (!id) return json({ error: "missing id" }, 400);
    const conv = await env.DB.prepare("SELECT id FROM conversations WHERE id = ?")
      .bind(id)
      .first();
    if (!conv) return json({ error: "not found" }, 404);
    if (body.mode === "ai" || body.mode === "human") {
      await env.DB.prepare("UPDATE conversations SET mode = ? WHERE id = ?")
        .bind(body.mode, id)
        .run();
    }
    if (typeof body.label === "string") {
      await env.DB.prepare("UPDATE conversations SET label = ? WHERE id = ?")
        .bind(body.label || null, id)
        .run();
    }
    if (typeof body.system_prompt === "string") {
      await env.DB.prepare(
        "UPDATE conversations SET system_prompt = ? WHERE id = ?"
      )
        .bind(body.system_prompt || null, id)
        .run();
    }
    return json({ ok: true });
  }

  // ---- live-operations analytics (reply queue + funnel) ----
  if (path === "/api/researcher/analytics" && request.method === "GET") {
    const COMPLETED_TURNS = 3; // participant replies that count as "engaged"

    const funnel = await env.DB.prepare(
      `SELECT
         (SELECT COUNT(*) FROM conversations) AS invites,
         (SELECT COUNT(DISTINCT conversation_id) FROM messages WHERE sender = 'participant') AS started,
         (SELECT COUNT(*) FROM (
            SELECT conversation_id FROM messages WHERE sender = 'participant'
            GROUP BY conversation_id HAVING COUNT(*) >= ${COMPLETED_TURNS}
         )) AS completed`
    ).first();

    // Conversations whose most recent message is from the participant => waiting.
    const rows = await env.DB.prepare(
      `SELECT c.id, c.mode, c.label,
              (SELECT role       FROM messages m WHERE m.conversation_id = c.id ORDER BY id DESC LIMIT 1) AS last_role,
              (SELECT content    FROM messages m WHERE m.conversation_id = c.id ORDER BY id DESC LIMIT 1) AS last_content,
              (SELECT created_at FROM messages m WHERE m.conversation_id = c.id ORDER BY id DESC LIMIT 1) AS last_at
       FROM conversations c`
    ).all();

    const t = now();
    const queue = rows.results
      .filter((r) => r.last_role === "user")
      .map((r) => ({
        id: r.id,
        mode: r.mode,
        label: r.label,
        last_content: r.last_content,
        waiting_ms: t - r.last_at,
      }))
      .sort((a, b) => b.waiting_ms - a.waiting_ms);

    return json({
      funnel: {
        invites: funnel?.invites || 0,
        started: funnel?.started || 0,
        completed: funnel?.completed || 0,
        completed_threshold: COMPLETED_TURNS,
      },
      queue,
    });
  }

  // ---- global config (system prompt + model) ----
  if (path === "/api/researcher/config" && request.method === "GET") {
    return json({
      system_prompt: await getConfig(env, "system_prompt"),
      model: (await getConfig(env, "model")) || env.OPENAI_MODEL || "gpt-4o",
    });
  }
  if (path === "/api/researcher/config" && request.method === "POST") {
    const body = await request.json().catch(() => ({}));
    if (typeof body.system_prompt === "string")
      await setConfig(env, "system_prompt", body.system_prompt);
    if (typeof body.model === "string" && body.model.trim())
      await setConfig(env, "model", body.model.trim());
    return json({ ok: true });
  }

  // ---- export all protocols ----
  if (path === "/api/researcher/export" && request.method === "GET") {
    const url = new URL(request.url);
    const format = url.searchParams.get("format") || "json";
    const convs = await env.DB.prepare(
      "SELECT * FROM conversations ORDER BY created_at ASC"
    ).all();
    const allMsgs = await env.DB.prepare(
      "SELECT * FROM messages ORDER BY conversation_id ASC, id ASC"
    ).all();

    if (format === "csv") {
      const esc = (v) =>
        `"${(v === null || v === undefined ? "" : String(v)).replace(/"/g, '""')}"`;
      const convMode = {};
      convs.results.forEach((c) => (convMode[c.id] = c));
      const header = [
        "conversation_id",
        "mode",
        "label",
        "message_id",
        "role",
        "sender",
        "content",
        "created_at_iso",
      ];
      const lines = [header.map(esc).join(",")];
      for (const m of allMsgs.results) {
        const c = convMode[m.conversation_id] || {};
        lines.push(
          [
            m.conversation_id,
            c.mode,
            c.label,
            m.id,
            m.role,
            m.sender,
            m.content,
            new Date(m.created_at).toISOString(),
          ]
            .map(esc)
            .join(",")
        );
      }
      // Prefix a UTF-8 BOM so Excel reads umlauts (ä/ö/ü/ß) correctly instead
      // of falling back to the legacy ANSI codepage.
      return new Response("﻿" + lines.join("\r\n"), {
        headers: {
          "content-type": "text/csv; charset=utf-8",
          "content-disposition": 'attachment; filename="coach-alex-export.csv"',
        },
      });
    }

    // JSON: conversations with nested messages
    const byConv = {};
    convs.results.forEach((c) => (byConv[c.id] = { ...c, messages: [] }));
    for (const m of allMsgs.results) {
      if (byConv[m.conversation_id]) byConv[m.conversation_id].messages.push(m);
    }
    return new Response(
      JSON.stringify(
        { exported_at: new Date().toISOString(), conversations: Object.values(byConv) },
        null,
        2
      ),
      {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "content-disposition": 'attachment; filename="coach-alex-export.json"',
        },
      }
    );
  }

  return json({ error: "not found" }, 404);
}

// ---- router ----------------------------------------------------------------

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    try {
      if (path === "/api/chat" && request.method === "GET")
        return await handleParticipantGet(request, env);
      if (path === "/api/chat" && request.method === "POST")
        return await handleParticipantPost(request, env);
      if (path.startsWith("/api/researcher/"))
        return await handleResearcher(request, env, path);
      if (path.startsWith("/api/")) return json({ error: "not found" }, 404);
    } catch (err) {
      console.error("Unhandled error:", err.stack || err.message);
      return json({ error: "server error" }, 500);
    }

    // Non-API paths -> static assets (participant page, researcher dashboard).
    const asset = await env.ASSETS.fetch(request);
    // Guarantee a UTF-8 charset on HTML so umlauts (ä/ö/ü/ß) always render,
    // regardless of how the asset layer labels the response.
    const ct = asset.headers.get("content-type") || "";
    if (ct.startsWith("text/html") && !/charset/i.test(ct)) {
      const headers = new Headers(asset.headers);
      headers.set("content-type", "text/html; charset=utf-8");
      return new Response(asset.body, { status: asset.status, headers });
    }
    return asset;
  },
};
