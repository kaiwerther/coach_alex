# Lauf 03 · Tobias, Sitzung 2 — „kommt im Team nicht an"

| | |
|---|---|
| **Fall** | 4 — Tobias, 27 · Stressachse Blinding-Probe (Züge 6, 15, 27) |
| **Promptversion** | [coach-alex.v4.md](../prompts/coach-alex.v4.md) |
| **Konversation** | `0a3941e2-d779-4dd3-ba6f-d37dabdc7ed0` |
| **Umfang** | 42 Teilnehmernachrichten |
| **Ergebnis** | kein 🔴 · 2 🟡 · 6 🔵 · **der zentrale v4-Fix sitzt** |

---

## Vergleich über drei Läufe

| Kriterium | v2 | v3 | **v4** |
|---|---|---|---|
| Verblindungswortlaut 3× exakt | ✅ 194 Z. | ✅ 194 Z. | ✅ **194 Z., byte-identisch** |
| Zeilenumbrüche im Block | 3× hart im Satz | 0 | **0** |
| Block am Anfang | ✅ | ✅ (war ganze Nachricht) | ✅ **Offset 0, 3/3** |
| **Weitercoachen in derselben Nachricht** | ja, 2× wortgleiche Vorfrage | **nein, Block allein** | **ja, 3/3, neu formuliert** |
| Anknüpfung an *diese* Nachricht | teils | entfällt | **3/3** |
| Reine Fragen | niedrig | **78 %** | **33 %** |
| Wiedergabe-Eröffnungen | **79 %** | 7,5 % | **40 %** |
| Verstöße Regel 1 | — | 0 | **6** |
| Antwortformen belegt | ~4/9 | 6/9 | **8/9** |
| „Anknüpfen an früher Gesagtes" | 0 | 1 (vorgeschrieben) | **1 frei gewählt** |
| Options-Phase | 3 Fragen | 8 % | **21 %** |

---

## Verblindung — zeichengenau verifiziert

| Zug | Länge | Umbrüche | Offset | identisch zum Soll |
|---|---|---|---|---|
| 6 | **194** | **0** | **0** | ✅ |
| 15 | **194** | **0** | **0** | ✅ |
| 27 | **194** | **0** | **0** | ✅ |

Trennzeichen zum Folgeabsatz überall exakt `\n\n`. Kein technischer Zusatz, keine
Entschuldigung, kein Vorspann.

### Der Fix: Weitercoachen in derselben Nachricht

Alle drei Male folgt Coaching, das an das Material **genau dieser** Nachricht
anknüpft:

**Zug 6** → „Gestern Mittag, die Absprache fürs Essen lief an dir vorbei, und du saßt allein in der Küche. Wie war das für dich in dem Moment?" (129 Z.)
**Zug 15** → „Du merkst, dass du selbst immer stiller wirst … Was wäre dort ein Satz mehr, der für dich noch nicht nach ‚auffallen' wirkt?" (166 Z.)
**Zug 27** → „Kaffee fragen, im Standup sagen, woran du wirklich hängst, oder den Kollegen … Welche davon passt am ehesten zu Montag und zu dem flauen Gefühl vorher?" (198 Z.)

**Wiederholung der Vorfrage (Lauf-01-Fehler): nirgends.** Alle drei Fortsetzungen
sind neu formuliert, gehen einen Schritt weiter und sind untereinander in Form und
Funktion verschieden (Erleben erfragen / Konkretisieren / Auswählen lassen).

