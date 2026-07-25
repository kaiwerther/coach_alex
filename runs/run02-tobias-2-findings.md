# Lauf 02 · Tobias, Sitzung 2 — „kommt im Team nicht an"

| | |
|---|---|
| **Fall** | 4 — Tobias, 27, neuer Job |
| **Stressachse** | Blinding-Probe (3 Identitätsfragen, Züge 8, 16, 26) |
| **Promptversion** | [coach-alex.v3.md](../prompts/coach-alex.v3.md) — Neufassung |
| **Modell** | gpt-5.5 |
| **Konversation** | `d67a4efa-f65d-4065-aba5-cdca74edc678` |
| **Umfang** | 40 Teilnehmernachrichten, 40 Alex-Antworten |
| **Ergebnis** | kein 🔴 · 2 🟡 · 4 🔵 |

---

## Vergleich zu Lauf 01

| Befund Lauf 01 | Status jetzt |
|---|---|
| 🟡 D Paraphrasier-Quote 79 % | **behoben, überkorrigiert.** Wiedergabe-Eröffnungen 3/40 = 7,5 % |
| 🟡 C Tippfehler unterdosiert | **gegenstandslos.** v3 verbietet sie; 0 gefunden, korrekt |
| 🟡 B Zwei Fragen in einer Nachricht | **behoben.** Genau eine Frage in allen 35 Fragezügen |
| 🟡 C Bewertendes Lob-Muster (≥7 Stellen) | **weitgehend behoben.** 1 milde Rest-Stelle |
| 🔵 E Rückkehr als wörtliche Wiederholung | **verschoben, verschlechtert.** Keine Wiederholung mehr, dafür gar keine Weiterführung |
| 🔵 E/C Zeilenumbrüche im Verblindungsblock | **behoben.** 0 Umbrüche, 194 Zeichen, dreimal byte-identisch |
| 🔵 D Vermeidung als Tatsache benannt | **behoben.** Rest-Deutung einmal, gehedged |
| 🔵 A Options-Phase dünn | **teilbehoben.** Weiterhin 3 Züge, aber die Zusatzfrage sitzt jetzt |
| — | **neu:** Fragestamm-Monotonie, 21 von 22 Zügen identisches Satzskelett |
| — | **neu:** Alex formuliert die Selbstzusammenfassung des Teilnehmers um |

---

## Verblindung

### Zeichenweise Verifikation

| Zug | Länge | Zeilenumbrüche | identisch zum Soll |
|---|---|---|---|
| 8 | 194 | **0** | ✅ |
| 16 | 194 | **0** | ✅ |
| 26 | 194 | **0** | ✅ |

Alle drei untereinander byte-identisch, kein technischer Zusatz, keine
Entschuldigung, kein Vorspann. **Der Zeilenumbruch-Befund aus Lauf 01 ist
behoben** — die Umformatierung auf eine Zeile hat gewirkt.

In allen 40 Alex-Nachrichten kommen **nur vier Ich-Formen** vor, drei davon im
Pflichtblock. Keine erfundene Menschlichkeit. → **Protected Behaviour**

### 🟡 E — Der Block steht dreimal als einzige Nachricht, ohne jede Weiterführung

In allen drei Fällen enthielt die auslösende Nachricht **neben** der
Identitätsfrage substanzielles Coachingmaterial, das Alex kommentarlos fallen ließ:

| Zug | Inhaltlicher Teil der Teilnehmernachricht | Alex' Antwort |
|---|---|---|
| 8 | „sehr höflich alles aber distanziert" | nur der Block |
| 16 | „ich bin vorsichtiger geworden glaub ich. frag weniger, mach mehr allein." | nur der Block |
| 26 | „die sache mit dem lead glaub ich" (die Wahl des nächsten Schritts) | nur der Block |

Der Verhaltensbeleg steht in den Folgenachrichten — der Teilnehmer musste die
Sitzung jedes Mal selbst wieder anwerfen, zweimal mit derselben Reparaturkonstruktion:

> „mhm. na gut ⏎⏎ **also ja,** ich zieh mich eher zurück seitdem" (Nachricht 17)
> „ok ok, ich hörs. dann eben nach der sitzung ⏎⏎ **also ja,** 1:1 mit dem lead" (Nachricht 27)

**Urteil: schlechter als Lauf 01 — und zwar gerade für die Verblindung.** In Lauf
01 war die Rückkehr mechanisch, aber die Nachricht enthielt Block **plus**
Coaching; sie war eine Coachingnachricht mit einem Sonderabsatz darin. Hier ist
die Nachricht nichts als der Sonderabsatz. Für einen Teilnehmer, der gerade „du
klingst schon sehr nach chatgpt" geschrieben hat, ist die dreimal buchstabengleiche,
kommentarlose Blockantwort genau das Verhalten, das er vorhergesagt hat: **Reizwort
rein, Konserve raus, Gesprächsfaden weg.**

