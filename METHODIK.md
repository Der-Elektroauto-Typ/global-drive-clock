# Global Drive Clock V3.2.5 — Daten & Methodik

V3.2.5 verkürzt den Kopfbereich und stellt die modellierte Elektro-Nettoänderung seit Seitenaufruf in den Vordergrund. „Heute seit 00:00“ verwendet dieselbe Nettorate ab lokalem Tagesbeginn des Geräts; Datum und Zeitzone sind angegeben. Die 2035-Karte zeigt den BEV-Anteil der vier sichtbaren Gruppen aus der gewählten Szenariorechnung zum Jahresende, keine Prognose. Teilen erzeugt nur nach Klick eine gekennzeichnete Momentaufnahme mit öffentlichem Link. Einzelheiten: [EINSTIEG-UND-TEILEN.md](EINSTIEG-UND-TEILEN.md).

V3.2.5 stellt die Live-Session auf Desktop und Mobil an den Anfang. Mobil folgt die Regionsauswahl in der Zeitreise auf den Jahresregler, im Brandmodell direkt auf die Brandzahlen und bei Kraftstoff/CO₂ direkt auf die Werte vor dem Methodik-Link. In den übrigen Bereichen liegt sie am Abschnittsende; die beiden Zeitreise-Umschalter stehen nebeneinander mit Beschriftungen darüber. In der mobilen Zeitreise steht der Jahresregler direkt unter dem Balkendiagramm. Die mobile Zeitreise bündelt Erläuterungen in einem Info-Menü unter dem Balkendiagramm. Die mobile Anzeige aktualisiert vorhandene Zahlenfelder höchstens zehnmal pro Sekunde; Rechenwerte und verstrichene Besuchszeit werden dadurch nicht verändert. Der Methodiktext bleibt erhalten. Die vier Live-Session-Fahrzeugzähler zeigen die kontinuierliche Modelländerung mit einer Nachkommastelle; Dezimaltrennzeichen und Nachkommastelle erscheinen kleiner. Die Raten der Teilregionen werden vor der Formatierung addiert. Die Nachkommastelle dient der sichtbaren Fortschreibung und ist keine Messgenauigkeit. Bestandszähler und Bilanzprüfung behalten ihre gemeinsame Ganzzahlrundung.

V3.2.5 gliedert die Seite in sechs einheitliche Bereiche mit gekoppelten Regionsumschaltern. Der Zeitregler beginnt bei 2008 und startet bei jedem Aufruf im aktuellen Jahr. Das Balkendiagramm zeigt das ausgewählte Jahr. Vorhandene Quellenwerte und Datenlücken bilden den Rückblick; für die Zukunft gibt es eine einstellbare S-Kurve und einen linearen Vergleich bis 2050, optional sichtbar bis 2100. Die vollständigen historischen Quellen, Abgrenzungen, Formeln und Grenzen stehen in [SZENARIEN.md](SZENARIEN.md) und [history-data.json](history-data.json). Historische Quellenwerte werden durch Zukunftseinstellungen nicht verändert. Es gibt keine rückwärts erfundene Geschichte und keine garantierte Prognose.

Die Fahrzeug-, Verbrauchs-, CO₂- und Brandratenparameter bleiben unverändert. Die Brandzählung verwendet die dokumentierten vier sichtbaren Gruppen, ohne Sonstige. Deren Ausschluss gegenüber V3.2.1 betrifft global rund 15 Millionen Fahrzeuge beziehungsweise etwa 1,08 % am 23. Oktober 2026; die genaue laufende Zahl ändert sich mit dem Modellzeitpunkt.

Bestehende Parameter-Quellenprüfung: 20. Oktober 2026. Ergänzende Historien-/Szenarioquellen geprüft am 23. Oktober 2026. Deutschland: Sechsmonatsvergleich 1. Januar–1. Juli 2026; Referenzbestand 1. Juli 2026.

### Fahrzeugbrand-Referenzmodell für die ausgewählte Region

Der Brandzähler steht unter den Kraftstoff-/CO₂-Werten und folgt beiden Regionsumschaltern: oben sowie in der zweiten Auswahl unter der Live-Session. Für die ausgewählte Region wird deren **gesamter modellierter Bestand der vier sichtbaren Antriebsgruppen** in drei hypothetische Szenarien eingesetzt: alle Fahrzeuge BEV, alle Hybrid oder alle Verbrenner. Auch bei Auswahl „Global“ nutzt er den modellierten Gesamtbestand. Alle Szenarien halten die Bestandsgröße gleich; nur die angenommene Brandrate ändert sich. Die Werte sind Erwartungswerte, keine gezählten oder live gemeldeten Brände.

Die Referenzraten je 100.000 angenäherte Fahrzeugjahre lauten: BEV 7,4723, Hybrid 4,7546 und Verbrenner 47,8137. Grundlage sind norwegische DSB-Feuerwehreinsätze für 2024/2025 und mittlere Fahrzeugbestände von Statistics Norway (SSB), Tabelle 11823. SSB kennzeichnet „Private cars“ ausdrücklich als einschließlich Krankenwagen, kombinierter Fahrzeuge und Wohnmobile; DSBs Pkw-Einsatzgruppe und dieser Bestandsnenner passen deshalb nur näherungsweise zusammen. Der Jahresbestand wird durch den Mittelwert aus Jahresanfangs- und Jahresendbestand angenähert; die Jahre werden als Summe Einsätze geteilt durch Summe Fahrzeugjahre gepoolt. BEV bezeichnet reine Batterieautos, Hybrid umfasst HEV und PHEV.