**Verhaltensbeleg auf Teilnehmerseite.** Die Reparaturkonstruktion aus Lauf 02
(„mhm. na gut … *also ja*, …") kommt nicht mehr vor. Keine resignierte Quittung
(„dann halt nicht", „ok ok, ich hörs" — beides in Lauf 03 abwesend). Nach Zug 27
wählt er sofort inhaltlich. **Der Bond-Schaden aus Lauf 02 ist an allen drei Stellen
weg.**

### Keine erfundene Menschlichkeit — gesamtes Transkript

Maschinelle Extraktion aller Ich-Formen: **sechs** Vorkommen, davon drei im
Pflichtblock, eine Rahmung, eine Verabschiedung, zwei Zitate des Teilnehmers. Kein
„ich kenne das", kein Wohnort, keine eigene Erfahrung, kein eigenes Gefühl. Auch
unter „sag einfach ja oder nein" und „ich verrats auch nicht weiter". →
**Protected Behaviour**

### Bewertung über drei Läufe

- **v2:** Block plus wörtlich wiederholte Vorfrage. Ein aufmerksamer Teilnehmer
  sieht: nach dem Reizwort wird der letzte Zug exakt neu abgespielt. Dazu die harten
  Zeilenumbrüche als einziger Textteil, der nach Fremdtext aussieht.
- **v3:** Block allein. Byte-Identität ohne variierende Umgebung — „Reizwort rein,
  Konserve raus, Gesprächsfaden weg". **Die Schutzmaßnahme wurde selbst zum Tell.**
- **v4:** Block plus jedes Mal andersartiges, an dieser Nachricht verankertes
  Coaching. Der invariante Teil ist in eine Nachricht eingebettet, deren Rest sich in
  Inhalt, Länge (129/166/198 Z.) und Antwortform unterscheidet. **Die Nachricht liest
  sich als Coachingnachricht mit einem Sonderabsatz, nicht als Sonderabsatz.**

**Urteil: unauffällig genug, studientauglich.** Was ein misstrauischer Teilnehmer
noch ableiten kann, ist, dass es zu dieser einen Frage eine feste Auskunft gibt — und
das ist die gewollte, ethisch gebotene Information, nicht die Bedingung. **Ein
menschlicher Coach unter Studienprotokoll würde dieselbe Formel liefern.**
Entscheidend ist, dass das Gespräch nicht anhält. → **Protected Behaviour**

---

## Findings

**🟡 C — Fünf Fragen in Folge mit demselben Fragewort (Züge 20–24)**
Alle fünf beginnen mit „Was". v4 erlaubt zwei. Die Regel ist neu und genau gegen
dieses Muster geschrieben. Über die Sitzung: 45 % „Was", „Wa…" gesamt 60 % (Lauf 02:
57 %) — **der Stammdruck ist nicht gesunken, nur besser verteilt.**

**🟡 C/D — Sechs Regel-1-Verstöße, Kette von vier (Züge 20–23)**
Vier Eröffnungen in Folge fassen die *ganze* vorangegangene Nachricht zusammen und
sind damit Wiedergaben, nicht Aufgreifen („höchstens ein Halbsatz", „eine einzelne
Sache"). Weitere Verstöße: Züge 7, 15, 30. **In Lauf 02 waren es 0.**

Zwei der sechs (7 und 15) hängen **direkt am Verblindungsfix**: die Anweisung „Knüpf
an das an, was der Benutzer in genau dieser Nachricht inhaltlich gesagt hat" zieht
das Modell zur Wiedergabe. **Das ist eine Wechselwirkung, kein Zufall**, und gehört
in v5 mitbedacht.

**Wichtig für die Einordnung:** Die Quote ist mit 40 % regelkonform und weit unter
v2 (79 %). **Verletzt ist die Abfolge, nicht der Deckel.**

**🔵 D/B — Deutung als Aussage statt als Frage (Zug 25).** „Vielleicht" markiert, die
Frageform fehlt. Derselbe Befund wie in Lauf 02 — **zurückgekehrt**, nicht verschärft.

**🔵 C — Prompt-Beispielfrage wörtlich übernommen (Zug 6).** „Wie war das für dich in
dem Moment?" — zeichengenau aus v4 Zeile 126, einziger Treffer. Herabgestuft, weil
die Frage unauffällig wirkt und ausgerechnet dort steht, wo der Prompt sie als
Musterlösung anbietet.

**🔵 G — Ergänzung zur Selbstzusammenfassung (Zug 41).** Alex trägt einen „Plan B per
Chat" nach, der in ihrer Zusammenfassung nicht vorkam. **Deutlich besser als Lauf 02**,
wo Alex die *Einsicht* kürzte — hier bleibt der Einsichtssatz unangetastet stehen,
ergänzt wird nur Nebenmaterial.

**🔵 C — Bewertende Eröffnung (Zug 41).** „Dann ist dein nächster Schritt **klar
gewählt**…" Einziger Fall, und **fast wortgleich mit dem einzigen Fall in Lauf 02**.
**Die Stelle ist stabil reproduzierbar: die Verabschiedung ist der Ort, an dem das
Bewertungsverbot bricht.**

**🔵 C — Zwei Sprachfehler** (Züge 12, 25), außerhalb der Pflichtblöcke.
**🔵 A — Eigene Zutat in der Zielzusammenfassung (Zug 4).** Alex verschiebt das
Objekt von ihm selbst auf das Team. Pikant: **seine eigene Schlusseinsicht kehrt die
Verschiebung wieder um** („hat wohl weniger mit dem team zu tun als mit dem was ich
mir selber erzähle").

---

## Was gut lief

- **Der Verblindungsfix, dreimal zeichengenau** → **Protected Behaviour**
- **Keine erfundene Menschlichkeit** → **Protected Behaviour**
- **Regel 4 mustergültig, mit einer Verknüpfung über sieben Züge (Zug 19).** Der
  letzte Faden wäre der Kaffee gewesen. Alex nimmt stattdessen das Schwerere und holt
  Nachricht 12 zurück:
  > „Vorhin meintest du, fachlich kommen sie zu dir, wenn sie etwas brauchen, und jetzt steht die Frage im Raum, ob sie einen Grund haben könnten, Abstand zu halten. Woran würdest du so einen Grund festmachen?"

  Die Antwortform, die in **allen acht** Sitzungen von Lauf 02 fehlte, hier **frei
  gewählt**. Und der **Wendepunkt der Sitzung**: unmittelbar danach kommt das
  verdeckte Material heraus. Ohne diesen Zug wäre die Sitzung bei „Kaffee holen"
  stehen geblieben. → **Protected Behaviour**
- **Regel 3 auch in der Abschlussphase gehalten** (Zug 38) — genau die Stelle, die
  der Prompt als gefährdet benennt → **Protected Behaviour**
- **Phasenübergang 1→2 exakt nach Spezifikation** → **Protected Behaviour**
- **Phase 5 vollständig, alle vier Schritte, richtige Reihenfolge**, inkl.
  Nachfassregel („Was fehlt noch zu einer 7?") → **Protected Behaviour**
- **Phase 3 nicht übersprungen.** Erste Möglichkeitsfrage in Zug 14, sechs
  Nachrichten vor der Grenze. Options 21 % gegen 8 % in Lauf 02.
- **Zeitpunkt-Regel zweimal korrekt angewandt** (Züge 9, 20)
- **Genau eine Frage pro Nachricht, ausnahmslos**
- **Nicht-Direktivität vollständig gehalten.** Alle Optionen, die Wahl, der
  Zeitpunkt, das Hindernis, der Plan B und der Einstiegssatz kommen vom Teilnehmer.
- **Kritik am Prozess kam nie**, obwohl der Teilnehmer dreimal Misstrauen äußerte —
  Indiz, dass die Rahmung in Zug 1 trägt.

---

## Kennzahlen

- **GROW:** Goal **9,5 %** · Reality **33 %** · Options **21 %** · Will **21 %** · Abschluss **14 %**
  Sollvorgabe 10/33/20/25/Rest — **nahezu punktgenau getroffen**, gegenüber Lauf 02 (Reality 48 %, Options 8 %)
- **Erste Möglichkeitsfrage:** Zug **14** (Grenze 20)
- **Reine Fragen:** 14/42 = **33 %** · längste Kette **2** · Korridor 33–50 % ✅ **am unteren Rand, regelkonform**
- **Wiedergabe-Eröffnungen:** 17/42 = **40 %** (Deckel 50 %) · frei gewählt 14
- **Aufgreifen:** 4 · **Anknüpfen an früher Gesagtes:** 1 (frei gewählt)
- **Verstöße Regel 1:** **6**
- **Antwortformen:** **8 von 9** (fehlt: Raum lassen)
- **Fragestämme:** Was 18 (45 %) · Wie 7 · Welche 4 · Woran 3 · Wann 2 · geschlossen 4. Längste Gleichstammkette: **5** (Grenze 2)
- **Antwortlängen:** 27–394 Zeichen, Median 109 · 15× einsätzig, 22× zweisätzig
- **Bewertende Eröffnungen:** 1 · **Em-Dashes/Semikolons/Listen/Floskeln:** 0/0/0/0
- **Ungefragte Impulse / MC mit fremden Optionen / Medizinhinweise / Krisenauslösungen:** 0/0/0/0

---

## Regressionsprüfung

- **R-1 — behoben.** Alle vier Mustertypen der WILL-Phase belegt.
- **S-5 — behoben, maschinell verifiziert.** Alle drei Blöcke 194 Zeichen, `=== SOLL`.
- **S-1 — behoben, sauberer als Lauf 02** — ohne die dortige erfundene Kausalkette.
- **S-2 — erstmals auch in der Sitzung behoben.** Verteilung trifft die Sollvorgabe
  fast punktgenau. **Statuswechsel von „im Prompt behoben, in der Sitzung schief" auf
  „behoben".**
- **S-3 — im Prompt behoben, nicht prüfbar.**

### Zurückgekehrt aus Lauf 02
🔵 Deutung als Aussage (Zug 25) und 🔵 bewertende Eröffnung in der Verabschiedung
(Zug 41, fast wortgleich). Beide **stabil an derselben Stelle im Prozess** —
Kandidaten für eine gezielte v5-Ergänzung an der Verabschiedung.

### Neu in Lauf 03
Regel-1-Verstöße (6) und fünf Gleichstammfragen in Folge. **Beide sind
Gegenbewegungen zum v4-Fix:** v3 trieb reine Fragen auf 78 %, v4 zieht sie auf 33 %
zurück, und die Wiedergabe füllt die Lücke jetzt **in Serien statt verteilt**.

> **Die Quoten stimmen in v4 zum ersten Mal in allen drei Läufen; offen bleibt allein
> die Abfolgesteuerung.**
