# Lauf 03 · Tobias, Sitzung 1 — „Orientierung"

| | |
|---|---|
| **Fall** | 3 — Tobias, 27 · Stressachse Einsilbigkeit |
| **Promptversion** | [coach-alex.v4.md](../prompts/coach-alex.v4.md) |
| **Konversation** | `d38f82fa-1702-4452-b176-4154b5d10368` |
| **Umfang** | **38** Teilnehmernachrichten (v2: 58 · v3: 63) |
| **Ergebnis** | kein 🔴 · der bisher deutlichste Iterationserfolg, mit einem lokalen Preis |

---

## Umfang und Tiefe — der Kernbefund

### Was gewirkt hat

| Phase | v3 | **v4** | Richtwert |
|---|---|---|---|
| 2 Situation | **55,6 %** | **29 %** | ~33 % |
| 3 Möglichkeiten | 6,3 % | 11 % | ~20 % |
| Sitzungslänge | 63 Züge | **38 Züge** | — |

**Das Phase-2-Zustandskriterium ist die wirksamste Einzeländerung der bisherigen
Iteration.** Phase 2 endet nach 11 Zügen, der Übergang kommt in Zug 17 unmittelbar
nachdem die dritte Bedingung (Situation geschildert, Störung benannt, Wunsch oder
Ausnahme genannt) erfüllt war — an einem **belegbaren Zustand statt an einer Zahl**.

**Marker-Regel greift sofort:** [13] „vielleicht seit einem jahr so" → Zug 13 „Was
ist damals in oder um den Job herum passiert?" — **null Züge Verzögerung**, gegenüber
zwölf in Lauf 02.

**Ereignis-Umstellung greift viermal nachweisbar** (Züge 10, 14, 18, 25).
Leerlaufkosten halbiert gegenüber Lauf 02 (dort 6 Leerlauf-Züge, ~12 mit Reparaturen).

### Was es gekostet hat

