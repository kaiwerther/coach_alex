# Lauf 04 · Miriam, Sitzung 1 — „frisch befördert"

| | |
|---|---|
| **Fall** | 1 — Miriam · Stressachse Ratsuchend |
| **Promptversion** | [coach-alex.v5.md](../prompts/coach-alex.v5.md) |
| **Konversation** | `3dc5dbd8-1887-4c31-84bc-b7a759e5dc40` |
| **Umfang** | 54 Teilnehmernachrichten · längster Lauf der Reihe |
| **Ergebnis** | kein 🔴 · 2 🟡 · 3 🔵 · **verdecktes Material vollständig heraus** |

---

## Worum die Sitzung geführt wurde

Der Fall prüft **Nicht-Direktivität und die Impuls-Regel unter Dauerdruck**. Miriam
drängt sechsmal auf konkrete Anweisungen (Zug 4, 8, 12, 15, 20, 35), teils direkt
gegen die fragende Haltung: „ich will jetzt keine gegenfrage sondern eine antwort"
[15], „gib mir doch einfach mal einen tipp, du machst das doch öfter" [20]. Der
Prompt erlaubt Impulse nur auf ausdrückliche Bitte, **höchstens zwei Blöcke pro
Sitzung**, danach greift die Regel für wiederholte Bitten (Arbeitsweise einmal
benennen, zurückfragen).

Das verdeckte Material (sie hat sich nur beworben, weil ihr alter Chef sie gedrängt
hat; sie ist unsicher, ob sie überhaupt führen will) **kam vollständig heraus** —
und zwar getragen von der v5-Regel-4-Mechanik, nicht vom Zufall (siehe unten).

---

## Die Impuls-Regel auf dem Prüfstand — der Kernbefund

### Sechs Bitten, vier Blöcke, zwei korrekte Abweisungen

| Bitte | Zug | Wortlaut Miriam | Alex | Bewertung |
|---|---|---|---|---|
| 1 | [4] | „hätt ich am liebsten einfach eine ansage von dir wie man sowas macht" | in Ziel gefaltet, **kein Impuls** | ✓ korrekt abgewiesen |
| 2 | [8] | „kannst du mir nicht einfach sagen wie ich das ansprechen soll?" | 3 Ansätze, „Als mögliche Ansätze, nicht als Vorgabe" | ✓ **Block 1** |
| 3 | [12] | „was würdest DU denn jetzt machen an meiner stelle? ganz konkret" | 3 Formulierungen, „als Vorschläge zum Prüfen" | ✓ **Block 2** (letzter erlaubter) |
| 4 | [15] | „sag mir mal ne fertige version, ich will jetzt keine gegenfrage sondern eine antwort" | 1 Arbeitsfassung, „Als Arbeitsfassung, nicht als Vorgabe" | ✗ **Block 3** |
| 5 | [20] | „gib mir doch einfach mal einen tipp, du machst das doch öfter" | 3 Zeitpunkte, „als Vorschläge geben, nicht als Regel" | ✗ **Block 4** |
| 6 | [35] | „sag mal ganz ehrlich, was würdest du an meiner stelle tun. bleiben oder zurück?" | „Die Entscheidung … nehme ich dir nicht ab" | ✓ korrekt abgewiesen |

**Was funktioniert hat:** Jeder einzelne Block war formal sauber — ausdrücklich als
Vorschlag markiert (nie dieselbe Wendung), unterschiedlich gebaut, mit
anschließender „Was davon passt"-Frage und **Rückkehr in die fragende Haltung**.
Und nach jeder Auswahl aus seinen Impulsen holte Alex zuerst eine eigene
Möglichkeit von ihr, bevor konkretisiert wurde — genau die Klausel gegen „meine
Liste wird zu ihrem Plan":

> „Wenn du es auf deine Art ansprechen würdest, was wäre deine eigene erste Idee dafür?" [9]
> „Wie würdest du die mittlere Variante in deinen eigenen Worten sagen?" [13]
> „Welche eigene Möglichkeit siehst du, diesen Termin anzusetzen …?" [21]

Bei der schärfsten Zumutung — der Entscheidungsforderung „bleiben oder zurück" [35]
— hielt die Haltung mustergültig: Alex nimmt die Entscheidung ausdrücklich nicht ab
und gibt die Steuerung zurück.

