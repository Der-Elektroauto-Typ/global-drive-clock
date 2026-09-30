# Global Drive Clock V2.9.1

V2.9.1 refines the mobile region switch layout while retaining the five selectable regions: Global, Germany, EU, China and USA. Each region has its own reference date, base counts and annualized change; changing regions does not reset the page-session timer. The footer shows V2.9.1 and the selected data date.

## Data and methodology

- **Global — 30 Sep 2026:** modeled worldwide passenger-car stock. Public sources do not provide a harmonized global stock census split into the four displayed powertrains. Values remain a transparent interpolation calibrated to IEA, ACEA and VDA/UBA anchors.
- **Germany — 1 Jul 2026:** KBA FZ 27 passenger-car stock; annual changes compare 1 Jul 2025 with 1 Jul 2026 and are spread evenly across 365 days.
- **EU — 31 Dec 2025:** Eurostat's latest annual passenger-car stock. Eurostat reports more than 260 million cars and 7.59 million BEVs (+31.5% vs 2024). Other fuel-category stocks and annual changes are model estimates calibrated to published fleet/registration summaries; national data are not fully harmonized and some are supplemented from other sources.
- **China — 30 Jun 2026:** Ministry of Public Security / State Council anchor: 371 million automobiles, 48.97 million NEVs; 68.77% of NEVs were battery-electric. The official aggregate does not provide all four categories on a directly comparable basis. BEV and NEV remainder are anchored to that release; petrol/diesel allocation and rates are modeled. Fleet scope differs from passenger-car-only definitions elsewhere.
- **USA — 31 Dec 2025:** DOE Alternative Fuels Data Center / National Laboratory of the Rockies / Experian registrations. The light-duty fleet includes light trucks, not only passenger cars. Counts are rounded and portal rate tables may differ after revisions; annual changes shown are estimates.

All counters are interpolations, not live registration feeds. They continue from their own reference date using the annualized rate and share one session timer. EU, China and USA estimates have greater uncertainty than the German KBA series. The model sums reconcile across displayed categories plus “other”; reconciliation is arithmetic, not evidence that every category has an official census.

## Sources

- IEA, Global EV Outlook 2026: https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars
- ACEA, Global and EU auto industry 2025: https://www.acea.auto/publication/economic-and-market-report-global-and-eu-auto-industry-full-year-2025/
- Eurostat, passenger cars in the EU: https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260731-1
- Eurostat methodology and tables: https://ec.europa.eu/eurostat/statistics-explained/SEPDF/cache/25886.pdf?v=1009158738292241
- China State Council / MPS, fleet to 30 Jun 2026: https://english.www.gov.cn/archive/statistics/202607/15/content_WS6a56dd6ec6d00ca5f9a0c307.html
- China State Council / MPS, fleet to 30 Jun 2025: https://english.www.gov.cn/archive/statistics/202507/14/content_WS6874b990c6d0868f4e8f4226.html
- U.S. DOE AFDC vehicle registrations: https://afdc.energy.gov/vehicle-registration
- U.S. DOE AFDC annual changes: https://afdc.energy.gov/data/10881
- Germany KBA FZ 27: https://www.kba.de/DE/Statistik/Produktkatalog/produkte/Fahrzeuge/fz27_b_uebersicht.html

## Publish

Upload all files in this folder to the root of the GitHub Pages repository.

Site: https://der-elektroauto-typ.github.io/global-drive-clock/
