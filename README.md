# Coach Alex — blind chat study tool

Test persons chat with **"Coach Alex"** without knowing whether the replies come
from an LLM or a human researcher. One page for participants (invite-link only),
one dashboard for researchers.

- **German UI**, no streaming, no AI tells. LLM replies arrive after a natural,
  human-like delay (reading the incoming message + thinking pause + typing time
  at a realistic ~50 WPM, scaled to length, up to ~75 s),
  implemented via a `visible_at` timestamp: the reply is generated immediately but
  only shown once that time passes.
- **"typing…" indicator in both modes.** As soon as the participant sends a
  message, an animated typing bubble appears and stays until a reply (AI *or*
  researcher) arrives — identical in both modes, so it never reveals which one is
  answering. It's driven by "is the latest message still the participant's?", so
  it also reappears correctly after a page reload.
- **Participant page** (`/?c=<token>`): a single clean chat. Only "Coach Alex" is
  ever shown.
- **Researcher dashboard** (`/researcher`, password-protected): sidebar of all
  chats, reply to human-mode chats, create invite links (choose **AI** or
  **human** mode + optional per-chat system prompt), view/copy any existing
  chat's invite link (to resend it), switch a chat's mode live, edit the global
  system prompt / model, and download full protocols (JSON + CSV).

Stack: a single **Cloudflare Worker** (API + static pages) + **D1** (SQLite) for
persistence. Front end is plain HTML/JS — no build step.

> **Running the study?** See the non-technical
> **[Researcher Guide](RESEARCHER_GUIDE.md)** for how to create invite links,
> answer as Coach Alex, switch AI/human mode, and download the data.

## Local development

```bash
pnpm install              # (or npm install)
pnpm run db:local         # create/upgrade the local D1 schema
pnpm dev                  # http://localhost:8787
```

> **pnpm note:** pnpm blocks package build scripts by default. This repo
> allowlists the ones wrangler needs (`esbuild`, `sharp`, `workerd`) in
> [pnpm-workspace.yaml](pnpm-workspace.yaml). If a fresh `pnpm install` still
> reports `ERR_PNPM_IGNORED_BUILDS`, run `pnpm approve-builds --all` once.

- Participant: open the link the dashboard generates, e.g. `http://localhost:8787/?c=<token>`
- Researcher: `http://localhost:8787/researcher`

Local secrets live in `.dev.vars` (git-ignored):

```
OPENAI_API_KEY=sk-...
RESEARCHER_PASSWORD=coach-alex-2026
```

## Deploy to Cloudflare

1. **Log in** (one-time):
   ```bash
   npx wrangler login
   ```
2. **Create the D1 database** and paste the returned `database_id` into
   `wrangler.toml` (replacing the placeholder):
   ```bash
   npx wrangler d1 create alex-db
   ```
3. **Create the schema** on the remote DB:
   ```bash
   npm run db:remote
   ```
4. **Set the secrets** (not stored in the repo):
   ```bash
   npx wrangler secret put OPENAI_API_KEY
   npx wrangler secret put RESEARCHER_PASSWORD
   ```
5. **Deploy**:
   ```bash
   npm run deploy
   ```

Wrangler prints the live URL (e.g. `https://coach-alex.<subdomain>.workers.dev`).
The researcher dashboard is at `/researcher`; hand out participant links from
there.

## Configuration

- **Global system prompt & OpenAI model**: edit in the dashboard → *Settings*
  (stored in D1). Default model is `gpt-4o` (also set in `wrangler.toml` as a
  fallback).
- **Per-chat system prompt**: set optionally when creating an invite; blank uses
  the global prompt.
- **Delay tuning**: `replyDelayMs()` in [src/index.js](src/index.js) (base pause,
  per-character typing speed, jitter, min/max clamp).

## Data model (D1)

- `conversations` — one per invite link (`id` = token, `mode` = `ai`|`human`,
  `label`, optional `system_prompt`).
- `messages` — `role` (`user`/`assistant`), `content`, `sender`
  (`participant`/`ai`/`researcher`, internal audit only), `visible_at`.
- `config` — key/value (`system_prompt`, `model`).

Participants only ever receive `role` + `content` + timestamp; the `sender` audit
field (which distinguishes AI vs. researcher) is exposed only in the researcher
dashboard and exports.

## Notes

- Both pages poll every ~2.5s (no websockets — keeps it simple and cheap).
- Auth is a single shared researcher password sent as a header — sufficient for a
  one-shot study. Use a strong password.
- Export endpoints (`/api/researcher/export?format=json|csv`) contain the full
  audit trail including which replies were AI vs. human.
