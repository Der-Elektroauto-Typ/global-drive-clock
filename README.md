# Global Drive Clock V2.4

V2.4 focuses on data integrity and laptop readability.

## Data model

Reference date: 2026-09-30

Modeled global passenger-car fleet: 1.380 billion vehicles.

Visible model categories:
- BEV: 58.0m; modeled annual net change +14.5m
- HEV + PHEV: 135.0m; modeled annual net change +10.0m
- Petrol ICE incl. MHEV: 850.0m; modeled annual net change -2.0m
- Diesel ICE incl. MHEV: 322.0m; modeled annual net change -3.0m

Hidden but included in the global total:
- Other (LPG/CNG/FCEV/etc.): 15.0m; +0.5m/year

Total annual model change: +20.0m passenger cars.

Percent trends and vehicles/second are no longer independently entered numbers.
They are calculated in app.js from annualChange/base, preventing internal contradictions.

## Published anchors

- IEA Global EV Outlook 2026: >20m electric-car sales in 2025; around 5% of global car stock electrified; ~23m EV sales expected in 2026. IEA EV = BEV + PHEV.
- IEA H1 2026 update: EV sales in H1 2026 were only slightly below H1 2025 despite a weaker overall car market.
- ACEA: 77.6m worldwide passenger-car registrations in 2025.
- VDA: 19.1m global new registrations with electric drive (BEV/PHEV/FCEV) in 2025; 12.7m were BEV.

The worldwide split of the *entire existing fleet* into BEV / HEV+PHEV / petrol / diesel is not available as a harmonised current public census. Therefore these category stocks are explicitly disclosed as model estimates.

## UI changes

- Smaller desktop/laptop hero headline, optimized for 16-inch MacBook Pro.
- V2.3 smartphone headline fix retained.
- Expandable “Data & Methodology” section with primary-source links.
- Existing language switcher, local timezone clock and Facebook link retained.
- Cache-busting updated to V2.4.
