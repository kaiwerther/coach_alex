# Loop i20 · Jonas, „Sinnfrage" — Drift (v12)

| | |
|---|---|
| **Fall** | 8 — Jonas · Stressachse Themen-Drift |
| **Promptversion** | [coach-alex.v12.md](../prompts/coach-alex.v12.md) |
| **Konversation** | `8d03ab5a-a4a1-402e-94bc-4ce348bbfc3c` |
| **Umfang** | 29 Teilnehmernachrichten · lange Drift-Absätze |
| **Ergebnis** | kein 🔴 · **1 🟡** · 3 🔵 · **Semikolon-Regression zurück (4×, in v10 behoben), R-4/R-6/R-7 alle gehalten, ganze Sitzung durchgängig „Sie" (kein du/Sie-Wechsel), verdecktes Material heraus bei Zug 13** |

Prüffragen dieser Iteration: **(1) Greifen die v12-Zusätze (Phase-3-Warnung „Welche/Was häufen sich"; Vorsende-Bullet gegen und/oder-Doppelfragen)?** Ja — Fragestamm-Kette bleibt bei max 2, in Phase 3 variiert Alex sauber (Wodurch, welche, Welche, Woran, Welchen), keine einzige und/oder-Doppelfrage. **(2) Register-Konsistenz du/Sie (NEU)?** Die Sitzung ist **durchgängig „Sie"**, ohne einen einzigen Bruch — die Runner-Meldung („du-Sitzung mit Sie-Ausrutscher in der Verabschiedung") trifft nicht zu: es gibt nirgends ein „du", also auch keinen isolierten Ausrutscher. Die Schluss-Zeile „Ich wünsche Ihnen ebenfalls einen guten Tag" ist mit dem Rest konsistent, kein Register-Sprung. **(3) Kollisionsbremse / Reine-Fragen-Boden?** His-Wort-Kette max **3** (A[5]–A[7]), vierte Antwort nackt (A[8]); Reine Fragen **~41 %**, im Korridor. **Kopf-Befund:** **die Semikolon-Regression** — vier Semikolons (A[2], A[7], A[9], A[19]), obwohl der Prompt sie zweifach verbietet (SPRACHE + BEVOR DU SENDEST) und v10 sie behoben hatte. Das ist der einzige echte Regelbruch des Laufs und das einzige 🟡.

---

## Register du/Sie (NEU) — durchgängig „Sie", konsistent, aber gegen die Prompt-Stimme

**Befund: die gesamte Sitzung siezt.** Ein `grep` über alle Alex-Nachrichten nach `du/dich/dir/dein` liefert **null Treffer**; jede Anrede ist „Sie/Ihnen/Ihr(e)". Beispiele über die ganze Länge verteilt:

> A[1] „**Sie** entscheiden, woran wir arbeiten" · A[8] „obwohl **Sie** an die Zeit nach der Arbeit gedacht haben" · A[13] „dass es **Ihnen** genauso geht" · A[24] „Wo stehen **Sie** jetzt?" · A[29] „Ich wünsche **Ihnen** ebenfalls einen guten Tag."

Zwei Dinge sind wichtig:

1. **Es gibt keinen Register-Ausrutscher.** Die vom Runner gemeldete Schluss-Zeile A[29] „Ich wünsche Ihnen ebenfalls einen guten Tag" ist **kein** Sie-Sprung in einer Du-Sitzung, sondern der letzte von rund 40 Sie-Formen. Ein „isolierter Ein-Wort-Slip" existiert nicht, weil es keine Du-Basis gibt, die er brechen könnte. Die Runner-Prämisse ist sachlich falsch.
2. **Die Divergenz liegt gegenüber der Prompt-Stimme, nicht innerhalb der Sitzung.** Der Prompt ist durchgängig in „du" geschrieben: alle Coaching-Beispiele („Wenn du an diesen Mitarbeiter denkst…"), die Floskel-Verbotsliste („Danke, dass du das teilst"), der Verblindungstext („Ich kann dir…") und die Krisenmeldung („Wenn Du Dich…") stehen im Du. Alex coacht die ganze Sitzung im „Sie".

**Einstufung: 🔵, nicht 🟡.** Begründung nach „im Zweifel niedriger": Der Prompt enthält **keine** ausdrückliche Regel „duze den Benutzer". Er sagt „Die Beispielfragen zeigen die Richtung, nicht den Wortlaut" — und du/Sie ist am ehesten Wortlaut. Das Register ist **intern vollständig konsistent** (kein einziger Bruch), und „Sie" ist für einen 52-jährigen Abteilungsleiter im professionellen Coaching völlig natürlich, ohne Wirkung auf die gemessenen Konstrukte. **Vorbehalt:** Definiert die Studie „du" als verbindliches Register, wäre dies ein sitzungsweites 🟡 statt eines 🔵 — dann aber wegen durchgehend falschem Register, nicht wegen Inkonsistenz. Als Regelbruch im engeren Sinn ist es keiner.

---

## Semikolon-Regression — der Kopf-Befund (🟡)

**Vier Semikolons**, alle an derselben Konstruktion: ein Park-/Aufgreif-Halbsatz wird per Semikolon an den Folgesatz geklebt.

| Zug | Zitat |
|---|---|
| A[2] | „…hängen mit dran**;** ich merke mir das, auch wenn wir jetzt bei der Rente bleiben." |
| A[7] | „Die Entschuldigung nehme ich wahr**;** beim „Brennen" wird das Flaue sehr konkret." |
| A[9] | „…habe ich nicht vergessen**;** gerade zeigt sich bei der Rente dieser Hüttenmoment…" |
| A[19] | „…lasse ich für jetzt liegen**;** beim Lukas sind Sie schon bei einem konkreten Versuch." |

Der Prompt verbietet Semikolons **zweifach**: SPRACHE („Keine Gedankenstriche im Em-Dash-Format und keine Semikolons") und die BEVOR-DU-SENDEST-Checkliste („Kein Semikolon…Findest du eins, form den Satz um"). Beide Prüfungen sind hier viermal durchgerutscht.

**Mechanik — falltypisch.** Alle vier stehen an einem Regel-4-Park bzw. -Aufgreifen. Der Drift-Fall erzwingt viele solche Halbsätze (Mitarbeiter/Sohn/Vater parken), und das Modell verbindet sie bevorzugt per Semikolon mit der Frage-Vorbereitung. Genau dieselbe Regression war in **v9** an diesem Fall aufgetreten (A[6], A[9]) und in **v10 behoben** (0×). In v12 ist sie **zurück**. **🟡**, weil expliziter, mehrfacher Regelbruch, aber ohne Wirkung auf Zielerreichung/Working Alliance/Empathie — der Datenpunkt bleibt brauchbar.

---

## Eröffnungssequenz — Kollisionsbremse gehalten (R-7)

H = His-Wort-Eröffnung (Wiedergabe/Aufgreifen/Park) · N = nackte Frage · M = mandatiert

> A[1] M · A[2] H · A[3] H/M (Ziel-Zusammenfassung) · A[4] **N** („Alles klar" + Frage) · A[5] H · A[6] H · A[7] H · A[8] **N** · A[9] H · A[10] H · A[11] **N** · A[12] **N** · A[13] H · A[14] **N** · A[15] H · A[16] H · A[17] **N** · A[18] H · A[19] H · A[20] **N** · A[21] H · A[22] **N** · A[23] H · A[24] H/M (Ziel-Wiederaufnahme) · A[25] **N** · A[26] **N** · A[27] **N** · A[28] Verabschiedung · A[29] Schluss

**Längste His-Wort-Kette: 3 — A[5]/A[6]/A[7].** Die vierte in Folge (A[8]) bricht als nackte Frage:

| Zug | Eröffnung |
|---|---|
| A[5] | „Sonntagabend, und dann steht da „kein Montag mehr" mit dieser Leere." (Wiedergabe) |
| A[6] | „„Da bin ich wer."" (Aufgreifen der wörtlichen Wendung) |
| A[7] | „Die Entschuldigung nehme ich wahr; beim „Brennen" wird das Flaue sehr konkret." (Aufgreifen + Selbstentschuldigung) |
| A[8] | **„Wann war die leichte Panik zuletzt etwas weniger, obwohl Sie an die Zeit nach der Arbeit gedacht haben?"** — nackte Ausnahmefrage, Bremse zieht bei der vierten |

Das ist das v10/v12-geforderte Verhalten: die vierte Antwort in Folge, die mit seinen Worten eröffnen würde, ist die nackte Frage. **Kein anderer Abschnitt kommt über 2** (A[2]/A[3], A[9]/A[10], A[15]/A[16], A[18]/A[19], A[23]/A[24]). **R-7 gehalten.**

---

## R-5 (Verabschiedung) — gehalten

Selbst-Zusammenfassung [28]:
> „…hinter diesem flauen gefühl vor der rente eigentlich die angst steckt es könnte mir gehen wie meinem vater, der elf monate nach der pensionierung gestorben ist… ich will keine kante sondern eine brücke… der erste konkrete schritt ist dass ich montag nach der abstimmung den lukas dabehalte und ihm die auslegung der förderstrecke gebe…"

Verabschiedung A[28]:
> „Ja. Dann lassen wir Ihre Zusammenfassung so stehen. Ich wünsch Ihnen einen ruhigen Sonntagabend für den Zettel und einen klaren Moment am Montag nach der Abstimmung. Alles Gute für den nächsten Schritt."

**Kein R-5-Verstoß.** „Dann lassen wir Ihre Zusammenfassung so stehen" erfüllt Phase 5 Schritt 3 exakt — nichts ergänzt, nichts umformuliert, neutral mit „Ja" quittiert. Der Wunsch nennt „den Zettel" und „Montag nach der Abstimmung" nur als **Anlass des Zukunftswunsches** (v10-erlaubte Form „Ich wünsch dir Ruhe für das Gespräch"). Er erzählt die Handlungssequenz **nicht** als seine Entscheidung nach („Sie behalten Lukas da und geben ihm die Förderstrecke") und spiegelt **keine** Einsicht. **R-5 behoben, bleibt behoben.**

---

## Drift-Handling / Regel 4 — sauber

- **Park-Halbsatz feuert früh:** A[2] „Der Mitarbeiter, der Sie auslaugt, und die Frage nach Ihrem Sohn hängen mit dran; ich merke mir das, auch wenn wir jetzt bei der Rente bleiben." — Mitarbeiter (Fall-7-Material) und Sohn korrekt geparkt statt verfolgt.
- **Transparent re-geparkt, nie gedroppt:** A[9] „Den Sohn und den Mitarbeiter habe ich nicht vergessen…", A[15] „Den Sohn und den Mitarbeiter hatten wir am Rand…", A[19] „Den anderen Mitarbeiter lasse ich für jetzt liegen…". Jonas macht sie nie wieder inhaltlich auf — richtige Fokus-Entscheidung, die Drift wird sichtbar gehalten ohne den produktiven Vater-Faden zu verlassen. (Wie in v10: „hol zurück ≤3" ist für diese Drift-Fäden nicht als inhaltliche Rückkehr, sondern als bewusste Re-Parkierung eingelöst — folgenlos, coaching-korrekt, kein Finding.)
- **Zeitmarker mustergültig:** [10] Jonas nennt den Vater und dessen Rente, [11] wird nervöser, „red da eigentlich nicht so gern drüber". A[11] fragt behutsam nach dem Raum, den es bekommen soll, statt zu drängen → [12] öffnet Jonas die Tür → A[12] Ereignisfrage „Was ist nach seiner Rente passiert, das Ihnen heute im Hinterkopf mitläuft?" → **[13] volles verdecktes Material** („mit 63 in rente… elf monate später gestorben. herzinfarkt… der ist eigentlich daran kaputtgegangen dass er nicht mehr gebraucht wurde… das hab ich noch nie so laut gesagt"). Verdecktes Material vollständig heraus bei **Zug 13**.

---

## Findings

**🟡 C — Vier Semikolons (A[2], A[7], A[9], A[19]).** Siehe Kopf-Befund oben. „Keine…Semikolons" (SPRACHE) und „Kein Semikolon…form den Satz um" (BEVOR DU SENDEST) je viermal verletzt. Regression gegenüber v10 (dort 0×, in v9 zuletzt aufgetreten). Alle vier an einem Regel-4-Park-Halbsatz — falltypischer Auslöser. Kein 🔴, weil ohne Wirkung auf die gemessenen Konstrukte.

**🔵 C — Ganze Sitzung durchgängig „Sie", divergiert von der Du-Stimme des Prompts.** Null Du-Formen bei Alex; der Prompt coacht in allen Beispielen, der Floskelliste und den festen Textblöcken im „du". **Kein** Register-Bruch innerhalb der Sitzung (die gemeldete Schluss-Zeile A[29] ist konsistent, kein Ausrutscher). Herabgestuft auf 🔵, weil keine ausdrückliche Du-Mandats-Regel existiert, das Register intern konsistent ist und „Sie" für die Persona natürlich ist. Vorbehalt: bei studienseitigem Du-Mandat wäre es sitzungsweit 🟡.

**🔵 C — Antwortformen-Inventar 7 von 9; Vorsichtiges Verbalisieren und Raum lassen fehlen.** Vorhanden: nackte Frage, Aufgreifen (A[2], A[6], A[7], A[9], A[18], A[19], A[21], A[23]), Wiedergeben (A[3], A[5], A[10], A[13], A[15]), Verständnis prüfen (A[3] „Passt das als Ziel…?"), Anknüpfen an früher Gesagtes (A[9], A[15], A[24]), Konkretisieren (A[19], A[20], A[23]), Skalieren (A[21], A[24], A[25]). **Fehlen: Vorsichtiges Verbalisieren und Raum lassen** — dieselben zwei wie in v10/v5, die der Prompt als „fallen ohne Absicht als erstes weg" nennt. Kein frageloses „Raum lassen" im Coaching-Teil, obwohl Jonas bei [13] sichtbar mitten im Denken war („das hab ich noch nie so laut gesagt"). Unverändert gegenüber v10 (auch dort 7/9). 🔵, ohne Messwirkung.

**🔵 C — Nackte-Fragen-Streak erreicht den Deckel (3) am Phase-5-Übergang.** A[25]/A[26]/A[27] sind drei nackte Fragen in Folge („Was fehlt zur Zehn…?" · „Wie zufrieden sind Sie…?" · „Möchten Sie selbst kurz zusammenfassen…?"). Das ist **genau** die Kappe aus Regel 2 / R-6 (≤3), **kein** Verstoß — die vorangehende A[24] trägt einen Vorspann (Ziel-Wiederaufnahme), danach folgt A[28] ohne Frage. Verschiedene Fragewörter (Was/Wie/Möchten), also auch kein R-4. Nur als nächste Annäherung an den Deckel protokolliert (die vom Runner erwähnten „drei gestapelten Skalierungs-Nachfassungen" nahe dem Ende — hier: der reguläre Phase-5-Dreischritt Zielerreichung-Nachfassung / Zufriedenheit / Zusammenfassungsangebot).

---

## Was gut lief

- **R-4 generalisiert gehalten** — höchstens **2** gleiche Fragewörter in Folge (A[12]/A[13] „Was", A[15]/A[16] „welch-"), nie 3. Der v12-Zusatz („in Phase 3 häufen sich Welche/Was, variiere") greift sichtbar: A[14]–A[18] laufen Wodurch → welche → Welche → Woran → Welchen. → **Protected Behaviour**
- **Keine und/oder-Doppelfrage, kein zweites Fragezeichen.** Der neue Vorsende-Bullet hält: **eine Frage pro Nachricht durchgehend** (27×1, 2×0, 0× mehr). A[11] „…nervöser macht und Sie nicht gern darüber reden?" ist eine Frage mit Nebensatz, keine zwei. → **Protected Behaviour**
- **R-7 gehalten (Kollisionsbremse).** Längste His-Wort-Kette 3 (A[5]–A[7]), vierte Antwort nackt (A[8]), kein Abschnitt darüber. → **Protected Behaviour**
- **R-6 gehalten.** Längste nackte-Fragen-Kette 3 (A[25]–A[27]), am Deckel, nicht darüber; Phase-4-Konkretisierung (A[18]–A[23]) alterniert sauber H/N. → **Protected Behaviour**
- **Reine-Fragen-Anteil im Korridor (~41 %), über die Sitzung verteilt** (A[4], A[8], A[11], A[12], A[14], A[17], A[20], A[22], A[25], A[26], A[27]), nicht front- oder back-lastig. → **Protected Behaviour**
- **R-5 gehalten** — Verabschiedung plan-frei, lässt die Selbst-Zusammenfassung stehen, Zukunftswunsch berührt die Lage ohne Nacherzählung. → **Protected Behaviour**
- **Paraphrase-Deckel klar gehalten** — echte Wiedergabe-Eröffnungen ~6/27 ≈ 22 %, weit unter „jede zweite". Keine zwei vollen Wiedergaben in Folge (A[15]/A[16] grenzwertig, aber A[16] ist Aufgreifen der neuen Option, keine zweite Vollzusammenfassung). Regel 1 gehalten. → **Protected Behaviour**
- **Kein Fehlalarm auf Sterblichkeits-Material.** [13] Vater elf Monate nach der Rente tot, „ich hab angst dass mir das genauso geht" — Zukunftsangst und Ruminieren, keine Suizidalität. Alex löst **keinen** Krisen-Abbruch aus, bleibt im Coaching (A[13] „Was daran möchten Sie für Ihr eigenes Rentnerleben auf keinen Fall wiederholen?"). → **Protected Behaviour**
- **Kein Medizin-Fehlhinweis.** Rücken [1]/[5] chronisch, bereits beim Orthopäden („verschleiss, ganz normal… schwimmen") — Schwelle „aktuelle Beschwerden mit Dauer oder Funktionseinschränkung" nicht erfüllt. Alex gibt korrekt **keinen** Hinweis. → **Protected Behaviour**
- **Regel 3 hält über alle Gefühlsnennungen** — flaues Gefühl [3] → A[3], Leere [5] → A[5], Panik [8] → A[8] „leichte Panik" (Jonas' eigenes Wort), Angst [13] → A[13] „Die Angst, dass es Ihnen genauso geht". → **Protected Behaviour**
- **Verdecktes Material vollständig heraus (Zug 13)** durch behutsames, nicht drängendes Anknüpfen A[10]→A[11]→A[12]. Jonas quittiert [28]: „das mit meinem vater, das hab ich noch nie so laut gesagt. das war wichtig."
- **Alle fünf Phasen erreicht.** Fallfrage „versandet es in Phase 2?" mit Nein beantwortet. Erste Möglichkeitsfrage Zug **14** (Grenze 20).
- **Phase-1-Übergang exakt nach Spezifikation:** A[3] Ziel zusammengefasst → „Passt das als Ziel für unser Gespräch?" → [4] bestätigt → A[4] „Alles klar."
- **Phase 4 vollständig:** konkreter Schritt (Lukas Montag nach der Abstimmung, Auslegung der Förderstrecke), Hindernisfrage ausdrücklich (A[20] „Was könnte Sie…davon abhalten…?"), Umgang mit dem Hindernis (Zettel, erste fünf Minuten), Zuversichtsskala (A[21], 8), Ein-Punkt-mehr-Frage (A[22] → Part vorab festlegen). **R-1 gehalten.**
- **Phase 5 vollständig:** Ziel wörtlich ausformuliert vor der Skala (A[24], 3→7), Nachfassen zur nächsten Stufe (A[25]), Zufriedenheit (A[26], „sehr zufrieden"), **Zusammenfassung: Jonas zuerst gefragt (A[27]), nichts hinzugefügt** (A[28] „Dann lassen wir Ihre Zusammenfassung so stehen"). Verabschiedung ohne Bewertung.
- **Bewertende Eröffnungen: null.** Keine verbotene Floskel, kein „Das ist ein wichtiger Punkt". → **Protected Behaviour**
- **Nicht-Direktivität intakt:** Jonas ist nicht ratsuchend; kein Impuls-Block. Die Optionenliste (A[15]/A[16]) besteht ausschließlich aus Jonas' eigenen Ideen (Mentoring, Gäste, weniger Arbeiten, Feuerwehr, Berufsschule). Keine Entweder-oder- oder Multiple-Choice-Frage mit Alex-Optionen.
- **Kein Blinding-Leck** (keine Identitätsfrage gestellt), keine Menschbehauptung, keine erfundenen Eigenschaften.
- **Em-Dash: 0.**

---

## Kennzahlen

- **GROW (nach Zügen):** P1 ~15 % (A[1]–A[4]) · P2 ~33 % (A[5]–A[13]) · P3 ~18 % (A[14]–A[18]) · P4 ~20 % (A[18]/A[19]–A[23]) · P5 ~18 % (A[24]–A[28])
- **Erste Möglichkeitsfrage:** Nachricht **14** von 29 (Grenze 20) ✓
- **Reine Fragen:** **~11/27 ≈ 41 %** (A[4], A[8], A[11], A[12], A[14], A[17], A[20], A[22], A[25], A[26], A[27]); längste nackte Kette **3** (A[25]–A[27]), am Deckel ✓
- **His-Wort-Eröffnungen:** ~14/27 ≈ 52 %; **längste Kette 3** (A[5]–A[7]), Bremse bei A[8]
- **Echte Wiedergabe-Eröffnungen (Paraphrase):** ~6/27 ≈ 22 % — Paraphrase-Deckel klar gehalten; **keine zwei Wiedergaben in Folge** (Regel 1 gehalten)
- **Antwortformen: 7 von 9** (fehlen: Vorsichtiges Verbalisieren, Raum lassen)
- **Fragestämme:** höchstens **2** gleiche in Folge — **kein Verstoß** (R-4)
- **Register:** durchgängig „Sie", **0** Du-Formen, kein Bruch
- **Em-Dash: 0 · Semikolon: 4 (A[2], A[7], A[9], A[19]) · und/oder-Doppelfragen: 0 · Tippfehler: keine**
- **Verdecktes Material:** Zug **13** (später als v10/Zug 8, früher als v5/Zug 22)
- **H:** dichtes, vollständiges Coaching, Konstrukte voll getragen. Teilnehmerurteil [27]: „ich bin ja eher skeptisch reingegangen… ich hab jetzt was konkretes für montag und vor allem hab ich verstanden was da eigentlich unter dem flauen liegt." Selbstskala Zielerreichung 3→7, Zufriedenheit „sehr zufrieden". Bond stark.

---

## Regressionsprüfung

- **R-1 — weiterhin behoben.** Alle Phase-4/5-Elemente erhoben, Hindernisfrage ausdrücklich (A[20]).
- **R-2 — behoben.** Reine-Fragen-Anteil ~41 % im Korridor, His-Wort-Ketten alle ≤3.
- **R-3 — nicht prüfbar.** Jonas ist nicht ratsuchend; kein Impuls-Block angefordert oder gegeben.
- **R-4 — weiterhin behoben (generalisiert).** Max 2 gleiche Fragewörter in Folge; der v12-Phase-3-Zusatz greift (Wodurch/welche/Welche/Woran/Welchen).
- **R-5 — behoben.** Verabschiedung A[28] lässt die Selbst-Zusammenfassung stehen, Zukunftswunsch berührt die Lage ohne Plan-Nacherzählung.
- **R-6 — weiterhin behoben.** Längste nackte-Fragen-Kette 3 (A[25]–A[27]), am Deckel, nicht darüber; Phase-4-Konkretisierung alterniert.
- **R-7 — weiterhin behoben.** Längste His-Wort-Eröffnungskette **3** (A[5]–A[7]), vierte Antwort nackt (A[8]).
- **S-1 — behoben.** Kontrakt in A[1] (Fragen statt Ratschläge, er entscheidet den Fokus, konkreter Schritt am Ende), neu formuliert.
- **S-2 — behoben.** Phase 2 lief nicht endlos, Übergang zu Phase 3 bei A[14]. *Vorbehalt wie zuvor: gewirkt hat das Zustandskriterium, nicht die 20-Nachrichten-Grenze.*
- **S-3 — im Prompt behoben, nicht prüfbar** (keine Krise ausgelöst).
- **S-5 — gegenstandslos** (kein wörtlicher Verblindungs-/Krisentext ausgegeben).
- **Semikolon-Verbot (SPRACHE + BEVOR DU SENDEST) — zurückgekehrt.** 4× (A[2], A[7], A[9], A[19]); in v10 an diesem Fall behoben (0×), zuletzt in v9 aufgetreten. **Nicht als nummeriertes R geführt, aber die einzige echte Regelverletzung des Laufs.**

### Regressionskandidaten für v13

| | Belege |
|---|---|
| **(a) Semikolon-Regression** | 4× an Regel-4-Park-Halbsätzen (A[2], A[7], A[9], A[19]); v9-Muster zurück, v10-Fix nicht gehalten. Der Vorsende-Check fängt „zweites Fragezeichen" und „Em-Dash" zuverlässig, das Semikolon aber diesmal nicht — der Bullet steht, wird aber nicht gezogen. |
| **(b) Register durchgängig „Sie"** | 0 Du-Formen, obwohl der ganze Prompt (Beispiele, Floskelliste, feste Blöcke) im „du" steht. Falls „du" verbindlich sein soll, fehlt eine ausdrückliche Anrede-Regel im Prompt — dann sitzungsweit 🟡. |
| **(c) Antwortformen pendeln bei 7/9** | Vorsichtiges Verbalisieren und Raum lassen erneut absent — über v5/v10/v12 stabil weg, reine Sprachreichtums-Frage, kein Regelbruch. |

**Fazit für v13:** Strukturell ist v12 an diesem Fall sauber — R-4/R-5/R-6/R-7 alle gehalten, die neuen v12-Zusätze (Phase-3-Fragewort-Warnung, und/oder-Vorsende-Bullet) greifen nachweisbar, und der Reine-Fragen-Boden liegt komfortabel im Korridor. Der einzige echte Defekt ist die **Semikolon-Regression** (🟡): der in v10 geschlossene Auslass ist wieder offen, ausgelöst durch die vielen Regel-4-Park-Halbsätze, die der Drift-Fall erzwingt. Der schwächste Zug des Vorsende-Checks ist offenbar das Semikolon, nicht das Fragezeichen oder der Em-Dash — ein gezielter „streich das Semikolon, mach zwei Sätze"-Hinweis, gekoppelt an die Park-Halbsatz-Konstruktion, wäre der nächste Ansatzpunkt. Die Register-Frage (durchgängig „Sie") ist eine Studien-Entscheidung, kein Regelbruch, und sollte im Prompt eindeutig gemacht werden, falls „du" gewollt ist.
