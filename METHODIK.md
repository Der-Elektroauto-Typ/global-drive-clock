# Global Drive Clock V3.1.2 — Daten & Methodik

Quellenprüfung: 1. Oktober 2026. Daten und Berechnungen gegenüber V3.1.0 unverändert.


### Was diese Seite zeigt


Die Global Drive Clock macht Veränderungen eines Fahrzeugbestandsmodells sichtbar. Die oberen Kacheln zeigen geschätzte Bestände und deren Nettoänderung. Die Live-Session darunter zeigt dieselbe modellierte Änderung seit deinem Seitenaufruf sowie eine Schätzung von Kraftstoff und betrieblichem CO₂ für den gesamten jeweiligen Bestand. Es werden keine einzelnen Zulassungen, Fahrten, Tankvorgänge oder Emissionen live erfasst.


Unser Anspruch: Veröffentlichte Daten werden als Ausgangspunkte verwendet, Rechenwege offengelegt und fehlende Werte als Annahmen gekennzeichnet. Eine nachvollziehbare Rechnung ist kein Beweis dafür, dass jede Annahme genau der Realität entspricht. Insbesondere für China und den Rest der Welt ist die Unsicherheit größer.


### Welche Datenstände gemeint sind


Der Bestandsstichtag bezeichnet den Zeitpunkt, auf den sich ein Quellenwert bezieht. Der Vergleichszeitraum liefert die Änderungsrate. Das Prüfdatum sagt, wann die hier verwendeten Quellen geprüft wurden. Diese drei Angaben sind nicht austauschbar. Eine neu veröffentlichte Quelle kann ältere Bestandsdaten enthalten; das Prüfdatum bedeutet deshalb nicht, dass alle Bestände bis zu diesem Tag gemessen wurden.
Deutschland: 1.1.–1.7.2026 (181 Tage), Pkw. EU/USA: Jahresende2024–2025; EU Pkw mit Antriebslücken, USA Light-Duty. China: 30.6.2026, Automobile inkl. Nutzfahrzeuge, teilweise12M-Szenario. Rest/Global: gemeinsamer Rechenstichtag31.12.2025; keine neue Erhebung.


Deutschland verwendet weiterhin den Vergleich vom 1. Januar bis 1. Juli 2026. EU und USA verwenden Jahresenden 2024/2025. Für China und Rest der Welt sind Teile der Zählraten Szenarien. Der gemeinsame Rechenstichtag von Global ist der 31. Dezember 2025; regionale Modelle mit anderen Stichtagen werden dafür mathematisch vor- oder zurückgerechnet. Er ist für solche Modellwerte kein amtlicher Erhebungsstichtag.


### So arbeiten Fahrzeugzähler und Prozentwerte


Für einen einfachen Regionalbestand gilt: Änderungsrate = (Endbestand − Anfangsbestand) ÷ Sekunden des Vergleichszeitraums. Der Zähler schreibt den Endbestand mit dieser konstanten Rate fort: Bestand zum Zeitpunkt t = Referenzbestand + Rate × Zeit seit Referenzstichtag. Negative Bestände werden rechnerisch bei null begrenzt. Nach dem Quellenstichtag handelt es sich um eine Extrapolation, nicht um eine Messung.


„Fahrzeuge / Sekunde“ ist eine gleichmäßig verteilte Nettoänderung: Zugänge abzüglich Abgänge, gegebenenfalls einschließlich Änderungen der Registererfassung. Sie ist keine Neuzulassungsrate. Eine Bestandsabnahme bedeutet weder automatisch Verschrottung noch, dass jeder verschwundene Verbrenner durch ein BEV ersetzt wurde; auch Exporte, Ummeldungen und Statistikrevisionen können eine Rolle spielen.


Die Prozentzahl ist die Änderung gegenüber dem Anfangsbestand des jeweiligen Modellintervalls: Änderung ÷ (Referenzbestand − Änderung) × 100. Bei Deutschland bezieht sie sich auf sechs Monate, bei den 12-Monatsmodellen auf zwölf Monate. Wo eine Änderung angenommen oder rekonstruiert ist, ist auch die Prozentzahl eine Modellgröße. Dynamische Dezimalanzeigen sind auf eine Nachkommastelle begrenzt; intern wird mit voller Genauigkeit gerechnet. Kleine Raten können als +0,0 oder −0,0 erscheinen, ohne dass der Zähler stillsteht. Die Zahl der sichtbaren Nachkommastellen beschreibt die Darstellung, nicht die Messgenauigkeit.


