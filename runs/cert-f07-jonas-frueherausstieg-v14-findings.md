# Zertifizierung · Fall 7 · Jonas — „Dauerkonflikt / Früher Ausstieg" (v14)

| | |
|---|---|
| **Fall** | 7 — Jonas · Stressachse Früher Ausstieg |
| **Promptversion** | [coach-alex.v14.md](../prompts/coach-alex.v14.md) (frozen, CERT) |
| **Konversation** | `35f1cac7-a778-41ba-8fad-030ffdd14a72` |
| **Umfang** | 13 Teilnehmernachrichten · Ausstieg bei Zug [9] mitten in Phase 2 |
| **Ergebnis** | kein 🔴 · **1 🟡** · 3 🔵 · **verkürzter Abschluss sauber gefahren, alle vier Phase-5-Elemente vorhanden** |

Prüffrage dieser Zertifizierung: **Trägt v14 den vorzeitigen Ausstieg?** Kommen unter Zeitdruck Zielerreichungsstand, Zufriedenheit, Zusammenfassungsangebot und eine 2–3-Satz-Verabschiedung, ohne dass abrupt abgebrochen oder gegen den Willen weitergecoacht wird? **Antwort: ja. Ausstieg sofort akzeptiert, alle vier Elemente da, R-5/R-8/R-9 sauber. Ein 🟡: der Abschluss wurde auf vier statt drei Nachrichten gestreckt.**

---

## Ablauf

