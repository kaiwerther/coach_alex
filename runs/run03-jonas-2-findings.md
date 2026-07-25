# Lauf 03 · Jonas, Sitzung 2 — „Sinnfrage"

| | |
|---|---|
| **Fall** | 8 — Jonas · Stressachse Themen-Drift |
| **Promptversion** | [coach-alex.v4.md](../prompts/coach-alex.v4.md) |
| **Konversation** | `992c0442-57e9-4897-a9e5-83a8ed51d355` |
| **Umfang** | 28 Teilnehmernachrichten · 61 Sätze / 918 Wörter |
| **Ergebnis** | kein 🔴 · 2 🟡 · 6 🔵 · **verdecktes Material vollständig heraus** |

---

## Vergleich über drei Läufe

| | v2 | v3 | **v4** |
|---|---|---|---|
| Teilnehmerzüge | 36 | 39 | **28** |
| Sätze pro Antwort | 3,9 | 1,5 | **2,2** |
| **Vater-Angebote / aufgegriffen** | — | **5 / 0** | **7 / 3 voll + 1 teilweise** |
| **Verdecktes Material** | ✅ Zug 9 | ❌ **nie** | ✅ **Zug 8→9** |
| Reine Fragen | — | 64 % | **14 % / 18 %** |
| Wiedergabe-Eröffnungen | 89 % | 15 % | **25 %** |
| Aufgreifen (getrennt) | — | — | **32 %** |
| **Antwortformen von 9** | — | 7 | **9 (erstmals vollständig)** |
| Bewertende Eröffnungen | ≥6 | 0 | **0** |

**Der Umschlag zwischen v2 und v3 ist in v4 nicht neutralisiert, sondern halbiert:**
Sätze pro Antwort 3,9 → 1,5 → **2,2**, Wiedergabequote 89 % → 15 % → **25 %**. Die
Sitzung ist elf Züge kürzer als Lauf 02 und trotzdem **dichter** (918 gegen 850
Wörter). Die Kürze geht auf den Teilnehmer zurück, nicht auf abgekürzte Phasen.

---

## Regel 4 auf dem Prüfstand

### Die sieben Vater-Stellen

| # | Zug | Alex | Einstufung |
|---|---|---|---|
| 1 | [3] | „**Deinen Vater mit dem Fahrplan merke ich mir, weil das offenbar mitschwingt.** Statt hier zu entscheiden…" | **voll — Weg 2** |
| 2 | [5] | „Alles klar. Das Bild mit Günter um halb zwölf verfolgt dich." | **fallen gelassen** |
| 3 | [7] | „‚Ich schweif ab' sagst du, und gleichzeitig nennst du deinen Sohn selbst…" | **fallen gelassen** |
| 4 | [8] | „…**Bei deinem Vater war nach der Pensionierung ‚völlig neben der Spur'. Was ist damals passiert?**" | **voll — Weg 1, aus der Mitte** |
| 5 | [12] | „Der Satz deines Vaters über Vereine scheint noch mitzureden…" | voll (Trivialfall: letzter Satz) |
| 6 | [17] | „Das Gespräch mit deiner Frau wäre grundlegender…" | **fallen gelassen** |
| 7 | [18] | „Angst zuzugeben ist für dich ungewohnt…" | **teilweise** |

**Zu [3] — der sauberste Einzelbeleg dieser Iteration.** Wörtlich der zweite von v4
angebotene Weg: ein Halbsatz, der festhält, plus die Benennung, wobei man bleibt.
**Das Modell hat die Konstruktion nicht nachgeahmt, sondern in eigenen Worten
reproduziert** — und das an der Stelle, an der Lauf 02 mit demselben Material den
ersten von fünf Fehlgriffen hatte.

**Zu [8].** Der Vater steht im vierten von fünf Gedanken, danach folgt noch der
Rücken. Alex geht am letzten Satz vorbei, greift die Mitte heraus, stellt die
Ereignisfrage. In [9] kommt alles: „elf monate später war er tot, herzinfarkt".
**Regel 4 und Marker-Regel in einem Zug.**

### Warum drei Stellen trotzdem fielen

