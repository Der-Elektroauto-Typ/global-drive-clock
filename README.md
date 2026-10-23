# Global Drive Clock V3.2.2

Lokaler Stand: 23. Oktober 2026. Cache-Kennung: **3.2.2.
## Gestaltung und Bedienung

Die Seite hat sechs eigenständige Bereiche mit derselben Rahmen-, Flächen-, Schrift- und Abstandslogik:

1. Fahrzeugbestand und aktuelle Änderungsraten
2. Diagramm der modellierten Jahresänderungen
3. Zeitreise mit Quellenrückblick und Zukunftsszenario
4. Live-Session: Bestandsänderung seit Seitenaufruf
5. Kraftstoff-/CO₂-Schätzung während des Besuchs
6. Brand-Szenariomodell mit Referenzratenvergleich

Jeder Bereich hat denselben Regionsumschalter. Alle sechs Umschalter steuern gemeinsam Global, Deutschland, EU, China oder USA. Am Desktop sind die Namen ausgeschrieben; auf Smartphones erscheinen Flaggen und Kurzbezeichnungen. Die Besuchszeit läuft über Regionswechsel weiter. Das Brandmodell hat einen sichtbaren Rahmen mit orangefarbenem Akzent und nutzt ansonsten dieselbe Gestaltung wie die übrigen Bereiche. Die bestehende Kraftstoff-/CO₂-Beschriftung, Zahlenformatierung und Berechnung bleiben erhalten. Der gemeinsame Methodik-Link steht direkt unter diesen Werten und öffnet den zugehörigen Abschnitt. Brand- und Zeitreise-Links öffnen jeweils ihre eigenen Abschnitte in Daten & Methodik.

## Zeitreise 2008–2050, optional bis 2100

Die Darstellung enthält ausschließlich das Balkendiagramm für das ausgewählte Jahr; das zusätzliche Kurvendiagramm entfällt.

Der Regler beginnt bei 2008 und startet bei **jedem Aufruf im aktuellen Kalenderjahr des Geräts**. Sprach- und Regionswechsel erhalten seine Position. Direkt über dem Reglerpunkt wandert die ausgewählte Jahreszahl mit: 9 px gegenüber 11 px für die Randjahre. Die Position berücksichtigt beide Enden und den Wechsel zwischen 2050 und 2100.

- Vergangene Jahre zeigen vorhandene Originalquellenwerte mit ihrem tatsächlichen Stichtag. Fehlende Gruppen bleiben als „—“ sichtbar; fehlend ist nicht null. Es gibt keine rückwärts aus heutigen Wachstumsraten erfundene Vergangenheit.
- Das aktuelle Jahr zeigt den Modellbestand zum Beginn des Seitenaufrufs. Die laufenden Zähler darunter und darüber behalten ihre normale Besuchszeitrechnung.
- Zukünftige Jahre zeigen ein frei erkundbares Szenario zum Jahresende. Die Voreinstellung ist eine S-Kurve für den **BEV-Bestandsanteil** mit einstellbarer, ausdrücklich angenommener Sättigung; voreingestellt 90 %. Anfangswert und Anfangsänderung stammen aus dem aktuellen Regionalmodell. Die übrigen Antriebe und der Gesamtbestand folgen den in `SZENARIEN.md` offengelegten Annahmen. Ein linearer Vergleich ist ebenfalls verfügbar.
- Beide Ansichten berechnen bis 2100; die Standardansicht endet bei 2050. Das verlängert die Darstellung, beweist aber keine höhere Genauigkeit.
- Der CSV-Download enthält 2008–2100 mit Datenart, Stichtag, Modellbeginn, Annahmen, Beständen und Quellenlinks. Historische Werte bleiben von der Kurvenwahl unabhängig.

Auch ab 2008 gibt es keine vollständige harmonisierte Vier-Antriebs-Reihe aller Regionen. Deutschland enthält KBA-Jahresstände 2008–2012 und die neuere UBA/KBA-Reihe ab 2013; Erfassungsbrüche bleiben kenntlich. Die EU liefert Originalaggregate ab 2013. IEA liefert historische BEV-Pkw-Punkte, aber keinen weltweiten HEV+PHEV-/Benzin-/Diesel-Mix. Historische Gesamtbestände aus UBA/VDA werden bei fehlenden Antriebswerten separat angezeigt und wegen anderer Abgrenzungen nicht als Nenner missbraucht.

Vollständige Formeln, Quellen, Stichtage und Grenzen: [SZENARIEN.md](SZENARIEN.md). Die historischen Werte mit Herkunft und Prüfsummen: [history-data.json](history-data.json).

## Datenmodell

Die Bestands-, Verbrauchs-, Strommix-, CO₂- und Brandratenparameter entsprechen dem bisherigen V3.2.2-Stand. Deutschland verwendet weiterhin den gemessenen KBA-Sechsmonatsvergleich 1. Januar–1. Juli 2026 (181 Tage), annualisiert für die laufende Rate; der Prozentwert zeigt die gemessene Sechsmonatsänderung. Die langfristige S-Kurve ist ein getrenntes Szenario und verändert diese laufenden Zähler nicht.

