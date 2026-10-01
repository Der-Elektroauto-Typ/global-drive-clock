# Global Drive Clock V3.0.4

V3.0.4 moves the live modeled fuel and operational CO₂ flow into the expandable Data & Methodology section. Fuel and CO₂ totals have been removed from the vehicle cards. The observation timer now sits directly below the session heading. Visitor-session estimates are displayed in four aligned color-coded powertrain columns on mobile and desktop, slightly wider and more legible on phones, with amounts, full unit names and avoided/produced labels separated into clear stacked groups. The original powertrain stock counters, five-region switch, ten languages, local clock/time zone, Facebook link, favicon and responsive layout remain in place.

## What the impact counters mean

The displayed vehicle-stock value is multiplied by the model's annual distance and fuel/electricity-consumption parameters for that region and powertrain. The resulting annual flow is spread uniformly across seconds. Each card shows the current modeled fleet rate and the amount accumulated since that region's data reference date. The lower session panel uses the same calculation from the moment this page was opened. Switching regions changes which regional estimate is shown; it does not reset the session timer or the underlying region stock models.

These are modeled fleet activity estimates, not measurements of vehicles currently driving, fuel being pumped, or emissions being observed live. A falling stock count is not itself a fuel-consumption rate: the fuel/CO₂ flow is derived independently from fleet size, distance driven and consumption assumptions.

### Formula

For fuel-burning categories:

`L/s = current vehicles × annual km/vehicle × L/100 km ÷ 100 ÷ seconds/year`

`tailpipe kg CO₂/s = L/s × fuel factor (kg CO₂/L)`

For BEV comparison:

`avoided ICE fuel = BEV stock × assumed annual km × comparator ICE L/100 km ÷ 100`

`net operational CO₂ avoided = comparator ICE tailpipe CO₂ − BEV electricity use × regional annual-average grid CO₂ factor`

The BEV comparison therefore subtracts emissions from electricity generation. It is **not** a full lifecycle comparison: vehicle/battery manufacturing, fuel extraction/refining/transport, and upstream electricity lifecycle emissions are outside this boundary. The grid factor is an annual-average generation factor, not a marginal factor for the extra charging load.

### Model inputs

Values are rounded baselines used in `data.js`, in the order annual km and liters per 100 km. BEV comparator rows additionally show BEV electricity use in kWh per 100 km. Hybrid is a single blended estimate for HEV/PHEV and has higher uncertainty, especially because plug-in charging behavior is unknown.

| Region | BEV: km/year · comparator L/100 km · BEV kWh/100 km | Grid CO₂ factor | Hybrid km/year · L/100 km | Petrol km/year · L/100 km | Diesel km/year · L/100 km |
|---|---:|---:|---:|---:|---:|
| Global | 12,500 · 7.8 · 20 | 435 g/kWh (2025) | 12,800 · 5.0 | 12,000 · 7.8 | 12,000 · 6.5 |
| Germany | 12,500 · 7.7 · 21 | 344 g/kWh (2025 preliminary) | 12,500 · 5.4 | 10,300 · 7.8 | 17,300 · 7.0 |
| EU | 10,000 · 6.5 · 21 | 170 g/kWh (2025) | 11,000 · 4.8 | 10,000 · 6.5 | 11,000 · 5.5 |
| China | 8,000 · 5.3 · 16 | 530 g/kWh (2025) | 9,000 · 4.5 | 8,000 · 5.3 | 10,000 · 6.5 |
| USA | 17,000 · 9.9 · 19 | 350 g/kWh (2023) | 16,000 · 6.0 | 17,000 · 9.9 | 17,000 · 8.0 |

Fuel factors: petrol 2.31 kg direct CO₂/L; diesel 2.68 kg direct CO₂/L. These are carbon-combustion factors; biofuel shares and non-CO₂ greenhouse gases are not resolved by region.

### Source quality and limits by region

