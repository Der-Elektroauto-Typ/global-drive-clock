(() => {
  "use strict";

  const DATA = window.DRIVECOUNT_DATA;
  if (!DATA) {
    console.error("DRIVECOUNT_DATA missing.");
    return;
  }

  const TRANSLATIONS = {
    de: {
      flag: "🇩🇪", code: "DE", locale: "de-DE",
      liveModel: "LIVE-MODELL",
      headline1: "DER WELTWEITE",
      headline2: "ANTRIEBSWANDEL.",
      modeGlobal: 'GLOBAL',
      modeGermany: 'DEUTSCHLAND',
      modeEU: "EU", modeChina: "CHINA", modeUSA: "USA",
      germanyHeadline1: 'DER ANTRIEBSWANDEL',
      germanyHeadline2: 'IN DEUTSCHLAND.',
      germanyHeroCopy: 'Pkw-Bestand und Antriebswechsel in Deutschland – auf Basis der KBA-Bestandszahlen.',
      germanySource: 'Quellen: Kraftfahrt-Bundesamt (KBA) · FZ 27 · Modell',
      germanyModelHeading: 'Deutschland-Modell',
      regionModelHeading: 'Regionalmodelle',
      germanyBevLabel: 'REINE BATTERIEFAHRZEUGE',
      germanyHybridLabel: 'HYBRID INKL. PLUG-IN',
      germanyIceLabel: 'VERBRENNUNGSMOTOR',
      germanyMethodText: 'Das Deutschland-Modell nutzt die quartalsweisen Pkw-Bestände des Kraftfahrt-Bundesamts (KBA), FZ 27. Referenz ist der 1. Juli 2026. Die Zählrate basiert auf der beobachteten Bestandsänderung vom 1. Januar bis 1. Juli 2026 und verteilt diese gleichmäßig auf 181 Tage. Das bildet die jüngste verfügbare Entwicklung zeitnäher ab als ein 12-Monats-Vergleich, kann aber stärker auf einzelne Quartale reagieren; die 12-Monatsrate dient als Plausibilitätsvergleich. „Hybrid insgesamt“ enthält Plug-in-Hybride. Gas und Sonstige sind im Restbestand enthalten, damit die Gesamtzahl aufgeht. Der laufende Zähler ist eine lineare Schätzung, keine Live-Registrierung.',
      kbaDataset: 'KBA · FZ 27 · Quartalsbestand 2026',
      kbaOverview: 'KBA · Produktübersicht FZ 27',
      heroCopy: "Rund um die Uhr verändert sich der globale Fahrzeugbestand. Diese Uhr macht den Wandel sichtbar.",
      electric: "ELEKTRO",
      hybrid: "HYBRID",
      petrol: "BENZIN",
      diesel: "DIESEL",
      vehiclesPerSecond: "Fahrzeuge / Sekunde",
      impactShort: '≈ Modellierter Kraftstoff- und betrieblicher CO₂-Fluss auf Basis des jeweiligen Fahrzeugbestands.',
      impactHeading: 'Kraftstoff- und CO₂-Modell', impactWhatTitle: 'Anzeige', impactCalcTitle: 'Berechnung', impactBevTitle: 'BEV-Vergleich', impactSourcesTitle: 'Quellen und Grenzen', impactUnitsTitle: 'Einheiten',
      impactCalc: 'Fahrzeugbestand × km/Jahr × L/100 km ÷ 100 ÷ Sekunden/Jahr ergibt Liter/s; Kraftstoff × kg CO₂/L ergibt Auspuff-CO₂. Für BEV: vermiedene Benziner-Emissionen minus BEV-kWh × regionaler Jahresmittel-Stromfaktor. Jahresmengen werden gleichmäßig verteilt; keine Messung tatsächlicher Fahrten.',
      impactBev: 'BEV: Netto-Betriebsvergleich pro angenommener gleicher Fahrleistung: vermiedener direkter Auspuffausstoß eines vergleichbaren Benziners minus Emissionen des Ladestroms aus dem regionalen Jahresmittel-Strommix. Fahrzeugherstellung und vorgelagerte Kraftstoffemissionen sind nicht enthalten.',
      impactSources: 'Deutschland verwendet KBA-Bestände und Destatis-Fahrleistung/Verbrauch. EU kombiniert Eurostat-Verkehrsleistung/Energie mit EEA-Realdaten neuer Fahrzeuge. USA nutzt DOE/EPA-Daten; Global/China IEA-Annahmen und nationale Anker. Wo vollständige Flottenmessungen fehlen, sind Parameter Modellannahmen. Hybridwerte – besonders Plug-in – sind wegen Ladeverhalten unsicherer. Hybrid zeigt Kraftstoff und Auspuff-CO₂; zusätzlicher Ladestrom von Plug-in-Hybriden ist mangels belastbarer Aufteilung noch nicht enthalten.',
      impactSessionTitle: 'KRAFTSTOFF / CO₂ (MODELLSCHÄTZUNG)',
      impactSinceData: 'Seit Datenstand', millionLitres: 'Millionen Liter', thousandLitres: 'Tausend Liter', tonnesCO2: 'Tonnen CO₂', kilogramsCO2: 'Kilogramm CO₂', litres: 'Liter',
      impactParameterNote: 'Die BEV-Spalten zeigen km/Jahr, Vergleichsverbrauch in L/100 km und BEV-Verbrauch in kWh/100 km. Die Stromfaktoren stammen aus den jeweils neuesten hier verwendeten Veröffentlichungsjahren (Global/EU/China 2025, Deutschland 2025 (vorläufig); USA 2023) und sind Jahresmittel der Erzeugung, keine marginalen Ladefaktoren. Kraftstofffaktoren: Benzin 2,31 kg CO₂/L, Diesel 2,68 kg CO₂/L. Verbrauch und Fahrleistung sind gerundete Modell-Baselines, keine Messung jedes zugelassenen Fahrzeugs; die Sicherheit unterscheidet sich je Region.', impactRegion: 'Region', impactBevCol: 'BEV: km/Jahr · ICE L/100 km · BEV kWh/100 km', impactGridCol: 'Strommix g CO₂/kWh', impactParamsTitle: 'Verwendete Modellparameter je Region: Jahresfahrleistung und Verbrauch',
      impactTableUnitNote: 'Benzin-, Diesel- und Hybridzellen: km/Jahr · L/100 km. BEV-Zelle: km/Jahr · Vergleichs-ICE L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV*', impactHybrid: 'Hybrid', impactPetrol: 'Benzin', impactDiesel: 'Diesel', impactAvoided: 'vermieden*', impactProduced: '*erzeugt',
      bevLabel: "REINE BATTERIEFAHRZEUGE",
      hybridLabel: "HEV + PLUG-IN-HYBRID",
      iceLabel: "VERBRENNUNGSMOTOR",
      liveSession: "LIVE SESSION",
      sinceOpened: "SEIT DU DIESE SEITE GEÖFFNET HAST",
      observationTime: "Beobachtungszeit:",
      modeledEstimate: "MODELLIERTE ECHTZEITSCHÄTZUNG",
      methodDetails: "DATEN & METHODIK",
      methodText: "Die Zähler stellen keine sekundengenau erhobenen Zulassungsdaten dar. Sie interpolieren den weltweiten Pkw-Bestand anhand veröffentlichter Bestands-, Absatz- und Marktdaten. Die Werte für Benzin, Diesel und Hybrid sind Modellwerte.",
      sourceBase: "Quellenbasis: IEA · ACEA · VDA/UBA · Modell",
      dataModel: "Datenmodell",
      dataAsOf: "Stand",
      dataIdeaBy: "EINE DATENIDEE VON",
      brandCopy: "Elektromobilität. Fakten. Alltag.",
      facebook: "AUF FACEBOOK FOLGEN →",
      footerNote: "Modellierte Echtzeitschätzung – keine amtliche Live-Zählung"
    },
    en: {
      flag: "🇬🇧", code: "EN", locale: "en-GB",
      liveModel: "LIVE MODEL",
      headline1: "THE GLOBAL",
      headline2: "POWERTRAIN SHIFT.",
      modeGlobal: 'GLOBAL',
      modeGermany: 'GERMANY',
      modeEU: "EU", modeChina: "CHINA", modeUSA: "USA",
      germanyHeadline1: "GERMANY'S",
      germanyHeadline2: 'POWERTRAIN SHIFT.',
      germanyHeroCopy: 'Germany’s passenger-car fleet and powertrain shift, based on official KBA stock data.',
      germanySource: 'Sources: Federal Motor Transport Authority (KBA) · FZ 27 · model',
      germanyModelHeading: 'Germany model',
      regionModelHeading: 'Regional models',
      germanyBevLabel: 'BATTERY ELECTRIC VEHICLES',
      germanyHybridLabel: 'HYBRID INCLUDING PLUG-IN',
      germanyIceLabel: 'COMBUSTION ENGINE',
      germanyMethodText: 'Germany mode uses the quarterly passenger-car stock in the Federal Motor Transport Authority (KBA) FZ 27 data. The reference is 1 July 2026. The counter rate uses the observed stock change from 1 January to 1 July 2026, spread evenly over 181 days. This reflects the latest available trend more closely than a 12-month comparison, but can react more to individual quarters; the 12-month rate remains a plausibility check. “Hybrid total” includes plug-in hybrids. Gas and other vehicles are included in the residual so totals reconcile. The running counter is a linear estimate, not a live registration feed.',
      kbaDataset: 'KBA · FZ 27 · quarterly fleet 2026',
      kbaOverview: 'KBA · FZ 27 data overview',
      heroCopy: "The global vehicle fleet changes around the clock. This clock makes the transition visible.",
      electric: "ELECTRIC",
      hybrid: "HYBRID",
      petrol: "PETROL",
      diesel: "DIESEL",
      vehiclesPerSecond: "vehicles / second",
      impactShort: '≈ Modeled fuel and operational CO₂ flow based on each region’s vehicle stock.',
      impactHeading: 'Fuel and CO₂ model', impactWhatTitle: 'Display', impactCalcTitle: 'Calculation', impactBevTitle: 'BEV comparison', impactSourcesTitle: 'Sources and limits', impactUnitsTitle: 'Units',
      impactCalc: 'Vehicle stock × km/year × L/100 km ÷ 100 ÷ seconds/year gives L/s; fuel × kg CO₂/L gives tailpipe CO₂. For BEVs: comparator gasoline emissions avoided minus BEV kWh × regional annual-average grid factor. Annual flows are spread evenly; driving is not measured.',
      impactBev: 'BEV: net operational comparison for the same assumed distance: direct tailpipe emissions of a comparable gasoline car avoided minus charging emissions using the region’s annual-average grid mix. Vehicle manufacturing and upstream fuel emissions are excluded.',
      impactSources: 'Germany uses KBA stock and Destatis mileage/fuel data. The EU combines Eurostat road activity/energy with EEA real-world data for newer cars. The U.S. uses DOE/EPA data; Global/China use IEA assumptions and national anchors. Where full-fleet measurements are unavailable, parameters are model assumptions. Hybrid values, especially plug-in, are more uncertain due to charging behavior. Hybrid shows fuel and tailpipe CO₂; charging electricity for plug-in hybrids is not yet included because a reliable fleet-wide split is unavailable.',
      impactSessionTitle: 'FUEL / CO₂ (MODELED ESTIMATE)',
      impactSinceData: 'Since data date', millionLitres: 'million litres', thousandLitres: 'thousand litres', tonnesCO2: 'tonnes CO₂', kilogramsCO2: 'kilograms CO₂', litres: 'litres',
      impactParameterNote: 'The BEV columns show km/year, comparator fuel use in L/100 km and BEV use in kWh/100 km. Grid factors use the latest publication years used here (global/EU/China 2025, Germany 2025 (provisional); U.S. 2023) and are annual-average generation factors, not marginal charging factors. Fuel factors: petrol 2.31 kg CO₂/L, diesel 2.68 kg CO₂/L. Fuel-use and mileage values are rounded model baselines, not measurements of every registered vehicle; confidence varies by region.', impactRegion: 'Region', impactBevCol: 'BEV: km/year · ICE L/100 km · BEV kWh/100 km', impactGridCol: 'Grid g CO₂/kWh', impactParamsTitle: 'Model inputs by region: annual distance and consumption',
      impactTableUnitNote: 'Petrol, diesel and hybrid cells: km/year · L/100 km. BEV cell: km/year · comparator ICE L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV*', impactHybrid: 'Hybrid', impactPetrol: 'Petrol', impactDiesel: 'Diesel', impactAvoided: 'avoided*', impactProduced: '*emitted',
      bevLabel: "BATTERY ELECTRIC VEHICLES",
      hybridLabel: "HEV + PLUG-IN HYBRID",
      iceLabel: "COMBUSTION ENGINE",
      liveSession: "LIVE SESSION",
      sinceOpened: "SINCE YOU OPENED THIS PAGE",
      observationTime: "Observation time:",
      modeledEstimate: "MODELED REAL-TIME ESTIMATE",
      methodDetails: "DATA & METHODOLOGY",
      methodText: "The counters are not second-by-second official registration data. They interpolate the global passenger-car fleet using published stock, sales and market data. Petrol, diesel and hybrid values are model estimates.",
      sourceBase: "Source base: IEA · ACEA · VDA/UBA · model",
      dataModel: "Data model",
      dataAsOf: "As of",
      dataIdeaBy: "A DATA IDEA BY",
      brandCopy: "Electric mobility. Facts. Everyday life.",
      facebook: "FOLLOW ON FACEBOOK →",
      footerNote: "Modeled real-time estimate – not an official live count"
    },
    fr: {
      flag: "🇫🇷", code: "FR", locale: "fr-FR",
      liveModel: "MODÈLE EN DIRECT",
      headline1: "LA TRANSITION",
      headline2: "MONDIALE DES MOTORISATIONS.",
      modeGlobal: 'MONDE',
      modeGermany: 'ALLEMAGNE',
      modeEU: "UE", modeChina: "CHINE", modeUSA: "USA",
      germanyHeadline1: 'LE PARC AUTO',
      germanyHeadline2: 'ALLEMAND EN TRANSITION.',
      germanyHeroCopy: 'Le parc de voitures particulières et sa transition en Allemagne, selon les données officielles du KBA.',
      germanySource: 'Sources : KBA · FZ 27 · modèle',
      germanyModelHeading: 'Modèle pour l’Allemagne',
      germanyBevLabel: 'VÉHICULES 100 % ÉLECTRIQUES',
      germanyHybridLabel: 'HYBRIDE, RECHARGEABLE INCLUSE',
      germanyIceLabel: 'MOTEUR THERMIQUE',
      germanyMethodText: 'Le mode Allemagne utilise les stocks trimestriels de voitures particulières du jeu FZ 27 de l’Office fédéral allemand des véhicules (KBA). La référence est le 1er juillet 2026. Le rythme du compteur repose sur la variation observée du 1er janvier au 1er juillet 2026, répartie uniformément sur 181 jours. Cette période reflète plus rapidement la tendance disponible qu’une comparaison sur 12 mois, mais peut réagir davantage aux variations trimestrielles ; le taux sur 12 mois sert de contrôle de cohérence. « Hybride total » inclut les hybrides rechargeables. Le gaz et les autres véhicules sont inclus dans le reste pour équilibrer le total. Le compteur est une estimation linéaire, pas un flux d’immatriculations en direct.',
      kbaDataset: 'KBA · FZ 27 · parc trimestriel 2026',
      kbaOverview: 'KBA · aperçu FZ 27',
      heroCopy: "Le parc automobile mondial évolue en permanence. Cette horloge rend cette transition visible.",
      electric: "ÉLECTRIQUE",
      hybrid: "HYBRIDE",
      petrol: "ESSENCE",
      diesel: "DIESEL",
      vehiclesPerSecond: "véhicules / seconde",
      impactShort: '≈ Flux modélisé de carburant et de CO₂ opérationnel selon le parc régional.',
      impactHeading: 'Modèle carburant et CO₂', impactWhatTitle: 'Affichage', impactCalcTitle: 'Calcul', impactBevTitle: 'Comparaison BEV', impactSourcesTitle: 'Sources et limites', impactUnitsTitle: 'Unités',
      impactCalc: 'Parc × km/an × L/100 km ÷ 100 ÷ secondes/an donne les L/s ; carburant × kg CO₂/L donne le CO₂ à l’échappement. Pour les BEV : émissions essence de référence évitées moins kWh BEV × facteur annuel moyen régional du réseau. Flux répartis uniformément, trajets non mesurés.',
      impactBev: 'BEV : comparaison opérationnelle nette à distance supposée égale : émissions directes évitées d’une voiture essence comparable moins celles de la recharge selon le mix électrique annuel moyen régional. Fabrication et amont des carburants exclus.',
      impactSources: 'Allemagne : parc KBA et données Destatis. UE : activité/énergie Eurostat et mesures réelles EEA des véhicules récents. États-Unis : DOE/EPA ; monde/Chine : hypothèses IEA et repères nationaux. En l’absence de mesures complètes de la flotte, les paramètres sont modélisés. Les hybrides rechargeables sont plus incertains selon leur recharge. Les hybrides montrent le carburant et le CO₂ à l’échappement ; l’électricité de recharge des hybrides rechargeables n’est pas incluse faute de ventilation fiable du parc.',
      impactSessionTitle: 'CARBURANT / CO₂ (ESTIMATION MODÉLISÉE)',
      impactSinceData: 'Depuis la date des données', millionLitres: 'millions de litres', thousandLitres: 'milliers de litres', tonnesCO2: 'tonnes de CO₂', kilogramsCO2: 'kilogrammes de CO₂', litres: 'litres',
      impactParameterNote: 'Les colonnes BEV indiquent km/an, consommation du véhicule thermique de comparaison en L/100 km et consommation BEV en kWh/100 km. Les facteurs électriques utilisent les dernières années publiées retenues ici (monde/UE/Chine 2025 ; Allemagne 2025 (provisoire) ; États-Unis 2023) et représentent des moyennes annuelles de production, pas des facteurs marginaux de recharge. Facteurs carburant : essence 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. Les valeurs sont des bases modélisées arrondies, pas des mesures de chaque véhicule ; la fiabilité varie selon la région.', impactRegion: 'Région', impactBevCol: 'BEV : km/an · thermique L/100 km · BEV kWh/100 km', impactGridCol: 'Réseau g CO₂/kWh', impactParamsTitle: 'Paramètres du modèle par région : distance annuelle et consommation',
      impactTableUnitNote: 'Cellules essence, diesel et hybride : km/an · L/100 km. Cellule BEV : km/an · thermique comparable L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV*', impactHybrid: 'Hybride', impactPetrol: 'Essence', impactDiesel: 'Diesel', impactAvoided: 'évités*', impactProduced: '*émis',
      bevLabel: "VÉHICULES 100 % ÉLECTRIQUES",
      hybridLabel: "HEV + HYBRIDE RECHARGEABLE",
      iceLabel: "MOTEUR THERMIQUE",
      liveSession: "SESSION EN DIRECT",
      sinceOpened: "DEPUIS L’OUVERTURE DE CETTE PAGE",
      observationTime: "Temps d’observation :",
      modeledEstimate: "ESTIMATION MODÉLISÉE EN TEMPS RÉEL",
      methodDetails: "DONNÉES & MÉTHODOLOGIE",
      methodText: "Les compteurs ne sont pas des immatriculations officielles relevées seconde par seconde. Ils interpolent le parc mondial de voitures particulières à partir de données publiées sur le parc, les ventes et le marché. Les valeurs essence, diesel et hybride sont des estimations de modèle.",
      sourceBase: "Sources : IEA · ACEA · VDA/UBA · modèle",
      dataModel: "Modèle de données",
      dataAsOf: "Données au",
      dataIdeaBy: "UNE IDÉE DE DONNÉES PAR",
      brandCopy: "Mobilité électrique. Faits. Quotidien.",
      facebook: "SUIVRE SUR FACEBOOK →",
      footerNote: "Estimation modélisée en temps réel – pas un comptage officiel en direct"
    },
    es: {
      flag: "🇪🇸", code: "ES", locale: "es-ES",
      liveModel: "MODELO EN DIRECTO",
      headline1: "EL CAMBIO MUNDIAL",
      headline2: "DE PROPULSIÓN.",
      modeGlobal: 'GLOBAL',
      modeGermany: 'ALEMANIA',
      modeEU: "UE", modeChina: "CHINA", modeUSA: "EE. UU.",
      germanyHeadline1: 'EL CAMBIO',
      germanyHeadline2: 'DE PROPULSIÓN EN ALEMANIA.',
      germanyHeroCopy: 'El parque de turismos y su transición en Alemania, según los datos oficiales del KBA.',
      germanySource: 'Fuentes: KBA · FZ 27 · modelo',
      germanyModelHeading: 'Modelo de Alemania',
      germanyBevLabel: 'VEHÍCULOS ELÉCTRICOS DE BATERÍA',
      germanyHybridLabel: 'HÍBRIDO INCL. ENCHUFABLE',
      germanyIceLabel: 'MOTOR DE COMBUSTIÓN',
      germanyMethodText: 'El modo Alemania utiliza el parque trimestral de turismos de la estadística FZ 27 del organismo federal alemán de vehículos (KBA). La referencia es el 1 de julio de 2026. La velocidad del contador se basa en el cambio observado entre el 1 de enero y el 1 de julio de 2026, repartido uniformemente en 181 días. Así refleja antes la tendencia disponible que una comparación de 12 meses, aunque puede reaccionar más a variaciones trimestrales; la tasa de 12 meses sirve como control de plausibilidad. «Híbrido total» incluye los híbridos enchufables. El gas y otros vehículos se incluyen en el resto para cuadrar el total. El contador es una estimación lineal, no un registro en directo.',
      kbaDataset: 'KBA · FZ 27 · parque trimestral 2026',
      kbaOverview: 'KBA · información de FZ 27',
      heroCopy: "El parque mundial de vehículos cambia a todas horas. Este reloj hace visible esa transición.",
      electric: "ELÉCTRICO",
      hybrid: "HÍBRIDO",
      petrol: "GASOLINA",
      diesel: "DIÉSEL",
      vehiclesPerSecond: "vehículos / segundo",
      impactShort: '≈ Flujo modelado de combustible y CO₂ operativo según el parque regional.',
      impactHeading: 'Modelo de combustible y CO₂', impactWhatTitle: 'Visualización', impactCalcTitle: 'Cálculo', impactBevTitle: 'Comparación BEV', impactSourcesTitle: 'Fuentes y límites', impactUnitsTitle: 'Unidades',
      impactCalc: 'Parque × km/año × L/100 km ÷ 100 ÷ segundos/año da L/s; combustible × kg CO₂/L da CO₂ de escape. Para BEV: emisiones de gasolina comparables evitadas menos kWh BEV × factor anual medio regional de la red. Flujos anuales repartidos uniformemente; no se miden trayectos.',
      impactBev: 'BEV: comparación operativa neta para la misma distancia estimada: emisiones directas evitadas de un coche de gasolina comparable menos las de la recarga según la media anual regional de la red. Se excluyen fabricación y emisiones previas del combustible.',
      impactSources: 'Alemania: parque KBA y datos Destatis. UE: actividad/energía Eurostat y datos reales EEA de coches recientes. EE. UU.: DOE/EPA; global/China: supuestos IEA y referencias nacionales. Sin mediciones completas de la flota, los parámetros son supuestos del modelo. Los híbridos enchufables son más inciertos por la carga. Los híbridos muestran combustible y CO₂ de escape; no se incluye la electricidad de los enchufables porque falta un desglose fiable de la flota.',
      impactSessionTitle: 'COMBUSTIBLE / CO₂ (ESTIMACIÓN MODELADA)',
      impactSinceData: 'Desde la fecha de datos', millionLitres: 'millones de litros', thousandLitres: 'miles de litros', tonnesCO2: 'toneladas de CO₂', kilogramsCO2: 'kilogramos de CO₂', litres: 'litros',
      impactParameterNote: 'Las columnas BEV muestran km/año, consumo del vehículo térmico comparador en L/100 km y consumo BEV en kWh/100 km. Los factores eléctricos usan los últimos años publicados empleados aquí (global/UE/China 2025; Alemania 2025 (provisional); EE. UU. 2023) y son promedios anuales de generación, no factores marginales de recarga. Factores de combustible: gasolina 2,31 kg CO₂/L, diésel 2,68 kg CO₂/L. Son valores base redondeados del modelo, no mediciones de cada vehículo; la confianza varía por región.', impactRegion: 'Región', impactBevCol: 'BEV: km/año · combustión L/100 km · BEV kWh/100 km', impactGridCol: 'Red g CO₂/kWh', impactParamsTitle: 'Parámetros del modelo por región: distancia anual y consumo',
      impactTableUnitNote: 'Celdas gasolina, diésel e híbrido: km/año · L/100 km. Celda BEV: km/año · combustión comparable L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV*', impactHybrid: 'Híbrido', impactPetrol: 'Gasolina', impactDiesel: 'Diésel', impactAvoided: 'evitado*', impactProduced: '*emitido',
      bevLabel: "VEHÍCULOS ELÉCTRICOS DE BATERÍA",
      hybridLabel: "HEV + HÍBRIDO ENCHUFABLE",
      iceLabel: "MOTOR DE COMBUSTIÓN",
      liveSession: "SESIÓN EN DIRECTO",
      sinceOpened: "DESDE QUE ABRISTE ESTA PÁGINA",
      observationTime: "Tiempo de observación:",
      modeledEstimate: "ESTIMACIÓN MODELADA EN TIEMPO REAL",
      methodDetails: "DATOS & METODOLOGÍA",
      methodText: "Los contadores no son datos oficiales de matriculación medidos segundo a segundo. Interpolan el parque mundial de turismos a partir de datos publicados de parque, ventas y mercado. Los valores de gasolina, diésel e híbridos son estimaciones del modelo.",
      sourceBase: "Fuentes: IEA · ACEA · VDA/UBA · modelo",
      dataModel: "Modelo de datos",
      dataAsOf: "Datos a",
      dataIdeaBy: "UNA IDEA DE DATOS DE",
      brandCopy: "Movilidad eléctrica. Datos. Vida diaria.",
      facebook: "SEGUIR EN FACEBOOK →",
      footerNote: "Estimación modelada en tiempo real – no es un recuento oficial en directo"
    },
    it: {
      flag: "🇮🇹", code: "IT", locale: "it-IT",
      liveModel: "MODELLO LIVE",
      headline1: "LA TRANSIZIONE",
      headline2: "GLOBALE DELLE MOTORIZZAZIONI.",
      modeGlobal: 'GLOBALE',
      modeGermany: 'GERMANIA',
      modeEU: "UE", modeChina: "CINA", modeUSA: "USA",
      germanyHeadline1: 'IL CAMBIO',
      germanyHeadline2: 'DEI MOTORI IN GERMANIA.',
      germanyHeroCopy: 'Il parco auto e la transizione delle motorizzazioni in Germania, secondo i dati ufficiali KBA.',
      germanySource: 'Fonti: KBA · FZ 27 · modello',
      germanyModelHeading: 'Modello Germania',
      germanyBevLabel: 'VEICOLI ELETTRICI A BATTERIA',
      germanyHybridLabel: 'IBRIDO, INCLUSO PLUG-IN',
      germanyIceLabel: 'MOTORE A COMBUSTIONE',
      germanyMethodText: 'La modalità Germania usa i dati trimestrali del parco auto FZ 27 dell’Ufficio federale tedesco per i veicoli (KBA). Il riferimento è il 1º luglio 2026. La velocità del contatore usa la variazione osservata dal 1º gennaio al 1º luglio 2026, distribuita uniformemente su 181 giorni. Riflette prima l’andamento disponibile rispetto a un confronto di 12 mesi, ma può reagire di più alle variazioni trimestrali; il tasso a 12 mesi resta un controllo di plausibilità. “Ibrido totale” include i plug-in. Gas e altre categorie sono inclusi nel residuo affinché i totali coincidano. Il contatore è una stima lineare, non un flusso di immatricolazioni in diretta.',
      kbaDataset: 'KBA · FZ 27 · parco trimestrale 2026',
      kbaOverview: 'KBA · panoramica FZ 27',
      heroCopy: "Il parco auto mondiale cambia continuamente. Questo orologio rende visibile la transizione.",
      electric: "ELETTRICO",
      hybrid: "IBRIDO",
      petrol: "BENZINA",
      diesel: "DIESEL",
      vehiclesPerSecond: "veicoli / secondo",
      impactShort: '≈ Flusso modellato di carburante e CO₂ operativo in base al parco regionale.',
      impactHeading: 'Modello carburante e CO₂', impactWhatTitle: 'Visualizzazione', impactCalcTitle: 'Calcolo', impactBevTitle: 'Confronto BEV', impactSourcesTitle: 'Fonti e limiti', impactUnitsTitle: 'Unità',
      impactCalc: 'Parco × km/anno × L/100 km ÷ 100 ÷ secondi/anno dà L/s; carburante × kg CO₂/L dà CO₂ allo scarico. Per BEV: emissioni di benzina comparabili evitate meno kWh BEV × fattore medio annuo regionale della rete. Flussi distribuiti uniformemente; i viaggi non sono misurati.',
      impactBev: 'BEV: confronto operativo netto a parità di distanza stimata: emissioni dirette evitate di un’auto a benzina comparabile meno quelle della ricarica secondo il mix elettrico medio annuo regionale. Produzione del veicolo e ciclo a monte del carburante sono esclusi.',
      impactSources: 'Germania: parco KBA e dati Destatis. UE: attività/energia Eurostat e dati reali EEA per auto recenti. USA: DOE/EPA; globale/Cina: ipotesi IEA e riferimenti nazionali. Senza misure complete dell’intero parco, i parametri sono stime del modello. Gli ibridi plug-in sono più incerti per la ricarica. Gli ibridi mostrano carburante e CO₂ allo scarico; l’elettricità di ricarica dei plug-in non è ancora inclusa per mancanza di una suddivisione affidabile del parco.',
      impactSessionTitle: 'CARBURANTE / CO₂ (STIMA MODELLATA)',
      impactSinceData: 'Dalla data dei dati', millionLitres: 'milioni di litri', thousandLitres: 'migliaia di litri', tonnesCO2: 'tonnellate di CO₂', kilogramsCO2: 'chilogrammi di CO₂', litres: 'litri',
      impactParameterNote: 'Le colonne BEV indicano km/anno, consumo del veicolo termico di confronto in L/100 km e consumo BEV in kWh/100 km. I fattori elettrici usano gli ultimi anni pubblicati qui (globale/UE/Cina 2025; Germania 2025 (provvisorio); USA 2023) e sono medie annue della generazione, non fattori marginali di ricarica. Fattori carburante: benzina 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. I valori sono basi modellate arrotondate, non misure di ogni veicolo; l’affidabilità varia per regione.', impactRegion: 'Regione', impactBevCol: 'BEV: km/anno · termica L/100 km · BEV kWh/100 km', impactGridCol: 'Rete g CO₂/kWh', impactParamsTitle: 'Parametri del modello per regione: distanza annua e consumo',
      impactTableUnitNote: 'Celle benzina, diesel e ibrido: km/anno · L/100 km. Cella BEV: km/anno · termica comparabile L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV*', impactHybrid: 'Ibrido', impactPetrol: 'Benzina', impactDiesel: 'Diesel', impactAvoided: 'evitato*', impactProduced: '*emesso',
      bevLabel: "VEICOLI ELETTRICI A BATTERIA",
      hybridLabel: "HEV + IBRIDO PLUG-IN",
      iceLabel: "MOTORE A COMBUSTIONE",
      liveSession: "SESSIONE LIVE",
      sinceOpened: "DA QUANDO HAI APERTO QUESTA PAGINA",
      observationTime: "Tempo di osservazione:",
      modeledEstimate: "STIMA MODELLATA IN TEMPO REALE",
      methodDetails: "DATI & METODOLOGIA",
      methodText: "I contatori non rappresentano immatricolazioni ufficiali rilevate secondo per secondo. Interpolano il parco mondiale di autovetture usando dati pubblicati su stock, vendite e mercato. I valori di benzina, diesel e ibrido sono stime del modello.",
      sourceBase: "Fonti: IEA · ACEA · VDA/UBA · modello",
      dataModel: "Modello dati",
      dataAsOf: "Aggiornato a",
      dataIdeaBy: "UN’IDEA BASATA SUI DATI DI",
      brandCopy: "Mobilità elettrica. Fatti. Vita quotidiana.",
      facebook: "SEGUI SU FACEBOOK →",
      footerNote: "Stima modellata in tempo reale – non è un conteggio ufficiale live"
    },
    pl: {
      flag: "🇵🇱", code: "PL", locale: "pl-PL",
      liveModel: "MODEL NA ŻYWO",
      headline1: "GLOBALNA ZMIANA",
      headline2: "RODZAJÓW NAPĘDU.",
      modeGlobal: 'GLOBALNIE',
      modeGermany: 'NIEMCY',
      modeEU: "UE", modeChina: "CHINY", modeUSA: "USA",
      germanyHeadline1: 'ZMIANA NAPĘDÓW',
      germanyHeadline2: 'W NIEMCZECH.',
      germanyHeroCopy: 'Park samochodów osobowych i zmiany napędów w Niemczech według oficjalnych danych KBA.',
      germanySource: 'Źródła: KBA · FZ 27 · model',
      germanyModelHeading: 'Model dla Niemiec',
      germanyBevLabel: 'SAMOCHODY ELEKTRYCZNE BEV',
      germanyHybridLabel: 'HYBRYDY, W TYM PLUG-IN',
      germanyIceLabel: 'SILNIK SPALINOWY',
      germanyMethodText: 'Tryb Niemcy wykorzystuje kwartalne dane o parku samochodów osobowych KBA FZ 27. Punktem odniesienia jest 1 lipca 2026 r. Szybkość licznika wykorzystuje zaobserwowaną zmianę stanu od 1 stycznia do 1 lipca 2026 r., równomiernie rozłożoną na 181 dni. Dzięki temu szybciej odzwierciedla najnowszy dostępny trend niż porównanie 12-miesięczne, ale może mocniej reagować na zmiany kwartalne; wskaźnik 12-miesięczny pozostaje kontrolą wiarygodności. „Hybrydy ogółem” obejmują hybrydy plug-in. Gaz i pozostałe pojazdy są uwzględnione w reszcie, aby sumy się zgadzały. Licznik jest estymacją liniową, a nie bieżącym odczytem rejestracji.',
      kbaDataset: 'KBA · FZ 27 · dane kwartalne 2026',
      kbaOverview: 'KBA · opis FZ 27',
      heroCopy: "Światowa flota samochodów zmienia się przez całą dobę. Ten zegar pokazuje tę zmianę na żywo.",
      electric: "ELEKTRYCZNE",
      hybrid: "HYBRYDOWE",
      petrol: "BENZYNA",
      diesel: "DIESEL",
      vehiclesPerSecond: "pojazdów / sekundę",
      impactShort: '≈ Modelowany przepływ paliwa i operacyjnego CO₂ według regionalnego parku.',
      impactHeading: 'Model paliwa i CO₂', impactWhatTitle: 'Wskazanie', impactCalcTitle: 'Obliczenie', impactBevTitle: 'Porównanie BEV', impactSourcesTitle: 'Źródła i ograniczenia', impactUnitsTitle: 'Jednostki',
      impactCalc: 'Park × km/rok × L/100 km ÷ 100 ÷ sekund/rok daje L/s; paliwo × kg CO₂/L daje emisje z rury. Dla BEV: uniknięte emisje porównywalnej benzyny minus kWh BEV × regionalny roczny średni współczynnik sieci. Roczne przepływy rozłożone równomiernie; przejazdy nie są mierzone.',
      impactBev: 'BEV: porównanie netto w eksploatacji przy tej samej szacowanej odległości: uniknięte emisje z rury wydechowej porównywalnego auta benzynowego minus emisje ładowania według regionalnej średniej rocznej miksu sieci. Produkcja pojazdu i emisje paliwa przed spalaniem są wyłączone.',
      impactSources: 'Niemcy: park KBA i dane Destatis. UE: aktywność/energia Eurostat oraz pomiary EEA nowszych aut. USA: DOE/EPA; świat/Chiny: założenia IEA i krajowe punkty odniesienia. Przy braku pomiarów całego parku parametry są założeniami modelu. Hybrydy plug-in są bardziej niepewne z powodu ładowania. Hybrydy pokazują paliwo i CO₂ z rury wydechowej; energia do ładowania plug-in nie jest jeszcze uwzględniona z braku wiarygodnego podziału parku.',
      impactSessionTitle: 'PALIWO / CO₂ (SZACUNEK MODELOWY)',
      impactSinceData: 'Od daty danych', millionLitres: 'miliony litrów', thousandLitres: 'tysiące litrów', tonnesCO2: 'tony CO₂', kilogramsCO2: 'kilogramy CO₂', litres: 'litry',
      impactParameterNote: 'Kolumny BEV pokazują km/rok, zużycie porównywalnego auta spalinowego w L/100 km i zużycie BEV w kWh/100 km. Współczynniki sieci pochodzą z najnowszych użytych publikacji (świat/UE/Chiny 2025; Niemcy 2025 (wstępne); USA 2023) i są rocznymi średnimi emisji wytwarzania, nie krańcowymi wskaźnikami ładowania. Współczynniki paliw: benzyna 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. Wartości są zaokrąglonymi założeniami modelu, nie pomiarami każdego pojazdu; pewność zależy od regionu.', impactRegion: 'Region', impactBevCol: 'BEV: km/rok · spalinowy L/100 km · BEV kWh/100 km', impactGridCol: 'Sieć g CO₂/kWh', impactParamsTitle: 'Parametry modelu według regionu: roczny dystans i zużycie',
      impactTableUnitNote: 'Komórki benzyna, diesel, hybryda: km/rok · L/100 km. Komórka BEV: km/rok · porównywalne ICE L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV*', impactHybrid: 'Hybryda', impactPetrol: 'Benzyna', impactDiesel: 'Diesel', impactAvoided: 'uniknięte*', impactProduced: '*wyemitowano',
      bevLabel: "SAMOCHODY ELEKTRYCZNE BEV",
      hybridLabel: "HEV + HYBRYDA PLUG-IN",
      iceLabel: "SILNIK SPALINOWY",
      liveSession: "SESJA NA ŻYWO",
      sinceOpened: "OD OTWARCIA TEJ STRONY",
      observationTime: "Czas obserwacji:",
      modeledEstimate: "MODELOWANA ESTYMACJA W CZASIE RZECZYWISTYM",
      methodDetails: "DANE & METODOLOGIA",
      methodText: "Liczniki nie przedstawiają oficjalnych rejestracji mierzonych co sekundę. Interpolują światową flotę samochodów osobowych na podstawie opublikowanych danych o parku, sprzedaży i rynku. Wartości dla benzyny, diesla i hybryd są estymacjami modelu.",
      sourceBase: "Źródła: IEA · ACEA · VDA/UBA · model",
      dataModel: "Model danych",
      dataAsOf: "Stan na",
      dataIdeaBy: "POMYSŁ DANYCH OD",
      brandCopy: "Elektromobilność. Fakty. Codzienność.",
      facebook: "OBSERWUJ NA FACEBOOKU →",
      footerNote: "Modelowana estymacja w czasie rzeczywistym – nieoficjalny licznik live"
    },
    nl: {
      flag: "🇳🇱", code: "NL", locale: "nl-NL",
      liveModel: "LIVE MODEL",
      headline1: "DE WERELDWIJDE",
      headline2: "AANDRIJFTRANSITIE.",
      modeGlobal: 'WERELDWIJD',
      modeGermany: 'DUITSLAND',
      modeEU: "EU", modeChina: "CHINA", modeUSA: "VS",
      germanyHeadline1: 'DE AANDRIJFTRANSITIE',
      germanyHeadline2: 'IN DUITSLAND.',
      germanyHeroCopy: 'Het Duitse personenwagenpark en de aandrijftransitie volgens officiële KBA-gegevens.',
      germanySource: 'Bronnen: KBA · FZ 27 · model',
      germanyModelHeading: 'Model voor Duitsland',
      germanyBevLabel: 'BATTERIJ-ELEKTRISCHE VOERTUIGEN',
      germanyHybridLabel: 'HYBRIDE, INCLUSIEF PLUG-IN',
      germanyIceLabel: 'VERBRANDINGSMOTOR',
      germanyMethodText: 'De Duitsland-modus gebruikt de kwartaalstanden van personenauto’s uit de KBA-statistiek FZ 27. De referentie is 1 juli 2026. De tellersnelheid gebruikt de waargenomen verandering van 1 januari tot 1 juli 2026, gelijkmatig verdeeld over 181 dagen. Dit weerspiegelt de nieuwste trend sneller dan een vergelijking over 12 maanden, maar kan sterker reageren op kwartaalbewegingen; de 12-maandskoers blijft een plausibiliteitscontrole. “Hybride totaal” omvat plug-inhybrides. Gas en overige voertuigen tellen mee in het restant zodat de totalen kloppen. De teller is een lineaire schatting, geen live registratiefeed.',
      kbaDataset: 'KBA · FZ 27 · kwartaalbestand 2026',
      kbaOverview: 'KBA · overzicht FZ 27',
      heroCopy: "Het wereldwijde wagenpark verandert voortdurend. Deze klok maakt die transitie zichtbaar.",
      electric: "ELEKTRISCH",
      hybrid: "HYBRIDE",
      petrol: "BENZINE",
      diesel: "DIESEL",
      vehiclesPerSecond: "voertuigen / seconde",
      impactShort: '≈ Berekende brandstof- en operationele CO₂-stroom op basis van het regionale wagenpark.',
      impactHeading: 'Brandstof- en CO₂-model', impactWhatTitle: 'Weergave', impactCalcTitle: 'Berekening', impactBevTitle: 'BEV-vergelijking', impactSourcesTitle: 'Bronnen en beperkingen', impactUnitsTitle: 'Eenheden',
      impactCalc: 'Wagenpark × km/jaar × L/100 km ÷ 100 ÷ seconden/jaar geeft L/s; brandstof × kg CO₂/L geeft uitlaat-CO₂. Voor BEV: vermeden benzine-uitstoot minus BEV-kWh × regionale jaarlijkse gemiddelde netfactor. Jaarstromen zijn gelijkmatig verdeeld; ritten worden niet gemeten.',
      impactBev: 'BEV: netto operationele vergelijking bij dezelfde geschatte afstand: vermeden directe uitstoot van een vergelijkbare benzineauto min laaduitstoot op basis van de regionale jaarlijkse gemiddelde stroommix. Voertuigproductie en upstream brandstofemissies zijn uitgesloten.',
      impactSources: 'Duitsland gebruikt KBA-wagenpark en Destatis-rijafstand/verbruik. De EU combineert Eurostat-activiteit/energie met EEA-praktijkgegevens voor nieuwere auto’s. VS gebruikt DOE/EPA; wereldwijd/China IEA-aannames en nationale ankers. Zonder volledige vlootmetingen zijn parameters modelaannames. Vooral plug-inhybrides zijn onzekerder door laadgedrag. Hybrides tonen brandstof en uitlaat-CO₂; laadstroom voor plug-inhybrides is nog niet meegenomen omdat een betrouwbare vlootuitsplitsing ontbreekt.',
      impactSessionTitle: 'BRANDSTOF / CO₂ (MODELSCHATTING)',
      impactSinceData: 'Sinds de peildatum', millionLitres: 'miljoen liter', thousandLitres: 'duizend liter', tonnesCO2: 'ton CO₂', kilogramsCO2: 'kilogram CO₂', litres: 'liter',
      impactParameterNote: 'De BEV-kolommen tonen km/jaar, brandstofverbruik van de vergelijkingsauto in L/100 km en BEV-verbruik in kWh/100 km. Netfactoren gebruiken de meest recente hier gebruikte publicatiejaren (wereld/EU/China 2025; Duitsland 2025 (voorlopig); VS 2023) en zijn jaarlijkse gemiddelde opwekfactoren, geen marginale laadfactoren. Brandstoffactoren: benzine 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. Het zijn afgeronde modelbaselines, geen metingen van elk geregistreerd voertuig; de betrouwbaarheid verschilt per regio.', impactRegion: 'Regio', impactBevCol: 'BEV: km/jaar · brandstof L/100 km · BEV kWh/100 km', impactGridCol: 'Net g CO₂/kWh', impactParamsTitle: 'Modelparameters per regio: jaarlijkse afstand en verbruik',
      impactTableUnitNote: 'Benzine-, diesel- en hybridecellen: km/jaar · L/100 km. BEV-cel: km/jaar · vergelijkbare ICE L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV*', impactHybrid: 'Hybride', impactPetrol: 'Benzine', impactDiesel: 'Diesel', impactAvoided: 'vermeden*', impactProduced: '*uitgestoten',
      bevLabel: "BATTERIJ-ELEKTRISCHE VOERTUIGEN",
      hybridLabel: "HEV + PLUG-IN HYBRIDE",
      iceLabel: "VERBRANDINGSMOTOR",
      liveSession: "LIVE SESSIE",
      sinceOpened: "SINDS JE DEZE PAGINA OPNENDE",
      observationTime: "Observatietijd:",
      modeledEstimate: "GEMODELLEERDE REALTIME-SCHATTING",
      methodDetails: "DATA & METHODIEK",
      methodText: "De tellers zijn geen officiële registraties die per seconde worden gemeten. Ze interpoleren het wereldwijde personenwagenpark op basis van gepubliceerde wagenpark-, verkoop- en marktgegevens. De waarden voor benzine, diesel en hybride zijn modelschattingen.",
      sourceBase: "Bronnen: IEA · ACEA · wereldwijde marktgegevens",
      dataModel: "Datamodel",
      dataAsOf: "Stand",
      dataIdeaBy: "EEN DATA-IDEE VAN",
      brandCopy: "Elektrische mobiliteit. Feiten. Dagelijks leven.",
      facebook: "VOLG OP FACEBOOK →",
      footerNote: "Gemodelleerde realtime-schatting – geen officiële live telling"
    },
    pt: {
      flag: "🇵🇹", code: "PT", locale: "pt-PT",
      liveModel: "MODELO AO VIVO",
      headline1: "A TRANSIÇÃO GLOBAL",
      headline2: "DAS MOTORIZAÇÕES.",
      modeGlobal: 'GLOBAL',
      modeGermany: 'ALEMANHA',
      modeEU: "UE", modeChina: "CHINA", modeUSA: "EUA",
      germanyHeadline1: 'A TRANSIÇÃO',
      germanyHeadline2: 'DOS AUTOMÓVEIS NA ALEMANHA.',
      germanyHeroCopy: 'O parque automóvel e a transição dos motores na Alemanha, segundo os dados oficiais do KBA.',
      germanySource: 'Fontes: KBA · FZ 27 · modelo',
      germanyModelHeading: 'Modelo da Alemanha',
      germanyBevLabel: 'VEÍCULOS ELÉTRICOS A BATERIA',
      germanyHybridLabel: 'HÍBRIDOS, INCLUINDO PLUG-IN',
      germanyIceLabel: 'MOTOR DE COMBUSTÃO',
      germanyMethodText: 'O modo Alemanha utiliza os dados trimestrais do parque automóvel do KBA FZ 27. A referência é 1 de julho de 2026. A velocidade do contador usa a alteração observada entre 1 de janeiro e 1 de julho de 2026, distribuída uniformemente por 181 dias. Isto reflete mais rapidamente a tendência disponível do que uma comparação de 12 meses, mas pode reagir mais às variações trimestrais; a taxa de 12 meses continua a servir de controlo de plausibilidade. “Híbridos no total” inclui híbridos plug-in. Gás e outras categorias entram no remanescente para fechar os totais. O contador é uma estimativa linear, não um registo de matrículas em direto.',
      kbaDataset: 'KBA · FZ 27 · parque trimestral 2026',
      kbaOverview: 'KBA · visão geral FZ 27',
      heroCopy: "A frota automóvel mundial muda continuamente. Este relógio torna essa transição visível.",
      electric: "ELÉTRICO",
      hybrid: "HÍBRIDO",
      petrol: "GASOLINA",
      diesel: "DIESEL",
      vehiclesPerSecond: "veículos / segundo",
      impactShort: '≈ Fluxo modelado de combustível e CO₂ operacional com base na frota regional.',
      impactHeading: 'Modelo de combustível e CO₂', impactWhatTitle: 'Visualização', impactCalcTitle: 'Cálculo', impactBevTitle: 'Comparação BEV', impactSourcesTitle: 'Fontes e limites', impactUnitsTitle: 'Unidades',
      impactCalc: 'Frota × km/ano × L/100 km ÷ 100 ÷ segundos/ano dá L/s; combustível × kg CO₂/L dá CO₂ no escape. Para BEV: emissões de gasolina comparáveis evitadas menos kWh BEV × fator anual médio regional da rede. Fluxos anuais distribuídos uniformemente; viagens não são medidas.',
      impactBev: 'BEV: comparação operacional líquida para a mesma distância estimada: emissões diretas evitadas de um carro a gasolina comparável menos as da recarga segundo a média anual regional da rede. Fabrico do veículo e emissões a montante do combustível são excluídos.',
      impactSources: 'Alemanha: frota KBA e dados Destatis. UE: atividade/energia Eurostat e dados reais EEA de carros recentes. EUA: DOE/EPA; global/China: pressupostos IEA e referências nacionais. Sem medições completas da frota, os parâmetros são pressupostos do modelo. Híbridos plug-in têm maior incerteza devido ao carregamento. Os híbridos mostram combustível e CO₂ no escape; a eletricidade de carregamento dos plug-in ainda não é incluída por falta de uma divisão fiável da frota.',
      impactSessionTitle: 'COMBUSTÍVEL / CO₂ (ESTIMATIVA MODELADA)',
      impactSinceData: 'Desde a data dos dados', millionLitres: 'milhões de litros', thousandLitres: 'mil litros', tonnesCO2: 'toneladas de CO₂', kilogramsCO2: 'quilogramas de CO₂', litres: 'litros',
      impactParameterNote: 'As colunas BEV mostram km/ano, consumo do veículo de combustão comparável em L/100 km e consumo BEV em kWh/100 km. Os fatores elétricos usam os anos mais recentes aqui considerados (global/UE/China 2025; Alemanha 2025 (provisório); EUA 2023) e são médias anuais de geração, não fatores marginais de carregamento. Fatores de combustível: gasolina 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. São valores-base arredondados do modelo, não medições de cada veículo; a confiança varia por região.', impactRegion: 'Região', impactBevCol: 'BEV: km/ano · combustão L/100 km · BEV kWh/100 km', impactGridCol: 'Rede g CO₂/kWh', impactParamsTitle: 'Parâmetros do modelo por região: distância anual e consumo',
      impactTableUnitNote: 'Células gasolina, diesel e híbrido: km/ano · L/100 km. Célula BEV: km/ano · combustão comparável L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV*', impactHybrid: 'Híbrido', impactPetrol: 'Gasolina', impactDiesel: 'Diesel', impactAvoided: 'evitado*', impactProduced: '*emitido',
      bevLabel: "VEÍCULOS ELÉTRICOS A BATERIA",
      hybridLabel: "HEV + HÍBRIDO PLUG-IN",
      iceLabel: "MOTOR DE COMBUSTÃO",
      liveSession: "SESSÃO AO VIVO",
      sinceOpened: "DESDE QUE ABRIU ESTA PÁGINA",
      observationTime: "Tempo de observação:",
      modeledEstimate: "ESTIMATIVA MODELADA EM TEMPO REAL",
      methodDetails: "DADOS & METODOLOGIA",
      methodText: "Os contadores não representam matrículas oficiais medidas segundo a segundo. Interpolam a frota mundial de automóveis de passageiros com base em dados publicados de frota, vendas e mercado. Os valores de gasolina, diesel e híbridos são estimativas do modelo.",
      sourceBase: "Fontes: IEA · ACEA · VDA/UBA · modelo",
      dataModel: "Modelo de dados",
      dataAsOf: "Dados de",
      dataIdeaBy: "UMA IDEIA DE DADOS DE",
      brandCopy: "Mobilidade elétrica. Factos. Dia a dia.",
      facebook: "SEGUIR NO FACEBOOK →",
      footerNote: "Estimativa modelada em tempo real – não é uma contagem oficial ao vivo"
    },
    no: {
      flag: "🇳🇴", code: "NO", locale: "nb-NO",
      liveModel: "LIVE-MODELL",
      headline1: "DET GLOBALE",
      headline2: "DRIVLINJESKIFTET.",
      modeGlobal: 'GLOBALT',
      modeGermany: 'TYSKLAND',
      modeEU: "EU", modeChina: "KINA", modeUSA: "USA",
      germanyHeadline1: 'DRIVLINJESKIFTET',
      germanyHeadline2: 'I TYSKLAND.',
      germanyHeroCopy: 'Den tyske personbilparken og endringer i drivlinjer, basert på offisielle KBA-tall.',
      germanySource: 'Kilder: KBA · FZ 27 · modell',
      germanyModelHeading: 'Tysklandsmodell',
      germanyBevLabel: 'BATTERIELEKTRISKE BILER',
      germanyHybridLabel: 'HYBRID, INKL. PLUG-IN',
      germanyIceLabel: 'FORBRENNINGSMOTOR',
      germanyMethodText: 'Tysklandsmodusen bruker de kvartalsvise personbiltallene i KBA-statistikken FZ 27. Referansen er 1. juli 2026. Tellerraten bruker den observerte endringen fra 1. januar til 1. juli 2026, jevnt fordelt over 181 dager. Dette fanger opp den nyeste tilgjengelige trenden raskere enn en 12-måneders sammenligning, men kan reagere mer på kvartalsvariasjoner; 12-månedersraten brukes som en rimelighetskontroll. «Hybrid totalt» inkluderer ladbare hybrider. Gass og øvrige kjøretøy inngår i restkategorien slik at totalene stemmer. Telleren er et lineært estimat, ikke en direktestrøm av registreringer.',
      kbaDataset: 'KBA · FZ 27 · kvartalstall 2026',
      kbaOverview: 'KBA · FZ 27-oversikt',
      heroCopy: "Den globale bilparken endrer seg hele døgnet. Denne klokken gjør overgangen synlig.",
      electric: "ELEKTRISK",
      hybrid: "HYBRID",
      petrol: "BENSIN",
      diesel: "DIESEL",
      vehiclesPerSecond: "kjøretøy / sekund",
      impactShort: '≈ Modellert drivstoff- og operativ CO₂-strøm basert på regional bilpark.',
      impactHeading: 'Drivstoff- og CO₂-modell', impactWhatTitle: 'Visning', impactCalcTitle: 'Beregning', impactBevTitle: 'BEV-sammenligning', impactSourcesTitle: 'Kilder og begrensninger', impactUnitsTitle: 'Enheter',
      impactCalc: 'Bilpark × km/år × L/100 km ÷ 100 ÷ sekunder/år gir L/s; drivstoff × kg CO₂/L gir eksos-CO₂. For BEV: unngåtte bensinutslipp minus BEV-kWh × regional årlig gjennomsnittlig nettfaktor. Årsflyten fordeles jevnt; kjøreturer måles ikke.',
      impactBev: 'BEV: netto driftsammenligning for samme beregnede kjørelengde: unngåtte direkte utslipp fra en tilsvarende bensinbil minus ladeutslipp beregnet med regional årlig gjennomsnittlig strømmiks. Bilproduksjon og oppstrøms drivstoffutslipp er ikke med.',
      impactSources: 'Tyskland bruker KBA-bestand og Destatis-kjørelengde/drivstoffdata. EU kombinerer Eurostat-aktivitet/energi og EEA-reelle data for nyere biler. USA bruker DOE/EPA; globalt/Kina brukes IEA-forutsetninger og nasjonale holdepunkter. Der komplette flåtemålinger mangler, er parametrene modellforutsetninger. Plug-in-hybrider er mer usikre på grunn av lading. Hybrid viser drivstoff og eksos-CO₂; ladestrøm for plug-in-hybrider er ennå ikke inkludert fordi en pålitelig flåtefordeling mangler.',
      impactSessionTitle: 'DRIVSTOFF / CO₂ (MODELLERT ESTIMAT)',
      impactSinceData: 'Siden datodato', millionLitres: 'millioner liter', thousandLitres: 'tusen liter', tonnesCO2: 'tonn CO₂', kilogramsCO2: 'kilogram CO₂', litres: 'liter',
      impactParameterNote: 'BEV-kolonnene viser km/år, drivstofforbruk for sammenligningsbilen i L/100 km og BEV-forbruk i kWh/100 km. Nettfaktorene bruker de nyeste publiseringsårene her (globalt/EU/Kina 2025; Tyskland 2025 (foreløpig); USA 2023) og er årlige gjennomsnitt for produksjon, ikke marginale ladefaktorer. Drivstoffaktorer: bensin 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. Verdiene er avrundede modellforutsetninger, ikke målinger av hver bil; sikkerheten varierer mellom regioner.', impactRegion: 'Region', impactBevCol: 'BEV: km/år · fossil L/100 km · BEV kWh/100 km', impactGridCol: 'Strømnett g CO₂/kWh', impactParamsTitle: 'Modellparametere per region: årlig kjørelengde og forbruk',
      impactTableUnitNote: 'Bensin-, diesel- og hybridceller: km/år · L/100 km. BEV-celle: km/år · sammenlignbar fossilbil L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV*', impactHybrid: 'Hybrid', impactPetrol: 'Bensin', impactDiesel: 'Diesel', impactAvoided: 'unngått*', impactProduced: '*sluppet ut',
      bevLabel: "BATTERIELEKTRISKE KJØRETØY",
      hybridLabel: "HEV + LADBAR HYBRID",
      iceLabel: "FORBRENNINGSMOTOR",
      liveSession: "LIVE-ØKT",
      sinceOpened: "SIDEN DU ÅPNET DENNE SIDEN",
      observationTime: "Observasjonstid:",
      modeledEstimate: "MODELLERT SANNTIDSESTIMAT",
      methodDetails: "DATA & METODE",
      methodText: "Tellerne er ikke offisielle registreringstall målt sekund for sekund. De interpolerer den globale personbilparken ved hjelp av publiserte data om bestand, salg og marked. Verdiene for bensin, diesel og hybrid er modellestimater.",
      sourceBase: "Kilder: IEA · ACEA · globale markedsdata",
      dataModel: "Datamodell",
      dataAsOf: "Data per",
      dataIdeaBy: "EN DATAIDÉ FRA",
      brandCopy: "Elektrisk mobilitet. Fakta. Hverdagsliv.",
      facebook: "FØLG PÅ FACEBOOK →",
      footerNote: "Modellert sanntidsestimat – ikke en offisiell live-telling"
    },
    zh: {
      flag: "🇨🇳", code: "中文", locale: "zh-CN",
      liveModel: "实时模型",
      headline1: "全球汽车",
      headline2: "动力转型。",
      modeGlobal: '全球',
      modeGermany: '德国',
      modeEU: "欧盟", modeChina: "中国", modeUSA: "美国",
      germanyHeadline1: '德国汽车',
      germanyHeadline2: '动力转型。',
      germanyHeroCopy: '根据德国联邦机动车管理局（KBA）数据，展示德国乘用车保有量与动力结构变化。',
      germanySource: '来源：KBA · FZ 27 · 模型',
      germanyModelHeading: '德国模型',
      germanyBevLabel: '纯电动汽车',
      germanyHybridLabel: '混合动力（含插电式）',
      germanyIceLabel: '内燃机汽车',
      germanyMethodText: '德国模式使用德国联邦机动车管理局（KBA）FZ 27 的乘用车季度保有量。参考日期为2026年7月1日。计数速度依据2026年1月1日至7月1日观察到的保有量变化，并均匀分摊到181天。这比12个月比较更及时地反映最新趋势，但也更容易受单个季度波动影响；12个月变化仍用于合理性校验。“混合动力总计”包含插电式混合动力。燃气和其他车辆计入剩余类别以使总数相符。计数器是线性估算，并非实时注册数据。',
      kbaDataset: 'KBA · FZ 27 · 2026季度保有量',
      kbaOverview: 'KBA · FZ 27数据说明',
      heroCopy: "全球乘用车保有量持续变化。这座时钟让动力结构的转型变得直观可见。",
      electric: "纯电动",
      hybrid: "混合动力",
      petrol: "汽油",
      diesel: "柴油",
      vehiclesPerSecond: "辆 / 秒",
      impactShort: '≈ 根据各地区车辆保有量计算的燃料与运行 CO₂ 模型流量。',
      impactHeading: '燃料与 CO₂ 模型', impactWhatTitle: '显示内容', impactCalcTitle: '计算方法', impactBevTitle: '纯电车对比', impactSourcesTitle: '来源与限制', impactUnitsTitle: '单位',
      impactCalc: '车辆保有量 × 公里/年 × L/100 km ÷ 100 ÷ 每年秒数 = L/s；燃料 × kg CO₂/L = 尾气 CO₂。纯电车净值 = 避免的汽油车排放 − 纯电耗电量 × 地区年度平均电网因子。年度流量均匀分摊；并非实测行驶。',
      impactBev: '纯电车：按相同估算里程进行净运行比较：可比汽油车避免的直接尾气排放，减去按地区年度平均电网排放因子计算的充电排放。不含车辆制造和燃料上游排放。',
      impactSources: '德国采用 KBA 保有量与 Destatis 里程/燃料数据。欧盟结合 Eurostat 活动/能源数据和 EEA 较新车辆实测数据。美国采用 DOE/EPA；全球/中国采用 IEA 假设和国家基准。缺少完整车队测量时，参数属于模型假设。插混因充电行为而不确定性更高。混合动力显示燃料与尾气 CO₂；由于缺少可靠的车队拆分数据，暂未计入插电式混合动力的充电用电。',
      impactSessionTitle: '燃料 / CO₂（模型估算）',
      impactSinceData: '自数据日期起', millionLitres: '百万升', thousandLitres: '千升', tonnesCO2: '吨 CO₂', kilogramsCO2: '千克 CO₂', litres: '升',
      impactParameterNote: '纯电车列依次为年行驶公里、对照燃油车油耗（L/100 km）和纯电车耗电量（kWh/100 km）。电网因子采用此处使用的最新发布年份（全球/欧盟/中国为2025，德国为2025（暂定）；美国为2023），是年度平均发电因子，并非充电的边际排放因子。燃料因子：汽油 2.31 kg CO₂/L，柴油 2.68 kg CO₂/L。这些是经过取整的模型基线，并非对每辆在用车的实测；各地区可靠性不同。', impactRegion: '地区', impactBevCol: '纯电车：公里/年 · 燃油车 L/100 km · 纯电车 kWh/100 km', impactGridCol: '电网 g CO₂/kWh', impactParamsTitle: '各地区模型参数：年行驶里程与能耗',
      impactTableUnitNote: '汽油、柴油和混合动力单元：公里/年 · L/100 km。纯电单元：公里/年 · 对照燃油车 L/100 km · 纯电 kWh/100 km。',
      impactElectric: '纯电*', impactHybrid: '混合动力', impactPetrol: '汽油', impactDiesel: '柴油', impactAvoided: '避免*', impactProduced: '*排放',
      bevLabel: "纯电动汽车",
      hybridLabel: "HEV + 插电式混合动力",
      iceLabel: "内燃机",
      liveSession: "实时会话",
      sinceOpened: "自你打开此页面以来",
      observationTime: "观察时间：",
      modeledEstimate: "模型化实时估算",
      methodDetails: "数据与方法",
      methodText: "这些计数器并非逐秒采集的官方注册数据，而是根据已发布的保有量、销量和市场数据，对全球乘用车保有量进行插值估算。汽油、柴油和混合动力数据属于模型估算值。",
      sourceBase: "数据来源：IEA · ACEA · VDA/UBA · 模型",
      dataModel: "数据模型",
      dataAsOf: "数据截至",
      dataIdeaBy: "数据创意来自",
      brandCopy: "电动出行。事实。日常。",
      facebook: "在 FACEBOOK 上关注 →",
      footerNote: "模型化实时估算——并非官方实时计数"
    }
  };

  const SECONDS_PER_YEAR = 365.2425 * 24 * 60 * 60;
  const REGION_INFO = {
    de: { heading: "Regionale Modelle", eu: "EU: Eurostat meldet den EU-Pkw-Bestand mit Stand 31.12.2025; BEV-Bestand 7,59 Mio. und +31,5 % gegenüber 2024. Die übrigen Antriebsbestände und jährlichen Änderungen sind aus Bestands-/Neuzulassungsdaten modelliert; Eurostat weist auf teils ergänzte Daten und fehlende vollständige Harmonisierung hin.", china: "China: Das Ministerium für Öffentliche Sicherheit meldet zum 30.06.2026 371 Mio. Automobile und 48,97 Mio. NEV. BEV machen 68,77 % der NEV aus. Die amtliche Reihe trennt nicht alle vier Kachel-Kategorien; insbesondere Benzin und Diesel sind Modellzuordnungen. Gesamtbestand und Pkw-Abgrenzung sind nicht identisch mit der Global-/EU-Systemgrenze.", usa: "USA: DOE AFDC/NLR/Experian veröffentlicht Fahrzeugbestände bis 2025, nach Fahrzeugart und Kraftstoff. Die Grundgesamtheit umfasst Light-Duty-Fahrzeuge (auch leichte Trucks), nicht nur Pkw. Die Bestandszahlen wurden gerundet; Wachstumsraten können durch spätere Revisionen bzw. unterschiedliche Publikationstabellen abweichen. Daher sind die Kacheländerungen modellierte Schätzungen, keine amtliche fortlaufende Zählung." },
    en: { heading: "Regional models", eu: "EU: Eurostat reports the EU passenger-car fleet as of 31 Dec 2025; BEV stock was 7.59m, up 31.5% from 2024. Other fuel stocks and annual changes are modeled from fleet and registration data. Eurostat notes that some national data are supplemented and methods are not fully harmonized.", china: "China: The Ministry of Public Security reports 371m automobiles and 48.97m NEVs at 30 Jun 2026. BEVs are 68.77% of NEVs. The official series does not split all four card categories; petrol and diesel are model allocations. Its total fleet scope is not identical to the global/EU passenger-car definition.", usa: "U.S.: DOE AFDC/NLR/Experian publishes vehicle registrations through 2025 by vehicle and fuel type. The population includes light-duty vehicles (including light trucks), not only passenger cars. Counts are rounded, and growth rates can differ across revised publication tables. Card changes are modeled estimates, not a live official count." }
  };
  const startTime = Date.now();
  const keys = ["electric", "hybrid", "petrol", "diesel"];
  const el = (id) => document.getElementById(id);

  let currentLang = "de";
  let currentMode = "global";
  let animationFrameScheduled = false;

  function detectMode() {
    const saved = localStorage.getItem("driveclock-mode");
    return saved && (saved === "global" || DATA.regions?.[saved]) ? saved : "global";
  }

  function activeMarket() {
    return currentMode === "global" ? DATA : (DATA.regions?.[currentMode] || DATA.germany || DATA);
  }

  function detectLanguage() {
    const saved = localStorage.getItem("driveclock-language");
    if (saved && TRANSLATIONS[saved]) return saved;

    const browserLang = (navigator.language || "en").toLowerCase();
    if (browserLang.startsWith("de")) return "de";
    if (browserLang.startsWith("en")) return "en";
    if (browserLang.startsWith("fr")) return "fr";
    if (browserLang.startsWith("es")) return "es";
    if (browserLang.startsWith("it")) return "it";
    if (browserLang.startsWith("pl")) return "pl";
    if (browserLang.startsWith("nl")) return "nl";
    if (browserLang.startsWith("pt")) return "pt";
    if (browserLang.startsWith("no") || browserLang.startsWith("nb") || browserLang.startsWith("nn")) return "no";
    if (browserLang.startsWith("zh")) return "zh";
    return "en";
  }

  function t(key) {
    return TRANSLATIONS[currentLang][key] ?? key;
  }

  function perSecond(item, market = activeMarket()) {
    return item.annualChange / (market.annualSeconds || SECONDS_PER_YEAR);
  }

  function currentValue(item, market = activeMarket(), now = Date.now()) {
    const referenceTime = new Date(market.referenceDate).getTime();
    const seconds = (now - referenceTime) / 1000;
    return Math.max(0, item.base + perSecond(item, market) * seconds);
  }

  function formatInt(value) {
    return Math.round(value).toLocaleString(TRANSLATIONS[currentLang].locale);
  }

  function formatDecimal(value, decimals = 2) {
    return Math.abs(value).toLocaleString(
      TRANSLATIONS[currentLang].locale,
      { minimumFractionDigits: decimals, maximumFractionDigits: decimals }
    );
  }

  function signed(value, decimals = 2) {
    const sign = value >= 0 ? "+" : "−";
    return sign + formatDecimal(value, decimals);
  }

  function signedInt(value) {
    const sign = value >= 0 ? "+" : "−";
    return sign + Math.abs(Math.round(value)).toLocaleString(TRANSLATIONS[currentLang].locale);
  }

  function applyLanguage(lang, persist = true) {
    if (!TRANSLATIONS[lang]) lang = "en";
    currentLang = lang;
    const dict = TRANSLATIONS[lang];

    document.documentElement.lang = lang === "no" ? "nb" : lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined) node.textContent = dict[key];
    });

    if (el("languageFlag")) el("languageFlag").textContent = dict.flag;
    if (el("languageCode")) el("languageCode").textContent = dict.code;

    document.querySelectorAll(".language-menu button[data-lang]").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === lang);
    });

    renderStaticMeta();

    if (persist) localStorage.setItem("driveclock-language", lang);
  }

  function renderStaticMeta() {
    const market = activeMarket();
    const germany = currentMode === "germany";
    const region = currentMode === "global" ? DATA : (DATA.regions?.[currentMode] || DATA.germany);
    if (el("modelVersion")) {
      el("modelVersion").textContent = `${t("dataModel")}: V3.0.2${region?.methodTag ? ` · ${region.methodTag}` : ""}`;
    }
    if (el("dataDate")) {
      const dataDate = region?.dataDate && /^\d{4}-\d{2}-\d{2}$/.test(region.dataDate)
        ? new Intl.DateTimeFormat(TRANSLATIONS[currentLang].locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${region.dataDate}T00:00:00Z`))
        : (region?.dataDate || DATA.dataDate);
      el("dataDate").textContent = `${t("dataAsOf")}: ${dataDate}`;
    }
    const sourceBase = document.querySelector('[data-i18n="sourceBase"]');
    if (sourceBase) sourceBase.textContent = region?.sourceName || (germany ? t("germanySource") : t("sourceBase"));
    const localizedRegion = region?.translations?.[currentLang] || region?.translations?.en || {};
    const info = REGION_INFO[currentLang] || REGION_INFO.en;
    const methodHeading = document.querySelector("[data-i18n=regionModelHeading]");
    if (methodHeading) methodHeading.textContent = currentMode === "germany" ? t("germanyModelHeading") : (t("regionModelHeading") || info.heading);
    const regionalMethod = el("regionalMethodText");
    if (regionalMethod) regionalMethod.textContent = currentMode === "eu" ? info.eu : currentMode === "china" ? info.china : currentMode === "usa" ? info.usa : "";
    const headline1 = document.querySelector('[data-i18n="headline1"]');
    const headline2 = document.querySelector('[data-i18n="headline2"]');
    const heroCopy = document.querySelector('[data-i18n="heroCopy"]');
    if (headline1) headline1.textContent = localizedRegion.headline1 || (germany ? t("germanyHeadline1") : t("headline1"));
    if (headline2) headline2.textContent = localizedRegion.headline2 || (germany ? t("germanyHeadline2") : t("headline2"));
    if (heroCopy) heroCopy.textContent = localizedRegion.heroCopy || (germany ? t("germanyHeroCopy") : t("heroCopy"));
    const bevLabel = document.querySelector('[data-i18n="bevLabel"]');
    const hybridLabel = document.querySelector('[data-i18n="hybridLabel"]');
    const iceLabels = document.querySelectorAll('[data-i18n="iceLabel"]');
    if (bevLabel) bevLabel.textContent = localizedRegion.bevLabel || (germany ? t("germanyBevLabel") : t("bevLabel"));
    if (hybridLabel) hybridLabel.textContent = localizedRegion.hybridLabel || (germany ? t("germanyHybridLabel") : t("hybridLabel"));
    iceLabels.forEach((node) => { node.textContent = localizedRegion.iceLabel || (germany ? t("germanyIceLabel") : t("iceLabel")); });
    document.querySelectorAll(".mode-switch button[data-mode]").forEach((button) => {
      const active = button.dataset.mode === currentMode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (el("facebookLink") && DATA.facebookUrl) {
      el("facebookLink").href = DATA.facebookUrl;
    }

    keys.forEach((key) => {
      const item = market.categories[key];
      const bar = el(`bar-${key}`);
      const trend = el(`trend-${key}`);
      const share = market.globalFleet?.base ? (item.base / market.globalFleet.base) * 100 : 0;
      const previousBase = item.base - item.annualChange;
      const trendValue = item.trendPercent ?? ((germany || currentMode !== "global") ? (previousBase ? (item.annualChange / previousBase) * 100 : 0) : (item.base ? (item.annualChange / item.base) * 100 : 0));
      if (bar) bar.style.width = `${Math.max(0, Math.min(100, share))}%`;
      if (trend) trend.textContent = `${signed(trendValue, 1)} %`;
    });
  }

  function setMode(mode, persist = true) {
    currentMode = mode === "global" || DATA.regions?.[mode] ? mode : "global";
    renderStaticMeta();
    if (persist) localStorage.setItem("driveclock-mode", currentMode);
    tick();
  }

  function updateClock(now) {
    const d = new Date(now);
    const dict = TRANSLATIONS[currentLang];
    const locale = dict?.locale || navigator.language || "en-US";

    // The visitor's real browser/device time zone is used independently
    // from the selected UI language. This means a German-language visitor
    // in New York sees New York local time, while a Spanish-language visitor
    // in Berlin sees Berlin local time.
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

    const timeText = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone
    }).format(d);

    // Prefer a short localized zone name such as MESZ, GMT+2, EDT, etc.
    let zoneText = timeZone;
    try {
      const parts = new Intl.DateTimeFormat(locale, {
        timeZone,
        timeZoneName: "short"
      }).formatToParts(d);
      const zonePart = parts.find(part => part.type === "timeZoneName");
      if (zonePart?.value) zoneText = zonePart.value;
    } catch (_) {}

    if (el("utcClock")) {
      el("utcClock").textContent = `${timeText} ${zoneText}`;
      el("utcClock").title = timeZone;
    }
  }

  function updateSession(seconds) {
    const total = Math.max(0, Math.floor(seconds));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    if (el("sessionTime")) {
      el("sessionTime").textContent =
        `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
    }
  }

  function tick() {
    const now = Date.now();
    const sessionSeconds = (now - startTime) / 1000;
    const market = activeMarket();

    keys.forEach((key) => {
      const item = market.categories[key];
      const rate = perSecond(item, market);
      const count = currentValue(item, market, now);
      const sessionChange = rate * sessionSeconds;

      if (el(`count-${key}`)) el(`count-${key}`).textContent = formatInt(count);
      if (el(`rate-${key}`)) el(`rate-${key}`).textContent = signed(rate, 2);
      if (el(`since-${key}`)) el(`since-${key}`).textContent = signedInt(sessionChange);
      renderImpact(key, market, count, sessionSeconds);
    });

    renderSessionImpact(market, sessionSeconds);
    updateClock(now);
    updateSession(sessionSeconds);
    if (!animationFrameScheduled) {
      animationFrameScheduled = true;
      requestAnimationFrame(() => {
        animationFrameScheduled = false;
        tick();
      });
    }
  }


  function impactParams(key, market) {
    return (market.impact || DATA.impact)[key];
  }

  function impactFlow(key, market, fleetCount) {
    const p = impactParams(key, market);
    const factors = DATA.impactFactors;
    const seconds = SECONDS_PER_YEAR;
    if (!p) return { litres: 0, co2kg: 0 };
    if (key === "electric") {
      const litres = fleetCount * p.annualKm * p.comparatorLitresPer100Km / 100 / seconds;
      const factor = factors[`${p.comparatorFuel}KgCO2PerLitre`];
      const avoidedTailpipe = litres * factor;
      const chargingKwh = fleetCount * p.annualKm * p.kwhPerKm / seconds;
      const gridFactor = market.gridKgCO2PerKwh ?? DATA.gridKgCO2PerKwh;
      const chargingCO2 = chargingKwh * gridFactor;
      return { litres, co2kg: avoidedTailpipe - chargingCO2, avoidedTailpipe, chargingKwh, chargingCO2, avoided: true };
    }
    const litres = fleetCount * p.annualKm * p.litresPer100Km / 100 / seconds;
    const factor = factors[`${p.fuel}KgCO2PerLitre`];
    return { litres, co2kg: litres * factor, avoided: false };
  }

  function formatFlow(value, unit) {
    const abs = Math.abs(value);
    if (unit === "kg/s" && abs >= 1000) {
      return `${formatDecimal(value / 1000, 2)} t/s`;
    }
    return `${formatDecimal(value, abs >= 100 ? 0 : 2)} ${unit}`;
  }

  function formatAccumulated(value, unit) {
    const abs = Math.abs(value);
    if (unit === "kg" && abs >= 1000) return `${formatDecimal(value / 1000, 2)} t`;
    if (unit === "L" && abs >= 1000000) return `${formatDecimal(value / 1000000, 2)} M L`;
    if (unit === "L" && abs >= 1000) return `${formatDecimal(value / 1000, 2)} k L`;
    return `${formatDecimal(value, 2)} ${unit}`;
  }

  function accumulatedImpact(key, market, now = Date.now(), from = new Date(market.referenceDate).getTime()) {
    const p = impactParams(key, market);
    if (!p) return { litres: 0, co2kg: 0 };
    const start = Math.min(Math.max(from, new Date(market.referenceDate).getTime()), now);
    const duration = Math.max(0, (now - start) / 1000);
    const initialCount = currentValue(market.categories[key], market, start);
    const countRate = perSecond(market.categories[key], market);
    const annualSeconds = SECONDS_PER_YEAR;
    const annualFuel = key === "electric"
      ? p.annualKm * p.comparatorLitresPer100Km / 100
      : p.annualKm * p.litresPer100Km / 100;
    const litresPerVehicleSecond = annualFuel / annualSeconds;
    const litres = litresPerVehicleSecond * Math.max(0, initialCount * duration + 0.5 * countRate * duration * duration);
    const fuel = key === "electric" ? p.comparatorFuel : p.fuel;
    let co2kg = litres * DATA.impactFactors[`${fuel}KgCO2PerLitre`];
    if (key === "electric") {
      const chargingKwh = Math.max(0, initialCount * duration + 0.5 * countRate * duration * duration) * p.annualKm * p.kwhPerKm / annualSeconds;
      co2kg -= chargingKwh * (market.gridKgCO2PerKwh ?? DATA.gridKgCO2PerKwh);
    }
    return { litres, co2kg };
  }

  function renderImpact(key, market, count) {
    const node = el(`impactFlow-${key}`);
    if (!node) return;
    const flow = impactFlow(key, market, count);
    const litreText = formatFlow(flow.litres, "L/s");
    const co2Text = formatFlow(flow.co2kg, "kg/s");
    const liveText = key === "electric"
      ? `≈ ${litreText} · ${co2Text} CO₂ ${t("impactAvoided")}`
      : `≈ ${litreText} · ${co2Text} CO₂ ${t("impactProduced")}`;
    node.innerHTML = `<span>${liveText}</span>`;
    node.title = key === "electric"
      ? `Netto-Betriebsvergleich: vermiedener Auspuffausstoß minus modellierte Emissionen der Stromerzeugung; ${litreText} Kraftstoffäquivalent vermieden.`
      : `${litreText} Kraftstoff · ${co2Text} direktes Auspuff-CO₂ pro Sekunde, modelliert.`;
  }

  function splitSessionAmount(value, unit) {
    const abs = Math.abs(value);
    if (unit === "L") {
      if (abs >= 1_000_000) return { number: formatDecimal(value / 1_000_000, 2), label: t("millionLitres") };
      if (abs >= 1_000) return { number: formatDecimal(value / 1_000, 2), label: t("thousandLitres") };
      return { number: formatDecimal(value, 2), label: t("litres") };
    }
    if (abs >= 1_000) return { number: formatDecimal(value / 1_000, 2), label: t("tonnesCO2") };
    return { number: formatDecimal(value, 2), label: t("kilogramsCO2") };
  }

  function renderSessionImpact(market, sessionSeconds) {
    const root = el("sessionImpact");
    if (!root) return;
    keys.forEach((key) => {
      const target = root.querySelector(`#session-impact-${key}`);
      if (!target) return;
      target.replaceChildren();
      const sessionTotal = accumulatedImpact(key, market, Date.now(), startTime);
      const entry = document.createElement("div");
      entry.className = `session-impact-item impact-${key}`;
      const statusText = key === "electric" ? t("impactAvoided") : t("impactProduced");
      const appendMetric = (value, unit, isCo2 = false) => {
        const metric = splitSessionAmount(value, unit);
        const group = document.createElement("div");
        group.className = `session-metric-group${isCo2 ? " session-metric-co2" : ""}`;
        const amount = document.createElement("strong");
        amount.className = "impact-amount";
        amount.textContent = metric.number;
        const unitLabel = document.createElement("span");
        unitLabel.className = "impact-unit";
        unitLabel.textContent = metric.label;
        const status = document.createElement("small");
        status.className = "impact-status";
        status.textContent = statusText;
        group.append(amount, unitLabel, status);
        entry.appendChild(group);
      };
      appendMetric(sessionTotal.litres, "L");
      appendMetric(sessionTotal.co2kg, "kg", true);
      target.appendChild(entry);
    });
  }

  function setupModeSwitch() {
    document.querySelectorAll(".mode-switch button[data-mode]").forEach((button) => {
      button.addEventListener("click", () => setMode(button.dataset.mode));
    });
  }

  function setupLanguageMenu() {
    const switcher = el("languageSwitcher");
    const button = el("languageButton");
    const menu = el("languageMenu");
    if (!switcher || !button || !menu) return;

    const closeMenu = () => {
      menu.classList.remove("open");
      menu.setAttribute("aria-hidden", "true");
      button.setAttribute("aria-expanded", "false");
    };

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = !menu.classList.contains("open");
      menu.classList.toggle("open", open);
      menu.setAttribute("aria-hidden", String(!open));
      button.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("button[data-lang]").forEach((item) => {
      item.addEventListener("click", () => {
        applyLanguage(item.dataset.lang);
        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  setupLanguageMenu();
  setupModeSwitch();
  currentMode = detectMode();
  applyLanguage(detectLanguage(), false);
  tick();
})();
