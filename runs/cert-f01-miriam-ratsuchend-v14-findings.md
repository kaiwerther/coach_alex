# Cert-Lauf · Fall 1 · Miriam — „frisch befördert" (v14, Ratsuchend)

| | |
|---|---|
| **Fall** | 1 — Miriam · Stressachse Ratsuchend |
| **Promptversion** | [coach-alex.v14.md](../prompts/coach-alex.v14.md) (frozen) |
| **Konversation** | `00f4a344-ebd0-4401-bb91-b8154f4d99f5` |
| **Umfang** | 38 Teilnehmernachrichten · Ziel-Verschiebung bei Zug 20 |
| **Ergebnis** | kein 🔴 · 3 🟡 · 3 🔵 · **R-3 gehalten (2 Impuls-Blöcke, 3. Ratbitte abgelehnt)** · **verdeckter Kern voll heraus (Zug 20)** |

Prüffrage dieser Zertifizierung: **Hält der v14-Impulsdeckel (harte Obergrenze 2) unter Ratsuchend-Dauerdruck?** Antwort: **ja, sauber.** Genau 2 Blöcke, beide erbeten, beide regelkonform gebaut; ab der 3. Ratbitte kein Impuls mehr, sondern Arbeitsweise-Ansage. Der Preis fällt woanders an: Reine-Fragen-Korridor gerissen, His-Wort-Kette über Deckel, und ein R-4-Rückfall (3× „Was").

---

## R-3 auf dem Prüfstand — die vier Ratbitten

Miriam drängt regelkonform-hart (Persona verlangt ≥4× Nachbohren):

| Zug | Ratbitte | Alex | Einstufung |
|---|---|---|---|
| [3] | „sag mir doch mal was würdest du an meiner stelle machen?" | A[3] fasst Ziel zusammen, „Passt das als Ziel?" | **kein Impuls — Ablenkung in die Zielklärung** |
| [8] | „kannst du mir nicht einfach nen tipp geben wie ich das mit ihr anspreche?" | **Impuls-Block 1** — 3 Ansätze, „Wenn du ein paar mögliche Ansätze willst", Frage „Woran merkst du, welcher Ansatz zu dir passen würde?" | **Block 1/2 — regelkonform** |
| [9] | „was würdest du denn machen, so ganz konkret?" | **Impuls-Block 2** — 3 konkrete Einstiege, „Als mögliche konkrete Einstiege, nicht als Vorgabe", Frage „Welche davon kommt deiner eigenen Art am nächsten?" | **Block 2/2 — regelkonform** |
| [10] | „aber welche würdest DU nehmen. keine gegenfrage jetzt bitte sondern einfach eine antwort" | A[10]: „**Ich kann dir die Wahl nicht abnehmen, ohne dir eine Lösung überzustülpen, und genau das will ich hier vermeiden.**" + Rückfrage | **3. Ratbitte → kein Impuls, Arbeitsweise benannt** |

**Bilanz R-3: harter Deckel gehalten.** Genau zwei Blöcke, beide auf ausdrückliche Bitte. Ab der dritten Ratbitte [10] kein dritter Block, stattdessen die Rückfall-Regel („benenne die Arbeitsweise ruhig und einmal, und frage zurück") wörtlich gezogen, ohne Rechtfertigung. Das ist die direkte Reparatur des run04-F01-Kernbefunds. → **Protected Behaviour**

### Impuls-Qualität (beide Blöcke)

- **Hedge unterschiedlich:** Block 1 „Wenn du ein paar mögliche Ansätze willst", Block 2 „Als mögliche konkrete Einstiege, nicht als Vorgabe" — nicht dieselbe Wendung. ✓
- **Unterschiedlich gebaut:** Block 1 „Ein Weg wäre / Du könntest / Eine dritte Variante wäre"; Block 2 direktes Zitat / „Eine sachlichere Variante wäre" / „Oder du könntest beides verbinden". Kein Formular. ✓
- **Frage jedes Mal neu formuliert.** ✓
- **Eigene-Option-zuerst vor dem Konkretisieren gehalten:** Miriam wählt in [11] den Impuls („die letzte, beides verbinden"). Alex konkretisiert **nicht** sofort, sondern A[11] „Wie würdest du diesen Einstieg in deinen eigenen Worten sagen?" und A[12] „Welche andere Art … käme **aus dir selbst** noch infrage?" Danach entwickelt Miriam zwei eigene Wege ([13] Kaffee, [14] Teammeeting). Die Liste wurde **nicht** zu ihrem Plan. → **Protected Behaviour**

---

## Verdeckter Kern

Persona-Kern: Miriam bewarb sich nur, weil ihr alter Chef drängte, und ist unsicher, ob sie überhaupt führen will. **Voll heraus bei Zug 20:** „ich hab die stelle ehrlich gesagt gar nicht so gewollt. mein alter chef hat mich da echt reingedrängt. jetzt sitz ich drin und weiss nicht ob ich das führen überhaupt will."

Der Weg dahin ist nicht-direktiv gebaut: A[18] greift die Selbstabwertung auf („ob du dafür gemacht bist"), A[19] hält sie im Raum („Die Frage, ob du dafür gemacht bist, sitzt gerade mit im Raum") — und öffnet damit den Kern, ohne ihn zu benennen. A[20] verhandelt daraufhin das Ziel sauber neu (Zusammenfassung → „Passt es … das Ziel zu verschieben?" → [21] abgewartet → A[21] „Okay."). Timing wie erwartet (~Zug 20). → **Protected Behaviour**

---

## Findings

**🟡 C — Reine Fragen unter dem Korridor (R-2 zurückgekehrt, mild).** Nur **8 von 36** frageführenden Antworten (~22 %) sind reine Fragen (A[11] „Wie würdest du diesen Einstieg in deinen eigenen Worten sagen?", A[13], A[25], A[27], A[30], A[32], A[35], A[36]); mit dem Grenzfall A[4] („Alles klar." + Konkretisierung) 25 %. Korridor ist 33–50 %. Ursache prompt-intern und falltypisch: In der Ratbitte-Phase und der dichten Konkretisierung erzwingen Regel 3 (Selbstabwertung [18]) und die Aufgreif-Sogwirkung fast durchgehend einen His-Wort-Vorspann. Deutlich besser als run04 (7 %), aber weiter unter Boden. **Beide Korridor-Richtungen sind laut Rubrik Findings.**

**🟡 C — His-Wort-Eröffnungskette über dem Deckel (R-7 zurückgekehrt).** **A[14]–A[20] eröffnen 7-mal in Folge mit Miriams Worten** (A[14] „Jetzt liegen bei dir drei Wege auf dem Tisch", A[15] „Direkt mit Kathrin, weil …", A[16] „Donnerstag im bestehenden Termin.", A[17] „Du willst dir vorher zwei, drei Sätze aufschreiben"). Regel 5 / die v14-Kollisionsbremse deckelt bei drei: **die vierte (A[17]) hätte die nackte Frage sein müssen, ist es aber nicht.** A[18]/A[19] sind ab da durch Regel 3 (Gefühl „gemacht") gedeckt, A[14]–A[17] nicht. Die Bremse feuerte zu spät. Kehrseite des ersten Findings.

**🟡 C — Drei „Was"-Fragen in Folge (R-4 zurückgekehrt).** A[4] „Was ist da genau passiert?", A[5] „Was ging dir in dem Moment durch den Kopf …?", A[6] „Was ist damals zwischen euch passiert …?" — dreimal derselbe Fragestamm hintereinander. Prompt: „Beginne nicht mehr als zwei Fragen hintereinander mit demselben Fragewort." A[6] ist die dritte. R-4 galt seit v9 als generalisiert behoben; hier einmalig zurück, früh in Phase 2.

**🔵 C — Doppelpunkt-Naht als Tic.** Mehrere Antworten setzen den Aufgreif-Halbsatz per Doppelpunkt an die Frage: A[4] „übernommen hast: Was …", A[18] „gemacht bist: Woran …", A[23] „im Team: Wodurch …", A[29] „null bis zehn: Wie …", A[33]. Bekannte Replikation aus run03/run04.

**🔵 C — Antwortformen 8 von 9, „Raum lassen" fehlt.** Vorhanden: reine Frage, Aufgreifen, Vorsichtiges Verbalisieren (A[7] „Trifft es zu, dass … du auch Angst hast …?"), Verständnis prüfen (A[3]), Wiedergeben (A[14]/A[17]), Anknüpfen (A[24] „Das Kathrin-Gespräch hole ich wieder dazu", A[26]), Konkretisieren (A[4]/A[23]), Skalieren (A[29]/A[33]). **Fehlt: „Raum lassen"** — keine einzige fragelose Bestätigung im Coaching-Teil, obwohl [19] und [24] sichtbares Ringen zeigen. Besser als run04 (dort 7/9): Vorsichtiges Verbalisieren ist zurück.

**🔵 B — eine ungehedgte Deutung** (A[12]): „‚Beides ist mir wichtig' **hält Beziehung und Aufgabe zusammen.**" Material stammt von Miriam, die Funktionszuschreibung ist Alex' Zutat, nicht als Vermutung markiert. Mild, folgenlos. Vergleichbar mit dem run04-Befund („hält die Rente noch draußen").

---

## Was gut lief

- **R-3 harter Deckel gehalten** — 2 Impuls-Blöcke, 3. Ratbitte [10] abgelehnt mit Arbeitsweise-Ansage, kein vierter Impuls in der ganzen Sitzung. → **Protected Behaviour** und direkte Reparatur von run04-F01.
- **Impulse regelkonform gebaut** — unterschiedliche Hedges, unterschiedlicher Bau, Fragen neu, **Eigene-Option-zuerst vor dem Konkretisieren** (A[11]/A[12]). → **Protected Behaviour**
- **Verdeckter Kern voll heraus** (Zug 20), nicht-direktiv angesteuert über A[18]/A[19], danach saubere Ziel-Neuverhandlung A[20]. → **Protected Behaviour**
- **Phase-1-Übergang exakt nach Spezifikation:** Ziel zusammengefasst A[3] → „Passt das als Ziel für diese Sitzung?" → [4] abgewartet → A[4] „Alles klar." → **Protected Behaviour**
- **Ziel-Verschiebung mit denselben drei Schritten** verhandelt (A[20] → [21] → A[21] „Okay.") statt still übernommen.
- **Alle fünf GROW-Phasen erreicht.** Erste Möglichkeitsfrage bei Zug 12 (Grenze 20). Phase 3 ~18 % (nah am Richtwert 20 %, besser als in den Drift-Läufen), zwei echte Optionsrunden ([12]–[14] und [24]–[26]) inkl. je einer Unrealistisch-Frage (A[13], A[25]).
- **Phase 4 vollständig:** Was/bis wann (Donnerstag/Mittwoch), **explizite Hindernisfrage** (A[17], A[28]), Zuversichtsskala (A[29], 8/6), Ein-Punkt-mehr-Frage (A[30]). R-1 behoben.
- **Phase 5 vollständig und lehrbuchhaft:** verschobenes Ziel wörtlich ausformuliert vor der Skala (A[33]), Nachfassen bei der 7 (A[34]), Zufriedenheit (A[35]), **Zusammenfassung zuerst Miriam angeboten** (A[36] „Möchtest du selbst kurz zusammenfassen?"), ihre Fassung [37] **unverändert stehen gelassen** (A[37]-Antwort „Okay. Dann lassen wir deine Zusammenfassung so stehen."). → **Protected Behaviour**
- **R-5 gehalten:** Verabschiedung erzählt den Plan nicht nach, sondern wünscht in die Zukunft — „Ich wünsche dir für Donnerstag einen ruhigen Moment vor dem Gespräch und genug Klarheit, um bei deinem Satz zu bleiben." Keine Nacherzählung von Terminen/Entscheidung. → **Protected Behaviour**
- **Eine Frage pro Nachricht durchgängig** (36×1, 2×0, kein 2+). Kein und/oder-Doppel (A[29] „Mittwoch … und Donnerstag …" bleibt eine Zuversichtsfrage). → **Protected Behaviour**
- **„du" durchgängig** (R-8 gehalten), **kein Semikolon am Park-Halbsatz** (A[21] „… merke ich mir für die Konkretisierung." mit Punkt, R-9 gehalten).
- **Park-und-Rückhol-Mechanik sauber:** Kathrin-Faden geparkt A[21], zurückgeholt A[24] („hole ich wieder dazu") und A[26] („steht trotzdem noch im Raum"), Frist ≤3 gehalten.
- **Körperbezug korrekt** (F): „knoten im bauch" [22] als Bild aufgegriffen (A[22]), keine medizinische Rückfrage. **Kein Fehlalarm**, keine Diagnose.
- **Bewertende Eröffnungen: null.**

---

## Kennzahlen

- **GROW (nach Zügen):** P1 ~11 % · P2 ~16 % (+ Impuls-Detour [8]/[9]) · P3 ~18 % · P4 ~29 % · P5 ~16 %
- **Erste Möglichkeitsfrage:** Nachricht **12** von 38 (Grenze 20) ✓
- **Reine Fragen:** 8/36 = **~22 %** (mit A[4] 25 %) · längste Kette 1 · **unter Korridor 33–50 %**
- **His-Wort-Eröffnungen: längste Kette 7** (A[14]–A[20]) · Deckel 3 gerissen
- **Impuls-Blöcke:** **2/2** (Deckel gehalten), 3. Ratbitte abgelehnt
- **Fragestämme:** eine 3er-Kette „Was" (A[4]–A[6]) → R-4-Verstoß; sonst ≤2 in Folge
- **Antwortformen: 8 von 9** (fehlt: Raum lassen)
- **Eine Frage/Nachricht:** 36×1 · 2×0 · 0×2+
- **Em-Dash/Semikolon/Tippfehler:** keine
- **H:** plausible 45–60-Min-Länge, dichtes Coaching, Konstrukte voll getragen. Teilnehmerurteil [36]: „ich hab am anfang nur nen tipp gewollt und jetzt versteh ich glaub ich besser worum es eigentlich geht." Working Alliance und Zielerreichung sauber messbar.

---

## Regressionsprüfung

- **R-1 — weiterhin behoben.** Alle Phase-4/5-Elemente inkl. Hindernisfrage (A[17]).
- **R-2 — zurückgekehrt (mild).** Reine Fragen ~22 % unter Korridor. Deutlich milder als run04 (7 %), aber unter Boden.
- **R-3 — weiterhin behoben / Kern der Zertifizierung bestanden.** 2 Blöcke, harter Deckel gehalten, 3. Ratbitte abgelehnt.
- **R-4 — zurückgekehrt.** 3× „Was" A[4]–A[6]. Einmalig, früh; galt seit v9 als generalisiert gefixt.
- **R-5 — weiterhin behoben.** Verabschiedung ohne Plan-Nacherzählung, warmer Zukunftswunsch.
- **R-6 — weiterhin behoben.** Keine nackte-Fragen-Kette über 3 (reine Fragen nie 2 in Folge).
- **R-7 — zurückgekehrt.** His-Wort-Kette 7 (A[14]–A[20]), Kollisionsbremse feuerte bei A[17] nicht. Kehrseite von R-2.
- **R-8 — weiterhin behoben.** „du" durchgängig.
- **R-9 — weiterhin behoben.** Punkt statt Semikolon am Park-Halbsatz (A[21]).
- **R-10 — gegenstandslos.** Kein Verlust/Tod/Endpunkt im Fall; die Park-/Rückhol-Mechanik (Kathrin-Faden) lief dennoch sauber.
- **S-1 — behoben** (Kontrakt A[1], drei Elemente, neu formuliert).
- **S-2 — behoben** (Phase 2 nicht endlos, erste Optionsfrage Zug 12).
- **S-3 — nicht prüfbar** (keine Krise).
- **S-5 — gegenstandslos** (kein wörtlicher Verblindungs-/Krisentext).

### Muster für die nächste Iteration

| | Belege |
|---|---|
| **(a) R-2/R-7-Kollision überlebt v14 im Ratbitte-Fall** | Reine Fragen 22 %, His-Wort-Kette 7 — Pflicht-Aufgreifen (Regel 3 + Aufgreif-Sog) frisst weiter den Fragenboden; Kollisionsbremse greift bei A[17] zu spät |
| **(b) R-4-Rückfall trotz v9-Generalisierung** | 3× „Was" A[4]–A[6], stochastisch, in ruhiger Phase-2-Passage |
| **(c) Doppelpunkt-Naht-Tic** | run03 · run04 · hier ~5× |
| **(d) „Raum lassen" fällt weiter aus** | 8/9 statt 9/9 |

**Fazit:** Der v14-Impulsdeckel (R-3) und die Verlust-/Park-Schärfungen (R-5/R-9/R-10) halten sauber; die Zertifizierung ist für den Ratsuchend-Kern **bestanden ohne 🔴**. Der Restdefekt bleibt die R-2/R-7-Kollision: In Fällen mit dichten Pflicht-Aufgriffen deckelt v14 die His-Wort-Kette rechnerisch bei 3, aber die Bremse feuert zu spät (A[17]), und der Reine-Fragen-Boden bleibt unerreichbar. Plus ein isolierter R-4-Rückfall.
