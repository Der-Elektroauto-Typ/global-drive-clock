# Global Drive Clock V3.2.0

Alle Dateien dieses ZIP gemeinsam hochladen und bestehende Dateien ersetzen. Statische Website, kein Build erforderlich. Modellversion: 3.2.0; Cache-Kennung dieser Überarbeitung: 3.2.0-3. Quellenprüfung: 20. Oktober 2026.

## Änderungen

- Fahrzeug- und CO₂-Modell aus V3.1.3 übernommen.
- Separater normierter Fahrzeugbrandzähler unter den CO₂-Werten ergänzt. Der untere Regionsumschalter erscheint auf Desktop und Mobilgeräten an derselben Stelle. Er ist mit dem oberen Umschalter synchronisiert.
- Das Brandmodell folgt der Regionsauswahl und vergleicht drei hypothetische Antriebe auf Basis desselben modellierten Gesamtbestands der gewählten Region. Bei „Global“ verwendet es den globalen Modellbestand. Erwartungswerte sind keine Live-Brandmeldungen.
- Referenzraten je 100.000 angenäherte Fahrzeugjahre: BEV 7,4723; Hybrid 4,7546; Verbrenner 47,8137. Letzterer ist der Mittelwert der beiden norwegischen ICE-Abgrenzungen. Auf je 100.000 Fahrzeuge und ein Modelljahr übertragen sind das 7,4723 / 4,7546 / 47,8137 Erwartungswerte. Hybrid liegt in dieser norwegischen Referenz unter BEV.
- Hybrid bleibt eigene Gruppe. Der regionale Bestand für alle drei Szenarien umfasst die vier sichtbaren Gruppen BEV, Hybrid, Benzin und Diesel. Die nicht aufgelöste Gruppe „Sonstige“ wird ausgeschlossen.
- Alle drei Brandzähler zeigen drei Nachkommastellen. Vollständige Branddaten, Annahmen, Quellen und Gegenbefunde: `METHODIK.md` und „Daten & Methodik“. Recherchepaket: `../vehicle-fire-research-2026-10-20/`.

- Deutschland nutzt für die vier Fahrzeugzähler den amtlichen KBA-Vergleich 1. Januar–1. Juli 2026 (181 Tage). Die gemessene Veränderung wird für die Live-Rate gleichmäßig auf Sekunden verteilt; der Prozentwert bleibt die tatsächliche Sechsmonatsänderung.
- Die Bestandszähler bleiben kurzfristig linear. Exponentielle und S-Kurven würden mit den vorhandenen kurzen bzw. szenariobasierten Reihen zusätzliche, nicht belegte Annahmen einführen.

## Einordnung

Bestände sind keine Verkäufe. Hybrid ist eine Sammelkategorie einschließlich PHEV; deren Menge wird nicht doppelt gezählt. Die Fahrzeugabgrenzungen unterscheiden sich (EU/DE Pkw, USA Light-Duty, China Automobile einschließlich Nutzfahrzeugen). China und Rest der Welt enthalten nicht amtlich bestätigte HEV-/ICE-Szenarien. Konsistente Summen sind kein Beweis empirischer Genauigkeit. Der Brandzähler überträgt norwegische Fahrzeugjahresraten auf den modellierten Bestand der gewählten Region; er zeigt keine regional erhobene oder globale Brandstatistik. Polen liefert einen nicht harmonisierten Gegenbefund. Die häufig zitierte AutoInsuranceEZ-Infografik ist wegen ihres unpassenden Nenners und der nicht als Brände identifizierbaren Zählsummen keine verwendbare Kalibrierungsquelle; die ausführliche Prüfung steht in „Daten & Methodik“.

Kraftstoff und betriebliches CO₂ werden über die Besuchsdauer für die gesamte modellierte Flotte integriert. BEV verwendet einen Benzinervergleich abzüglich modellierter Stromerzeugung. Keine vollständige Lebenszyklusbilanz; insbesondere PHEV-Ladestrom, Herstellung und Vorketten fehlen. Alle Herleitungen und Grenzen: METHODIK.md und Daten & Methodik auf der Website.

## Nachvollziehbarkeit

data.js: verwendete Parameter; model.js: Bilanz/Rundung; model-provenance.json: Herleitung; source-extracts.json: Auszüge; data-review-v3-1-3.json: erneute Bestandsprüfung und Intervallvergleich; `fireModel` in data.js: Referenzraten und regionale Szenariokonfiguration; source-link-audit.json: Quellenlinks; validation.json: Rechenprüfungen. Prüfungen bestätigen Implementierung und Quellenbezug, nicht die Richtigkeit aller Szenarien.

Öffentliche Quelldaten behalten ihre eigenen Lizenzen. IEA-Auszüge: IEA Global EV Outlook 2026, CC BY 4.0. Quellenlinks stehen in der Methodik.

## Neue Social-Vorschau

1200 × 630 Pixel, JPEG. Große Markenüberschrift und Begleittexte, Elektro-Kachel sowie vergrößertes LIVE-MODELL mit passendem grünen Punkt. Statische globale Modellvorschau zum 1. Oktober 2026; das Bild selbst aktualisiert sich nicht. Vorschau-URL mit neuem Cache-Schlüssel innerhalb V3.2.0.
