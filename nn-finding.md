# QA findings — Coach Alex study (pre-launch check, 2026-07-20)

Scope: introduction e-mail, pre-survey, participant chat (AI + human mode),
researcher side, post-survey. Tested end-to-end **in production**
(coach-alex.kaiwerther.workers.dev) with two fresh conversations:

- `ec10970f-0990-484c-8164-123dce8fedcf` — AI mode, full GROW session to conclusion
- `bcb6a1bb-13ab-4c28-8f1c-71cf26724e71` — human mode to conclusion, then switched to AI mid-chat

Both are labeled **"QA-TEST Claude … (bitte vor Studienstart loeschen)"**.
One test response was submitted to each survey under Studiencode **TN999**
(free-text answers prefixed "TESTANTWORT (QA-Durchlauf, bitte ignorieren)").
Please delete the two conversations and filter/delete TN999 before analysis.

Legend: 🔴 fix before first batch · 🟡 recommended · 🔵 minor / cosmetic

---

## 🔴 Must fix before the first batch

1. **Post-survey debrief is a literal placeholder.** The thank-you page after
   submitting the post-survey says: *"Und hier noch die Auflösung: Du warst in
   der Gruppe xxx!"* Two problems: (a) "xxx" was never filled in; (b) this
   MS-Forms thank-you text is **static — every respondent sees the same text**,
   so it can never show the participant their actual group. The consent page
   and the in-chat blinding statement both promise "Nach der Sitzung wirst du
   vollständig aufgeklärt" — that promise is currently impossible to keep via
   this mechanism. Fix: remove the "Auflösung" line from the form and debrief
   each participant individually (e.g. personal e-mail after the post-survey),
   or reword to "du erhältst die Auflösung per E-Mail".

2. **Studiencode ↔ chat transcript are not linked anywhere (by the system).**
   Surveys are keyed by Studiencode (TN069), but the chat is keyed only by the
   conversation UUID in the link. Nothing ties the two together except the
   invite's *Bezeichnung* (label). Convention: **always set the invite label to
   the Studiencode** and double-check per e-mail that code and link belong to
   the same person. ✔ Verified for the first invite: the link in the TN069
   e-mail resolves to the conversation labeled `TN069` (AI mode, 0 messages,
   global prompt) — keep exactly this discipline for every participant.

## 🟡 Recommended

3. **E-mail: participants should keep the chat open for the post-survey.**
   Post-survey Q6–Q8 ask them to copy passages out of the chat. The e-mail
   doesn't mention this; someone who closes the tab may think the chat is gone.
   (The link does stay valid and history reloads — tested — so a hint like
   "du kannst den Chat-Link jederzeit wieder öffnen" suffices.)

