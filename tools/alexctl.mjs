#!/usr/bin/env node
// alexctl — drive Coach Alex conversations over the JSON API.
//
// Used by the prompt-hardening test runs (see testplan.md). Talks to the same
// endpoints the participant page and researcher console use, so a scripted
// session is behaviourally identical to a real one.
//
// Replies are read back through the researcher endpoint rather than the
// participant one: /api/chat hides a message until its visible_at (the
// human-like typing delay, up to 60s), which is pure presentation and would
// otherwise add hours of pure waiting across a run. The content is the same.
//
// Auth: RESEARCHER_PASSWORD from the environment, else from .dev.vars.
//
//   node tools/alexctl.mjs invite  --label "…" [--prompt-file prompts/x.md]
//   node tools/alexctl.mjs send    <id> "<text>"
//   node tools/alexctl.mjs read    <id> [--json]
//   node tools/alexctl.mjs list    [--prefix ZZ-PROMPTTEST]
//   node tools/alexctl.mjs cleanup --prefix ZZ-PROMPTTEST [--yes]

import { readFileSync, existsSync } from "node:fs";

const BASE = process.env.ALEX_BASE || "https://coach-alex.kaiwerther.workers.dev";

function password() {
  if (process.env.RESEARCHER_PASSWORD) return process.env.RESEARCHER_PASSWORD;
  if (existsSync(".dev.vars")) {
    const m = readFileSync(".dev.vars", "utf8").match(/^RESEARCHER_PASSWORD=(.*)$/m);
    if (m) return m[1].trim();
  }
  throw new Error("No RESEARCHER_PASSWORD in env or .dev.vars");
}

const AUTH = { "x-researcher-auth": password(), "content-type": "application/json" };

async function api(path, { method = "GET", body, timeout = 120000 } = {}) {
  const r = await fetch(BASE + path, {
    method,
    headers: AUTH,
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(timeout),
  });
  const text = await r.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`${method} ${path} -> ${r.status}, non-JSON: ${text.slice(0, 300)}`);
  }
  if (!r.ok) throw new Error(`${method} ${path} -> ${r.status}: ${text.slice(0, 300)}`);
  return data;
}

const arg = (flag, dflt = null) => {
  const i = process.argv.indexOf(flag);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : dflt;
};

// ---- commands --------------------------------------------------------------

async function invite() {
  const label = arg("--label");
  if (!label) throw new Error("--label is required");
  const promptFile = arg("--prompt-file");
  // Per-conversation override: the global config.system_prompt stays untouched,
  // so live participants are never exposed to an in-progress prompt revision.
  const system_prompt = promptFile ? readFileSync(promptFile, "utf8") : null;
  const res = await api("/api/researcher/invite", {
    method: "POST",
    body: { mode: "ai", label, system_prompt },
  });
  console.log(JSON.stringify({ id: res.id, label, link: `${BASE}/?c=${res.id}` }));
}

async function send() {
  const id = process.argv[3];
  const content = process.argv[4];
  if (!id || !content) throw new Error("usage: send <id> <text>");

  const before = (await api(`/api/researcher/conversation?id=${id}`)).messages;
  const lastId = before.length ? before[before.length - 1].id : 0;

  // The POST only resolves once the reply has been generated and stored, so
  // there is normally nothing left to wait for afterwards.
  const post = await api("/api/chat", { method: "POST", body: { c: id, content } });

  let msgs = (await api(`/api/researcher/conversation?id=${id}`)).messages;
  let reply = msgs.filter((m) => m.id > lastId && m.role === "assistant").pop();

  // Self-heal path: generation failed inside the POST. The worker retries it
  // on the next participant poll, AI_STALL_MS (60s) after the user message.
  if (!reply && post.aiError) {
    for (let i = 0; i < 12 && !reply; i++) {
      await new Promise((r) => setTimeout(r, 10000));
      await fetch(`${BASE}/api/chat?c=${id}&after=0`).catch(() => {}); // trigger self-heal
      msgs = (await api(`/api/researcher/conversation?id=${id}`)).messages;
      reply = msgs.filter((m) => m.id > lastId && m.role === "assistant").pop();
    }
  }

  if (!reply) {
    console.log(JSON.stringify({ error: "no reply", aiError: !!post.aiError }));
    process.exitCode = 2;
    return;
  }
  console.log(JSON.stringify({ turn: msgs.filter((m) => m.role === "user").length, reply: reply.content }));
}

async function read() {
  const id = process.argv[3];
  if (!id) throw new Error("usage: read <id>");
  const { conversation, messages } = await api(`/api/researcher/conversation?id=${id}`);
  if (process.argv.includes("--json")) {
    console.log(JSON.stringify({ conversation, messages }, null, 2));
    return;
  }
  console.log(`# ${conversation.label || conversation.id}\n`);
  let t = 0;
  for (const m of messages) {
    if (m.role === "user") t++;
    const who = m.role === "user" ? `Teilnehmer [${t}]` : "Coach Alex";
    console.log(`**${who}:** ${m.content}\n`);
  }
}

async function list() {
  const prefix = arg("--prefix", "ZZ-PROMPTTEST");
  const { conversations } = await api("/api/researcher/conversations");
  const hits = conversations.filter((c) => (c.label || "").startsWith(prefix));
  for (const c of hits) console.log(`${c.id}\t${c.message_count ?? "?"}\t${c.label}`);
  console.error(`${hits.length} of ${conversations.length} match "${prefix}"`);
}

async function cleanup() {
  const prefix = arg("--prefix", "ZZ-PROMPTTEST");
  if (!prefix) throw new Error("--prefix is required; refusing to delete everything");
  const { conversations } = await api("/api/researcher/conversations");
  const ids = conversations.filter((c) => (c.label || "").startsWith(prefix)).map((c) => c.id);
  if (!ids.length) return console.error(`nothing matches "${prefix}"`);
  if (!process.argv.includes("--yes")) {
    console.error(`would delete ${ids.length} conversation(s) with label prefix "${prefix}". Re-run with --yes.`);
    for (const c of conversations.filter((x) => ids.includes(x.id))) console.error(`  ${c.label}`);
    return;
  }
  await api("/api/researcher/delete-conversation", { method: "POST", body: { ids } });
  console.error(`deleted ${ids.length}`);
}

const CMDS = { invite, send, read, list, cleanup };
const cmd = CMDS[process.argv[2]];
if (!cmd) {
  console.error(`usage: alexctl <${Object.keys(CMDS).join("|")}>`);
  process.exit(1);
}
cmd().catch((e) => {
  console.error(String(e.message || e));
  process.exit(1);
});