Die Live-Session für Fahrzeuge berechnet Rate × Zeit seit Seitenaufruf. Ein gemeinsamer Besuchsbeginn gilt für alle Regionen. Das Umschalten startet die Zähler nicht neu; ein Neuladen der Seite beginnt eine neue Live-Session. Die lokale Uhr verwendet die Zeitzone deines Geräts und ist unabhängig von den Datenstichtagen.


### Woher die einzelnen Modelle stammen


Deutschland — veröffentlichte Bestandsanker: Die KBA-Tabelle FZ 27.2, Spalte Pkw, liefert die Bestände zum 1. Januar und 1. Juli 2026. Die Differenzen werden über 181 Tage verteilt. BEV wird separat gezählt; „Hybrid insgesamt“ enthält Plug-in-Hybride bereits. Gas und Sonstige bilden den internen Restbestand. Die Ausgangswerte sind veröffentlicht, die laufende Fortschreibung ist modelliert. [KBA FZ 27](https://www.kba.de/DE/Statistik/Produktkatalog/produkte/Fahrzeuge/fz27_b_uebersicht.html) · [Januar 2026 (XLSX)](https://www.kba.de/SharedDocs/Downloads/DE/Statistik/Fahrzeuge/FZ27/fz27_202601.xlsx?__blob=publicationFile&v=5) · [Juli 2026 (XLSX)](https://www.kba.de/SharedDocs/Downloads/DE/Statistik/Fahrzeuge/FZ27/fz27_202607.xlsx?__blob=publicationFile&v=3).


EU — veröffentlichte Anker plus Lückenmodell: Verwendet werden die 27 EU-Mitgliedstaaten im Eurostat-Datensatz road_eqs_carpda, Einheit Anzahl, Rechtsform insgesamt, Jahre 2024 und 2025. Gesamtbestand und BEV-Anker sind veröffentlicht: 260.195.837 → 263.847.868 Fahrzeuge beziehungsweise 5.774.179 → 7.592.725 BEV. Benzin/Diesel ohne Hybride werden soweit in den nationalen Tabellen möglich von Hybrid einschließlich PHEV getrennt. Fehlende Antriebsdetails werden nicht als null behandelt. [Eurostat-Tabelle](https://ec.europa.eu/eurostat/databrowser/view/road_eqs_carpda/default/table?lang=de) · [verwendbarer API-Abzug 2024/2025](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/road_eqs_carpda?lang=EN&sinceTimePeriod=2024&leg_form=TOTAL).


Für Griechenland, Polen und die Slowakei werden fehlende Details 2024 aus gerundeten ACEA-Anteilen auf die Eurostat-Gesamtbestände übertragen; Griechenlands Anteilsangaben beziehen sich auf 2023. Diese Übertragung ist eine Annahme, weil die Bestandsabgrenzungen und Zeitpunkte nicht vollständig übereinstimmen. Für fehlende Details 2025 in Frankreich, Niederlande, Polen, Griechenland und Slowakei wird die zusammengefasste Entwicklung der in beiden Jahren vollständig meldenden Länder übertragen: HEV ohne PHEV und Diesel erhalten deren jeweilige gewichtete Änderungsfaktoren; veröffentlichte BEV/PHEV bleiben erhalten. Sonstige behalten ihren Vorjahresanteil am Gesamtbestand; Benzin ist die verbleibende Differenz. Bulgarien 2025 verwendet die veröffentlichten BEV-/reinen Benzin-/reinen Dieselwerte; Hybrid ist der Rest nach Abzug geschätzter Sonstiger. Diese Aufteilung und ihre Trends sind modellierte EU-Werte, keine vollständig veröffentlichte EU-Antriebssumme. Alle Lückenländer und berechneten Teilbestände sind im Datenabzug dokumentiert. [ACEA 2026, ergänzende Anteile, PDF-Seite 15](https://www.acea.auto/files/ACEA_Report-%E2%80%93-Vehicles_on_European_roads_2026.pdf).


USA — veröffentlichter Bestand und rekonstruierter Vergleich: AFDC liefert gerundete Light-Duty-Registrierungen 2025 sowie eine separate Veränderungsreihe 2024–2025. Der rechnerische Vorjahreswert ist 2025-Bestand ÷ (1 + Prozentänderung/100). Er ist ein rekonstruierter Wert, kein zusätzlich unabhängig erhobener Bestand. Die beiden verwendeten Veröffentlichungen gehören zum aktuellen Abrufstand; damit entfällt der direkte Vergleich unterschiedlich überarbeiteter Jahresarchive. Erfassungs- und Definitionsänderungen können dennoch in der Reihe enthalten sein. Die veröffentlichten Bestände sind auf 100 Fahrzeuge gerundet. HEV und PHEV werden addiert; E85-fähige Fahrzeuge der Benzin- und biodieselfähige Fahrzeuge der Diesel-Antriebsgruppe zugeordnet. Diese Einordnung beschreibt die Technik, nicht den tatsächlich getankten Kraftstoff. [AFDC-Bestände](https://afdc.energy.gov/vehicle-registration) · [Veränderungsreihe und Definitionshinweise](https://afdc.energy.gov/data/10881).


China — amtliche Anker und Szenario: Der MPS-Bericht zum 30. Juni 2026 nennt 371 Millionen Automobile und 48,97 Millionen New Energy Vehicles (NEV), davon 68,77 % rein elektrisch. Der Code verwendet dafür gerundete beziehungsweise angenäherte Anker von 33,675 Millionen BEV und 15,295 Millionen NEV-Rest. NEV-Rest ist kein sauberer PHEV-Bestand: Er kann neben Plug-in-/Range-Extender-Fahrzeugen auch Brennstoffzellenfahrzeuge enthalten. Im Hybridmodell kommen angenommene 6 Millionen nicht aufladbare Hybride hinzu. Deren Zunahme +1,5 Millionen/Jahr, Dieselbestand 40 Millionen mit +0,5 Millionen/Jahr sowie die übrigen 12-Monats-Zählraten und die verbleibende Benzinaufteilung sind Modellannahmen. Der zitierte H1-Bericht allein liefert diese Jahresraten nicht. [MPS-Angaben auf der Website des chinesischen Staatsrats](https://english.www.gov.cn/archive/statistics/202607/15/content_WS6a56dd6ec6d00ca5f9a0c307.html).


Rest der Welt — veröffentlichte Teilanker und Ausgleichsannahmen: Der BEV-Anker und dessen Rate ergeben sich aus dem gerundeten IEA-Welt-Pkw-Bestand von 38 → 51 Millionen für 2024/2025, abzüglich der auf denselben Rechenstichtag übertragenen Modelle für EU, China und USA. Unterschiedliche Fahrzeugabgrenzungen machen diesen Rest zu einer Kalibrierungsgröße, nicht zu einem unabhängig gemessenen Bestand aller übrigen Länder. IEA-Reihen verschiedener Antriebe sind gerundet und müssen in ihrer veröffentlichten Darstellung nicht exakt addieren. [IEA EV Data Explorer](https://www.iea.org/data-and-statistics/data-tools/global-ev-data-explorer) · [Abruf 2024 (CSV)](iea-stock-2024.csv) · [Abruf 2025 (CSV)](iea-stock-2025.csv).


Das Rest-Hybridmodell kombiniert Japans veröffentlichten Pkw-Hybridbestand von 13.785.608 Ende März 2025 (PHEV enthalten), abzüglich angenommener 300.000 japanischer PHEV, mit dem verbleibenden IEA-PHEV-Weltanker und angenommenen 10 Millionen weiteren HEV. Der PHEV-Rest wird aus 25 Millionen weltweit minus EU 4.979.202, China 15 Millionen und USA 1.765.700 gebildet; zeitlich und sachlich sind das nur näherungsweise passende Anker. Die Rest-Hybridzunahme +3.088.405/Jahr und der Rest-Gesamtzuwachs +5 Millionen/Jahr sind Szenarien, keine gemessenen globalen Änderungen. [AIRIA Japan, März-Bestände, PDF-Seite 1](https://www.airia.or.jp/publish/file/HVEV_2025.pdf).


Die früheren globalen Kalibrierungswerte zum 30. September 2026 — Gesamtbestand 1,380 Milliarden, Diesel 322 Millionen, Sonstige 15 Millionen — sind nicht durch einen vollständig passenden aktuellen Welt-Zensus verifiziert. Sie wurden auf den gemeinsamen Rechenstichtag zurückgerechnet. Die Dieselrate −3 Millionen/Jahr und die Rate sonstiger Fahrzeuge +0,5 Millionen/Jahr sind ebenfalls Kalibrierungsannahmen; Restwerte entstehen durch Abzug der regionalen Modelle, Benzin durch Ausgleich der verbleibenden Gesamtzahl. Der globale Gesamtzuwachs wird dagegen aus EU + China + USA + dem Rest-Szenario berechnet. Diese Entscheidungen erzeugen Konsistenz, ersetzen aber keine fehlenden Quellen.


### Globale Bilanz und regionale Unterschiede


Global = EU + China + USA + Rest der Welt; EU = Deutschland + EU ohne Deutschland. Das gilt für alle vier Antriebe, den intern mitgerechneten sonstigen Bestand und die Änderungsraten. Deutschland wird nicht zusätzlich zur EU in Global addiert. EU ohne Deutschland ist eine rechnerische Differenz; sein Trend passt zum verbleibenden EU-Modell und ist keine eigene neue Statistik.


Ein regionaler Dieselrückgang kann größer sein als der globale Rückgang: Zum Beispiel ergeben −24 in der EU und +11 außerhalb der EU global −13. Die Zähler zeigen saldierte Änderungen; regionale Zunahmen gleichen regionale Abnahmen teilweise aus. EU, China und USA allein decken die Welt nicht vollständig ab.


Die Rechnungen verwenden ungerundete Zahlen. Fahrzeugzahlen werden anschließend gemeinsam auf ganze Fahrzeuge gerundet, sodass die sichtbaren Summen in dieser Tabelle aufgehen. Ein Regionalwert kann dadurch um ein Fahrzeug von einer isoliert gerundeten Zahl abweichen. Die Tabellenwerte beziehen sich auf denselben Besuchsbeginn.
Die live berechnete Bilanz-Tabelle ist auf der Homepage sichtbar.


### Was die Kraftstoff- und CO₂-Zähler bedeuten


Sie beziehen sich auf die gesamte modellierte Flotte. Das gilt auch für BEV: Kraftstoffäquivalent und netto vermiedenes betriebliches CO₂ werden für alle im Modell vorhandenen BEV über die Besuchszeit berechnet, nicht nur für die seit Seitenaufruf zusätzlich gezählten BEV. Die Fahrzeugänderung und die Kraftstoffmenge sind deshalb unterschiedliche Größen und nicht direkt proportional zueinander.


Oben bleiben ausschließlich Fahrzeugzahlen. Die Live-Session kumuliert modellierte Mengen ab Seitenaufruf. Die folgenden Flusswerte zeigen die momentane Modellrate für die ausgewählte Region; sie sind keine Live-Messung tatsächlicher Fahrten. Aktuelle Modellraten werden auf der Homepage angezeigt.


### Rechenweg für Verbrauch und BEV-Vergleich


Kraftstoff pro Sekunde = Bestand × Kilometer/Jahr × Liter/100 Kilometer ÷ 100 ÷ Sekunden/Jahr. Für Hybrid und Benzin wird der Benzinfaktor verwendet, für Diesel der Dieselfaktor. CO₂ pro Sekunde = Liter pro Sekunde × Kilogramm CO₂ pro Liter. Es werden feste vereinfachte Faktoren von 2,31 kg CO₂/Liter Benzin und 2,68 kg CO₂/Liter Diesel verwendet. Das sind Modellannahmen, keine tankstellen-, mischungs- oder regionenspezifischen Messwerte und keine behauptete 1:1-Übernahme einer verlinkten Tabelle.


BEV-Kraftstoff „gespart“ ist ein Vergleichsszenario: dieselbe angenommene Fahrleistung mit einem vergleichbaren Benziner statt einem BEV. Es ist kein belegter individueller Fahrzeugtausch und kein am Tank gemessener Einsparwert. BEV-CO₂ netto vermieden = Auspuff-CO₂ dieses Vergleichsbenziners − modellierte CO₂-Emissionen der Stromerzeugung für das BEV. Der Stromanteil wird als Bestand × Kilometer/Jahr × kWh/Kilometer × regionaler Stromfaktor berechnet. BEV wird daher nicht mit null Betriebsemissionen angesetzt.


Der Verbrauch über die Besuchszeit wird aus dem zeitlich veränderlichen Bestand integriert: Bei einer konstanten Rate r und Besuchsdauer T gilt für Fahrzeugsekunden Bestand bei Besuchsbeginn × T + ½ × r × T². Das wird mit dem jeweiligen Verbrauch je Fahrzeugsekunde multipliziert. Jahresfahrleistungen werden mit 365,2425 Tagen beziehungsweise 31.556.952 Sekunden/Jahr auf Sekunden verteilt; die Bestandsraten verwenden ihren jeweiligen Datenvergleich, bei 12-Monatsmodellen 365 Tage, bei Deutschland 181 Tage.


Global addiert die regionalen Verbrauchs-/CO₂-Modelle einschließlich Rest der Welt. EU addiert Deutschland und EU ohne Deutschland; für EU ohne Deutschland werden die bisherigen EU-Parameter eingesetzt. Es gibt deshalb keinen einzigen globalen Stromfaktor, der auf alle BEV angewendet wird. Für den Rest der Welt dient vorläufig der weltweite IEA-Mittelwert als Ersatz, nicht ein separat ermittelter Rest-Strommix.


### Welche Parameter tatsächlich eingesetzt werden


Die folgende Tabelle wird direkt aus den verwendeten Modelleinstellungen erstellt. Fahrleistung, Verbrauch, BEV-Vergleichsverbrauch und Strombedarf sind fest gewählte gerundete Modellparameter. Eine vollständige, reproduzierbare Ableitung jedes Werts aus einer einzelnen Studie liegt für diese Version nicht vor. Hintergrundquellen helfen bei der Einordnung, sind aber kein Nachweis, dass diese Parameter die gesamte aktuelle Flotte exakt beschreiben.
Die genauen Verbrauchsparameter stehen in [data.js](data.js) und werden auf der Homepage tabellarisch ausgegeben.


Stromfaktoren: IEA Electricity 2026 nennt für 2025 weltweit 435, für die EU 170 und für China 530 Gramm CO₂/kWh. Das Modell verwendet 435 als Ersatzwert für Rest der Welt und 170 für EU ohne Deutschland. Deutschlands 344 g CO₂/kWh sind der geschätzte UBA-Wert 2025 ohne Berücksichtigung des Stromhandelssaldos; er ist kein exakt importgewichteter Verbrauchsmix. USA verwendet 350 g CO₂/kWh als gerundeten Ersatz aus eGRID 2023 (U.S.-Wert 767,209 lb/MWh, umgerechnet rund 348 g/kWh). Die Quellenjahre unterscheiden sich. Jahresmittel bilden weder den konkreten Ladezeitpunkt noch Ökostromverträge oder marginale Stromerzeugung ab. [IEA Stromintensitäten](https://www.iea.org/reports/electricity-2026/emissions) · [UBA, Tabellen 1/2, PDF-Seiten 11/16](https://www.umweltbundesamt.de/system/files/medien/11850/publikationen/2026-03/16_2026_CC.pdf) · [EPA eGRID, U.S.-Zeile](https://www.epa.gov/egrid/summary-data).


### Einheiten und Sternchen


In der Live-Session werden Mengen abhängig von ihrer Größe als Liter, Tausend Liter, Millionen Liter sowie Kilogramm CO₂ oder Tonnen CO₂ ausgeschrieben. Tausend Liter sind 1.000 Liter; Millionen Liter sind 1.000.000 Liter; eine Tonne CO₂ sind 1.000 Kilogramm CO₂. Die Momentanraten hier in der Methodik sind dagegen Mengen pro Sekunde: L/s, kg/s oder t/s. Mengen und Raten dürfen nicht gleichgesetzt werden.


Das Sternchen bei „gespart“, „verbrannt“, „vermieden“ und „erzeugt“ verweist auf diese Modellrechnung. „Verbrannt“ ist geschätzter Kraftstoffverbrauch. „Erzeugt“ ist daraus geschätztes direktes Auspuff-CO₂; „vermieden“ ist beim BEV der beschriebene Netto-Betriebsvergleich nach Stromabzug. Die Begriffe bezeichnen keine direkt gemessenen Einzelereignisse.


### Grenzen und Einordnung


Fahrzeugabgrenzung: EU/Deutschland erfassen Pkw; USA Light-Duty-Fahrzeuge; China Automobile einschließlich Nutzfahrzeugen. Global ist eine gemischte Modellbilanz und kein harmonisierter amtlicher Welt-Pkw-Zensus. Nationale Hybrid-/MHEV-Definitionen unterscheiden sich. Kleine alternative Antriebe werden teilweise im sonstigen Bestand bilanziert; für diese Restgruppe gibt es keinen eigenen Kraftstoff-/CO₂-Zähler. Damit ist die Verbrauchsanzeige keine vollständige Bilanz sämtlicher Fahrzeugarten und Kraftstoffe.


CO₂-Abgrenzung: Enthalten sind modellierte direkte Auspuffemissionen beziehungsweise beim BEV der Vergleich mit direkten Stromerzeugungsemissionen. Fahrzeug-/Batterieherstellung, Rohstoffgewinnung, Kraftstoffförderung und -bereitstellung, Strom-Vorketten, andere Treibhausgase, Entsorgung sind nicht vollständig enthalten. Ladeverluste werden nicht separat berechnet. PHEV-Ladestrom ist im Hybridwert nicht enthalten. Biokraftstoffanteile und E85-/Biodieselmischungen werden nicht einzeln aufgelöst. Das ist keine vollständige Lebenszyklusbilanz und keine vollständige Netto-Klimabilanz aller Antriebe.


Jahresfahrleistung und Verbrauch bleiben im Modell konstant. Saison, Tageszeit, Flottenalter, Fahrverhalten, reale Ladeanteile von PHEV und Chinas Nutzfahrzeuganteil sind nicht dynamisch abgebildet. Quellenrevisionen oder neue Trends werden erst durch eine neue Modellfassung übernommen. Die Seite lädt Bestands- und Stromdaten nicht automatisch nach. Es werden keine statistischen Konfidenzintervalle berechnet. Rechnerische Plausibilität, Quellenprüfung und Transparenz begründen keine zugesicherte Genauigkeit.


### Hintergrundquellen — keine zusätzlichen Messwerte des Zählers


[Destatis: Pkw-Fahrleistung und Verbrauch](https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Umwelt/UGR/verkehr-tourismus/Tabellen/fahrleistungen-kraftstoffverbrauch.html) liefert nationale Flottenwerte zur Einordnung. Der ausgewiesene Benzinverbrauch 2024 von 7,8 L/100 km passt zum eingesetzten deutschen Benzinparameter; der veröffentlichte Dieselwert 7,3 und Stromwert 22,1 kWh/100 km sind nicht identisch mit den Modellparametern 7,0 beziehungsweise 21. Diese Abweichungen sind keine versteckten neuen Messwerte. Aus den Gesamtfahrleistungen lassen sich die hier verwendeten Kilometer je Antriebsgruppe nicht unmittelbar ohne zusätzliche passende Bestände ableiten.


[EEA: reale Fahrzeugverbräuche](https://climate-energy.eea.europa.eu/topics/transport/real-world-emissions/intro) beschreibt vor allem neuere Fahrzeuge und ist nicht gleichbedeutend mit der gesamten Bestandsflotte. [EPA Automotive Trends](https://www.epa.gov/automotive-trends/download-automotive-trends-report) behandelt neue US-Fahrzeuge, nicht jeden heute registrierten Wagen. [EPA: Auspuff-CO₂ und Kraftstoff](https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle) erläutert die physikalische Rechnung und ihre Grenzen; die dortigen Faktoren sind kein exakter Beleg für unsere vereinfachten 2,31/2,68-Modellfaktoren.


### Nachprüfen und Aktualisieren


Die mitgelieferten Dateien ermöglichen die Prüfung der tatsächlich verwendeten Werte: [Bestands- und Verbrauchsparameter](data.js), [Bilanz und gemeinsame Rundung](model.js), [Anzeige und Verbrauchsintegration](app.js), [Herleitung und Lückenmodell](model-provenance.json), [verwendete Quellenauszüge](source-extracts.json) und [Linkprüfung mit Quellenrolle](source-link-audit.json). Die [Rechenprüfungen](validation.json) bestätigen Summen und Funktionen, nicht die empirische Richtigkeit aller Annahmen.


V3.1.2 überarbeitet die Dokumentation. Die Bestandswerte, Änderungsraten, Verbrauchsparameter und Berechnungen bleiben gegenüber V3.1.0 unverändert. Eine künftige Datenaktualisierung muss Quellenstände, Vergleichszeiträume, Definitionen, Annahmen und Bilanz gemeinsam prüfen. Quellen können ihre Daten später revidieren; der ausgelieferte Datenabzug hält den für diese Version verwendeten Stand fest.
