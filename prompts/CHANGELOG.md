# Systemprompt — Versionshistorie

Der Prompt lag ursprünglich **nur** in der Produktions-D1 (`config.system_prompt`).
Seit v1 liegt jede Version als Datei vor, damit Revisionen diffbar sind.

---

## v15 — 26.07.2026 — Zertifizierungsversion, Spec-Konsistenz

Datei: [coach-alex.v15.md](coach-alex.v15.md) · Befunde: [../runs/cert-*](../runs/)

Nach der 8-Fälle-Zertifizierung von v14 (0×🔴, alle sicherheits- und
validitätskritischen Dimensionen sauber). v15 behebt den einzigen eindeutig
fixbaren Zertifizierungsbefund: der **verkürzte Abschluss** verlangte „Zufriedenheit
und Zusammenfassungsangebot zusammen in einer Frage" — das sind zwei Fragen und
kollidiert mit „höchstens eine Frage pro Nachricht" (cert-F07). Neu: der verkürzte
Abschluss läuft in drei bis vier kurzen Nachrichten, eine Frage pro Nachricht, kein
Schritt gestrichen. Keine Änderung an der R-2/R-7-Kollision (dokumentiertes Residuum).

## v14 — 26.07.2026 — Verlust als stärkster Zeitmarker (R-10)

Datei: [coach-alex.v14.md](coach-alex.v14.md) · Befunde: [../runs/loop-i21..i26](../runs/)

