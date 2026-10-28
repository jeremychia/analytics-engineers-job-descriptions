/* What the ad leaves out: the share of ads that tell you each thing you would ask on a first call, then the ones to ask about. */
function buildMissing(stage) {
  const W = 1000, M = D.missing, items = [...M.items].sort((a, b) => b.pct - a.pct), ask = items.filter(it => it.pct < 50);
  const svg = s('svg', { viewBox: `0 0 ${W} 520`, class: 'chart' }, stage), L = 330, BW = 520, RH = 66, T = 70;
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '20px', fill: C.ink }, st) }, a), p);
  txt(svg, L, 30, `share of ${M.n.toLocaleString('en-US')} ads that tell you…`, { fontSize: '18px', fill: C.ink2, fontWeight: 500 });
  tag(svg, W - 8, 30, 'descriptive', { anchor: 'end' });
  const rows = items.map((it, i) => { const y = T + i * RH, g = s('g', { style: { transition: 'opacity .5s' } }, svg);
    txt(g, L - 20, y + 30, it.label, { fontSize: '22px', fontWeight: 700 }, { 'text-anchor': 'end' });
    s('rect', { x: L, y: y + 8, width: BW, height: 32, rx: 8, fill: C.grey, opacity: .45 }, g);
    const bar = s('rect', { x: L, y: y + 8, width: 0, height: 32, rx: 8, fill: C.coral }, g);
    const num = txt(g, L + BW + 16, y + 33, '0%', { fontSize: '26px', fontWeight: 700 });
    return { it, g, bar, num }; });
  const gAsk = s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg), y0 = T + (items.length - ask.length) * RH, y1 = T + items.length * RH - 14;
  s('rect', { x: 20, y: y0 - 4, width: W - 40, height: y1 - y0 + 10, rx: 14, fill: 'none', stroke: C.coral, 'stroke-width': 3 }, gAsk);
  txt(gAsk, W / 2, y1 + 50, 'Not in the ad? Ask on the first call.', { fontSize: '30px', fontWeight: 700, fill: C.coral }, { 'text-anchor': 'middle' });
  const fill = e => rows.forEach(r => { r.bar.setAttribute('width', BW * r.it.pct / 100 * e); r.num.textContent = Math.round(r.it.pct * e) + '%'; });
  return [
    async () => { gAsk.style.opacity = 0; rows.forEach(r => r.g.style.opacity = 1); fill(0); await tween(1200, fill, { ease: E.inOut }); },
    async () => { fill(1); rows.forEach(r => r.g.style.opacity = ask.includes(r.it) ? 1 : .35); gAsk.style.opacity = 1; await wait(Anim.fast ? 0 : 500); }
  ];
}