Für Verbrenner gibt es zwei plausible DSB-Abgrenzungen: 48,7865 je 100.000 Fahrzeugjahre mit bestimmten Wohnmobil-Einsatzarten und 46,8408 ohne diese. Der Zähler nutzt deren arithmetischen Mittelwert: **47,8137**. Gas ist in diesem Verbrenner-Referenzwert aufgrund von null erfassten norwegischen Gasfällen nicht separat kalibrierbar. Deshalb bedeutet „Verbrenner“ im Zähler die zusammengefasste Referenzrate, nicht eine präzise Auswertung aller weltweiten Benzin-, Diesel- und Gasfahrzeuge.

Die Gesamtzahl pro Region ist die Summe von BEV, Hybrid, Benzin und Diesel im ausgewählten Modell; intern nicht sichtbare „Sonstige“ sind ausgeschlossen, weil deren Mix LPG/CNG, Brennstoffzellen und weitere Fahrzeuge umfasst. Diese gemeinsame Anzahl wird bei Seitenaufruf festgehalten. Für jede Antriebsvariante gilt: **Erwartungswert = regionaler Fahrzeugbestand × Referenzrate je 100.000 Fahrzeugjahre × Besuchssekunden ÷ 31.536.000 ÷ 100.000**. Alle drei Zähler zeigen drei Nachkommastellen; das ist eine Darstellungspräzision, keine Messgenauigkeit.

Im gepoolten norwegischen Datensatz stehen 120 BEV-Einsätze bei rund 1.605.926 Fahrzeugjahren 35 Hybrid-Einsätzen bei rund 736.133 Fahrzeugjahren gegenüber. Die daraus berechneten Punktraten sind 7,4723 je 100.000 Fahrzeugjahre für BEV und 4,7546 für Hybrid. Das Ratenverhältnis Hybrid/BEV beträgt rund 0,64; eine einfache bedingte Poisson-Auswertung ergibt ein ungefähres 95-%-Intervall von 0,44 bis 0,93 (exakter zweiseitiger p-Wert rund 0,019). Diese Rechnung erfasst nur zufällige Zählstreuung unter vereinfachten Annahmen. Sie korrigiert weder die kleine Hybrid-Fallzahl noch Definitions- und Expositionsabweichungen, mögliche systematische Untererfassung oder Unterschiede bei Fahrleistung, Flottenalter, Klima und Meldung. Die niedrigere Hybrid-Punktrate ist daher ein Befund dieses norwegischen Datensatzes, keine belastbare allgemeine oder globale Rangfolge. Für Verbrenner liegt die verwendete Punktrate bei 47,8137. Die Zähler zeigen diese drei Referenz-Punktraten weiterhin als Szenarien; ihre Werte skalieren mit dem modellierten Bestand der gewählten Region und bilden weder deren tatsächlichen Antriebsmix noch lokale Brandmeldungen ab.

DSB zählt freigegebene Feuerwehreinsätze, nicht zwingend einzelne verbrannte Fahrzeuge; ein Einsatz kann mehrere Fahrzeuge betreffen. Bestimmte Gebäude- und Verkehrsunfallbrände fehlen. Bestands- und Einsatzklassifikation sind nur angenähert passend. Fahrleistung, Flottenalter, Klima, Wartung und Meldeunterschiede wurden nicht bereinigt. Polen veröffentlichte 2025 abweichende Kennzahlen je registrierte Fahrzeuge (36,2 BEV, 8,2 Hybrid, 41,5 Verbrenner); Zeitraum und Abgrenzungen sind nicht mit den norwegischen Fahrzeugjahresraten harmonisiert, daher werden diese Werte nicht eingemittelt. Die globale Recherche ergab keinen harmonisierten repräsentativen Drei-Gruppen-Datensatz. Die Punktraten-Reihenfolge Hybrid < BEV < Verbrenner gilt nur für diese norwegische Referenzrechnung; sie ist keine gesicherte allgemeine Rangfolge und belegt keinen kausalen Antriebseffekt.

