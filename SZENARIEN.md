# Zeitreise und Zukunftsszenarien — V3.2.5

Stand der Quellenprüfung für diese Ergänzung: 23. Oktober 2026. Die bisherigen Bestands-, Verbrauchs-, CO₂- und Brandratenparameter wurden dabei nicht aktualisiert.

## Zeitraum und Bedienung

V3.2.5 ergänzt eine kompakte 2035-Karte im Bereich „Veränderung“. Sie verwendet dieselbe Kurve und Sättigungsannahme wie die Zeitreise und zeigt den BEV-Anteil am Jahresende 2035. Ein Sprungknopf ist nicht vorhanden. Geteilte Links übernehmen Region, Sprache und Szenarioannahmen; der Jahresregler startet auch dort im aktuellen Kalenderjahr. Das Szenario ist keine Prognose oder Garantie.

Auf Mobilgeräten (bis 650 px) stehen Kurvenwahl und Endjahr in einer gemeinsamen Zeile nebeneinander; die jeweilige Beschriftung steht darüber. Der gekoppelte Regionsumschalter der Zeitreise steht mobil direkt unter dem Jahresregler, vor dem Info-Menü. Die Regionsauswahl im Brandmodell folgt direkt auf die Brandzahlen, bei Kraftstoff/CO₂ direkt auf die Werte und vor dem Methodik-Link. Die übrigen Regionsumschalter stehen am Abschnittsende. Direkt unter den Balken folgt der Jahresregler mit seiner mitwandernden Jahreszahl. Erläuterungen, Datenart, Quellenstichtage und Datenlückenhinweise liegen im Info-Menü unter dem Regler. Die Annahmeneinstellungen und bisherigen Schlusshinweise folgen anschließend. Auf Desktop bleibt die bisherige Zeitreise-Anordnung bestehen. Die Live-Session steht in beiden Ansichten als erster Inhaltsbereich.

Der Regler reicht von 2008 bis 2050; die Ansicht kann bis 2100 erweitert werden. Bei jedem Seitenaufruf startet er im aktuellen Kalenderjahr des Geräts. Ein Regions- oder Sprachwechsel erhält die gewählte Jahresposition. Jeder der sechs Regionsumschalter steuert dieselbe globale Auswahl. Die Beobachtungszeit der laufenden Zähler beginnt beim Seitenaufruf und wird dadurch nicht zurückgesetzt.

Das aktuelle Jahr zeigt den Modellbestand zum Zeitpunkt des Seitenaufrufs. Frühere Jahre zeigen vorhandene Quellenwerte mit ihrem tatsächlichen Stichtag. Zukünftige Jahre zeigen den errechneten Bestand zum Jahresende. Die laufenden Haupt-, Kraftstoff-/CO₂- und Brandzähler bleiben Anzeigen für den aktuellen Besuch und werden nicht auf das am Regler gewählte Jahr umgestellt.

## Was der Rückblick belegt

Die genauen Werte, Stichtage, Original-URLs und Abgrenzungen stehen in [history-data.json](history-data.json). `null` bedeutet fehlend; eine echte Null bleibt null Fahrzeuge. Für nicht belegte Jahre werden keine Werte aus den heutigen Wachstumsraten oder aus der S-Kurve zurückgerechnet. Die Darstellung zeigt ausschließlich Balken für das ausgewählte Jahr, kein zusätzliches Kurvendiagramm. Der Regler und der CSV-Export füllen numerische Lücken nicht durch Interpolation.

