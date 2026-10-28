/* Juniors: four ways to count, the hard gate, three contradictions, France, then what a junior can do. */
function buildJuniors(stage, by = 'gate') {   // by 'years': group the ads by whether they ask 2+ years of experience, the one ask that contradicts the junior label
  const W = 1000, H = 500, JC = D.junior_counts, J = D.junior, ads = J.ads, n = ads.length, S2 = D.stats2.juniors;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const txt = (p, x, y, str, size, o = {}) => s('text', { x, y, 'text-anchor': o.anchor || 'start', text: str,
    style: { fontSize: size + 'px', fill: o.fill || C.ink, fontWeight: o.weight || 400, fontStyle: o.italic ? 'italic' : 'normal', letterSpacing: o.ls || 'normal', opacity: o.op ?? 1 } }, p);
  const span = (t, str, o = {}) => s('tspan', { text: str, style: { fontSize: (o.size || 16) + 'px', fill: o.fill || C.ink, fontWeight: o.weight || 400 } }, t);
  const op = el => +(el.style.opacity === '' ? 1 : el.style.opacity);
  const fade = (el, to, dur = 400, delay = 0) => { const a = op(el); return tween(dur, e => el.style.opacity = a + (to - a) * e, { delay }); };
  const tenths = (k, d) => Math.round(10 * k / d);
  const oneIn = c => { const r = JC.n / c, p = Math.pow(10, Math.floor(Math.log10(r))); return Math.round(r / p) * p; };

  // 1. the ruler: four nested counts, zoomed out of all ads
  const gR = s('g', { style: { opacity: 0 } }, svg), X0 = 60, X1 = 940, zMax = 130, zx = v => X0 + (X1 - X0) * v / zMax, fx = v => X0 + (X1 - X0) * v / JC.n;
  txt(gR, X0, 52, `How many of ${JC.n.toLocaleString('en-US')} ads are open to juniors?`, 24, { weight: 700 });
  const full = s('line', { x1: X0, x2: X0, y1: 120, y2: 120, stroke: C.ink2, 'stroke-width': 2 }, gR);
  const fullLab = s('g', { style: { opacity: 0 } }, gR);
  txt(fullLab, X0, 104, '0', 15, { fill: C.ink2 }); txt(fullLab, X1, 104, `${JC.n.toLocaleString('en-US')} ads`, 15, { fill: C.ink2, anchor: 'end' });
  const zoom = s('g', { style: { opacity: 0 } }, gR);
  s('polygon', { points: `${X0},128 ${fx(zMax)},128 ${X1},262 ${X0},262`, fill: C.soft, opacity: .45 }, zoom);
  s('rect', { x: X0, y: 112, width: fx(zMax) - X0, height: 16, fill: C.soft }, zoom);
  s('line', { x1: X0, x2: X1, y1: 270, y2: 270, stroke: C.ink2, 'stroke-width': 2 }, zoom);
  [0, 50, 100].forEach(v => { s('line', { x1: zx(v), x2: zx(v), y1: 270, y2: 276, stroke: C.mute }, zoom); txt(zoom, zx(v), 292, v, 13, { fill: C.mute, anchor: 'middle' }); });
  const counts = [[JC.title, 'the title says junior', 'up'], [JC.classifier, 'the classifier says junior', 'up'], [JC.text_label, 'the text says early-career', 'down'], [JC.loose, 'a loose count', 'down']];
  const marks = counts.map(([v, lab, side]) => { const x = zx(v), up = side === 'up', g = s('g', { style: { opacity: 0 } }, gR), col = v === JC.classifier ? C.coral : C.ink;
    const anchor = x > 880 ? 'end' : 'middle', ax = anchor === 'end' ? x + 10 : x;
    s('line', { x1: x, x2: x, y1: up ? 254 : 270, y2: up ? 270 : 300, stroke: col, 'stroke-width': 4 }, g);
    s('circle', { cx: x, cy: 270, r: 6, fill: col }, g);
    const t = s('text', { x: ax, y: up ? 214 : 336, 'text-anchor': anchor }, g); const num = span(t, '0', { size: 32, weight: 700, fill: col }); span(t, `  1 in ${oneIn(v)}`, { size: 17, fill: C.ink2 });
    txt(g, ax, up ? 240 : 362, lab, 17, { anchor, fill: C.ink2 }); return { g, num, v }; });
  const rAns = s('g', { style: { opacity: 0 } }, gR);
  txt(rAns, X0, 424, `1 in ${oneIn(JC.title)} to 1 in ${oneIn(JC.loose)}, depending on how you count`, 24, { weight: 700 });
  txt(rAns, X0, 454, 'each wider count includes the narrower ones', 16, { fill: C.ink2 });
  tag(rAns, 612, 424, 'descriptive');

  // 2. the 64 classifier juniors, one dot each
  const P = 50, R = 18, GY = 135, gx0 = 60;
  const contraIds = ['enhance', 'dataroots', 'itt-inc'].map(k => ads.findIndex(a => a.id.includes('_' + k + '_')));
  const projSet = new Set(J.counts_projects.map(p => p.id)), proj = ads.map(a => projSet.has(a.id));
  const route = ads.map(a => a.fr && ['internship', 'alternance'].includes(a.route)), routeN = route.filter(Boolean).length;
  const inGate = i => by === 'years' ? ads[i].yrs2 : ads[i].gate, gateN = ads.filter((a, i) => inGate(i)).length, noN = n - gateN;
  // gate layout: hard-gate block of 7 columns, no-gate block of 10 (by years: 4 and 13, the no block being larger); the three contradictions sit last in the gate block
  const gCols = by === 'years' ? 4 : 7, nCols = by === 'years' ? 13 : 10, nx0 = gx0 + gCols * P + 60;
  const gateOrder = ads.map((a, i) => i).filter(i => inGate(i) && !contraIds.includes(i)).concat([contraIds[2], contraIds[1], contraIds[0]]);
  const noOrder = ads.map((a, i) => i).filter(i => !inGate(i));
  const L = { gate: [], fr: [], pre: [] };
  gateOrder.forEach((i, k) => L.gate[i] = [gx0 + (k % gCols) * P, GY + Math.floor(k / gCols) * P]);
  noOrder.forEach((i, k) => L.gate[i] = [nx0 + (k % nCols) * P, GY + Math.floor(k / nCols) * P]);
  ads.forEach((a, i) => L.pre[i] = [gx0 + (i % 16) * 54, GY + Math.floor(i / 16) * P]);
  const byBac = arr => arr.filter(i => ads[i].bac_checked).concat(arr.filter(i => !ads[i].bac_checked));
  byBac(ads.map((a, i) => i).filter(i => !ads[i].fr)).forEach((i, k) => L.fr[i] = [gx0 + (k % 13) * P, GY + Math.floor(k / 13) * P]);
  byBac(ads.map((a, i) => i).filter(i => ads[i].fr)).forEach((i, k) => L.fr[i] = [720 + (k % 5) * P, GY + Math.floor(k / 5) * P]);
  const gD = s('g', {}, svg), start = [zx(JC.classifier), 270];
  const dots = ads.map((a, i) => { const ring = s('circle', { r: R + 5, fill: 'none', stroke: C.coral, 'stroke-width': 3, style: { opacity: 0 } }, gD);
    const c = s('circle', { r: 0, fill: C.grey }, gD);
    const q = s('text', { 'text-anchor': 'middle', text: '?', style: { fontSize: '22px', fontWeight: 700, fill: '#fff', opacity: 0 } }, gD);
    return { c, ring, q, x: start[0], y: start[1], r: 0, fill: C.grey }; });
  const place = d => { d.c.setAttribute('cx', d.x); d.c.setAttribute('cy', d.y); d.c.setAttribute('r', d.r);
    d.ring.setAttribute('cx', d.x); d.ring.setAttribute('cy', d.y); d.q.setAttribute('x', d.x); d.q.setAttribute('y', d.y + 8); };
  dots.forEach(place);
  const moveTo = (lay, dur, stagger = 0, r = R) => Promise.all(dots.map((d, i) => { const [x0, y0, r0] = [d.x, d.y, d.r], [x1, y1] = lay[i];
    return tween(dur, e => { d.x = x0 + (x1 - x0) * e; d.y = y0 + (y1 - y0) * e; d.r = r0 + (r - r0) * e; place(d); }, { delay: i * stagger, ease: E.inOut }); }));
  const paint = (fillOf, dur, stagger = 0) => Promise.all(dots.map((d, i) => { const a = d.fill, b = fillOf(i); if (a === b) return true;
    return tween(dur, e => d.c.setAttribute('fill', mix(a.slice(1), b.slice(1), e)), { delay: i * stagger }).then(ok => { if (ok) d.fill = b; return ok; }); }));

  // block captions over the gate layout
  const caps = s('g', { style: { opacity: 0 } }, svg);
  const capG = txt(caps, gx0 - R, 97, `${by === 'years' ? 'asks 2+ years' : 'asks 2+ years, a language or a visa'} · ${gateN}`, 18, { weight: 700, fill: C.coral });
  const capN = txt(caps, nx0 - R, 97, `${by === 'years' ? 'asks less, or none' : 'asks none of these'} · ${noN}`, 18, { weight: 700, fill: C.mute });

  // panels: one per build, all created now and shown by state
  const panel = () => s('g', { style: { opacity: 0 } }, svg), PY = 405, PX = 330;
  const pGate = panel();
  const sh = S2.shares, parts = Math.round(n / Math.max(gateN, 1)), quarters = k => `${Math.round(parts * k / n)} in ${parts}`;
  if (by === 'years') {
    txt(pGate, gx0 - 4, PY + 10, quarters(gateN), 64, { weight: 700, fill: C.coral, ls: '-.03em' });
    txt(pGate, PX, PY - 14, 'ask for two years or more', 26, { weight: 700 }); tag(pGate, PX + 330, PY - 14, 'suggestive');
    txt(pGate, PX, PY + 22, `${gateN} of ${n} ads labelled junior`, 18, { fill: C.ink2 });
  } else {
    txt(pGate, gx0 - 4, PY + 10, `${tenths(gateN, n)} in 10`, 64, { weight: 700, fill: C.coral, ls: '-.03em' });
    txt(pGate, PX, PY - 14, 'can rule you out', 26, { weight: 700 }); tag(pGate, PX + 230, PY - 14, 'suggestive');
    txt(pGate, PX, PY + 22, `${sh['2+ years'][0]} ask 2+ years · ${sh['non-English language'][0]} another language · ${sh['visa / clearance'][0]} a visa`, 18, { fill: C.ink2 });
  }
  const pContra = panel(), years = q => (q.match(/\d+\s*[-–]\s*\d+ years|\d+\+ years/) || [''])[0].replace('-', '–');
  [[contraIds[0], `Enhance: says junior, asks ${years(D.quotes.enhance_asks)}`], [contraIds[1], `Dataroots: junior web address, asks ${years(D.quotes.dataroots)}`], [contraIds[2], `ITT: junior title, asks ${years(D.quotes.itt)}`]]
    .forEach(([i, lab], k) => { const [x, y] = L.gate[i], ly = 354 + k * 42;
      s('polyline', { points: `${x},${y + R + 9} ${x},${ly - 6} ${x + 10},${ly - 6}`, fill: 'none', stroke: C.coral, 'stroke-width': 2 }, pContra);
      const t = s('text', { x: x + 16, y: ly }, pContra); const [co, rest] = lab.split(': '); span(t, co + ': ', { size: 19, weight: 700 }); span(t, rest, { size: 19 }); });
  txt(pContra, 700, 446, 'junior in the label,', 26, { weight: 700 }); txt(pContra, 700, 480, 'years in the ask', 26, { weight: 700, fill: C.coral });
  const pFr = panel(), fb = S2.france_bac_checked;
  txt(pFr, gx0 - R, 97, `elsewhere · ${fb.rest[1]}`, 18, { weight: 700, fill: C.ink2 }); txt(pFr, 720 - R, 97, `France · ${fb.fr[1]}`, 18, { weight: 700, fill: C.ink2 });
  txt(pFr, gx0 - 4, 382, `${fb.rest[0]} of ${fb.rest[1]}`, 48, { weight: 700 }); txt(pFr, gx0, 414, 'ask a master’s', 20, { fill: C.ink2 });
  txt(pFr, 716, 382, `${fb.fr[0]} of ${fb.fr[1]}`, 48, { weight: 700, fill: C.coral }); txt(pFr, 720, 414, 'ask a master’s', 20, { fill: C.ink2 });
  tag(pFr, 868, 414, 'suggestive');
  txt(pFr, 720, 452, 'French ads were found by searching', 15, { fill: C.ink2 }); txt(pFr, 720, 472, 'for internships and work-study', 15, { fill: C.ink2 });
  const pHope = panel();
  txt(pHope, gx0 - 4, PY + 10, by === 'years' ? quarters(noN) : `${tenths(noN, n)} in 10`, 64, { weight: 700, ls: '-.03em' });
  txt(pHope, PX, PY - 14, by === 'years' ? 'ask for less, or no years at all' : 'ask for none of these', 26, { weight: 700 }); tag(pHope, PX + (by === 'years' ? 400 : 290), PY - 14, 'suggestive');
  txt(pHope, PX, PY + 22, by === 'years' ? `${noN} of ${n} ads labelled junior` : 'no 2+ years, no other language, no visa', 18, { fill: C.ink2 });
  const pRoute = panel();
  txt(pRoute, gx0 - 4, PY + 10, routeN, 64, { weight: 700, fill: C.coral });
  txt(pRoute, 150, PY - 14, 'French ads are internships or work-study', 22, { fill: C.ink2 });
  txt(pRoute, 150, PY + 22, 'is the real door a school route?', 28, { weight: 700, italic: true });
  const pProj = panel(), projN = J.counts_projects.length;
  txt(pProj, gx0 - 4, PY + 10, projN, 64, { weight: 700, fill: C.coral });
  txt(pProj, 160, PY - 14, 'say internships or projects count', 22, { fill: C.ink2 });
  txt(pProj, 160, PY + 22, 'have the basics? apply, lead with the project', 28, { weight: 700 });
  const panels = [pGate, pContra, pFr, pHope, pRoute, pProj];

  // absolute state for every build after the ruler
  const gateFill = i => inGate(i) ? C.coral : C.grey, hopeFill = i => inGate(i) ? C.soft : C.ink2;
  async function go(st) {
    const off = [...panels.filter(p => p !== st.panel), ...dots.filter((d, i) => !(st.ring && st.ring(i))).map(d => d.ring), ...dots.filter((d, i) => !(st.q && st.q(i))).map(d => d.q)];
    await Promise.all([...off.map(el => fade(el, 0, 300)), fade(gR, 0, 300), fade(caps, st.caps ? 1 : 0, 300)]);
    if (!(await moveTo(L[st.layout], 800)).every(Boolean)) return;
    if (!(await paint(st.fill, 500)).every(Boolean)) return;
    capG.style.fill = st.caps === 'hope' ? C.mute : C.coral; capN.style.fill = st.caps === 'hope' ? C.ink : C.mute;
    if (st.caps) await fade(caps, 1, 400);
    await Promise.all([fade(st.panel, 1, 500), ...dots.map((d, i) => Promise.all([st.ring && st.ring(i) ? fade(d.ring, 1, 400, 0) : true, st.q && st.q(i) ? fade(d.q, 1, 400) : true]))]);
  }
  return [
    async () => {   // four ways to count
      gR.style.opacity = 1; dots.forEach(d => { d.x = start[0]; d.y = start[1]; d.r = 0; place(d); }); [caps, ...panels].forEach(p => p.style.opacity = 0);
      if (!(await tween(700, e => full.setAttribute('x2', X0 + (X1 - X0) * e)))) return;
      await fade(fullLab, 1, 300); if (!(await fade(zoom, 1, 600))) return;
      for (const m of marks) { if (!(await Promise.all([fade(m.g, 1, 350), countUp(m.num, m.v, { dur: 600 })])).every(Boolean)) return; await wait(150); }
      await fade(rAns, 1, 500);
    },
    async () => {   // one dot each; the gated ones turn coral and sort
      [...panels, caps].forEach(p => p.style.opacity = 0); dots.forEach(d => { d.ring.style.opacity = 0; d.q.style.opacity = 0; });
      if (!(await fade(gR, 0, 400))) return;
      if (!(await moveTo(L.pre, 700, 12)).every(Boolean)) return;
      if (!(await paint(gateFill, 400, 18)).every(Boolean)) return;
      if (!(await wait(300))) return;
      await go({ layout: 'gate', fill: gateFill, panel: pGate, caps: 'gate' });
    },
    async () => go({ layout: 'gate', fill: i => contraIds.includes(i) ? C.coral : inGate(i) ? C.soft : C.grey, ring: i => contraIds.includes(i), panel: pContra, caps: 'gate' }),
    optional(async () => go({ layout: 'fr', fill: i => ads[i].bac_checked ? C.coral : C.grey, panel: pFr })),
    async () => go({ layout: 'gate', fill: hopeFill, panel: pHope, caps: 'hope' }),
    optional(async () => go({ layout: 'gate', fill: i => route[i] ? C.coral : hopeFill(i), q: i => route[i], panel: pRoute, caps: 'hope' })),
    async () => go({ layout: 'gate', fill: i => proj[i] ? C.coral : hopeFill(i), ring: i => proj[i], panel: pProj, caps: 'hope' })
  ];
}
