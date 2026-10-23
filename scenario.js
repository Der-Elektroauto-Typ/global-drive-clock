/* Exploratory composition scenarios. See SZENARIEN.md; not a forecast engine. */
(() => {
  "use strict";
  const keys = ["electric", "hybrid", "petrol", "diesel"];
  const yearSeconds = 365 * 86400;
  const yearMs = yearSeconds * 1000;

  function snapshot(model, market, now) {
    const annualRate = (m, key) => {
      const parts = model.parts(m);
      return parts.length ? parts.reduce((n, part) => n + annualRate(part, key), 0)
        : model.rate(m, key) * yearSeconds;
    };
    const stock = keys.map(key => Math.max(0, model.current(market, key, now)));
    const rates = keys.map(key => annualRate(market, key));
    const total = stock.reduce((n, value) => n + value, 0);
    const totalRate = rates.reduce((n, value) => n + value, 0);
    return { time: now, stock, rates, total, totalRate };
  }

  function evaluate(base, at, mode = "s-curve", ceiling = 0.9) {
    const years = Math.max(0, (at - base.time) / yearMs);
    const { stock, rates, total, totalRate } = base;
    const empty = () => ({ at, years, stock: [0, 0, 0, 0], shares: [0, 0, 0, 0], total: 0, ceiling });
    if (!(total > 0)) return empty();
    if (years === 0) return { at, years, stock: stock.slice(), shares: stock.map(n => n / total), total, ceiling };
    if (mode === "linear") {
      const values = stock.map((n, i) => Math.max(0, n + rates[i] * years));
      const sum = values.reduce((n, value) => n + value, 0);
      return { at, years, stock: values, shares: values.map(n => sum ? n / sum : 0), total: sum, ceiling };
    }
    const nextTotal = Math.max(0, total + totalRate * years);
    if (nextTotal === 0) return empty();
    const start = stock[0] / total;
    const limit = Math.min(1, Math.max(Number(ceiling) || 0.9, start + 1e-9));
    const initialShareRate = (rates[0] - start * totalRate) / total;
    let bevShare;
    if (start <= 0 || start >= 1 || limit - start < 1e-8) {
      bevShare = Math.max(0, Math.min(limit, start + initialShareRate * years));
    } else {
      const k = initialShareRate / (start * (1 - start / limit));
      const exponent = Math.max(-700, Math.min(700, -k * years));
      bevShare = limit / (1 + (limit / start - 1) * Math.exp(exponent));
    }
    bevShare = Math.max(0, Math.min(1, bevShare));
    const remaining = total - stock[0];
    // The conditional non-BEV mix matches the present share derivatives.
    // Subtracting the largest log-weight keeps the normalization stable to 2100.
    const remainingRate = totalRate - rates[0];
    const logs = stock.slice(1).map((value, index) => value > 0 && remaining > 0
      ? Math.log(value / remaining) + (rates[index + 1] / value - remainingRate / remaining) * years
      : -Infinity);
    const largest = Math.max(...logs);
    const weights = logs.map(value => Number.isFinite(largest) ? Math.exp(value - largest) : 1);
    const sum = weights.reduce((n, value) => n + value, 0);
    const shares = [bevShare, ...weights.map(n => (1 - bevShare) * n / sum)];
    return { at, years, stock: shares.map(share => share * nextTotal), shares, total: nextTotal, ceiling: limit };
  }

  function series(base, mode, ceiling, endYear = 2100) {
    const rows = [evaluate(base, base.time, mode, ceiling)];
    for (let year = new Date(base.time).getUTCFullYear(); year <= endYear; year++) {
      const at = Date.UTC(year + 1, 0, 1);
      if (at > base.time) rows.push(evaluate(base, at, mode, ceiling));
    }
    return rows;
  }
  window.DRIVECOUNT_SCENARIOS = { keys, snapshot, evaluate, series, yearSeconds };
})();
