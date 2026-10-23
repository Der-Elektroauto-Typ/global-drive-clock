# V3.2.6 — Einstieg und teilbare Einblicke

Stand: 23. Oktober 2026. Ergänzung auf Basis von V3.2.4; keine neuen numerischen Modellparameter oder Quellenzahlen.

## Gestaltungsentscheidung

Der Kopfbereich zeigt nur Projektname und einen kurzen Satz. Direkt danach folgen der Besuchszähler und die hervorgehobene modellierte Nettoänderung der reinen Elektrofahrzeuge. Alle vier Zähler stehen auf Desktop und Mobil in einer gemeinsamen Reihe mit denselben Zeilenhöhen und Zahlengrößen. Über der ersten Zahl steht „Elektro“, darunter „mehr im Bestand“. Der gemeinsame Regions-/Modellhinweis steht unter der Reihe. Navigation, Uhr und ausführliche Erklärungen folgen auf die erste Zahl. Der Hinweis „Modellschätzung · keine Live-Neuzulassungen“ bleibt am Zähler sichtbar.

Der Einstiegszähler folgt der ausgewählten Region. Für neue Besucher ohne gespeicherte Auswahl startet die Seite mit „Weltweit“. Eine gespeicherte oder ausdrücklich geteilte Regionsauswahl bleibt maßgeblich; Welt und Land werden nicht still vermischt. Vorzeichen und eine kleinere Nachkommastelle bleiben erhalten. Die Elektro-Hervorhebung beschränkt sich auf ruhige Rahmen-, Farb- und Schriftakzente.

