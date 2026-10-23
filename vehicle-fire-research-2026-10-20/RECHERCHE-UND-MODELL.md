> Website-Kopie des historischen Rechercheberichts. Aktuelles Produktmodell: [METHODIK.md](../METHODIK.md). Die frühere Entwurfsseite und die geschützte polnische Originalinfografik sind nicht Teil dieses Websitepakets.

> **Historischer Forschungsstand vor der Umsetzung:** Dieses Dokument enthält Vorab-Szenarien und einen früheren Zählerentwurf. Die gerundeten Annahmen 8/5/50, die globale Momentaufnahme und die damaligen Designvorschläge sind nicht die implementierten V3.2.0-Zählerwerte. Der aktuelle Produktstand verwendet regionsabhängige hypothetische Szenarien mit den norwegischen Punktraten 7,4723 BEV, 4,7546 Hybrid und 47,8137 Verbrenner je 100.000 angenäherte Fahrzeugjahre. Die Hybrid-Punktrate liegt in genau dieser Stichprobe unter BEV; das belegt keine allgemeine oder globale Rangfolge. Die vollständige aktuelle Erklärung steht in `../METHODIK.md` und auf der Website unter „Daten & Methodik“.

# Fahrzeugbrände: Recherche, Rechenmodell und Zählerkonzept

Stand: 20. Oktober 2026. Arbeitsgrundlage: Global Drive Clock V3.1.3.

## Aktualisierte Quellenrunde vom 20. Oktober 2026

Die zusätzliche weltweite Quellenrunde mit neuen amtlichen, Feuerwehren- und Versicherungsbelegen ist separat dokumentiert: [`GLOBALER-DATENSCREENING-2026-10-20.md`](GLOBALER-DATENSCREENING-2026-10-20.md). Die strukturierte Datensammlung mit Quelle, Land, Jahr, Zähler, Nenner, Antriebsgruppe, Güte und vorgesehener Nutzung liegt in [`global-fire-data-inventory.json`](global-fire-data-inventory.json). Sie ergänzt das 195-Länder-Erstscreening in `country-screening.json`; sie behauptet nicht, jeden einzelnen Datenhalter der Welt einzeln geprüft zu haben.

Wesentliche neue unabhängige Stützen: Die dänische BRS meldet 2025 für Elektro- und Hybridautos gemeinsam etwa 1,0 Feuerwehreinsätze je 10.000 Fahrzeuge, gegenüber 4,0 bei übrigen Autos. Eine britische Parlamentsantwort gibt Thatcham-/MIAFTR-Schätzungen von 1 BEV, 3 Hybrid, 7 Benzin und 11 Dieselbränden pro 100.000 Fahrzeuge und Jahr wieder. HLDI dokumentiert versicherte Fahrzeugjahre und modellspezifische Nicht-Unfallbrandansprüche. Diese Quellen stützen keine allgemeingültige Aussage, Hybride brennten am häufigsten; sie sind wegen anderer Gruppen, Definitionen und Stichproben auch nicht direkt zusammenzupoolen. Das Norwegen-Referenzmodell bleibt davon unberührt.

## Historische Vorab-Rechnung und Entscheidung

**Status dieses Abschnitts:** Vorab-Rechnung vor Umsetzung von V3.2.0. Die Zahlen 8/5/50 und rund 620.000 pro Jahr sind historische Szenarioannahmen, keine aktiven Produktparameter und keine aktualisierte globale Schätzung. Alle folgenden globalen Szenariotabellen und Entwurfsempfehlungen dokumentieren den damaligen Diskussionsstand.


In der damaligen Vorab-Rechnung war ein nachvollziehbares **globales Referenzszenario** ausrechenbar. Eine empirisch abgesicherte weltweite Brandrate je Antrieb war mit den gefundenen Daten nicht identifiziert. Die Produktumsetzung in V3.2.0 verwendet inzwischen ein regionsabhängiges Modell und die ungerundeten norwegischen Referenz-Punktraten; die nachfolgenden globalen Szenarien bleiben historische Vergleichsrechnungen.

