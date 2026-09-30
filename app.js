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
      germanyHeadline1: 'DER ANTRIEBSWANDEL',
      germanyHeadline2: 'IN DEUTSCHLAND.',
      germanyHeroCopy: 'Pkw-Bestand und Antriebswechsel in Deutschland – auf Basis der KBA-Bestandszahlen.',
      germanySource: 'Quellen: Kraftfahrt-Bundesamt (KBA) · FZ 27 · Modell',
      germanyModelHeading: 'Deutschland-Modell',
      germanyBevLabel: 'REINE BATTERIEFAHRZEUGE',
      germanyHybridLabel: 'HYBRID INKL. PLUG-IN',
      germanyIceLabel: 'VERBRENNUNGSMOTOR',
      germanyMethodText: 'Das Deutschland-Modell nutzt die quartalsweisen Pkw-Bestände des Kraftfahrt-Bundesamts (KBA), FZ 27. Referenz ist der 1. Juli 2026. Für die Zählgeschwindigkeit wird die beobachtete Bestandsänderung vom 1. Juli 2025 bis 1. Juli 2026 gleichmäßig über 365 Tage verteilt. Diese rollierende Jahresrate ist stabiler als die Hochrechnung eines einzelnen Quartals und aktueller als Januar-zu-Januar. „Hybrid insgesamt“ enthält Plug-in-Hybride. Gas und Sonstige sind im Restbestand enthalten, damit die Gesamtzahl aufgeht. Zwischen KBA-Stichtagen ist der laufende Zähler eine lineare Schätzung, keine Live-Registrierung.',
      kbaDataset: 'KBA · FZ 27 · Quartalsbestand 2026',
      kbaOverview: 'KBA · Produktübersicht FZ 27',
      heroCopy: "Rund um die Uhr verändert sich der globale Fahrzeugbestand. Diese Uhr macht den Wandel sichtbar.",
      electric: "ELEKTRO",
      hybrid: "HYBRID",
      petrol: "BENZIN",
      diesel: "DIESEL",
      vehiclesPerSecond: "Fahrzeuge / Sekunde",
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
      germanyHeadline1: "GERMANY'S",
      germanyHeadline2: 'POWERTRAIN SHIFT.',
      germanyHeroCopy: 'Germany’s passenger-car fleet and powertrain shift, based on official KBA stock data.',
      germanySource: 'Sources: Federal Motor Transport Authority (KBA) · FZ 27 · model',
      germanyModelHeading: 'Germany model',
      germanyBevLabel: 'BATTERY ELECTRIC VEHICLES',
      germanyHybridLabel: 'HYBRID INCLUDING PLUG-IN',
      germanyIceLabel: 'COMBUSTION ENGINE',
      germanyMethodText: 'Germany mode uses the quarterly passenger-car stock in the Federal Motor Transport Authority (KBA) FZ 27 data. The latest reference is 1 July 2026. The counter rate is the observed stock change from 1 July 2025 to 1 July 2026, spread evenly over 365 days. This rolling 12-month rate is steadier than projecting a single quarter and newer than a January-to-January rate. “Hybrid total” includes plug-in hybrids. Gas and other vehicles are included in the hidden remainder so the totals reconcile. Between KBA snapshot dates, the running counter is a linear estimate, not a live registration feed.',
      kbaDataset: 'KBA · FZ 27 · quarterly fleet 2026',
      kbaOverview: 'KBA · FZ 27 data overview',
      heroCopy: "The global vehicle fleet changes around the clock. This clock makes the transition visible.",
      electric: "ELECTRIC",
      hybrid: "HYBRID",
      petrol: "PETROL",
      diesel: "DIESEL",
      vehiclesPerSecond: "vehicles / second",
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
      germanyHeadline1: 'LE PARC AUTO',
      germanyHeadline2: 'ALLEMAND EN TRANSITION.',
      germanyHeroCopy: 'Le parc de voitures particulières et sa transition en Allemagne, selon les données officielles du KBA.',
      germanySource: 'Sources : KBA · FZ 27 · modèle',
      germanyModelHeading: 'Modèle pour l’Allemagne',
      germanyBevLabel: 'VÉHICULES 100 % ÉLECTRIQUES',
      germanyHybridLabel: 'HYBRIDE, RECHARGEABLE INCLUSE',
      germanyIceLabel: 'MOTEUR THERMIQUE',
      germanyMethodText: 'Le mode Allemagne utilise les stocks trimestriels de voitures particulières du jeu FZ 27 de l’Office fédéral allemand des véhicules à moteur (KBA). La dernière référence est le 1er juillet 2026. Le rythme du compteur répartit uniformément sur 365 jours la variation observée entre le 1er juillet 2025 et le 1er juillet 2026. Cette moyenne mobile sur 12 mois est plus stable qu’une extrapolation d’un seul trimestre et plus récente qu’une comparaison janvier à janvier. « Hybride total » inclut les hybrides rechargeables. Le gaz et les autres véhicules sont inclus dans le reste pour équilibrer le total. Entre deux dates KBA, le compteur est une estimation linéaire, pas un flux d’immatriculations en direct.',
      kbaDataset: 'KBA · FZ 27 · parc trimestriel 2026',
      kbaOverview: 'KBA · aperçu FZ 27',
      heroCopy: "Le parc automobile mondial évolue en permanence. Cette horloge rend cette transition visible.",
      electric: "ÉLECTRIQUE",
      hybrid: "HYBRIDE",
      petrol: "ESSENCE",
      diesel: "DIESEL",
      vehiclesPerSecond: "véhicules / seconde",
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
      germanyHeadline1: 'EL CAMBIO',
      germanyHeadline2: 'DE PROPULSIÓN EN ALEMANIA.',
      germanyHeroCopy: 'El parque de turismos y su transición en Alemania, según los datos oficiales del KBA.',
      germanySource: 'Fuentes: KBA · FZ 27 · modelo',
      germanyModelHeading: 'Modelo de Alemania',
      germanyBevLabel: 'VEHÍCULOS ELÉCTRICOS DE BATERÍA',
      germanyHybridLabel: 'HÍBRIDO INCL. ENCHUFABLE',
      germanyIceLabel: 'MOTOR DE COMBUSTIÓN',
      germanyMethodText: 'El modo Alemania utiliza el parque trimestral de turismos de la estadística FZ 27 del organismo federal alemán de vehículos (KBA). La referencia más reciente es el 1 de julio de 2026. La velocidad del contador reparte uniformemente en 365 días el cambio observado entre el 1 de julio de 2025 y el 1 de julio de 2026. Esta tasa móvil de 12 meses es más estable que extrapolar un solo trimestre y más actual que comparar enero con enero. «Híbrido total» incluye los híbridos enchufables. El gas y otros vehículos se cuentan en el resto oculto para cuadrar el total. Entre fechas del KBA, el contador es una estimación lineal, no un registro en directo.',
      kbaDataset: 'KBA · FZ 27 · parque trimestral 2026',
      kbaOverview: 'KBA · información de FZ 27',
      heroCopy: "El parque mundial de vehículos cambia a todas horas. Este reloj hace visible esa transición.",
      electric: "ELÉCTRICO",
      hybrid: "HÍBRIDO",
      petrol: "GASOLINA",
      diesel: "DIÉSEL",
      vehiclesPerSecond: "vehículos / segundo",
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
      germanyHeadline1: 'IL CAMBIO',
      germanyHeadline2: 'DEI MOTORI IN GERMANIA.',
      germanyHeroCopy: 'Il parco auto e la transizione delle motorizzazioni in Germania, secondo i dati ufficiali KBA.',
      germanySource: 'Fonti: KBA · FZ 27 · modello',
      germanyModelHeading: 'Modello Germania',
      germanyBevLabel: 'VEICOLI ELETTRICI A BATTERIA',
      germanyHybridLabel: 'IBRIDO, INCLUSO PLUG-IN',
      germanyIceLabel: 'MOTORE A COMBUSTIONE',
      germanyMethodText: 'La modalità Germania usa i dati trimestrali del parco auto FZ 27 dell’Ufficio federale tedesco per i veicoli (KBA). L’ultimo riferimento è il 1º luglio 2026. La velocità del contatore distribuisce uniformemente su 365 giorni la variazione osservata dal 1º luglio 2025 al 1º luglio 2026. Questa media mobile di 12 mesi è più stabile dell’estrapolazione di un solo trimestre e più aggiornata del confronto gennaio-gennaio. “Ibrido totale” include i plug-in. Gas e altre categorie sono inclusi nel residuo nascosto affinché i totali coincidano. Tra due date KBA, il contatore è una stima lineare, non un flusso di immatricolazioni in diretta.',
      kbaDataset: 'KBA · FZ 27 · parco trimestrale 2026',
      kbaOverview: 'KBA · panoramica FZ 27',
      heroCopy: "Il parco auto mondiale cambia continuamente. Questo orologio rende visibile la transizione.",
      electric: "ELETTRICO",
      hybrid: "IBRIDO",
      petrol: "BENZINA",
      diesel: "DIESEL",
      vehiclesPerSecond: "veicoli / secondo",
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
      germanyHeadline1: 'ZMIANA NAPĘDÓW',
      germanyHeadline2: 'W NIEMCZECH.',
      germanyHeroCopy: 'Park samochodów osobowych i zmiany napędów w Niemczech według oficjalnych danych KBA.',
      germanySource: 'Źródła: KBA · FZ 27 · model',
      germanyModelHeading: 'Model dla Niemiec',
      germanyBevLabel: 'SAMOCHODY ELEKTRYCZNE BEV',
      germanyHybridLabel: 'HYBRYDY, W TYM PLUG-IN',
      germanyIceLabel: 'SILNIK SPALINOWY',
      germanyMethodText: 'Tryb Niemcy wykorzystuje kwartalne dane o parku samochodów osobowych KBA FZ 27. Najnowszy punkt odniesienia to 1 lipca 2026 r. Szybkość licznika równomiernie rozkłada na 365 dni zmianę stanu zaobserwowaną między 1 lipca 2025 a 1 lipca 2026 r. Ta krocząca średnia z 12 miesięcy jest stabilniejsza niż ekstrapolacja jednego kwartału i nowsza niż porównanie styczeń do stycznia. „Hybrydy ogółem” obejmują hybrydy plug-in. Gaz i pozostałe pojazdy są uwzględnione w niewidocznej reszcie, aby sumy się zgadzały. Między datami KBA licznik jest liniowym szacunkiem, a nie bieżącym odczytem rejestracji.',
      kbaDataset: 'KBA · FZ 27 · dane kwartalne 2026',
      kbaOverview: 'KBA · opis FZ 27',
      heroCopy: "Światowa flota samochodów zmienia się przez całą dobę. Ten zegar pokazuje tę zmianę na żywo.",
      electric: "ELEKTRYCZNE",
      hybrid: "HYBRYDOWE",
      petrol: "BENZYNA",
      diesel: "DIESEL",
      vehiclesPerSecond: "pojazdów / sekundę",
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
      germanyHeadline1: 'DE AANDRIJFTRANSITIE',
      germanyHeadline2: 'IN DUITSLAND.',
      germanyHeroCopy: 'Het Duitse personenwagenpark en de aandrijftransitie volgens officiële KBA-gegevens.',
      germanySource: 'Bronnen: KBA · FZ 27 · model',
      germanyModelHeading: 'Model voor Duitsland',
      germanyBevLabel: 'BATTERIJ-ELEKTRISCHE VOERTUIGEN',
      germanyHybridLabel: 'HYBRIDE, INCLUSIEF PLUG-IN',
      germanyIceLabel: 'VERBRANDINGSMOTOR',
      germanyMethodText: 'De Duitsland-modus gebruikt de kwartaalstanden van personenauto’s uit de KBA-statistiek FZ 27. De nieuwste referentie is 1 juli 2026. De tellersnelheid verdeelt de waargenomen verandering van 1 juli 2025 tot 1 juli 2026 gelijkmatig over 365 dagen. Dit voortschrijdende jaargemiddelde is stabieler dan extrapolatie van één kwartaal en actueler dan januari-op-januari. “Hybride totaal” omvat plug-inhybrides. Gas en overige voertuigen tellen mee in het verborgen restant zodat de totalen kloppen. Tussen KBA-peildata is de teller een lineaire schatting, geen live registratiefeed.',
      kbaDataset: 'KBA · FZ 27 · kwartaalbestand 2026',
      kbaOverview: 'KBA · overzicht FZ 27',
      heroCopy: "Het wereldwijde wagenpark verandert voortdurend. Deze klok maakt die transitie zichtbaar.",
      electric: "ELEKTRISCH",
      hybrid: "HYBRIDE",
      petrol: "BENZINE",
      diesel: "DIESEL",
      vehiclesPerSecond: "voertuigen / seconde",
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
      germanyHeadline1: 'A TRANSIÇÃO',
      germanyHeadline2: 'DOS AUTOMÓVEIS NA ALEMANHA.',
      germanyHeroCopy: 'O parque automóvel e a transição dos motores na Alemanha, segundo os dados oficiais do KBA.',
      germanySource: 'Fontes: KBA · FZ 27 · modelo',
      germanyModelHeading: 'Modelo da Alemanha',
      germanyBevLabel: 'VEÍCULOS ELÉTRICOS A BATERIA',
      germanyHybridLabel: 'HÍBRIDOS, INCLUINDO PLUG-IN',
      germanyIceLabel: 'MOTOR DE COMBUSTÃO',
      germanyMethodText: 'O modo Alemanha utiliza os dados trimestrais do parque de automóveis do KBA FZ 27. A referência mais recente é 1 de julho de 2026. A velocidade do contador distribui uniformemente por 365 dias a alteração observada entre 1 de julho de 2025 e 1 de julho de 2026. Esta média móvel de 12 meses é mais estável do que extrapolar um único trimestre e mais atual do que comparar janeiro com janeiro. “Híbridos no total” inclui híbridos plug-in. Gás e outras categorias entram no remanescente oculto para fechar os totais. Entre datas do KBA, o contador é uma estimativa linear, não um registo de matrículas em direto.',
      kbaDataset: 'KBA · FZ 27 · parque trimestral 2026',
      kbaOverview: 'KBA · visão geral FZ 27',
      heroCopy: "A frota automóvel mundial muda continuamente. Este relógio torna essa transição visível.",
      electric: "ELÉTRICO",
      hybrid: "HÍBRIDO",
      petrol: "GASOLINA",
      diesel: "DIESEL",
      vehiclesPerSecond: "veículos / segundo",
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
      germanyHeadline1: 'DRIVLINJESKIFTET',
      germanyHeadline2: 'I TYSKLAND.',
      germanyHeroCopy: 'Den tyske personbilparken og endringer i drivlinjer, basert på offisielle KBA-tall.',
      germanySource: 'Kilder: KBA · FZ 27 · modell',
      germanyModelHeading: 'Tysklandsmodell',
      germanyBevLabel: 'BATTERIELEKTRISKE BILER',
      germanyHybridLabel: 'HYBRID, INKL. PLUG-IN',
      germanyIceLabel: 'FORBRENNINGSMOTOR',
      germanyMethodText: 'Tysklandsmodusen bruker de kvartalsvise personbiltallene i KBA-statistikken FZ 27. Nyeste referanse er 1. juli 2026. Tellerhastigheten fordeler den observerte endringen fra 1. juli 2025 til 1. juli 2026 jevnt over 365 dager. Dette rullerende 12-månederssnittet er mer stabilt enn å fremskrive ett kvartal og nyere enn januar-til-januar. «Hybrid totalt» inkluderer ladbare hybrider. Gass og øvrige kjøretøy tas med i en skjult rest slik at totalene stemmer. Mellom KBA-datoene er telleren et lineært estimat, ikke en direktestrøm av registreringer.',
      kbaDataset: 'KBA · FZ 27 · kvartalstall 2026',
      kbaOverview: 'KBA · FZ 27-oversikt',
      heroCopy: "Den globale bilparken endrer seg hele døgnet. Denne klokken gjør overgangen synlig.",
      electric: "ELEKTRISK",
      hybrid: "HYBRID",
      petrol: "BENSIN",
      diesel: "DIESEL",
      vehiclesPerSecond: "kjøretøy / sekund",
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
      germanyHeadline1: '德国汽车',
      germanyHeadline2: '动力转型。',
      germanyHeroCopy: '根据德国联邦机动车管理局（KBA）数据，展示德国乘用车保有量与动力结构变化。',
      germanySource: '来源：KBA · FZ 27 · 模型',
      germanyModelHeading: '德国模型',
      germanyBevLabel: '纯电动汽车',
      germanyHybridLabel: '混合动力（含插电式）',
      germanyIceLabel: '内燃机汽车',
      germanyMethodText: '德国模式使用德国联邦机动车管理局（KBA）FZ 27 的乘用车季度保有量。最新基准日为2026年7月1日。计数速度将2025年7月1日至2026年7月1日观察到的保有量变化均匀分摊到365天。滚动12个月变化比单季度外推更稳定，也比一月至一月的比较更新。“混合动力总计”包含插电式混合动力。燃气和其他车辆计入未显示的剩余类别，以使总数相符。KBA统计日期之间的实时计数是线性估算，并非实时注册数据。',
      kbaDataset: 'KBA · FZ 27 · 2026季度保有量',
      kbaOverview: 'KBA · FZ 27数据说明',
      heroCopy: "全球乘用车保有量持续变化。这座时钟让动力结构的转型变得直观可见。",
      electric: "纯电动",
      hybrid: "混合动力",
      petrol: "汽油",
      diesel: "柴油",
      vehiclesPerSecond: "辆 / 秒",
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
  const startTime = Date.now();
  const keys = ["electric", "hybrid", "petrol", "diesel"];
  const el = (id) => document.getElementById(id);

  let currentLang = "de";
  let currentMode = "global";
  let animationFrameScheduled = false;

  function detectMode() {
    return localStorage.getItem("driveclock-mode") === "germany" && DATA.germany ? "germany" : "global";
  }

  function activeMarket() {
    return currentMode === "germany" && DATA.germany ? DATA.germany : DATA;
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
    return item.base + perSecond(item, market) * seconds;
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
    if (el("modelVersion")) {
      el("modelVersion").textContent = `${t("dataModel")}: ${germany ? "KBA FZ 27 · 12M" : DATA.modelVersion}`;
    }
    if (el("dataDate")) {
      const dataDate = germany
        ? new Intl.DateTimeFormat(TRANSLATIONS[currentLang].locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${market.dataDate}T00:00:00Z`))
        : DATA.dataDate;
      el("dataDate").textContent = `${t("dataAsOf")}: ${dataDate}`;
    }
    const sourceBase = document.querySelector('[data-i18n="sourceBase"]');
    if (sourceBase) sourceBase.textContent = germany ? t("germanySource") : t("sourceBase");
    const headline1 = document.querySelector('[data-i18n="headline1"]');
    const headline2 = document.querySelector('[data-i18n="headline2"]');
    const heroCopy = document.querySelector('[data-i18n="heroCopy"]');
    if (headline1) headline1.textContent = germany ? t("germanyHeadline1") : t("headline1");
    if (headline2) headline2.textContent = germany ? t("germanyHeadline2") : t("headline2");
    if (heroCopy) heroCopy.textContent = germany ? t("germanyHeroCopy") : t("heroCopy");
    const bevLabel = document.querySelector('[data-i18n="bevLabel"]');
    const hybridLabel = document.querySelector('[data-i18n="hybridLabel"]');
    const iceLabels = document.querySelectorAll('[data-i18n="iceLabel"]');
    if (bevLabel) bevLabel.textContent = germany ? t("germanyBevLabel") : t("bevLabel");
    if (hybridLabel) hybridLabel.textContent = germany ? t("germanyHybridLabel") : t("hybridLabel");
    iceLabels.forEach((node) => { node.textContent = germany ? t("germanyIceLabel") : t("iceLabel"); });
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
      const trendValue = (germany ? previousBase : item.base) ? (item.annualChange / (germany ? previousBase : item.base)) * 100 : 0;
      if (bar) bar.style.width = `${Math.max(0, Math.min(100, share))}%`;
      if (trend) trend.textContent = `${signed(trendValue, 1)} %`;
    });
  }

  function setMode(mode, persist = true) {
    currentMode = mode === "germany" && DATA.germany ? "germany" : "global";
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
    });

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