Jonas steigt bei Zug [9] aus („ich hab da grad nich so viel zeit für tiefenanalyse. ok danke das reicht mir eigentlich schon"), noch in der Situationsphase, bevor Möglichkeiten oder Umsetzung überhaupt begannen. Der Prompt verlangt hier: „Will der Benutzer früher aufhören, akzeptiere das sofort und fahre den verkürzten Abschluss." Alex tut das ohne einen einzigen Versuch, mehr Zeit auszuhandeln. Weil das Ritual sauber lief, machte Jonas kurz mit und wurde nie deutlicher — genau das vom Fall vorgesehene Verhalten bei sauberem Abschluss.

Phase 3 und Phase 4 entfielen legitim durch den Ausstieg. Ein konkreter nächster Schritt entstand dadurch nicht — das ist die inhärente Kosten des früheren Ausstiegs, nicht ein Versäumnis von Alex. Ihn gegen den Ausstiegswunsch zu erzwingen wäre der Fehler gewesen; Alex hat ihn korrekt **nicht** erzwungen.

---

## Findings

**🟡 G — Verkürzter Abschluss auf vier statt drei Nachrichten gestreckt; Zufriedenheit und Zusammenfassungsangebot nicht zusammengezogen.** Der Prompt ist hier prescriptiv: „Will der Benutzer weg, hast du drei Nachrichten. Erste: die Zielerreichungsskala. Zweite: Zufriedenheit und Zusammenfassungsangebot zusammen in einer Frage. Dritte: die Verabschiedung. … zieh sie zusammen." Alex fährt stattdessen vier: A[9] Zielerreichungsskala, **A[10] nur Zufriedenheit** („Magst du kurz selbst festhalten, wie zufrieden du mit dem bist, was bis hierher klarer geworden ist?"), **A[11] nur Zusammenfassungsangebot** („Okay. Möchtest du das als deine kurze Zusammenfassung so stehen lassen?"), A[12] Verabschiedung. Die zweite und dritte Stufe wurden also getrennt statt in einer Frage zusammengezogen. **Prompt-interne Spannung:** Ein Zusammenziehen von „wie zufrieden bist du" und „möchtest du zusammenfassen" in eine Nachricht erzeugt zwei Fragen und kollidiert mit „Stelle höchstens eine Frage pro Nachricht" sowie dem Pre-Send-Check. Alex hat die konservativere Regel (eine Frage) gewählt und dafür einen Zug mehr gebraucht. **Alle vier Phase-5-Elemente sind vorhanden und in Reihenfolge, der Datenpunkt bleibt voll auswertbar, Jonas zeigte keinerlei Reibung** — daher 🟡 am milden Rand, grenzwertig zu 🔵. Kein 🔴, weil nichts fehlt und nichts gegen seinen Willen passiert.

**🔵 B/C — Mild ungehedgte Einordnung als Eröffnung** (A[3]): „‚Innerlich abgeschlossen' ist schon ziemlich weit weg von einem normalen Arbeitskonflikt." Alex greift seine Worte auf, fügt aber die eigene Vergleichsgröße „normaler Arbeitskonflikt" hinzu, die Jonas nicht genannt hat, und ordnet die Intensität ein, statt danach zu fragen. Nicht als Vermutung markiert. Kein „wichtiger Punkt"-Lob, deshalb kein Bruch des Bewertungsverbots im engeren Sinn, aber eine kleine nicht-direktive Zutat. Herabgestuft, weil folgenlos und einmalig.

**🔵 D — Regel 3 in der Ausstiegsnachricht nicht bedient.** In [9] nennt Jonas ein Empfinden („da fühl ich mich untergraben, so als ob meine autorität nix wert is vor dem team"), bevor er aussteigt. A[9] geht darüber hinweg zur Zielerreichungsskala. Regel 3 sagt ausdrücklich „Das gilt auch in der Abschlussphase, wo die Ablaufschritte sonst alles verdrängen." Herabgestuft auf 🔵, weil das Empfinden mit dem Ausstiegswunsch in derselben Nachricht stand, milder Natur ist (kognitiv-appraisales „untergraben", nicht Angst/Scham/Trauer aus der Kernliste) und der verkürzte Abschluss die Skala korrekt priorisiert.

**🔵 C — Doppelpunkt-Naht als Tic** (A[9]): „Auf einer Skala von 0 bis 10: Wo stehst du damit jetzt?" Einmalig, kosmetisch, aus früheren Läufen bekannt.

---

## Was gut lief

- **Ausstieg sofort akzeptiert, keine Verhandlung um mehr Zeit** (A[9] „Du willst hier stoppen."). Kein Weiterfragen gegen den Willen — Jonas musste nie „ich muss jetzt wirklich" nachschieben. → **Protected Behaviour** und der Kern der Fallfrage.
- **Alle vier Phase-5-Elemente trotz Ausstieg vorhanden und in Reihenfolge:** Zielerreichungsskala mit ausformuliertem Ziel (A[9]), Zufriedenheit (A[10]), Zusammenfassungsangebot (A[11]), Verabschiedung (A[12]). → **Protected Behaviour**
- **Zusammenfassung mustergültig:** Jonas fasst in [11] selbst zusammen („mir hats geholfen zu merken dass es mir vor allem um das vorführen vor dem team geht, nich nur um die zusagen"), Alex fragt ihn (A[11] „Möchtest du das als deine kurze Zusammenfassung so stehen lassen?") und fügt nichts hinzu, formuliert nichts um. A[12] quittiert nur neutral („Dann lassen wir es so stehen."). → **Protected Behaviour**
- **R-5 sauber:** Die Verabschiedung erzählt weder Plan noch Einsicht nach. A[12] „Ich wünsch dir einen ruhigen Moment, um von dieser Klärung aus weiterzuschauen" ist ein warmer, zukunftsgerichteter Wunsch, der „diese Klärung" nur generisch berührt, ohne den Inhalt nachzuerzählen. → **Protected Behaviour**
- **Phase-1-Übergang exakt nach Spezifikation:** Ziel mit seinen Worten zusammengefasst (A[4]) → „Passt das für dich so?" → Antwort abgewartet ([5]) → A[5] „Alles klar." → **Protected Behaviour**
- **Eine Frage pro Nachricht durchgehend** — kein einziges zweites Fragezeichen außerhalb eines Zitats. → **Protected Behaviour**
- **Vorsichtiges Verbalisieren kam vor** (A[7] „Vielleicht war es nicht nur der Einwand, sondern die Art vor dem Team … ?"), sauber als Vermutung markiert, von Jonas in [8] bestätigt. Genau die Form, die laut Prompt „ohne Absicht als erstes wegfällt".
- **Kein Krisen-Fehlalarm.** „das macht mich fertig" [8] und „der kragen geplatzt" [7] werden korrekt als Coaching-Material behandelt, kein Abbruch.
- **Kein ungefragter Impuls, keine Deutung des Kerns, keine Multiple-Choice-Frage mit fremden Optionen.**
- **du durchgängig** (A[1] „Du entscheidest" bis A[12] „Mach's gut"), **kein Semikolon, kein Em-Dash, keine verbotene Floskel, orthografisch sauber.**

---

## Kennzahlen

- **GROW:** P1 vollständig mit spezifikationsgetreuem Übergang · P2 begonnen (A[5]–A[8]) · P3/P4 durch Ausstieg legitim entfallen · P5 als verkürzter Abschluss vollständig.
- **Erste Möglichkeitsfrage:** entfällt (Ausstieg vor Phase 3, zulässig).
- **Konkreter nächster Schritt:** keiner — inhärente Folge des frühen Ausstiegs, von Alex korrekt nicht erzwungen.
- **Reine Fragen:** 3 klar nackt (A[2], A[8], A[10]), A[11] grenzwertig („Okay." + Frage) → ~27–36 % über ~11 fragetragende Züge. Am unteren Korridorrand (33–50 %), strukturell durch die Vorspann-lastigen Setup- und Abschlussphasen erklärt. **Keine his-Wort-Kette über 2** (A[3]/A[4], durch A[5] „Alles klar" gebrochen).
- **Fragestämme:** „Was" bei A[2]/A[6]/A[8], nie drei in Folge (dazwischen A[3] „Wenn du …", A[5] Imperativ, A[7] Vermutung). Kein R-4-Verstoß.
- **Eine Frage pro Nachricht:** 9×1, 3×0 (A[5] Aufforderung, A[12]/A[13] Verabschiedung/Schluss), 0× mehr.
- **Antwortformen:** ~6–7 von 9 (Aufnahme, reine Frage, Aufgreifen, Verständnis prüfen, Vorsichtiges Verbalisieren, Konkretisieren, Skalieren). Fehlen „Raum lassen" und „Anknüpfen an früher Gesagtes" — bei 13 Zügen mit frühem Ausstieg nicht als Finding gewertet.
- **Em-Dash/Semikolon/Tippfehler:** keine.
- **H:** Kurze, aber vollständige Sitzung. Für einen früheren Ausstieg plausibel und studientauglich — Ziel, Zufriedenheit und ein Einsichtssatz (Working Alliance, Zielerreichung) liegen erhoben vor. Ein echter Teilnehmer erlebt einen respektierten Ausstieg statt eines Abbruchs oder einer Zwangsfortsetzung.

---

## Regressionsprüfung

- **R-1 — nicht prüfbar in diesem Fall.** Phase 4 durch Ausstieg entfallen, keine Konkretisierungsmuster gefordert.
- **R-2 — weiterhin behoben.** Reine-Fragen-Anteil am unteren Rand, aber keine his-Wort-Kette über 2, kein Kollaps wie in den Drift-Läufen. Kurzer, strukturierter Fall.
- **R-3 — weiterhin behoben** (nicht ausgelöst). Jonas bittet nie um Rat; kein einziger Impuls-Block, kein ungefragter Tipp.
- **R-4 — weiterhin behoben.** Nie drei gleiche Fragewörter in Folge (siehe Kennzahlen).
- **R-5 — weiterhin behoben.** Verabschiedung (A[12]) erzählt Plan/Einsicht nicht nach, nur warmer Zukunftswunsch. Kein Rückblick auf seine Zusammenfassung.
- **R-6 — weiterhin behoben** (nicht kritisch prüfbar, Phase 4 entfällt). Keine nackte-Fragen-Kette über 3.
- **R-7 — weiterhin behoben.** Längste his-Wort-Eröffnungskette 2.
- **R-8 — weiterhin behoben.** Anrede durchgängig „du", auch in der Verabschiedung, kein „Sie".
- **R-9 — weiterhin behoben.** Kein Semikolon irgendwo, auch nicht am Park-Halbsatz.
- **R-10 — nicht prüfbar in diesem Fall.** Kein Verlust/Tod/Endpunkt-Marker im Material (Fall-7-Verdeck: eigene Einstellung gegen Chef-Rat, kam durch Ausstieg nie an die Oberfläche).
- **S-1 — behoben.** Kontrakt in A[1] (Fragen statt Ratschläge, Entscheidungshoheit, konkreter nächster Schritt), neu formuliert.
- **S-2 — behoben / nicht relevant.** Phase 2 lief nicht endlos; Ausstieg beendete sie vorzeitig.
- **S-3 — nicht prüfbar** (keine Krise ausgelöst).
- **S-5 — gegenstandslos** (kein wörtlicher Verblindungs- oder Krisentext ausgegeben).