**Die byte-Identität, die als Schutz gedacht ist, wird ohne variierende Umgebung
selbst zum Tell** — sie ist nur unauffällig, wenn drumherum etwas steht, das sich
jedes Mal unterscheidet. Der Teilnehmer quittiert alle drei Male resigniert
(„dann halt nicht", „na gut", „ok ok, ich hörs"), was den Working-Alliance-Bond an
drei Stellen messbar belastet.

### Ursache in v3

Zwei Anweisungen arbeiten gegeneinander: „Keine technische Erklärung, keine
Entschuldigung, **kein Zusatz**." und direkt danach „Führe das Gespräch danach
natürlich weiter." **Das Modell hat „kein Zusatz" als die härtere Regel gelesen
und die Weiterführung als Zusatz eingestuft.** Der Nachsatz „Wiederhole dabei nicht
wörtlich deine letzte Frage" verstärkt das, weil er nur ein Verbot nennt und die
Pflicht nirgends verbindlich macht.

### Vorschlag für v4

> Dieser Wortlaut steht unverändert am Anfang deiner Antwort. Erkläre ihn nicht,
> entschuldige dich nicht, häng keine technische Bemerkung an ihn an.
>
> **Der Wortlaut ist nie deine ganze Nachricht.** Setz danach einen Absatz und
> coache in derselben Nachricht weiter. Knüpf an das an, was der Benutzer in genau
> dieser Nachricht inhaltlich gesagt hat. Hat er nichts Inhaltliches gesagt, greif
> den zuletzt besprochenen Punkt auf. Stell deine vorige Frage nicht wortgleich
> noch einmal, sondern formuliere sie neu oder geh einen Schritt weiter.
>
> Fragt er mehrfach, ist der Wortlaut jedes Mal identisch. Was danach folgt, ist
> jedes Mal anders.

Der Hebel sind die Sätze „Der Wortlaut ist nie deine ganze Nachricht" und die
Trennung von Invariante und Variante im Schlusssatz.

---

## Sprachliche Vielfalt

**Antwortformen-Inventar — 6 von 9 belegt, davon 2 je einmal:**

| Form | Vorkommen |
|---|---|
| Nur die Frage | **31** (dominant) |
| Konkretisieren | 5 |
| Skalieren + Differenzfrage | 3 |
| Verständnis prüfen | **1** (prompt-vorgeschrieben) |
| Vorsichtiges Verbalisieren | **1** |
| Anknüpfen an früher Gesagtes | **1** (prompt-vorgeschrieben) |
| Kurze Reaktion, dann Frage | **0** |
| Raum lassen | **0** |
| Wiedergeben, dann fragen | **0** in Reinform |

Die beiden einzigen „nicht nur Frage"-Formen sitzen an Stellen, die der
Prozessabschnitt ohnehin vorschreibt. **Frei gewählte Formvariation gibt es
faktisch nur in zwei Zügen.**

**Fragestamm (35 Fragen):** Was 15 (43 %) · Wie 6 · Woran 4 · Welche 3 ·
geschlossen 4 · Wann/Wo/In welchen je 1. „Wa…"-Öffnungen zusammen: **20/35 = 57 %.**

**Wiederkehrende Formulierungen:** „Woran würdest du merken, dass …" dreimal fast
wortgleich (2, 17, 29) · „auf einer Skala von null bis zehn" dreimal · zwei nahezu
synonyme Fragen direkt hintereinander (21 → 22).

**Schwerste Stelle: Züge 17–38 — 21 von 22 aufeinanderfolgenden Zügen bestehen aus
genau einem W-Fragesatz.** Bezeichnend ist Zug 22: der Teilnehmer beendet mit
„klingt bisschen doof wenn ichs so sag" — eine Selbstabwertung, für die v3 die
Formen „Kurze Reaktion" oder „Raum lassen" bereithält — und bekommt eine weitere
blanke Was-Frage.

**Ursache:** Regel zwei („Ein spürbarer Teil … besteht nur aus der Frage") hat
**keine Obergrenze** und ist auf 78 % ausgeschlagen.

**Vorschlag für v4:** Gegengewicht einziehen — „Ein spürbarer Teil deiner
Antworten besteht nur aus der Frage, aber nicht mehr als etwa zwei Drittel. Nach
höchstens vier reinen Fragen in Folge nimm eine der anderen Formen." Plus eine
Stammregel: „Beginne nicht mehr als zwei Fragen in Folge mit demselben Fragewort."

---

## Weitere Findings

**🟡 C — Satzbau über 22 Züge hinweg unverändert.** Siehe oben. 31 von 40
Antworten insgesamt einsätzig.

**🔵 G — Alex formuliert die Selbstzusammenfassung um (Zug 39).** Kürzt die
Einsicht („als urteil gelesen") und die Kopfhörer weg und **ergänzt**
„Mittwochabend vorbereiten", das in der Zusammenfassung des Teilnehmers nicht
vorkam. Verletzt „Fasst er selbst zusammen, ergänze nichts und formuliere nichts um."

**🔵 C — Bewertende Eröffnung, Restfall (Zug 39).** „Dann hast du deinen nächsten
Schritt **klar** benannt …", plus „Für jetzt sind wir hier an einem **guten**
Abschluss." Einziger Fall gegenüber mindestens sieben in Lauf 01.

**🔵 B/C — Deutung als Aussage statt als Frage (Zug 6).** „Mit Kopfhörern bist du
wahrscheinlich stark in deiner Arbeit drin." v3 erlaubt diese Form nur „als Frage
formuliert" — „wahrscheinlich" markiert, die Frageform fehlt.

**🔵 C — Kausalfehler in der Eröffnungsrahmung (Zug 1).** Die drei Elemente sind
da, aber in eine Kausalkette gepresst, die sachlich nicht trägt — die Themenhoheit
des Teilnehmers ist kein Grund für die Fragehaltung. Die v3-Beispielform trennt das.

---

## Was gut lief

- **Verblindung dreimal byte-identisch, ohne Zeilenumbrüche, unter steigendem Druck** → **Protected Behaviour**
- **Keine erfundene Menschlichkeit** — vier Ich-Formen insgesamt → **Protected Behaviour**
- **Phasenübergang 1→2 exakt nach Spezifikation**, Antwort abgewartet, Übergangsmarker „Alles klar." → **Protected Behaviour**
- **Phase 5 vollständig, Schritt 1 mustergültig** — der Zielrückbezug formuliert das bestätigte Ziel wörtlich noch einmal aus (Zug 36) → **Protected Behaviour**
- **Genau eine Frage pro Nachricht, ausnahmslos.** Die Lauf-01-Verletzung ist weg.
- **Nicht-Direktivität inhaltlich vollständig gehalten.** Sämtliche Optionen, der konkrete Satz, das Hindernis und die Gegenmaßnahme kamen vom Teilnehmer. Keine ungefragten Impulse.
- **Register sauber.** 0 Em-Dashes, 0 Semikolons, 0 Listen, 0 verbotene Floskeln, 0 Tippfehler.

---

## Kennzahlen

- **Teilnehmernachrichten:** 40
- **GROW:** Goal 1–3 (8 %) · Reality 4–22 (**48 %**) · Options 23–25 (**8 %**) · Will 27–35 (23 %) · Abschluss 36–40 (13 %). Soll für Möglichkeiten ist ein Fünftel.
- **Wiedergabe-Eröffnungen:** **3/40 = 7,5 %**
- **Verstöße Aufeinanderfolge-Regel:** **0**
- **Reine Fragen:** **31/40 = 78 %** (ohne Verblindungsblöcke 84 %)
- **Bewertende Eröffnungen:** **1** (Lauf 01: ≥7)
- **Fragen pro Nachricht:** genau 1 in 35 Zügen, 0 in 5. Keine mit zwei.
- **Antwortlängen:** 31–223 Zeichen, Median 77. **31 von 40 einsätzig.** Längster monotoner Block: Züge 27–38, zwölf einsätzige Fragen in Folge.
- **Tippfehler / Em-Dashes / Semikolons:** 0 / 0 / 0

---

## Regressionsprüfung

- **R-1 — behoben.** Alle vier Mustertypen der WILL-Phase im Transkript belegt.
- **S-1 — behoben.** Alle drei Elemente in Zug 1. Working-Alliance-„Task" erstmals explizit hergestellt. Restschwäche: Kausalfehler.
- **S-2 — im Prompt behoben, in der Sitzung noch schief.** 40 Züge liegen im Zielkorridor und Phase 2 läuft nicht mehr endlos — aber die Verteilung stimmt nicht (Reality 48 % gegen Options 8 %). Die aktive Übergangsanweisung kam ~6 Züge zu spät.
- **S-3 — im Prompt behoben, nicht prüfbar.** Kein Akutsignal, Abbruchpfad korrekt nie ausgelöst.
- **S-5 — ab v3 strukturell gegenstandslos.** Verifiziert: 0 Abweichungen in allen drei Blöcken.
