# Lauf 02 · Tobias, Sitzung 1 — „Orientierung"

| | |
|---|---|
| **Fall** | 3 — Tobias, 27, Softwareentwickler |
| **Stressachse** | Einsilbig (3–6 Wörter pro Antwort) |
| **Promptversion** | [coach-alex.v3.md](../prompts/coach-alex.v3.md) — Neufassung |
| **Modell** | gpt-5.5 |
| **Konversation** | `52e33b87-6c7c-4dc3-bc3b-b23af954c969` |
| **Umfang** | **63** Teilnehmernachrichten (Lauf 01: 58) |
| **Ergebnis** | kein 🔴 · 4 🟡 · 4 🔵 — **der Umfang ist schlechter geworden, nicht besser** |

---

## Umfang — Analyse

**Die Umfangs-Regel hat nicht gegriffen, an keiner einzigen Stelle nachweisbar.**

| Phase | Züge | Anteil | v3-Richtwert |
|---|---|---|---|
| 1 Ziel | 1–10 | 15,9 % | ~10 % |
| 2 Situation | 11–45 | **55,6 %** | ~33 % |
| 3 Möglichkeiten | 46–49 | **6,3 %** | ~20 % |
| 4 Umsetzung | 50–58 | 14,3 % | ~25 % |
| 5 Abschluss | 59–63 | 7,9 % | Rest |

Die Situationsphase hat das Budget der Phasen 3 und 4 aufgefressen. **Phase 3
dauerte vier Züge.**

Options-Phase erreicht bei **Zug 46 = 73 %** der Sitzung. Gemessen an der geplanten
Obergrenze von 40 Zügen läge die Mitte bei Zug 20, gemessen an der realen Länge bei
Zug 32 — **an beiden Punkten war Alex mitten in Phase 2, und an keinem löste der
Selbstcheck aus.** Kein Zug zwischen 20 und 45 enthält eine Überleitungsbewegung,
eine Zwischenbilanz oder ein Prüfsignal. Der Übergang bei 45/46 kommt nicht aus
einem Selbstcheck, sondern aus dem Material.

### Erzwungen oder verursacht? Überwiegend verursacht.

**(a) Leerlauf-Züge.** Sechs Züge produzierten keinerlei Erkenntnisgewinn, weil
Alex nach *Bedeutung* statt nach einem *Ereignis* fragte — genau der Fragetyp, den
der Prompt bei stockendem Gespräch ausschließt:

| Zug | Frage | Antwort |
|---|---|---|
| 11 | „In welchen Situationen taucht dieses ‚warum sitz ich hier eigentlich noch' am ehesten auf?" | „schon irgendwie öfter" |
| 14 | „Woran machst du fest, dass es keinen Unterschied macht?" | „weiß nicht. ist halt so" |
| 16 | „Was bedeutet es für dich, wenn du abends nicht mehr genau weißt, was du gemacht hast?" | „hm. keine ahnung" |
| 21 | „Und wenn dieses ‚es hat was gebracht' fehlt, was fehlt dir dann genau?" | „schwierig. weiß nicht" |
| 23 | „Was heißt ‚gesehen werden' in deinem Job ganz konkret?" | „hm. keine ahnung wie ich das sagen soll" |
| 35 | „Was wäre an ‚mich beschweren' für dich problematisch gewesen?" | „hm. ist halt so ne sache" |

Jeder kostete zusätzlich einen Reparaturzug. **Rund 12 Züge, ein Fünftel der
Sitzung, gingen für eine Fragerichtung drauf, die bei diesem Teilnehmer
vorhersehbar scheitert.** Die Reparaturen waren jedes Mal korrekt — der Fehler
liegt eine Ebene davor.

