/* Benefits grid: share of ads in each region that mention each benefit, read as a negotiation map. Pay row and Indeed ticks close it. */
function buildBenefits(stage, v2 = false) {
  const W = 1000, H = 540, B = D.benefits, SUM = D.stats2.benefits_summary, regs = B.regions, tags = B.tags.filter(t => t !== 'remote_flex');
  const label = { health: 'health insurance', pension: 'pension / 401k', equity: 'equity', bonus: 'bonus', pto: 'paid time off', parental: 'parental leave',
    learning: 'learning budget', wellbeing: 'wellbeing', meal: 'meal vouchers', transport: 'transport', flex_hours: 'flexible hours' };
  const short = r => r.replace('UK & Ireland', 'UK & IE').replace('Southern Europe', 'S. Europe').replace('CEE/Baltics', 'CEE');
  const L = 178, T = 34, cw = 88, rh = 33, PY = T + tags.length * rh + 14, PH = 62, CAP = PY + 34, CAP2 = PY + PH + 36;
  const stops = [[0, '#fbeee9'], [15, '#f5d0c8'], [35, '#ea5b4d'], [60, '#5b2a4a']];
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage), key = (t, r) => t + '|' + r;
  regs.forEach((r, ci) => s('text', { x: L + ci * cw + cw / 2, y: 24, 'text-anchor': 'middle', text: short(r), style: { fontSize: '16px', fontWeight: 700, fill: C.ink } }, svg));
  const rowLab = tags.map((t, ri) => s('text', { x: L - 12, y: T + ri * rh + 22, 'text-anchor': 'end', text: label[t] || t,
    style: { fontSize: '16px', fontWeight: 500, fill: C.ink2, transition: 'fill .4s' } }, svg));
  const cells = [], byKey = {};
  tags.forEach((t, ri) => regs.forEach((r, ci) => {
    const v = B.pct[t][r] ?? 0, x = L + ci * cw, y = T + ri * rh, base = scale(stops, v);
    const g = s('g', { style: { opacity: 0 } }, svg);
    const rect = s('rect', { x: x + 2, y: y + 2, width: cw - 4, height: rh - 4, rx: 6, style: { fill: base, transition: 'fill .5s' } }, g);
    const num = s('text', { x: x + cw / 2, y: y + 22, 'text-anchor': 'middle', text: Math.round(v), style: { fontSize: '16px', fontWeight: 700, fill: v > 28 ? '#fff' : C.ink2, transition: 'fill .5s' } }, g);
    rect.addEventListener('mousemove', e => tip.show(e, `<b>${label[t]}</b><br>${r}: ${v}% of ${B.n[r]} ads`)); rect.addEventListener('mouseleave', () => tip.hide());
    const c = { g, rect, num, t, r, ri, ci, v, x, y, base, ink: v > 28 ? '#fff' : C.ink2 }; cells.push(c); byKey[key(t, r)] = c;
  }));
  /* lever = each region's benefit that its ads list at least 10 points more often than the other regions' average; regions with none get no ring */
  const lever = regs.map(r => tags.map(t => { const o = regs.filter(x => x !== r).map(x => B.pct[t][x] ?? 0); return { t, r, d: (B.pct[t][r] ?? 0) - o.reduce((a, b) => a + b, 0) / o.length }; })
    .sort((a, b) => b.d - a.d)[0]).filter(x => x.d >= 10).map(x => key(x.t, x.r));
  const SETS = { extreme: [['health', 'US'], ['pension', 'US'], ['equity', 'US'], ['meal', 'France'], ['pension', 'France']].map(([t, r]) => key(t, r)),
    law: [['pension', 'France'], ['health', 'DACH'], ['pto', 'France']].map(([t, r]) => key(t, r)), lever };
  const rings = {};
  for (const set in SETS) rings[set] = SETS[set].map(k => { const c = byKey[k];
    return s('rect', { x: c.x, y: c.y, width: cw, height: rh, rx: 8, fill: 'none', stroke: C.ink, 'stroke-width': 3, 'stroke-dasharray': set === 'law' ? '6 4' : 'none',
      style: { opacity: 0, transition: 'opacity .4s' } }, svg); });
  /* pay row: share of ads stating pay, Indeed tick where a country maps to the region */
  const pay = s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg), bars = [], IND = B.indeed_pay, indBy = {};
  for (const c in IND.grid_region) indBy[IND.grid_region[c]] = IND.pct[c];
  s('text', { x: L - 12, y: PY + 23, 'text-anchor': 'end', text: 'pay stated', style: { fontSize: '16px', fontWeight: 700, fill: C.ink } }, pay);
  s('text', { x: L - 22, y: PY + 48, 'text-anchor': 'end', text: 'Indeed, all ads', style: { fontSize: '15px', fill: C.ink2 } }, pay);
  s('line', { x1: L - 13, x2: L - 13, y1: PY + 34, y2: PY + 52, stroke: C.ink, 'stroke-width': 2.5 }, pay);
  const bx = 8, bw = cw - 16;
  regs.forEach((r, ci) => { const p = B.pay[r], x = L + ci * cw;
    const bg = s('rect', { x: x + 2, y: PY + 2, width: cw - 4, height: PH - 4, rx: 6, fill: C.paper, stroke: C.line }, pay);
    s('text', { x: x + cw / 2, y: PY + 21, 'text-anchor': 'middle', text: Math.round(p.pct), style: { fontSize: '16px', fontWeight: 700, fill: C.ink } }, pay);
    s('rect', { x: x + bx, y: PY + 28, width: bw, height: 9, rx: 3, fill: C.grey }, pay);
    bars.push({ el: s('rect', { x: x + bx, y: PY + 28, width: 0, height: 9, rx: 3, fill: C.coral }, pay), to: bw * p.pct / 100 });
    const ind = indBy[r];
    if (ind != null) { const tx = x + bx + bw * ind / 100;
      s('line', { x1: tx, x2: tx, y1: PY + 23, y2: PY + 42, stroke: C.ink, 'stroke-width': 2.5 }, pay);
      s('text', { x: Math.max(x + 16, Math.min(x + cw - 16, tx)), y: PY + 56, 'text-anchor': 'middle', text: ind, style: { fontSize: '15px', fontWeight: 700, fill: C.ink2 } }, pay); }
    bg.addEventListener('mousemove', e => tip.show(e, `<b>pay stated</b><br>${r}: ${p.k} of ${p.n} ads${ind != null ? `<br>Indeed, all ads (${Object.keys(IND.grid_region).find(c => IND.grid_region[c] === r)}): ${ind}%` : ''}`));
    bg.addEventListener('mouseleave', () => tip.hide()); });
  /* one caption per build; a verdict pill, when there is one, sits before the claim */
  const caption = (y, words, verdict) => { const g = s('g', { style: { opacity: 0, transition: 'opacity .4s' } }, svg); let x = L + 2;
    if (verdict) { tag(g, x, y - 4, verdict, { size: 15 }); x += verdict.length * 15 * .62 + 15 * 1.4 + 12; }
    const tx = s('text', { x, y, style: { fontSize: '21px', fontWeight: 500, fill: C.ink } }, g);
    words.forEach(([w, hi]) => s('tspan', { text: w, style: hi ? { fill: C.coral, fontWeight: 700 } : {} }, tx)); return g; };
  const caps = {
    norm: caption(CAP, [['the norm: what ads in each region list']]),
    differ: caption(CAP, [['the norm differs: '], [`${SUM.differ_q01} of ${SUM.tags} benefits`, 1], [' vary by region']], 'conclusive'),
    law: caption(CAP, [['a pale cell ≠ not offered: '], ['the law may already give it', 1]], 'untested'),
    lever: caption(CAP, [['your lever: what your region’s ads list '], ['more than elsewhere', 1]]),
    ask: caption(CAP, [['not in the ad? '], ['ask for what the competition lists', 1]]),
    v2: caption(CAP, [['the norm differs by region: '], ['the competition is your lever', 1]], 'conclusive'),
    pay: caption(CAP2, [['the EU directive wants pay shown: '], ['will this row fill in?', 1]], 'descriptive')
  };
  /* every step sets the whole picture: lit cells, ring set, ask fills, caption, pay row */
  const show = o => {
    const lit = o.ring ? new Set(SETS[o.ring]) : null, ask = o.ask ? new Set(SETS.lever) : new Set();
    cells.forEach(c => { const on = !lit || lit.has(key(c.t, c.r));
      c.g.style.transition = `opacity .5s ${o.stagger && !Anim.fast ? c.ci * 140 + c.ri * 15 : 0}ms`;
      c.g.style.opacity = o.fade ? .5 : on ? 1 : .22;
      c.rect.style.fill = ask.has(key(c.t, c.r)) ? C.coral : c.base; c.num.style.fill = ask.has(key(c.t, c.r)) ? '#fff' : c.ink; });
    for (const set in rings) rings[set].forEach(el => { el.style.opacity = set === o.ring ? 1 : 0; });
    tags.forEach((t, ri) => { const hit = lit && regs.some(r => lit.has(key(t, r))), asked = regs.some(r => ask.has(key(t, r)));
      rowLab[ri].style.fill = asked ? C.coral : hit ? C.ink : C.ink2; rowLab[ri].style.fontWeight = asked || hit ? 700 : 500; });
    for (const k in caps) caps[k].style.opacity = k === o.cap ? 1 : 0;
    pay.style.opacity = o.pay ? 1 : 0;
    if (!o.pay) bars.forEach(b => b.el.setAttribute('width', 0));
    return o.pay ? tween(1100, e => bars.forEach(b => b.el.setAttribute('width', b.to * e)), { delay: 300 }) : wait(Anim.fast ? 0 : 700);
  };
  if (v2) return [async () => { show({ stagger: true }); if (!(await wait(Anim.fast ? 0 : regs.length * 140 + 700))) return; await show({ cap: 'v2', ring: 'extreme' }); }];
  return [
    async () => { show({ cap: 'norm', stagger: true }); await wait(Anim.fast ? 0 : regs.length * 140 + 700); },
    async () => { await show({ cap: 'differ', ring: 'extreme' }); },
    optional(async () => { await show({ cap: 'law', ring: 'law' }); }),
    optional(async () => { await show({ cap: 'lever', ring: 'lever' }); }),
    async () => { await show({ cap: 'ask', ring: 'lever', ask: true }); },
    async () => { await show({ cap: 'pay', fade: true, pay: true }); }
  ];
}
