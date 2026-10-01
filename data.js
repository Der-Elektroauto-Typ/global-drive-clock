/* V3.1.1: published anchors, explicit imputation, residual accounting; see model-provenance.json. */
window.DRIVECOUNT_DATA = {
  "modelVersion": "V3.1.1",
  "dataDate": "2025-12-31",
  "referenceDate": "2025-12-31T00:00:00Z",
  "facebookUrl": "https://www.facebook.com/share/18Na7ZUv93/?mibextid=wwXIfr",
  "impactFactors": {
    "petrolKgCO2PerLitre": 2.31,
    "dieselKgCO2PerLitre": 2.68
  },
  "gridKgCO2PerKwh": 0.435,
  "impact": {
    "electric": {
      "annualKm": 12500,
      "comparatorLitresPer100Km": 7.8,
      "comparatorFuel": "petrol",
      "kwhPerKm": 0.2
    },
    "hybrid": {
      "annualKm": 12800,
      "litresPer100Km": 5,
      "fuel": "petrol"
    },
    "petrol": {
      "annualKm": 12000,
      "litresPer100Km": 7.8,
      "fuel": "petrol"
    },
    "diesel": {
      "annualKm": 12000,
      "litresPer100Km": 6.5,
      "fuel": "diesel"
    }
  },
  "globalFleet": {
    "base": 1365051027.7418427,
    "annualChange": 28090678.932308037
  },
  "categories": {
    "electric": {
      "label": "Elektro",
      "definition": "BEV",
      "base": 51000000.0,
      "annualChange": 13000000.0
    },
    "hybrid": {
      "label": "Hybrid",
      "definition": "HEV + PHEV",
      "base": 81925648.8630137,
      "annualChange": 15176662.000473741
    },
    "petrol": {
      "label": "Benzin",
      "definition": "Petrol ICE incl. MHEV",
      "base": 893256757.3465594,
      "annualChange": 2414016.931834294
    },
    "diesel": {
      "label": "Diesel",
      "definition": "Diesel ICE incl. MHEV",
      "base": 324242345.8387236,
      "annualChange": -3000000.0
    }
  },
  "other": {
    "label": "Sonstige",
    "definition": "LPG/CNG/FCEV/other",
    "base": 14626275.693546068,
    "annualChange": 500000.0
  },
  "germany": {
    "label": "Deutschland",
    "dataDate": "2026-07-01",
    "referenceDate": "2026-07-01T00:00:00Z",
    "annualSeconds": 15638400,
    "trendReference": "previous",
    "methodTag": "KBA FZ 27 · 6M",
    "lookbackStart": "2026-01-01",
    "sourceName": "Quellen: KBA · FZ 27 · 6-Monats-Vergleich",
    "gridKgCO2PerKwh": 0.344,
    "impact": {
      "electric": {
        "annualKm": 12500,
        "comparatorLitresPer100Km": 7.7,
        "comparatorFuel": "petrol",
        "kwhPerKm": 0.21
      },
      "hybrid": {
        "annualKm": 12500,
        "litresPer100Km": 5.4,
        "fuel": "petrol"
      },
      "petrol": {
        "annualKm": 10300,
        "litresPer100Km": 7.8,
        "fuel": "petrol"
      },
      "diesel": {
        "annualKm": 17300,
        "litresPer100Km": 7,
        "fuel": "diesel"
      }
    },
    "globalFleet": {
      "base": 49696710,
      "annualChange": 210223
    },
    "categories": {
      "electric": {
        "label": "Elektro (BEV)",
        "definition": "BEV",
        "base": 2365047,
        "annualChange": 330787
      },
      "hybrid": {
        "label": "Hybrid insgesamt inkl. PHEV",
        "definition": "HEV + PHEV",
        "base": 4807029,
        "annualChange": 444466
      },
      "petrol": {
        "label": "Benzin",
        "definition": "Pkw mit Benzinantrieb",
        "base": 29012909,
        "annualChange": -330823
      },
      "diesel": {
        "label": "Diesel",
        "definition": "Pkw mit Dieselantrieb",
        "base": 13157334,
        "annualChange": -228328
      }
    },
    "other": {
      "label": "Gas und Sonstige",
      "definition": "Gas + Sonstige, intern mitgezählt",
      "base": 354391,
      "annualChange": -5879
    }
  },
  "regions": {
    "germany": {
      "label": "Deutschland",
      "dataDate": "2026-07-01",
      "referenceDate": "2026-07-01T00:00:00Z",
      "annualSeconds": 15638400,
      "trendReference": "previous",
      "methodTag": "KBA FZ 27 · 6M",
      "lookbackStart": "2026-01-01",
      "sourceName": "Quellen: KBA · FZ 27 · 6-Monats-Vergleich",
      "gridKgCO2PerKwh": 0.344,
      "impact": {
        "electric": {
          "annualKm": 12500,
          "comparatorLitresPer100Km": 7.7,
          "comparatorFuel": "petrol",
          "kwhPerKm": 0.21
        },
        "hybrid": {
          "annualKm": 12500,
          "litresPer100Km": 5.4,
          "fuel": "petrol"
        },
        "petrol": {
          "annualKm": 10300,
          "litresPer100Km": 7.8,
          "fuel": "petrol"
        },
        "diesel": {
          "annualKm": 17300,
          "litresPer100Km": 7,
          "fuel": "diesel"
        }
      },
      "globalFleet": {
        "base": 49696710,
        "annualChange": 210223
      },
      "categories": {
        "electric": {
          "label": "Elektro (BEV)",
          "definition": "BEV",
          "base": 2365047,
          "annualChange": 330787
        },
        "hybrid": {
          "label": "Hybrid insgesamt inkl. PHEV",
          "definition": "HEV + PHEV",
          "base": 4807029,
          "annualChange": 444466
        },
        "petrol": {
          "label": "Benzin",
          "definition": "Pkw mit Benzinantrieb",
          "base": 29012909,
          "annualChange": -330823
        },
        "diesel": {
          "label": "Diesel",
          "definition": "Pkw mit Dieselantrieb",
          "base": 13157334,
          "annualChange": -228328
        }
      },
      "other": {
        "label": "Gas und Sonstige",
        "definition": "Gas + Sonstige, intern mitgezählt",
        "base": 354391,
        "annualChange": -5879
      }
    },
    "eu": {
      "label": "EU",
      "dataDate": "2025-12-31",
      "referenceDate": "2025-12-31T00:00:00Z",
      "annualSeconds": 31536000,
      "methodTag": "Eurostat + Lückenmodell · 12M",
      "lookbackStart": "2024-12-31",
      "sourceUrl": "https://ec.europa.eu/eurostat/databrowser/view/road_eqs_carpda/default/table?lang=de",
      "sourceName": "Eurostat road_eqs_carpda · ACEA · Lückenmodell",
      "gridKgCO2PerKwh": 0.17,
      "impact": {
        "electric": {
          "annualKm": 10000,
          "comparatorLitresPer100Km": 6.5,
          "comparatorFuel": "petrol",
          "kwhPerKm": 0.21
        },
        "hybrid": {
          "annualKm": 11000,
          "litresPer100Km": 4.8,
          "fuel": "petrol"
        },
        "petrol": {
          "annualKm": 10000,
          "litresPer100Km": 6.5,
          "fuel": "petrol"
        },
        "diesel": {
          "annualKm": 11000,
          "litresPer100Km": 5.5,
          "fuel": "diesel"
        }
      },
      "globalFleet": {
        "base": 263847868,
        "annualChange": 3652031
      },
      "categories": {
        "electric": {
          "label": "Elektro (BEV)",
          "definition": "BEV",
          "base": 7592725,
          "annualChange": 1818546
        },
        "hybrid": {
          "label": "Hybrid",
          "definition": "HEV + PHEV",
          "base": 20954273,
          "annualChange": 4156100
        },
        "petrol": {
          "label": "Benzin",
          "definition": "Pkw Benzin",
          "base": 125797035,
          "annualChange": -1093666
        },
        "diesel": {
          "label": "Diesel",
          "definition": "Pkw Diesel",
          "base": 99061551,
          "annualChange": -1433950
        }
      },
      "other": {
        "label": "Sonstige",
        "definition": "Gas und übrige",
        "base": 10442284,
        "annualChange": 205001
      },
      "translations": {
        "de": {
          "headline1": "EUROPA IM",
          "headline2": "ANTRIEBSWANDEL.",
          "heroCopy": "Der Pkw-Bestand in der Europäischen Union – mit den jüngsten verfügbaren Jahresdaten."
        },
        "en": {
          "headline1": "EUROPE IN",
          "headline2": "POWERTRAIN SHIFT.",
          "heroCopy": "The European Union passenger-car fleet, using the latest available annual data."
        }
      }
    },
    "china": {
      "label": "China",
      "dataDate": "2026-06-30",
      "referenceDate": "2026-06-30T00:00:00Z",
      "annualSeconds": 31536000,
      "methodTag": "MPS + HEV/ICE-Szenario · 12M",
      "lookbackStart": "2025-06-30",
      "sourceUrl": "https://english.www.gov.cn/archive/statistics/202607/15/content_WS6a56dd6ec6d00ca5f9a0c307.html",
      "sourceName": "Quellen: MPS · Staatsrat China · Modell",
      "gridKgCO2PerKwh": 0.53,
      "impact": {
        "electric": {
          "annualKm": 8000,
          "comparatorLitresPer100Km": 5.3,
          "comparatorFuel": "petrol",
          "kwhPerKm": 0.16
        },
        "hybrid": {
          "annualKm": 9000,
          "litresPer100Km": 4.5,
          "fuel": "petrol"
        },
        "petrol": {
          "annualKm": 8000,
          "litresPer100Km": 5.3,
          "fuel": "petrol"
        },
        "diesel": {
          "annualKm": 10000,
          "litresPer100Km": 6.5,
          "fuel": "diesel"
        }
      },
      "globalFleet": {
        "base": 371000000,
        "annualChange": 12000000
      },
      "categories": {
        "electric": {
          "label": "Elektro (BEV)",
          "definition": "BEV",
          "base": 33675000,
          "annualChange": 8135000
        },
        "hybrid": {
          "label": "Hybrid / NEV-Rest",
          "definition": "NEV residual (PHEV/EREV/FCEV) + assumed HEV 6m, change 1.5m/year",
          "base": 21295000,
          "annualChange": 5565000
        },
        "petrol": {
          "label": "Benzin (Modell)",
          "definition": "Restbestand, modelliert",
          "base": 276030000,
          "annualChange": -2200000
        },
        "diesel": {
          "label": "Diesel (Modell)",
          "definition": "Restbestand, modelliert",
          "base": 40000000,
          "annualChange": 500000
        }
      },
      "other": {
        "label": "Sonstige",
        "definition": "Übrige, modelliert",
        "base": 0,
        "annualChange": 0
      },
      "translations": {
        "de": {
          "headline1": "CHINAS",
          "headline2": "ANTRIEBSWANDEL.",
          "heroCopy": "Der Fahrzeugbestand Chinas – amtliche NEV-Anker und klar gekennzeichnete Modellwerte."
        },
        "en": {
          "headline1": "CHINA'S",
          "headline2": "POWERTRAIN SHIFT.",
          "heroCopy": "China’s vehicle fleet, with official NEV anchors and clearly identified modeled values."
        }
      }
    },
    "usa": {
      "label": "USA",
      "dataDate": "2025-12-31",
      "referenceDate": "2025-12-31T00:00:00Z",
      "annualSeconds": 31536000,
      "methodTag": "AFDC gleicher Datenstand · 12M",
      "lookbackStart": "2024-12-31",
      "sourceUrl": "https://afdc.energy.gov/vehicle-registration",
      "sourceName": "Quellen: DOE AFDC · NLR/Experian · Modell",
      "gridKgCO2PerKwh": 0.35,
      "impact": {
        "electric": {
          "annualKm": 17000,
          "comparatorLitresPer100Km": 9.9,
          "comparatorFuel": "petrol",
          "kwhPerKm": 0.19
        },
        "hybrid": {
          "annualKm": 16000,
          "litresPer100Km": 6,
          "fuel": "petrol"
        },
        "petrol": {
          "annualKm": 17000,
          "litresPer100Km": 9.9,
          "fuel": "petrol"
        },
        "diesel": {
          "annualKm": 17000,
          "litresPer100Km": 8,
          "fuel": "diesel"
        }
      },
      "globalFleet": {
        "base": 293841300,
        "annualChange": 7438647.932308034
      },
      "categories": {
        "electric": {
          "label": "Elektro (BEV)",
          "definition": "EV",
          "base": 5689100,
          "annualChange": 985970.9062948823
        },
        "hybrid": {
          "label": "Hybrid inkl. Plug-in",
          "definition": "HEV + PHEV",
          "base": 15695300,
          "annualChange": 2367157.0004737405
        },
        "petrol": {
          "label": "Benzin",
          "definition": "Gasoline + E85-capable vehicles",
          "base": 260243200,
          "annualChange": 2880734.9066104107
        },
        "diesel": {
          "label": "Diesel",
          "definition": "Diesel + biodiesel-capable vehicles",
          "base": 10551500,
          "annualChange": 1101045.6931693084
        }
      },
      "other": {
        "label": "Sonstige",
        "definition": "Alternative fuels/unknown (Restbestand)",
        "base": 1662200,
        "annualChange": 103739.42575969265
      },
      "translations": {
        "de": {
          "headline1": "DER US-",
          "headline2": "ANTRIEBSWANDEL.",
          "heroCopy": "Der Fahrzeugbestand der USA – aus den jüngsten DOE/AFDC-Bestandsdaten modelliert."
        },
        "en": {
          "headline1": "THE U.S.",
          "headline2": "POWERTRAIN SHIFT.",
          "heroCopy": "The U.S. vehicle fleet, modeled from the latest DOE/AFDC registration data."
        }
      }
    },
    "rest": {
      "modelVersion": "V3.1.1",
      "dataDate": "2025-12-31",
      "referenceDate": "2025-12-31T00:00:00Z",
      "facebookUrl": "https://www.facebook.com/share/18Na7ZUv93/?mibextid=wwXIfr",
      "impactFactors": {
        "petrolKgCO2PerLitre": 2.31,
        "dieselKgCO2PerLitre": 2.68
      },
      "gridKgCO2PerKwh": 0.435,
      "impact": {
        "electric": {
          "annualKm": 12500,
          "comparatorLitresPer100Km": 7.8,
          "comparatorFuel": "petrol",
          "kwhPerKm": 0.2
        },
        "hybrid": {
          "annualKm": 12800,
          "litresPer100Km": 5,
          "fuel": "petrol"
        },
        "petrol": {
          "annualKm": 12000,
          "litresPer100Km": 7.8,
          "fuel": "petrol"
        },
        "diesel": {
          "annualKm": 12000,
          "litresPer100Km": 6.5,
          "fuel": "diesel"
        }
      },
      "globalFleet": {
        "base": 442312544.6733496,
        "annualChange": 5000000
      },
      "categories": {
        "electric": {
          "label": "Elektro",
          "definition": "BEV",
          "base": 8077243.493150681,
          "annualChange": 2060483.0937051177
        },
        "hybrid": {
          "label": "Hybrid",
          "definition": "Japan March-2025 hybrid anchor + other HEV scenario 10m + IEA PHEV residual; modeled trend",
          "base": 26740706,
          "annualChange": 3088405
        },
        "petrol": {
          "label": "Benzin",
          "definition": "Petrol ICE incl. MHEV",
          "base": 230095563.44244984,
          "annualChange": 2826948.0252238833
        },
        "diesel": {
          "label": "Diesel",
          "definition": "Diesel ICE incl. MHEV",
          "base": 174877240.04420304,
          "annualChange": -3167095.6931693084
        }
      },
      "other": {
        "label": "Sonstige",
        "definition": "LPG/CNG/FCEV/other",
        "base": 2521791.693546068,
        "annualChange": 191259.57424030732
      },
      "sources": {
        "iea": "https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars",
        "ieaH1": "https://www.iea.org/reports/electric-car-markets-in-a-time-of-uncertainty/executive-summary",
        "acea": "https://www.acea.auto/publication/economic-and-market-report-global-and-eu-auto-industry-full-year-2025/",
        "vda": "https://www.vda.de/de/themen/Automobil-Insight-2025/2025-Elektromobilitaet"
      },
      "annualSeconds": 31536000,
      "lookbackStart": "2024-12-31",
      "researchDate": "2026-10-01",
      "methodTag": "IEA BEV + Kalibrierung / Annahmen",
      "sourceName": "IEA · Eurostat · KBA · AFDC · MPS · Modell",
      "label": "Rest der Welt"
    },
    "euRest": {
      "label": "EU ohne Deutschland",
      "dataDate": "2025-12-31",
      "referenceDate": "2025-12-31T00:00:00Z",
      "annualSeconds": 31536000,
      "methodTag": "EU minus Deutschland",
      "lookbackStart": "2024-12-31",
      "sourceUrl": "https://ec.europa.eu/eurostat/databrowser/view/road_eqs_carpda/default/table?lang=de",
      "sourceName": "Eurostat road_eqs_carpda · ACEA · Lückenmodell",
      "gridKgCO2PerKwh": 0.17,
      "impact": {
        "electric": {
          "annualKm": 10000,
          "comparatorLitresPer100Km": 6.5,
          "comparatorFuel": "petrol",
          "kwhPerKm": 0.21
        },
        "hybrid": {
          "annualKm": 11000,
          "litresPer100Km": 4.8,
          "fuel": "petrol"
        },
        "petrol": {
          "annualKm": 10000,
          "litresPer100Km": 6.5,
          "fuel": "petrol"
        },
        "diesel": {
          "annualKm": 11000,
          "litresPer100Km": 5.5,
          "fuel": "diesel"
        }
      },
      "globalFleet": {
        "base": 214362542.45303866,
        "annualChange": 3228100.640883978
      },
      "categories": {
        "electric": {
          "label": "Elektro (BEV)",
          "definition": "BEV",
          "base": 5560292.552486188,
          "annualChange": 1151489.3425414364
        },
        "hybrid": {
          "label": "Hybrid",
          "definition": "HEV + PHEV",
          "base": 16594165.61325967,
          "annualChange": 3259801.1602209946
        },
        "petrol": {
          "label": "Benzin",
          "definition": "Pkw Benzin",
          "base": 96451475.24861878,
          "annualChange": -426536.74585635366
        },
        "diesel": {
          "label": "Diesel",
          "definition": "Pkw Diesel",
          "base": 85674627.51933701,
          "annualChange": -973509.5580110496
        }
      },
      "other": {
        "label": "Sonstige",
        "definition": "Gas und übrige",
        "base": 10081981.519337017,
        "annualChange": 216856.44198895028
      },
      "translations": {
        "de": {
          "headline1": "EUROPA IM",
          "headline2": "ANTRIEBSWANDEL.",
          "heroCopy": "Der Pkw-Bestand in der Europäischen Union – mit den jüngsten verfügbaren Jahresdaten."
        },
        "en": {
          "headline1": "EUROPE IN",
          "headline2": "POWERTRAIN SHIFT.",
          "heroCopy": "The European Union passenger-car fleet, using the latest available annual data."
        }
      }
    }
  },
  "sources": {
    "iea": "https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars",
    "ieaH1": "https://www.iea.org/reports/electric-car-markets-in-a-time-of-uncertainty/executive-summary",
    "acea": "https://www.acea.auto/publication/economic-and-market-report-global-and-eu-auto-industry-full-year-2025/",
    "vda": "https://www.vda.de/de/themen/Automobil-Insight-2025/2025-Elektromobilitaet"
  },
  "annualSeconds": 31536000,
  "lookbackStart": "2024-12-31",
  "researchDate": "2026-10-01",
  "methodTag": "IEA + regionale Bilanz + Restmodell",
  "sourceName": "IEA · Eurostat · KBA · AFDC · MPS · Modell",
  "trendReference": "previous"
};