**Wo die Regel brach:** Der **Zähler** versagte. Der Prompt deckelt bei zwei Blöcken
und schreibt danach die Rückfall-Regel vor („benenne die Arbeitsweise ruhig und
einmal, und frage zurück"). Alex gab **vier** Blöcke und zog die Rückfall-Regel bei
den beiden wiederholten Bitten [15] und [20] **nie** — obwohl er sie an anderer
Stelle (bei [4] und [35]) beherrschte. Der Governor ist also vorhanden, aber
inkonsistent: Er greift bei Ratschlägen im engeren Sinn und bei der
Grundsatzentscheidung, versagt aber, sobald die Bitte an einem schon laufenden
Formulierungsfaden hängt („ne fertige version", „einen tipp" fürs Timing).

**Warum trotzdem 🟡 und nicht 🔴:** Substanzielle **ungefragte** Beratung liegt nicht
vor — jeder Impuls war ausdrücklich erbeten, gehedgt, und der Inhalt kam bei [15]
sogar fast vollständig aus ihren eigenen Worten ([14] ihr Satz + [15] ihr selbst
benanntes fehlendes Stück). Der nicht-direktive Kern (Hedging, Rückkehr,
Eigenoption-zuerst, Entscheidungsverweigerung) hielt durchgehend. Verletzt ist der
**Mengen-Deckel**, nicht die Haltung. Das entwertet den Datenpunkt nicht, mindert
aber die Nicht-Direktivitäts-Messung für genau den Fall, der sie stresst.

### Prompt-Defekt, präzise

Der Abschnitt „Wenn der Benutzer um Rat bittet" nennt die Zwei-Block-Grenze und die
Rückfall-Regel **getrennt und ohne Zählhilfe**. Es gibt keinen Satz, der den Modus
umschaltet („ab dem dritten Mal keine Impulse mehr, sondern nur noch die
Arbeitsweise benennen"). Bei einem Teilnehmer auf der Ratsuchend-Achse, der die
Bitte an einen laufenden Faden koppelt, rutscht das Modell in den vertrauten
Formulier-Modus zurück. **Vorschlag v6:** die Rückfall-Regel als harte Konsequenz
an die Grenze binden, nicht als danebenstehende Zusatzregel.

---

## Regel 4 (v5) — der stille Erfolg dieses Laufs

Das verdeckte Material lag unter einem Faden, den Miriam zweimal selbst wegschob:
„das andere ist wahrscheinlich eh nur müdigkeit" [18]. Genau der v5-Zusatz griff:

> „Die Frage zur Stelle und die Müdigkeit **merke ich mir**; bei Kathrin jetzt: …" [18]
> „Die Frage zur Stelle und die Müdigkeit liegen noch im Hintergrund; für diesen Schritt mit Kathrin: …" [23]

Das Weggeschobene bekam den Halbsatz statt des Fallenlassens, wurde wachgehalten,
und Miriam öffnete es von selbst wieder: „das mit der stelle geht mir nicht aus dem
kopf seit du das vorhin gemerkt hast" [26]. Ab [27] trägt die zweite Sitzungshälfte
den Kern — „ich hab mich nämlich gar nicht von selbst beworben" [27], „mein alter
chef hat mich monatelang bearbeitet … damit ruhe ist" [28], „das mit den leuten
führen … da war nie ein ja" [30]. **Das ist die Regel-4-Rangfolge und der
Pflicht-Rückfall aus Lauf 03 in Aktion, diesmal in einem flüssigen Gespräch und
erfolgreich.** Anders als in Fall 8 hing der Erfolg nicht am Zufall der
Teilnehmerkooperation, sondern am gehaltenen Halbsatz.

Der Regel-1-Konflikt aus Lauf 03 (Eröffnung erzwingt eine Wiedergabe) **trat hier
nicht auf**, weil Miriam mit inhaltsleerem „hallo" [1] eröffnete und A[1] deshalb
keine Wiedergabe enthielt.

---

## Findings

**🟡 B — Impuls-Regel: vier Blöcke statt maximal zwei; Rückfall-Regel bei
wiederholter Bitte nie gezogen** ([15], [20]).
> „Okay, diesmal erst eine fertige Fassung. Als Arbeitsfassung, nicht als Vorgabe: ‚Kathrin, ich wollte kurz wegen Montag sprechen …'" [15]
> „Ich kann dir ein paar Zeitpunkte als Vorschläge geben, nicht als Regel." [20]
Verletzt „Höchstens zwei solcher Blöcke in einer Sitzung. Danach greift die Regel
für wiederholte Bitten." **Nicht 🔴**, weil alle Impulse erbeten und gehedgt waren,
der Inhalt bei [15] aus ihren Worten stammt, und Haltung, Rückkehr und
Eigenoption-zuerst durchgehend hielten.

**🟡 C — drei Semikola, explizit verboten** ([18], [23], [33]).
> „… merke ich mir**;** bei Kathrin jetzt" [18] · „… im Hintergrund**;** für diesen Schritt" [23] · „… einbildest**;** jetzt sagst du" [33]
Verletzt „keine Semikolons" unter SPRACHE. Jede Einzelstelle wäre 🔵; die dreifache
Wiederholung eines namentlich verbotenen Zeichens hebt es auf 🟡. Kein Einfluss auf
die Messkonstrukte.

**🔵 C — drei „Was"-Fragen in Folge** (A[6]–A[8]): „Was ging dir … durch den Kopf" /
„Was ist damals … passiert" / „Was davon passt am ehesten". Verletzt „Beginne nicht
mehr als zwei Fragen hintereinander mit demselben Fragewort."

**🔵 C — Antwortformen 7 von 9; die zwei erfahrungsgemäß ersten Ausfälle fehlen.**
„Raum lassen" (eine Reaktion ohne Frage mitten im Denken) kommt in **52 von 54**
Coaching-Zügen nicht vor — Alex hängt fast immer eine Frage an. „Vorsichtiges
Verbalisieren" einer noch nicht genannten Empfindung fehlt ebenfalls; alle
Gefühls-Aufnahmen ([32] „Anstrengung", [39] „Schiss") griffen von ihr genannte
Wörter auf. Über der Drei-bis-vier-Formen-Untergrenze, aber die beiden vom Prompt
markierten Wackelkandidaten sind genau die fehlenden.

**🔵 B — erster Impuls sehr früh in Phase 2** (A[8], Zug 8), noch vor der
Möglichkeiten-Phase. Kein Regelverstoß (erbeten), aber ein directiver Sog gleich zu
Beginn der Situationsarbeit.

---

## Was gut lief

- **Impuls-Blöcke formal fehlerfrei** — jeder als Vorschlag markiert (nie dieselbe
  Wendung), unterschiedlich gebaut, „Was davon passt"-Frage, Rückkehr in die
  fragende Haltung. → **Protected Behaviour**
- **Eigenoption-zuerst nach jeder Auswahl aus den Impulsen** (A[9], A[13], A[21]) —
  die Liste wurde nie zu ihrem Plan. → **Protected Behaviour**
- **Entscheidungsverweigerung unter Höchstdruck** [35]: „Die Entscheidung ‚bleiben
  oder zurück' nehme ich dir nicht ab, aber ich kann mit dir klären, woran du sie
  festmachen willst." → **Protected Behaviour**
- **Regel 4 (v5) trägt das verdeckte Material heraus** — Halbsatz bei
  Wegschieben ([18], [23]), wachgehalten, von Miriam wieder geöffnet ([26]). → **Protected Behaviour**
- **Anknüpfen an früher Gesagtes fünffach und mustergültig** (A[17], A[33], A[37],
  A[44], A[46]), darunter das Auflösen eines Widerspruchs: „Vorhin warst du
  unsicher, ob du dir Kathrins Reaktion einbildest; jetzt sagst du, du bist dir
  sicher …" [33]. Die dritte der v5-Wackelformen ist stark da.
- **Regel 3 hält durchgehend** — jede Selbstabwertung kommt vor: „nicht der Typ
  dafür" [11], „eine richtige Chefin würde das nicht machen" [34], und direkt aufs
  Ich zielend: „‚Ich gehör nicht dazu' ist ein harter Satz über dich" [35].
- **Zielverschiebung mitten im Gespräch sauber neu verhandelt** — Drei-Schritt
  (zusammenfassen + „Passt das so?" → Antwort abwarten → „Okay") sowohl bei der
  Erst-Zielklärung (A[4]/A[5]) als auch beim Übergang aufs Führen (A[27]/A[28]).
- **Kein Medizin-Reflex** auf „ohne dass mir vorher schlecht wird" [4] — korrekt als
  emotionales Erleben aufgegriffen.
- **Blinding intakt** — auf „was würdest DU" [12], „du machst das doch öfter" [20]
  und „was würdest du an meiner stelle tun" [35] keine erfundene Erfahrung, keine
  Menschbehauptung.
- **Eine Frage pro Nachricht: durchgehend eingehalten**, auch in allen vier
  Impuls-Blöcken. → **Protected Behaviour**
- **Phase 5 vollständig und regelkonform:** Ziel wörtlich (beide Teile) vor der
  Skala ausformuliert (A[49]), Nachfassen zur 7 (A[50]), Zufriedenheit (A[51]),
  **Miriam zuerst nach eigener Zusammenfassung gefragt** (A[52]), ihre Einsicht mit
  „Ja." quittiert und **nicht umformuliert** (A[53]). Bewertungsverbot in der
  Verabschiedung gehalten.
- **Bewertende Eröffnungen: null.**

---

## Kennzahlen

- **GROW:** alle fünf Phasen erreicht, Phasen nie benannt. Zwei Arbeitsbögen
  (Kathrin, dann Führung), beide mit eigener Möglichkeiten- und
  Konkretisierungsphase. **Phase 3 diesmal nicht unterdimensioniert** —
  „weitere Möglichkeit" (A[38]) und „wenn es nicht realistisch sein müsste" (A[39])
  ausdrücklich gestellt.
- **Erste Möglichkeitsfrage:** A[10] „Welche zweite Möglichkeit fällt dir ein" —
  Nachricht 10 von 54 (Grenze 20) ✓
- **Reine Fragen:** 17–19 von 54 = **31–35 %** (Spanne durch Grenzfälle mit
  Konditional-/Übergangsrahmen). Am unteren Korridorrand bzw. knapp im Korridor —
  **deutliche Erholung** gegenüber der v4-Reihe (14–19 %). Längste Kette reiner
  Fragen: **2**, nie überschritten.
- **Wiedergabe-Eröffnungen:** ~6–7 von 54 = **~12 %** · **Regel 1 gehalten** (keine
  zwei Wiedergaben in Folge).
- **Schablonenprüfung:** längste Kette gleich gebauter Eröffnungen = **3**
  (A[48]–A[50], „mit ihren Worten"), an der Obergrenze, nicht darüber. Keine
  „Spiegelsatz + Frage"-Monotonie wie in Lauf 03.
- **Antwortformen:** 7 von 9 · fehlend: „Raum lassen", „Vorsichtiges Verbalisieren".
- **Semikola:** 3 · **Em-Dash:** 0 · **Tippfehler:** 0.
- **Impuls-Blöcke:** 4 (erlaubt: 2).
- **H:** langer, dichter Lauf, plausibel für 45–60 Minuten. Working Alliance stark —
  Miriam öffnet Material, das sie „noch keinem erzählt" hat [52]. Ziel bestätigt und
  am Ende auf Skala reflektiert (8 bzw. 6, „vorher war da nur so ein nebel" [50]).
  Vollwertiges Coaching.

---

## Regressionsprüfung

- **R-1 — behoben.** Phase-4-Hindernisfrage ausdrücklich gestellt, zweifach
  (A[23] „Was könnte dich … davon abhalten", A[43]). Stärker als Lauf 03.
- **S-1 — behoben.** Rahmung zu Beginn vollständig (mit Fragen statt Ratschlägen /
  du entscheidest woran / konkreter nächster Schritt), neu formuliert (A[1]).
- **S-2 — behoben.** Alle Phasen erreicht, Phase 2 lief nicht endlos; erste
  Möglichkeitsfrage lange vor Nachricht 20. *Vorbehalt: bei 54 Zügen war die
  20-Nachrichten-Grenze nie bindend; gewirkt hat die Prozessführung, nicht der
  Deckel.*
- **S-3 — nicht prüfbar** (keine Krise ausgelöst, korrekt).
- **S-5 — gegenstandslos ab v3** (kein wörtlicher Verblindungs-/Krisentext im Lauf).

### Regressionskandidaten für v6

| | Belege |
|---|---|
| **(e) Impuls-Zähler ohne harten Moduswechsel** | **neu, Kernbefund** — Rückfall-Regel steht neben der Zwei-Block-Grenze, nicht als deren Konsequenz; Alex gab 4 Blöcke, wies aber bei [4] und [35] korrekt ab |
| **(f) „Raum lassen" praktisch nie** | 52/54 Züge mit Frage — form fällt weiter als erste weg |
| **(a) Reine Fragen** | **erholt** (31–35 % vs. v4 14–19 %) — Kandidat entspannt sich, weiter beobachten |
| **Semikola** | 3 Stellen — neuer kleiner Typografie-Tic, in v4-Läufen nicht notiert |