Vorgeschlagene Arbeitsparameter je 100.000 Fahrzeugjahre:

| BEV | HEV + PHEV | Benzin/Diesel; Gas mit Übertragungsannahme |
|---:|---:|---:|
| 8 | 5 | 50 |

Diese Zahlen sind **eigene gerundete Modellannahmen**, abgeleitet aus der unten dokumentierten norwegischen Referenz. Sie sind weder amtliche Weltwerte noch das Ergebnis einer repräsentativen internationalen Metaanalyse. BEV wird von 7,47 auf 8, Hybrid von 4,75 auf 5 und ICE von 48,79 auf 50 aufgerundet; diese Rundung macht den BEV-Abstand etwas kleiner. Ein genauerer Weltwert wird dadurch nicht beansprucht.

Mit dem bestehenden, auf den 20.10.2026 fortgeschriebenen Fahrzeugmodell ergeben sich **rund 620.000 rechnerische Ereignisse pro Jahr**. Das ist eine auf ein Jahr umgerechnete Momentaufnahme unter den Referenzannahmen. Es ist weder eine gezählte Weltjahressumme 2026 noch eine Prognose, die künftige Bestandsänderungen integriert.

**Damals dokumentierter Freigabestatus (historisch):** geeignet als transparentes Referenzszenario und als Grundlage einer Produktentscheidung. Nicht geeignet für die unqualifizierte Behauptung „Weltweit brennen Elektroautos erwiesenermaßen 84 % seltener“. Die Umsetzung erfolgte später in V3.2.0 mit abweichender, regionsabhängiger Modellierung.

## 1. Neue amtliche Originaldaten aus Norwegen

### Zugang und Reproduzierbarkeit

DSB stellt die Antriebsdaten öffentlich bereit:

- Oberfläche: https://brannstatistikk.no/
- Öffentliche Suchdefinitionen: https://brannstatistikk.no/api/v1/user/searchdefinitions
- Verwendete DSB-Suchdefinition: **Brann i personbil pr år og drivstofftype**.
- Öffentliche Aggregationsabfrage, lesender POST: https://brannstatistikk.no/api/v1/missionreports/aggregate
- Antriebsfrage: `352`, „Drivstofftype for bilen/kjøretøyet det startet å brenne i“.
- Pkw-Einsatzart: `10147`; zusätzliche Sensitivitätsabfrage einschließlich Wohnmobilen: `10146`.
- Die Abfrage verwendet ausschließlich öffentliche Aggregationen, keine Einzelfalldaten oder geschützten Felder.

Die unveränderten Antworten, Abfragekörper und die öffentliche Suchdefinition liegen unter `raw/`. Bestände kommen aus **Statistics Norway, Tabelle 11823**:

https://www.ssb.no/en/statbank/table/11823/

https://data.ssb.no/api/v0/en/table/11823

Abfrage: ganz Norwegen, Bestandsgröße `Personbil1`, Antriebe getrennt, Euroklassen zusammen. Hybrid = Benzin-/Diesel-HEV plus Benzin-/Diesel-PHEV. ICE = Benzin + Diesel + Gas. Wasserstoff bleibt ausgeschlossen.

### Beobachtungen

| Gruppe | Brandeinsätze 2024 | Brandeinsätze 2025 | angenäherte Fahrzeugjahre 2024–2025 | Rate pro 100.000 |
|---|---:|---:|---:|---:|
| BEV | 63 | 57 | 1.605.925,5 | 7,47 |
| HEV + PHEV | 17 | 18 | 736.132,5 | 4,75 |
| Benzin/Diesel/Gas, Pkw plus Wohnmobil-Einsatzarten | 830 | 850 | 3.443.576,5 | 48,79 |

Exposition je Jahr = (Bestand am Ende des Vorjahres + Bestand am Ende des Jahres) / 2.
Gepoolte Rate = Summe Ereignisse / Summe Exposition × 100.000.

