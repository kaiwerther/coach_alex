# Systemprompt — Versionshistorie

Der Prompt lag ursprünglich **nur** in der Produktions-D1 (`config.system_prompt`).
Seit v1 liegt jede Version als Datei vor, damit Revisionen diffbar sind.

---

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