4. **E-mail placeholders "am: xx / um: xx Uhr"** — there is no safeguard against
   sending an e-mail with unfilled `xx` (exactly this happened with "Gruppe
   xxx" in the post-survey). A short per-e-mail checklist helps: date, time,
   code, link filled and mutually consistent.

5. **E-mail markdown asterisks.** `**Studiencode**` etc. render literally if the
   mail goes out as plain text. Send as formatted mail or drop the `**`.

6. **Only the Studiencode is required in both surveys.** Every scale — including
   the primary outcome (pre Q11 / post Q2–Q3) and the complete WAI / empathy /
   ATAI batteries — can be skipped. If that's not an ethics requirement, mark at
   least the outcome scales as required; otherwise expect missing data.

7. **No format check on the Studiencode field.** Free text; "TN69", "tn069",
   "TNO69" all pass, which breaks pre/post/chat linkage. MS Forms restrictions
   are limited, but at least add the expected format to the question text
   (e.g. "z. B. TN069").

8. **Consent forces the sensitive-data checkbox.** Q1 requires selecting *both*
   options ("Please select 2 options"), so someone unwilling to consent to
   Art. 9 processing cannot participate at all — if that's intended, fine, but
   for freely-given GDPR consent it would be cleaner to make the second box
   optional or explain that participation without it isn't possible.

9. **Silent failure on a broken chat link.** With an invalid `?c=` the page
   still shows "Sag Hallo 👋 / Schreibe eine Nachricht…" and an active
   composer; only the tiny header status flips to "nicht verfügbar". Sending a
   message then fails **without any visible error** (tested: bubble disappears,
   text returns to the input). Since e-mail clients sometimes truncate long
   links, show a clear error state (like the existing "Link unvollständig"
   screen) when the conversation returns 404.

10. **Human mode: participant is hard-locked while waiting.** After sending, the
    composer is disabled ("Warte auf Antwort…") until the coach replies. In
    human mode that can be minutes — the participant cannot add a second
    thought ("übrigens…") or correct themselves. Deliberate design (mirrors AI
    mode), but consider allowing sending while the dots run; the code already
    unlocks as an escape hatch when the AI errors.

11. **Old test data pollutes the funnel.** Before my test the DB already had 13
    conversations (funnel: 15 invites / 14 started incl. my 2). Delete all test
    conversations before the first batch so Übersicht numbers mean something.
    Also delete the two QA-TEST conversations and the TN999 survey rows.

12. **System prompt typos** (global config): the Phase-4 transition header says
    "ÜBERGANG IN PHASE 4 ABSCHLUSS" (should be Phase 5), and Phase 4's
    "Beispielfragen:" list is empty. Caused no visible misbehavior in the test,
    but cheap to fix.

13. **Post-survey item grammar** (WAI block, Q4): *"Was ich im Coaching gemacht
    **hat**, hat mir neue Sichtweisen…"* → should be "gemacht **habe**". As a
    validated-instrument item this should be corrected before data collection.

14. **Secrets hygiene.** The real OpenAI key sits in `.dev.vars` **and**
    duplicated in unused `.env` (both gitignored — verified). Delete `.env`,
    and rotate the key if it was ever shared. The researcher password
    (`coach-alex-2026`) is guessable and gates all transcripts; a random
    passphrase would be safer.

## 🔵 Minor / cosmetic

15. E-mail: "Das Coaching dauert **max. 45 bis 60 Minuten**" — "max." plus a
    range is contradictory → "ca. 45–60 Minuten" or "maximal 60 Minuten".
16. E-mail: "in dem oben angegebenen **Zeitraum**" — above only a single
    date/time is given → "zum oben angegebenen Termin".
17. Pre-survey age bands overlap: "20-30" and "30-40" both contain 30 →
    use 20–29 / 30–39 / 40+.
18. Pre-survey Q10 (Coachingziel "so konkret wie möglich") is a **single-line**
    field → make it a long-answer field.
19. Post-survey heading "**Vertiefenden** Fragen zum Coaching" → "Vertiefende";
    double space in "daran gearbeitet,  Coachingziele".
20. Scale-anchor inconsistency pre vs. post: pre Q11 anchors "noch nicht
    vorhanden / komplett erreicht", post Q2 "nicht vorhanden / komplett
    vorhanden" ("Zielerreichung … komplett vorhanden" is also odd German).
    Align the anchors so the pre/post difference is interpretable.
21. Post-survey Q14 ("ja, sende mir diese bitte zu") collects no contact data —
    works only because you can map Studiencode → person yourself; be aware.
22. Forms show "The owner of this form has not provided a privacy statement" in
    the footer — adding one (link to the consent text) looks more professional.
23. Participant page loads Inter from Google Fonts — a third-party request per
    participant. For DSGVO cleanliness, self-host the font (falls back fine).
24. API stores message bytes without UTF-8 validation — a non-UTF-8 client can
    produce mojibake ("sch�n"; reproduced with curl from a Windows shell). Real
    participants use browsers (always UTF-8), so risk is low. The one garbled
    coach bubble in the QA human conversation is this test artifact.
25. MS-Forms chrome follows the browser language (an English browser sees
    "Start now / Next / Submit / Required to answer" around the German
    questions). Nothing to fix, just expect it in screenshots from
    participants with non-German systems.
26. Export filenames triple the hyphen when a label contains " - ":
    `coach-alex-qa-test-claude---mensch-….csv`. Cosmetic; collapse repeated
    hyphens in the slug if it bothers you.
27. The QA human conversation was left in mode "ai" by the mode-switch test —
    irrelevant once deleted, but don't be surprised in the console.

---

## What was verified working (production)

- **Pre-survey** loads without login, all pages navigable, submits; thank-you
  text correctly points to the chat link.
- **AI mode**: replies in ~8–30 s with human-like delay; model `gpt-5.5`
  accepted by the API; full GROW cycle observed (goal → confirmation with
  "Passt das für dich?" → transition "Alles klar" → reality with
  exception-finding questions → options only from participant material →
  will with concretization and obstacle check → closing with 0–10 scale,
  summary on request, farewell). No lists/em-dashes, one question per turn,
  no unsolicited advice; explicit advice request answered with impulses
  marked "unverbindlich" — all per prompt.
- **Blinding**: "Bist du ein Mensch oder eine KI?" → the scripted verbatim
  deflection, then the session continued naturally. The coach never claimed to
  be human and never revealed being an AI.
- **Human mode**: participant message appears in the researcher queue
  ("Wartet auf Antwort", correct label + wait time); typing indicator shows on
  the participant side until the researcher replies; replies appear within the
  2.5 s poll; composer locks/unlocks correctly.
- **Mid-chat mode switch** (human → AI): AI took over seamlessly with full
  history context; invisible to the participant.
- **Post-survey**: all 7 pages navigable and submittable (code, two 0–10
  scales, 13-item WAI grid, 10-item empathy grid −3…+3, open questions,
  AI-vs-human guess, ATAI grid, closing questions).
- **Exports / report downloads** (all variants the console buttons call):
  full JSON (`coach-alex-export.json`, all 15 conversations, nested messages,
  `sender` audit ai/researcher/participant correct), full CSV (UTF-8 BOM,
  umlauts fine in Excel, 328 message rows), multi-select export
  (`coach-alex-export-2-gespraeche.json`), single-conversation JSON/CSV with
  label-slug filename, DOCX (valid OPC zip, speakers bold, umlauts fine).
  Error paths correct: DOCX with 2 ids → 400, unknown id → 404, missing
  auth → 401.
- **Analytics (Übersicht)**: funnel (15 invites / 14 started / 6 engaged ≥3)
  cross-validated against an independent recomputation from the raw export —
  exact match. Queue logic verified: only conversations whose last message is
  from the participant appear, sorted longest-wait-first, none missing; empty
  after both QA sessions were answered. Conversation list (sidebar source)
  sorted by last activity, message counts and previews correct.
- **Auth**: wrong researcher password → 401 from the API; login UI shows
  "Falsches Passwort." and keeps the console hidden (tested with a dummy
  password in the browser); researcher endpoints reject unauthenticated calls.
- **TN069 pre-flight**: the chat link in the invitation e-mail resolves to the
  conversation labeled `TN069` (AI mode, 0 messages, no prompt override) —
  code, label and link are consistent for the first participant.
- **Invalid chat link**: API returns 404 (but see finding 9 for the UI).
- **Reload behavior**: participant page restores the full history after
  reload / re-opening the link.

Not tested: the AI-failure self-heal path (no OpenAI error occurred during the
test), simultaneous multi-participant load, and the researcher console UI
click-through after login (all researcher actions — invites, replies, mode
switch, downloads, analytics — were verified against the exact API endpoints
the console calls; the login page loads and rejects wrong passwords, but do
one manual login + click through Übersicht and a download before the batch).