- **Germany:** KBA FZ 27 stocks; Destatis road mileage/fuel consumption by passenger-car fuel; UBA preliminary 2025 direct CO₂ factor for electricity consumed in Germany. The underlying fleet activity evidence is strongest here, although some impact inputs still require rounded category assumptions.
- **EU:** Eurostat passenger-road activity and transport energy balances; EEA real-world OBFCM data for vehicles registered 2021–2024; IEA 2025 annual-average generation intensity. OBFCM is not yet a direct measurement of every older car, and EU activity/energy totals do not perfectly isolate the four displayed powertrains.
- **China:** IEA regional vehicle-use comparison assumptions and the Ministry of Ecology and Environment's 2023 national grid factor. Public official data does not provide a harmonized stock-by-fuel plus full-fleet distance/consumption table matching this page's categories.
- **USA:** DOE AFDC/NLR/Experian fleet counts, EPA new-light-duty-vehicle fuel-economy trends and EPA eGRID 2023 national grid intensity. New-vehicle efficiency is only a proxy for the older in-use fleet; the count model also includes some light trucks.
- **Global:** IEA global vehicle activity/consumption and electricity-intensity assumptions. The powertrain split is still an estimate because no harmonized current world passenger-car census reports every category on one basis.

The chosen grid factors are not all from the same reporting year: latest verified values used for this release are 2025 estimates for Global/EU/China, a preliminary 2025 UBA value for Germany, and 2023 EPA eGRID data for the USA. Values and years are exposed in this file and the website's methodology section.

## Vehicle-stock model

- Global stock/powertrain values continue to be model anchors calibrated to IEA, ACEA and VDA/UBA sources; they are not a second-by-second official census.
- Germany uses KBA FZ 27 stock data and its six-month observed change from 1 January to 1 July 2026, spread evenly over 181 days. Germany’s 344 g CO₂/kWh 2025 electricity factor is preliminary (UBA, March 2026).
- EU values use Eurostat annual stock anchors, with modeled category splits and changes.
- China uses Ministry of Public Security / State Council fleet and NEV anchors; not every counter category is separately observed.
- USA uses DOE AFDC / NLR / Experian data, with a light-duty vehicle scope that includes light trucks.

## Sources

- IEA, Global EV Outlook 2026, oil displacement methodology: https://www.iea.org/reports/global-ev-outlook-2026/outlook-for-electric-mobility-chap-9-11
- IEA, Electricity 2026, 2025 electricity-generation CO₂ intensities (Global 435, EU 170, China 530 g/kWh): https://www.iea.org/reports/electricity-2026/emissions
- IEA, vehicle stock and EV data: https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars
- Destatis, passenger-car mileage and fuel consumption: https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Umwelt/UGR/verkehr-tourismus/Tabellen/fahrleistungen-kraftstoffverbrauch.html
- Destatis, German road energy use: https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/07/PD26_233_32421.html
- UBA, preliminary German electricity-consumption factor for 2025 (344 g CO₂/kWh): https://www.umweltbundesamt.de/system/files/medien/11850/publikationen/2026-03/16_2026_CC.pdf
- Eurostat, passenger road transport activity: https://ec.europa.eu/eurostat/databrowser/view/ROAD_PA_MOV/default/table?lang=en
- Eurostat, transport energy balances: https://ec.europa.eu/eurostat/databrowser/product/view/ten00126?lang=en
- EEA, real-world on-road consumption measurements: https://climate-energy.eea.europa.eu/topics/transport/real-world-emissions/intro
- China MEE, 2023 electricity factors (national average 0.5306 kg CO₂/kWh, 2023; cross-check): https://www.mee.gov.cn/ywdt/zbft/202601/t20260105_1139911.shtml
- U.S. EPA eGRID 2023 electricity factors: https://www.epa.gov/egrid/summary-data
- U.S. EPA Automotive Trends: https://www.epa.gov/automotive-trends/download-automotive-trends-report
- DOE AFDC vehicle registrations: https://afdc.energy.gov/vehicle-registration
- KBA FZ 27: https://www.kba.de/DE/Statistik/Produktkatalog/produkte/Fahrzeuge/fz27_b_uebersicht.html
- Government fuel combustion conversion factors: https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2025

## Publish

Upload all files in this folder to the root of the GitHub Pages repository.

Site: https://der-elektroauto-typ.github.io/global-drive-clock/