Ohne die Wohnmobil-Einsatzart sind es 796 beziehungsweise 817 ICE-Einsätze und **46,84 je 100.000** bei demselben Bestandsnenner. BEV und Hybrid bleiben unverändert. Diese Varianten dokumentieren die verbleibende Unsicherheit der Zuordnung von SSB-Bestandsklassen und DSB-Einsatzklassen. Eine exakte fahrzeugbezogene Verknüpfung ist nicht erfolgt. SSB weist ausdrücklich darauf hin, dass seine Kategorie „Private cars“ Krankenwagen, kombinierte Fahrzeuge und Wohnmobile umfasst. Dieselbe Definition gilt für die Werte aus Tabelle 11823; es wäre daher falsch, die Abgrenzung als reine Pkw-Flotte darzustellen. Die DSB-Einsatzgruppe und dieser Nenner sind nur angenähert deckungsgleich.

Bei der Variante einschließlich Wohnmobil-Einsatzarten liegen die BEV-Raten rund **84,7 % unter ICE**, bei der engeren Pkw-Zählung rund **84,0 %**. Das ist ein Vergleich der erfassten Flotten, kein altersbereinigter Effekt des Antriebs. Der gepoolte Hybrid-Punktschätzer ist mit 4,75 je 100.000 niedriger als BEV mit 7,47; die 35 Hybrid-Ereignisse erlauben keine robuste allgemeine Aussage. Das bedingte Ratenverhältnis Hybrid/BEV beträgt näherungsweise 0,64 (95-%-Wald-Intervall 0,44–0,93; exakter bedingter Test p≈0,019 unter unabhängiger Poisson-Zählung). Diese enge Zählunsicherheit erfasst keine Abweichung des Nenners, Zuordnung oder systematische Fehler und ist nicht auf andere Länder übertragbar. Der Hybrid-Punktwert ist damit der niedrigste in dieser ausgewählten Referenz, aber es ist nicht gesichert, dass Hybride allgemein seltener brennen als BEV.

### Abgrenzungen

- Gezählt werden genehmigte/abschließend freigegebene Feuerwehreinsätze gemäß öffentlicher DSB-Standardabfrage, nicht alle verbrannten Fahrzeuge.
- Nach DSB-Beschreibung fehlen als Gebäudebrand klassifizierte Fälle und Brände nach Verkehrsunfällen.
- Mehrere verbrannte Autos können zu einem Einsatz gehören. Ein Einsatz ist nicht automatisch ein Fahrzeug.
- Für 2024/2025 enthält die Abfrage keine unbekannte Antriebsgruppe. „Annet“ bleibt trotzdem separat: sechs beziehungsweise vier Ereignisse in der erweiterten Abfrage. Früher gibt es zahlreiche fehlende Antriebszuordnungen; diese Jahre werden nicht ungeprüft dazugepoolt.
- Gas hat in diesen beiden Jahren keine erfassten Ereignisse. Die Anwendung der gemeinsamen ICE-Rate auf eine größere internationale Gasflotte ist eine zusätzliche Annahme.
- Fahrzeugbestand im Jahresmittel ist angenähert. Fahrzeugkilometer, Flottenalter, Wartung, Klima und Meldeneigung wurden nicht adjustiert.
- 2026 ist unvollständig und bleibt aus der Jahresratenbildung ausgeschlossen.

Die Quelle wurde aufgrund ihres direkten öffentlichen Zugangs, der drei Gruppen, zweier voller aktueller Jahre und passender amtlicher Bestandszeitreihen als Referenz gewählt. Das macht Norwegen nicht repräsentativ für die ganze Welt.

## 2. Gegenprüfung und weitere Quellen

