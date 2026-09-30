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
      methodText: "Die Zähler stellen keine sekundengenau erhobenen Zulassungsdaten dar. Sie interpolieren den weltweiten Pkw-Bestand anhand veröffentlichter Bestands-, Absatz- und Marktdaten. Die Werte für Benzin, Diesel und Hybrid sind Modellwerte.",
      sourceBase: "Quellenbasis: IEA · ACEA · globale Marktdaten",
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
      methodText: "The counters are not second-by-second official registration data. They interpolate the global passenger-car fleet using published stock, sales and market data. Petrol, diesel and hybrid values are model estimates.",
      sourceBase: "Source base: IEA · ACEA · global market data",
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
      methodText: "Les compteurs ne sont pas des immatriculations officielles relevées seconde par seconde. Ils interpolent le parc mondial de voitures particulières à partir de données publiées sur le parc, les ventes et le marché. Les valeurs essence, diesel et hybride sont des estimations de modèle.",
      sourceBase: "Sources : IEA · ACEA · données de marché mondiales",
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
      methodText: "Los contadores no son datos oficiales de matriculación medidos segundo a segundo. Interpolan el parque mundial de turismos a partir de datos publicados de parque, ventas y mercado. Los valores de gasolina, diésel e híbridos son estimaciones del modelo.",
      sourceBase: "Fuentes: IEA · ACEA · datos globales de mercado",
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
      methodText: "I contatori non rappresentano immatricolazioni ufficiali rilevate secondo per secondo. Interpolano il parco mondiale di autovetture usando dati pubblicati su stock, vendite e mercato. I valori di benzina, diesel e ibrido sono stime del modello.",
      sourceBase: "Fonti: IEA · ACEA · dati di mercato globali",
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
      methodText: "Liczniki nie przedstawiają oficjalnych rejestracji mierzonych co sekundę. Interpolują światową flotę samochodów osobowych na podstawie opublikowanych danych o parku, sprzedaży i rynku. Wartości dla benzyny, diesla i hybryd są estymacjami modelu.",
      sourceBase: "Źródła: IEA · ACEA · globalne dane rynkowe",
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
      methodText: "Os contadores não representam matrículas oficiais medidas segundo a segundo. Interpolam a frota mundial de automóveis de passageiros com base em dados publicados de frota, vendas e mercado. Os valores de gasolina, diesel e híbridos são estimativas do modelo.",
      sourceBase: "Fontes: IEA · ACEA · dados globais de mercado",
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
      methodText: "这些计数器并非逐秒采集的官方注册数据，而是根据已发布的保有量、销量和市场数据，对全球乘用车保有量进行插值估算。汽油、柴油和混合动力数据属于模型估算值。",
      sourceBase: "数据来源：IEA · ACEA · 全球市场数据",
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
  const referenceTime = new Date(DATA.referenceDate).getTime();
  const keys = ["electric", "hybrid", "petrol", "diesel"];
  const el = (id) => document.getElementById(id);

  let currentLang = "de";

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

  function perSecond(item) {
    return item.annualChange / SECONDS_PER_YEAR;
  }

  function currentValue(item, now = Date.now()) {
    const seconds = (now - referenceTime) / 1000;
    return item.base + perSecond(item) * seconds;
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
    if (el("modelVersion")) {
      el("modelVersion").textContent = `${t("dataModel")}: ${DATA.modelVersion}`;
    }
    if (el("dataDate")) {
      el("dataDate").textContent = `${t("dataAsOf")}: ${DATA.dataDate}`;
    }
    if (el("facebookLink") && DATA.facebookUrl) {
      el("facebookLink").href = DATA.facebookUrl;
    }

    keys.forEach((key) => {
      const item = DATA.categories[key];
      const bar = el(`bar-${key}`);
      const trend = el(`trend-${key}`);
      if (bar) bar.style.width = `${Math.max(0, Math.min(100, item.share))}%`;
      if (trend) trend.textContent = `${signed(item.trend, 1)} %`;
    });
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

    keys.forEach((key) => {
      const item = DATA.categories[key];
      const rate = perSecond(item);
      const count = currentValue(item, now);
      const sessionChange = rate * sessionSeconds;

      if (el(`count-${key}`)) el(`count-${key}`).textContent = formatInt(count);
      if (el(`rate-${key}`)) el(`rate-${key}`).textContent = signed(rate, 2);
      if (el(`since-${key}`)) el(`since-${key}`).textContent = signedInt(sessionChange);
    });

    updateClock(now);
    updateSession(sessionSeconds);
    requestAnimationFrame(tick);
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
  applyLanguage(detectLanguage(), false);
  tick();
})();