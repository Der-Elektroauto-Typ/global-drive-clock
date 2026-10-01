(() => {
  "use strict";

  const DATA = window.DRIVECOUNT_DATA;
  const MODEL = window.DRIVECOUNT_MODEL;
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
      germanyMethodText: "Deutschland: KBA-Pkw-Bestände FZ 27 vom 1. Juli 2025 und 1. Juli 2026. Die Differenz wird gleichmäßig über 365 Tage verteilt. Der Zwölfmonatsvergleich glättet kurzfristige Einflüsse, reagiert aber langsamer auf neue Trends; er ist nicht nachweislich genauer für jeden aktuellen Zeitpunkt. Hybrid insgesamt enthält PHEV bereits. Referenzbestand 1. Juli 2026, danach lineare Modellfortschreibung.",
      kbaDataset: 'KBA · FZ 27 · Quartalsbestand 2026',
      kbaOverview: 'KBA · Produktübersicht FZ 27',
      heroCopy: "Rund um die Uhr verändert sich der globale Fahrzeugbestand. Diese Uhr macht den Wandel sichtbar.",
      electric: "ELEKTRO",
      hybrid: "HYBRID",
      petrol: "BENZIN",
      diesel: "DIESEL",
      vehiclesPerMinute: "Fahrzeuge / Minute",
      impactShort: '≈ Modellierter Kraftstoff- und betrieblicher CO₂-Fluss auf Basis des jeweiligen Fahrzeugbestands.',
      impactHeading: 'Kraftstoff- und CO₂-Modell', impactWhatTitle: 'Anzeige', impactCalcTitle: 'Berechnung', impactBevTitle: 'BEV-Vergleich', impactSourcesTitle: 'Quellen und Grenzen', impactUnitsTitle: 'Einheiten',
      impactCalc: 'Fahrzeugbestand × km/Jahr × L/100 km ÷ 100 ÷ Sekunden/Jahr ergibt Liter/s; Kraftstoff × kg CO₂/L ergibt Auspuff-CO₂. Für BEV: vermiedene Benziner-Emissionen minus BEV-kWh × regionaler Jahresmittel-Stromfaktor. Jahresmengen werden gleichmäßig verteilt; keine Messung tatsächlicher Fahrten.',
      impactBev: 'BEV: Netto-Betriebsvergleich pro angenommener gleicher Fahrleistung: vermiedener direkter Auspuffausstoß eines vergleichbaren Benziners minus Emissionen des Ladestroms aus dem regionalen Jahresmittel-Strommix. Fahrzeugherstellung und vorgelagerte Kraftstoffemissionen sind nicht enthalten.',
      impactSources: 'Deutschland verwendet KBA-Bestände und Destatis-Fahrleistung/Verbrauch. EU kombiniert Eurostat-Verkehrsleistung/Energie mit EEA-Realdaten neuer Fahrzeuge. USA nutzt DOE/EPA-Daten; Global/China IEA-Annahmen und nationale Anker. Wo vollständige Flottenmessungen fehlen, sind Parameter Modellannahmen. Hybridwerte – besonders Plug-in – sind wegen Ladeverhalten unsicherer. Hybrid zeigt Kraftstoff und Auspuff-CO₂; zusätzlicher Ladestrom von Plug-in-Hybriden ist mangels belastbarer Aufteilung noch nicht enthalten.',
      impactSessionTitle: 'KRAFTSTOFF / CO₂ (MODELLSCHÄTZUNG)',
      impactSinceData: 'Seit Datenstand', millionLitres: 'Millionen Liter', thousandLitres: 'Tausend Liter', tonnesCO2: 'Tonnen CO₂', kilogramsCO2: 'Kilogramm CO₂', litres: 'Liter',
      impactParameterNote: 'Die BEV-Spalten zeigen km/Jahr, Vergleichsverbrauch in L/100 km und BEV-Verbrauch in kWh/100 km. Die Stromfaktoren stammen aus den jeweils neuesten hier verwendeten Veröffentlichungsjahren (Global/EU/China 2025, Deutschland 2025 (vorläufig); USA 2023) und sind Jahresmittel der Erzeugung, keine marginalen Ladefaktoren. Kraftstofffaktoren: Benzin 2,31 kg CO₂/L, Diesel 2,68 kg CO₂/L. Verbrauch und Fahrleistung sind gerundete Modell-Baselines, keine Messung jedes zugelassenen Fahrzeugs; die Sicherheit unterscheidet sich je Region.', impactRegion: 'Region', impactBevCol: 'BEV: km/Jahr · ICE L/100 km · BEV kWh/100 km', impactGridCol: 'Strommix g CO₂/kWh', impactParamsTitle: 'Verwendete Modellparameter je Region: Jahresfahrleistung und Verbrauch',
      impactTableUnitNote: 'Benzin-, Diesel- und Hybridzellen: km/Jahr · L/100 km. BEV-Zelle: km/Jahr · Vergleichs-ICE L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV', impactHybrid: 'Hybrid', impactPetrol: 'Benzin', impactDiesel: 'Diesel', impactAvoided: 'vermieden', impactProduced: 'erzeugt', fuelSaved: 'gespart', fuelBurned: 'verbrannt',
      bevLabel: "REINE BATTERIEFAHRZEUGE",
      hybridLabel: "HEV + PLUG-IN-HYBRID",
      iceLabel: "VERBRENNUNGSMOTOR",
      liveSession: "LIVE SESSION",
      sinceOpened: "SEIT DU DIESE SEITE GEÖFFNET HAST",
      observationTime: "Beobachtungszeit:",
      modeledEstimate: "MODELLIERTE ECHTZEITSCHÄTZUNG",
      methodDetails: "DATEN & METHODIK",
      methodText: "Die Zähler schreiben veröffentlichte Bestände und ausdrücklich gekennzeichnete Annahmen linear fort. Global addiert EU, China, USA und den modellierten Rest der Welt; Deutschland ist in der EU enthalten. Die regionalen Fahrzeugabgrenzungen unterscheiden sich. Keine amtliche Live-Zählung.",
      sourceBase: "Quellenbasis: IEA · ACEA · VDA/UBA · Modell",
      dataModel: "Datenmodell",
      dataAsOf: "Stand",
      dataIdeaBy: "EINE DATENIDEE VON",
      brandCopy: "Elektromobilität. Fakten. Alltag.",
      sessionModelNote: "Modellschätzung – Berechnung und Grenzen",
      feedback: "Fragen, Ideen oder Feedback?",
      facebook: "AUF FACEBOOK FOLGEN →",
      privateDisclosure: 'Privates, nicht kommerzielles Hobbyprojekt. Keine Werbung, keine Einnahmen.', privateFacebook: 'Kontakt über Facebook (privater Kanal, keine Einnahmen)', lawDdg: '§ 5 DDG',
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
      germanyMethodText: "Germany: KBA FZ 27 passenger-car stocks on 1 July 2025 and 1 July 2026. Differences are spread over 365 days. Twelve months smooth short-term effects but respond more slowly to new trends; this is not proven more accurate at every current time. Hybrid total already includes PHEV. The July 2026 reference stock is then linearly extrapolated.",
      kbaDataset: 'KBA · FZ 27 · quarterly fleet 2026',
      kbaOverview: 'KBA · FZ 27 data overview',
      heroCopy: "The global vehicle fleet changes around the clock. This clock makes the transition visible.",
      electric: "ELECTRIC",
      hybrid: "HYBRID",
      petrol: "PETROL",
      diesel: "DIESEL",
      vehiclesPerMinute: "vehicles / minute",
      impactShort: '≈ Modeled fuel and operational CO₂ flow based on each region’s vehicle stock.',
      impactHeading: 'Fuel and CO₂ model', impactWhatTitle: 'Display', impactCalcTitle: 'Calculation', impactBevTitle: 'BEV comparison', impactSourcesTitle: 'Sources and limits', impactUnitsTitle: 'Units',
      impactCalc: 'Vehicle stock × km/year × L/100 km ÷ 100 ÷ seconds/year gives L/s; fuel × kg CO₂/L gives tailpipe CO₂. For BEVs: comparator gasoline emissions avoided minus BEV kWh × regional annual-average grid factor. Annual flows are spread evenly; driving is not measured.',
      impactBev: 'BEV: net operational comparison for the same assumed distance: direct tailpipe emissions of a comparable gasoline car avoided minus charging emissions using the region’s annual-average grid mix. Vehicle manufacturing and upstream fuel emissions are excluded.',
      impactSources: 'Germany uses KBA stock and Destatis mileage/fuel data. The EU combines Eurostat road activity/energy with EEA real-world data for newer cars. The U.S. uses DOE/EPA data; Global/China use IEA assumptions and national anchors. Where full-fleet measurements are unavailable, parameters are model assumptions. Hybrid values, especially plug-in, are more uncertain due to charging behavior. Hybrid shows fuel and tailpipe CO₂; charging electricity for plug-in hybrids is not yet included because a reliable fleet-wide split is unavailable.',
      impactSessionTitle: 'FUEL / CO₂ (MODELED ESTIMATE)',
      impactSinceData: 'Since data date', millionLitres: 'million litres', thousandLitres: 'thousand litres', tonnesCO2: 'tonnes CO₂', kilogramsCO2: 'kilograms CO₂', litres: 'litres',
      impactParameterNote: 'The BEV columns show km/year, comparator fuel use in L/100 km and BEV use in kWh/100 km. Grid factors use the latest publication years used here (global/EU/China 2025, Germany 2025 (provisional); U.S. 2023) and are annual-average generation factors, not marginal charging factors. Fuel factors: petrol 2.31 kg CO₂/L, diesel 2.68 kg CO₂/L. Fuel-use and mileage values are rounded model baselines, not measurements of every registered vehicle; confidence varies by region.', impactRegion: 'Region', impactBevCol: 'BEV: km/year · ICE L/100 km · BEV kWh/100 km', impactGridCol: 'Grid g CO₂/kWh', impactParamsTitle: 'Model inputs by region: annual distance and consumption',
      impactTableUnitNote: 'Petrol, diesel and hybrid cells: km/year · L/100 km. BEV cell: km/year · comparator ICE L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV', impactHybrid: 'Hybrid', impactPetrol: 'Petrol', impactDiesel: 'Diesel', impactAvoided: 'avoided', impactProduced: 'emitted', fuelSaved: 'saved', fuelBurned: 'burned',
      bevLabel: "BATTERY ELECTRIC VEHICLES",
      hybridLabel: "HEV + PLUG-IN HYBRID",
      iceLabel: "COMBUSTION ENGINE",
      liveSession: "LIVE SESSION",
      sinceOpened: "SINCE YOU OPENED THIS PAGE",
      observationTime: "Observation time:",
      modeledEstimate: "MODELED REAL-TIME ESTIMATE",
      methodDetails: "DATA & METHODOLOGY",
      methodText: "The counters linearly extend published stocks and explicitly labeled assumptions. Global sums EU, China, USA and modeled rest of world; Germany is included in the EU. Regional vehicle scopes differ. Not an official live census.",
      sourceBase: "Source base: IEA · ACEA · VDA/UBA · model",
      dataModel: "Data model",
      dataAsOf: "As of",
      dataIdeaBy: "A DATA IDEA BY",
      brandCopy: "Electric mobility. Facts. Everyday life.",
      sessionModelNote: "Model estimate – calculation and limits",
      feedback: "Questions, ideas or feedback?",
      facebook: "FOLLOW ON FACEBOOK →",
      privateDisclosure: 'Private, non-commercial hobby project. No advertising or income.', privateFacebook: 'Contact via Facebook (private channel, no income)', lawDdg: '§ 5 DDG',
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
      germanyMethodText: "Allemagne : stocks KBA FZ 27 au 1er juillet 2025 et 2026, différence répartie sur 365 jours. Douze mois lissent les effets à court terme mais réagissent plus lentement aux nouvelles tendances. Le total hybride inclut déjà les PHEV. Extrapolation linéaire après juillet 2026.",
      kbaDataset: 'KBA · FZ 27 · parc trimestriel 2026',
      kbaOverview: 'KBA · aperçu FZ 27',
      heroCopy: "Le parc automobile mondial évolue en permanence. Cette horloge rend cette transition visible.",
      electric: "ÉLECTRIQUE",
      hybrid: "HYBRIDE",
      petrol: "ESSENCE",
      diesel: "DIESEL",
      vehiclesPerMinute: "véhicules / minute",
      impactShort: '≈ Flux modélisé de carburant et de CO₂ opérationnel selon le parc régional.',
      impactHeading: 'Modèle carburant et CO₂', impactWhatTitle: 'Affichage', impactCalcTitle: 'Calcul', impactBevTitle: 'Comparaison BEV', impactSourcesTitle: 'Sources et limites', impactUnitsTitle: 'Unités',
      impactCalc: 'Parc × km/an × L/100 km ÷ 100 ÷ secondes/an donne les L/s ; carburant × kg CO₂/L donne le CO₂ à l’échappement. Pour les BEV : émissions essence de référence évitées moins kWh BEV × facteur annuel moyen régional du réseau. Flux répartis uniformément, trajets non mesurés.',
      impactBev: 'BEV : comparaison opérationnelle nette à distance supposée égale : émissions directes évitées d’une voiture essence comparable moins celles de la recharge selon le mix électrique annuel moyen régional. Fabrication et amont des carburants exclus.',
      impactSources: 'Allemagne : parc KBA et données Destatis. UE : activité/énergie Eurostat et mesures réelles EEA des véhicules récents. États-Unis : DOE/EPA ; monde/Chine : hypothèses IEA et repères nationaux. En l’absence de mesures complètes de la flotte, les paramètres sont modélisés. Les hybrides rechargeables sont plus incertains selon leur recharge. Les hybrides montrent le carburant et le CO₂ à l’échappement ; l’électricité de recharge des hybrides rechargeables n’est pas incluse faute de ventilation fiable du parc.',
      impactSessionTitle: 'CARBURANT / CO₂ (ESTIMATION MODÉLISÉE)',
      impactSinceData: 'Depuis la date des données', millionLitres: 'millions de litres', thousandLitres: 'milliers de litres', tonnesCO2: 'tonnes de CO₂', kilogramsCO2: 'kilogrammes de CO₂', litres: 'litres',
      impactParameterNote: 'Les colonnes BEV indiquent km/an, consommation du véhicule thermique de comparaison en L/100 km et consommation BEV en kWh/100 km. Les facteurs électriques utilisent les dernières années publiées retenues ici (monde/UE/Chine 2025 ; Allemagne 2025 (provisoire) ; États-Unis 2023) et représentent des moyennes annuelles de production, pas des facteurs marginaux de recharge. Facteurs carburant : essence 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. Les valeurs sont des bases modélisées arrondies, pas des mesures de chaque véhicule ; la fiabilité varie selon la région.', impactRegion: 'Région', impactBevCol: 'BEV : km/an · thermique L/100 km · BEV kWh/100 km', impactGridCol: 'Réseau g CO₂/kWh', impactParamsTitle: 'Paramètres du modèle par région : distance annuelle et consommation',
      impactTableUnitNote: 'Cellules essence, diesel et hybride : km/an · L/100 km. Cellule BEV : km/an · thermique comparable L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV', impactHybrid: 'Hybride', impactPetrol: 'Essence', impactDiesel: 'Diesel', impactAvoided: 'évités', impactProduced: 'émis', fuelSaved: 'économisés', fuelBurned: 'consommés',
      bevLabel: "VÉHICULES 100 % ÉLECTRIQUES",
      hybridLabel: "HEV + HYBRIDE RECHARGEABLE",
      iceLabel: "MOTEUR THERMIQUE",
      liveSession: "SESSION EN DIRECT",
      sinceOpened: "DEPUIS L’OUVERTURE DE CETTE PAGE",
      observationTime: "Temps d’observation :",
      modeledEstimate: "ESTIMATION MODÉLISÉE EN TEMPS RÉEL",
      methodDetails: "DONNÉES & MÉTHODOLOGIE",
      methodText: "Les compteurs prolongent linéairement des parcs publiés et des hypothèses explicites. Global additionne UE, Chine, États-Unis et reste du monde modélisé ; l’Allemagne est incluse dans l’UE. Les périmètres diffèrent. Pas de recensement officiel en direct.",
      sourceBase: "Sources : IEA · ACEA · VDA/UBA · modèle",
      dataModel: "Modèle de données",
      dataAsOf: "Données au",
      dataIdeaBy: "UNE IDÉE DE DONNÉES PAR",
      brandCopy: "Mobilité électrique. Faits. Quotidien.",
      sessionModelNote: "Estimation – calcul et limites",
      feedback: "Questions, idées ou avis ?",
      facebook: "SUIVRE SUR FACEBOOK →",
      privateDisclosure: 'Projet de loisir privé et non commercial. Sans publicité ni revenus.', privateFacebook: 'Contacter via Facebook (canal privé, sans revenus)', lawDdg: '§ 5 DDG',
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
      germanyMethodText: "Alemania: parque KBA FZ 27 al 1 de julio de 2025 y 2026; diferencia repartida en 365 días. Doce meses suavizan efectos breves pero reaccionan más despacio a nuevas tendencias. Híbridos incluye PHEV. Extrapolación lineal tras julio de 2026.",
      kbaDataset: 'KBA · FZ 27 · parque trimestral 2026',
      kbaOverview: 'KBA · información de FZ 27',
      heroCopy: "El parque mundial de vehículos cambia a todas horas. Este reloj hace visible esa transición.",
      electric: "ELÉCTRICO",
      hybrid: "HÍBRIDO",
      petrol: "GASOLINA",
      diesel: "DIÉSEL",
      vehiclesPerMinute: "vehículos / minuto",
      impactShort: '≈ Flujo modelado de combustible y CO₂ operativo según el parque regional.',
      impactHeading: 'Modelo de combustible y CO₂', impactWhatTitle: 'Visualización', impactCalcTitle: 'Cálculo', impactBevTitle: 'Comparación BEV', impactSourcesTitle: 'Fuentes y límites', impactUnitsTitle: 'Unidades',
      impactCalc: 'Parque × km/año × L/100 km ÷ 100 ÷ segundos/año da L/s; combustible × kg CO₂/L da CO₂ de escape. Para BEV: emisiones de gasolina comparables evitadas menos kWh BEV × factor anual medio regional de la red. Flujos anuales repartidos uniformemente; no se miden trayectos.',
      impactBev: 'BEV: comparación operativa neta para la misma distancia estimada: emisiones directas evitadas de un coche de gasolina comparable menos las de la recarga según la media anual regional de la red. Se excluyen fabricación y emisiones previas del combustible.',
      impactSources: 'Alemania: parque KBA y datos Destatis. UE: actividad/energía Eurostat y datos reales EEA de coches recientes. EE. UU.: DOE/EPA; global/China: supuestos IEA y referencias nacionales. Sin mediciones completas de la flota, los parámetros son supuestos del modelo. Los híbridos enchufables son más inciertos por la carga. Los híbridos muestran combustible y CO₂ de escape; no se incluye la electricidad de los enchufables porque falta un desglose fiable de la flota.',
      impactSessionTitle: 'COMBUSTIBLE / CO₂ (ESTIMACIÓN MODELADA)',
      impactSinceData: 'Desde la fecha de datos', millionLitres: 'millones de litros', thousandLitres: 'miles de litros', tonnesCO2: 'toneladas de CO₂', kilogramsCO2: 'kilogramos de CO₂', litres: 'litros',
      impactParameterNote: 'Las columnas BEV muestran km/año, consumo del vehículo térmico comparador en L/100 km y consumo BEV en kWh/100 km. Los factores eléctricos usan los últimos años publicados empleados aquí (global/UE/China 2025; Alemania 2025 (provisional); EE. UU. 2023) y son promedios anuales de generación, no factores marginales de recarga. Factores de combustible: gasolina 2,31 kg CO₂/L, diésel 2,68 kg CO₂/L. Son valores base redondeados del modelo, no mediciones de cada vehículo; la confianza varía por región.', impactRegion: 'Región', impactBevCol: 'BEV: km/año · combustión L/100 km · BEV kWh/100 km', impactGridCol: 'Red g CO₂/kWh', impactParamsTitle: 'Parámetros del modelo por región: distancia anual y consumo',
      impactTableUnitNote: 'Celdas gasolina, diésel e híbrido: km/año · L/100 km. Celda BEV: km/año · combustión comparable L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV', impactHybrid: 'Híbrido', impactPetrol: 'Gasolina', impactDiesel: 'Diésel', impactAvoided: 'evitado', impactProduced: 'emitido', fuelSaved: 'ahorrados', fuelBurned: 'consumidos',
      bevLabel: "VEHÍCULOS ELÉCTRICOS DE BATERÍA",
      hybridLabel: "HEV + HÍBRIDO ENCHUFABLE",
      iceLabel: "MOTOR DE COMBUSTIÓN",
      liveSession: "SESIÓN EN DIRECTO",
      sinceOpened: "DESDE QUE ABRISTE ESTA PÁGINA",
      observationTime: "Tiempo de observación:",
      modeledEstimate: "ESTIMACIÓN MODELADA EN TIEMPO REAL",
      methodDetails: "DATOS & METODOLOGÍA",
      methodText: "Los contadores prolongan linealmente flotas publicadas y supuestos explícitos. Global suma UE, China, EE. UU. y resto del mundo modelado; Alemania está incluida en la UE. Los ámbitos regionales difieren. No es un censo oficial en directo.",
      sourceBase: "Fuentes: IEA · ACEA · VDA/UBA · modelo",
      dataModel: "Modelo de datos",
      dataAsOf: "Datos a",
      dataIdeaBy: "UNA IDEA DE DATOS DE",
      brandCopy: "Movilidad eléctrica. Datos. Vida diaria.",
      sessionModelNote: "Estimación – cálculo y límites",
      feedback: "¿Preguntas, ideas o comentarios?",
      facebook: "SEGUIR EN FACEBOOK →",
      privateDisclosure: 'Proyecto personal y no comercial. Sin publicidad ni ingresos.', privateFacebook: 'Contacto por Facebook (canal privado, sin ingresos)', lawDdg: '§ 5 DDG',
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
      germanyMethodText: "Germania: parco KBA FZ 27 al 1 luglio 2025 e 2026; differenza distribuita su 365 giorni. Dodici mesi attenuano effetti brevi ma reagiscono più lentamente ai nuovi trend. Ibridi include PHEV. Estrapolazione lineare dopo luglio 2026.",
      kbaDataset: 'KBA · FZ 27 · parco trimestrale 2026',
      kbaOverview: 'KBA · panoramica FZ 27',
      heroCopy: "Il parco auto mondiale cambia continuamente. Questo orologio rende visibile la transizione.",
      electric: "ELETTRICO",
      hybrid: "IBRIDO",
      petrol: "BENZINA",
      diesel: "DIESEL",
      vehiclesPerMinute: "veicoli / minuto",
      impactShort: '≈ Flusso modellato di carburante e CO₂ operativo in base al parco regionale.',
      impactHeading: 'Modello carburante e CO₂', impactWhatTitle: 'Visualizzazione', impactCalcTitle: 'Calcolo', impactBevTitle: 'Confronto BEV', impactSourcesTitle: 'Fonti e limiti', impactUnitsTitle: 'Unità',
      impactCalc: 'Parco × km/anno × L/100 km ÷ 100 ÷ secondi/anno dà L/s; carburante × kg CO₂/L dà CO₂ allo scarico. Per BEV: emissioni di benzina comparabili evitate meno kWh BEV × fattore medio annuo regionale della rete. Flussi distribuiti uniformemente; i viaggi non sono misurati.',
      impactBev: 'BEV: confronto operativo netto a parità di distanza stimata: emissioni dirette evitate di un’auto a benzina comparabile meno quelle della ricarica secondo il mix elettrico medio annuo regionale. Produzione del veicolo e ciclo a monte del carburante sono esclusi.',
      impactSources: 'Germania: parco KBA e dati Destatis. UE: attività/energia Eurostat e dati reali EEA per auto recenti. USA: DOE/EPA; globale/Cina: ipotesi IEA e riferimenti nazionali. Senza misure complete dell’intero parco, i parametri sono stime del modello. Gli ibridi plug-in sono più incerti per la ricarica. Gli ibridi mostrano carburante e CO₂ allo scarico; l’elettricità di ricarica dei plug-in non è ancora inclusa per mancanza di una suddivisione affidabile del parco.',
      impactSessionTitle: 'CARBURANTE / CO₂ (STIMA MODELLATA)',
      impactSinceData: 'Dalla data dei dati', millionLitres: 'milioni di litri', thousandLitres: 'migliaia di litri', tonnesCO2: 'tonnellate di CO₂', kilogramsCO2: 'chilogrammi di CO₂', litres: 'litri',
      impactParameterNote: 'Le colonne BEV indicano km/anno, consumo del veicolo termico di confronto in L/100 km e consumo BEV in kWh/100 km. I fattori elettrici usano gli ultimi anni pubblicati qui (globale/UE/Cina 2025; Germania 2025 (provvisorio); USA 2023) e sono medie annue della generazione, non fattori marginali di ricarica. Fattori carburante: benzina 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. I valori sono basi modellate arrotondate, non misure di ogni veicolo; l’affidabilità varia per regione.', impactRegion: 'Regione', impactBevCol: 'BEV: km/anno · termica L/100 km · BEV kWh/100 km', impactGridCol: 'Rete g CO₂/kWh', impactParamsTitle: 'Parametri del modello per regione: distanza annua e consumo',
      impactTableUnitNote: 'Celle benzina, diesel e ibrido: km/anno · L/100 km. Cella BEV: km/anno · termica comparabile L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV', impactHybrid: 'Ibrido', impactPetrol: 'Benzina', impactDiesel: 'Diesel', impactAvoided: 'evitato', impactProduced: 'emesso', fuelSaved: 'risparmiati', fuelBurned: 'consumati',
      bevLabel: "VEICOLI ELETTRICI A BATTERIA",
      hybridLabel: "HEV + IBRIDO PLUG-IN",
      iceLabel: "MOTORE A COMBUSTIONE",
      liveSession: "SESSIONE LIVE",
      sinceOpened: "DA QUANDO HAI APERTO QUESTA PAGINA",
      observationTime: "Tempo di osservazione:",
      modeledEstimate: "STIMA MODELLATA IN TEMPO REALE",
      methodDetails: "DATI & METODOLOGIA",
      methodText: "I contatori proiettano linearmente flotte pubblicate e ipotesi esplicite. Global somma UE, Cina, USA e resto del mondo modellato; la Germania è inclusa nell’UE. Gli ambiti regionali differiscono. Non è un censimento ufficiale in diretta.",
      sourceBase: "Fonti: IEA · ACEA · VDA/UBA · modello",
      dataModel: "Modello dati",
      dataAsOf: "Aggiornato a",
      dataIdeaBy: "UN’IDEA BASATA SUI DATI DI",
      brandCopy: "Mobilità elettrica. Fatti. Vita quotidiana.",
      sessionModelNote: "Stima – calcolo e limiti",
      feedback: "Domande, idee o commenti?",
      facebook: "SEGUI SU FACEBOOK →",
      privateDisclosure: 'Progetto privato e non commerciale per hobby. Nessuna pubblicità o entrata.', privateFacebook: 'Contatto via Facebook (canale privato, senza entrate)', lawDdg: '§ 5 DDG',
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
      germanyMethodText: "Niemcy: dane KBA FZ 27 z 1 lipca 2025 i 2026; różnica rozłożona na 365 dni. Dwanaście miesięcy wygładza krótkie wahania, lecz wolniej reaguje na nowe trendy. Hybrydy obejmują PHEV. Liniowa ekstrapolacja po lipcu 2026.",
      kbaDataset: 'KBA · FZ 27 · dane kwartalne 2026',
      kbaOverview: 'KBA · opis FZ 27',
      heroCopy: "Światowa flota samochodów zmienia się przez całą dobę. Ten zegar pokazuje tę zmianę na żywo.",
      electric: "ELEKTRYCZNE",
      hybrid: "HYBRYDOWE",
      petrol: "BENZYNA",
      diesel: "DIESEL",
      vehiclesPerMinute: "pojazdów / minutę",
      impactShort: '≈ Modelowany przepływ paliwa i operacyjnego CO₂ według regionalnego parku.',
      impactHeading: 'Model paliwa i CO₂', impactWhatTitle: 'Wskazanie', impactCalcTitle: 'Obliczenie', impactBevTitle: 'Porównanie BEV', impactSourcesTitle: 'Źródła i ograniczenia', impactUnitsTitle: 'Jednostki',
      impactCalc: 'Park × km/rok × L/100 km ÷ 100 ÷ sekund/rok daje L/s; paliwo × kg CO₂/L daje emisje z rury. Dla BEV: uniknięte emisje porównywalnej benzyny minus kWh BEV × regionalny roczny średni współczynnik sieci. Roczne przepływy rozłożone równomiernie; przejazdy nie są mierzone.',
      impactBev: 'BEV: porównanie netto w eksploatacji przy tej samej szacowanej odległości: uniknięte emisje z rury wydechowej porównywalnego auta benzynowego minus emisje ładowania według regionalnej średniej rocznej miksu sieci. Produkcja pojazdu i emisje paliwa przed spalaniem są wyłączone.',
      impactSources: 'Niemcy: park KBA i dane Destatis. UE: aktywność/energia Eurostat oraz pomiary EEA nowszych aut. USA: DOE/EPA; świat/Chiny: założenia IEA i krajowe punkty odniesienia. Przy braku pomiarów całego parku parametry są założeniami modelu. Hybrydy plug-in są bardziej niepewne z powodu ładowania. Hybrydy pokazują paliwo i CO₂ z rury wydechowej; energia do ładowania plug-in nie jest jeszcze uwzględniona z braku wiarygodnego podziału parku.',
      impactSessionTitle: 'PALIWO / CO₂ (SZACUNEK MODELOWY)',
      impactSinceData: 'Od daty danych', millionLitres: 'miliony litrów', thousandLitres: 'tysiące litrów', tonnesCO2: 'tony CO₂', kilogramsCO2: 'kilogramy CO₂', litres: 'litry',
      impactParameterNote: 'Kolumny BEV pokazują km/rok, zużycie porównywalnego auta spalinowego w L/100 km i zużycie BEV w kWh/100 km. Współczynniki sieci pochodzą z najnowszych użytych publikacji (świat/UE/Chiny 2025; Niemcy 2025 (wstępne); USA 2023) i są rocznymi średnimi emisji wytwarzania, nie krańcowymi wskaźnikami ładowania. Współczynniki paliw: benzyna 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. Wartości są zaokrąglonymi założeniami modelu, nie pomiarami każdego pojazdu; pewność zależy od regionu.', impactRegion: 'Region', impactBevCol: 'BEV: km/rok · spalinowy L/100 km · BEV kWh/100 km', impactGridCol: 'Sieć g CO₂/kWh', impactParamsTitle: 'Parametry modelu według regionu: roczny dystans i zużycie',
      impactTableUnitNote: 'Komórki benzyna, diesel, hybryda: km/rok · L/100 km. Komórka BEV: km/rok · porównywalne ICE L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV', impactHybrid: 'Hybryda', impactPetrol: 'Benzyna', impactDiesel: 'Diesel', impactAvoided: 'uniknięte', impactProduced: 'wyemitowano', fuelSaved: 'zaoszczędzono', fuelBurned: 'spalono',
      bevLabel: "SAMOCHODY ELEKTRYCZNE BEV",
      hybridLabel: "HEV + HYBRYDA PLUG-IN",
      iceLabel: "SILNIK SPALINOWY",
      liveSession: "SESJA NA ŻYWO",
      sinceOpened: "OD OTWARCIA TEJ STRONY",
      observationTime: "Czas obserwacji:",
      modeledEstimate: "MODELOWANA ESTYMACJA W CZASIE RZECZYWISTYM",
      methodDetails: "DANE & METODOLOGIA",
      methodText: "Liczniki liniowo ekstrapolują opublikowane stany i jawne założenia. Global sumuje UE, Chiny, USA i modelowaną resztę świata; Niemcy są częścią UE. Zakresy regionalne różnią się. To nie jest oficjalny pomiar na żywo.",
      sourceBase: "Źródła: IEA · ACEA · VDA/UBA · model",
      dataModel: "Model danych",
      dataAsOf: "Stan na",
      dataIdeaBy: "POMYSŁ DANYCH OD",
      brandCopy: "Elektromobilność. Fakty. Codzienność.",
      sessionModelNote: "Model – obliczenia i ograniczenia",
      feedback: "Pytania, pomysły lub uwagi?",
      facebook: "OBSERWUJ NA FACEBOOKU →",
      privateDisclosure: 'Prywatny, niekomercyjny projekt hobbystyczny. Bez reklam i dochodów.', privateFacebook: 'Kontakt przez Facebooka (kanał prywatny, bez dochodów)', lawDdg: '§ 5 DDG',
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
      germanyMethodText: "Duitsland: KBA FZ 27 op 1 juli 2025 en 2026; verschil verdeeld over 365 dagen. Twaalf maanden dempen korte schommelingen maar reageren trager op nieuwe trends. Hybride omvat PHEV. Lineaire extrapolatie na juli 2026.",
      kbaDataset: 'KBA · FZ 27 · kwartaalbestand 2026',
      kbaOverview: 'KBA · overzicht FZ 27',
      heroCopy: "Het wereldwijde wagenpark verandert voortdurend. Deze klok maakt die transitie zichtbaar.",
      electric: "ELEKTRISCH",
      hybrid: "HYBRIDE",
      petrol: "BENZINE",
      diesel: "DIESEL",
      vehiclesPerMinute: "voertuigen / minuut",
      impactShort: '≈ Berekende brandstof- en operationele CO₂-stroom op basis van het regionale wagenpark.',
      impactHeading: 'Brandstof- en CO₂-model', impactWhatTitle: 'Weergave', impactCalcTitle: 'Berekening', impactBevTitle: 'BEV-vergelijking', impactSourcesTitle: 'Bronnen en beperkingen', impactUnitsTitle: 'Eenheden',
      impactCalc: 'Wagenpark × km/jaar × L/100 km ÷ 100 ÷ seconden/jaar geeft L/s; brandstof × kg CO₂/L geeft uitlaat-CO₂. Voor BEV: vermeden benzine-uitstoot minus BEV-kWh × regionale jaarlijkse gemiddelde netfactor. Jaarstromen zijn gelijkmatig verdeeld; ritten worden niet gemeten.',
      impactBev: 'BEV: netto operationele vergelijking bij dezelfde geschatte afstand: vermeden directe uitstoot van een vergelijkbare benzineauto min laaduitstoot op basis van de regionale jaarlijkse gemiddelde stroommix. Voertuigproductie en upstream brandstofemissies zijn uitgesloten.',
      impactSources: 'Duitsland gebruikt KBA-wagenpark en Destatis-rijafstand/verbruik. De EU combineert Eurostat-activiteit/energie met EEA-praktijkgegevens voor nieuwere auto’s. VS gebruikt DOE/EPA; wereldwijd/China IEA-aannames en nationale ankers. Zonder volledige vlootmetingen zijn parameters modelaannames. Vooral plug-inhybrides zijn onzekerder door laadgedrag. Hybrides tonen brandstof en uitlaat-CO₂; laadstroom voor plug-inhybrides is nog niet meegenomen omdat een betrouwbare vlootuitsplitsing ontbreekt.',
      impactSessionTitle: 'BRANDSTOF / CO₂ (MODELSCHATTING)',
      impactSinceData: 'Sinds de peildatum', millionLitres: 'miljoen liter', thousandLitres: 'duizend liter', tonnesCO2: 'ton CO₂', kilogramsCO2: 'kilogram CO₂', litres: 'liter',
      impactParameterNote: 'De BEV-kolommen tonen km/jaar, brandstofverbruik van de vergelijkingsauto in L/100 km en BEV-verbruik in kWh/100 km. Netfactoren gebruiken de meest recente hier gebruikte publicatiejaren (wereld/EU/China 2025; Duitsland 2025 (voorlopig); VS 2023) en zijn jaarlijkse gemiddelde opwekfactoren, geen marginale laadfactoren. Brandstoffactoren: benzine 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. Het zijn afgeronde modelbaselines, geen metingen van elk geregistreerd voertuig; de betrouwbaarheid verschilt per regio.', impactRegion: 'Regio', impactBevCol: 'BEV: km/jaar · brandstof L/100 km · BEV kWh/100 km', impactGridCol: 'Net g CO₂/kWh', impactParamsTitle: 'Modelparameters per regio: jaarlijkse afstand en verbruik',
      impactTableUnitNote: 'Benzine-, diesel- en hybridecellen: km/jaar · L/100 km. BEV-cel: km/jaar · vergelijkbare ICE L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV', impactHybrid: 'Hybride', impactPetrol: 'Benzine', impactDiesel: 'Diesel', impactAvoided: 'vermeden', impactProduced: 'uitgestoten', fuelSaved: 'bespaard', fuelBurned: 'verbrand',
      bevLabel: "BATTERIJ-ELEKTRISCHE VOERTUIGEN",
      hybridLabel: "HEV + PLUG-IN HYBRIDE",
      iceLabel: "VERBRANDINGSMOTOR",
      liveSession: "LIVE SESSIE",
      sinceOpened: "SINDS JE DEZE PAGINA OPNENDE",
      observationTime: "Observatietijd:",
      modeledEstimate: "GEMODELLEERDE REALTIME-SCHATTING",
      methodDetails: "DATA & METHODIEK",
      methodText: "De tellers extrapoleren gepubliceerde wagenparken en expliciete aannames lineair. Global telt EU, China, VS en gemodelleerde rest van de wereld op; Duitsland valt binnen de EU. De regionale afbakeningen verschillen. Geen officiële live telling.",
      sourceBase: "Bronnen: IEA · ACEA · wereldwijde marktgegevens",
      dataModel: "Datamodel",
      dataAsOf: "Stand",
      dataIdeaBy: "EEN DATA-IDEE VAN",
      brandCopy: "Elektrische mobiliteit. Feiten. Dagelijks leven.",
      sessionModelNote: "Modelschatting – berekening en grenzen",
      feedback: "Vragen, ideeën of feedback?",
      facebook: "VOLG OP FACEBOOK →",
      privateDisclosure: 'Privé, niet-commercieel hobbyproject. Geen advertenties of inkomsten.', privateFacebook: 'Contact via Facebook (privékanaal, geen inkomsten)', lawDdg: '§ 5 DDG',
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
      germanyMethodText: "Alemanha: KBA FZ 27 em 1 de julho de 2025 e 2026; diferença distribuída por 365 dias. Doze meses suavizam variações breves mas reagem mais lentamente a novas tendências. Híbridos inclui PHEV. Extrapolação linear após julho de 2026.",
      kbaDataset: 'KBA · FZ 27 · parque trimestral 2026',
      kbaOverview: 'KBA · visão geral FZ 27',
      heroCopy: "A frota automóvel mundial muda continuamente. Este relógio torna essa transição visível.",
      electric: "ELÉTRICO",
      hybrid: "HÍBRIDO",
      petrol: "GASOLINA",
      diesel: "DIESEL",
      vehiclesPerMinute: "veículos / minuto",
      impactShort: '≈ Fluxo modelado de combustível e CO₂ operacional com base na frota regional.',
      impactHeading: 'Modelo de combustível e CO₂', impactWhatTitle: 'Visualização', impactCalcTitle: 'Cálculo', impactBevTitle: 'Comparação BEV', impactSourcesTitle: 'Fontes e limites', impactUnitsTitle: 'Unidades',
      impactCalc: 'Frota × km/ano × L/100 km ÷ 100 ÷ segundos/ano dá L/s; combustível × kg CO₂/L dá CO₂ no escape. Para BEV: emissões de gasolina comparáveis evitadas menos kWh BEV × fator anual médio regional da rede. Fluxos anuais distribuídos uniformemente; viagens não são medidas.',
      impactBev: 'BEV: comparação operacional líquida para a mesma distância estimada: emissões diretas evitadas de um carro a gasolina comparável menos as da recarga segundo a média anual regional da rede. Fabrico do veículo e emissões a montante do combustível são excluídos.',
      impactSources: 'Alemanha: frota KBA e dados Destatis. UE: atividade/energia Eurostat e dados reais EEA de carros recentes. EUA: DOE/EPA; global/China: pressupostos IEA e referências nacionais. Sem medições completas da frota, os parâmetros são pressupostos do modelo. Híbridos plug-in têm maior incerteza devido ao carregamento. Os híbridos mostram combustível e CO₂ no escape; a eletricidade de carregamento dos plug-in ainda não é incluída por falta de uma divisão fiável da frota.',
      impactSessionTitle: 'COMBUSTÍVEL / CO₂ (ESTIMATIVA MODELADA)',
      impactSinceData: 'Desde a data dos dados', millionLitres: 'milhões de litros', thousandLitres: 'mil litros', tonnesCO2: 'toneladas de CO₂', kilogramsCO2: 'quilogramas de CO₂', litres: 'litros',
      impactParameterNote: 'As colunas BEV mostram km/ano, consumo do veículo de combustão comparável em L/100 km e consumo BEV em kWh/100 km. Os fatores elétricos usam os anos mais recentes aqui considerados (global/UE/China 2025; Alemanha 2025 (provisório); EUA 2023) e são médias anuais de geração, não fatores marginais de carregamento. Fatores de combustível: gasolina 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. São valores-base arredondados do modelo, não medições de cada veículo; a confiança varia por região.', impactRegion: 'Região', impactBevCol: 'BEV: km/ano · combustão L/100 km · BEV kWh/100 km', impactGridCol: 'Rede g CO₂/kWh', impactParamsTitle: 'Parâmetros do modelo por região: distância anual e consumo',
      impactTableUnitNote: 'Células gasolina, diesel e híbrido: km/ano · L/100 km. Célula BEV: km/ano · combustão comparável L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV', impactHybrid: 'Híbrido', impactPetrol: 'Gasolina', impactDiesel: 'Diesel', impactAvoided: 'evitado', impactProduced: 'emitido', fuelSaved: 'poupados', fuelBurned: 'queimados',
      bevLabel: "VEÍCULOS ELÉTRICOS A BATERIA",
      hybridLabel: "HEV + HÍBRIDO PLUG-IN",
      iceLabel: "MOTOR DE COMBUSTÃO",
      liveSession: "SESSÃO AO VIVO",
      sinceOpened: "DESDE QUE ABRIU ESTA PÁGINA",
      observationTime: "Tempo de observação:",
      modeledEstimate: "ESTIMATIVA MODELADA EM TEMPO REAL",
      methodDetails: "DADOS & METODOLOGIA",
      methodText: "Os contadores extrapolam linearmente frotas publicadas e hipóteses explícitas. Global soma UE, China, EUA e resto do mundo modelado; a Alemanha está incluída na UE. Os âmbitos regionais diferem. Não é um censo oficial ao vivo.",
      sourceBase: "Fontes: IEA · ACEA · VDA/UBA · modelo",
      dataModel: "Modelo de dados",
      dataAsOf: "Dados de",
      dataIdeaBy: "UMA IDEIA DE DADOS DE",
      brandCopy: "Mobilidade elétrica. Factos. Dia a dia.",
      sessionModelNote: "Estimativa – cálculo e limites",
      feedback: "Perguntas, ideias ou comentários?",
      facebook: "SEGUIR NO FACEBOOK →",
      privateDisclosure: 'Projeto pessoal e não comercial. Sem publicidade nem receitas.', privateFacebook: 'Contacto pelo Facebook (canal privado, sem receitas)', lawDdg: '§ 5 DDG',
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
      germanyMethodText: "Tyskland: KBA FZ 27 per 1. juli 2025 og 2026; forskjellen fordeles over 365 dager. Tolv måneder jevner ut korte svingninger, men reagerer langsommere på nye trender. Hybrid inkluderer PHEV. Lineær ekstrapolering etter juli 2026.",
      kbaDataset: 'KBA · FZ 27 · kvartalstall 2026',
      kbaOverview: 'KBA · FZ 27-oversikt',
      heroCopy: "Den globale bilparken endrer seg hele døgnet. Denne klokken gjør overgangen synlig.",
      electric: "ELEKTRISK",
      hybrid: "HYBRID",
      petrol: "BENSIN",
      diesel: "DIESEL",
      vehiclesPerMinute: "kjøretøy / minutt",
      impactShort: '≈ Modellert drivstoff- og operativ CO₂-strøm basert på regional bilpark.',
      impactHeading: 'Drivstoff- og CO₂-modell', impactWhatTitle: 'Visning', impactCalcTitle: 'Beregning', impactBevTitle: 'BEV-sammenligning', impactSourcesTitle: 'Kilder og begrensninger', impactUnitsTitle: 'Enheter',
      impactCalc: 'Bilpark × km/år × L/100 km ÷ 100 ÷ sekunder/år gir L/s; drivstoff × kg CO₂/L gir eksos-CO₂. For BEV: unngåtte bensinutslipp minus BEV-kWh × regional årlig gjennomsnittlig nettfaktor. Årsflyten fordeles jevnt; kjøreturer måles ikke.',
      impactBev: 'BEV: netto driftsammenligning for samme beregnede kjørelengde: unngåtte direkte utslipp fra en tilsvarende bensinbil minus ladeutslipp beregnet med regional årlig gjennomsnittlig strømmiks. Bilproduksjon og oppstrøms drivstoffutslipp er ikke med.',
      impactSources: 'Tyskland bruker KBA-bestand og Destatis-kjørelengde/drivstoffdata. EU kombinerer Eurostat-aktivitet/energi og EEA-reelle data for nyere biler. USA bruker DOE/EPA; globalt/Kina brukes IEA-forutsetninger og nasjonale holdepunkter. Der komplette flåtemålinger mangler, er parametrene modellforutsetninger. Plug-in-hybrider er mer usikre på grunn av lading. Hybrid viser drivstoff og eksos-CO₂; ladestrøm for plug-in-hybrider er ennå ikke inkludert fordi en pålitelig flåtefordeling mangler.',
      impactSessionTitle: 'DRIVSTOFF / CO₂ (MODELLERT ESTIMAT)',
      impactSinceData: 'Siden datodato', millionLitres: 'millioner liter', thousandLitres: 'tusen liter', tonnesCO2: 'tonn CO₂', kilogramsCO2: 'kilogram CO₂', litres: 'liter',
      impactParameterNote: 'BEV-kolonnene viser km/år, drivstofforbruk for sammenligningsbilen i L/100 km og BEV-forbruk i kWh/100 km. Nettfaktorene bruker de nyeste publiseringsårene her (globalt/EU/Kina 2025; Tyskland 2025 (foreløpig); USA 2023) og er årlige gjennomsnitt for produksjon, ikke marginale ladefaktorer. Drivstoffaktorer: bensin 2,31 kg CO₂/L, diesel 2,68 kg CO₂/L. Verdiene er avrundede modellforutsetninger, ikke målinger av hver bil; sikkerheten varierer mellom regioner.', impactRegion: 'Region', impactBevCol: 'BEV: km/år · fossil L/100 km · BEV kWh/100 km', impactGridCol: 'Strømnett g CO₂/kWh', impactParamsTitle: 'Modellparametere per region: årlig kjørelengde og forbruk',
      impactTableUnitNote: 'Bensin-, diesel- og hybridceller: km/år · L/100 km. BEV-celle: km/år · sammenlignbar fossilbil L/100 km · BEV kWh/100 km.',
      impactElectric: 'BEV', impactHybrid: 'Hybrid', impactPetrol: 'Bensin', impactDiesel: 'Diesel', impactAvoided: 'unngått', impactProduced: 'sluppet ut', fuelSaved: 'spart', fuelBurned: 'forbrent',
      bevLabel: "BATTERIELEKTRISKE KJØRETØY",
      hybridLabel: "HEV + LADBAR HYBRID",
      iceLabel: "FORBRENNINGSMOTOR",
      liveSession: "LIVE-ØKT",
      sinceOpened: "SIDEN DU ÅPNET DENNE SIDEN",
      observationTime: "Observasjonstid:",
      modeledEstimate: "MODELLERT SANNTIDSESTIMAT",
      methodDetails: "DATA & METODE",
      methodText: "Tellerne fremskriver publiserte bestander og tydelige antakelser lineært. Global summerer EU, Kina, USA og modellert resten av verden; Tyskland inngår i EU. Regionale kjøretøyavgrensninger varierer. Ingen offisiell direktetelling.",
      sourceBase: "Kilder: IEA · ACEA · globale markedsdata",
      dataModel: "Datamodell",
      dataAsOf: "Data per",
      dataIdeaBy: "EN DATAIDÉ FRA",
      brandCopy: "Elektrisk mobilitet. Fakta. Hverdagsliv.",
      sessionModelNote: "Modellestimat – beregning og grenser",
      feedback: "Spørsmål, ideer eller tilbakemeldinger?",
      facebook: "FØLG PÅ FACEBOOK →",
      privateDisclosure: 'Privat, ikke-kommersielt hobbyprosjekt. Ingen reklame eller inntekter.', privateFacebook: 'Kontakt via Facebook (privat kanal, ingen inntekter)', lawDdg: '§ 5 DDG',
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
      germanyMethodText: "德国：KBA FZ 27 乘用车保有量，2025年7月1日至2026年7月1日。变化均匀分摊至365天。12个月减少短期波动，但对新趋势反应较慢，并不保证每个时点更准确。混合动力已包含插电混动。2026年7月后线性外推。",
      kbaDataset: 'KBA · FZ 27 · 2026季度保有量',
      kbaOverview: 'KBA · FZ 27数据说明',
      heroCopy: "全球乘用车保有量持续变化。这座时钟让动力结构的转型变得直观可见。",
      electric: "纯电动",
      hybrid: "混合动力",
      petrol: "汽油",
      diesel: "柴油",
      vehiclesPerMinute: "辆 / 分钟",
      impactShort: '≈ 根据各地区车辆保有量计算的燃料与运行 CO₂ 模型流量。',
      impactHeading: '燃料与 CO₂ 模型', impactWhatTitle: '显示内容', impactCalcTitle: '计算方法', impactBevTitle: '纯电车对比', impactSourcesTitle: '来源与限制', impactUnitsTitle: '单位',
      impactCalc: '车辆保有量 × 公里/年 × L/100 km ÷ 100 ÷ 每年秒数 = L/s；燃料 × kg CO₂/L = 尾气 CO₂。纯电车净值 = 避免的汽油车排放 − 纯电耗电量 × 地区年度平均电网因子。年度流量均匀分摊；并非实测行驶。',
      impactBev: '纯电车：按相同估算里程进行净运行比较：可比汽油车避免的直接尾气排放，减去按地区年度平均电网排放因子计算的充电排放。不含车辆制造和燃料上游排放。',
      impactSources: '德国采用 KBA 保有量与 Destatis 里程/燃料数据。欧盟结合 Eurostat 活动/能源数据和 EEA 较新车辆实测数据。美国采用 DOE/EPA；全球/中国采用 IEA 假设和国家基准。缺少完整车队测量时，参数属于模型假设。插混因充电行为而不确定性更高。混合动力显示燃料与尾气 CO₂；由于缺少可靠的车队拆分数据，暂未计入插电式混合动力的充电用电。',
      impactSessionTitle: '燃料 / CO₂（模型估算）',
      impactSinceData: '自数据日期起', millionLitres: '百万升', thousandLitres: '千升', tonnesCO2: '吨 CO₂', kilogramsCO2: '千克 CO₂', litres: '升',
      impactParameterNote: '纯电车列依次为年行驶公里、对照燃油车油耗（L/100 km）和纯电车耗电量（kWh/100 km）。电网因子采用此处使用的最新发布年份（全球/欧盟/中国为2025，德国为2025（暂定）；美国为2023），是年度平均发电因子，并非充电的边际排放因子。燃料因子：汽油 2.31 kg CO₂/L，柴油 2.68 kg CO₂/L。这些是经过取整的模型基线，并非对每辆在用车的实测；各地区可靠性不同。', impactRegion: '地区', impactBevCol: '纯电车：公里/年 · 燃油车 L/100 km · 纯电车 kWh/100 km', impactGridCol: '电网 g CO₂/kWh', impactParamsTitle: '各地区模型参数：年行驶里程与能耗',
      impactTableUnitNote: '汽油、柴油和混合动力单元：公里/年 · L/100 km。纯电单元：公里/年 · 对照燃油车 L/100 km · 纯电 kWh/100 km。',
      impactElectric: '纯电', impactHybrid: '混合动力', impactPetrol: '汽油', impactDiesel: '柴油', impactAvoided: '避免', impactProduced: '排放', fuelSaved: '节省', fuelBurned: '燃烧',
      bevLabel: "纯电动汽车",
      hybridLabel: "HEV + 插电式混合动力",
      iceLabel: "内燃机",
      liveSession: "实时会话",
      sinceOpened: "自你打开此页面以来",
      observationTime: "观察时间：",
      modeledEstimate: "模型化实时估算",
      methodDetails: "数据与方法",
      methodText: "计数器根据公布的保有量与明确标注的假设进行线性外推。全球等于欧盟、中国、美国和模型估算的世界其他地区之和；德国包含在欧盟内。各地区车辆统计范围不同，并非官方实时统计。",
      sourceBase: "数据来源：IEA · ACEA · VDA/UBA · 模型",
      dataModel: "数据模型",
      dataAsOf: "数据截至",
      dataIdeaBy: "数据创意来自",
      brandCopy: "电动出行。事实。日常。",
      sessionModelNote: "模型估算：计算方法与局限",
      feedback: "有问题、想法或反馈？",
      facebook: "在 FACEBOOK 上关注 →",
      privateDisclosure: '私人非商业爱好项目。无广告，无收入。', privateFacebook: '通过 Facebook 联系（私人频道，无收入）', lawDdg: '§ 5 DDG',
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
    const key = keys.find(k => market.categories[k] === item);
    return key ? MODEL.current(market, key, now) : Math.max(0, item.base + perSecond(item, market) * seconds);
  }

  function formatInt(value) {
    return Math.round(value).toLocaleString(TRANSLATIONS[currentLang].locale);
  }

  function formatDecimal(value, decimals = 1, allowTwoDecimals = false) {
    decimals = Math.min(decimals, allowTwoDecimals ? 2 : 1);
    return Math.abs(value).toLocaleString(
      TRANSLATIONS[currentLang].locale,
      { minimumFractionDigits: decimals, maximumFractionDigits: decimals }
    );
  }

  function signed(value, decimals = 1) {
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
      el("modelVersion").textContent = `${t("dataModel")}: V3.1.3${region?.methodTag ? ` · ${region.methodTag}` : ""}`;
    }
    if (el("dataDate")) {
      const dataDate = region?.dataDate && /^\d{4}-\d{2}-\d{2}$/.test(region.dataDate)
        ? new Intl.DateTimeFormat(TRANSLATIONS[currentLang].locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${region.dataDate}T00:00:00Z`))
        : (region?.dataDate || DATA.dataDate);
      el("dataDate").textContent = `${t("dataAsOf")}: ${dataDate}`;
    }
    if (el("researchDate")) el("researchDate").textContent = (ACCOUNTING_LABELS[currentLang] || ACCOUNTING_LABELS.en)[4];
    if (currentMode === "global" && el("dataDate")) el("dataDate").textContent += currentLang === "de" ? " (gemeinsamer Rechenstichtag; Regionalstände abweichend)" : " (common accounting date; regional anchors differ)";
    const sourceBase = document.querySelector('[data-i18n="sourceBase"]');
    if (sourceBase) sourceBase.textContent = region?.sourceName || (germany ? t("germanySource") : t("sourceBase"));
    const localizedRegion = region?.translations?.[currentLang] || region?.translations?.en || {};
    const info = REGION_INFO[currentLang] || REGION_INFO.en;
    const methodHeading = document.querySelector("[data-i18n=regionModelHeading]");
    if (methodHeading) methodHeading.textContent = currentMode === "germany" ? t("germanyModelHeading") : (t("regionModelHeading") || info.heading);
    renderAccountingMethod();
    const regionalMethod = el("regionalMethodText");
    if (regionalMethod) regionalMethod.textContent = "";
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
    document.querySelectorAll(".mode-switch button[data-mode], .session-region-switch button[data-mode]").forEach((button) => {
      const active = button.dataset.mode === currentMode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
      const regionLabelKey = { global: "modeGlobal", germany: "modeGermany", eu: "modeEU", china: "modeChina", usa: "modeUSA" }[button.dataset.mode];
      button.setAttribute("aria-label", t(regionLabelKey));
      button.title = t(regionLabelKey);
    });
    if (DATA.facebookUrl) {
      if (el("facebookLink")) el("facebookLink").href = DATA.facebookUrl;

    }

    keys.forEach((key) => {
      const item = market.categories[key];
      const bar = el(`bar-${key}`);
      const trend = el(`trend-${key}`);
      const share = market.globalFleet?.base ? (item.base / market.globalFleet.base) * 100 : 0;
      const previousBase = item.base - item.annualChange;
      const trendValue = item.trendPercent ?? (previousBase ? (item.annualChange / previousBase) * 100 : 0);
      if (bar) bar.style.width = `${Math.max(0, Math.min(100, share))}%`;
      if (trend) {
        trend.textContent = `${signed(trendValue, 1)} %`;
        const up = item.annualChange >= 0;
        trend.parentElement.classList.toggle("trend-up", up);
        trend.parentElement.classList.toggle("trend-down", !up);
        trend.parentElement.querySelector("span").textContent = up ? "▲" : "▼";
      }
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
    const counts = MODEL.ledger(now, startTime);
    const changes = MODEL.ledger(now, startTime, true);
    renderAccountingLive(changes);

    keys.forEach((key) => {
      const item = market.categories[key];
      const rate = perSecond(item, market);
      const count = currentValue(item, market, now);
      const sessionChange = rate * sessionSeconds;

      if (el(`count-${key}`)) el(`count-${key}`).textContent = formatInt(counts[currentMode][key]);
      if (el(`rate-${key}`)) el(`rate-${key}`).textContent = signed(rate * 60, 1);
      if (el(`since-${key}`)) el(`since-${key}`).textContent = signedInt(changes[currentMode][key]);
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
    const components = MODEL.parts(market);
    if (components.length) return components.reduce((sum, part) => {
      const flow = impactFlow(key, part, MODEL.current(part,key,Date.now()));
      for (const name of ["litres","co2kg","avoidedTailpipe","chargingKwh","chargingCO2"]) sum[name]=(sum[name]||0)+(flow[name]||0);
      sum.avoided=key === "electric";return sum;
    }, {});
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
    if (unit === "L" && abs >= 1000000) return `${formatDecimal(value / 1000000, 2, true)} M L`;
    if (unit === "L" && abs >= 1000) return `${formatDecimal(value / 1000, 2)} k L`;
    return `${formatDecimal(value, 2)} ${unit}`;
  }

  function accumulatedImpact(key, market, now = Date.now(), from = new Date(market.referenceDate).getTime()) {
    const components = MODEL.parts(market);
    if (components.length) return components.reduce((sum, part) => {
      const amount = accumulatedImpact(key,part,now,from);
      sum.litres += amount.litres;sum.co2kg += amount.co2kg;return sum;
    }, {litres:0,co2kg:0});
    const p = impactParams(key, market);
    if (!p) return { litres: 0, co2kg: 0 };
    const start = Math.min(from, now);
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
      if (abs >= 1_000_000) return { number: formatDecimal(value / 1_000_000, 2, true), label: t("millionLitres") };
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
      const fuelStatusText = key === "electric" ? t("fuelSaved") : t("fuelBurned");
      const co2StatusText = key === "electric" ? t("impactAvoided") : t("impactProduced");
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
        status.textContent = isCo2 ? co2StatusText : fuelStatusText;
        group.append(amount, unitLabel, status);
        entry.appendChild(group);
      };
      appendMetric(sessionTotal.litres, "L");
      appendMetric(sessionTotal.co2kg, "kg", true);
      target.appendChild(entry);
    });
  }


  const ACCOUNTING_LABELS = {
    de:["Bestände, Datenlücken und globale Bilanz","Rest der Welt","EU ohne Deutschland","Modelländerung seit Seitenaufruf","Datenprüfung: 1. Oktober 2026"],
    en:["Stocks, data gaps and global accounting","Rest of world","EU excluding Germany","Modeled change since page opened","Sources checked: 1 October 2026"],
    fr:["Parcs, lacunes et bilan mondial","Reste du monde","UE hors Allemagne","Variation modélisée depuis l’ouverture","Sources vérifiées : 1 octobre 2026"],
    es:["Flotas, lagunas y balance mundial","Resto del mundo","UE sin Alemania","Cambio modelado desde la apertura","Fuentes revisadas: 1 octubre 2026"],
    it:["Flotte, lacune e bilancio mondiale","Resto del mondo","UE esclusa Germania","Variazione modellata dall’apertura","Fonti verificate: 1 ottobre 2026"],
    pl:["Floty, braki danych i bilans globalny","Reszta świata","UE bez Niemiec","Modelowana zmiana od otwarcia strony","Weryfikacja źródeł: 1 października 2026"],
    nl:["Wagenparken, ontbrekende gegevens en wereldbalans","Rest van de wereld","EU zonder Duitsland","Gemodelleerde verandering sinds openen","Bronnen gecontroleerd: 1 oktober 2026"],
    pt:["Frotas, lacunas e balanço mundial","Resto do mundo","UE sem Alemanha","Variação modelada desde a abertura","Fontes verificadas: 1 outubro 2026"],
    no:["Bilbestand, datamangler og global balanse","Resten av verden","EU uten Tyskland","Modellert endring siden siden ble åpnet","Kilder kontrollert: 1. oktober 2026"],
    zh:["保有量、数据缺口与全球核算","世界其他地区","欧盟（不含德国）","自页面打开以来的模型变化","来源核查：2026年10月1日"]
  };
  function renderAccountingMethod() {
    window.DRIVECOUNT_METHOD.render(currentLang, t, DATA, ACCOUNTING_LABELS[currentLang]);
  }
  function renderAccountingLive(ledger) {
    for(const [id,values] of Object.entries(ledger)) for(const key of keys) {
      const cell=el(`audit-${id}-${key}`);if(cell)cell.textContent=signedInt(values[key]);
    }
  }

  function setupModeSwitch() {
    document.querySelectorAll(".mode-switch button[data-mode], .session-region-switch button[data-mode]").forEach((button) => {
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
  el("sessionModelNote")?.addEventListener("click", () => {
    const details = document.querySelector(".method-details");
    if (details) details.open = true;
  });
  currentMode = detectMode();
  applyLanguage(detectLanguage(), false);
  tick();
})();