- **Deutschland:** KBA FZ 13, 1. Januar 2016, Seite 10, als archivierte Originaltabelle mit Jahresständen 2008–2012. Ab 2013 werden die neueren UBA/KBA-Januarstände verwendet. Seit 2008 sind vorübergehend stillgelegte Fahrzeuge nicht enthalten. Die ältere KBA-Publikation ist ein Originaldokument auf einem fremden Archivserver, keine aktuelle KBA-Veröffentlichung. Das Quellenarchiv bewahrt auch ältere Beobachtungen; Anzeige und CSV-Export beginnen bei 2008.
- **EU:** originale EU27_2020-Aggregate aus Eurostat `road_eqs_carpda`, Anzahl, Rechtsform TOTAL, 2013–2025. Die BEV- und Gesamtbestandsreihe ist verfügbar. Die nicht vollständig veröffentlichten Aggregate der anderen drei Gruppen bleiben fehlend. Historische EU-Hybride werden nicht aus PHEV allein oder unvollständigen Ländersummen errechnet.
- **Global, China und USA:** IEA-Originalgrafik mit BEV-Pkw-Beständen 2010–2022, Veröffentlichungsstand 2023, ergänzt um die bereits im Projekt archivierten IEA-BEV-Auszüge für 2024/2025. Die weltweite BEV-Reihe der älteren Grafik wird aus den vier überschneidungsfreien BEV-Gruppen China, Europa, USA und übrige Welt summiert. Europa wird nicht als EU-27 ausgegeben. PHEV-Werte dienen nicht als Ersatz für Hybrid insgesamt (HEV + PHEV). Die hier gesicherte Reihe hat unter anderem für 2023 eine Lücke. Die bisherige IEA-API lieferte bei der erneuten Prüfung 404; deshalb wurde der vorhandene neuere Auszug bewahrt und die ältere Originalgrafik als eigene Quelle gekennzeichnet.
- **USA 2025:** die bereits verifizierten AFDC-Anker für Light-Duty-Fahrzeuge, gerundet auf 100 Fahrzeuge, liefern alle vier Gruppen. Sie ersetzen für dieses Jahr den anders abgegrenzten IEA-Pkw-Wert. IEA-Pkw- und AFDC-Light-Duty-Werte haben unterschiedliche Fahrzeugabgrenzungen und bilden keine einheitliche Zeitreihe.
- **Separate Gesamtbestände:** UBA/VDA veröffentlicht Pkw-Gesamtreihen für Welt sowie Deutschland/China. Wo Antriebsdetails fehlen, erscheint dieser Quellen-Gesamtbestand separat. Er kann andere Stichtage und Abgrenzungen haben, enthält andere Antriebe und wird deshalb nicht als Nenner der lückenhaften Antriebsdaten benutzt. Insbesondere sind chinesische Pkw nicht die heutige MPS-Gruppe aller Automobile einschließlich Nutzfahrzeugen. Auch der weltweite UBA-Pkw-Bestand ist nicht das gemischt abgegrenzte Global-Modell dieser Website.

Bei vollständigen vier Gruppen beziehen sich angezeigte Anteile auf deren Summe. Bei unvollständigen Gruppen gibt es keine vermeintlichen Anteile an einer unvollständigen Summe. Die auf dem Bildschirm gerundeten Größen sind keine Aussage über Messgenauigkeit. Originaldaten und Rückrechnungen werden nicht vermischt.

## Anfangswerte und Anfangsgeschwindigkeit

Für jede Region stammen Startbestand und Jahresraten aus demselben bestehenden Bestandsmodell wie die Hauptzähler. Deutschland verwendet den KBA-Vergleich 1. Januar–1. Juli 2026 (181 Tage), auf ein Modelljahr mit 365 Tagen annualisiert. Andere Regionen enthalten Jahresvergleiche, Rekonstruktionen und ausdrücklich angenommene Bestandsteile. Aggregierte Regionen summieren ihre Teilmodelle; Deutschland wird in der EU nicht doppelt gezählt. Die Vergangenheit wird nicht zur statistischen Schätzung einer langfristigen Sättigungsgrenze verwendet.

Notation: `x_i` ist der aktuelle Bestand der Gruppe i, `d_i` ihre annualisierte Nettoänderung, `N = Summe(x_i)`, `D = Summe(d_i)`. Die vier Gruppen sind BEV, Hybrid (HEV+PHEV), Benzin und Diesel; Sonstige ist ausgeschlossen. Zeit `t` wird in Modelljahren zu 365 Tagen gemessen. Realdaten und Modellwerte behalten ihre tatsächlichen Datumsbezüge.

## S-Kurven-Szenario

Die S-Kurve beschreibt den **BEV-Anteil am Bestand**, nicht Neuwagenverkäufe und nicht eine amtliche Bestandsprognose. Der Nutzer wählt eine obere Grenze `K`; Voreinstellung ist **90 %**. Diese Grenze ist eine illustrative Annahme und kein aus den Quellen abgeleiteter oder statistisch geschätzter Wert. Die Einstellungen erlauben 50–100 %, jeweils oberhalb des heutigen Anteils.

```
s0 = x_BEV / N
s0' = (d_BEV − s0 × D) / N
k = s0' / [s0 × (1 − s0 / K)]
s_BEV(t) = K / [1 + (K / s0 − 1) × exp(−k × t)]
N(t) = max(0, N + D × t)
```

Damit beginnt die Kurve beim heutigen Anteil und dessen modellierter Änderungsrate. In der frühen Phase kann eine logistische Kurve annähernd exponentiell wachsen; bei Annäherung an K nimmt die Wachstumsrate ab. Eine konstante exponentielle Bestandszunahme wird nicht unbegrenzt fortgesetzt. Aus zwei Quellenstichtagen lassen sich K, Wendepunkt und spätere Politik- oder Markteinflüsse nicht gemeinsam identifizieren.

Die übrigen Gruppen teilen sich den verbleibenden Anteil. Für jede Gruppe i außer BEV gilt:

```
q_i = x_i / (N − x_BEV)
u_i = d_i / x_i − (D − d_BEV) / (N − x_BEV)
w_i(t) = q_i × exp(u_i × t)
s_i(t) = [1 − s_BEV(t)] × w_i(t) / Summe(w_j(t))
x_i(t) = N(t) × s_i(t)
```