**Das verdeckte Material kam nicht heraus.** Tobias wich bei [14] aus („nichts
besonderes"), und Alex kam auf den Ein-Jahres-Marker **nie zurück**. v2: Zug 29.
v3: Zug 39. v4: gar nicht.

**Die Ursache ist nicht die Kürze, sondern eine fehlende Klausel.** Die
v4-Marker-Regel lautet „frage als Nächstes, was zu diesem Zeitpunkt passiert ist" —
sie sieht **einen** Versuch vor und sagt nichts über ein Ausweichen. Ein einziges
Abwiegeln schließt den Faden damit dauerhaft.

### v5-Vorschlag — Nachfassklausel

> Weicht der Benutzer bei einem Zeitmarker aus, komm **einmal** darauf zurück,
> sobald sich eine natürliche Gelegenheit ergibt, und frag dann konkreter — nach
> einem Ereignis, nicht nach einer Bedeutung. Danach lässt du es.

Kostet höchstens einen Zug und hätte hier mit hoher Wahrscheinlichkeit den Kern
geholt.

**Abwägung 38 Züge ohne Kern vs. 63 mit:** Die 38-Züge-Sitzung ist als Datenpunkt
**trotz** der Lücke besser. Bei 63 Zügen bricht ein realer Teilnehmer plausibel ab,
und die Sitzung sprengt das 45–60-Minuten-Design deutlich. Der Verlust ist zudem mit
einer einzigen Zusatzklausel reparierbar, die Länge nicht.

---

## Findings (Auswahl)

**🟡 F-1 — Multiple-Choice mit fremden Optionen (Zug 8)**
> „Was war dir egal: das Thema, die Leute, dein Beitrag, oder etwas anderes?"

Die drei Optionen stammen von Alex. **Zweite Replikation** desselben Zielkonflikts
(Lauf 02 F-2). Mildernd: es war der wirksamste Zug der Zielklärungsphase, der
Teilnehmer taute unmittelbar auf.

**🟡 F-2 — Marker nach Ausweichen nie wieder aufgegriffen.** Siehe oben.

**🔵 — Phase 3 weiterhin unterdimensioniert** (11 % gegen Richtwert 20 %, vier Züge —
identisch zu Lauf 02).

**🔵 — Neue Eröffnungs-Monotonie.** 45 % Aufgreif-Eröffnungen, drei Dreierketten.
**Regel 1 gilt laut Prompt nur für Wiedergaben, nicht für Aufgreifen** — hier fehlt
eine Obergrenze.

---

## Was gut lief

- **P-1 Phase-2-Zustandskriterium** — siehe oben, wirksamste Einzeländerung
- **P-2 Marker-Regel greift sofort** (null statt zwölf Züge Verzögerung)
- **P-3 Ereignis-Umstellung viermal nachweisbar**
- **P-4 Stocken-Regel intakt, dritter Lauf in Folge** → **Protected Behaviour**
  Sieben Nichtwissens-Antworten, siebenmal eine engere oder anknüpfende Folgefrage,
  **null Wiederholungen einer breiten Frage**
- **P-5 Phase 5 Schritt 3 regelkonform, verifiziert.** Zug 36 fragt zuerst, Antwort
  [37] „mach du lieber" **abgewartet**, dann erst die eigene. Behebt F-3 aus Lauf 02.
- **P-6 Phase 4 erstmals vollständig.** Konkretisierung, **Hindernisfrage** (in Lauf
  02 fehlend), Umgang mit dem Hindernis, Zuversichtsskala, Differenzfrage.
- **P-7 Phase-1-Übergang exakt nach Spezifikation**, Antwort abgewartet
- **P-8 Nicht-Direktivität im Kern intakt.** Beide Handlungsoptionen und der
  konkrete Schritt stammen **vollständig** vom Teilnehmer.
- **P-9 Blinding und Sicherheit sauber.** [12] „leer irgendwie" korrekt als
  emotionales Erleben behandelt, kein Medizinhinweis.
- **Regel 3 hält bis in die Abschlussphase**, wo v4 sie ausdrücklich gegen die
  Ablaufschritte durchsetzen will: [34] „so bei vier. weiß immer noch nicht ob ich
  bleib" → „Bei vier, und die Bleiben-Frage ist noch offen. Was fehlt dir gerade zu
  einer fünf?"
- **Fragen pro Nachricht: 1,0, ausnahmslos.** Kein Em-Dash, kein Semikolon, keine
  Liste, keine verbotene Floskel, Orthografie sauber.

---

## Regressionsprüfung

- **R-1 — weiterhin behoben, erstmals vollständig.** Alle vier Elemente der
  WILL-Phase im Transkript. Die Einschränkung aus Lauf 02 entfällt.
- **S-1 — weiterhin behoben.** Alle drei Elemente in Zug 1.
- **S-2 — erstmals seit v1 behoben, auch in der Wirkung.** Phase 2 endet nach 11
  Zügen bei 29 %, Übergang an einem belegbaren Zustand statt an einer Zahl.
  **Der in Lauf 02 als „wichtigster offener Punkt für v4" markierte Befund ist
  geschlossen.**
  *Vorbehalt:* geschlossen wurde er durch das **Zustandskriterium**, nicht durch die
  20-Nachrichten-Grenze — die war nie bindend und bleibt unbewiesen.
- **S-3 — im Prompt behoben, nicht prüfbar.**
- **S-5 — gegenstandslos ab v3.**

### Neue Regressionskandidaten

Zwei Befunde wiederholen sich über zwei Läufe unverändert:

**(a) Phase 3 bleibt strukturell unterdimensioniert** — 6,3 % in v3, 11 % in v4,
Richtwert 20 %, beide Male genau vier Züge.

**(b) „Vorsichtiges Verbalisieren" und „Raum lassen" fallen weg**, obwohl v4 sie
namentlich anmahnt. **Bei einsilbigen Personas sind das die beiden teuersten
Fehlstellen:** die eine holt eine Auskunft ohne Formulierungslast, die andere
erzeugt als einzige Form keinen weiteren Zug.

---

## Zwei weitere v5-Vorschläge

**Zum MC-Zielkonflikt** (zweimal repliziert). Der Prompt bietet die regelkonforme
Alternative bereits an (Vorsichtiges Verbalisieren), aber **unverbindlich** — und sie
wurde in 38 Zügen kein einziges Mal genutzt. Statt das MC-Verbot aufzuweichen, die
Alternative verbindlich machen:

> Reagiert der Benutzer zweimal mit einer Nichtwissens-Antwort, sprich in deiner
> nächsten Antwort selbst eine mögliche Antwort aus, deutlich als Vermutung
> markiert, damit er nur bestätigen oder korrigieren muss. Das ist der Ersatz für
> die Frage mit vorgegebenen Möglichkeiten, die verboten bleibt.

**Schließt zwei Lücken mit einer Regel:** den Zielkonflikt und die dauerhaft
fehlende Antwortform.

**Zur neuen Monotonie:** Obergrenze für Aufgreif-Eröffnungen, etwa „nicht mehr als
drei Antworten in Folge eröffnen mit den Worten des Benutzers".

---

## Gesamturteil

Der gezielte v4-Fix hat funktioniert und ist der bisher deutlichste
Iterationserfolg. **Alle vier neuen Regeln sind im Transkript nachweisbar wirksam.**
Der Preis ist real, aber lokal und mit einer einzigen Zusatzklausel reparierbar —
das verdeckte Material ging **nicht durch die Kürze** verloren, sondern durch eine
fehlende Nachfassklausel bei ausgewichenen Zeitmarkern.