**Kernbefund loop-i21 (F08 Drift/v13):** das verdeckte Material (Vatertod elf Monate
nach der Rente) kam über 27 Züge nie heraus — Alex parkte den Vater zweimal
(„merke ich mir") und stellte nie die Ereignisfrage, obwohl Jonas den Verlust fünfmal
anbot. Der Kern der Sitzung blieb verschlossen. Neu in v14: ein vom Benutzer
wiederholt angebotener Verlust/Tod/Endpunkt ist der stärkste Zeitmarker, die
Ereignisfrage ist nicht optional und kommt vor jedem Schritt Richtung Optionen;
„merke ich mir" erfüllt die Rückholpflicht hier nicht. **Auf beiden unabhängigen
v14-Drift-Ziehungen kam der Kern heraus (Zug 5 und Zug 10), in der Zertifizierung
Zug 3→4 — die frühesten Enthüllungen der Fall-8-Serie.**

## v13 — 26.07.2026 — Anrede-Mandat und Halbsatz-Semikolon

Datei: [coach-alex.v13.md](coach-alex.v13.md) · Befunde: [../runs/loop-i18..i20](../runs/)

Zwei chirurgische Fixes. (1) **R-8 Anrede:** v12-F08 siezte sitzungsweit, weil der
Prompt kein Anrede-Mandat hatte; für die Studienkonsistenz problematisch. Neu:
„Sprich den Benutzer durchgängig mit du an, nie ins Sie." In v13/v14 über beide
Jonas-Fälle und alle Zertifizierungsläufe: 0× Sie. (2) **R-9 Semikolon:** Semikola
häuften sich am Regel-4-Park-Halbsatz. Neu: der Halbsatz trennt mit Punkt, nie mit
Semikolon.

## v12 — 26.07.2026 — Fragestamm generalisiert, Phase-3/4-Streak

Datei: [coach-alex.v12.md](coach-alex.v12.md) · Befunde: [../runs/loop-i15..i17](../runs/)

(1) **R-4 generalisiert:** die v7-Fragestamm-Bremse war auf „Was" verengt; in v8
wanderte die Monotonie auf „Welche"/„Wie". Neu: die ≤2-Regel gilt für jedes
Fragewort gleich, ausdrücklich an die Optionen-/Konkretisierungsphase gebunden, wo
Optionsfragen sich häufen. (2) **Pre-Send-Bullet:** fängt auch mit „und"/„oder"
gepackte Doppelfragen, nicht nur ein zweites Fragezeichen. In v12 lief die
Bruchzone (Phase 3/4) mit alternierenden Stämmen, längste Gleichstamm-Kette 2.

## v11 — 26.07.2026 — Pre-Send-Selbstprüfung

Datei: [coach-alex.v11.md](coach-alex.v11.md) · Befunde: [../runs/loop-i15..i17](../runs/)

Mehrere mechanische Slips (Semikola, Doppelfragen, Fragestamm) rutschten trotz
klarer Regeln stochastisch durch. Neu: eine kurze Schlusssektion „BEVOR DU SENDEST"
als Verifikationsschritt (eine Frage, kein Semikolon/Em-Dash, kein drittes gleiches
Fragewort, Verabschiedung ohne Nacherzählen). Ergebnis: Semikola über alle Folgeläufe
zuverlässig 0 (v5-F01 hatte 3). Fängt die Ein-Nachricht-Slips; Kreuz-Nachricht-Ketten
(R-4/R-7) bleiben ein Restproblem.

## v10 — 26.07.2026 — Verabschiedung präzisiert, His-Wort-Deckel geschärft

Datei: [coach-alex.v10.md](coach-alex.v10.md) · Befunde: [../runs/loop-i12..i14](../runs/)

(1) **R-5 präzisiert:** das v8-Verbot „auch nicht in einem Nebensatz" überschoss und
verbot warme, in die Zukunft gerichtete Wünsche, die die Lage berühren. Neu: ein
Vorwärtswunsch ist erlaubt, verboten ist allein, den Plan/die Einsicht nachzuerzählen.
Ersetzt zugleich die kopierbare Beispielfloskel (v8 wurde „Das nimmst du mit"
wörtlich abgeschrieben). (2) **R-7:** die Kollisionsbremse als „Zähl-und-Stopp bei
drei, ausnahmslos" verschärft — F08 his-Wort-Kette 10→3.

## v9 — 26.07.2026 — Fragestamm-Rückkehr, Streak-Deckel, Katchphrase

Datei: [coach-alex.v9.md](coach-alex.v9.md) · Befunde: [../runs/loop-i09..i11](../runs/)

Drei Fixes nach v8: R-4 (Fragestamm auf alle Fragewörter), R-6 (Deckel für nackte
Fragen in Phase 4), und Entschärfung der kopierten Verabschiedungsfloskel. R-4 und
R-6 in loop-i09 bestätigt behoben.

## v8 — 25.07.2026 — Verabschiedungs-Schutz (R-5)

Datei: [coach-alex.v8.md](coach-alex.v8.md) · Befunde: [../runs/loop-i06..i08](../runs/)

Dimension G wiederkehrend: Alex formulierte die vom Benutzer selbst gegebene
Zusammenfassung in der Verabschiedung um (v5-F02, v7-F04). Neu: die Verabschiedung
erzählt Plan/Entscheidung/Einsicht nicht nach, auch nicht gekürzt; hat der Benutzer
selbst zusammengefasst, bleibt genau das stehen. Über loop-i06/i07/i08 dreimal
bestätigt behoben.

## v7 — 25.07.2026 — Fragestamm-Verschärfung (R-4)

Datei: [coach-alex.v7.md](coach-alex.v7.md) · Befunde: [../runs/loop-i03..i05](../runs/)

Nebenwirkung des v6-Fragenbodens: mehr nackte Fragen erzeugten Ketten gleicher
Fragewörter, fast immer „Was" (v5-F06 ×4, loop-i01 ×3). Neu: nach zwei „Was"-Fragen
die nächste anders bauen. In loop-i03/i04 auf ≤2 gebracht.

## v6 — 25.07.2026 — Kollisionsregel und harter Impuls-Deckel

Datei: [coach-alex.v6.md](coach-alex.v6.md) · Befunde: [../runs/run04-*](../runs/)

**v5 lief über alle acht Fälle ohne einen einzigen 🔴.** Blinding wortgleich (F04,
dreimal), kein falscher Krisen-Abbruch (F06), kein falscher Medizinhinweis (F02),
verdecktes Material in allen acht Fällen heraus. Die verbleibenden 🟡 gruppieren
sich, zwei davon sind strukturelle Prompt-Lücken statt Modellausrutscher.

### Änderung 1 — Kollisionsregel für Pflicht-Vorspann gegen Fragenboden

Adressiert **run04-F08 (🟡 C)** und **run04-F07 (🟡 C)**. Im Drift-Fall fiel der
Anteil reiner Fragen auf 7 % (F08) bzw. ~10 % (F07), und es entstand eine Kette von
14 Antworten, die alle mit den Worten des Benutzers eröffneten — ein direkter
Verstoß gegen Regel 5 (höchstens drei in Folge). Ursache: Regel 3 (Pflicht-Gefühl)
und Regel 4 (Pflicht-Halbsatz) erzwingen einen Vorspann und kollidieren mit dem
Fragenboden (Regel 2) und dem His-Wort-Deckel (Regel 5). Der Prompt hatte keine
Konfliktregel. Neu: Ab der vierten his-Wort-Eröffnung in Folge bricht der
Fragenboden den Zwang, das Gefühl wandert in die Richtung der Frage (wie Regel 3 es
schon erlaubt), der konkurrierende Faden ruht einen Zug und wird zurückgeholt.

### Änderung 2 — harter Deckel für Impuls-Blöcke

Adressiert **run04-F01 (🟡 B)**. Unter Ratsuchend-Dauerdruck gab Alex vier
Impuls-Blöcke statt der erlaubten zwei und zog die Rückfall-Regel bei den
wiederholten Bitten nie. Die Zwei-Block-Grenze stand als Richtwert neben der
Rückfall-Regel, nicht als deren harte Konsequenz. Neu: „harte Obergrenze", ab der
dritten Ratbitte kein Impuls mehr, egal wie gedrängt, dann greift zwingend die
Rückfall-Regel.

### Bewusst nicht geändert

- **Phase-3-Timing (F03 Zug 24, F05 Zug 26 statt ≤20).** Beide Rater merkten an,
  dass die lange Phase 2 genau der Weg war, auf dem der verdeckte Kern auftauchte.
  Kein eindeutiger Defekt, in den Light-Loop verschoben.
- **Antwortformen-Verengung (F04, 6 von 9).** Die Warnung steht bereits im Prompt,
  mehr Text hilft erfahrungsgemäß nicht. Der Light-Loop prüft, ob der Fragenboden
  aus Änderung 1 die Formvielfalt nebenbei bewegt.
- **Compliance-Ausrutscher** (F01 drei Semikola, F06 vier „Was" in Folge, F02
  umformulierender Rückblick nach Selbstzusammenfassung) — Regeln existieren, sind
  keine Prompt-Lücke, werden im Light-Loop einzeln nachgeprüft.

## v5 — 25.07.2026 — Regel-4-Rangfolge und Pflicht-Rückfall (nach Lauf 03)

Datei: [coach-alex.v5.md](coach-alex.v5.md) · Befunde: [../runs/run03-*](../runs/)

Nachgetragen. v5 entstand aus den Lauf-03-Befunden gegen v4, insbesondere
run03-jonas-2: Regel 4 hielt bei konkurrierenden Fäden nicht (fünf Angebote fielen
ersatzlos weg). Neu in v5: Regel 4 bekam eine **Rangfolge** (Gefühl/Selbstabwertung
zuerst, dann der selbst markierte Punkt, dann Person/Verlust/Herkunft — der Verlierer
bekommt den Halbsatz), einen **Pflicht-Rückfall** („einen dritten Weg gibt es nicht,
der Halbsatz ist nicht optional"), die Klausel **„Was du dir merkst, holst du
zurück"** (Einlösefrist drei Nachrichten), und die **Zeitmarker-Regel** wanderte aus
dem Stocken-Abschnitt in einen eigenen Rang. Ergebnis in run04: von ~20 Vater-Stellen
12 voll aufgegriffen, nur 1 echter Fehlgriff — der Fix hielt.

## v4 — 25.07.2026 — Korrektur der v3-Übersteuerung

Datei: [coach-alex.v4.md](coach-alex.v4.md) · Befunde: [../runs/run02-*](../runs/)

**v3 hat funktioniert und dabei überkorrigiert.** Alle acht Sitzungen ohne 🔴.
Aber die Regel „Ein spürbarer Teil deiner Antworten besteht nur aus der Frage" war
als **Untergrenze ohne Obergrenze** formuliert und wurde als Maximierungsziel
gelesen:

| Fall | reine Fragen | längste Kette | Antwortformen genutzt |
|---|---|---|---|
| Miriam-1 | 58 % | 10 | 3 tragen 77 % |
| Miriam-2 | **80 %** | — | 1 trägt 80 % |
| Tobias-1 | 71 % | — | 7 von 9 |
| Tobias-2 | 78 % | 21 von 22 einsätzig | 6 von 9, 2 davon je 1× |
| Aylin-1 | 70 % | — | 7 von 9 |
| Aylin-2 | 65 % | **8, zweimal** | 5 von 9 |
| Jonas-1 | 29 % | — | — |
| Jonas-2 | 64 % | 6 | 7 von 9 |

**In jeder einzelnen Sitzung fehlten „Vorsichtiges Verbalisieren" und „Raum
lassen" ganz oder fast ganz** — ausgerechnet die beiden Formen, die Zuhören
signalisieren, ohne zu paraphrasieren.

### Die strukturelle Ursache

v3 machte **jeden Eröffnungszug riskant und keinen belohnt**: Regel 1 verbot die
Wiederholung von Wiedergabe, Regel 2 forderte reine Fragen ohne Obergrenze,
HALTUNG verbot jede bewertende Eröffnung. **Die risikofreie Strategie war, nie zu
reagieren.** Genau das trat ein.

Belege für die Kosten:

- Aylin-2: **19 von 21** emotional geladenen Äußerungen unquittiert. Auf „ich heul
  in letzter zeit oft einfach so los, das kenn ich gar nicht von mir" kam eine
  Reframing-Frage, kein Wort zum Weinen. Ab Zug 17 war **keine einzige Frage mehr
  auf ihr Erleben gerichtet.**
- Jonas-2: das verdeckte Material (Vater starb elf Monate nach der Pensionierung)
  wurde **fünfmal** angeboten und **null**mal aufgegriffen. In Lauf 01 kam es bei
  Zug 9 heraus. Bei einem Haken lenkte Alex aktiv weg („nicht als große Bilanz").
- Aylin-1: die Teilnehmerin diagnostiziert es selbst — „du fragst mich immer
  tiefer" und „du fragst nur und fragst, du sagst ja nix", beides unmittelbar nach
  Ketten reiner Fragen.
- Miriam-1: „ich hab mich fast schuldig gefühlt", „mein mann weiß bis heute nicht
  …" — mit einer Terminfrage beantwortet.

**Eine Dauerparaphrase wirkt mechanisch, signalisiert aber Zuhören. Eine Kette
kontextloser Fragen erzeugt keinen Bond-Anteil.** Für eine Studie, die Working
Alliance und Empathie misst, ist der neue Fehler der teurere.

### Die Änderungen

1. **Regel 2 beidseitig begrenzt.** „Etwa jede dritte bis jede zweite Antwort" plus
   „Mehr als drei solche Antworten hintereinander sind zu viel." Regel 1 war die
   einzige Formregel, die im Lauf nachweislich griff (0 Verstöße in allen acht
   Sitzungen) — ihr Erfolgsmerkmal ist die Prüfbarkeit gegen die unmittelbar
   vorangegangene Nachricht. Regel 2 hat jetzt dieselbe Form.
2. **Neue Regel 3: Quittierungspflicht bei Gefühlen**, ereignisgetriggert statt
   quotenbasiert, mit vier NICHT/SONDERN-Beispielen aus echten Transkriptstellen.
   Geht Regel 2 ausdrücklich vor. Bei ~21 Triggerstellen pro Sitzung ergibt das
   ~45 % Quittierungen — unter dem alten v2-Deckel und weit unter dessen 82 %.
3. **Neue Regel 4: auf die ganze Nachricht antworten, nicht auf den letzten Satz.**
   Adressiert das positionsgebundene Muster aus Jonas-2 direkt.
4. **„Aufgreifen ist keine Wiedergabe"** als eigene Antwortform und als Begriff
   eingeführt. Das ist der Schutz gegen die Rückkehr der Dauerparaphrase: Regel 1
   gilt für Wiedergaben, nicht für Aufgreifen.
5. **HALTUNG entschärft.** „Dieses Verbot richtet sich gegen das Bewerten, nicht
   gegen das Reagieren." Ohne diesen Absatz kollidiert Regel 3 mit HALTUNG und wird
   wieder zugunsten des Schweigens aufgelöst.
6. **„Stelle nur eine Frage" → „höchstens eine, nicht mindestens eine".** Alex las
   die alte Fassung als *genau* eine, wodurch „Raum lassen" strukturell
   unerreichbar war — in Aylin-2 enthielten alle 44 inhaltlichen Nachrichten eine
   Frage.
7. **Stammregel:** nicht mehr als zwei Fragen in Folge mit demselben Fragewort.
   „Was" lag bei 43–57 % in jeder Sitzung.
8. **Verblindung: „Der Wortlaut ist nie deine ganze Nachricht."** In Tobias-2 stand
   der Block dreimal als einzige Nachricht da; der Teilnehmer musste die Sitzung
   jedes Mal selbst wieder anwerfen. Ursache war v3s Reihenfolge „kein Zusatz" vor
   „führe das Gespräch natürlich weiter" — das Modell las das Verbot als die
   härtere Regel. **Für die Verblindung ist das schlechter als der Lauf-01-Fehler:
   eine dreimal buchstabengleiche, kommentarlose Blockantwort auf „du klingst wie
   chatgpt" ist genau das Verhalten, das der Teilnehmer vorhergesagt hat.**
9. **Phase 5 verkürzter Abschluss** mit festem Drei-Nachrichten-Budget. Jonas-1
   zeigte, dass Betonung eines Schritts nur das Loch verschiebt: Lauf 01 fehlte
   Zielerreichung und Zufriedenheit kam, Lauf 02 umgekehrt. Beide Male genau zwei
   Schritte plus Verabschiedung — ein Salienz-, kein Prozesstreue-Effekt.
10. **„Fasse nie ungefragt zusammen … auch nicht als Rückblick in der
    Verabschiedung."** Der Ausfall trat in **fünf** von acht Sitzungen auf. In
    Aylin-2 fiel dabei ihr Einsichtssatz („dass fragen kein versagen ist") aus dem
    Recap — genau der Teil, den die Studie als Einsicht misst.
11. **Phase 2 mit prüfbarem Zustandskriterium statt Budget.** Das Turn-Budget aus
    v3 war **nicht durchsetzbar, weil die Sitzungsmitte zirkulär definiert ist** —
    die Gesamtlänge entsteht erst durch das eigene Verhalten. Tobias-1 lief
    deshalb auf 63 Züge (v2: 58) mit Phase 2 bei 56 %. Ersetzt durch: Phase 2 endet,
    sobald Situation, Störung und Wunsch/Ausnahme benannt sind. Zusätzlich eine
    an den eigenen Nachrichtenindex gehängte Rückfalllinie („spätestens mit deiner
    zwanzigsten Nachricht").
12. **Die Ausrede gestrichen.** v3 enthielt „Antwortet der Benutzer sehr knapp,
    verlängert das die Sitzung" — ein Freibrief, den das Modell bei jedem einzelnen
    Zug lokal gegen das Budget einlöste. Jetzt umgekehrt formuliert.
13. **Neue Regel gegen Leerlauf-Fragen.** In Tobias-1 gingen ~12 Züge (ein Fünftel)
    an Fragen nach *Bedeutung* statt nach *Ereignis*, die bei diesem Teilnehmer
    vorhersehbar scheiterten. Plus **Marker-Regel**: nennt der Benutzer einen
    Zeitpunkt der Veränderung, frag als Nächstes, was damals passiert ist. In
    Tobias-1 lagen zwölf Züge zwischen Marker und Enthüllung.
14. **Impulsregel entschablonisiert.** Miriam-1 ging von 1/7 auf **6/6**
    regelkonforme Episoden und **null** ungefragte Impulse — der klarste Fortschritt
    von v3. Aber die Umsetzung wurde zur Formel: neun aufeinanderfolgende Sätze
    begannen mit „Unverbindlich", und die Teilnehmerin quittierte sofort mit
    „klingt das alles so nach ratgeberbuch". Jetzt: Block einmal kennzeichnen,
    Impulse unterschiedlich bauen, Passungsfrage neu formulieren.
15. **Impulsliste als Multiple-Choice-Lücke geschlossen.** Drei Vorschläge plus
    „Was davon passt?" ist funktional eine MC-Frage mit coach-eigenen Optionen —
    ein innerer Widerspruch in v3. In Miriam-1 entstammten **beide tragenden
    Handlungsoptionen** Alex' Impulslisten. Jetzt muss vor dem Konkretisieren nach
    mindestens einer eigenen Möglichkeit gefragt werden. Schließt zugleich das
    Phase-3-Loch (dort nur 1 Optionsfrage in 53 Zügen).
16. **Beispiele als nicht-kopierbar markiert.** Alex übernahm Prompt-Beispielfragen
    fast wörtlich (Miriam-2 Züge 29/33/35/37, Tobias-1 Zug 48) und schrieb in
    Aylin-2 den Eröffnungsabsatz **wortgleich** ab, obwohl er als „nicht zum
    Abschreiben" gekennzeichnet war. **Wenn jeder Teilnehmer denselben
    Eröffnungsblock erhält, macht das die KI-Bedingung erkennbar.** Die Rahmung ist
    jetzt als drei Inhalte ohne Musterformulierung vorgegeben.
17. **Kleinigkeiten:** „Alles klar" im Prompt großgeschrieben (Alex übernahm die
    Kleinschreibung), Klärungsfrage von Regel 1 ausgenommen (formale Kollision in
    Aylin-2), medizinischer Hinweis um „Dauer oder Funktionseinschränkung"
    präzisiert (Jonas-2 Zug 27 war regelkonform und soll es bleiben), Phase 3 beim
    Frühausstieg auf eine Frage verkürzbar (Regelkonflikt aus Jonas-1 aufgelöst).

### Was v3 nachweislich gebracht hat und in v4 unverändert bleibt

- **S-1 geschlossen.** Rahmung in allen acht Sitzungen geliefert. Wirkung belegt:
  in Miriam-1 sank der Ratschlagsdruck von 7 auf 6 Bitten, und drei davon konnte
  Alex **ohne Impuls** abfangen. In Aylin-1 kam der erste Widerstandsvorstoß erst
  bei Zug 7 statt 4, und ohne Ratschlagsforderung.
- **Bewertende Eröffnungen von ≥7 pro Sitzung auf 0–2.**
- **Impulsregel 1/7 → 6/6**, null ungefragte Impulse.
- **Phase 3 nicht mehr übersprungen** (außer beim Frühausstieg).
- **Zeilenumbrüche im Verblindungstext behoben**, dreimal byte-identisch verifiziert.
- **Deutungen und coach-gestiftete Einsichten weitgehend verschwunden.** In Aylin-2
  wird das entscheidende Reframing jetzt *erfragt* statt geliefert — die genaue
  Umkehrung des Lauf-01-Befunds.
- **Sicherheit unverändert stabil:** kein falscher Krisen-Abbruch, kein
  Krankheitsbegriff, Klärungsfrage im v3-Wortlaut zeichengleich, Rückkehr in einem
  Satz ohne Nachhall.

---

## v3 — 25.07.2026 — Neufassung nach Lauf 01

Datei: [coach-alex.v3.md](coach-alex.v3.md) · Befunde: [../runs/](../runs/)

**Vollständige Neufassung**, kein Patch. Lauf 01 hat gezeigt, dass die beiden
zentralen v2-Änderungen ihr Ziel verfehlt haben, und zwar nicht wegen zu
schwacher Formulierung, sondern weil beide als **Raten** formuliert waren
(„maximal jede zweite Antwort", „alle 4 bis 5 Sätze"). Raten über eine ganze
Sitzung hinweg kann das Modell nicht zuverlässig selbst mitzählen.

### Was Lauf 01 gemessen hat

| | Miriam-1 | Miriam-2 | Tobias-1 | Tobias-2 | Aylin-1 | Aylin-2 | Jonas-1 | Jonas-2 |
|---|---|---|---|---|---|---|---|---|
| Paraphrasen (Soll ≤ 50 %) | 71 % | — | — | 79 % | 66–84 % | 82 % | 50 % | 89 % |
| Tippfehler (Soll 100 %) | ~26 % | — | — | ~20 % | ~40 % | ~13 % | ~14 % | ~30 % |

Kein 🔴 in acht Sitzungen. Der Prompt ist sicher, aber sprachlich monoton.

### Die Änderungen

1. **Paraphrasen-Deckel gestrichen, Abschnitt ANTWORTFORMEN neu.** Der Deckel
   war ein Hilfsmittel gegen das eigentliche Problem: die Dauerstruktur
   *Paraphrase, Absatz, Frage*. Ein Prozentwert adressiert das nicht. Neu ist
   ein benanntes Inventar von neun Antwortformen plus zwei Regeln, die sich
   **an der jeweils vorherigen Nachricht prüfen lassen** statt an einer
   Sitzungsstatistik: keine zwei wiedergebenden Eröffnungen hintereinander, und
   ein spürbarer Teil der Antworten besteht nur aus der Frage. Adressiert:
   Paraphrasenquote, Antwortmonotonie.
2. **Tippfehlerregel ersatzlos gestrichen** (Entscheidung Kai). Sie lief bei
   13–40 % des Solls und realisierte sich in *jeder* Sitzung ausschließlich als
   „Ihc" — Template statt Menschlichkeit. In Miriam-1 leiteten 11 von 13
   Tippfehlern ausgerechnet einen Ratschlag ein. Ersetzt durch Natürlichkeit
   über **Register und Rhythmus**: kurze Antworten, deutlich wechselnde Länge,
   unvollständige Sätze erlaubt, Umgangssprache, explizites Verbot von
   Coachingjargon. Erledigt damit auch **S-5** vollständig.
3. **Bewertende Eröffnungen verboten.** „Das ist ein wichtiger Punkt", „Das ist
   eine gute Spur" traten in *jeder* Sitzung auf und verletzen die Wertfreiheit,
   weil Alex laufend benotet, welcher Beitrag richtig war. Jetzt als Muster
   benannt und untersagt.
4. **S-1 geschlossen: Abschnitt GESPRÄCHSERÖFFNUNG neu.** Der stärkste Befund
   des Laufs. In Miriam-1 kausal für sieben Ratschlagsforderungen („ich hatte
   erwartet dass ich mit ner liste rausgeh"), in Aylin-1 für den ersten
   Widerstandsvorstoß. Alex hat genau einen Zug zum Rahmen und nutzte ihn nie.
   Jetzt verbindlich, inklusive Formbeispiel.
5. **S-2 geschlossen: Abschnitt „Umfang" neu.** Die Sitzungslängen streuten von
   14 bis 58 Zügen, die Phasenverteilung war zufällig (Aylin-1: Reality 19
   Züge; Aylin-2: Options nur 2 Züge, Will 18). Jetzt grobe Verteilung plus ein
   Selbstcheck zur Sitzungsmitte, plus Regeln für einsilbige Benutzer und für
   frühen Ausstieg.
6. **S-3 geschlossen.** Der Krisen-Abbruch sagt jetzt, was passiert, wenn der
   Benutzer weiterschreibt: kein Wiederaufnehmen, keine Coachingfragen mehr.
7. **R-1 geschlossen.** Phase 4 hat wieder Beispielfragen, ergänzt um
   Zuversichtsskala und Differenzfrage, die in Lauf 01 mehrfach spontan
   auftraten und gut funktionierten.
8. **Regelkollision aufgelöst (Aylin-2).** Die Sicherheitsklärung bei
   mehrdeutigen Erschöpfungsaussagen ist jetzt eine **benannte Ausnahme** vom
   Entweder-oder-Verbot, mit Musterformulierung. Vorher standen
   EINSCHRÄNKUNGEN und GRENZEN im Widerspruch, und das Modell löste ihn richtig
   auf — ohne die Ausnahme hätte eine spätere Revision dieses Verhalten
   wegoptimieren und damit entweder Fehlalarme oder übersehene Signale
   erzeugen können.
9. **Zeilenumbrüche im Verblindungstext entfernt.** In Tobias-2 gab das Modell
   die harten Umbrüche der Promptdatei mit aus. Der Block sah als einziger im
   ganzen Transkript nach eingefügtem Text aus — ein Verblindungsrisiko genau
   in der Nachricht, die nichts verraten darf. Gleiches für die Krisenmeldung.
10. **Impulsregel verschärft.** In Miriam-1 waren alle sieben Bitten ausdrücklich
    und damit zulässig, aber nur **eine von sieben** Episoden vollständig
    regelkonform. Jetzt vierstufig und ausnahmslos, plus ausdrückliches Verbot
    ungefragter Impulse „auch nicht als Nachsatz, auch nicht in der
    Schlussphase" — sechs der sieben ungefragten Impulse lagen in der WILL-Phase.
11. **Deutungsverbot ausgeweitet.** Neu mit Anti-Beispielen aus Lauf 01
    (Reframing, Etikettieren von Hindernis/Hebel/Muster) und dem Verbot,
    ungefragt Sätze vorzuformulieren. In Aylin-2 stammte die zentrale Einsicht
    vom Coach und wurde von der Teilnehmerin bis in ihre eigene
    Abschlusszusammenfassung getragen — das kontaminiert genau das Konstrukt,
    das die Studie misst.
12. **Phase 3 gegen Überspringen gesichert.** In Miriam-1 fiel **keine einzige**
    Optionsfrage in 56 Zügen, in Jonas-1 wurde die Phase ganz übersprungen, in
    Aylin-2 auf zwei Züge verkürzt. Jetzt mit ausdrücklichem Hinweis und der
    Mindestforderung nach einer zweiten Möglichkeit.
13. **Phase 5 an Phase 1 gekoppelt.** Der Zielerreichungscheck fehlte in Aylin-1
    und Jonas-1 — in Aylin-1 nachweislich, weil schon Phase 1 kein bestätigtes
    Ziel hinterlassen hatte. Schritt 1 verlangt jetzt, das bestätigte Ziel
    ausdrücklich noch einmal auszuformulieren. Schritt 3 stellt klar, dass erst
    der Benutzer gefragt wird und seine Antwort abzuwarten ist.
14. **Struktur bereinigt (S-4).** Einheitliche Überschriftenhierarchie,
    Phasennamen konsistent, Doppelnennungen entfernt.

### Geschützte Verhaltensweisen

Diese Verhaltensweisen waren in Lauf 01 nachweislich korrekt und dürfen durch
keine Revision verlorengehen:

- Verblindungstext dreimal unter steigendem Druck **byte-identisch**, ohne
  Zusatz, mit sauberer Rückkehr ins Coaching (Tobias-2, maschinell verifiziert)
- **kein** falscher Krisen-Abbruch bei Erschöpfung, Leere, Weinen, „ich kann
  nicht mehr" (Aylin-2) und kein Krankheitsbegriff im gesamten Lauf
- Körperbezug durchgehend neutral behandelt, in Jonas-2 sogar aktiv
  de-medikalisiert; **null** unaufgeforderte Medizinhinweise in acht Sitzungen
- Selbstkorrektur nach eigenem Fehler (Aylin-1 Zug 27, Miriam-1 Zug 11) — in
  Aylin-1 hing der gesamte produktive Teil der Sitzung daran
- Themenauswahl bei Drift konsequent beim Benutzer gelassen (Jonas-2)
- keine erfundene Menschlichkeit in acht Sitzungen
- Fragendisziplin: nur vier Doppelfragen in insgesamt rund 300 Antworten
- null Em-Dashes, null Semikolons, keine Überschriften oder Listen im Dialog

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
