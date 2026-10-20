# Global Drive Clock V3.2.0

Alle Dateien dieses ZIP gemeinsam hochladen und bestehende Dateien ersetzen. Statische Website, kein Build erforderlich. Modellversion: 3.2.0; Cache-Kennung dieser Überarbeitung: 3.2.0-4. Quellenprüfung: 20. Oktober 2026.

## Änderungen

Gegenüber V3.1.3:

- Die bisherigen Bestands- und CO₂-Parameter bleiben die Grundlage. Für Deutschland verwenden die vier Fahrzeugzähler jetzt den amtlichen KBA-Vergleich vom 1. Januar bis 1. Juli 2026 (181 Tage) statt des vorherigen Jahresvergleichs. Die beobachtete Sechsmonatsänderung wird gleichmäßig auf Sekunden verteilt; der Prozentwert zeigt genau diese gemessene Sechsmonatsänderung. Das EU-ohne-Deutschland-Komplement wurde passend neu berechnet, damit EU-Bestand und EU-Trend im Modell zusammenpassen.
- Ein Brand-Szenariomodell ist hinzugekommen. Es folgt der Regionsauswahl und stellt für dieselbe modellierte Gesamtzahl drei hypothetische Fälle gegenüber: alle Fahrzeuge BEV, alle Hybrid oder alle Verbrenner. Der zweite Regionsumschalter ist auf Desktop und Mobilgeräten verfügbar und mit dem oberen Umschalter synchronisiert. Angezeigt werden modellierte Erwartungswerte, keine Live-Meldungen.
- Das Brandmodell verwendet norwegische Feuerwehreinsätze und angenäherte Fahrzeugjahre als Referenz. Die Verbrennerrate mittelt zwei DSB-Abgrenzungen. Zahlen, Umrechnung, Kategorien und Einschränkungen sind in der Methodik dokumentiert; es handelt sich nicht um globale Messwerte.
- In der norwegischen Referenz liegt die Hybrid-Punktrate unter der BEV-Punktrate (35 gegenüber 120 erfassten Einsätzen). Eine einfache Zählratenanalyse ergibt ein Ratenverhältnis von etwa 0,64 (ungefähres 95-%-Intervall 0,44–0,93; bedingter exakter p-Wert etwa 0,019). Das berücksichtigt nur zufällige Zählstreuung, nicht Definitions-/Expositionsfehler, systematische Verzerrungen oder Unterschiede der Flotten. Die Rangfolge gilt daher nicht als gesicherte allgemeine Aussage und erst recht nicht als globale Messung.
- Jedes Brand-Szenario setzt den Antrieb für den gesamten sichtbaren Bestand der gewählten Region an. Eingerechnet werden BEV, Hybrid, Benzin und Diesel; „Sonstige“ bleibt mangels aufgelösten Antriebsmixes ausgeschlossen. Alle drei Zähler zeigen drei Nachkommastellen, ohne damit eine entsprechende Messgenauigkeit zu behaupten.
- Die Bestandszähler bleiben kurzfristig linear. Die vorhandenen kurzen oder szenariobasierten Reihen begründen keine exponentielle Fortschreibung oder S-Kurve.

Details zu Datengrundlage, Umrechnung, Einschränkungen und Gegenbefunden stehen in `METHODIK.md` und „Daten & Methodik“.

## Einordnung

Bestände sind keine Verkäufe. Hybrid ist eine Sammelkategorie einschließlich PHEV; deren Menge wird nicht doppelt gezählt. Die Fahrzeugabgrenzungen unterscheiden sich (EU/DE Pkw, USA Light-Duty, China Automobile einschließlich Nutzfahrzeugen). China und Rest der Welt enthalten nicht amtlich bestätigte HEV-/ICE-Szenarien. Konsistente Summen sind kein Beweis empirischer Genauigkeit. Der Brandzähler überträgt norwegische Fahrzeugjahresraten auf den modellierten Bestand der gewählten Region; er zeigt keine regional erhobene oder globale Brandstatistik. Hybrid liegt nur im norwegischen Punktschätzer unter BEV; diese Rangfolge ist nicht global verallgemeinerbar. Polen liefert einen nicht harmonisierten Gegenbefund. Die häufig zitierte AutoInsuranceEZ-Infografik ist wegen ihres unpassenden Nenners und der nicht als Brände identifizierbaren Zählsummen keine verwendbare Kalibrierungsquelle; die ausführliche Prüfung steht in „Daten & Methodik“.

Kraftstoff und betriebliches CO₂ werden über die Besuchsdauer für die gesamte modellierte Flotte integriert. BEV verwendet einen Benzinervergleich abzüglich modellierter Stromerzeugung. Keine vollständige Lebenszyklusbilanz; insbesondere PHEV-Ladestrom, Herstellung und Vorketten fehlen. Alle Herleitungen und Grenzen: METHODIK.md und Daten & Methodik auf der Website.

## Nachvollziehbarkeit

data.js: verwendete Parameter; model.js: Bilanz/Rundung; model-provenance.json: Herleitung; source-extracts.json: Auszüge; data-review-v3-1-3.json: erneute Bestandsprüfung und Intervallvergleich; `fireModel` in data.js: Referenzraten und regionale Szenariokonfiguration; source-link-audit.json: Quellenlinks; validation.json: Rechenprüfungen. Prüfungen bestätigen Implementierung und Quellenbezug, nicht die Richtigkeit aller Szenarien.

Öffentliche Quelldaten behalten ihre eigenen Lizenzen. IEA-Auszüge: IEA Global EV Outlook 2026, CC BY 4.0. Quellenlinks stehen in der Methodik.

## Neue Social-Vorschau

1200 × 630 Pixel, JPEG. Große Markenüberschrift und Begleittexte, Elektro-Kachel sowie vergrößertes LIVE-MODELL mit passendem grünen Punkt. Statische globale Modellvorschau zum 1. Oktober 2026; das Bild selbst aktualisiert sich nicht. Vorschau-URL mit neuem Cache-Schlüssel innerhalb V3.2.0.
