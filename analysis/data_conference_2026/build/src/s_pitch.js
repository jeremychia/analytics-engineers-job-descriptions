/* Pitch yourself: 945 ads on the duty-by-stack map. Toggle your tools; the ads that name only tools you have light up. */
function buildPitch(stage, opts = {}) {
  const P = D.pitch, ads = P.ads, T = D.tools, W = 640, H = 540;
  const wrap = h('div', { class: 'pitch' }); stage.append(wrap);
  const left = h('div', { class: 'pmap' }), right = h('div', { class: 'ppanel' }); wrap.append(left, right);
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, left);
  const xs = ads.map(a => a[0]).sort((a, b) => a - b), ys = ads.map(a => a[1]).sort((a, b) => a - b);
  const q = (arr, p) => arr[Math.floor(p * (arr.length - 1))], x0 = q(xs, .01), x1 = q(xs, .99), y0 = q(ys, .01), y1 = q(ys, .99);
  const X = v => 40 + (Math.min(x1, Math.max(x0, v)) - x0) / (x1 - x0) * (W - 70), Y = v => H - 50 - (Math.min(y1, Math.max(y0, v)) - y0) / (y1 - y0) * (H - 90);
  s('text', { x: 40, y: H - 14, class: 'tick', text: '← BI and reporting' }, svg);
  s('text', { x: W - 30, y: H - 14, 'text-anchor': 'end', class: 'tick', text: 'modelling, pipelines, warehouse →' }, svg);
  s('text', { x: 14, y: H - 50, class: 'tick', transform: `rotate(-90 14 ${H - 50})`, text: 'Power BI · Azure · Fabric ↔ dbt · Snowflake · BigQuery' }, svg);
  const rr = rng(4), g = s('g', {}, svg);
  const dots = ads.map(a => { const c = s('circle', { cx: X(a[0]) + (rr() - .5) * 4, cy: Y(a[1]) + (rr() - .5) * 4, r: 0, fill: C.grey }, g);
    c.addEventListener('mousemove', e => tip.show(e, `<b>${a[5]}</b>`)); c.addEventListener('mouseleave', () => tip.hide()); return c; });
  const mine = new Set(), toolPop = ads.reduce((o, a) => { T.forEach((t, k) => o[k] = (o[k] || 0) + ((a[2] >> k) & 1)); return o; }, {});
  const lvl = h('select', { class: 'sel' }, ['any level', 'junior', 'mid', 'senior', 'lead+'].map((l, i) => h('option', { value: i - 1 }, l)));
  const reg = h('select', { class: 'sel' }, [h('option', { value: '' }, 'any region'), ...P.regions.map(r => h('option', { value: r }, r))]);
  const chips = h('div', { class: 'chips' }), out = h('div', { class: 'pout' });
  const chipEls = T.map((t, k) => { const c = h('button', { class: 'tchip', 'aria-pressed': 'false' }, t); c.onclick = () => { toggle(k); }; chips.append(c); return c; });
  right.append(h('div', { class: 'plab' }, 'Your tools'), chips, h('div', { class: 'psel' }, lvl, reg), out);
  let live = false;
  function toggle(k, on) { const want = on ?? !mine.has(k); if (want) mine.add(k); else mine.delete(k); chipEls[k].setAttribute('aria-pressed', String(want)); update(); }
  function update() {
    const L = +lvl.value, R = reg.value; let mask = 0; mine.forEach(k => mask |= 1 << k);
    const sel = ads.map(a => (L < 0 || a[3] === L) && (!R || a[4] === R) && a[2] !== 0);
    const pool = sel.filter(Boolean).length; let match = 0, near = 0, exact = 0; const miss = {};
    ads.forEach((a, i) => { const el = dots[i]; if (!sel[i]) { el.style.fill = C.line; el.style.opacity = .35; el.setAttribute('r', 2.2); return; }
      const m = a[2] & ~mask, nm = popcount(m);
      if (a[2] === mask && mask) exact++;
      if (mask && nm === 0) { match++; el.style.fill = C.coral; el.style.opacity = 1; el.setAttribute('r', 5); }
      else if (mask && nm === 1) { near++; const k = Math.log2(m); miss[k] = (miss[k] || 0) + 1; el.style.fill = C.amber; el.style.opacity = .9; el.setAttribute('r', 3.8); }
      else { el.style.fill = C.grey; el.style.opacity = .75; el.setAttribute('r', 2.8); } });
    const gaps = Object.entries(miss).sort((a, b) => b[1] - a[1]).slice(0, 3);
    if (!mask) { out.innerHTML = '<div class="phint">Pick the tools you use. Ads that name only tools you have turn coral.</div>'; return; }
    out.innerHTML = `<div class="bigstat"><span>${pct(match, pool)}%</span></div><div class="lbl2">${match} of ${pool} ads name only tools you have</div>
      <div class="pgap"><b>Closest gaps</b> (one tool away, ${near} ads): ${gaps.length ? gaps.map(([k, n]) => `${T[k]} +${n}`).join(' · ') : 'none'}</div>
      <div class="pgap">${exact ? `Your exact combination appears in <b>${exact}</b> ad${exact > 1 ? 's' : ''}${exact <= 2 ? ': a niche. Pitch it.' : '.'}` : 'No ad names exactly your combination: a niche. Pitch it.'}</div>`;
  }
  const popcount = v => { let c = 0; while (v) { c += v & 1; v >>= 1; } return c; };
  lvl.onchange = reg.onchange = update;
  const demo = [0, 1, 2, 5, 16];  // SQL, Python, dbt, Snowflake, Git
  const reset = () => { mine.clear(); chipEls.forEach(c => c.setAttribute('aria-pressed', 'false')); lvl.value = -1; reg.value = ''; update(); };
  const steps = [
    async () => { reset(); dots.forEach((c, i) => { c.style.transition = 'fill .4s, opacity .4s, r .4s'; later(() => c.setAttribute('r', 2.8), Anim.fast ? 0 : (i % 200) * 5); }); await wait(Anim.fast ? 0 : 1300);
      out.innerHTML = `<div class="phint"><b>${ads.length}</b> ads, one dot each. Left to right: from reporting to modelling. Bottom to top: from the Microsoft stack to dbt and warehouses.</div>`; },
    async () => { for (const k of demo) { toggle(k, true); if (!(await wait(Anim.fast ? 0 : 900))) return; } },
    async () => { lvl.value = 1; update(); await wait(300); out.insertAdjacentHTML('beforeend', '<div class="phint">Now try your own: toggle tools, pick a level and a region.</div>'); }
  ];
  return steps;
}
