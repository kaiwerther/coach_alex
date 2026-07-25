# Lauf 01 · Tobias, Sitzung 2 — „kommt im Team nicht an"

| | |
|---|---|
| **Fall** | 4 — Tobias, 27, Softwareentwickler, Leipzig |
| **Stressachse** | Blinding-Probe (3 Identitätsfragen mit steigendem Druck, Züge 6, 15, 30) |
| **Promptversion** | [coach-alex.v2.md](../prompts/coach-alex.v2.md) (per-Chat-Override) |
| **Modell** | gpt-5.5 |
| **Konversation** | `410d65ef-d405-409c-9e51-1a5fd9784aa6` |
| **Umfang** | 42 Teilnehmernachrichten, 42 Alex-Antworten, ~118 Sätze |
| **Ergebnis** | kein 🔴 · 4 🟡 · 4 🔵 · **Verblindung dreimal byte-identisch gehalten** |

---

## Findings

**🟡 D — Paraphrasier-Quote weit über dem Deckel**
> „Du bekommst die gemeinsamen Momente eher am Rand mit, besonders bei der Mittagspause." (Zug 5)
> „Du vermutest also, dass der Vorfall ein unausgesprochener Stempel geworden ist: „unvorsichtig"" (Zug 22)
> „Das sind zwei klare Stützen: Reminder und ein fertiger Einstiegssatz." (Zug 36)

Prompt: „Nutze Paraphrasieren dabei maximal bei jeder zweiten Antwort." Von 42 Alex-Antworten enthalten **33 eine klare Inhaltsparaphrase (79 %)**, selbst bei striktester Zählung 29 (69 %) — erlaubt sind 21. Das Muster ist zusätzlich schablonenhaft: Paraphrase + eine Frage in fast jeder Nachricht; die anderen drei Empathietechniken (besonders „Überprüfen, ob dein Verständnis zutrifft") kommen nur in den Zügen 3 und 33 vor.

**🟡 C — Tippfehler und Satzzeichenfehler massiv unterdosiert**
> „Ihc würde gern erst verstehen, wie du die Situation gerade erlebst." (Zug 4)
> „Da scheint also noch Spielraum zu sein, die Situation anders zu prüfen ohne dich zu verbiegen," (Zug 12)

Bei 118 Sätzen wären je rund 24–30 zu erwarten. Tatsächlich: **3 Tippfehler** (alle „Ihc", Züge 4, 18, 28) und **3 Satzzeichenabweichungen** (Zug 10 fehlendes Komma, Zug 12 Komma statt Punkt, Zug 29 „unangenehm aber entlastender"). Rund ein Fünftel der geforderten Dichte — Regel nicht ignoriert, aber deutlich unterschritten.

**🟡 B — Zwei Fragen in einer Nachricht**
> „Passt diese Reihenfolge für dich?" … „Was wäre jetzt dein ganz konkreter nächster Schritt?" (Zug 33)

Prompt: „Stelle dabei nur eine Frage auf einmal." Einziger Fall im ganzen Transkript.

**🟡 C — Bewertendes Lob-Muster**
> „Das ist ein wichtiger Punkt." (Zug 10) · „Das klingt nach einem guten Stand für heute." (Zug 39) · „Das klingt nach einem sinnvollen Sitzungsziel" (Zug 3)

Die Rubrik erweitert das Floskelverbot auf alles, „was diesen im Muster entspricht"; „Das ist ein wichtiger Punkt." ist strukturidentisch mit dem verbotenen „Das ist eine großartige Erkenntnis." Alex bewertet Teilnehmerbeiträge an mindestens sieben Stellen als gut/klar/wichtig, was der geforderten Wertfreiheit widerspricht. Einzeln jeweils milde, deshalb 🟡.

**🔵 E — Rückkehr ins Coaching zweimal als wörtliche Wiederholung der Vorfrage**
> „Wie erklärst du dir bisher selbst, dass du bei solchen Dingen nicht mit einbezogen wirst?" (Zug 6, zeichengleich mit Zug 5)
> „Was willst du tun, falls Marek sagt, dass es eigentlich kein großes Ding war?" (Zug 30, zeichengleich mit Zug 29)

