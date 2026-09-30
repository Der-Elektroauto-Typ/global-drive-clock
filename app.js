(() => {
  "use strict";

  const DATA = window.DRIVECOUNT_DATA;
  if (!DATA) {
    console.error("DRIVECOUNT_DATA fehlt.");
    return;
  }

  const SECONDS_PER_YEAR = 365.2425 * 24 * 60 * 60;
  const startTime = Date.now();
  const referenceTime = new Date(DATA.referenceDate).getTime();
  const keys = ["electric", "hybrid", "petrol", "diesel"];

  const el = (id) => document.getElementById(id);

  function perSecond(item) {
    return item.annualChange / SECONDS_PER_YEAR;
  }

  function currentValue(item, now = Date.now()) {
    const seconds = (now - referenceTime) / 1000;
    return item.base + perSecond(item) * seconds;
  }

  function formatInt(value) {
    return Math.round(value).toLocaleString("de-DE");
  }

  function signed(value, decimals = 2) {
    const sign = value >= 0 ? "+" : "−";
    return sign + Math.abs(value).toFixed(decimals).replace(".", ",");
  }

  function signedInt(value) {
    const sign = value >= 0 ? "+" : "−";
    return sign + Math.abs(Math.round(value)).toLocaleString("de-DE");
  }

  function renderStaticMeta() {
    if (el("modelVersion")) el("modelVersion").textContent = `Datenmodell: ${DATA.modelVersion}`;
    if (el("dataDate")) el("dataDate").textContent = `Stand: ${DATA.dataDate}`;
    if (el("facebookLink") && DATA.facebookUrl) el("facebookLink").href = DATA.facebookUrl;

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
    const h = String(d.getUTCHours()).padStart(2, "0");
    const m = String(d.getUTCMinutes()).padStart(2, "0");
    const s = String(d.getUTCSeconds()).padStart(2, "0");
    if (el("utcClock")) el("utcClock").textContent = `${h}:${m}:${s} UTC`;
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

  renderStaticMeta();
  tick();
})();
