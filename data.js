window.DRIVECOUNT_DATA = {
  modelVersion: "V3.0.2",
  dataDate: "30. September 2026",
  referenceDate: "2026-09-30T00:00:00Z",

  facebookUrl: "https://www.facebook.com/share/18Na7ZUv93/?mibextid=wwXIfr",

  /*
   * GLOBAL DRIVE CLOCK – V3.0.2
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

  // Impact model inputs: annual km and fuel/electricity consumption per vehicle.
  // Electricity factors are annual-average generation factors, not marginal charging factors.
  // Net BEV operational CO2 = comparable ICE tailpipe CO2 - grid generation CO2.
  // No vehicle manufacture, fuel upstream or electricity lifecycle is included.
  impactFactors: { petrolKgCO2PerLitre: 2.31, dieselKgCO2PerLitre: 2.68 },
  gridKgCO2PerKwh: 0.435, // IEA 2025 estimated global electricity-generation intensity
  impact: {
    electric: { annualKm: 12500, comparatorLitresPer100Km: 7.8, comparatorFuel: "petrol", kwhPerKm: 0.20 },
    hybrid: { annualKm: 12800, litresPer100Km: 5.0, fuel: "petrol" },
    petrol: { annualKm: 12000, litresPer100Km: 7.8, fuel: "petrol" },
    diesel: { annualKm: 12000, litresPer100Km: 6.5, fuel: "diesel" }
  },

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
    annualSeconds: 181 * 24 * 60 * 60,
    trendReference: "previous",
    methodTag: "KBA FZ 27 · 6M",
    lookbackStart: "2026-01-01",
    sourceName: "Quellen: KBA · FZ 27 · 6-Monats-Vergleich",
    gridKgCO2PerKwh: 0.344, // UBA 2025 preliminary direct CO2 factor for electricity consumed in Germany
    impact: {
      electric: { annualKm: 12500, comparatorLitresPer100Km: 7.7, comparatorFuel: "petrol", kwhPerKm: 0.21 },
      hybrid: { annualKm: 12500, litresPer100Km: 5.4, fuel: "petrol" },
      petrol: { annualKm: 10300, litresPer100Km: 7.8, fuel: "petrol" },
      diesel: { annualKm: 17300, litresPer100Km: 7.0, fuel: "diesel" }
    },
    globalFleet: {
      base: 49696710,
      annualChange: 210223
    },
    categories: {
      electric: { label: "Elektro (BEV)", definition: "BEV", base: 2365047, annualChange: 330787 },
      hybrid: { label: "Hybrid insgesamt inkl. PHEV", definition: "HEV + PHEV", base: 4807029, annualChange: 444466 },
      petrol: { label: "Benzin", definition: "Pkw mit Benzinantrieb", base: 29012909, annualChange: -330823 },
      diesel: { label: "Diesel", definition: "Pkw mit Dieselantrieb", base: 13157334, annualChange: -228328 }
    },
    other: {
      label: "Gas und Sonstige",
      definition: "Gas + Sonstige, intern mitgezählt",
      base: 354391,
      annualChange: -5879
    }
  },


  regions: {
    germany: null,
    eu: {
      label: "EU",
      dataDate: "2025-12-31",
      referenceDate: "2025-12-31T00:00:00Z",
      annualSeconds: 365 * 24 * 60 * 60,
      methodTag: "12M Modell",
      lookbackStart: "2024-12-31",
      sourceUrl: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260731-1",
      sourceName: "Quellen: Eurostat · ACEA · Modell",
      gridKgCO2PerKwh: 0.170, // IEA 2025 EU electricity-generation intensity
      impact: {
        electric: { annualKm: 10000, comparatorLitresPer100Km: 6.5, comparatorFuel: "petrol", kwhPerKm: 0.21 },
        hybrid: { annualKm: 11000, litresPer100Km: 4.8, fuel: "petrol" },
        petrol: { annualKm: 10000, litresPer100Km: 6.5, fuel: "petrol" },
        diesel: { annualKm: 11000, litresPer100Km: 5.5, fuel: "diesel" }
      },
      globalFleet: { base: 269000000, annualChange: -260000 },
      categories: {
        electric: { label: "Elektro (BEV)", definition: "BEV", base: 7590000, annualChange: 1820000 },
        hybrid: { label: "Hybrid", definition: "HEV + PHEV", base: 52000000, annualChange: 8700000 },
        petrol: { label: "Benzin", definition: "Pkw Benzin", base: 147000000, annualChange: -3300000 },
        diesel: { label: "Diesel", definition: "Pkw Diesel", base: 51000000, annualChange: -4500000 }
      },
      other: { label: "Sonstige", definition: "Gas und übrige", base: 11410000, annualChange: -2980000 },
      translations: {
        de: { headline1: "EUROPA IM", headline2: "ANTRIEBSWANDEL.", heroCopy: "Der Pkw-Bestand in der Europäischen Union – mit den jüngsten verfügbaren Jahresdaten." },
        en: { headline1: "EUROPE IN", headline2: "POWERTRAIN SHIFT.", heroCopy: "The European Union passenger-car fleet, using the latest available annual data." }
      }
    },
    china: {
      label: "China",
      dataDate: "2026-06-30",
      referenceDate: "2026-06-30T00:00:00Z",
      annualSeconds: 365 * 24 * 60 * 60,
      methodTag: "Bestand + Modell",
      lookbackStart: "2025-06-30",
      sourceUrl: "https://english.www.gov.cn/archive/statistics/202607/15/content_WS6a56dd6ec6d00ca5f9a0c307.html",
      sourceName: "Quellen: MPS · Staatsrat China · Modell",
      gridKgCO2PerKwh: 0.530, // IEA 2025 China electricity-generation intensity; MEE 2023 factor is 0.5306
      impact: {
        electric: { annualKm: 8000, comparatorLitresPer100Km: 5.3, comparatorFuel: "petrol", kwhPerKm: 0.16 },
        hybrid: { annualKm: 9000, litresPer100Km: 4.5, fuel: "petrol" },
        petrol: { annualKm: 8000, litresPer100Km: 5.3, fuel: "petrol" },
        diesel: { annualKm: 10000, litresPer100Km: 6.5, fuel: "diesel" }
      },
      globalFleet: { base: 371000000, annualChange: 12000000 },
      categories: {
        electric: { label: "Elektro (BEV)", definition: "BEV", base: 33675000, annualChange: 8135000 },
        hybrid: { label: "Hybrid / NEV-Rest", definition: "PHEV + EREV + FCEV; Modell", base: 15295000, annualChange: 4065000 },
        petrol: { label: "Benzin (Modell)", definition: "Restbestand, modelliert", base: 282030000, annualChange: -700000 },
        diesel: { label: "Diesel (Modell)", definition: "Restbestand, modelliert", base: 40000000, annualChange: 500000 },
      },
      other: { label: "Sonstige", definition: "Übrige, modelliert", base: 0, annualChange: 0 },
      translations: {
        de: { headline1: "CHINAS", headline2: "ANTRIEBSWANDEL.", heroCopy: "Der Fahrzeugbestand Chinas – amtliche NEV-Anker und klar gekennzeichnete Modellwerte." },
        en: { headline1: "CHINA'S", headline2: "POWERTRAIN SHIFT.", heroCopy: "China’s vehicle fleet, with official NEV anchors and clearly identified modeled values." }
      }
    },
    usa: {
      label: "USA",
      dataDate: "2025-12-31",
      referenceDate: "2025-12-31T00:00:00Z",
      annualSeconds: 365 * 24 * 60 * 60,
      methodTag: "NLR/Experian · 12M",
      lookbackStart: "2024-12-31",
      sourceUrl: "https://afdc.energy.gov/vehicle-registration",
      sourceName: "Quellen: DOE AFDC · NLR/Experian · Modell",
      gridKgCO2PerKwh: 0.350, // EPA eGRID2023 US-average CO2 intensity, converted from lb/MWh
      impact: {
        electric: { annualKm: 17000, comparatorLitresPer100Km: 9.9, comparatorFuel: "petrol", kwhPerKm: 0.19 },
        hybrid: { annualKm: 16000, litresPer100Km: 6.0, fuel: "petrol" },
        petrol: { annualKm: 17000, litresPer100Km: 9.9, fuel: "petrol" },
        diesel: { annualKm: 17000, litresPer100Km: 8.0, fuel: "diesel" }
      },
      globalFleet: { base: 291000000, annualChange: 1700000 },
      categories: {
        electric: { label: "Elektro (BEV)", definition: "EV", base: 5689100, annualChange: 990000 },
        hybrid: { label: "Hybrid inkl. Plug-in", definition: "HEV + PHEV", base: 15695300, annualChange: 2700000 },
        petrol: { label: "Benzin", definition: "Gasoline", base: 240682100, annualChange: -2638400 },
        diesel: { label: "Diesel", definition: "Diesel", base: 7176500, annualChange: 25000 }
      },
      other: { label: "Sonstige", definition: "Alternative fuels/unknown (Restbestand)", base: 21757000, annualChange: 623400 },
      translations: {
        de: { headline1: "DER US-", headline2: "ANTRIEBSWANDEL.", heroCopy: "Der Fahrzeugbestand der USA – aus den jüngsten DOE/AFDC-Bestandsdaten modelliert." },
        en: { headline1: "THE U.S.", headline2: "POWERTRAIN SHIFT.", heroCopy: "The U.S. vehicle fleet, modeled from the latest DOE/AFDC registration data." }
      }
    }
  },

  sources: {
    iea: "https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars",
    ieaH1: "https://www.iea.org/reports/electric-car-markets-in-a-time-of-uncertainty/executive-summary",
    acea: "https://www.acea.auto/publication/economic-and-market-report-global-and-eu-auto-industry-full-year-2025/",
    vda: "https://www.vda.de/de/themen/Automobil-Insight-2025/2025-Elektromobilitaet"
  }
};
window.DRIVECOUNT_DATA.regions.germany = window.DRIVECOUNT_DATA.germany;