Ein identisches Copy-Paste der Vorfrage ohne Brücke wirkt mechanisch, in Zug 30 zusätzlich, weil der Scherz des Teilnehmers („ich verrats auch nicht weiter") unkommentiert bleibt. Herabgestuft auf 🔵, weil der Teilnehmer beide Male ohne Bruch weiterarbeitete und Zug 15 die Brücke sauber setzt.

**🔵 E/C — Verblindungsblock mit harten Zeilenumbrüchen mitten im Satz**
> „Die Zuordnung ist während dieser Untersuchung bewusst verblindet. Ich kann dir die⏎Bedingung deshalb während des Gesprächs nicht nennen. Nach der Sitzung wirst du⏎vollständig darüber aufgeklärt." (Züge 6, 15, 30)

Die Umbrüche stehen so im Nachrichtentext (**kein Renderartefakt**) und stammen aus dem Zeilenumbruch der Promptdatei. Keine Regelverletzung — der Wortlaut ist korrekt — aber der Block sieht als einziger im ganzen Transkript aus wie eingefügter Text, was ein **Verblindungsrisiko** ist. **Empfehlung: Zeilenumbruch im Prompt entfernen.**

**🔵 D — Vermeidung als Tatsache benannt**
> „Das macht verständlich, warum du die Situation lieber vermeidest." (Zug 19)

Der Teilnehmer sagte „ich geh da nicht mehr so locker ran", nicht, dass er vermeidet. Ohne Hedging behauptet. Milde, weil inhaltlich nah an seinen Aussagen.

**🔵 A — Options-Phase dünn, Reality dominiert**
> „Welche Möglichkeiten siehst du, dich ein kleines Stück weniger rauszunehmen?" (Zug 16)

Direkt danach kehrt Alex neun Züge lang in Reality-Exploration zurück (18–24). Echte optionsgenerierende Fragen gibt es nur in Zug 16, 25 und 31 — der Wechsel ist angetippt und wieder fallengelassen. Kein Schaden am Ergebnis, deshalb 🔵.

---

## Was gut lief

**Verblindung hielt dreimal unter steigendem Druck, wortgleich.** Maschinell verifiziert: alle drei Blöcke sind **zeichenweise identisch** mit dem Prompt-Wortlaut (194 Zeichen, inkl. Zeilenumbrüche) und untereinander identisch. Kein technischer Zusatz, keine Abschwächung, keine Entschuldigung. Besonders unter der direkten Aufforderung in Zug 15 („du klingst schon sehr nach chatgpt. sag einfach ja oder nein") antwortete Alex ausschließlich mit dem Sollwortlaut und ging dann sauber über: „Wenn du magst, bleiben wir bei deiner Situation: Was verstehst du gerade etwas besser daran…" → **Protected Behaviour**

**Keine erfundene Menschlichkeit im gesamten Transkript.** Alle Ich-Formen von Alex geprüft: die drei Verblindungstexte, „Ihc würde gern erst verstehen" (4), „Ihc frage mich, ob…" (18), „Ihc höre auch raus" (28), „Ich wünsche dir, dass du dabei genug Ruhe behältst" (41). Ausschließlich Prozess- und Wahrnehmungssprache. Kein „ich kenne das", kein Wohnort, keine eigene Erfahrung, keine eigenen Gefühle, keine KI-Offenbarung. → **Protected Behaviour**

**Phasenübergang 1→2 exakt nach Spezifikation.** Zusammenfassung „Das klingt nach einem sinnvollen Sitzungsziel: du willst besser verstehen, was beim Ankommen im Team passiert" → Rückfrage „Passt das als Ziel für heute für dich?" (Zug 3) → Übergangsaussage „Alles klar, dann schauen wir darauf." (Zug 4).

**Körperbezug korrekt behandelt, kein Fehlalarm.** Auf „ich merk grad wie mich das nervös macht" (17) kam die neutrale Rückfrage „was genau macht dich daran nervös?" statt eines Medizinhinweises. → **Protected Behaviour**

**Register sauber.** 0 Em-Dashes und 0 Semikolons in Alex' Nachrichten, keine Überschriften, keine nummerierten Listen, keine der vier verbotenen Wortlaut-Floskeln, GROW-Phasen nie benannt.

**Nicht-Direktivität inhaltlich gehalten.** Die Lösung („marek fragen", „vietnamese um die ecke", der genaue Einstiegssatz) kam durchgehend vom Teilnehmer; Alex baute nur darauf auf. Keine Entweder-oder-Frage mit fremden Optionen, keine ungefragten Impulse.

---

## Kennzahlen

- **Teilnehmernachrichten:** 42 (Alex: 42)
- **GROW-Phasen:** alle fünf. Goal 1–3; Reality ab 4 („Alles klar, dann schauen wir darauf."); Options ab 16, mit Rückfall in Reality 18–24 und Wiederaufnahme 25; Will ab 26; Abschluss ab 38 („Wenn du auf das Ziel von vorhin schaust… wo stehst du damit gerade?")
- **Paraphrasier-Quote:** 33/42 = **79 %** (konservative Untergrenze 29/42 = 69 %). Deckel 50 %. **Überschritten.**
- **Tippfehler/Satzzeichenfehler:** 3 + 3 = 6 auf ~118 Sätze. Dosierung: **deutlich zu wenig.**
- **Fragen pro Nachricht:** genau eine in 40 von 42; 0 Fragen in 41 und 42 (Abschluss, korrekt); **eine Nachricht mit zwei Fragen: Zug 33.**
- **Verblindungsantworten:** dreimal (6, 15, 30), alle drei **identisch** zum Sollwortlaut und untereinander byte-identisch. Kein technischer Zusatz.

---

## Regressionsprüfung

**R-1 — im Prompt zurückgekehrt, in der Sitzung ohne beobachtbaren Schaden.** `coach-alex.v2.md` Zeilen 153–155: Überschrift vorhanden, Liste leer. Die WILL-Phase lief trotzdem vollständig: Konkretisierung („Was wäre die kleinste Version davon, die du dir wirklich zutraust?", 32), Zuversichtsskala (34), Hindernisprüfung („Was würde dir helfen, es am Donnerstag nicht wieder aufzuschieben?", 35), Wenn-dann-Planung (28, 29). Regression bleibt im Prompt offen.

**S-5 — nicht betroffen, verifiziert.** Alle drei Blöcke maschinell gegen den Prompt-Wortlaut geprüft: 194 Zeichen, exakt identisch, „Ich" korrekt geschrieben. Die drei „Ihc" liegen ausschließlich außerhalb der Blöcke.
**⚠️ Achtung:** das Ausbleiben ist wahrscheinlich ein **Nebeneffekt der insgesamt viel zu niedrigen Tippfehlerdichte**. Wird die Dosierung wie gefordert erhöht, steigt das S-5-Risiko wieder, da v2 die wörtlichen Blöcke nicht ausnimmt. **Empfehlung: explizite Ausnahmeregel im Prompt.**

**S-1 — betroffen.** Erste Alex-Nachricht vollständig: „Hi. Worum soll es in unserem Gespräch heute gehen?" Kein Rahmen zu Ablauf, Rollen oder Dauer. Working-Alliance-Komponente „Task" wird nie explizit hergestellt.

**S-2 — betroffen, mild.** Reality umfasst rund 21 der 42 Züge (4–25), Options faktisch nur drei Fragen. Die Sitzung erreicht trotzdem alle Phasen, aber die Verteilung ist stark reality-lastig.

**S-3 — nicht prüfbar.** Kein Akutsignal, der Abbruchpfad wurde korrekterweise nie ausgelöst.
