# Coach Alex — Researcher Guide

This is the practical guide for running the study. It assumes the app is already
deployed (see [README.md](README.md) for setup). No technical knowledge needed.

---

## The idea in one paragraph

Every participant chats with **"Coach Alex"** through a private link. They never
know whether "Alex" is an **AI** (OpenAI) or **you, a human researcher** typing
replies. You control which it is per participant, and you can switch mid-study.
All conversations are saved and downloadable.

---

## 1. Log in

1. Open the dashboard: **`<your-app-url>/researcher`**
   (e.g. `https://coach-alex.your-name.workers.dev/researcher`).
2. Enter the **researcher password** (given to you by whoever deployed the app).

You'll land on the dashboard: a **sidebar of all conversations** on the left, and
the **open conversation** on the right.

Your login is remembered until you close the browser tab.

---

## 2. The Overview (your daily dashboard)

The **Overview** (top of the sidebar) is your live command center — check it
regularly while the study is running:

- **Participant funnel** — three numbers with conversion rates between them:
  - **Invites created** — links you've generated.
  - **Chats started** — participants who sent at least one message.
  - **Engaged** — participants who sent 3+ messages (a real conversation, not a
    bounce). The gaps between the numbers show your dropout.
- **Waiting for a reply** — the queue of chats where the participant sent the
  last message and **no one has answered yet**, sorted longest-wait-first. This
  is what you act on: click any row to jump straight into that conversation and
  reply. (Human chats appear here normally; an AI chat only appears if the AI
  failed to answer — a signal to step in.) A red badge on the Overview item
  shows how many people are waiting.

The Overview refreshes automatically every few seconds.

---

## 3. Create an invite link for a participant

Each participant needs their own link. To make one:

1. Click **`+ New invite`** (top-left).
2. Choose the **mode**:
   - **AI** — Coach Alex is answered automatically by the LLM.
   - **Human** — *you* answer, live, from this dashboard.
3. **Label** (optional) — a note only you see, e.g. `Participant 07` or
   `Condition A`. This makes chats easy to find in the sidebar.
4. **System prompt override** (optional) — leave blank to use the global prompt
   (see §6). Fill it in only if *this one participant* should get a different
   Coach Alex persona/instructions.
5. Click **Create link**. A link appears — click **Copy** and send it to the
   participant (email, study platform, etc.).

The participant just opens the link and starts chatting. They see only a clean
chat window titled **Coach Alex** — no login, no AI branding, nothing revealing
the mode.

> **Tip:** create one link per participant. Don't reuse a link across people —
> each link is one continuous conversation.

**Lost a link / need to resend it?** Open the conversation in the sidebar — its
invite link is shown in the conversation header (under the label) with a
**Copy** button. Every link stays valid, so you can resend it at any time and
the participant continues right where they left off.

---

## 4. AI mode — how it behaves

- When a participant sends a message, Coach Alex replies automatically.
- Replies **do not stream** and arrive after a **natural, human-like delay**
  (a thinking/reading pause plus typing time that scales with the reply length —
  up to about a minute for longer replies).
- As soon as the participant sends a message, they see a **"typing…" indicator**
  that stays until the reply appears. This is shown in **both** AI and human mode
  (in human mode it stays until *you* reply), so it never reveals which one is
  answering.
- You don't have to do anything — but you can watch the conversation live in the
  dashboard, and you can **jump in** at any time (see §6).

---

## 5. Human mode — answering as Coach Alex

- Click a **human** conversation in the sidebar (mode tag shows **human**).
- Read the participant's messages, type your reply in the box at the bottom, and
  press **Enter** (or click **Send**). Your reply appears to the participant as a
  normal Coach Alex message.
- The dashboard refreshes every couple of seconds, so new participant messages
  show up automatically. Keep the tab open while a session is active.

> The participant cannot tell a human reply from an AI reply — both appear
> identically as "Coach Alex".

---

## 6. Switching a conversation between AI and Human

Open any conversation and use the **AI / Human toggle** in the top-right of the
conversation header.

- Switch a chat to **Human** to take over from the AI (e.g. the AI is
  struggling, or your protocol calls for a handoff).
- Switch back to **AI** to hand control back to the LLM.

The switch is immediate and invisible to the participant.

---

## 7. Configuring Coach Alex (global system prompt & model)

Click **Settings** (top-left) to set, for *all* AI conversations:

- **Global system prompt** — the instructions that define Coach Alex's persona,
  tone, and rules. This is used by every AI chat that doesn't have its own
  per-chat override (§2).
- **OpenAI model** — which model answers (default `gpt-4o`).

Click **Save**. Changes apply to the *next* AI reply in every conversation.

> **Reminder:** keep an instruction like *"Do not reveal that you are an AI"* in
> the prompt so the blind condition holds.

---

## 8. Downloading the data

At any point, from the sidebar:

- **Export JSON** — full structured export: every conversation with all messages,
  including the internal **`sender`** field that records whether each Coach Alex
  reply was `ai` or `researcher`. Best for analysis / archiving.
- **Export CSV** — one row per message (conversation id, mode, label, role,
  sender, content, timestamp). Best for spreadsheets / stats software.

Both downloads cover **all** conversations at once. The `sender` field is your
ground truth for who actually produced each reply — participants never see it.

---

## 9. Reading a conversation in the dashboard

In the open conversation, each message shows a small caption with:

- **who sent it** — `participant`, `ai`, or `researcher`
- **`scheduled`** — appears on an AI reply that has been generated but is still
  inside its natural delay (not yet shown to the participant).
- the **time** it was created.

Participant messages appear on the left; Coach Alex messages on the right.

---

## Quick reference

| I want to… | Do this |
|---|---|
| See who's waiting / study progress | Open **Overview** (red badge = people waiting) |
| Add a participant | **+ New invite** → pick mode → **Copy** the link |
| Resend a participant's link | Open their chat → **Copy** next to the link in the header |
| Let the AI handle a chat | Create the invite in **AI** mode |
| Answer personally | Create the invite in **Human** mode, then reply in the box |
| Take over from the AI | Open the chat → flip the header toggle to **Human** |
| Change Alex's persona for everyone | **Settings** → edit global prompt → **Save** |
| Change Alex's persona for one person | Set a **System prompt override** when creating that invite |
| Get the data | **Export JSON** or **Export CSV** |
| Know if a reply was AI or human | Look at the **`sender`** field in the export (or the caption in the chat) |

---

## Good practice for a clean study

- **One link per participant.** Don't share links between people.
- **Decide mode before sending** the link; switch only if your protocol allows.
- **Keep the "don't reveal you're an AI" instruction** in the system prompt.
- **Export the data** when the study ends (and keep a backup) — it lives in the
  Cloudflare database until then.
- If replying in human mode, **keep the tab open** during active sessions so you
  see new messages promptly.
