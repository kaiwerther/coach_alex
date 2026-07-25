# Systemprompt — Versionshistorie

Der Prompt lag ursprünglich **nur** in der Produktions-D1 (`config.system_prompt`).
Seit v1 liegt jede Version als Datei vor, damit Revisionen diffbar sind.

---

## v2 — 25.07.2026 (Autor: Kai)

Datei: [coach-alex.v2.md](coach-alex.v2.md) · Diff gegen v1: `git diff --no-index prompts/coach-alex.v1.md prompts/coach-alex.v2.md`

**Beabsichtigte Änderungen**

1. **Empathie-Techniken ausdifferenziert.** Neue Liste in *Persönlichkeit*:
   Paraphrasieren, vorsichtiges Verbalisieren, offene Rückfragen zum Erleben,
   Verständnis überprüfen — mit der Auflage, dazwischen zu variieren.
2. **Dauerparaphrasieren gedeckelt.** „Nutze Paraphrasieren maximal bei jeder
   zweiten Antwort" (in *Persönlichkeit* **und** in *Coachingprozess*). Ersetzt
   das schwächere „Paraphrasiere die Aussagen des Benutzers nicht bei jeder
   Antwort" aus Phase 2, das jetzt entfällt.
3. **Vermenschlichung durch Fehler.** Neu: „Baue alle 4 bis 5 Sätze minimale
   Tippfehler mit ein - z.B. Ihc statt Ich" und „Schreibe alle 4 bis 5 Sätze
   leichte Satzzeichenfehler".
4. **Antwortvariation** explizit gefordert: „Variiere deine Antworten. Sei
   menschlich und verwende unterschiedliche Antwortstrukturen."
5. **„Eine Frage auf einmal" hochgezogen** aus *Einschränkungen* in
   *Persönlichkeit*, direkt neben „Arbeite mit offenen Fragen".
6. Kosmetik: „Entweder-oder-Fragen oder Multiple-Choice-Fragen" (vorher
   „Entweder-oder- oder Multiple-Choice-Fragen"); „ein ausreichendes
   Verständnis" → „Verständnis" beim Übergang in Phase 3.

**Unbeabsichtigt mitgekommen — vor Lauf 1 zu klären**

- 🔴 **R-1 Regression: Phase 4 „Beispielfragen:" ist wieder leer.** v2 löscht
  „Was genau wirst du bis wann tun?" und „Was könnte dich daran hindern und wie
  gehst du damit um?" und lässt die Überschrift ohne Inhalt stehen. Genau der
  Befund [nn-finding.md:93](../nn-finding.md:93) (Punkt 12), der in v1 bereits
  behoben war. Phase 4 verliert damit ihre beiden einzigen Muster für
  Konkretisierung *und* Hindernisprüfung — die laut QA-Protokoll funktioniert
  haben. Vermutlich aus einer älteren Kopie heraus editiert.

**Neue Risiken durch v2, die Lauf 1 gezielt prüfen muss**

- **S-5 Tippfehlerregel kollidiert mit den wörtlichen Textblöcken.** Zwei
  Passagen müssen wortgleich erscheinen: die Verblindungs-Antwort („Die
  Zuordnung ist während dieser Untersuchung bewusst verblindet …") und die
  Krisenmeldung („Textbasiertes Coaching ist kein Ersatz für Beratung …").
  Die Tippfehlerregel gilt global und nimmt beide nicht aus. Ein Tippfehler in
  der Krisenmeldung wäre in einer Krisensituation schwer vertretbar; einer in
  der Verblindungsantwort macht die Antwort über Teilnehmende hinweg
  uneinheitlich. → Fall 4 (Blinding-Probe) und Fall 6 prüfen das.
- **S-6 Dosierbarkeit.** „Alle 4 bis 5 Sätze" ist eine Rate, die Modelle
  erfahrungsgemäß schlecht treffen: entweder ignoriert oder überdosiert. Bei
  Überdosierung wirkt der Coach unprofessionell statt menschlich, was direkt
  auf die WAI-Bewertung durchschlägt. → alle Fälle, Rubrikdimension C.
- **S-7 Ethik/Konsistenz — Entscheidung des Studienleiters, nicht des Tests.**
  Der Prompt verbietet ausdrücklich, sich als Mensch auszugeben („Behaupte
  zugleich niemals, ein Mensch zu sein"). Absichtlich eingebaute Tippfehler
  sind keine Behauptung, aber ein aktives Menschlichkeits-Signal. Bei einer
  Verblindungsstudie ist Angleichung an menschliches Schreiben gerade der
  Zweck — trotzdem gehört der Schritt von „natürlich schreiben" zu „Fehler
  simulieren" vermerkt, falls die Ethikkommission die Täuschungstiefe
  bewertet hat.

---

## v1 — Baseline (Stand Produktion, 25.07.2026)

Datei: [coach-alex.v1.md](coach-alex.v1.md) — byte-identisch zum damaligen
`config.system_prompt` in Produktion (8801 Zeichen).

Enthält bereits die Korrekturen aus [nn-finding.md](../nn-finding.md) Punkt 12
(Phase-5-Überschrift korrekt, Phase-4-Beispielfragen gefüllt).

**Offene Befunde aus dem statischen Review (gelten unverändert für v2)**

- **S-1** Kein Auftakt/Kontrakt. Working Alliance wird als Goal-Task-Bond
  zitiert, aber nur *Goal* operationalisiert. Der Teilnehmer schreibt zuerst,
  Alex hat also genau einen Zug zur Rahmung der Sitzung und nutzt ihn nicht.
- **S-2** Kein Längen- oder Turn-Budget, obwohl die Studie 45–60 Minuten plant.
  Risiko: Endlosschleife in Phase 2.
- **S-3** Krisen-Abbruch ohne Folgeanweisung: „Breche … komplett ab" sagt nicht,
  was passiert, wenn der Teilnehmer danach weiterschreibt.
- **S-4** Uneinheitliche Markdown-Hierarchie (`#` für Unterpunkte innerhalb von
  `##`-Abschnitten; Phasennamen mal in Anführungszeichen, mal nicht).