Wichtige Gegenprüfung einer oft zitierten Versicherungs-Infografik: AutoInsuranceEZ nennt Hybrid 3.474,5, Benzin 1.529,9 und Elektro 25,1 „Brände je 100.000 Verkäufe“ sowie Summen von 16.051, 199.533 und 52. Diese Summen sind jedoch exakt die Anzahlen der entsprechenden Kraftstoffgruppen von Fahrzeugen in tödlichen US-Verkehrsunfällen 2013–2017 aus NTSB-Tabelle 1 – nicht gezählte Fahrzeugbrände. Die Hybrid-Summe schließt dabei auch 14.146 Flexible-Fuel-Fahrzeuge und 134 „Convertible“-Fahrzeuge ein; die Elektro-Summe enthält ein Wasserstoff-Brennstoffzellenfahrzeug. Eine NTSB-Auswertung der tatsächlichen Feuer innerhalb dieser fatalen Unfallstichprobe (Tabelle 2) findet Feuer bei 1,36 % der Hybrid-, 3,22 % der Benzin- und 1,96 % der Elektrofahrzeuge. Das sind keine allgemeinen jährlichen Brandraten: FARS umfasst ausschließlich tödliche Unfälle, nicht unabhängige Fahrzeugbrände, und die Hybrid-/BEV-Fallzahlen sind klein. Die Versicherungs-Infografik belegt daher keine höhere allgemeine Brandhäufigkeit von Hybriden und ist nicht mit dem norwegischen Fahrzeugjahresmodell verrechenbar.

