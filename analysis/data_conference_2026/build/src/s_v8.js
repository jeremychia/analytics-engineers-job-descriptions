/* Slides only the v8 deck uses: how alike the responsibilities in two analytics-engineer ads are, against an analytics-engineer ad and a data-engineer ad. Runs after s_v7.js. */

/* similarity of the responsibility bullets on its full 0–100% scale: two ads from one company as the yardstick, then two analytics-engineer ads from different companies, then one against a data-engineer ad, then the claim */
function buildAlike(stage) {
  const B = D.sim.duties_only, MAX = 1;
  const bar = (label, share, col) => {
    const fill = h('div', { style: { height: '100%', width: 0, background: col, borderRadius: '8px', transition: 'width .9s cubic-bezier(.2,.7,.2,1)' } });
    // the label sits above its bar, so a narrow window never squeezes it into the bar
    const row = v7.fade(h('div', { style: { display: 'flex', flexDirection: 'column', gap: '1vh' } },
      h('div', { style: { fontSize: 'clamp(16px,1.8vw,28px)', fontWeight: 700, whiteSpace: 'nowrap' } }, label),
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '1.5vw' } },
        h('div', { style: { flex: '1 1 0', minWidth: 0, height: 'clamp(26px,4vh,44px)', background: C.line, borderRadius: '8px' } }, fill),
        h('div', { style: { fontSize: 'clamp(28px,3.6vw,56px)', fontWeight: 700, color: col, lineHeight: 1, width: '3.3em', textAlign: 'right', fontVariantNumeric: 'tabular-nums' } }, `${(100 * share).toFixed(1)}%`))));
    row.fill = () => fill.style.width = `${100 * share / MAX}%`;
    return row;
  };
  const head = v7.fade(h('div', { style: { fontSize: 'clamp(15px,1.5vw,24px)', color: C.ink2 } }, 'How alike the responsibilities in two ads are · 100% = identical'));
  const same = bar('two ads from the same company', B.mean_within, C.mute);
  const ae = bar('two analytics-engineer ads, different companies', B.ae_ae.mean, C.plum), de = bar('an analytics-engineer ad and a data-engineer ad', B.ae_de.mean, C.coral);
  const line = v7.line('Same title. ', 'No closer than a data-engineer ad.');
  stage.append(h('div', { class: 'col', style: { gap: '3.5vh' } }, head, same, ae, de, line));
  const rows = [head, same, ae, de, line];
  const step = (on, pause = 900) => async () => { rows.forEach((el, k) => { v7.show(el, on[k]); on[k] && el.fill && el.fill(); }); await wait(Anim.fast ? 0 : pause); };
  return [step([1, 1, 0, 0, 0]), step([1, 1, 1, 0, 0]), step([1, 1, 1, 1, 0]), step([1, 1, 1, 1, 1], 600)];
}

/* the level pyramid beside the shape of an ageing population, then today's juniors as tomorrow's seniors, then the question it leaves */
function buildFuture(stage) {
  const W = 1000, N = D.seniority_n, svg = s('svg', { viewBox: `0 0 ${W} 440`, class: 'chart' });
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '19px', fill: C.ink }, st) }, a), p);
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .6s' } }, svg);
  const levels = [['manager', C.plum], ['staff', C.plum], ['lead', C.plum], ['senior', C.plum], ['mid', C.mute], ['junior', C.coral]];
  const CX = 330, HALF = 210, Y0 = 30, ROW = 62, BH = 48, BASE = Y0 + 5 * ROW + BH, peak = Math.max(...levels.map(([lv]) => N[lv]));
  const mid = k => Y0 + k * ROW + BH / 2;
  const bars = levels.map(([lv, col], k) => {
    const half = HALF * N[lv] / peak, strong = lv === 'junior';
    txt(svg, CX - HALF - 24, mid(k) + 7, lv, { fontWeight: strong ? 700 : 500, fill: strong ? C.coral : C.ink2 }, { 'text-anchor': 'end' });
    const bar = s('rect', { x: CX, y: Y0 + k * ROW, width: 0, height: BH, rx: 6, fill: col }, svg);
    const n = txt(svg, CX + half + 12, mid(k) + 7, `${N[lv]}`, { fontWeight: strong ? 700 : 500, fill: strong ? C.coral : C.ink2, opacity: 0 });
    return { bar, n, half };
  });
  const grow = e => bars.forEach(({ bar, n, half }, k) => { const t = Math.min(1, Math.max(0, e * 1.8 - (bars.length - 1 - k) * .16)), w = half * (1 - (1 - t) ** 3);
    bar.setAttribute('x', CX - w); bar.setAttribute('width', 2 * w); n.style.opacity = t >= 1 ? 1 : 0; });
  // South Korea's population by five-year age band, youngest at the bottom, under-20s in coral: the narrowest base of any large country
  const P = D.population, gHive = layer(), HX = 885, HH = 100, top = Math.max(...P.bands.map(([, n]) => n)), BAND = (BASE - Y0) / P.bands.length;
  P.bands.forEach(([age, n], i) => { const f = n / top, young = i < 4;
    s('rect', { x: HX - HH * f, y: BASE - (i + 1) * BAND + .5, width: 2 * HH * f, height: BAND - 1, fill: young ? C.coral : C.mute, opacity: young ? .9 : .6 }, gHive); });
  txt(gHive, HX, BASE + 30, `${P.country}, ${P.year}`, { fontWeight: 700 }, { 'text-anchor': 'middle' });
  txt(gHive, HX, BASE + 50, 'people by age · UN figures', { fontSize: '14px', fill: C.mute }, { 'text-anchor': 'middle' });
  txt(gHive, HX - HH - 12, BASE - 4, 'age 0', { fontSize: '14px', fill: C.ink2 }, { 'text-anchor': 'end' });
  txt(gHive, HX - HH - 12, Y0 + 12, '100+', { fontSize: '14px', fill: C.ink2 }, { 'text-anchor': 'end' });
  // today's juniors climb to tomorrow's seniors
  const gArrow = layer(), x0 = CX + bars[5].half + 52, x1 = CX + bars[3].half + 64;
  s('path', { d: `M ${x0} ${mid(5)} C ${x0 + 230} ${mid(5)}, ${x1 + 150} ${mid(3) + 70}, ${x1 + 6} ${mid(3) + 8}`, fill: 'none', stroke: C.coral, 'stroke-width': 3, 'stroke-linecap': 'round' }, gArrow);
  s('path', { d: `M ${x1 + 20} ${mid(3) + 4} L ${x1 + 4} ${mid(3) + 8} L ${x1 + 14} ${mid(3) + 21}`, fill: 'none', stroke: C.coral, 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, gArrow);
  txt(gArrow, x0 - 40, BASE + 32, 'today’s juniors are tomorrow’s seniors', { fontSize: '17px', fill: C.coral, fontWeight: 700 });
  const ratio = Math.round((N.senior + N.lead + N.staff + N.manager) / N.junior);
  const line = v7.line(`1 junior ad for every ${ratio} senior. `, 'Who will the seniors be in five years?');
  stage.append(h('div', { class: 'col', style: { gap: '2vh' } }, svg, line));
  return [
    async () => { [gHive, gArrow, line].forEach(el => v7.show(el, 0)); grow(0); await tween(1600, grow); },
    ...v7.steps([gHive, gArrow, line], [[1, 0, 0], [1, 1, 0], [1, 1, 1]], 600)
  ];
}
