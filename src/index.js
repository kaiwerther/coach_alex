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
// Human-like pause that scales with reply length: short replies arrive after
// a few seconds, long ones take proportionally longer (reading + typing time).
// Clamped so a participant never waits absurdly long.
function replyDelayMs(text) {
  const think = 1500 + Math.random() * 1500;   // reading / thinking pause
  const perChar = 55 * (0.85 + Math.random() * 0.3); // typing speed w/ jitter
  const d = think + text.length * perChar;
  return Math.min(Math.max(d, 2500), 60000);
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
  // so we always use the model's default. Bounded to 45s so a hung attempt is
  // over before the 60s self-heal window can start a second one.
  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({ model, messages }),
    signal: AbortSignal.timeout(45000),
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

// Generate a reply and store it. The visible_at delay is anchored to the
// user's message time, so generation time does not stack on top of the
// artificial delay — and a self-healed (late) reply becomes visible at once.
async function generateAndStoreReply(env, conv, userMsgAt) {
  try {
    const reply = await generateAiReply(env, conv);
    const visibleAt = Math.max(now(), userMsgAt + replyDelayMs(reply));
    await insertMessage(env, conv.id, "assistant", reply, "ai", visibleAt);
    return true;
  } catch (err) {
    console.error("AI reply failed:", err.message);
    // The next participant poll self-heals this after AI_STALL_MS.
    return false;
  }
}

// A user message in an 'ai' conversation with no reply after this long is
// considered stalled (normal generation takes a few seconds) and is retried.
const AI_STALL_MS = 60000;

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

async function handleParticipantGet(request, env, ctx) {
  const url = new URL(request.url);
  const c = url.searchParams.get("c");
  const after = parseInt(url.searchParams.get("after") || "0", 10) || 0;
  if (!c) return json({ error: "missing conversation" }, 400);

  const conv = await env.DB.prepare(
    "SELECT id, mode, system_prompt FROM conversations WHERE id = ?"
  )
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

  // Self-heal: if the newest message (visible or not) is the participant's and
  // no reply appeared within AI_STALL_MS, the original generation died (client
  // disconnect mid-POST, API error, worker eviction …). Retry it here, guarded
  // by an atomic lock on ai_attempt_at so concurrent polls can't double-fire.
  if (conv.mode === "ai") {
    const last = await env.DB.prepare(
      "SELECT role, created_at FROM messages WHERE conversation_id = ? ORDER BY id DESC LIMIT 1"
    )
      .bind(c)
      .first();
    if (last && last.role === "user" && t - last.created_at > AI_STALL_MS) {
      const lock = await env.DB.prepare(
        "UPDATE conversations SET ai_attempt_at = ?1 " +
          "WHERE id = ?2 AND (ai_attempt_at IS NULL OR ai_attempt_at < ?3)"
      )
        .bind(t, c, t - AI_STALL_MS)
        .run();
      if (lock.meta.changes === 1) {
        console.log("Self-heal: regenerating stalled reply for", c);
        ctx.waitUntil(generateAndStoreReply(env, conv, last.created_at));
      }
    }
  }

  return json({ messages: msgs.results });
}

async function handleParticipantPost(request, env, ctx) {
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

  const userMsgAt = now();
  await insertMessage(env, c, "user", content, "participant", userMsgAt);

  if (conv.mode === "ai") {
    // Stamp the attempt so the poll-driven self-heal waits AI_STALL_MS before
    // assuming this generation died.
    await env.DB.prepare("UPDATE conversations SET ai_attempt_at = ? WHERE id = ?")
      .bind(userMsgAt, c)
      .run();
    // waitUntil keeps the generation alive even if the participant's phone
    // drops the connection mid-request — the reply still gets stored.
    const gen = generateAndStoreReply(env, conv, userMsgAt);
    ctx.waitUntil(gen);
    const ok = await gen;
    return json(ok ? { ok: true } : { ok: true, aiError: true });
  }

  return json({ ok: true });
}

// ---- docx export -----------------------------------------------------------
// Workers have no zip/docx library, but a .docx is just a ZIP of XML parts —
// so we hand-roll a minimal OPC package (3 parts) with a stored ZIP writer.

// Standard CRC-32 (polynomial 0xEDB88320) with a precomputed table.
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(data) {
  let c = 0xffffffff;
  for (let i = 0; i < data.length; i++)
    c = CRC_TABLE[(c ^ data[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// Minimal ZIP writer: method 0 (stored), UTF-8 names (general purpose bit 11),
// zeroed DOS timestamps. entries = [{ name, data: Uint8Array }].
function buildZip(entries) {
  const enc = new TextEncoder();
  const u16 = (v) => [v & 0xff, (v >>> 8) & 0xff];
  const u32 = (v) => [v & 0xff, (v >>> 8) & 0xff, (v >>> 16) & 0xff, (v >>> 24) & 0xff];
  const locals = [];
  const central = [];
  let offset = 0;

  for (const { name, data } of entries) {
    const n = enc.encode(name);
    const crc = crc32(data);
    // Shared field block: version needed (20), flags, method, time, date,
    // crc, sizes (stored: compressed == uncompressed), name/extra lengths.
    const meta = [
      ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0),
      ...u32(crc), ...u32(data.length), ...u32(data.length),
      ...u16(n.length), ...u16(0),
    ];
    locals.push(new Uint8Array([...u32(0x04034b50), ...meta, ...n]), data);
    central.push(new Uint8Array([
      ...u32(0x02014b50), ...u16(20), ...meta,
      ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(offset), ...n,
    ]));
    offset += 30 + n.length + data.length;
  }

  const cdSize = central.reduce((s, c) => s + c.length, 0);
  const eocd = new Uint8Array([
    ...u32(0x06054b50), ...u16(0), ...u16(0),
    ...u16(entries.length), ...u16(entries.length),
    ...u32(cdSize), ...u32(offset), ...u16(0),
  ]);
  const out = new Uint8Array(offset + cdSize + eocd.length);
  let p = 0;
  for (const c of [...locals, ...central, eocd]) { out.set(c, p); p += c.length; }
  return out;
}

const escXml = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[c]));

// Build the .docx for one conversation: bold title, then per message a bold
// speaker prefix + normal content, an empty paragraph between messages, no
// timestamps. Newlines inside a message become <w:br/> within its run.
function buildDocx(conversation, messages) {
  const XML_DECL = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
  const text = (s) =>
    s.split(/\r?\n/)
      .map((part) => `<w:t xml:space="preserve">${escXml(part)}</w:t>`)
      .join("<w:br/>");
  const SPEAKER = { user: "Teilnehmer", assistant: "Coach Alex" };

  const paras = [
    `<w:p><w:r><w:rPr><w:b/><w:sz w:val="32"/></w:rPr>${text(conversation.label || "Ohne Bezeichnung")}</w:r></w:p>`,
    "<w:p/>",
  ];
  messages.forEach((m, i) => {
    if (i) paras.push("<w:p/>"); // requested blank line between messages
    const who = SPEAKER[m.role] || m.role;
    paras.push(
      `<w:p><w:r><w:rPr><w:b/></w:rPr>${text(who + ":")}</w:r>` +
        `<w:r>${text(" " + m.content)}</w:r></w:p>`
    );
  });

  const documentXml =
    XML_DECL +
    '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
    `<w:body>${paras.join("")}</w:body></w:document>`;
  const contentTypes =
    XML_DECL +
    '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
    '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
    '<Default Extension="xml" ContentType="application/xml"/>' +
    '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
    "</Types>";
  const rels =
    XML_DECL +
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
    '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
    "</Relationships>";

  const enc = new TextEncoder();
  return buildZip([
    { name: "[Content_Types].xml", data: enc.encode(contentTypes) },
    { name: "_rels/.rels", data: enc.encode(rels) },
    { name: "word/document.xml", data: enc.encode(documentXml) },
  ]);
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

  // ---- delete conversations (single {id} or bulk {ids}, incl. messages) ----
  if (path === "/api/researcher/delete-conversation" && request.method === "POST") {
    const body = await request.json().catch(() => ({}));
    const ids = Array.isArray(body.ids) ? body.ids : body.id ? [body.id] : [];
    if (!ids.length || !ids.every((x) => typeof x === "string" && x))
      return json({ error: "missing id" }, 400);
    // Single-id calls keep their 404; bulk treats unknown ids as no-ops.
    if (!Array.isArray(body.ids)) {
      const conv = await env.DB.prepare("SELECT id FROM conversations WHERE id = ?")
        .bind(ids[0])
        .first();
      if (!conv) return json({ error: "not found" }, 404);
    }
    const ph = ids.map(() => "?").join(",");
    await env.DB.batch([
      env.DB.prepare(`DELETE FROM messages WHERE conversation_id IN (${ph})`).bind(...ids),
      env.DB.prepare(`DELETE FROM conversations WHERE id IN (${ph})`).bind(...ids),
    ]);
    return json({ ok: true, deleted: ids.length });
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

  // ---- export protocols (all, or selected ones via ?id= / ?ids=a,b,c) ----
  if (path === "/api/researcher/export" && request.method === "GET") {
    const url = new URL(request.url);
    const format = url.searchParams.get("format") || "json";
    const ids = (url.searchParams.get("ids") || url.searchParams.get("id") || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    let convs, allMsgs;
    if (ids.length) {
      const ph = ids.map(() => "?").join(",");
      convs = await env.DB.prepare(
        `SELECT * FROM conversations WHERE id IN (${ph}) ORDER BY created_at ASC`
      )
        .bind(...ids)
        .all();
      if (!convs.results.length) return json({ error: "not found" }, 404);
      allMsgs = await env.DB.prepare(
        `SELECT * FROM messages WHERE conversation_id IN (${ph}) ` +
          "ORDER BY conversation_id ASC, id ASC"
      )
        .bind(...ids)
        .all();
    } else {
      convs = await env.DB.prepare(
        "SELECT * FROM conversations ORDER BY created_at ASC"
      ).all();
      allMsgs = await env.DB.prepare(
        "SELECT * FROM messages ORDER BY conversation_id ASC, id ASC"
      ).all();
    }

    // Filename stem: full exports keep the generic name; a single conversation
    // gets its label slugified to [a-z0-9-] (or the id prefix when unlabeled),
    // several selected ones get a count.
    let stem = "coach-alex-export";
    if (ids.length && convs.results.length === 1) {
      const c = convs.results[0];
      const slug = (c.label || "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/^-+|-+$/g, "");
      stem = "coach-alex-" + (slug || c.id.slice(0, 8));
    } else if (ids.length) {
      stem = `coach-alex-export-${convs.results.length}-gespraeche`;
    }

    // Word export renders a chat layout, so it supports exactly one
    // conversation at a time.
    if (format === "docx") {
      if (ids.length !== 1)
        return json({ error: "docx export requires exactly one conversation" }, 400);
      return new Response(buildDocx(convs.results[0], allMsgs.results), {
        headers: {
          "content-type":
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "content-disposition": `attachment; filename="${stem}.docx"`,
        },
      });
    }

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
          "content-disposition": `attachment; filename="${stem}.csv"`,
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
          "content-disposition": `attachment; filename="${stem}.json"`,
        },
      }
    );
  }

  return json({ error: "not found" }, 404);
}

// ---- router ----------------------------------------------------------------

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    try {
      if (path === "/api/chat" && request.method === "GET")
        return await handleParticipantGet(request, env, ctx);
      if (path === "/api/chat" && request.method === "POST")
        return await handleParticipantPost(request, env, ctx);
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
