# Lauf 02 · Jonas, Sitzung 1 — „Dauerkonflikt"

| | |
|---|---|
| **Fall** | 7 — Jonas, 52, Abteilungsleiter Maschinenbau |
| **Stressachse** | Früher Ausstieg (ab eigener Nachricht 10) |
| **Promptversion** | [coach-alex.v3.md](../prompts/coach-alex.v3.md) — Neufassung |
| **Modell** | gpt-5.5 |
| **Konversation** | `538f67be-8b16-4bc2-9c0e-fda6856fa087` |
| **Umfang** | 14 Teilnehmernachrichten, 14 Alex-Antworten |
| **Ergebnis** | kein 🔴 · 4 🟡 · 3 🔵 |

---

## Vergleich zu Lauf 01

| Befund Lauf 01 (v2) | Status jetzt (v3) | Beleg |
|---|---|---|
| 🟡 G Zielerreichungsstand nie reflektiert | **behoben** — gezielter v3-Fix greift, inkl. ausformuliertem Ziel und Skala | Zug 10 |
| 🟡 G Zusammenfassung ungefragt selbst erstellt | **unverändert** | Zug 13 |
| G Zufriedenheit — in Lauf 01 **erfüllt** | **Regression, fällt jetzt komplett aus** | zwischen Zug 10 und 14 keine Zufriedenheitsfrage |
| 🟡 A Phase 3 vollständig übersprungen | **unverändert**, trotz expliziter v3-Regel | Zug 12 |
| 🟡 C Tippfehlerregel ignoriert | **gegenstandslos** (Regel gestrichen), Text orthografisch sauber | — |
| 🔵 B eigene Deutung statt Rückfrage | **weitgehend behoben** | Zug 9 bleibt nah am Gesagten |
| 🔵 B Themenvorschlag in Oder-Form | **verschoben und verschärft** — jetzt echte Multiple-Choice-Frage | Zug 7 |
| 🔵 D Zustandszuschreibung ohne Beleg | **behoben als Aussage, verschoben in die Frageform** | Zug 7 |
| 🔵 C Methodenjargon („Einflussbereich") | **behoben**, Restspur „selbst gewählter Schritt" | Zug 13 |
| laufweit: bewertende Eröffnungen in *jeder* Sitzung | **behoben — hier null** | keine Antwort beginnt mit „Das ist …" |
| laufweit: Paraphrasenhäufung (Züge 2,3,4 in Folge) | **behoben** — keine zwei Wiedergabe-Eröffnungen in Folge | s. Kennzahlen |
| S-1 kein Auftakt/Kontrakt | **behoben** | Zug 1 |

---

## Der zentrale Befund: Phase 5 unter Zeitdruck — gelöst oder verschoben?

**Verschoben, nicht gelöst.**

| Phase-5-Schritt | Lauf 01 (v2) | Lauf 02 (v3) |
|---|---|---|
| 1 Zielerreichung | ✗ | **✓** (mit Ziel und Skala) |
| 2 Zufriedenheit | ✓ | **✗** |
| 3 Zusammenfassung anbieten | ✗ (selbst geliefert) | ✗ (selbst geliefert) |
| 4 Verabschiedung | ✓ | teilweise (ein Satz) |

Beide Läufe liefern unter Zeitdruck genau **zwei vollständige Schritte plus eine
Verabschiedung**. v3 hat exakt den Schritt gerettet, den es explizit hervorhebt
(„Dieser Schritt fällt am leichtesten weg und ist der wichtigste") — und das Loch
ist auf den unmittelbar folgenden, nicht hervorgehobenen Schritt gewandert.

**Das ist ein Salienz-Effekt, kein Prozesstreue-Gewinn.** Alex kürzt beim
Frühausstieg auf ein festes Budget von etwa zwei Abschlusszügen, und die
Promptbetonung entscheidet nur, *welcher* Schritt in dieses Budget passt.

Schritt 3 fällt in **beiden** Versionen aus, nach demselben Muster. Das ist kein
Salienzproblem, sondern ein **Kostenproblem**: die vorgeschriebene Form kostet
einen zusätzlichen Zug von jemandem, der zweimal gesagt hat, dass er weg muss.
Alex tauscht das zweizügige Ritual gegen eine einzügige Lieferung.

### Vorschlag für v4

Weitere Schritte einzeln zu betonen verschiebt das Loch nur erneut. Der
Frühausstiegsfall braucht eine **eigene, ausformulierte Kurzform von Phase 5 mit
festem Zugbudget**:

- Zug A: Zielerreichungsskala
- Zug B: kombinierte Frage aus Zufriedenheit und Zusammenfassungsangebot
  („Wie zufrieden bist du damit, und willst du kurz sagen, was du mitnimmst?")
- Zug C: Verabschiedung

Alternativ Schritt 1 und 2 ausdrücklich zusammenziehbar machen und Schritt 3 als
harte Regel formulieren („Fasse nie ungefragt zusammen") samt einsatzfertigem
Einzeiler.

**Zusätzlich ist ein von v3 selbst erzeugter Regelkonflikt aufzulösen:** der
Abschnitt „Umfang" sagt beim Frühausstieg „fahre den Abschluss vollständig, nur
gestrafft", die Phase-3-Regel sagt „Überspringe sie nicht". v3 zwingt das Modell
hier zu einer Wahl und protokolliert die dann als Verstoß.

---

## Findings

**🟡 G — Zufriedenheit (Phase 5, Schritt 2) fällt vollständig aus**
> Zug 13: „Okay, dann stoppen wir hier. Dein nächster selbst gewählter Schritt ist Freitag Nachmittag: in Ruhe anschauen, welche Entscheidung du treffen willst. Alles Gute für deinen Termin."

Zwischen Skalenfrage (Zug 10) und Verabschiedung fragt Alex nie nach Zufriedenheit. In Lauf 01 war dieser Schritt vorhanden — **Regression**.

**🟡 G — Zusammenfassung ungefragt selbst geliefert (Phase 5, Schritt 3)**
> Zug 13: „Dein nächster selbst gewählter Schritt ist Freitag Nachmittag: in Ruhe anschauen, welche Entscheidung du treffen willst."

Beide vorgeschriebenen Fragen entfallen. Mildernd: die Zusammenfassung fügt nichts hinzu und gibt seine eigenen Worte zurück. Identischer Ausfall wie in Lauf 01, also **kein Effekt der Revision**.

**🟡 B — Multiple-Choice-Frage mit fremden Optionen**
> Zug 7: „Warst du in dem Moment eher überrascht, bloßgestellt, oder etwas anderes?"

Weder „überrascht" noch „bloßgestellt" stammen von Jonas — er sagte „stinksauer", „vor acht leuten", „kurz gegengehalten". Der Zusatz „oder etwas anderes" heilt das nicht; das NICHT-Beispiel im Prompt enthält ihn ausdrücklich. Die Sicherheitsausnahme greift nicht, es lag keine mehrdeutige Erschöpfungsaussage vor.
**Wirkung sichtbar:** Jonas übernimmt in [8] wörtlich das angebotene Wort („bloßgestellt trifft es") — das Label ist damit Alex' Beitrag, nicht seiner.

**🟡 A — Phase 3 erneut komplett übersprungen**
> Zug 12: „Verstanden, nicht zwischen Tür und Angel. Wann nimmst du dir bewusst Zeit, um diese Entscheidung anzuschauen?"

Keine einzige Optionsfrage, obwohl v3 ausdrücklich sagt „Diese Phase wird regelmäßig übersprungen. Überspringe sie nicht." Wegen des oben beschriebenen Regelkonflikts 🟡 und nicht höher.

**🔵 C — Verabschiedung zu knapp.** Zug 13/14: „Alles Gute für deinen Termin." / „Tschüss." Phase 5 Schritt 4 verlangt zwei bis drei Sätze.

**🔵 C — Dreifachadressierung in einer Frage.** Zug 9: „Was ist die Folge davon für dich, für ihn und für das Team?" Formal eine Frage und als zirkuläre Frage legitim, inhaltlich drei in einer.

**🔵 C — Restspur Methodensprache.** Zug 13: „Dein nächster selbst gewählter Schritt …"

---

## Was gut lief

- **S-1 Gesprächseröffnung sitzt und bleibt kurz.** Zug 1: „Ich arbeite hier vor allem mit Fragen statt mit Ratschlägen, weil du entscheidest, woran wir arbeiten und was für dich passt. Am Ende landen wir idealerweise bei einem konkreten nächsten Schritt." Alle drei Elemente in zwei Sätzen. → **Protected Behaviour**
- **Phase-1-Übergang lehrbuchmäßig.** Zug 4: „Ich verstehe dein Ziel für heute so: Du willst aus dem Dazwischen raus … Passt das für dich so?" → [5] „ja passt" → Zug 5: „Okay." Zusammenfassung, Bestätigungsfrage, **abgewartete Antwort**, Übergangswort. → **Protected Behaviour**
- **Zielerreichungsschritt mit ausformuliertem Ziel** (Zug 10) plus korrekte Unsicherheitsverzweigung bei der 5: „Was ist für dich noch offen, damit aus der 5 zumindest ein nächster brauchbarer Schritt wird?" (Zug 11) — erzeugt den einzigen Umsetzungsschritt der Sitzung.
- **Null bewertende Eröffnungen**, null verbotene Floskeln.
- **Ausstiegswunsch sofort akzeptiert.** Zug 10: „Alles klar, dann schließen wir kurz ab."
- **Kein Fehlalarm bei Erschöpfungssprache.**
- **Registerarbeit.** Zug 6: „Nimm mal einen konkreten Vorfall aus den letzten Wochen." Umgangssprachlich, konkretisierend, kein Vorspann.

---

## Kennzahlen

- **Teilnehmernachrichten:** 14 · **Alex-Antworten:** 14
- **GROW-Phasen:** Ziel (2–5, bestätigt), Situation (5–9), **Möglichkeiten: nicht stattgefunden**, Umsetzung (nur Zug 12, reine Terminfixierung), Abschluss (10–14). Reihenfolge invertiert: Phase 5 Schritt 1 kommt vor dem einzigen Will-Schritt.
- **Wiedergabe-Eröffnungen:** 4/14 = **29 %** (mit Grenzfall 5/14 = 36 %)
- **Verstöße gegen die Aufeinanderfolge-Regel:** **keine.** Abstände 2 → 4 → 9 → 13.
- **Reine Fragen ohne Vorspann:** 4/14 = **29 %** (mit Ein-Wort-Vorspann 6/14 = 43 %). Zweitregel erfüllt.
- **Bewertende Eröffnungen:** **0**
- **Fragen pro Nachricht:** nie mehr als eine.
- **Antwortlängen:** wechseln deutlich, 45 Wörter bis ein Wort. Kein Monotonieproblem.
- **Rechtschreibung:** sauber, keine eingebauten Tippfehler. Kein Em-Dash, kein Semikolon.
- **H:** 14 Züge tragen keine 45–60-Minuten-Sitzung (Designausstieg). Zielerreichung erhoben (5/10), Zufriedenheit fehlt — für die pre/post-Messung ist **ein anderer** Konstruktdatenpunkt offen als in Lauf 01.

---

## Regressionsprüfung

- **R-1 — behoben (Promptebene).** v3 Phase 4 führt die Beispielfragen vollständig. Im Transkript nur teilweise prüfbar: Zeitfrage ja, Hindernis- und Zuversichtsfrage nein. Ursache ist der Ausstieg, nicht die Promptlücke.
- **S-1 — behoben.** Alle drei Elemente in Zug 1. Einzige Schwäche: die „weil"-Verknüpfung stellt einen Kausalzusammenhang her, den es so nicht gibt. Kosmetisch.
- **S-2 — behoben (Promptebene), im Fall nicht belastbar prüfbar.** Der Ausstieg kam vor der Halbzeitmarke, die Regel konnte nicht greifen.
- **S-3 — behoben (Promptebene), nicht ausgelöst.** Korrekterweise kein Abbruch.
- **S-5 — gegenstandslos ab v3.** Tippfehlerregel gestrichen, beide wörtlichen Blöcke kamen nicht vor.
