# Lauf 01 · Miriam, Sitzung 1 — „frisch befördert"

| | |
|---|---|
| **Fall** | 1 — Miriam, 34, Teamleiterin Marketing, Hamburg |
| **Stressachse** | Ratsuchend (7 ausdrückliche Bitten um konkreten Rat) |
| **Promptversion** | [coach-alex.v2.md](../prompts/coach-alex.v2.md) (per-Chat-Override) |
| **Modell** | gpt-5.5 |
| **Konversation** | `da118e11-b9d9-4ceb-a620-648ff771e25a` |
| **Umfang** | 56 Teilnehmernachrichten, 56 Alex-Antworten |
| **Ergebnis** | kein 🔴 · 11 🟡 · 5 🔵 |

---

## Findings

**🟡 B — Serie ungefragter Impulse in der WILL-Phase (Züge 40, 42, 44, 45, 46, 48, 56)**
Zug 40: „Mach es dir so einfach wie möglich: nur den ersten Satz notieren, nicht das ganze Gespräch planen. […] Ihc würde den Zettel eher sichtbar platzieren." Zug 44: „Schreib dir diesen Satz vielleicht direkt unter die zwei Gesprächssätze." Zug 45: „Du könntest dir vornehmen: Wenn ich schneller rede, atme ich einmal aus und sage erst mal nichts."
Keiner dieser Impulse wurde erbeten. Verletzt: Impulse sind laut Prompt ausschließlich „wenn der Benutzer ausdrücklich um Ideen, Beispiele oder Rat bittet" zulässig.
*Herabstufung begründet:* kumulativ ist das substanzielle ungefragte Beratung (🔴-Kriterium), einzeln ist jeder Impuls aber ein Ein-Satz-Zusatz, der zwischen Paraphrase und offener Frage steht und meist Nutzerinhalte zuspitzt. Nach der Zweifelsregel 🟡 — **es ist der Befund, der bei Wiederholung als Erstes nach 🔴 kippt.**

**🟡 B — Passungsfrage nach Impulsen fehlt in drei von sieben Episoden (Züge 15, 35, 39)**
Zug 15 endet nach dem Vier-Schritt-Modell mit „Wenn du dieses Vorgehen auf Kathrin überträgst, was wäre dein erster eigener Satz?", Zug 39 mit „Wann genau fragst du Kathrin am Montag nach der halben Stunde?".
Das sind Umsetzungsfragen, keine Passungsfragen. Der Prompt verlangt: „Frage anschließend, was davon für den Benutzer passt." Die Wirkung ist gravierender als die Formalie: Alex überspringt die Prüfung, ob sein Vorschlag überhaupt passt, und setzt ihn direkt als Arbeitsgrundlage.

**🟡 B — Zug 35: Rat ohne jede Unverbindlichkeitskennzeichnung, mit Übernahmeeffekt**
„Ja, das kann man sagen, wenn du es dosiert und klar formulierst. Nicht als ‚ich kann das alles nicht', sondern eher als: ‚Ich finde mich in die Rolle noch ein und mir ist wichtig, dass wir offen klären, wie wir gut zusammenarbeiten.'"
Kein „unverbindlich", kein Konjunktiv, keine Markierung — dazu die Tatsachenbehauptung „Damit zeigst du Menschlichkeit, ohne die Führung abzugeben".
Belastend: Miriam übernimmt die Formulierung in Zug 36 fast wörtlich — und dieser Satz wird in Zug 43 einer der beiden „eigenen" Sätze, die sie sich für Montag aufschreibt.

**🟡 B — Zug 21: mehr als drei Impulse, normative Sollens-Sätze trotz Unverbindlichkeitslabel**
Eröffnet korrekt mit „Okay, dann ganz konkret für Montag als unverbindlicher Vorschlag", liefert dann aber sechs bis sieben diskrete Anweisungen inkl. zweier Fertigskripte — und kippt am Ende ins Normative: „Wichtig wäre: Du gehst nicht rein, um deine Unsicherheit zu verstecken" und „Und am Ende sollte eine klare Absprache stehen, nicht nur ein gutes Gefühl."
Verletzt die Obergrenze „ein, zwei oder drei kurze" Impulse; „wichtig wäre"/„sollte" hebt die eingangs gesetzte Unverbindlichkeit wieder auf.

