# Global Drive Clock V3.1.2

Statische Website; index.html, style.css, data.js, model.js und app.js sowie alle Assets gemeinsam hochladen. Kein Build und kein Server erforderlich. Bestehende Dateien vollständig ersetzen. Version/Cache-Busting: 3.1.2. Quellenprüfung: 1. Oktober 2026.

## Änderungen

- Globale Bestands- und Änderungsbilanz über EU + China + USA + Rest der Welt; Deutschland ist Teil der EU.
- Gemeinsame Rundung erhält die Summen auch bei ganzen Fahrzeugen. Der Besuchsbeginn bleibt beim Umschalten erhalten.
- EU: Eurostat 2024/2025, separate Verbrenner-/Hybridklassen, explizites Länder-Lückenmodell statt bisheriger grober Aufteilung.
- USA: aktuelle AFDC-Registrierungen 2025 plus Veränderungsreihe desselben Datenstands; keine Differenz inkompatibel überarbeiteter Jahresarchive. E85-fähige Fahrzeuge zu Benzin, biodieselfähige zu Diesel.
- Welt-BEV: gerundeter IEA-Anker 38 → 51 Millionen 2024/2025. Deutschland unverändert KBA Januar–Juli2026 (181 Tage).
- Größere Unsicherheiten in China/Rest ausdrücklich dokumentiert; neue Annahmen sind Szenarien, keine veröffentlichten Bestandszahlen.
- Globale Kraftstoff-/CO₂-Flüsse addieren die regionalen Modelle; EU addiert Deutschland und EU ohne Deutschland. BEV-Strommixabzug bleibt erhalten.
- Aufwärtspfeile/Farben passen sich dem tatsächlichen Modelltrend an, auch bei Benzin/Diesel.
- Methodik enthält eine mitlaufende Bilanzprüfung einschließlich Rest der Welt und EU ohne Deutschland.
- Bestehende zehn UI-Sprachen, regionale Schalter, mobile vier Spalten, Farben, Uhr/Zeitzone, Facebook-/Hobbyhinweis, Vorschau und Blitz-Favicon bleiben erhalten. Ausführliche neue Herleitung: Deutsch; in anderen UI-Sprachen englische Fassung mit lokalisierten Überschriften/Tabellen.

## Grenzen – unbedingt mit veröffentlichen

Rechnerisch konsistent bedeutet nicht empirisch exakt. EU/Deutschland erfassen Pkw; USA Light-Duty-Fahrzeuge; China Automobile einschließlich Nutzfahrzeugen. Global ist ein gemischtes Modell, kein harmonisierter amtlicher Welt-Pkw-Zensus. Nationale Hybridabgrenzungen unterscheiden sich. Es gibt keine Live-Messung; nach dem Stichtag wird linear extrapoliert. Keine langfristige Prognose.

China: HEV6m/+1.5m pro Jahr, Diesel40m/+0.5m pro Jahr und verbleibende Antriebssplit-Annahmen sind Szenarien. Der NEV-Rest ist kein sauberer PHEV-Bestand. Rest-Hybrid verwendet Japan als Anker plus einen angenommenen sonstigen HEV-Bestand von10m und einen PHEV-Rest; sein Trend und Rest-Gesamtzuwachs5m/Jahr sind Annahmen. Alte globale Diesel-/sonstige-/Gesamtbestandswerte bleiben vorläufige Kalibrierungsannahmen. Globaler Zuwachs ergibt sich neu aus den Regionalraten plus dem Rest-Szenario. AFDC-Veränderungen können Erfassungsrevisionen enthalten.

Kraftstoff-/CO₂: Durchschnittsfahrleistungen und Verbräuche, keine tatsächlichen Fahrten. Regionale Jahresmittel-Stromfaktoren; Herstellung, Kraftstoff-Vorketten und PHEV-Ladestrom fehlen. Kraftstoffmischungen und Chinas Nutzfahrzeuge werden nicht einzeln abgebildet. Globaler Mix ist die Summe unterschiedlicher regionaler Faktoren, nicht ein einziger globaler Faktor. EU-ohne-DE nutzt vorläufig die bisherigen EU-Parameter.

