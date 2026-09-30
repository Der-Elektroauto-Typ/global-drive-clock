# Global Drive Clock

Eine kostenlose statische Website für GitHub Pages.

## Inhalt

- `index.html` – Seitenstruktur
- `style.css` – komplettes Layout für Desktop und Mobil
- `data.js` – zentrale Datenbasis
- `app.js` – Live-Zähler und Zeitlogik

## Veröffentlichung mit GitHub Pages

1. Alle Dateien in dieses Repository hochladen.
2. Repository öffnen.
3. `Settings` → `Pages`.
4. Unter `Build and deployment`:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - Ordner: `/ (root)`
5. `Save`.
6. Nach kurzer Zeit erscheint die veröffentlichte URL.

## Facebook-Link ändern

In `data.js` diese Zeile anpassen:

```js
facebookUrl: "https://www.facebook.com/",
```

und durch die echte URL von „Der Elektroauto Typ“ ersetzen.

## Daten aktualisieren

Nur `data.js` bearbeiten.

Für jede Kategorie:

- `base` = modellierter Bestand am Referenzdatum
- `annualChange` = Nettoänderung pro Jahr
- `trend` = angezeigte prozentuale Tendenz
- `share` = modellierter Anteil am gesamten Pkw-Bestand
- `referenceDate` = Referenzzeitpunkt der Basiswerte

## Methodischer Hinweis

Die Website zeigt eine modellierte Echtzeitschätzung. Es handelt sich nicht um eine amtliche sekundengenaue Live-Zählung. Besonders die weltweiten Bestände von Benzin, Diesel und Hybrid sind modellierte Größen, da keine einheitliche globale Echtzeit-Bestandsdatenbank nach Antriebsart verfügbar ist.