Global = EU + China + USA + Rest der Welt; Deutschland ist Teil der EU. Die regionalen Fahrzeuggrenzen unterscheiden sich (DE/EU Pkw, USA Light-Duty, China Automobile einschließlich Nutzfahrzeugen). Teile des China-/Restmodells sind Annahmen. Der Rückblick behält die Quellenabgrenzungen und ersetzt keine aktuelle Modellkomponente.

Das Brandmodell überträgt norwegische Referenz-Punktraten auf denselben sichtbaren Regionalbestand in drei hypothetischen Varianten. Es misst keine lokalen oder globalen Live-Brände. Hybrid liegt nur im norwegischen Punktschätzer unter BEV; diese Rangfolge lässt sich nicht allgemein garantieren. Die im ersten V3.2.2-Schritt korrigierte Bestandsbasis schließt „Sonstige“ aus. Gegenüber V3.2.1 betrifft das global rund **15 Millionen** Fahrzeuge beziehungsweise rund 1,08 % am 23. Oktober 2026. Die Referenzraten selbst bleiben unverändert. Alle drei Brandzähler zeigen drei Nachkommastellen, ohne eine solche Messgenauigkeit zu behaupten.

Kraftstoff/CO₂ sind modellierte Mengen der gesamten Flotte über die Besuchsdauer. BEV nutzt einen Benzinervergleich abzüglich modellierter Stromerzeugung. Dies ist keine vollständige Lebenszyklusbilanz. Details und Quellen: [METHODIK.md](METHODIK.md) und Daten & Methodik auf der Website.

## Prüfung und Dateien

Die vor dieser Änderung ausgeführten Funktions- und Zahlenprüfungen des Stands **3.2.2-3** sind in [validation-v3-2-2.json](validation-v3-2-2.json) aufgeführt: 8.250 Zukunftskombinationen, Startwerte und Anfangsableitungen, nicht negative Bestände und stimmige Summen, sechs gekoppelte Umschalter, zehn UI-Sprachen, Jahresstart und Zeitauswahl, unveränderliche historische Werte, Methodik-Ziele und CSV-Ausgabe. Diese Prüfungen verwenden eine DOM-Simulation und kein grafisches Browserfenster. Eine grafische Browserprüfung war durch die Sicherheitsrichtlinie für den lokalen Datei-Aufruf blockiert. Die Prüfungen belegen weder empirische Prognosegenauigkeit noch ein kontrolliertes Layout auf jedem Gerät. Für **3.2.2-5** (Kurvendiagramm entfernt, Balkendiagramm beibehalten, Anzeige und Export ab 2008, mitwandernde Jahreszahl am Reglerpunkt) wurden keine neuen Funktionstests ausgeführt; der Bericht bleibt als historischer Beleg erhalten.

`validation.json`, `data-review-v3-1-3.json` und `source-link-audit.json` sind übernommene historische Prüfbelege; ihre Ergebnisse werden nicht als neue V3.2.2-Prüfungen ausgegeben. Quellen der bisherigen Modellparameter wurden am 20. Oktober 2026 geprüft; zusätzliche Historien-/Szenarioquellen am 23. Oktober 2026.

- `data.js` / `model.js`: bisherige Parameter und Bestandsbilanz
- `scenario.js`: getrennte S-Kurven-/Linearrechnung
- `history-data.js` / `.json`: archivierte historische Quellenwerte
- `app.js`: Anzeige und gekoppelte Bedienung
- `interface-copy.js`: zusätzliche Oberflächentexte in zehn Sprachen
- `style.css` / `layout.css`: bestehender Grundstil und gemeinsame Bereichsgestaltung
- `methodology.js`, `METHODIK.md`, `SZENARIEN.md`: Methodik
- `model-provenance.json`, `source-extracts.json`: bisherige Datenherleitung
- `vehicle-fire-research-2026-10-20/`: verlinkte historische Brandrecherche und öffentliche norwegische JSON-Auszüge; frühere Entwürfe sind ausdrücklich historisch. Die geschützte polnische Originalinfografik ist nicht im Websitepaket enthalten.

Quellendaten behalten die jeweiligen Lizenzen. IEA-Grafikauszug: CC BY 4.0; KBA-Originaltabelle mit Quellenangabe. Titel und Fundorte stehen im Historien-Datensatz.

## Social-Vorschau

Aktiv ist [social-preview-v3-2-2-v5.png](social-preview-v3-2-2-v5.png), 1734 × 907 Pixel. Typografisch getrennte kräftige, schmale Wortmarke „Global Drive Clock“ und etwas kleinere geometrische Leitfrage „Wer fährt in Zukunft?“ mit Diesel, Benzin, Hybrid und Elektro. Die vier Themen Antriebswandel, Zeitreise 2008–2100, CO₂ im Vergleich und Brandmodell stehen in großen Textfeldern ohne Symbole. Die Einordnung „Bestände als Modell · Zukunft als Szenario“ bleibt im Bild sichtbar. Der Planet mit Uhrbogen ist verkleinert und von der Schrift abgesetzt.

Open Graph und Twitter/X verwenden die neue Bildadresse und passende Titel sowie Alternativtexte. HTML und Bild gemeinsam veröffentlichen; Plattform-Caches können zunächst ältere Motive zeigen. Das Paket enthält nur das finale Vorschaubild und die verwendeten Website-Icons; frühere Motive und überholte Entwurfsnotizen wurden entfernt.
