/* The similarity barcode: 150 ads x 150 ads, role text only, grouped by company. Dark squares on the diagonal are the same company or company family. */
let bcSeq = 0;
function buildBarcode(stage) {
  const W = 1000, H = 520, S = D.sim, n = S.n, CP = S.copy_rate;
  const M = 470, X0 = 8, Y0 = 26, cell = M / n, PX = 560;   // matrix square, panel left edge
  const pc = v => Math.round(100 * v) + '%';
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage), id = 'bcclip' + (++bcSeq);
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const txt = (g, x, y, text, st, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fill: C.ink, fontSize: '16px' }, st) }, a), g);
  const kicker = (g, x, y, text) => txt(g, x, y, text, { fill: C.ink2, font: "700 14px 'JetBrains Mono', monospace", letterSpacing: '.08em' });

  // the matrix, drawn once to an offscreen canvas and painted in with a growing clip
  const stops = [[0, '#fdf1ee'], [8, '#f9ddd5'], [20, '#ea5b4d'], [45, '#a8322a'], [100, '#5b2a4a']], R = 4;
  const cv = document.createElement('canvas'); cv.width = cv.height = n * R; const ctx = cv.getContext('2d');
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { ctx.fillStyle = i === j ? C.plum : scale(stops, S.m[i][j]); ctx.fillRect(j * R, i * R, R, R); }
  const clip = s('polygon', { points: '' }, s('clipPath', { id }, s('defs', {}, svg)));
  const setClip = t => { const d = t * 2 * M; clip.setAttribute('points', `${X0},${Y0} ${X0 + d},${Y0} ${X0},${Y0 + d}`); };
  s('rect', { x: X0, y: Y0, width: M, height: M, rx: 6, fill: C.paper, stroke: C.line }, svg);
  const img = s('image', { x: X0, y: Y0, width: M, height: M, href: cv.toDataURL(), 'clip-path': `url(#${id})`, preserveAspectRatio: 'none', style: { imageRendering: 'pixelated' } }, svg);
  setClip(0);

  // blocks: where each company family sits on the diagonal
  let off = 0; const blocks = S.groups.map(g => { const b = { ...g, at: off }; off += g.size; return b; }), fam = blocks.filter(b => b.family);
  const sq = b => [X0 + b.at * cell, Y0 + b.at * cell, b.size * cell];
  const famHoles = fam.map(b => { const [x, y, w] = sq(b); return `M${x},${y}h${w}v${w}h${-w}z`; }).join('');

  // 1. the expectation: ads borrow from each other, so the square would be dark
  const gExp = layer();
  s('rect', { x: X0, y: Y0, width: M, height: M, rx: 6, fill: scale(stops, 30), 'fill-opacity': .55, stroke: C.coral, 'stroke-width': 2, 'stroke-dasharray': '8 6' }, gExp);
  txt(gExp, X0 + M / 2, Y0 + M / 2 - 6, 'if ads borrowed,', { fill: '#fff', fontSize: '26px', fontWeight: 700 }, { 'text-anchor': 'middle' });
  txt(gExp, X0 + M / 2, Y0 + M / 2 + 26, 'the square would be dark', { fill: '#fff', fontSize: '26px', fontWeight: 700 }, { 'text-anchor': 'middle' });
  const gPanelExp = layer();
  kicker(gPanelExp, PX, 44, 'I EXPECTED');
  txt(gPanelExp, PX, 76, 'ads borrow from each other', { fontSize: '24px', fontWeight: 700 });
  const strike = s('line', { x1: PX, x2: PX + 318, y1: 68, y2: 68, stroke: C.coral, 'stroke-width': 3, style: { opacity: 0, transition: 'opacity .4s' } }, gPanelExp);
  const gLeg = layer();
  txt(gLeg, PX, 470, 'darker = more shared wording', { fill: C.ink2, fontSize: '15px' });
  const grad = s('linearGradient', { id: id + 'g' }, $('defs', svg));
  stops.forEach(([v, c]) => s('stop', { offset: v + '%', 'stop-color': c }, grad));
  s('rect', { x: PX, y: 480, width: 300, height: 14, rx: 7, fill: `url(#${id}g)`, stroke: C.line }, gLeg);

  // 2. the finding: two ads from different companies barely overlap
  const gFind = layer();
  kicker(gFind, PX, 124, 'THE ADS SHOW');
  const stat = (y, v, l1, l2, col) => { txt(gFind, PX, y, pc(v), { fontSize: '50px', fontWeight: 700, fill: col, letterSpacing: '-.03em' });
    txt(gFind, PX + 112, y - 22, l1, { fontSize: '17px', fill: C.ink2 }); txt(gFind, PX + 112, y + 1, l2, { fontSize: '17px', fontWeight: 700 }); };
  stat(178, S.mean_between, 'alike, two ads from', 'different companies', C.ink);
  stat(240, S.mean_within, 'alike, two ads from', 'the same company', C.plum);
  tag(gFind, W - 8, 177, 'descriptive', { anchor: 'end', size: 14 });

  // 3. families: the only place the ad is a template
  const dimRest = s('path', { d: `M${X0},${Y0}h${M}v${M}h${-M}z${famHoles}`, 'fill-rule': 'evenodd', fill: C.bg, 'fill-opacity': .82, style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const dimFam = s('path', { d: famHoles, fill: C.bg, 'fill-opacity': .82, style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const gFamMarks = layer();
  fam.forEach(b => { const [x, y, w] = sq(b); s('rect', { x: x - 1.5, y: y - 1.5, width: w + 3, height: w + 3, rx: 2, fill: 'none', stroke: C.coral, 'stroke-width': 2.5 }, gFamMarks); });
  const [ax, , aw] = sq(fam[0]), small = fam.slice(1), [sx, sy] = sq(small[0]), last = small[small.length - 1], [lx, ly, lw] = sq(last);
  txt(gFamMarks, ax + aw + 14, Y0 + 30, fam[0].label, { fontSize: '17px', fontWeight: 700 });
  txt(gFamMarks, ax + aw + 14, Y0 + 52, `${fam[0].size} ads, one checklist`, { fontSize: '15px', fill: C.ink2 });
  s('line', { x1: sx + 6, y1: ly + lw + 4, x2: X0 + 60, y2: Y0 + 200, stroke: C.coral, 'stroke-width': 1.5 }, gFamMarks);
  small.forEach((b, k) => txt(gFamMarks, X0 + 14, Y0 + 222 + k * 21, b.label, { fontSize: '16px', fontWeight: 700 }));
  const gFam = layer();
  kicker(gFam, PX, 296, 'WHERE ADS DO MATCH');
  txt(gFam, PX, 328, 'here the ad is a template', { fontSize: '24px', fontWeight: 700 });
  txt(gFam, PX, 380, `${CP.duty_per_1000.toFixed(1)} in 1,000`, { fontSize: '40px', fontWeight: 700, fill: C.coral, letterSpacing: '-.02em' });
  txt(gFam, PX, 406, 'duty bullets copied word for word', { fontSize: '17px', fill: C.ink2 });
  txt(gFam, PX, 429, 'about half of them inside these families', { fontSize: '17px', fontWeight: 700 });

  // 4. everyone else: each ad is its own request; one ordinary ad ringed
  const li = S.ring, lv = S.nearest[li][0], ry = Y0 + li * cell;
  const gRing = layer();
  s('rect', { x: X0 - 2, y: ry - 2, width: M + 4, height: cell + 4, rx: 3, fill: 'none', stroke: C.coral, 'stroke-width': 2.5 }, gRing);
  s('rect', { x: X0 + M - 130, y: ry - 34, width: 126, height: 28, rx: 8, fill: C.paper, stroke: C.line }, gRing);
  txt(gRing, X0 + M - 67, ry - 14, 'a Paris ad', { fontSize: '16px', fontWeight: 700 }, { 'text-anchor': 'middle' });
  const gRest = layer();
  kicker(gRest, PX, 296, 'EVERY OTHER AD');
  txt(gRest, PX, 328, 'each ad is its own request', { fontSize: '24px', fontWeight: 700 });
  txt(gRest, PX, 362, `${S.company[li]}, Paris: closest other ad ${pc(lv)} alike`, { fontSize: '17px' });
  txt(gRest, PX, 385, `a typical ad’s closest: ${pc(S.nearest_median)}`, { fontSize: '17px', fill: C.ink2 });
  txt(gRest, PX, 424, 'ask which line', { fontSize: '24px', fontWeight: 700, fill: C.coral });
  txt(gRest, PX, 452, 'is the real priority', { fontSize: '24px', fontWeight: 700, fill: C.coral });

  // 5. stretch: a question over the pale field
  const gQ = layer(), qx = X0 + 250, qy = Y0 + 22;
  s('rect', { x: qx, y: qy, width: 214, height: 92, rx: 14, fill: C.paper, stroke: C.coral, 'stroke-width': 2 }, gQ);
  txt(gQ, qx + 107, qy + 38, 'does a specific ad', { fontSize: '21px', fontWeight: 700 }, { 'text-anchor': 'middle' });
  txt(gQ, qx + 107, qy + 66, 'mean a clear brief?', { fontSize: '21px', fontWeight: 700, fill: C.coral }, { 'text-anchor': 'middle' });

  // absolute state for build k (1-based): which layers show
  const state = k => {
    const on = { gExp: k === 1, gPanelExp: k >= 1, gLeg: k <= 2, gFind: k >= 2, gFamMarks: k === 3, gFam: k === 3, gRing: k >= 4, gRest: k >= 4, gQ: k >= 5 };
    Object.entries({ gExp, gPanelExp, gLeg, gFind, gFamMarks, gFam, gRing, gRest, gQ }).forEach(([nm, g]) => g.style.opacity = on[nm] ? 1 : 0);
    gPanelExp.style.opacity = k >= 2 ? .45 : 1; strike.style.opacity = k >= 2 ? 1 : 0;
    dimRest.style.opacity = k === 3 ? 1 : 0; dimFam.style.opacity = k >= 4 ? 1 : 0;
    if (k >= 2) setClip(1.01); else setClip(0);
  };
  return [
    async () => { state(1); await wait(500); },
    async () => { setClip(0); state(2); setClip(0); await tween(2200, e => setClip(e * 1.01), { ease: E.inOut }); },
    async () => { state(3); await wait(600); },
    async () => { state(4); await wait(600); },
    optional(async () => { state(5); await wait(600); })
  ];
}