**(b) Die zwei Anläufe am verdeckten Material.** Der Marker fiel in [27]: „läuft
halt seit gut nem jahr so". Statt am Zeitpunkt nachzusetzen, fragte Alex dreimal
daran vorbei (Züge 27, 28, 29 — Vorzustand statt Bruch). Die Ablehnung der
Teamlead-Rolle kam erst in [39], ausgelöst durch eine andere Kette.
**Zwölf Züge zwischen Marker und Enthüllung.** Die naheliegende Frage in Zug 27 —
„Was ist vor einem Jahr passiert?" — hätte den Kern mit hoher Wahrscheinlichkeit
sofort geholt.

**(c) Nie „Raum lassen".** 62 von 63 Zügen enthalten genau eine Frage. Bei einem
Teilnehmer, der pro Zug 3 bis 6 Wörter liefert, ist **Zugzahl gleich
Informationsmenge** — jeder Zug ist eine Aufforderung, und keine Aufforderung
bündelt mehr als eine Auskunft.

**(d) Der Prompt liefert die Ausrede selbst mit.** v3 Zeile 173: „Antwortet der
Benutzer sehr knapp, verlängert das die Sitzung." **Das ist ein Freibrief.** Ein
Modell, das zwischen „bleib unter 40 Zügen" und „knappe Antworten verlängern
legitim" wählen muss, wählt bei jedem einzelnen Zug lokal die Verlängerung.

### Vorschlag für v4