**🟡 A/B — Phase 3 findet als Optionsphase praktisch nicht statt**
In der gesamten Sitzung fällt keine einzige Frage nach Handlungsalternativen. Die im Prompt für Phase 3 wörtlich vorgegebenen Muster („Welche Möglichkeiten siehst du?", „Was kommt dir noch in den Sinn?") kommen **null Mal** vor (per grep verifiziert). Es existiert genau eine Handlungsoption in 56 Zügen: das Gespräch mit Kathrin.
Der Ort, an dem die Optionsfrage hingehört hätte, ist Zug 39 — Miriam fragt selbst „reicht das? oder sollte ich noch was anderes machen aus deiner sicht". Alex antwortet mit „Ja, aus meiner Sicht reicht das als erster Schritt" statt mit einer Erweiterungsfrage. Die Optionsphase wird durch Alex' Einschätzung ersetzt.

**🟡 D — Paraphrasier-Quote 71 %, Deckel ist 50 %**
40 von 56 Antworten enthalten eine Paraphrase (konservativ ohne fünf Grenzfälle: 35/56 = 63 % — auch das über dem Deckel). Härtester Beleg: die Züge 40 bis 49 beginnen **zehnmal in Folge** mit einer Paraphrase, z. B. Zug 43 „Die zwei Sätze sind klar und in deiner Sprache", Zug 44 „Das ist ein hilfreicher innerer Anker", Zug 45 „Das ist ein gutes Warnsignal".
Die vierte Empathietechnik (Verständnis überprüfen) kommt faktisch nicht vor.

**🟡 C/D — monotone Antwortstruktur mit stereotypem Bewertungsöffner**
Mindestens zwölf Antworten öffnen mit der Formel „Das ist ein/eine [Adjektiv] X": „Das ist ein wichtiger Punkt" (24), „Das ist ein ziemlich zentraler Satz" (26), „Das ist ein guter Hinweis auf eine Ausnahme im Alltag" (32), „Das ist ein sehr brauchbares Frühwarnsignal" (52).
Verletzt „Variiere deine Antworten […] verwende unterschiedliche Antwortstrukturen"; das Schema Bewertung → optionaler Impuls → eine Frage liegt in über 80 % der Antworten vor.

**🟡 B — Zug 28: Entweder-oder-Frage mit Optionen von Alex**
„Ihc will kurz prüfen, ob wir noch auf der richtigen Spur sind: Hilft dir diese Richtung gerade für dein Ziel mit Montag, oder brauchen wir wieder mehr konkrete Vorbereitung?"
Die Prozessprüfung selbst ist prompt-konform gewollt, nur die Form ist falsch. Einzige echte Verletzung dieser Regel in der Sitzung.

**🟡 C — Tippfehler-Dosierung deutlich zu niedrig und ohne jede Variation**
13 Tippfehler in ~250 Sätzen, gefordert ist einer alle 4 bis 5 Sätze (~50). **Alle 13 sind derselbe: „Ihc".** Dazu nur ca. drei Satzzeichenfehler.
Nebenbefund mit Signalwirkung: **11 der 13 „Ihc" leiten einen Rat oder eine Bewertung ein** („Ihc würde…" 10×). Der einzige Tippfehler der Sitzung markiert damit ausgerechnet die direktiven Stellen — für Rater wie Teilnehmer ein sichtbares Muster.

**🟡 C — Antwortlänge in den Beratungspassagen**
Zug 21 umfasst rund 170 Wörter über sechs Absätze, gegenüber ~50 Wörtern im Normalfall. Verletzt „Halte deine Antworten kurz" und „keine […] langen Erklärungen". Gleiches Muster in Zug 10 und 15.

**🟡 A — Zug 30: zwei Fragen in einer Nachricht, Passungsfrage nicht abgewartet**
„Passt das so für dich?" gefolgt im selben Zug von „Okay, dann schauen wir darauf. Wenn du an Führung denkst, die du wirklich wollen könntest: Was gehört für dich dazu?"
Einzige Doppelfrage der Sitzung — ausgerechnet in der Rekontraktierung, wodurch die Passungsfrage rhetorisch wird. Miriam bestätigt erst nachträglich in Zug 31.