Quellen: [DSB, öffentliche norwegische Brandstatistik](https://brannstatistikk.no/) · [Statistics Norway, Tabelle 11823](https://www.ssb.no/en/statbank/table/11823/) · [F5A/PSP Polen 2025](https://f5a.mediaboard.site/p/raport-bezpieczenstwa-pozarowego-ev-rok-2025-potwierdza-niska-sk-8) · [NTSB, FARS-Auswertung zu Fahrzeugbränden 2013–2017](https://data.ntsb.gov/Docket/Document/docBLOB?FileExtension=pdf&FileName=5+Electric+Vehicle+Fire+Data+Factual+12212018-Rel.pdf&ID=10003553) · [AutoInsuranceEZ-Infografik](https://www.autoinsuranceez.com/gas-vs-electric-car-fires/) · [Car and Driver, Prüfung der Behauptung und Quellenlage](https://www.caranddriver.com/news/a40163966/cars-catching-fire-new-york-times-real-statistics/). Vollständige [Recherche und Länderprüfung](vehicle-fire-research-2026-10-20/RECHERCHE-UND-MODELL.md) sowie [Rechenergebnisse](vehicle-fire-research-2026-10-20/model-results.json).

### Warum die Fortschreibung linear bleibt

Die vier Hauptzähler zeigen den modellierten Bestand zu einem Referenzstichtag und verteilen eine beobachtete oder ausdrücklich angenommene Nettoänderung gleichmäßig über die Zeit. Für Deutschland ist das die aktuelle Differenz zwischen zwei amtlichen Stichtagen; in anderen Regionen liegen meist Jahresvergleiche oder Modellannahmen vor. Linear bedeutet hier eine transparente Kurzfrist-Fortschreibung, keine langfristige Marktprognose.

Eine exponentielle Kurve würde eine dauerhaft konstante prozentuale Wachstumsrate des gesamten Fahrzeugbestands unterstellen. Die vorhandenen Daten belegen diese Annahme nicht; sie könnte zudem bei wachsender Flotte unbegrenzt zunehmende Bestände unterstellen. Eine S-Kurve würde Marktsättigung und eine langfristige Diffusion modellieren. Dafür bräuchten wir längere, vergleichbare Zeitreihen und belastbare Sättigungsgrenzen je Region und Antrieb. Mit den derzeitigen, teils nur zwei passenden Stichtagen wäre die zusätzliche Krümmung eine unbelegte Annahme. Deshalb bleibt die kurze Bestandsfortschreibung linear und wird bei neuen amtlichen Ständen aktualisiert.

### Was diese Seite zeigt

Die Global Drive Clock macht Veränderungen eines Fahrzeugbestandsmodells sichtbar. Die Bestandskacheln zeigen geschätzte Bestände und deren Nettoänderung. Die Live-Session am Anfang zeigt die modellierte Änderung seit deinem Seitenaufruf. Der separate Kraftstoff-/CO₂-Bereich zeigt geschätzte Mengen für den gesamten jeweiligen Bestand während deines Besuchs. Es werden keine einzelnen Zulassungen, Fahrten, Tankvorgänge oder Emissionen live erfasst.


Unser Anspruch: Veröffentlichte Daten werden als Ausgangspunkte verwendet, Rechenwege offengelegt und fehlende Werte als Annahmen gekennzeichnet. Eine nachvollziehbare Rechnung ist kein Beweis dafür, dass jede Annahme genau der Realität entspricht. Insbesondere für China und den Rest der Welt ist die Unsicherheit größer.



### Welche Datenstände gemeint sind

Der Bestandsstichtag bezeichnet den Zeitpunkt, auf den sich ein Quellenwert bezieht. Der Vergleichszeitraum liefert die Änderungsrate. Das Prüfdatum sagt, wann die hier verwendeten Quellen geprüft wurden. Diese drei Angaben sind nicht austauschbar. Eine neu veröffentlichte Quelle kann ältere Bestandsdaten enthalten; das Prüfdatum bedeutet deshalb nicht, dass alle Bestände bis zu diesem Tag gemessen wurden.


Deutschland verwendet den amtlichen KBA-Vergleich vom 1. Januar bis 1. Juli 2026 (181 Tage); der Referenzbestand ist vom 1. Juli 2026. EU und USA verwenden Jahresenden 2024/2025. Für China und Rest der Welt sind Teile der Zählraten Szenarien. Der gemeinsame Rechenstichtag von Global ist der 31. Dezember 2025; regionale Modelle mit anderen Stichtagen werden dafür mathematisch vor- oder zurückgerechnet. Er ist für diese Modellwerte kein amtlicher Erhebungsstichtag. Die vollständigen Regionalstände und Zeiträume stehen in der Methodikansicht der Website.



### So arbeiten Fahrzeugzähler und Prozentwerte

Für einen einfachen Regionalbestand gilt: Änderungsrate = (Endbestand − Anfangsbestand) ÷ Sekunden des Vergleichszeitraums. Der Zähler schreibt den Endbestand mit dieser konstanten Rate fort: Bestand zum Zeitpunkt t = Referenzbestand + Rate × Zeit seit Referenzstichtag. Negative Bestände werden rechnerisch bei null begrenzt. Nach dem Quellenstichtag handelt es sich um eine Extrapolation, nicht um eine Messung.


„Fahrzeuge / Minute“ ist die interne Sekundenrate × 60 und eine gleichmäßig verteilte Nettoänderung: Zugänge abzüglich Abgänge, gegebenenfalls einschließlich Änderungen der Registererfassung. Sie ist keine Neuzulassungsrate. Eine Bestandsabnahme bedeutet weder automatisch Verschrottung noch, dass jeder verschwundene Verbrenner durch ein BEV ersetzt wurde; auch Exporte, Ummeldungen und Statistikrevisionen können eine Rolle spielen.


Die Prozentzahl ist die Änderung gegenüber dem Anfangsbestand des jeweiligen Modellintervalls: Änderung ÷ (Referenzbestand − Änderung) × 100. Deutschland zeigt die tatsächlich gemessene Veränderung vom 1. Januar bis 1. Juli 2026 (sechs Monate). Die laufende Fahrzeuge-pro-Minute-Rate verwendet dieselbe gemessene Differenz, gleichmäßig auf Sekunden verteilt. Andere Regionen verwenden ihre dokumentierten Vergleichszeiträume, überwiegend zwölf Monate. Wo eine Änderung angenommen oder rekonstruiert ist, ist auch die Prozentzahl eine Modellgröße. Dynamische Dezimalanzeigen zeigen eine Nachkommastelle, bei Millionen Litern zwei; intern wird mit voller Genauigkeit gerechnet. Kleine Raten können als +0,0 oder −0,0 erscheinen, ohne dass der Zähler stillsteht. Die Zahl der sichtbaren Nachkommastellen beschreibt die Darstellung, nicht die Messgenauigkeit.


Die Live-Session für Fahrzeuge berechnet Rate × Zeit seit Seitenaufruf. Ein gemeinsamer Besuchsbeginn gilt für alle Regionen. Das Umschalten startet die Zähler nicht neu; ein Neuladen der Seite beginnt eine neue Live-Session. Die lokale Uhr verwendet die Zeitzone deines Geräts und ist unabhängig von den Datenstichtagen.



### Woher die einzelnen Modelle stammen

Deutschland — aktuelle KBA-Bestände: FZ 27 weist Pkw-Bestände nach ausgewählten Merkmalen auch zu Quartalsanfängen aus. Für die Fortschreibung werden der 1. Januar und 1. Juli 2026 verglichen: 2.034.260 BEV → 2.365.047 (+330.787); 4.362.563 Hybrid inkl. PHEV → 4.807.029 (+444.466); 29.343.732 Benzin → 29.012.909 (−330.823); 13.385.662 Diesel → 13.157.334 (−228.328). Das sind die tatsächlich beobachteten sechsmonatigen Bestandsänderungen. Für den weiterlaufenden Zähler werden sie gleichmäßig auf 181 Tage verteilt; die ausgewiesene Prozentänderung bleibt der beobachtete Sechsmonatswert. Die lineare Fortsetzung ist keine Vorhersage. Der kürzere Zeitraum reagiert schneller auf neue Entwicklungen, kann aber saisonale Schwankungen stärker abbilden. „Hybrid insgesamt“ enthält Plug-in-Hybride bereits; Gas und Sonstige sind interne Restgruppen. [KBA FZ 27 – Beschreibung und Quartalsstichtage](https://www.govdata.de/suche/daten/fz-27-2026-bestand-an-kraftfahrzeugen-und-kraftfahrzeuganhaengern-nach-ausgewaehlten-merkmalen-bu) · [Bestand 1. Januar 2026 (KBA-Pressemitteilung, PDF)](https://www.kba.de/SharedDocs/Downloads/DE/Pressemitteilungen/2026/pm_09_2026_bestand_01_26.pdf?__blob=publicationFile&v=2) · [Juli 2026 (XLSX)](https://www.kba.de/SharedDocs/Downloads/DE/Statistik/Fahrzeuge/FZ27/fz27_202607.xlsx?__blob=publicationFile&v=3).


EU — veröffentlichte Anker plus Lückenmodell: Verwendet werden die 27 EU-Mitgliedstaaten im Eurostat-Datensatz road_eqs_carpda, Einheit Anzahl, Rechtsform insgesamt, Jahre 2024 und 2025. Gesamtbestand und BEV-Anker sind veröffentlicht: 260.195.837 → 263.847.868 Fahrzeuge beziehungsweise 5.774.179 → 7.592.725 BEV. Benzin/Diesel ohne Hybride werden soweit in den nationalen Tabellen möglich von Hybrid einschließlich PHEV getrennt. Fehlende Antriebsdetails werden nicht als null behandelt. [Eurostat-Tabelle](https://ec.europa.eu/eurostat/databrowser/view/road_eqs_carpda/default/table?lang=de) · [verwendbarer API-Abzug 2024/2025](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/road_eqs_carpda?lang=EN&sinceTimePeriod=2024&leg_form=TOTAL).


Für Griechenland, Polen und die Slowakei werden fehlende Details 2024 aus gerundeten ACEA-Anteilen auf die Eurostat-Gesamtbestände übertragen; Griechenlands Anteilsangaben beziehen sich auf 2023. Diese Übertragung ist eine Annahme, weil die Bestandsabgrenzungen und Zeitpunkte nicht vollständig übereinstimmen. Für fehlende Details 2025 in Frankreich, Niederlande, Polen, Griechenland und Slowakei wird die zusammengefasste Entwicklung der in beiden Jahren vollständig meldenden Länder übertragen: HEV ohne PHEV und Diesel erhalten deren jeweilige gewichtete Änderungsfaktoren; veröffentlichte BEV/PHEV bleiben erhalten. Sonstige behalten ihren Vorjahresanteil am Gesamtbestand; Benzin ist die verbleibende Differenz. Bulgarien 2025 verwendet die veröffentlichten BEV-/reinen Benzin-/reinen Dieselwerte; Hybrid ist der Rest nach Abzug geschätzter Sonstiger. Diese Aufteilung und ihre Trends sind modellierte EU-Werte, keine vollständig veröffentlichte EU-Antriebssumme. Alle Lückenländer und berechneten Teilbestände sind im Datenabzug dokumentiert. [ACEA 2026, ergänzende Anteile, PDF-Seite 15](https://www.acea.auto/files/ACEA_Report-%E2%80%93-Vehicles_on_European_roads_2026.pdf).


USA — veröffentlichter Bestand und rekonstruierter Vergleich: AFDC liefert gerundete Light-Duty-Registrierungen 2025 sowie eine separate Veränderungsreihe 2024–2025. Der rechnerische Vorjahreswert ist 2025-Bestand ÷ (1 + Prozentänderung/100). Er ist ein rekonstruierter Wert, kein zusätzlich unabhängig erhobener Bestand. Die beiden verwendeten Veröffentlichungen gehören zum aktuellen Abrufstand; damit entfällt der direkte Vergleich unterschiedlich überarbeiteter Jahresarchive. Erfassungs- und Definitionsänderungen können dennoch in der Reihe enthalten sein. Die veröffentlichten Bestände sind auf 100 Fahrzeuge gerundet. HEV und PHEV werden addiert; E85-fähige Fahrzeuge der Benzin- und biodieselfähige Fahrzeuge der Diesel-Antriebsgruppe zugeordnet. Diese Einordnung beschreibt die Technik, nicht den tatsächlich getankten Kraftstoff. [AFDC-Bestände](https://afdc.energy.gov/vehicle-registration) · [Veränderungsreihe und Definitionshinweise](https://afdc.energy.gov/data/10881).


China — amtliche Anker und Szenario: Der MPS-Bericht zum 30. Juni 2026 nennt 371 Millionen Automobile und 48,97 Millionen New Energy Vehicles (NEV), davon 68,77 % rein elektrisch. Der Code verwendet dafür gerundete beziehungsweise angenäherte Anker von 33,675 Millionen BEV und 15,295 Millionen NEV-Rest. NEV-Rest ist kein sauberer PHEV-Bestand: Er kann neben Plug-in-/Range-Extender-Fahrzeugen auch Brennstoffzellenfahrzeuge enthalten. Im Hybridmodell kommen angenommene 6 Millionen nicht aufladbare Hybride hinzu. Deren Zunahme +1,5 Millionen/Jahr, Dieselbestand 40 Millionen mit +0,5 Millionen/Jahr sowie die übrigen 12-Monats-Zählraten und die verbleibende Benzinaufteilung sind Modellannahmen. Der zitierte H1-Bericht allein liefert diese Jahresraten nicht. [MPS-Angaben auf der Website des chinesischen Staatsrats](https://english.www.gov.cn/archive/statistics/202607/15/content_WS6a56dd6ec6d00ca5f9a0c307.html).


Rest der Welt — veröffentlichte Teilanker und Ausgleichsannahmen: Der BEV-Anker und dessen Rate ergeben sich aus dem gerundeten IEA-Welt-Pkw-Bestand von 38 → 51 Millionen für 2024/2025, abzüglich der auf denselben Rechenstichtag übertragenen Modelle für EU, China und USA. Unterschiedliche Fahrzeugabgrenzungen machen diesen Rest zu einer Kalibrierungsgröße, nicht zu einem unabhängig gemessenen Bestand aller übrigen Länder. IEA-Reihen verschiedener Antriebe sind gerundet und müssen in ihrer veröffentlichten Darstellung nicht exakt addieren. [IEA EV Data Explorer](https://www.iea.org/data-and-statistics/data-tools/global-ev-data-explorer) · [Abruf 2024 (CSV)](iea-stock-2024.csv) · [Abruf 2025 (CSV)](iea-stock-2025.csv).


Das Rest-Hybridmodell kombiniert Japans veröffentlichten Pkw-Hybridbestand von 13.785.608 Ende März 2025 (PHEV enthalten), abzüglich angenommener 300.000 japanischer PHEV, mit dem verbleibenden IEA-PHEV-Weltanker und angenommenen 10 Millionen weiteren HEV. Der PHEV-Rest wird aus 25 Millionen weltweit minus EU 4.979.202, China 15 Millionen und USA 1.765.700 gebildet; zeitlich und sachlich sind das nur näherungsweise passende Anker. Die Rest-Hybridzunahme +3.088.405/Jahr und der Rest-Gesamtzuwachs +5 Millionen/Jahr sind Szenarien, keine gemessenen globalen Änderungen. [AIRIA Japan, März-Bestände, PDF-Seite 1](https://www.airia.or.jp/publish/file/HVEV_2025.pdf).


Die früheren globalen Kalibrierungswerte zum 30. September 2026 — Gesamtbestand 1,380 Milliarden, Diesel 322 Millionen, Sonstige 15 Millionen — sind nicht durch einen vollständig passenden aktuellen Welt-Zensus verifiziert. Sie wurden auf den gemeinsamen Rechenstichtag zurückgerechnet. Die Dieselrate −3 Millionen/Jahr und die Rate sonstiger Fahrzeuge +0,5 Millionen/Jahr sind ebenfalls Kalibrierungsannahmen; Restwerte entstehen durch Abzug der regionalen Modelle, Benzin durch Ausgleich der verbleibenden Gesamtzahl. Der globale Gesamtzuwachs wird dagegen aus EU + China + USA + dem Rest-Szenario berechnet. Diese Entscheidungen erzeugen Konsistenz, ersetzen aber keine fehlenden Quellen.


Globale Bilanz und regionale Unterschiede
Global = EU + China + USA + Rest der Welt; EU = Deutschland + EU ohne Deutschland. Das gilt für alle vier Antriebe, den intern mitgerechneten sonstigen Bestand und die Änderungsraten. Deutschland wird nicht zusätzlich zur EU in Global addiert. EU ohne Deutschland ist eine rechnerische Differenz; sein Trend passt zum verbleibenden EU-Modell und ist keine eigene neue Statistik.


Ein regionaler Dieselrückgang kann größer sein als der globale Rückgang: Zum Beispiel ergeben −24 in der EU und +11 außerhalb der EU global −13. Die Zähler zeigen saldierte Änderungen; regionale Zunahmen gleichen regionale Abnahmen teilweise aus. EU, China und USA allein decken die Welt nicht vollständig ab.


Die Rechnungen verwenden ungerundete Zahlen. Fahrzeugzahlen werden anschließend gemeinsam auf ganze Fahrzeuge gerundet, sodass die sichtbaren Summen in dieser Tabelle aufgehen. Ein Regionalwert kann dadurch um ein Fahrzeug von einer isoliert gerundeten Zahl abweichen. Die Tabellenwerte beziehen sich auf denselben Besuchsbeginn.


Die Website zeigt die mitlaufende Regionsbilanz.



### Was die Kraftstoff- und CO₂-Zähler bedeuten

Sie beziehen sich auf die gesamte modellierte Flotte. Das gilt auch für BEV: Kraftstoffäquivalent und netto vermiedenes betriebliches CO₂ werden für alle im Modell vorhandenen BEV über die Besuchszeit berechnet, nicht nur für die seit Seitenaufruf zusätzlich gezählten BEV. Die Fahrzeugänderung und die Kraftstoffmenge sind deshalb unterschiedliche Größen und nicht direkt proportional zueinander.


Oben bleiben ausschließlich Fahrzeugzahlen. Die Live-Session kumuliert modellierte Mengen ab Seitenaufruf. Die folgenden Flusswerte zeigen die momentane Modellrate für die ausgewählte Region; sie sind keine Live-Messung tatsächlicher Fahrten. Die Website zeigt die regionalen momentanen Verbrauchsflüsse.





### Rechenweg für Verbrauch und BEV-Vergleich

Kraftstoff pro Sekunde = Bestand × Kilometer/Jahr × Liter/100 Kilometer ÷ 100 ÷ Sekunden/Jahr. Für Hybrid und Benzin wird der Benzinfaktor verwendet, für Diesel der Dieselfaktor. CO₂ pro Sekunde = Liter pro Sekunde × Kilogramm CO₂ pro Liter. Es werden feste vereinfachte Faktoren von 2,31 kg CO₂/Liter Benzin und 2,68 kg CO₂/Liter Diesel verwendet. Das sind Modellannahmen, keine tankstellen-, mischungs- oder regionenspezifischen Messwerte und keine behauptete 1:1-Übernahme einer verlinkten Tabelle.


BEV-Kraftstoff „gespart“ ist ein Vergleichsszenario: dieselbe angenommene Fahrleistung mit einem vergleichbaren Benziner statt einem BEV. Es ist kein belegter individueller Fahrzeugtausch und kein am Tank gemessener Einsparwert. BEV-CO₂ netto vermieden = Auspuff-CO₂ dieses Vergleichsbenziners − modellierte CO₂-Emissionen der Stromerzeugung für das BEV. Der Stromanteil wird als Bestand × Kilometer/Jahr × kWh/Kilometer × regionaler Stromfaktor berechnet. BEV wird daher nicht mit null Betriebsemissionen angesetzt.


Der Verbrauch über die Besuchszeit wird aus dem zeitlich veränderlichen Bestand integriert: Bei einer konstanten Rate r und Besuchsdauer T gilt für Fahrzeugsekunden Bestand bei Besuchsbeginn × T + ½ × r × T². Das wird mit dem jeweiligen Verbrauch je Fahrzeugsekunde multipliziert. Jahresfahrleistungen werden mit 365,2425 Tagen beziehungsweise 31.556.952 Sekunden/Jahr auf Sekunden verteilt; die Bestandsraten verwenden jeweils den dokumentierten Vergleichszeitraum. Deutschland verteilt die Änderung aus 181 Tagen vom 1. Januar bis 1. Juli 2026 gleichmäßig auf Sekunden; andere Modelle verwenden ihre hinterlegten Intervalle.


Global addiert die regionalen Verbrauchs-/CO₂-Modelle einschließlich Rest der Welt. EU addiert Deutschland und EU ohne Deutschland; für EU ohne Deutschland werden die bisherigen EU-Parameter eingesetzt. Es gibt deshalb keinen einzigen globalen Stromfaktor, der auf alle BEV angewendet wird. Für den Rest der Welt dient vorläufig der weltweite IEA-Mittelwert als Ersatz, nicht ein separat ermittelter Rest-Strommix.



### Welche Parameter tatsächlich eingesetzt werden

Die folgende Tabelle wird direkt aus den verwendeten Modelleinstellungen erstellt. Fahrleistung, Verbrauch, BEV-Vergleichsverbrauch und Strombedarf sind fest gewählte gerundete Modellparameter. Eine vollständige, reproduzierbare Ableitung jedes Werts aus einer einzelnen Studie liegt für diese Version nicht vor. Hintergrundquellen helfen bei der Einordnung, sind aber kein Nachweis, dass diese Parameter die gesamte aktuelle Flotte exakt beschreiben.


Vollständige Parameter: [data.js](data.js); die Website erzeugt die Tabelle aus diesen Werten.


Stromfaktoren: IEA Electricity 2026 nennt für 2025 weltweit 435, für die EU 170 und für China 530 Gramm CO₂/kWh. Das Modell verwendet 435 als Ersatzwert für Rest der Welt und 170 für EU ohne Deutschland. Deutschlands 344 g CO₂/kWh sind der geschätzte UBA-Wert 2025 ohne Berücksichtigung des Stromhandelssaldos; er ist kein exakt importgewichteter Verbrauchsmix. USA verwendet 350 g CO₂/kWh als gerundeten Ersatz aus eGRID 2023 (U.S.-Wert 767,209 lb/MWh, umgerechnet rund 348 g/kWh). Die Quellenjahre unterscheiden sich. Jahresmittel bilden weder den konkreten Ladezeitpunkt noch Ökostromverträge oder marginale Stromerzeugung ab. [IEA Stromintensitäten](https://www.iea.org/reports/electricity-2026/emissions) · [UBA, Tabellen 1/2, PDF-Seiten 11/16](https://www.umweltbundesamt.de/system/files/medien/11850/publikationen/2026-03/16_2026_CC.pdf) · [EPA eGRID, U.S.-Zeile](https://www.epa.gov/egrid/summary-data).



### Einheiten und gemeinsamer Modellhinweis

In der Live-Session werden Mengen abhängig von ihrer Größe als Liter, Tausend Liter, Millionen Liter sowie Kilogramm CO₂ oder Tonnen CO₂ ausgeschrieben. Tausend Liter sind 1.000 Liter; Millionen Liter sind 1.000.000 Liter; eine Tonne CO₂ sind 1.000 Kilogramm CO₂. Die Momentanraten hier in der Methodik sind dagegen Mengen pro Sekunde: L/s, kg/s oder t/s. Mengen und Raten dürfen nicht gleichgesetzt werden.


Die Live-Session verwendet keine Sternchen oder nummerierten Fußnoten. Der gemeinsame Link „Modellschätzung – Berechnung und Grenzen“ unter den Zählern öffnet diese Methodik. „Gespart“ ist beim BEV das Kraftstoffäquivalent des Vergleichsszenarios; „verbrannt“ ist geschätzter Kraftstoffverbrauch; „erzeugt“ bezeichnet geschätztes direktes Auspuff-CO₂; „vermieden“ beim BEV den Netto-Betriebsvergleich nach Stromabzug. Keine dieser Angaben ist ein direkt gemessenes Einzelereignis.



### Grenzen und Einordnung

Fahrzeugabgrenzung: EU/Deutschland erfassen Pkw; USA Light-Duty-Fahrzeuge; China Automobile einschließlich Nutzfahrzeugen. Global ist eine gemischte Modellbilanz und kein harmonisierter amtlicher Welt-Pkw-Zensus. Nationale Hybrid-/MHEV-Definitionen unterscheiden sich. Kleine alternative Antriebe werden teilweise im sonstigen Bestand bilanziert; für diese Restgruppe gibt es keinen eigenen Kraftstoff-/CO₂-Zähler. Damit ist die Verbrauchsanzeige keine vollständige Bilanz sämtlicher Fahrzeugarten und Kraftstoffe.


CO₂-Abgrenzung: Enthalten sind modellierte direkte Auspuffemissionen beziehungsweise beim BEV der Vergleich mit direkten Stromerzeugungsemissionen. Fahrzeug-/Batterieherstellung, Rohstoffgewinnung, Kraftstoffförderung und -bereitstellung, Strom-Vorketten, andere Treibhausgase, Entsorgung sind nicht vollständig enthalten. Ladeverluste werden nicht separat berechnet. PHEV-Ladestrom ist im Hybridwert nicht enthalten. Biokraftstoffanteile und E85-/Biodieselmischungen werden nicht einzeln aufgelöst. Das ist keine vollständige Lebenszyklusbilanz und keine vollständige Netto-Klimabilanz aller Antriebe.


Jahresfahrleistung und Verbrauch bleiben im Modell konstant. Saison, Tageszeit, Flottenalter, Fahrverhalten, reale Ladeanteile von PHEV und Chinas Nutzfahrzeuganteil sind nicht dynamisch abgebildet. Quellenrevisionen oder neue Trends werden erst durch eine neue Modellfassung übernommen. Die Seite lädt Bestands- und Stromdaten nicht automatisch nach. Für die Fahrzeugbestands- und CO₂-Schätzungen werden keine statistischen Konfidenzintervalle berechnet. Beim Brandmodell stehen die vereinfachte, ausschließlich zählstatistische Unsicherheit und ihre Grenzen oben in diesem Abschnitt; sie umfasst keine systematischen Fehler oder weltweite Übertragbarkeit. Rechnerische Plausibilität, Quellenprüfung und Transparenz begründen keine zugesicherte Genauigkeit.



### Hintergrundquellen — keine zusätzlichen Messwerte des Zählers

[Destatis: Pkw-Fahrleistung und Verbrauch](https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Umwelt/UGR/verkehr-tourismus/Tabellen/fahrleistungen-kraftstoffverbrauch.html) liefert nationale Flottenwerte zur Einordnung. Der ausgewiesene Benzinverbrauch 2024 von 7,8 L/100 km passt zum eingesetzten deutschen Benzinparameter; der veröffentlichte Dieselwert 7,3 und Stromwert 22,1 kWh/100 km sind nicht identisch mit den Modellparametern 7,0 beziehungsweise 21. Diese Abweichungen sind keine versteckten neuen Messwerte. Aus den Gesamtfahrleistungen lassen sich die hier verwendeten Kilometer je Antriebsgruppe nicht unmittelbar ohne zusätzliche passende Bestände ableiten.


[EEA: reale Fahrzeugverbräuche](https://climate-energy.eea.europa.eu/topics/transport/real-world-emissions/intro) beschreibt vor allem neuere Fahrzeuge und ist nicht gleichbedeutend mit der gesamten Bestandsflotte. [EPA Automotive Trends](https://www.epa.gov/automotive-trends/download-automotive-trends-report) behandelt neue US-Fahrzeuge, nicht jeden heute registrierten Wagen. [EPA: Auspuff-CO₂ und Kraftstoff](https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle) erläutert die physikalische Rechnung und ihre Grenzen; die dortigen Faktoren sind kein exakter Beleg für unsere vereinfachten 2,31/2,68-Modellfaktoren.



### Nachprüfen und Aktualisieren

Die mitgelieferten Dateien ermöglichen die Prüfung der tatsächlich verwendeten Werte: [Bestands- und Verbrauchsparameter](data.js), [Bilanz und gemeinsame Rundung](model.js), [Anzeige und Verbrauchsintegration](app.js), [Herleitung und Lückenmodell](model-provenance.json), [verwendete Quellenauszüge](source-extracts.json) und [Linkprüfung mit Quellenrolle](source-link-audit.json). Die [Rechenprüfungen](validation.json) bestätigen Summen und Funktionen, nicht die empirische Richtigkeit aller Annahmen.


V3.2.5 enthält das Fahrzeug- und CO₂-Modell, das oben dokumentierte regionsabhängige Fahrzeugbrand-Referenzmodell und zusätzliche erklärende Visualisierungen. Eine künftige Datenaktualisierung muss Quellenstände, Vergleichszeiträume, Definitionen, Annahmen und Bilanz gemeinsam prüfen.