Die Berechnung normalisiert die Gewichte numerisch stabil. Anteile summieren sich auf 100 %, Bestände werden nicht negativ. Für positive heutige Bestände stimmen auch die anfänglichen absoluten Änderungsraten mit `d_i` überein. Der spätere Hybrid-/Benzin-/Dieselmix folgt dieser Modellannahme; für ihn gibt es hier keine unabhängig geschätzte Langfristprognose. Eine Hybrid-Übergangswelle ist ein mögliches Ergebnis der gewählten Raten, keine eingebaute empirische Gewissheit. Sonderfälle leerer Gruppen und leerer Gesamtbestände werden ohne Division durch null behandelt.

## Linearer Vergleich

```
x_i(t) = max(0, x_i + d_i × t)
Gesamt(t) = Summe(x_i(t))
```

Bis eine Gruppe null erreicht, entspricht die Summe der linearen Fortschreibung des Gesamtbestands. Danach kann der Verlauf von einer ungekappten Gesamtrate abweichen. Dieser Vergleich hält die heutigen absoluten Nettoänderungen fest. Er ist ebenfalls ein Szenario.

## Reichweite und Einordnung

Beide Berechnungsarten können Jahreswerte bis 2100 liefern; der CSV-Export enthält den gesamten Bereich 2008–2100. Die zusätzliche Reichweite verbessert die Genauigkeit einer Aussage für 2050 nicht. Die Website berechnet keine empirischen Konfidenzintervalle, keine Fahrzeuglebensdauern, keine Neuzulassungs-/Abgangskohorten und keine künftigen politischen Regeln. Wechselnde Fahrleistungen, Flottengrößen, Technologien und Erfassungsmethoden können den Verlauf wesentlich verändern. Für eine belastbare Langfristprognose wären längere harmonisierte Bestands- und Absatzreihen, Abgangsraten, externe Szenarioanker und eine unabhängige Validierung nötig.

Der [IEA Global EV Outlook 2026](https://www.iea.org/reports/global-ev-outlook-2026/outlook-for-electric-mobility-chap-9-11) zeigt verschiedene Politik- und Transformationsszenarien bis 2035. Seine EV-Aggregate und Fahrzeugarten sind nicht mit unserer BEV- beziehungsweise HEV+PHEV-Aufteilung identisch. Er liefert hier den Kontext für die Szenariodarstellung, **keine Kalibrierung der 90-%-Annahme** und keine Bestätigung unserer Entwicklung bis 2050 oder 2100.

Der CSV-Download 2008–2100 enthält Region, Jahr, Datenart, Stichtag, Modellbeginn, gewählte Zukunftskurve, Sättigungsannahme, Bestände, verfügbaren Gesamtbestand und Quellenlinks. Unbekannte Werte bleiben leer. Der Datenstand wird nicht automatisch aus dem Netz aktualisiert.

## Originalquellen

- [KBA FZ 13, 1. Januar 2016, Seite 10 — archivierte Originaltabelle](https://www.hyundaiboard.de/cms/attachment/15366-pkw-bestand-kba-pdf/)
- [UBA/KBA: Pkw-Bestand nach Kraftstoffart, Excel 2026](https://www.umweltbundesamt.de/system/files/medien/384/bilder/dateien/4_Abb_Entwicklung-Pkw-Bestand-Kraftstoffart_2026-04-28.xlsx)
- [Eurostat road_eqs_carpda — Originalauszug](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/road_eqs_carpda?lang=EN&sinceTimePeriod=2000&leg_form=TOTAL)
- [IEA: Global electric car stock, 2010–2022](https://www.iea.org/data-and-statistics/charts/global-electric-car-stock-2010-2022), CC BY 4.0
- [IEA Global EV Data Explorer](https://www.iea.org/data-and-statistics/data-tools/global-ev-data-explorer); archivierte Projektauszüge: [2024](iea-stock-2024.csv) und [2025](iea-stock-2025.csv)
- [DOE AFDC: Vehicle registrations](https://afdc.energy.gov/vehicle-registration)
- [UBA/VDA: Weltweiter Autobestand, Excel 2026](https://www.umweltbundesamt.de/system/files/medien/384/bilder/dateien/7_Abb_Autobestand-weltweit_2026-05-15.xlsx)
- [UBA/VDA: Deutschland und China, Excel 2026](https://www.umweltbundesamt.de/system/files/medien/384/bilder/dateien/9_Abb_Autobestand-D-China_2026-05-15.xlsx)

Die Quelleigenschaften und Prüfsummen der lokal gesicherten Rohdaten sind in [history-data.json](history-data.json) aufgeführt. Quellenzahlen behalten die Lizenzen und Definitionen ihrer Herausgeber. Die ursprüngliche KBA-Tabelle erlaubt Verbreitung mit Quellenangabe; die Website gibt Institution, Veröffentlichung und archivierten Fundort an.