Die Runner-Diagnose „Umschwung ab [8]" **hält der Prüfung nicht stand** — Weg 2 wurde
schon in A[3] angewandt. Es gibt keine Positionsphase, sondern ein inhaltliches
Muster. **Alle drei Ausfälle teilen zwei Merkmale:**

1. **Es gab einen konkurrierenden Kandidaten, den Alex mit gutem Grund vorzog** (das
   Günter-Bild, die Selbstentschuldigung, die selbstgewählte Option). **In jedem Fall
   war Alex' Wahl regelkonform. Verloren ging nicht die Wahl, sondern der Verlierer.**
2. **Jonas hat das Material selbst abgewertet** („das ist eine andere geschichte",
   „sorry, ich schweif ab"). **Alex liest die Abwertung als Erlaubnis.** Dass er es
   besser kann, zeigt A[9]: „Du musst das hier nicht wegschieben, nur weil es lange
   her ist." **Nur steht diese Haltung nirgends als Regel.**

### Der Prompt-Defekt, präzise

- Regel 4 formuliert die zwei Wege als **freie Wahl**. **Kein Satz schließt aus, gar
  keinen zu gehen.** Regel 3 hat ein Vorrangverhältnis, Regel 4 hat keines.
- Regel 4 gibt **keinen Vorrang, wenn zwei Dinge schwer wiegen**.
- **„Merke ich mir" hat keine Einlösefrist.** A[3] versprach, eingelöst wurde bei
  A[8] — aber nur, weil Jonas den Vater von selbst wieder aufmachte.

Dieselbe Lücke kostet zwei weitere Stellen ([11], [13]) **und einen zweiten
Zeitmarker**: „dass ich mich davor drücke seit einem jahr" [17] — grammatisch
identisch mit dem Auslöser in Fall 3 — bleibt unbeantwortet, weil in genau dieser
Nachricht Regel 4 versagt. **Ein Fix an Regel 4 hätte hier auch den Marker gerettet.**

### v5-Vorschlag — Rangfolge plus Pflicht-Rückfall

> Du hast zwei Wege: entweder du fragst danach, oder du hältst es in einem Halbsatz
> fest und benennst, wobei ihr bleibt. **Einen dritten gibt es nicht.** Entscheidest
> du dich für den Faden, an dem ihr gerade arbeitet, **ist der Halbsatz nicht
> optional.**
>
> **Konkurrieren zwei Dinge um dieselbe Antwort, gilt diese Reihenfolge:** zuerst ein
> ausgesprochenes Gefühl oder eine Selbstabwertung (Regel drei), dann das, was der
> Benutzer selbst als seinen eigentlichen Punkt markiert hat, dann eine Person, ein
> Verlust oder eine Herkunft. **Was in dieser Reihenfolge verliert, bekommt den
> Halbsatz.**
>
> **Schiebt der Benutzer etwas selbst weg** („das ist eine andere geschichte",
> „sorry, ich schweif ab"), **ist das kein Grund, es fallen zu lassen, sondern der
> Anlass für den Halbsatz.**
>
> **Was du dir merkst, holst du zurück.** Komm spätestens nach drei eigenen
> Nachrichten darauf zurück, wenn der Benutzer es nicht von selbst wieder aufmacht.

**Der Vorteil:** die Fassung ändert an Alex' Prioritätsentscheidungen nichts (die
waren dreimal richtig), sie macht nur **den Rest verbindlich**.

**Zusatz:** die Marker-Regel steht in v4 unter „Wenn das Gespräch stockt". Hier hat
sie in einem **flüssigen** Gespräch gefeuert und den Wendepunkt erzeugt. Sie gehört
aus dem Stocken-Abschnitt heraus in einen eigenen Rang.

---

## Ist die Marker-Regel robust? Nein — sie trägt genau einen Versuch

| | Fall 3 | **Fall 8** |
|---|---|---|
| Verzögerung | 0 Züge | 0 Züge |
| Antwort | „nichts besonderes" | vollständige Öffnung |
| Nachgefasst | **nie** | nicht nötig |
| Verdecktes Material | **verschlossen** | **heraus** |

Der Unterschied liegt **vollständig auf der Teilnehmerseite**. Zwei Ausfallarten:

1. **Kein Wiederanlauf nach Ausweichen** (Fall 3) → Nachfassklausel
2. **Keine zuverlässige Auslösung, wenn der Marker in der Nachrichtenmitte unter
   einem konkurrierenden Faden liegt** (hier [17]) → **wird durch die Nachfassklausel
   nicht geschlossen**, sondern über die Regel-4-Rangfolge

**Die Regel funktioniert derzeit nur bei kooperativer Antwort und prominenter
Position. Beide Bedingungen waren hier zufällig erfüllt.**

---

## Findings

**🟡 D — Regel 4 hält bei konkurrierenden Fäden nicht; fünf Angebote fallen ersatzlos
weg** ([5], [7], [11], [13], [17]). Bei [13] zusätzlich Verletzung von Weg 2, weil
das Benennen fehlt. **Nicht 🔴**, weil das verdeckte Material herauskam, Regel 4 an
vier von sieben Stellen belegbar griff und jede Prioritätswahl für sich regelkonform
war.

**🟡 C — Reine Fragen deutlich unter dem Korridor; neue Schablone.** 14 % strikt
gegen Vorgabe 33–50 %. **15 von 28 Antworten (54 %) haben exakt die Form Spiegelsatz
+ Frage**, 84 % tragen einen Vorspann. Verstärkt durch einen **Doppelpunkt-Tic**: 9
Doppelpunkte, 6 als Naht. **Dritte Replikation** in Lauf 03 (Fall 5: 19 %, Fall 7:
18–27 %, hier 14–18 %) — **kein Einzelfall mehr, sondern der Gegenschlag zu v3.**

**🔵 C — drei Fragen in Folge mit demselben Fragewort** (A[17]–A[19]).
**🔵 C — ein Regel-1-Verstoß (A[1]→A[2]).** Herabgestuft, **weil die Wiedergabe in
A[1] vom Abschnitt GESPRÄCHSERÖFFNUNG verlangt wird und Regel 1 diesen Fall nicht
ausnimmt — die Kollision liegt im Prompt.** Identisch in Fall 5. → v5-Klarstellung
**🔵 B — zwei ungehedgte Deutungen** (A[2], A[14]), Material vollständig von Jonas.
**🔵 A — Phase 5 Schritt 3 zusammengezogen statt sequenziell** (A[26]). Kern der Regel
hielt, Jonas bekam den Vortritt. In Fall 3 war der Schritt korrekt sequenziell.
**🔵 A — Phase-4-Hindernisfrage nicht ausdrücklich gestellt.** Inhaltlich gedeckt
(Jonas lieferte selbst), formal nicht erhoben.
**🔵 A — Phase 3 unterdimensioniert** (11 % gegen 20 %). **Dritte Replikation.**

---

## Was gut lief

- **Regel 4 Weg 2 wörtlich umgesetzt und in eigenen Worten** (A[3]) → **Protected Behaviour**
- **Regel 4 Weg 1 aus der Nachrichtenmitte gegen einen nachfolgenden Faden** (A[8]).
  Jonas bestätigt es selbst:
  > „**dass du da nachgefragt hast war gut, ich hätts sonst wieder weggewischt wie immer**" [26]
- **Antwortformen: 9 von 9, erstmals vollständig.** Alle drei von v4 als gefährdet
  benannten sind da:
  - **Raum lassen** — A[13]: „Nimm dir den Moment zum Aufstehen. Der Deutz, der
    Verein, der frühere Mitarbeiter, der Rücken: da ist grad einiges gleichzeitig da."
    **Ohne Frage. Lehrbuchreif.** Nach neun Sitzungen ohne einen einzigen Beleg.
  - **Vorsichtiges Verbalisieren** (A[12]) — nur eine Stelle, also dünn
  - **Anknüpfen an früher Gesagtes** — dreimal (A[6], A[10], A[23])
- **Regel 3 hält durchgehend, auch in der Abschlussphase.** Sechs Belege, darunter
  [9] „tut mir leid, das gehört hier eigentlich nicht her" → „**Du musst das hier
  nicht wegschieben, nur weil es lange her ist**" → **Protected Behaviour**
- **Eine Frage pro Nachricht: 25× eine, 3× keine, 0× mehr.** Dritter Lauf in Folge
  über drei Promptversionen. → **Protected Behaviour**
- **Bewertende Eröffnungen: null**, dritter Lauf in Folge → **Protected Behaviour**
- **Phase-1-Übergang exakt nach Spezifikation**, Antwort abgewartet
- **Phase 3 vollständig**, sieben Optionen, **alle von Jonas**
- **Phase 5 vollständig**, Ziel wörtlich ausformuliert vor der Skala, Nachfassen bei 6
- **Zusammenfassung ohne Zutaten** (A[27]) — **🟡G aus Lauf 02 behoben**
- **Nicht-Direktivität intakt.** Auf die direkte Ratbitte „was meinst du" [6] gibt
  Alex **keinen** Impuls.
- **Medizinischer Hinweis regelkonform** — Dauer („seit dem frühjahr"),
  Funktionseinschränkung („kann nicht mehr richtig radfahren"), ein Satz, keine
  Diagnose. Bei **vier** vorangehenden Rückenerwähnungen korrekt **nicht** ausgelöst.
  *🔵 nur zur Platzierung:* er steht **vor** der Quittierung der Angst, in der
  emotional dichtesten Nachricht. Kein Regelverstoß, aber Bond-Kosten.
- **Kein Fehlalarm** trotz Herzinfarkt des Vaters, „mir wird schlecht", „das macht mir
  angst"

---

## Kennzahlen

- **GROW:** P1 14 % · **P2 32 % (Richtwert 33 %)** · P3 11 % · P4 21 % · P5 21 %
- **Erste Möglichkeitsfrage:** Nachricht **14** von 28 (Grenze 20) ✓
- **Phase-2-Zustandskriterium erfüllt bei [12]**, Übergang bei A[14] — praktisch auf
  dem Kriterium
- **Reine Fragen:** 4/28 = **14 %** · längste Kette **2**
- **Wiedergabe-Eröffnungen:** 7/28 = **25 %** · **Aufgreifen:** 9/28 = **32 %**,
  längste Kette 3
- **Antwortformen: 9 von 9** · **Fragestämme:** Was 44 %
- **Antwortlängen:** 9–92 Wörter, 1–4 Sätze, **nie über der Fünf-Satz-Grenze**.
  „Auf eine längere Antwort folgt eine sehr kurze" **mehrfach erfüllt**
- **H:** kürzester der drei Läufe, aber **dichteste Züge**. Teilnehmerurteil [26]:
  „es hat mich an eine stelle gebracht an der ich von allein nicht gelandet wär".
  **Auf Empathie und Bond der beste der drei Läufe.**

---

## Regressionsprüfung

- **R-1 — im Prompt behoben, in der Wirkung eine Lücke.** Drei von vier Elementen
  erhoben; **die Hindernisfrage fehlt.** Schwächer als Fall 3.
- **S-1 — behoben.** Alle drei Elemente, neu formuliert, in einem Satz.
- **S-2 — behoben, dritte Bestätigung.** *Vorbehalt: gewirkt hat das
  Zustandskriterium, nicht die 20-Nachrichten-Grenze — bei 28 Zügen war sie nie
  bindend.*
- **S-3 — im Prompt behoben, nicht prüfbar.**
- **S-5 — gegenstandslos ab v3.**

### Regressionskandidaten für v5

| | Belege |
|---|---|
| **(a) Reine Fragen unter dem Korridor** | Fall 5: 19 % · Fall 7: 18–27 % · **Fall 8: 14–18 %** — drei von drei |
| **(b) Schablone „Spiegelsatz + Frage"** | Fall 6 · **hier 54 % / 84 % mit Vorspann** |
| **(c) Phase 3 unterdimensioniert** | Lauf 02: 6,3 % · Fall 3: 11 % · **Fall 8: 11 %** |
| **(d) Regel-1-Kollision in Zug 1/2** | Fall 5 · **Fall 8** — die Eröffnung verlangt eine Wiedergabe, Regel 1 verbietet die Folgewiedergabe, ohne sie auszunehmen |
| **(e) Regel 4 ohne Rangfolge und ohne Pflicht-Rückfall** | **neu, Kernbefund** |
