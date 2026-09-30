# Global Drive Clock V2.2

Statische GitHub-Pages-Website mit mehrsprachiger Oberfläche.

## Neu in V2.2

- Sprachschalter oben rechts
- 10 Sprachen:
  - Deutsch
  - Englisch
  - Französisch
  - Spanisch
  - Italienisch
  - Polnisch
  - Niederländisch
  - Portugiesisch
  - Norwegisch
  - Chinesisch
- automatische Erkennung der Browsersprache
- Speicherung der Auswahl im Browser
- lokalisierte Zahlenformate
- vollständige Übersetzung der sichtbaren Oberfläche
- responsive Sprachwahl für Mobilgeräte

## Dateien

- `index.html`
- `style.css`
- `app.js`
- `data.js`

## Update auf GitHub

Am einfachsten alle vier Dateien im Repository ersetzen.

## Facebook-Link

In `data.js`:

```js
facebookUrl: "https://www.facebook.com/",
```

durch die echte Facebook-Seite ersetzen.

## Methodischer Hinweis

Die Website zeigt eine modellierte Echtzeitschätzung. Es handelt sich nicht um eine amtliche sekundengenaue Live-Zählung.


## V2.2.1

- Facebook-Link von „Der Elektroauto Typ“ eingetragen.
- Die kleine Uhr oben verwendet jetzt automatisch die lokale Zeitzone des Besuchers.
- Darstellung der Uhrzeit folgt der gewählten Sprache/Locale.
- Die Zeitzone stammt aus Browser/Betriebssystem, nicht aus der ausgewählten Sprache.


## V2.2.2

- Cache-Busting für `style.css`, `data.js` und `app.js`.
- Behebt den Fall, dass GitHub Pages bzw. der Browser neue HTML-/JS-Dateien lädt,
  aber noch eine ältere CSS-Version aus dem Cache verwendet.


## V2.3

- Smartphone-Headline korrigiert.
- Lange Überschriften bleiben vollständig innerhalb des Viewports.
- Mobile Hero-Typografie kompakter.
- Desktop-Layout unverändert.