| Quelle | Befund | Verwendung |
|---|---|---|
| Polen, F5A/PSP 2025 | 44 BEV, 105 Hybrid, 9.515 ICE; veröffentlichte Kennzahlen 36,2 / 8,2 / 41,5 je 100.000 registrierte Fahrzeuge | Eigenständiges Gegenszenario; nicht mit norwegischen Fahrzeugjahren gepoolt |
| Finnland, PRONTO-Originalstudie 2015–2023 | BEV, PHEV und HEV getrennt; 2023 umgerechnet etwa 9 / 8 / 1 Ereignisse pro 100.000 | Unterstützende Referenz; kleine Zahlen, Freitextsuche und auch Rauchereignisse |
| Dänemark, BRS 2025 | gemeinsame Elektro-/Hybridrate 10, übrige Fahrzeuge 40 je 100.000 | Plausibilitätsvergleich; gemeinsame Gruppe identifiziert keine getrennten BEV-/Hybridraten |
| Schweden, MSB/MCF | 2024: 40 identifizierte Elektro-/Hybrid-Pkw-Brandbeteiligungen ohne Brandstiftung; Gesamtzahlen anders abgegrenzt | Keine direkte Berechnung eines Risikofaktors aus diesen beiden Zählern |
| Niederlande, NIPV 2025 | alternative Antriebe aufgeschlüsselt; Berichtsgrößen unterscheiden Ereignisse und Fahrzeuge | Keine vollständige ICE-Kontrollgruppe; deshalb nicht in den Ratenpool |
| Singapur, SCDF 2025 | 226 Fahrzeugbrände einschließlich Gebäudefällen; vier EV-Brände | Scope-Prüfung nötig; 193 zählt nur außerhalb von Gebäuden, nicht alle Fahrzeugbrände |
| USA, NFPA/USFA | nationale Schätzungen, teilweise Hochrechnung und proportionale Verteilung unbekannter Angaben | Schätzungen sind zulässig; Fahrzeugklassen und fehlende Antriebsaufteilung verhindern eine direkte Drei-Gruppen-Kalibrierung |
| Deutschland, GDV | 13.600 Brände kaskoversicherter Pkw 2024 | Versicherungskollektiv; nicht durch den gesamten KBA-Bestand teilen |
| CTIF 2024 | internationale „Vehicles“-Summen | Quellensuche und nationale Größenordnung; kein harmonisierter Pkw-Zähler |
| China 2024 | 97.000 Verkehrsmittelbrände | zu breite Kategorie für direkte Pkw-Raten |
| Indien 2023–2025 | 26 EV-Unfälle mit Brandbeteiligung im eDAR | kein Gesamtbrandregister; nicht als alle EV-Brände verwenden |

Originalquellen:

- Polen: https://f5a.mediaboard.site/p/raport-bezpieczenstwa-pozarowego-ev-rok-2025-potwierdza-niska-sk-8
- Polnisches Ministerium, Bestätigung der veröffentlichten Kennzahlen: https://www.gov.pl/web/klimat/czy-ryzyko-samozaplonu-auta-elektrycznego-jest-wieksze-niz-spalinowego
- Finnland: https://wseas.com/journals/ead/2023/c425115-043(2023).pdf
- Dänemark: https://www.brs.dk/globalassets/brs---beredskabsstyrelsen/dokumenter/faktaark/-faktaark2026_brand-i-el--og-hybridbiler3-.pdf
- Schweden: https://rib.msb.se/filer/pdf/29438.pdf
- Niederlande: https://nipv.nl/wp-content/uploads/2026/04/20260414-NIPV-Jaarrapportage-2025-incidenten-met-alternatief-aangedreven-voertuigen.pdf
- Singapur: https://www.scdf.gov.sg/docs/default-source/media-room-(publications)/annual-statistics/scdf-annual-statistics-on-ems-fire-enforcement-2025.pdf
- USA: https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/US-Fire-Problem/osvehiclefirestables.pdf?hash=52CF58909C18DDBA81E8E63BE5D52414&rev=28fd79a2aed347f0b4f1766ef53bbd34
- Deutschland: https://www.gdv.de/gdv/themen/mobilitaet/dossier-elektromobilitaet/e-autos-elektroauto-braende-statistik-182792
- CTIF: https://www.ctif.org/sites/default/files/2026-06/CTIF_Report31_ERG.pdf
- China: https://www.119.gov.cn/qmxfxw/mtbd/wzbd/2025/48022.shtml
- Indien: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2225866&lang=1&reg=1

### Prüfung der häufig zitierten AutoInsuranceEZ-Zahl