Die Empfehlungen von [Nielsen Norman Group zu Startseiten](https://www.nngroup.com/articles/homepage-design-principles/) begründen die Richtung: Zweck und Nutzen sollen schnell erkennbar sein; konkrete Inhalte und passende Aktionen helfen beim Einstieg. [Visuelle Hierarchie](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/) begründet die sparsame Größen- und Kontrastabstufung. Daraus folgt keine gemessene Steigerung der Verweildauer oder Teilungsrate für diese Website.

## Welche Ergänzungen umgesetzt wurden

| Idee | Entscheidung | Grund |
| --- | --- | --- |
| Veränderung während des Besuchs | Prominent am Einstieg und teilbar | Der zeitliche Bezug wird unmittelbar verständlich; die Rechnung war bereits vorhanden. |
| „Heute seit 00:00“ | Kompakte teilbare Karte im Abschnitt „Veränderung“ | Einfacher Gesprächsanlass mit eindeutiger Region, Gerätezeitzone und Modellhinweis. |
| Blick auf 2035 | Teilbare Szenariokarte und Sprung in die bestehende Zeitreise | Nutzt dieselbe Rechnung und erlaubt das Ändern der Annahmen. Ausdrücklich keine Prognose. |
| Deutschland gegen China | Kein neuer Sieger-/Rennvergleich | DE zählt Pkw, China Automobile einschließlich Nutzfahrzeugen; Definitionen und Quellenzeiträume sind unterschiedlich. Ein Rennen würde eine Vergleichbarkeit nahelegen, die das bestehende Modell nicht vollständig bietet. Die normale Regionswahl bleibt vorhanden. |
| Elektroanteil gegenüber 2020 | Keine pauschale neue Welt-Kennzahl | Die gesicherten historischen BEV-Werte und separaten Gesamtbestände sind nicht durchgängig auf denselben Stichtag und dieselbe Fahrzeugabgrenzung bezogen. Etwaiger verfügbarer Deutschland-Rückblick bleibt in der vorhandenen Zeitreise erkundbar. |

## Berechnungen

### Einstieg

`Besuchsänderung = Summe der BEV-Nettoraten der Teilmodelle × Sekunden seit Seitenaufruf`.

Das ist dieselbe kontinuierliche Modelländerung wie in V3.2.4, formatiert mit einer Nachkommastelle. Sie ist keine Anzahl beobachteter Neuzulassungen oder Verkäufe. Änderungen durch Abgänge, Registereffekte und Modellannahmen sind Teil der zugrunde liegenden Nettorate.

### Heute

In V3.2.6 steht der Regionsumschalter direkt unter dem Veränderungs-Balkendiagramm und vor diesen Karten, auf Desktop und Mobil. Die deutsche Überschrift lautet „Heute seit 00:00 Uhr“.

Der Tagesbeginn wird mit `Date.setHours(0, 0, 0, 0)` in der lokalen Zeitzone des Geräts bestimmt. Die tatsächlich seit diesem Zeitpunkt verstrichenen Sekunden werden mit derselben BEV-Nettorate der ausgewählten Region multipliziert. Das berücksichtigt die reale Dauer eines Tages mit Sommerzeitwechsel. Die Karte nennt Datum, IANA-Zeitzone und den Gerätebezug. Verschiedene Zeitzonen können deshalb gleichzeitig unterschiedliche „Heute“-Werte sehen. Es sind modellierte Nettoänderungen seit lokalem Mitternacht, keine seit Mitternacht gemeldeten Registrierungen.

### 2035

Die Karte verwendet `scenario.js`, den Modellbestand bei Seitenaufruf und als Ziel den Jahresabschluss 2035 (1. Januar 2036, 00:00 UTC). Der ausgewählte lineare oder S-Kurven-Verlauf sowie die aktuelle Sättigungsannahme der Zeitreise werden übernommen. BEV-Anteil = BEV-Szenariobestand geteilt durch die Summe der vier sichtbaren Antriebsgruppen. „Sonstige“ ist ausgeschlossen. Die angenommene BEV-Grenze wird bei der S-Kurve angezeigt. Die Karte hat keinen Sprungknopf. Der Jahresregler startet bei jedem Öffnen im aktuellen Kalenderjahr des Geräts, auch bei geteilten Links.

## Teilen und Nachvollziehbarkeit

Es gibt genau einen „Seite teilen“-Knopf, direkt unter „Buy Me a Coffee“. Einstieg und Zahlenkarten haben keine Teilen-Knöpfe. Die gemeinsame Momentaufnahme enthält Besuchszuwachs, Tageswert und 2035-Szenario.

Nur nach einem ausdrücklichen Klick auf diesen Knopf wird ein Text vorbereitet. Er enthält Wert, Region, Momentaufnahme mit Datum/Zeitzone, Modell- beziehungsweise Szenariokennzeichnung und Versionsnummer. Die Linkadresse verwendet die öffentliche Projektadresse, niemals einen lokalen Dateipfad.

1. Unterstützt der Browser `navigator.share`, wird sein Teilen-Menü im Klickereignis aufgerufen.
2. Andernfalls wird versucht, Text und Link in die Zwischenablage zu schreiben. „Kopiert“ wird nur nach erfolgreichem Schreiben angezeigt.
3. Ist auch das nicht möglich, erscheint ein lesbares, markiertes Textfeld zum manuellen Kopieren. Ein abgebrochenes natives Teilen führt nicht automatisch zum Kopieren.

Grundlagen: [MDN Web Share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share), [MDN Clipboard.writeText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText), [WebKit zur Nutzeraktivierung](https://webkit.org/blog/13862/the-user-activation-api/). Betriebssystem und Ziel-App bestimmen, welche Felder sie tatsächlich übernehmen.

Geteilte Links setzen Region und Sprache. Der Seiten-Link ergänzt den Verlauf und die angenommene Sättigungsgrenze; diese werden beim Öffnen geprüft und übernommen. Zulässig sind die fünf angebotenen Regionen, die zehn Sprachen, die zwei Berechnungsarten und Grenzen von 50–100 % in Fünferschritten. Das Modell kann die Untergrenze weiterhin an den heutigen Anteil anpassen.

Eine Momentaufnahme ist Text, kein auf einem Server gespeicherter Messpunkt. Die Zielseite berechnet nach dem Öffnen ihre laufenden Werte neu. 2035 wird mit denselben Einstellungen, aber dem Modellbestand beim Öffnen der Zielseite berechnet. Die Startseite öffnet sich weiterhin oben; der Jahresregler startet im aktuellen Jahr. Ein eventuell vorhandener alter year-Parameter wird ignoriert. Neue Freigabelinks erfordern die veröffentlichte V3.2.5. Dieses lokale Paket wurde nicht automatisch veröffentlicht.

## Erhaltene Funktionen und Prüfgrenzen

Die sechs gekoppelten Regionsumschalter, mobile Positionen, Jahresregler unter den Balken, kleine Dezimalstellen, Kraftstoff-/CO₂-Werte, Brandmodell, Quellen und Methodik bleiben erhalten. Die neue Hauptzahl verwendet vorhandene Anzeigeelemente. Nach dem Aufbau werden mobil auch für die neuen Zahlen keine Anzeigeelemente pro Animationsschritt erzeugt.

Die DOM-/Rechenprüfungen und simulierten Teilen-Pfade des vorherigen Stands (Cache 3.2.5-2) stehen in `validation-v3-2-5.json`. Ein realer iPhone-Scrolltest, eine grafische Layoutkontrolle und Tests der echten Betriebssystem-Teilen-Menüs sind damit nicht bestätigt. Virale Wirkung oder höhere Verweildauer wurden nicht gemessen.