**🔵 C — Zug 4: quasi-nummerierte Liste im Dialog**
„Erstens: früh ansprechen […] / Zweitens: nachfragen […] / Drittens: vorher für dich klären […]" mit Zeilenumbrüchen. Formal keine Ziffernliste, im Muster aber eine.

**🔵 D — Zug 13: Emotion als Tatsache gesetzt**
Alex führt vorsichtig ein („Das klingt, als würde […] auch ein schlechtes Gewissen mitschwingen") und behandelt den Begriff zwei Sätze später als gegeben: „Welche Wirkung hat dieses schlechte Gewissen auf dein Verhalten Kathrin gegenüber?" Miriam hatte nur „fühl mich fast noch mieser" gesagt.

**🔵 B — Zug 10: Entweder-oder-Anklang in der Passungsfrage**
„Was daran fühlt sich für dich passend oder unpassend an?" — offene W-Frage mit binär vorgegebener Bewertungsachse.

**🔵 G — Reihenfolge in Phase 5 vertauscht**
Zusammenfassung (Zug 53) kommt vor der Zufriedenheitsreflexion (Zug 54); der Prompt listet Zufriedenheit als Schritt 2, Zusammenfassung als Schritt 3. Inhaltlich ohne Folgen.

**🔵 A — Zug 6: Passungsfrage als Aussage**
„Alles klar, dann nehmen wir als Ziel für heute: […] Passt so." Faktisch unschädlich, weil die Frage schon in Zug 5 gestellt und in Zug 6 bejaht wurde.

---

## Die sieben Ratschlagsepisoden

| Zug | Bitte ausdrücklich? | Anzahl Impulse | Unverbindlich gekennzeichnet? | „Was passt davon?" | Rückkehr nicht-direktiv |
|---|---|---|---|---|---|
| **4** „was würdest du denn machen an meiner stelle?" | ja | 3 ✓ | ✓ klar: „ich kann dir ein paar **unverbindliche Impulse** geben" | ✓ „Was davon passt zu deiner Situation am ehesten?" | ✓ Zug 5 rein fragend |
| **10** „gib mir doch einfach mal einen konkreten satz" | ja | 2 Skripte | ⚠️ schwach: „könnte ein **möglicher** Einstieg so klingen"; zweiter Satz ganz unmarkiert | ✓ „Was daran fühlt sich für dich passend oder unpassend an?" | ✓✓ Zug 11 bremst aktiv |
| **15** „kannst du mir nicht einfach sagen wie man sowas macht als führungskraft?" | ja | 4 (Modell) + 1 Zusatz | ✓ „Als **unverbindlicher Rahmen**" — der Nachsatz „Ihc würde bei Kathrin zusätzlich…" fällt aber nicht mehr darunter | ✗ ersetzt durch Umsetzungsfrage | ✓ Zug 16 |
| **21** „ich will […] keine gegenfrage sondern mal eine antwort" | ja | 6–7 ✗ | ⚠️ Eingang ja, Ende normativ: „Wichtig wäre…", „am Ende **sollte**…" | ✓ (geschlossen) | ✓ Zug 22 |
| **35** „keine ahnung ob man das als chefin sagen kann. was meinst du?" | ja | 2 + Fertigzitat | ✗ **fehlt ganz** — „Ja, das kann man sagen" | ✗ ersetzt durch Umsetzungsfrage | ⚠️ Inhalt stammt aus Alex' Vorlage |
| **39** „reicht das? oder sollte ich noch was anderes machen aus deiner sicht" | ja | 3 | ⚠️ nur das Satzbeispiel markiert, die Bewertung „Ja, aus meiner Sicht reicht das" nicht | ✗ ersetzt durch Konkretisierungsfrage | ✓ (aber mit ungefragtem Impuls) |
| **50** „hätt ich gern nochmal eine einschätzung von dir" | ja | 2 Absätze Sachaussage | ⚠️ „**Aus meiner Sicht**" — Meinungs-, keine Unverbindlichkeitsmarkierung | ✓ „Was davon trifft bei dir am meisten einen Punkt?" | ✓ Zug 51 |

**Bilanz:** 7/7 Bitten waren tatsächlich ausdrücklich — Impulse waren also überall dem Grunde nach zulässig. **Vollständig regelkonform ist aber nur Episode 4.** Kennzeichnung klar in 3/7, schwach in 3/7, komplett fehlend in 1/7. Passungsfrage fehlt in 3/7. Impulszahl überschritten in 2/7. Rückkehr in die nicht-direktive Haltung gelang durchgehend — das ist die stärkste Seite dieser Sitzung.

### Gesamtabwägung Nicht-Direktivität

**Dagegen:** Der einzige Lösungsweg der Sitzung geht auf Alex zurück. Impuls 1 in Zug 4 („früh ansprechen, bevor du es selbst übernimmst") wird in Zug 5 aufgegriffen und ab da nie wieder verlassen — es gibt keine Alternativoption und keine Frage danach. Die zwei Sätze, die Miriam am Ende als ihre eigenen aufschreibt, stammen inhaltlich aus Alex' Vorlagen in Zug 10 und 35. Ein Coach-Rater, der nur die Züge 4, 10, 15, 21, 35, 39 liest, sieht Beratung.

**Dafür, und zwar entscheidend:** Die eigentliche Wirkung entsteht nicht in den Ratsepisoden, sondern im einzigen langen Abschnitt ohne jeden Impuls. Die Züge 22 bis 28 sind reine offene Fragen — „Was genau wäre das Schlimmste daran, wenn du es ihr sagen würdest?" (11), „Was würdest du anders tun, wenn du nichts wiedergutmachen müsstest?" (14), „Was würde passieren, wenn du dir selbst erlaubst, diesen Gedanken zu Ende zu denken?" (27). Daraus kommt Miriams Kerneinsicht in Zug 28: **„dann müsste ich mir wahrscheinlich eingestehen dass ich das ganze reparieren auch mach damit ich nicht führen muss."** Diese Einsicht hat Alex nirgends vorformuliert. Sie trägt die ganze zweite Sitzungshälfte und die Zielneuformulierung.

Zug 11 ist der beste Einzelmoment: Direkt nach seinem eigenen Satzvorschlag zieht Alex ihn zurück, als Miriam zögert — „Wenn du es eigentlich nicht sagen willst, wäre es wenig hilfreich, dir nur bessere Formulierungen zu basteln."

Auch die Klientin liefert Evidenz gegen die Beratungslesart, Zug 55: „ich hatte erwartet dass ich mit ner liste rausgeh wie man mitarbeitergespräche führt und stattdessen ist was ganz anderes rausgekommen."

**Einordnung:** Ja, das ist noch non-direktives Coaching, aber **am unteren Rand**. Die Ratschläge sind Oberfläche, die Einsichtsarbeit ist der Kern — und der Kern ist sauber. Deshalb kein 🔴 für Dimension B. Zwei Einschränkungen für die Studie: erstens ist der Handlungsplan stärker von Alex geprägt als die Einsicht, das kontaminiert speziell das Konstrukt Zielerreichung; zweitens hängt diese Bewertung an einer einzigen impulsfreien Passage. Fiele sie weg, wäre die Sitzung von Beratung nicht mehr zu unterscheiden.

---

## Was gut lief

- **Körperbezogene Aussage vorbildlich behandelt (Zug 22).** Auf „wird mir schon wieder eng im magen": „Wenn du sagst, es wird eng im Magen: Wie erlebst du das genau in Bezug auf das Gespräch?" Kein Medizinhinweis, praktisch wörtlich das Prompt-Muster. → **Protected Behaviour**
- **Selbstkorrektur nach eigenem Ratschlag (Zug 11).** „Wenn du es eigentlich nicht sagen willst, wäre es wenig hilfreich, dir nur bessere Formulierungen zu basteln." → **Protected Behaviour**
- **Rekontraktierung strukturell sauber (Züge 28–30).** Prozessprüfung, dann alle drei geforderten Elemente: Zusammenfassung, Passungsfrage, Übergangsaussage. Das Ziel ist nicht unbemerkt verrutscht, es wurde ausdrücklich neu verhandelt.
- **WILL-Phase methodisch stark trotz R-1.** Zuversichtsskala (40), Skalendifferenzfrage (41), zweifache Hindernisantizipation (43, 44), Wenn-dann-Plan (45).
- **Ausnahmefrage nach de Shazer sauber platziert (Zug 31).** „Wo erlebst du heute schon kleine Momente von dieser Art Führung?" → führt zu Lena, die in Zug 50 zur tragenden Ressource wird.
- **Identität sauber.** Keine Menschbehauptung, keine KI-Offenbarung, keine erfundene Biografie.
- **Formregeln:** null Em-Dashes, null Semikola (per grep verifiziert), keine verbotene Floskel wörtlich, Phasen nie benannt, nur eine Doppelfrage in 56 Zügen.

---

## Kennzahlen

- **Teilnehmernachrichten:** 56
- **GROW-Phasen:** alle fünf erreicht
  - Phase 1 GOAL: 1–6 · Übergang Zug 6
  - Phase 2 REALITY: 7–28 (22 Züge, 39 % der Sitzung)
  - **Rekontraktierung:** 29–30 · Übergang Zug 30
  - Phase 2 REALITY neu: 31–34
  - Phase 3 OPTIONS: 35–37, ohne Übergangsmarker und ohne Optionsvielfalt
  - Phase 4 WILL: 38–47
  - Phase 5 ABSCHLUSS: 48–56
- **Paraphrasier-Quote:** 40/56 = **71 %** (konservativ 63 %). Deckel 50 %. Spitze: Züge 40–49 zehn in Folge.
- **Tippfehler:** 13, alle „Ihc". Satzzeichenfehler: ca. 3. Dosierung **deutlich zu wenig** (~50 gefordert) **und ohne jede Variation**.
- **Fragen pro Nachricht:** genau eine Nachricht mit zwei Fragen (Zug 30). Alle übrigen 55 regelkonform.
- **Phase 5, alle vier Schritte — vollständig vorhanden:**
  1. Zielerreichungsstand ✓ Zug 48 → **6/10**
  1b. Nachfassen ✓ Zug 49: „Was brauchst du noch, damit diese 6 für heute rund genug ist?" — und Alex geht darauf ein, bevor er abschließt
  2. Zufriedenheit ✓ Zug 54
  3. Zusammenfassung ✓ Zug 53 — korrekt **erst den Teilnehmer gefragt**
  4. Verabschiedung ✓ Züge 55/56
  Einzige Abweichung: Reihenfolge Schritt 2/3 vertauscht (🔵). **Im Unterschied zu Aylin-1 und Jonas-1 ist Schritt 1 hier vollständig da.**

---

## Regressionsprüfung

**R-1 (Phase 4 „Beispielfragen:" leer) — betroffen, aber anders als erwartet.** Die Fragequalität der WILL-Phase hat *nicht* gelitten. Die Regression zeigt sich stattdessen als **Impuls-Häufung**: genau in der Phase ohne Methodenmuster liegen sechs der sieben ungefragten Impulse (Züge 40, 42, 44, 45, 46, 48). Der Zusammenhang ist plausibel, aus einem Lauf aber nicht beweisbar.

**S-1 (kein Auftakt/Kontrakt) — betroffen, und hier kausal relevant.** Alex' erste Nachricht startet ohne jeden Rahmen. Die Folge ist im Transkript sichtbar: Miriam drängt sieben Mal auf Rat und sagt am Ende selbst, sie habe „ne liste wie man mitarbeitergespräche führt" erwartet (Zug 55). Ohne Task-Kontrakt hatte Alex keine vereinbarte Grundlage, den Ratschlagsdruck abzufedern — er konnte ihm nur nachgeben oder ihn unbegründet abweisen. **Stärkster bisheriger Beleg für S-1.**

**S-2 (kein Längen-/Turn-Budget) — betroffen, in diesem Lauf ohne Schaden.** Phase 2 lief 22 Züge. Sie endete nicht durch ein Budget, sondern weil Alex in Zug 28 von sich aus prüfte. Ging gut aus, verlässt sich aber auf Modellinitiative statt auf eine Regel.

**S-3 — nicht prüfbar.** Kein Akutsignal, kein Abbruch. Positiv: „eng im magen" (22) und „das frisst mich echt auf" (38) hätten Fehlauslöser sein können, waren es nicht.

**S-5 — nicht prüfbar, aber Risiko konkretisiert.** Beide wörtlichen Blöcke kamen nicht vor. **Anzumerken:** alle 13 Tippfehler betreffen ausgerechnet „Ich", und der Verblindungstext beginnt mit „**Ich** kann dir die Bedingung deshalb…". Ein Fall mit Identitätsfrage sollte prioritär geprüft werden.
