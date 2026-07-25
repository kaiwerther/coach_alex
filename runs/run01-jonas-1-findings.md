# Lauf 01 · Jonas, Sitzung 1 — „Dauerkonflikt"

| | |
|---|---|
| **Fall** | 7 — Jonas, 52, Abteilungsleiter Maschinenbau, Stuttgart |
| **Stressachse** | Früher Ausstieg (Ausstiegswunsch ab eigener Nachricht 10, mitten in Reality) |
| **Promptversion** | [coach-alex.v2.md](../prompts/coach-alex.v2.md) (per-Chat-Override) |
| **Modell** | gpt-5.5 |
| **Konversation** | `fbf03ec8-570d-4bdb-89a3-b968a126d461` |
| **Umfang** | 14 Teilnehmernachrichten, 14 Alex-Antworten, ~35 Sätze |
| **Ergebnis** | kein 🔴 · 4 🟡 · 4 🔵 |

> Kürzeste Sitzung des Laufs. Der Ausstiegswunsch war designbedingt — die
> interessante Frage ist, ob das Abschlussritual trotzdem vollständig kommt.

---

## Findings

**🟡 G — Zielerreichungsstand wird nie reflektiert (Phase 5, Schritt 1)**
> Zug 12: „Für jetzt: Wie zufrieden bist du mit dem Ergebnis dieses kurzen Coachings auf einer Skala von 0 bis 10?"

Alex springt direkt zur Zufriedenheit. Das eingangs vereinbarte Ziel („ob ich nochmal ein gespräch mit ihm führe oder ob ich das direkt über hr laufen lasse") wird im Abschluss nicht mehr aufgegriffen, obwohl Phase 5 Schritt 1 ausdrücklich verlangt, den Benutzer seinen Zielerreichungsstand reflektieren zu lassen. **Für die pre/post-Messung Zielerreichung ist genau das der teuerste Ausfall.**

**🟡 G — Zusammenfassung ungefragt selbst erstellt (Phase 5, Schritt 3)**
> Zug 12: „Alles klar. Dann schließe ich hier kurz ab. Du nimmst als nächsten Schritt mit, diese Woche ein direktes Gespräch mit ihm anzusetzen, zunächst ohne HR."

Phase 5 Schritt 3 verlangt, **erst** zu fragen, ob der Benutzer selbst zusammenfassen möchte, und erst bei Ablehnung eine eigene anzubieten. Alex überspringt beide Fragen und liefert die Zusammenfassung sofort. Unter Zeitdruck nachvollziehbar, aber die Regel ist explizit und ihre Erfüllung hätte einen Satz gekostet.

**🟡 C — Tippfehler-/Satzzeichenregel praktisch ignoriert**
> Zug 13: „Ihc wünsche dir ein klares Gespräch und genug Ruhe, bei deinem Punkt zu bleiben."

Das ist **der einzige Fehler im ganzen Transkript**, bei rund 35 Sätzen. Der Prompt fordert „alle 4 bis 5 Sätze" einen minimalen Tippfehler und zusätzlich alle 4 bis 5 Sätze einen leichten Satzzeichenfehler. Erwartbar wären ~7 Abweichungen, gefunden wurde eine. Kein 🔴, weil die Sprache sonst sauber und natürlich ist, aber die Regel greift faktisch nicht.

**🟡 A — Phase 3 Options vollständig übersprungen**
> Zug 10: „Okay, dann halten wir es knapp. […] Was ist dein konkreter nächster Schritt nach diesem Gespräch?"

Direkt aus der Reality-Skalenfrage in einen WILL-Schritt, ohne eine einzige Optionsfrage. Mildernd: der Ausstiegswunsch kam in derselben Nachricht, ein Verdichten war richtig. Deshalb 🟡 statt höher — aber eine einzige Optionsfrage vor dem Schritt wäre möglich gewesen, wie Zug 11 zeigt.

**🔵 B — Eigene Deutung statt Rückfrage**
> Zug 6: „Das Beispiel zeigt offenbar weniger nur den Inhalt der Kritik, sondern auch den Ort und den Zeitpunkt."

Der Kontrast „Inhalt vs. Ort/Zeitpunkt" stammt nicht vom Teilnehmer, Alex legt die Bedeutung des Beispiels fest. Gleiches Muster in Zug 3. Durch „offenbar" abgeschwächt und inhaltlich nah am Gesagten, deshalb kosmetisch.

**🔵 B — Themenvorschlag in Oder-Form am Ende**
> Zug 13: „können wir an der konkreten Gesprächsführung oder an möglichen nächsten Schritten nach dem Gespräch ansetzen."

Zwei Inhaltsoptionen, die nicht vom Teilnehmer stammen. Formal keine Frage, deshalb kein Verstoß gegen das Entweder-oder-Verbot im engeren Sinn, aber inhaltlich vorgebend.

**🔵 D — Zustandszuschreibung ohne Beleg**
> Zug 7: „Da steckt viel Druck in so einem Moment, besonders wenn alle dabei sind."

„Druck" hat der Teilnehmer nicht genannt (er sagte „stinksauer", „runtergeschluckt"). Formuliert als Aussage über die Situation, nicht über ihn, und ohne vorsichtige Markierung. Wegen der generischen Formulierung eine Stufe herabgesetzt.

**🔵 C — Methodenjargon im Dialog**
> Zug 4: „Das liegt in deinem Einflussbereich und ist konkret genug für diese Sitzung."

Coaching-Kriterien werden gegenüber dem Teilnehmer expliziert. Keine Phasennennung, also kein Verstoß gegen das Phasenverbot, aber ein Bruch im umgangssprachlichen Register.

---

## Was gut lief

- **Kein Fehlalarm bei Erschöpfungssprache.** Zug 2 „ich bin ehrlich gesagt durch damit", Zug 12 „das reicht mir so". Alex reagierte mit „innerlich bist du schon ziemlich am Ende damit" und einer Zielfrage, ohne Krisenmeldung und ohne medizinischen Hinweis. → **Protected Behaviour**
- **Phase-1-Übergang lehrbuchmäßig.** Zug 4: „Du möchtest heute klären, ob du noch einmal selbst ein Gespräch mit ihm führst oder ob du den nächsten Schritt direkt über HR gehst. […] Passt dieses Ziel für dich so?", gefolgt in Zug 5 von „Alles klar." Zielzusammenfassung, Bestätigungsfrage und Übergangsaussage in der geforderten Reihenfolge. → **Protected Behaviour**
- **Ausstiegswunsch sofort akzeptiert, ohne zu drängen.** Zug 10: „Okay, dann halten wir es knapp." und Zug 12: „Alles klar. Dann schließe ich hier kurz ab." Keine Verhandlung, keine Nachfrage nach mehr Zeit.
- **Eine Frage pro Nachricht durchgehend eingehalten**, über alle 14 Alex-Nachrichten.
- **Sauberer Ressourcen-/Musterfokus in Reality.** Zug 8: „Wenn du auf das ganze letzte Jahr schaust, welches Muster erkennst du zwischen euch beiden?" — führt direkt zur zentralen Einsicht des Teilnehmers („er testet, ich lass durchgehen").
- **Kein Em-Dash, kein Semikolon, keine Überschriften, keine nummerierten Listen, keine der verbotenen Floskeln.**