AutoInsuranceEZ nennt Hybrid 3.474,5, Benzin 1.529,9 und Elektro 25,1 „fires per 100,000 sales“ sowie Summen von 16.051, 199.533 und 52. Die Rangfolge Hybrid > Benzin > Elektro wirkt zunächst wie ein Gegenbeleg zur norwegischen Referenz. Die Summen sind jedoch exakt dieselben wie die Kraftstoffgruppen in **NTSB-Tabelle 1** für Fahrzeuge, die 2013–2017 in tödliche US-Verkehrsunfälle verwickelt waren:

- Hybrid-Paket: 1.765 Elektro-Gas-Hybride + 6 Elektro-Diesel-Hybride + 14.146 Flexible-Fuel-Fahrzeuge + 134 Fahrzeuge der Kategorie „Convertible“ = 16.051.
- Benzin/Diesel/sonstige konventionelle Kategorien: 171.220 Benzin + 28.155 Diesel + 153 CNG + 5 Propan = 199.533.
- Elektro-Paket: 51 Elektro + 1 Brennstoffzelle = 52.

Diese Kategorien in Tabelle 1 sind **keine Brände**. Das tatsächliche Brandmerkmal untersucht NTSB-Tabelle 2 nur für die Teilmenge der Fahrzeuge in tödlichen Unfällen: Feuer wurden bei 24/1.765 Elektro-Gas-Hybriden (1,36 %), 5.508/171.220 Benzinfahrzeugen (3,22 %) und 1/51 Elektrofahrzeugen (1,96 %) vermerkt. Selbst diese Prozente sind keine allgemeine Brandwahrscheinlichkeit pro Fahrzeugjahr. NTSB weist ausdrücklich darauf hin, dass FARS nur Unfälle mit Todesfolge erfasst, Brände ohne Unfall ausschließt, die Brandquelle nicht bestimmt und die Hybrid-/Elektro-Stichproben klein sind.

Car and Driver berichtet außerdem über die direkte Rückfrage an NTSB: NTSB führte keine entsprechende Highway-Vehicle-Fire-Datenbank und erkannte die AutoInsuranceEZ-Zahlen nicht als eigene Datenauswertung an. Die AutoInsuranceEZ-Summen sind also keine Versicherungsschadenfälle. Zusätzlich ist „pro 100.000 Verkäufe“ kein Expositionsnenner für diese kumulierten 2013–2017 Unfallbeteiligungen. Die Infografik ist ein verbreiteter, aber sachlich nicht geeigneter Gegenbeleg und darf nicht zur Kalibrierung oder Mittelung jährlicher Brandraten verwendet werden.