## Nachvollziehbarkeit

- model-provenance.json: Rechenwege, Eingangsgrößen, Lückenländer, Szenarien und Datenabgrenzungen.
- source-extracts.json: verwendete Eurostat-/KBA-Auszüge und aktuelle AFDC-Veränderungsreihe.
- iea-stock-2024.csv / iea-stock-2025.csv: IEA-Historical/Cars/EV-stock-API-Auszüge (Quelle: https://api.iea.org/evs ; IEA Global EV Outlook2026, https://www.iea.org/reports/global-ev-outlook-2026 ; CC BY4.0).
- validation.json: Ergebnis der Bilanz-/Assetprüfungen; keine empirische Bestätigung angenommener Szenarien.

DE-Vergleich1.1.–1.7.2026; EU/USA-Vergleich2024–2025; China MPS-Stichtag30.6.2026 mit teilweise angenommenem12M-Trend; Rest/Global gemeinsamer Rechenstichtag31.12.2025. Das Prüfdatum ist kein Bestandsstichtag. Sonstige werden bilanziert, aber nicht als eigene große Kachel dargestellt.

Primärquellen: KBA FZ27; Eurostat road_eqs_carpda; ergänzend ACEA Vehicles on European roads2026; DOE AFDC vehicle-registration / data10881; China MPS/Staatsrat; IEA EV Data Explorer; Japan AIRIA HVEV_2025. Links stehen in Daten & Methodik.

Öffentliche Quelldaten und ihre eigenen Lizenzen bleiben vom Copyright des Projekts unberührt. Quellen werden nicht als eigene Erhebung ausgegeben. Versionsdateien stets gemeinsam aktualisieren.

## V3.1.2 – Dokumentationsprüfung

Nur die Methodikdarstellung sowie Versions-/Cachekennzeichnung wurden geändert. Rechenfunktionen und numerische Parameter sind unverändert. Veraltete Einheiten/Kachelhinweise und überflüssige Quellenlinks entfernt. Veröffentlichte Anker, rekonstruiertes US-Vorjahr, EU-Lückenmodell, China-/Rest-Szenarien, tatsächliche Verbrauchsparameter, Strommixdefinitionen, Gesamtflottenbezug und Grenzen sind erklärt. Neue direkte KBA-Dateilinks und nachvollziehbare Quellenrollen.

methodology.js enthält die ausführliche Dokumentation (Deutsch/Englisch). Die zehn UI-Sprachen bleiben bestehen; bei anderen Sprachen wird die englische Detailfassung mit einem Hinweis in der gewählten Sprache angezeigt. METHODIK.md ist die lesbare deutsche Fassung ohne JavaScript. source-link-audit.json dokumentiert die Linkprüfung, einschließlich aus dem Panel entfernter Hintergrundlinks. Ein HTTP200 allein gilt nicht als Beleg für eine Rechenannahme.

## V3.1.2 – Ruhigere Zähler
Alle dynamischen Dezimalanzeigen zeigen höchstens eine Nachkommastelle; Millionen Liter zeigen zwei Nachkommastellen. Fahrzeugzahlen bleiben ganzzahlig. Interne Berechnungen und statische Quellen-/Parameterangaben behalten ihre Genauigkeit. Kleine Raten können gerundet als +0,0 oder −0,0 erscheinen; sie laufen intern weiter.

V3.1.2 ergänzt außerdem einen schmalen E-Mail-Kontaktbutton unter Facebook. Empfänger: way81@gmx.de; Betreff: Global Drive Clock – Feedback. Die Beschriftung folgt der gewählten Sprache.

Die vier Fahrzeugkacheln zeigen Fahrzeuge pro Minute (interne Sekundenrate × 60), mit einer Nachkommastelle. Bestands- und Live-Session-Berechnungen bleiben unverändert.

Auf mobilen Ansichten bis 650 px steht unter der Live-Session eine Reihe aus fünf gleich großen Regionsbuttons. Beide Umschalter teilen die Auswahl und denselben Besuchsbeginn; Desktop zeigt weiterhin nur den oberen Umschalter.