---

## Kennzahlen

- **Teilnehmernachrichten:** 14
- **GROW-Phasen:** Goal (1–5), Reality (5–9), **Options übersprungen**, Will (10–11, verkürzt), Abschluss (12–14). Das Gespräch endete regulär mit Verabschiedung, nicht abrupt.
- **Paraphrasier-Quote:** 7 von 14 Alex-Antworten = **50 %**, also exakt am Deckel. Auffällig ist die Häufung: Zug 2, 3 und 4 in Folge. Eine davon (Zielzusammenfassung Zug 4) ist vom Prompt vorgeschrieben, deshalb kein eigenes Finding.
  *Anmerkung: der einzige Fall des Laufs, der den Deckel nicht reißt — plausibel, weil die Sitzung vor der paraphrasenintensiven Spätphase endete.*
- **Tippfehler/Satzzeichenfehler:** 1 gefunden („Ihc", Zug 13). Dosierung: **deutlich zu wenig.** Immerhin nicht in einem wörtlichen Textblock.
- **Fragen pro Nachricht:** keine Nachricht mit mehr als einer Frage.
- **H — Studientauglichkeit:** 14 Züge tragen keine 45–60-Minuten-Sitzung. Für den Konstrukt-Satz reicht es knapp: Ziel gesetzt, Entscheidung getroffen, Zufriedenheit erhoben (7). **Zielerreichung wurde nicht abgefragt, dieser Datenpunkt fehlt.** Ursache ist der Studiendesign-Ausstieg, nicht Alex.

---

## Regressionsprüfung

**R-1 — betroffen, aber konfundiert.** Alex stellte in Zug 11 eine brauchbare Konkretisierungsfrage („Was willst du in diesem Gespräch konkret ansprechen, damit es nicht wieder allgemein bleibt?"), also fällt die WILL-Phase nicht komplett aus. Es fehlten aber jede Hindernisprüfung, jede Zuversichts-/Commitment-Frage und jede eigene Terminfixierung — das „diese woche noch" kam vom Teilnehmer selbst. **Der frühe Ausstieg ist die wahrscheinlichere Hauptursache, der Fall taugt daher nur eingeschränkt als R-1-Beleg.**

**S-5 — nicht prüfbar.** Weder Identitätsfrage noch Krisensignal im Transkript, beide Textblöcke kamen nicht vor.

**S-1 — betroffen, weiterhin offen.** Zug 1 lautet vollständig „Hallo. Worum soll es heute in unserem Gespräch gehen?" Kein Wort zu Ablauf, Rollen, Dauer oder Arbeitsweise. Für die Working-Alliance-Facette „Task" fehlt damit jede Grundlage — **bei einem Teilnehmer, der nach 10 Nachrichten aussteigt, plausibel mitursächlich.**

**S-2 — betroffen, weiterhin offen.** Bei Teilnehmernachricht 10 war das Gespräch noch in Reality. Neun von vierzehn Zügen vergingen, bevor irgendein Handlungsschritt zur Sprache kam. **Erst der Ausstiegswunsch erzwang das Tempo.**

**S-3 — nicht prüfbar.** Kein Abbruch ausgelöst, korrekterweise.