Quellen: NTSB, [Electric Vehicle Fire Data Factual Report, Tabellen 1–2](https://data.ntsb.gov/Docket/Document/docBLOB?FileExtension=pdf&FileName=5+Electric+Vehicle+Fire+Data+Factual+12212018-Rel.pdf&ID=10003553); AutoInsuranceEZ, [Gas vs. Electric Car Fires](https://www.autoinsuranceez.com/gas-vs-electric-car-fires/); Car and Driver, [No, Millions of Cars Are Not Catching Fire Every Year](https://www.caranddriver.com/news/a40163966/cars-catching-fire-new-york-times-real-statistics/).

### Amtliche Annahmen sind verwendbar, bleiben aber Annahmen

Eine nationale Schätzung mit erläutertem Verfahren kann sinnvoller sein als eine unvollständige Rohzählung. NFPA beschreibt beispielsweise die Hochrechnung aus NFIRS und Feuerwehrbefragungen sowie die proportionale Zuordnung unbekannter Merkmale. NFPA selbst ist ein Fachverband, keine Behörde; die Datengrundlage enthält amtliche Daten. „Amtlich“, „Originalauswertung“ und „Modellannahme“ werden deshalb getrennt bezeichnet.

Auch eine von einem Ministerium zitierte Zahl erhält dadurch keine neue, unabhängig gemessene Datenbasis. Der polnische Ministeriumsbeitrag und die F5A-Auswertung dürfen nicht als zwei unabhängige Beobachtungen gezählt werden.

### Polen: wesentlicher Gegenbefund

Die veröffentlichten polnischen Kennzahlen ergeben nur rund **12,8 % niedrigere BEV- als ICE-Werte**. Dieser Gegenbefund bleibt sichtbar.

Die Infografik bezeichnet Hybrid ausdrücklich als HEV/PHEV und ICE als Benzin, Diesel, LPG und andere. Sie nennt jedoch keinen nachvollziehbaren Bestandsstichtag für den Nenner. Die BEV-Kennzahl impliziert etwa 121.547 Fahrzeuge, also ungefähr die Größenordnung des Jahresendbestands. PSNM berichtet zum Jahresende 2025 mehr als 121.000 BEV-Pkw und starkes Wachstum. Damit ist eine Registrierungspunktquote nicht ohne Weiteres eine Fahrzeugjahresrate.

Eine reine Diagnose mit den berichteten Pkw-Beständen 72.580 Ende 2024 und 121.259 Ende 2025 ergäbe für 44 Fälle etwa 45,4 pro 100.000 durchschnittliche Fahrzeuge. **Das ist keine freigegebene korrigierte Rate:** Die Fahrzeugklassen des Brandzählers einschließlich möglicher Lieferwagen sind noch nicht mit dem Pkw-Nenner abgeglichen, und der ICE-Nenner müsste ebenfalls zeitlich harmonisiert werden. Die Rechnung zeigt, dass Nennerwahl sogar die Rangfolge beeinflussen kann.

Bestandsquellen: https://psnm.org/2026/raport/rekord-za-rekordem-psnm-podsumowuje-rok-2025-na-polskim-rynku-elektromobilnosci/ ; genaue Pkw-Stichtagszahlen ergänzend in der Berichterstattung zum PSNM-Bericht: https://autoblog.spidersweb.pl/rynek-samochodow-elektrycznych-2025-podsumowanie .

### Korrektur zum südkoreanischen Fund

Der zuvor gefundene Yonhap-Beitrag enthält sowohl Fünfjahressummen als auch eine separate Jahresspalte 2023. Seine gerundeten Jahresquoten sind aus den **Jahresfällen 2023** und dem Jahresendbestand nachvollziehbar; der Einwand „Fünfjahreszähler durch Einjahresbestand“ wäre hier falsch. Die Originaltabelle der Feuerwehr, Fahrzeugabgrenzung und ein mittlerer Jahresbestand wurden für diesen Datensatz nicht vollständig verifiziert. Deshalb keine Übernahme in die Hauptparameter. Quelle: https://www.yna.co.kr/view/AKR20240817021400530 .

## 3. Historische Globalrechnung und Empfindlichkeit

Die folgenden Bestands- und Jahresfallrechnungen beziehen sich auf die damalige globale Vorab-Konfiguration und sind nicht die aktuellen Zahlen der regionsabhängigen V3.2.0-Zähler.

Die bestehende Website liefert zum festgehaltenen Zeitpunkt:

| Gruppe | Modellierter Bestand |
|---|---:|
| BEV | 61,44 Mio. |
| HEV + PHEV beziehungsweise bestehende Hybrid-Sammelgruppe | 94,11 Mio. |
| Benzin + Diesel | 1.217,03 Mio. |
| Sonstige, Gasanteil nicht getrennt bekannt | 15,03 Mio. |

Diese Bestände sind aus den regionalen Teilmodellen nach derselben Bilanz wie `model.js` berechnet. Das ursprüngliche `data.js` wird nur gelesen. Die bestehende globale Abgrenzung ist heterogen: EU/DE Pkw, USA Light-Duty, China einschließlich Nutzfahrzeugen und Rest-Modell. Chinas Hybrid-Rest kann auch FCEV enthalten. Das wird durch das Brandmodell nicht automatisch behoben.

| Szenario | BEV/Jahr | Hybrid/Jahr | Benzin/Diesel/Jahr | Gesamtsumme ohne ungeklärten Gasanteil |
|---|---:|---:|---:|---:|
| Arbeitsreferenz 8 / 5 / 50 | 4.915 | 4.705 | 608.514 | 618.135 |
| Übertragung veröffentlichter Polen-Kennzahlen | 22.240 | 7.717 | 505.067 | 535.024 |

Für Gas wird keine erfundene Punktzahl eingesetzt: Bei 0–100 % Gasanteil an „Sonstige“ und derselben ICE-Rate erhöht sich die Arbeitsreferenz um 0–7.514. Das ergibt **618.135–625.648**, sinnvoll gerundet **rund 620.000**. Diese enge Spanne beschreibt ausschließlich die Gaszuordnung, keinesfalls die gesamte Modellunsicherheit.

Zusätzliche, ausdrücklich hypothetische Sensitivitäten:

- Halbes gemeinsames Brandniveau: etwa 309.000–313.000 pro Jahr.
- Doppeltes gemeinsames Brandniveau: etwa 1,24–1,25 Mio. pro Jahr.
- Gleiche Rate 50 für alle Antriebe: kein BEV-Vorteil im Modell; Gesamtsumme bleibt dennoch in derselben Größenordnung.

Die Faktoren 0,5 und 2 sind frei gewählte Stressannahmen, **keine Konfidenzgrenzen**. Ebenso ist 535.000–626.000 nur die Spannweite zweier ausgewählter Übertragungen, kein statistisch abgesichertes Weltintervall. Fehlende Erfassung und nicht vertretene Flotten können Ergebnisse auch außerhalb dieser Szenarien verursachen.

## 4. Methodische Einordnung der Gesamtbrandzahl

Für gleiche Gebiets-, Zeit-, Fahrzeug- und Ereignisabgrenzung gilt:

`Gesamtfälle = Summe(Fahrzeugjahre je Gruppe × Gruppenrate / 100.000)`.

Eine nationale Gesamtrate liefert eine zusätzliche Gleichung. Sie identifiziert drei Gruppenraten nicht allein. Selbst ein Modell ohne BEV-Vorteil kann bei einer weltweit überwiegend konventionellen Flotte eine ähnliche Gesamtzahl erzeugen. Eine plausible Weltsumme ist deshalb kein Nachweis des Antriebsvergleichs.

Wenn relative Gruppenfaktoren `q_g` bereits begründet sind, lässt sich eine gemeinsame Landesbasis kalibrieren:

`b_c = F_c / Summe(E_cg × q_g)`, danach `r_cg = b_c × q_g`.

Die Übereinstimmung mit `F_c` ist dann konstruktionsbedingt. Sie darf nicht als unabhängige Validierung ausgegeben werden.

Der geplante internationale Kalibrierungsschritt wird **nicht als durchgeführt ausgegeben**: Dafür fehlen harmonisierte nationale Zähler/Nenner und robuste Transfergewichte. Ein komplexes hierarchisches Modell ohne diese Eingaben würde zusätzliche Annahmen verbergen. Die abgeschlossene Rechenfassung liefert deshalb eine reproduzierbare Referenz plus Gegenrechnungen.

## 5. Historische rechnerische Gegenprüfung

Eine zeitliche Probe wurde gerechnet: Die Rate von 2024 wird allein verwendet, um mit dem mittleren Bestand 2025 dessen Fallzahlen vorherzusagen.

| Gruppe | Vorhersage 2025 | Beobachtung 2025 | relative Abweichung |
|---|---:|---:|---:|
| BEV | 73,9 | 57 | +29,7 % |
| Hybrid | 17,2 | 18 | −4,4 % |
| ICE, erweiterte Einsatzarten | 781,8 | 850 | −8,0 % |

Das ist eine kleine interne zeitliche Probe, keine internationale Validierung. Das BEV-Ergebnis zeigt, warum eine punktgenaue Live-Anmutung unpassend wäre.

`model-results.json` enthält außerdem angenäherte bedingte Poisson-Intervalle für die norwegischen Referenzraten. Diese berücksichtigen weder Definitionen, systematische Untererfassung, Flottenunterschiede noch weltweite Übertragbarkeit. Sie dürfen nicht als Unsicherheitsband des Weltzählers angezeigt werden.

## 6. Historischer Gestaltungsvorschlag vor Umsetzung

**Oben: Vergleich gleicher Bestandsgrößen.**

Titel: „Brandhäufigkeit bei gleicher Flottengröße“.
Untertitel direkt sichtbar: „Referenzmodell · je 100.000 Fahrzeuge und Jahr“.

BEV grün: 8. Hybrid orange: 5. Verbrenner rot: 50. Alle Balken verwenden dieselbe Nullbasis und dieselbe Skala.

Vergleichstext: **„84 % weniger BEV-Ereignisse im Referenzmodell gegenüber Verbrennern.“**
Direkter Zusatz: „Aus norwegischen Referenzdaten abgeleitet; keine gemessene weltweite Quote.“

Kein ausschließlich auf absoluten Weltfallzahlen beruhender Sicherheitsvergleich. Keine behauptete technische Ursächlichkeit, keine Bezeichnung „84 % sicherer“. Die Produkt-Punktraten liegen in der norwegischen Referenz Hybrid < BEV < Verbrenner. Diese beobachtete Reihenfolge wird nicht als allgemeingültig oder global gesichert behauptet; siehe aktuelle Unsicherheitsbewertung in V3.2.0-Daten & Methodik.

**Darunter: globale Modellrechnung während des Besuchs.**

Titel: „Rechnerisch während deines Besuchs“.
Ständig sichtbarer Hinweis: „Erwartungswerte, keine Live-Meldungen“.

Formel bei linearer Bestandsentwicklung:

`Erwartungswert_g(t) = r_g / (100000 × Sekunden_pro_Jahr) × (N_g(0) × t + 0,5 × Änderungsrate_g_pro_Sekunde × t²)`.

Dieser Absatz beschreibt den damaligen Entwurf, nicht V3.2.0: Der ausgelieferte Zähler ist regionsabhängig und wird mit dem ausgewählten sichtbaren Bestand berechnet; beide Regionsumschalter steuern dieselbe Auswahl.

Gas in der Entwurfsrechnung als gesonderter Bereich erläutern; nicht unbemerkt FCEV/Unbekannte als Verbrenner zählen. Solange der Gasanteil unbekannt ist, zeigt die ICE-Session eine kleine Spanne.

Die jährlichen Weltwerte auf Hunderter/Tausender runden. Session-Dezimalstellen nur zur Sichtbarkeit des Rechenfortschritts verwenden; sie sind keine Beobachtungsgenauigkeit. Keine zufälligen Feueranimationen oder angeblich jetzt eintreffenden Brandmeldungen.

**Methodik direkt erreichbar:** Quelle, Definitionsumfang, Gegenbefund Polen, Unsicherheit und gewählte Parameter. Die große 84-%-Zahl muss schon ohne Aufklappen als Modellwert erkennbar sein.

## 7. Forschungsdateien und verbleibende Grenzen

- `calculate.py`: reproduziert alle Zahlen aus gespeicherten Originalantworten und bestehendem `data.js`.
- `model-results.json`: ungerundete Analyseergebnisse und Sensitivitäten.
- `raw/norway-*.json`: öffentliche Originaldaten, Abfragen und Definitionen.
- `raw/poland-2025-infographic.jpg`: Originalinfografik zur Prüfung der Kategorien; Rechte bleiben beim Herausgeber, nicht ins öffentliche Websitepaket übernehmen.
- `country-screening.json`: die 195 Suchnamen aus dem vorausgehenden Screening. Kein Nachweis vollständiger nationaler Quellenprüfung.
- `zaehler-entwurf.html`: archivierter, überholter Konzeptentwurf; er ist kein aktueller Produktstand und nicht Teil des Websitepakets.

Abgeschlossen sind die direkte Originaldatengewinnung für die Referenz, die rechnerische Expositionsbildung, die Szenarien, die zeitliche Probe und der Entwurf. **Offen bleibt die empirische weltweite Übertragbarkeit.** Eine belastbarere Weltpunktschätzung erfordert zusätzliche harmonisierte Originaldaten, insbesondere aus großen und älteren Fahrzeugflotten. Der Status dieses Pakets darf nicht zu „validiertes Weltbrandmodell“ umbenannt werden.
