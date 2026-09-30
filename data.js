window.DRIVECOUNT_DATA = {
  modelVersion: "2026.2 / V2.4",
  dataDate: "30. September 2026",
  referenceDate: "2026-09-30T00:00:00Z",

  facebookUrl: "https://www.facebook.com/share/18Na7ZUv93/?mibextid=wwXIfr",

  /*
   * GLOBAL DRIVE CLOCK – V2.4
   *
   * IMPORTANT:
   * These are MODEL VALUES, not an official second-by-second census.
   *
   * Published anchors:
   * - IEA Global EV Outlook 2026: >20m electric-car sales in 2025,
   *   about 5% of global car stock electrified at end-2025,
   *   ~23m EV sales expected in 2026. IEA "electric cars" = BEV + PHEV.
   * - ACEA: 77.6m worldwide passenger-car registrations in 2025.
   * - VDA/UBA: global passenger-car stock is above 1.3bn and still growing.
   *
   * There is no harmonised current public world census splitting the entire
   * passenger-car stock into BEV / HEV+PHEV / petrol / diesel. Therefore the
   * powertrain split below is a transparent model calibrated to those anchors.
   *
   * Mild hybrids remain with their combustion-fuel class where possible.
   * "other" covers LPG/CNG/FCEV and other small categories and is not shown
   * as a large card, but is included in the global total.
   */

  globalFleet: {
    base: 1380000000,
    annualChange: 20000000
  },

  categories: {
    electric: {
      label: "Elektro",
      definition: "BEV",
      base: 58000000,
      annualChange: 14500000
    },

    hybrid: {
      label: "Hybrid",
      definition: "HEV + PHEV",
      base: 135000000,
      annualChange: 10000000
    },

    petrol: {
      label: "Benzin",
      definition: "Petrol ICE incl. MHEV",
      base: 850000000,
      annualChange: -2000000
    },

    diesel: {
      label: "Diesel",
      definition: "Diesel ICE incl. MHEV",
      base: 322000000,
      annualChange: -3000000
    }
  },

  other: {
    label: "Sonstige",
    definition: "LPG/CNG/FCEV/other",
    base: 15000000,
    annualChange: 500000
  },

  germany: {
    label: "Deutschland",
    dataDate: "2026-07-01",
    referenceDate: "2026-07-01T00:00:00Z",
    annualSeconds: 365 * 24 * 60 * 60,
    trendReference: "previous",
    sourceName: "KBA FZ 27 / rollierende 12-Monats-Änderung",
    globalFleet: {
      base: 49696710,
      annualChange: 171102
    },
    categories: {
      electric: { label: "Elektro (BEV)", definition: "BEV", base: 2365047, annualChange: 529469 },
      hybrid: { label: "Hybrid insgesamt inkl. PHEV", definition: "HEV + PHEV", base: 4807029, annualChange: 837275 },
      petrol: { label: "Benzin", definition: "Pkw mit Benzinantrieb", base: 29012909, annualChange: -670154 },
      diesel: { label: "Diesel", definition: "Pkw mit Dieselantrieb", base: 13157334, annualChange: -508100 }
    },
    other: {
      label: "Gas und Sonstige",
      definition: "Gas + Sonstige, intern mitgezählt",
      base: 354391,
      annualChange: -17388
    }
  },

  sources: {
    iea: "https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars",
    ieaH1: "https://www.iea.org/reports/electric-car-markets-in-a-time-of-uncertainty/executive-summary",
    acea: "https://www.acea.auto/publication/economic-and-market-report-global-and-eu-auto-industry-full-year-2025/",
    vda: "https://www.vda.de/de/themen/Automobil-Insight-2025/2025-Elektromobilitaet"
  }
};
