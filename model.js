/* Pure accounting model. Sources and assumptions: model-provenance.json. */
(() => {
  const D = window.DRIVECOUNT_DATA;
  const keys = ['electric','hybrid','petrol','diesel','other'];
  const item = (m,k) => k === 'other' ? m.other : m.categories[k];
  const parts = m => m === D ? ['eu','china','usa','rest'].map(id => D.regions[id]) : m === D.regions.eu ? [D.germany,D.regions.euRest] : [];
  const rate = (m,k) => item(m,k).annualChange / (m.annualSeconds || 365*86400);
  const current = (m,k,now) => parts(m).length ? parts(m).reduce((n,p) => n + current(p,k,now),0) : Math.max(0,item(m,k).base + rate(m,k)*(now-Date.parse(m.referenceDate))/1000);
  // Joint rounding preserves the integer sums, including negative changes.
  function allocate(total, values) {
    const result = values.map(Math.floor);
    const order = values.map((v,i) => ({i,f:v-Math.floor(v)})).sort((a,b) => b.f-a.f || a.i-b.i);
    let remainder = Math.round(total)-result.reduce((a,b)=>a+b,0);
    for(let n=0;n<remainder;n++)result[order[n%order.length].i]++;
    return result;
  }
  function ledger(now,from,changes=false) {
    const result = {};
    const ids = ['eu','china','usa','rest'];
    const value = (m,k) => changes ? rate(m,k)*(now-from)/1000 : current(m,k,now);
    keys.forEach(k => {
      const v=ids.map(id=>value(D.regions[id],k));
      const rounded=allocate(v.reduce((a,b)=>a+b,0),v);
      result.global ??= {};result.global[k]=rounded.reduce((a,b)=>a+b,0);
      ids.forEach((id,i)=>{result[id]??={};result[id][k]=rounded[i];});
      const nested=allocate(result.eu[k],[value(D.germany,k),value(D.regions.euRest,k)]);
      result.germany??={};result.euRest??={};result.germany[k]=nested[0];result.euRest[k]=nested[1];
    });
    return result;
  }
  window.DRIVECOUNT_MODEL={keys,item,parts,rate,current,ledger};
})();