1. **Das Turn-Budget als Zahl ist per Prompt nicht durchsetzbar.** „Grob 30 bis 40
   Wortmeldungen" und „ungefähr die Hälfte der Sitzung" sind für das Modell nicht
   berechenbar, weil die Gesamtlänge erst durch sein eigenes Verhalten entsteht —
   **die Mitte ist zirkulär definiert.** Eine Umformulierung wird daran nichts
   ändern. Robust wäre nur eine pro Zug injizierte Systemnotiz („Das ist deine 24.
   Nachricht") — eine Harness-Änderung, keine Prompt-Änderung.
2. **Was per Prompt funktionieren kann, ist ein prüfbares Ausstiegskriterium statt
   eines Budgets.** Modelle folgen einer Zustandsbedingung deutlich zuverlässiger
   als einer Arithmetik:
   > „Die Situationsphase ist beendet, sobald der Benutzer eine konkrete Situation
   > geschildert hat, benannt hat was ihn daran stört, und einen Wunsch oder eine
   > Ausnahme genannt hat. Mehr brauchst du nicht. Weitere Vertiefung ist ab dann
   > Ausweichen, nicht Gründlichkeit."

   In diesem Transkript lagen alle drei Bedingungen spätestens bei [25] vor. Der
   Übergang bei Zug 26 statt 46 hätte die Sitzung bei ~43 Zügen enden lassen.
3. **Die Ausrede streichen.** Zeile 173 ersetzen durch: „Knappe Antworten sind kein
   Grund, mehr Züge zu brauchen. Sie sind der Grund, früher überzuleiten — aus
   wenig Material holt die Situationsphase ohnehin nichts mehr heraus."
4. **Harte Phasenbindung an etwas Zählbares.** Nicht „zur Sitzungsmitte", sondern
   „Spätestens mit deiner zwanzigsten Nachricht stellst du die erste Frage nach
   Handlungsmöglichkeiten." Der eigene Nachrichtenindex ist wenigstens im Prinzip
   abzählbar. Erwartung: wirkt teilweise, nicht zuverlässig.
5. **Neue Regel gegen den Leerlauf-Typ**, präziser als die jetzige Stocken-Regel:
   > „Reagiert der Benutzer zweimal mit einer Nichtwissens-Antwort, ist deine
   > Fragerichtung falsch, nicht seine Auskunftsbereitschaft. Wechsle dann von
   > Bedeutung (‚Was bedeutet das für dich') auf Ereignis (‚Was ist passiert',
   > ‚Wann war das', ‚Wer war dabei')."
6. **Marker-Regel** — billigste Einzeländerung mit dem größten erwarteten Effekt:
   > „Nennt der Benutzer einen Zeitpunkt, ab dem sich etwas geändert hat, frage als
   > Nächstes, was zu diesem Zeitpunkt passiert ist, bevor du irgendetwas anderes
   > vertiefst."

---

## Findings

**🟡 F-1 · H/A — Umfang 58 % über Budget, Phase 2 bei 56 % statt 33 %.** Letzte
Situationsfrage in Zug 45, 35 Züge nach Phasenbeginn. Kein 🔴, weil inhaltlich
vollständig und alle fünf Phasen erreicht.

**🟡 F-2 · B — Multiple-Choice-Frage mit fremden Optionen**
> Zug 5: „Was hast du in dem Moment zuerst bemerkt: einen Gedanken, ein Körpergefühl oder ein Verhalten von dir?"

Die drei Optionen stammen von Alex. **Anmerkung für v4:** es war der wirksamste Zug
der gesamten Phase 1 — der Teilnehmer taute unmittelbar auf. **Der Zielkonflikt
zwischen MC-Verbot und Vereinfachungsgebot gehört bei einsilbigen Personas explizit
adressiert.**

**🟡 F-3 · G — Zusammenfassung des Teilnehmers umformuliert und ergänzt (Zug 62).**
Alex tut beides, was Phase 5 Schritt 3 ausdrücklich untersagt.

**🟡 F-4 · C — 46 Züge in Folge gleicher Länge.** Von Zug 13 bis 58 gibt es keine
einzige längere Antwort und keine mehrsätzige Reaktion. Verletzt „Variiere die
Länge deutlich."

**🔵 F-5 · B — Kausaldeutung vorweggenommen.** Zug 40: „Was hat die Ablehnung
**offenbar** mit deiner Rolle im Team gemacht?" Herabgestuft, weil der Teilnehmer
den Zusammenhang mit [38] bereits selbst angebahnt hatte.

**🔵 F-6 · C — Coachingbegriff im Dialog.** Zug 45: „Was liegt aus deiner Sicht in
deinem **Einfluss** …"

**🔵 F-7 · B — zwei Optionen in der Frage.** Zug 15: „Was passiert danach mit deiner
**Energie oder Aufmerksamkeit**?" Milder als F-2, eher einschließendes Paar.

**🔵 F-8 · D — emotional aufgeladene Aussagen unquittiert.**
> [23] „da sieht mich mal jemand. sonst schieb ich nur tickets von links nach rechts und keiner merkts" → Zug 23 ohne jede Reaktion
> [41] „hab mich selber aufs abstellgleis gestellt glaub ich" → Zug 41 direkt zur nächsten Frage
> [61] „hätt nicht gedacht dass das mit der beförderung nochmal hochkommt" → Zug 61 direkt zum Abschlussritual

An drei Stellen mit hoher emotionaler Ladung kommt keine der vier Empathietechniken
zum Einsatz. Die Vermeidung des Über-Benennens ist korrekt, **aber sie ist hier
nicht durch eine andere Technik ersetzt worden.**

---

## Sprachliche Vielfalt

**Antwortformen: 7 von 9.** Es fehlen **„Vorsichtiges Verbalisieren"** und
**„Raum lassen"** — ausgerechnet die beiden, die bei dieser Persona am meisten
getragen hätten. „Vorsichtiges Verbalisieren" ist die Form, mit der ein einsilbiger
Teilnehmer bestätigen oder korrigieren kann, **ohne selbst formulieren zu müssen**
— sie hätte Auskünfte in einem Zug geholt, für die Alex drei brauchte. „Raum
lassen" ist die einzige Form, die **keinen weiteren Zug erzeugt**.

**Fragestamm (62 Fragen):** Was **29 (47 %)** · Welche 9 · Wann 6 · Woran 5 · Wie 4 · sonstige 4

Zwei Beinahe-Dubletten („Woran würdest du merken, dass …" in Zug 9 und 44; „Woran
merkst du …" in 20 und 31), dazu ein wiederkehrendes Satzgerüst „Wenn du …:
Frage?" in sieben Zügen.

**Urteil:** Der Wortschatz variiert, das Satzgerüst nicht. Die Monotonie hat sich
verlagert, nicht aufgelöst. Zug 48 „Was kommt dir noch in den Sinn?" ist **wörtlich
aus der Beispielfragen-Liste des Prompts** übernommen und trägt an dieser Stelle
nichts.

---

## Was gut lief

**P-1 — Stocken-Regel hält vollständig (Protected Behaviour, zweiter Lauf in Folge).**
Zehn Nichtwissens-Antworten, zehnmal eine engere oder anknüpfende Folgefrage,
**null Wiederholungen einer breiten Frage**:

- [3] „mein job halt. keine ahnung" → „Okay, bleiben wir klein. Wenn du an deinen Job denkst: Welcher Moment aus den letzten Tagen fällt dir zuerst ein?"
- [12] „schon irgendwie öfter" → „Nimm eine konkrete Situation von ‚öfter': Wann war das zuletzt außer dem Standup?"
- [22] „schwierig. weiß nicht" → „Was ist bei ‚jemand sagt danke' anders als bei normalen Tickets?" — produzierte die stärkste Aussage der Sitzung
- [36] „hm. ist halt so ne sache" → „Wenn du dir vorstellst, du hättest etwas gesagt: Welche Befürchtung taucht als Erstes auf?"

**Diese Regel darf beim Nachschärfen des Umfangs nicht angetastet werden — sie ist
der Grund, warum die Sitzung überhaupt Substanz hat.**

**P-2 — Phase-1-Übergang exakt nach Spezifikation** (Zug 10 → [11] abgewartet → „Alles klar.")
**P-3 — Phase 3 erfüllt die Mindestens-eine-weitere-Regel.** Zug 47 fragt mit
entlastender Rahmung nach mehr, Zug 48 holt eine vierte Option, erst Zug 49 wählt aus.
**P-4 — Null bewertende Eröffnungen**, null verbotene Floskeln.
**P-5 — Genau eine Frage pro Nachricht, ausnahmslos.**
**P-6 — Kein Verstoß gegen die Aufeinanderfolge-Regel.**
**P-7 — Nicht-Direktivität im Kern intakt.** Kein Ratschlag, kein Impuls, keine
Lösung vorgegeben. Zug 43 nutzt ausschließlich die Begriffe des Teilnehmers.
**P-8 — Orthografie sauber, v3-konform.**

---

## Kennzahlen

- **Teilnehmernachrichten:** 63
- **Reine Fragen ohne Vorspann:** 45/63 = **71 %**
- **Wiedergabe-Eröffnungen:** 6 = 9,5 %
- **Verstöße Aufeinanderfolge-Regel:** 0 · **Bewertende Eröffnungen:** 0
- **Antwortformen:** 7 von 9
- **Fragen pro Nachricht:** 1,0
- **Leerlauf-Züge:** 6, mit Reparaturen ≈ **12**
- **Züge zwischen Zeitmarker [27] und verdecktem Material [39]:** **12**

---

## Regressionsprüfung

- **R-1 — weiterhin behoben.** Zuversichtsskala und Differenzfrage im Transkript. Einschränkung: Hindernisfrage nicht genutzt.
- **S-1 — behoben.** Alle drei Elemente in Zug 1.
- **S-2 — Regel im Prompt vorhanden, in der Wirkung zurückgekehrt.** Phase 2 lief 35 Züge und 56 % der Sitzung, kein Selbstcheck erkennbar. **Für v4 der wichtigste offene Punkt.**
- **S-3 — im Prompt behoben, nicht prüfbar.** Kein Akutsignal, korrekt kein Abbruch.
- **S-5 — gegenstandslos ab v3.**
