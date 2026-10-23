# Global Drive Clock V3.2.4

Lokaler Stand: 23. Oktober 2026. Cache-Kennung: **3.2.4-3**. Alle Dateien und Unterordner des ZIP gemeinsam in das Website-Wurzelverzeichnis übernehmen. Kein Build erforderlich. Dieses Paket bestätigt keine Veröffentlichung auf GitHub Pages.

## Änderungen in V3.2.4

Nur auf Mobilgeräten (bis 650 px) stehen die Regionsumschalter bei den zugehörigen Anzeigen: Zeitreise direkt unter Jahresregler und Randjahren; Brandmodell direkt unter den Brandzahlen; Kraftstoff/CO₂ direkt unter den Werten und vor dem Methodik-Link. Die übrigen Regionsumschalter stehen am Ende ihres Abschnitts. Alle sechs bleiben gekoppelt. Zukunftskurve (S-Kurve/Linear) und Endjahr (2050/2100) stehen explizit in derselben Rasterzeile nebeneinander, ihre Beschriftungen jeweils darüber. Der Jahresregler folgt direkt auf das Balkendiagramm. So bleibt das Diagramm oberhalb des Fingers sichtbar. Die mitwandernde Jahreszahl und die Randjahre bleiben beim Regler. Die mobile Zeitreise-Reihenfolge ist: Kurven-/Endjahr-Umschalter nebeneinander → Balkendiagramm → Jahresregler → Regionsumschalter → Info-Menü → Annahmen und Berechnung → Schlusshinweise. Beim Wechsel zur Desktopbreite werden die bisherigen Positionen von Jahresregler und Regionsumschaltern wiederhergestellt. Rechenmodell und laufende Zähler sind übernommen.

## Übernommene Änderungen aus V3.2.3

- Live-Session auf Desktop und Mobil mit genau einer Nachkommastelle. Ganze Zahl und Vorzeichen bleiben groß; Dezimaltrennzeichen und Nachkommastelle erscheinen in 52 % der Schriftgröße. Die Anzeige verwendet die kontinuierliche Modelländerung statt bereits gerundeter Ganzzahlen. Auch diese Anzeige aktualisiert vorhandene Elemente.
- Live-Session auf Desktop und Mobil als erster Inhaltsbereich unter dem Kopfbereich; Navigation entsprechend angeordnet. Die Reihenfolge der übrigen Bereiche bleibt erhalten.
- Nur mobil (bis 650 px): Zukunftskurve und Endjahr nebeneinander, Beschriftungen jeweils darüber. Die große separate Jahreszahl entfällt; das Jahr über dem Reglerpunkt bleibt erhalten. Direkt auf den Regler folgt das Balkendiagramm.
- Nur mobil: Erklärungstexte und Quellenangaben stehen im eingeklappten Menü „Info zur Zeitreise“ unter dem Diagramm, danach folgen „Annahmen und Berechnung anpassen“ und die bisherigen Schlussinformationen. Die Kennzeichnung als Quellenwert, Modellschätzung oder Szenario steht auch am Info-Menü.
- Nur mobil: stabile Anzeigeelemente, unveränderte Texte werden nicht erneut geschrieben, höchstens zehn Aktualisierungen pro Sekunde; die geschlossene Methodik erhält keine laufenden Wertänderungen. Zahlen werden weiterhin aus der tatsächlich verstrichenen Zeit berechnet. Einheitenbeschriftungen reservieren Platz für zwei Zeilen.
- Keine neue Datenrecherche oder Änderung von Raten, Annahmen, Formeln und Quellenzahlen. Das finale Vorschaubild und die bereinigten Dateien aus V3.2.2 sind übernommen.

## Gestaltung und Bedienung

Die Seite hat sechs eigenständige Bereiche mit derselben Rahmen-, Flächen-, Schrift- und Abstandslogik:

1. Live-Session: Bestandsänderung seit Seitenaufruf
2. Fahrzeugbestand und aktuelle Änderungsraten
3. Diagramm der modellierten Jahresänderungen
4. Zeitreise mit Quellenrückblick und Zukunftsszenario
5. Kraftstoff-/CO₂-Schätzung während des Besuchs
6. Brand-Szenariomodell mit Referenzratenvergleich

Jeder Bereich hat denselben Regionsumschalter. Alle sechs Umschalter steuern gemeinsam Global, Deutschland, EU, China oder USA. Am Desktop sind die Namen ausgeschrieben; auf Smartphones erscheinen Flaggen und Kurzbezeichnungen. Die Besuchszeit läuft über Regionswechsel weiter. Das Brandmodell hat einen sichtbaren Rahmen mit orangefarbenem Akzent und nutzt ansonsten dieselbe Gestaltung wie die übrigen Bereiche. Die bestehende Kraftstoff-/CO₂-Beschriftung, Zahlenformatierung und Berechnung bleiben erhalten. Der gemeinsame Methodik-Link steht unter diesen Werten und öffnet den zugehörigen Abschnitt; mobil liegt die Regionsauswahl dazwischen. Brand- und Zeitreise-Links öffnen jeweils ihre eigenen Abschnitte in Daten & Methodik.

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

Die übernommenen Prüfungen für V3.2.3 (Cache 3.2.3-2) sind in [validation-v3-2-3.json](validation-v3-2-3.json) dokumentiert. Sie sind kein neuer Funktionsprüfbericht für die in V3.2.4 geänderte Reglerposition. Für diesen Stand wurde die JavaScript-Syntax geprüft. Der historische Bericht umfasst: zwölf Funktions- und Vergleichsprüfungen mit DOM-Simulation, zehn Sprachen, fünf Regionen, gekoppelten Umschaltern, Jahreswahl, Methodenlinks, Ansichtswechseln und Zahlenvergleich mit V3.2.2. Die Live-Session-Reihenfolge sowie kontinuierliche Dezimalwerte, Sprachformatierung und stabile Zahlenelemente sind für Desktop und Mobil geprüft. Die numerischen Modellparameter, Historienwerte und Szenariorechnung entsprechen V3.2.2.

Bei 60 simulierten Animationsschritten pro Sekunde erzeugte V3.2.2 mobil 2.160 neue Elemente und ersetzte die vier Kraftstoff-/CO₂-Container 240-mal. V3.2.3 erzeugt nach dem Aufbau keine neuen Anzeigeelemente, ersetzt keine Container und zeichnet die mobilen Werte höchstens zehnmal pro Sekunde. Das Desktop-Verhalten bleibt erhalten. Diese Prüfung ersetzt keinen Scrolltest auf einem physischen iPhone und keine grafische Layoutkontrolle.

`validation-v3-2-2.json`, `validation.json`, `data-review-v3-1-3.json` und `source-link-audit.json` bleiben historische Prüfbelege mit ihrem ursprünglichen Geltungsbereich. Quellen der bisherigen Modellparameter wurden am 20. Oktober 2026 geprüft; zusätzliche Historien-/Szenarioquellen am 23. Oktober 2026.

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

Open Graph und Twitter/X verwenden die neue Bildadresse und passende Titel sowie Alternativtexte. HTML und Bild gemeinsam veröffentlichen; Plattform-Caches können zunächst ältere Motive zeigen. Das Paket enthält nur das finale Vorschaubild und die verwendeten Website-Icons; frühere Motive und überholte Entwurfsnotizen wurden entfernt. Der vollständige Bearbeitungsprompt des finalen Motivs steht in [SOCIAL-PREVIEW-V5.md](SOCIAL-PREVIEW-V5.md). Die Seitenressourcen behalten Kennung 3.2.4-3.
