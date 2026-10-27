/* Stack against scope: same level, different stack, different job. A choice of job, not a ranking of tools. */
function buildStack(stage) {
  const W = 1000, svg = s('svg', { viewBox: `0 0 ${W} 520`, class: 'chart' }, stage), ST = D.stack, GL = D.gap_by_level, CX = ST.context.items;
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const L = { bars: layer(), title: layer(), duty: layer(), cards: layer(), note: layer(), ctx: layer(), open: layer() };
  // absolute state for every layer: fade out what goes, then bring in what stays
  const show = async on => { let off = false;
    Object.entries(L).forEach(([k, g]) => { if (!(k in on) && +g.style.opacity > 0) { off = true; } if (!(k in on)) g.style.opacity = 0; });
    if (off && !(await wait(420))) return false;
    Object.entries(on).forEach(([k, v]) => L[k].style.opacity = v); return wait(Anim.fast ? 0 : 450); };
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '16px', fill: C.ink2 }, st) }, a), p);
  const cols = { dbt_only: C.plum, pbi_only: C.coral }, nm = { dbt_only: 'dbt, no Power BI or Fabric', pbi_only: 'Power BI or Fabric, no dbt' };

  // 1. strategic share, same level, two stacks
  const base = 430, pxs = 4, bars = [], deltas = [];
  txt(L.bars, W / 2, 26, 'share of ads that ask for strategic work: “define, own, shape, lead” rather than “support, assist, deliver”', { fontWeight: 500 }, { 'text-anchor': 'middle' });
  [['mid', 'Mid-level ads', 40], ['senior', 'Senior ads', 520]].forEach(([lv, lab, x0]) => {
    txt(L.bars, x0 + 205, 70, lab, { fontSize: '20px', fontWeight: 700, fill: C.ink }, { 'text-anchor': 'middle' });
    s('line', { x1: x0, x2: x0 + 420, y1: base, y2: base, stroke: C.line, 'stroke-width': 2 }, L.bars);
    const v = {};
    ['dbt_only', 'pbi_only'].forEach((g, k) => { const [val, n] = ST.levels[lv][g], cx = x0 + 95 + k * 220; v[g] = val;
      const r = s('rect', { x: cx - 65, y: base, width: 130, height: 0, rx: 12, fill: cols[g] }, L.bars);
      const t = s('text', { x: cx, y: base - 12, 'text-anchor': 'middle', class: 'bigstat2', text: '0%', style: { fontSize: '52px', fill: cols[g] } }, L.bars);
      txt(L.bars, cx, base + 28, nm[g], {}, { 'text-anchor': 'middle' }); txt(L.bars, cx, base + 50, `${n} ads`, { fontSize: '15px' }, { 'text-anchor': 'middle' });
      bars.push({ r, t, val, cx }); });
    // the gap: a dashed line at the dbt bar's height, carried over the Power BI bar
    const yTop = base - pxs * v.dbt_only, yLow = base - pxs * v.pbi_only - 58, pp = Math.round(D.stats.levels[lv].diff * 100);
    const d = s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, L.bars);
    s('line', { x1: x0 + 160, x2: x0 + 380, y1: yTop, y2: yTop, stroke: C.plum, 'stroke-width': 2, 'stroke-dasharray': '6 5' }, d);
    s('line', { x1: x0 + 315, x2: x0 + 315, y1: yTop + 4, y2: yLow, stroke: C.ink2, 'stroke-width': 2 }, d);
    txt(d, x0 + 178, yTop - 14, `+${pp} points`, { fontSize: '26px', fontWeight: 700, fill: C.ink });
    tag(d, x0 + 322, yTop - 14, 'conclusive');
    deltas.push(d);
  });
  const setBars = e => bars.forEach(({ r, t, val }) => { const hh = pxs * val * e; r.setAttribute('y', base - hh); r.setAttribute('height', hh); t.setAttribute('y', base - hh - 12); t.textContent = Math.round(val * e) + '%'; });

  // 2. the title won't warn you
  const AE = ST.ae_titled, bx = 120, bw = 760, seg = bw * AE.pbi_only_pct / 100;
  const fade = s('linearGradient', { id: 'stackFade', x1: 0, x2: 0, y1: 0, y2: 1 }, s('defs', {}, L.title));
  [[0, 1], [.9, 1], [1, 0]].forEach(([o, v]) => s('stop', { offset: o, 'stop-color': C.bg, 'stop-opacity': v }, fade));
  s('rect', { x: 0, y: 84, width: W, height: 360, fill: 'url(#stackFade)' }, L.title);
  s('text', { x: bx, y: 200, class: 'bigstat2', text: AE.pbi_only_pct + '%', style: { fontSize: '96px' } }, L.title);
  txt(L.title, bx + 200, 160, `of ${AE.n} ads titled “Analytics Engineer”`, { fontSize: '28px', fontWeight: 700, fill: C.ink });
  txt(L.title, bx + 200, 198, 'name Power BI or Fabric, and no dbt', { fontSize: '28px', fontWeight: 700, fill: C.ink });
  s('rect', { x: bx, y: 236, width: bw, height: 46, rx: 10, fill: C.grey }, L.title);
  const aeSeg = s('rect', { x: bx, y: 236, width: 0, height: 46, rx: 10, fill: C.coral }, L.title);
  txt(L.title, bx + bw, 310, `${AE.n} ads with the same title`, {}, { 'text-anchor': 'end' });
  txt(L.title, W / 2, 364, 'The title won’t warn you which job it is.', { fontSize: '26px', fontWeight: 700, fill: C.coral }, { 'text-anchor': 'middle' });

  // 3. what fills the job: duty themes by level, same two groups as the bars
  const pick = [['BI & Reporting/Dashboards', 'dashboards and reporting'], ['Business Analysis & Insight Generation', 'business analysis'], ['Data Modeling & Transformation', 'data modelling'],
    ['Data Quality & Testing', 'data quality and tests'], ['Data Ownership (end-to-end)', 'end-to-end ownership'], ['Data Infrastructure & Warehouse Ops', 'warehouse operations']];
  txt(L.duty, 40, 26, 'what fills the job: share of an ad’s duties on each theme', { fontWeight: 500 });
  [[C.plum, nm.dbt_only, 560], [C.coral, nm.pbi_only, 790]].forEach(([c, t, x]) => { s('circle', { cx: x, cy: 21, r: 7, fill: c }, L.duty); txt(L.duty, x + 13, 26, t, { fontSize: '15px' }); });
  const panels = [['mid', 'Mid-level ads', 270], ['senior', 'Senior ads', 640]], pw = 300, sc = pw / 25, rowY = k => k ? 140 + k * 58 : 120, dumbs = [];
  panels.forEach(([lv, lab, x0]) => { txt(L.duty, x0 + pw / 2, 72, lab, { fontSize: '20px', fontWeight: 700, fill: C.ink }, { 'text-anchor': 'middle' });
    [0, 10, 20].forEach(t => { s('line', { x1: x0 + t * sc, x2: x0 + t * sc, y1: 90, y2: 470, stroke: C.line, 'stroke-dasharray': '2 4' }, L.duty);
      txt(L.duty, x0 + t * sc, 488, t + '%', { fontSize: '13px', fill: C.mute }, { 'text-anchor': 'middle' }); }); });
  const rows = pick.map(([theme, label], k) => { const g = s('g', { style: { transition: 'opacity .6s' } }, L.duty), y = rowY(k), i = GL.themes.indexOf(theme), hot = k === 0;
    txt(g, 40, y + 6, label, { fontSize: '17px', fontWeight: 700, fill: C.ink });
    panels.forEach(([lv, , x0]) => { const lvl = GL.levels[lv], a = lvl.dbt[i] * 100, b = lvl.pbi[i] * 100;
      const ln = s('line', { y1: y, y2: y, stroke: hot ? C.coral : C.mute, 'stroke-width': hot ? 4 : 3 }, g);
      const da = s('circle', { cy: y, r: hot ? 10 : 8, fill: C.plum }, g), db = s('circle', { cy: y, r: hot ? 10 : 8, fill: C.coral }, g);
      const st = { fontSize: hot ? '20px' : '15px', fontWeight: hot ? 700 : 500 };
      const ta = txt(g, 0, y + (hot ? 7 : 5), Math.round(a) + '%', Object.assign({ fill: C.plum }, st)), tb = txt(g, 0, y + (hot ? 7 : 5), Math.round(b) + '%', Object.assign({ fill: C.coral }, st));
      dumbs.push({ x0, a, b, ln, da, db, ta, tb, r: hot ? 10 : 8 }); });
    if (hot) tag(g, 40, y + 34, 'conclusive');
    return { g, hot }; });
  const setDumbs = e => dumbs.forEach(({ x0, a, b, ln, da, db, ta, tb, r }) => { const xa = x0 + a * sc * e, xb = x0 + b * sc * e;
    da.setAttribute('cx', xa); db.setAttribute('cx', xb); ln.setAttribute('x1', xa); ln.setAttribute('x2', xb);
    const [lo, hi] = xa <= xb ? [[ta, xa], [tb, xb]] : [[tb, xb], [ta, xa]];
    lo[0].setAttribute('x', lo[1] - r - 6); lo[0].setAttribute('text-anchor', 'end'); hi[0].setAttribute('x', hi[1] + r + 6); hi[0].setAttribute('text-anchor', 'start');
    ta.style.opacity = tb.style.opacity = e; });

  // 4. read the first duty: two senior ads, verbs marked
  const verbSpans = [];
  const card = (x, title, col, quote, verb, asks) => { const g = s('g', {}, L.cards), y = 44;
    s('rect', { x, y, width: 440, height: 236, rx: 20, fill: C.paper, stroke: C.line }, g); s('rect', { x, y, width: 440, height: 8, rx: 4, fill: col }, g);
    s('text', { x: x + 28, y: y + 46, class: 'cardlab', text: title, style: { fontSize: '15px' } }, g);
    const m = quote.match(new RegExp('\\b' + verb + '\\b', 'i')), at = m ? m.index : -1;
    const span = h('span', { style: { color: col, boxShadow: `inset 0 -0.18em 0 ${col}`, transition: 'box-shadow .6s' } }, at < 0 ? '' : quote.slice(at, at + verb.length));
    const fo = s('foreignObject', { x: x + 28, y: y + 64, width: 390, height: 120 }, g);
    fo.append(h('div', { class: 'cardq', style: { fontSize: '26px' } }, '“', at < 0 ? quote : quote.slice(0, at), span, at < 0 ? '' : quote.slice(at + verb.length), '…”'));
    verbSpans.push({ span, col });
    s('text', { x: x + 28, y: y + 212, class: 'cardask', text: asks, style: { fill: col, fontSize: '22px' } }, g); };
  card(40, 'Senior · Power BI · Lenovo', C.coral, D.quotes.lenovo, 'supporting', 'asks you to support');
  card(520, 'Senior · dbt + Snowflake · January', C.plum, D.quotes.january, 'own', 'asks you to own');
  txt(L.cards, W / 2, 342, 'Read the first duty. Its verb tells you the job.', { fontSize: '32px', fontWeight: 700, fill: C.ink }, { 'text-anchor': 'middle' });
  txt(L.cards, W / 2, 378, 'Same level, both senior. Pick the verb you want to do.', { fontSize: '18px' }, { 'text-anchor': 'middle' });
  const setVerbs = on => verbSpans.forEach(({ span, col }) => span.style.boxShadow = `inset 0 ${on ? '-0.45em' : '-0.1em'} 0 ${on ? col + '33' : col}`);

  // 5. the counting caveat
  s('rect', { x: 170, y: 410, width: 660, height: 56, rx: 28, fill: C.paper, stroke: C.ink2, 'stroke-width': 1.5 }, L.note);
  txt(L.note, W / 2, 445, '“Strategic” is counted from verbs. A short ad can undersell the team.', { fontSize: '19px', fontWeight: 500 }, { 'text-anchor': 'middle' });

  // 6. the tool, or the team that picks it? what the ads say about the team
  txt(L.ctx, 40, 40, 'Power BI-only ads: less often an early-stage team,', { fontSize: '26px', fontWeight: 700, fill: C.ink });
  txt(L.ctx, 40, 74, 'more often fixing and scaling', { fontSize: '26px', fontWeight: 700, fill: C.ink });
  tag(L.ctx, 420, 74, 'suggestive');
  txt(L.ctx, 40, 122, 'share of ads, all levels, that describe the data team as…', { fontWeight: 500 });
  const cn = ST.context.n;
  [[C.plum, `dbt, no Power BI (${cn.dbt})`, 560], [C.coral, `Power BI, no dbt (${cn.pbi})`, 770]].forEach(([c, t, x]) => { s('circle', { cx: x, cy: 117, r: 7, fill: c }, L.ctx); txt(L.ctx, x + 13, 122, t, { fontSize: '15px' }); });
  const cx0 = 360, csc = 540 / 45, cdots = [];
  [0, 10, 20, 30, 40].forEach(t => { s('line', { x1: cx0 + t * csc, x2: cx0 + t * csc, y1: 150, y2: 330, stroke: C.line, 'stroke-dasharray': '2 4' }, L.ctx);
    txt(L.ctx, cx0 + t * csc, 348, t + '%', { fontSize: '13px', fill: C.mute }, { 'text-anchor': 'middle' }); });
  [['early', 'an early-stage team', true], ['fix_scale', 'fixing and scaling what exists', true], ['mature', 'a mature team', false]].forEach(([key, label, gap], k) => {
    const y = 180 + k * 60, it = CX[key], a = it.pct.dbt, b = it.pct.pbi, col = gap ? C.ink : C.ink2;
    txt(L.ctx, 40, y + 6, label, { fontSize: '18px', fontWeight: 700, fill: col });
    const ln = s('line', { y1: y, y2: y, stroke: gap ? C.coral : C.mute, 'stroke-width': 3 }, L.ctx);
    const da = s('circle', { cy: y, r: 9, fill: C.plum }, L.ctx), db = s('circle', { cy: y, r: 9, fill: C.coral }, L.ctx);
    const ta = txt(L.ctx, 0, y + 6, Math.round(a) + '%', { fill: C.plum, fontWeight: 700 }), tb = txt(L.ctx, 0, y + 6, Math.round(b) + '%', { fill: C.coral, fontWeight: 700 });
    cdots.push({ x0: cx0, a, b, ln, da, db, ta, tb, r: 9, sc: csc });
    if (!gap) txt(L.ctx, 960, y + 6, 'about the same', { fontSize: '15px', fontStyle: 'italic' }, { 'text-anchor': 'end' }); });
  const setCtx = e => cdots.forEach(({ x0, a, b, ln, da, db, ta, tb, r, sc: k }) => { const xa = x0 + a * k * e, xb = x0 + b * k * e;
    da.setAttribute('cx', xa); db.setAttribute('cx', xb); ln.setAttribute('x1', xa); ln.setAttribute('x2', xb);
    const [lo, hi] = xa <= xb ? [[ta, xa], [tb, xb]] : [[tb, xb], [ta, xa]];
    lo[0].setAttribute('x', lo[1] - r - 6); lo[0].setAttribute('text-anchor', 'end'); hi[0].setAttribute('x', hi[1] + r + 6); hi[0].setAttribute('text-anchor', 'start');
    ta.style.opacity = tb.style.opacity = e; });

  // 7. the open question
  s('rect', { x: 110, y: 398, width: 780, height: 80, rx: 22, fill: 'none', stroke: C.ink2, 'stroke-width': 2, 'stroke-dasharray': '9 7' }, L.open);
  txt(L.open, W / 2, 447, 'So is it the tool, or the team that picks it?', { fontSize: '28px', fontWeight: 700, fill: C.ink }, { 'text-anchor': 'middle' });
  tag(L.open, 890, 386, 'untested', { anchor: 'end' });
  setDumbs(0); setCtx(0);

  return [
    async () => { setBars(0); deltas.forEach(d => d.style.opacity = 0); await show({ bars: 1 });
      await Promise.all(bars.map(({ r, t, val }, i) => tween(1200, e => { const hh = pxs * val * e; r.setAttribute('y', base - hh); r.setAttribute('height', hh); t.setAttribute('y', base - hh - 12); t.textContent = Math.round(val * e) + '%'; }, { delay: i * 220 })));
      if (!(await wait(250))) return; deltas.forEach(d => d.style.opacity = 1); },
    async () => { setBars(1); deltas.forEach(d => d.style.opacity = 1); aeSeg.setAttribute('width', 0); await show({ bars: .12, title: 1 });
      await tween(900, e => aeSeg.setAttribute('width', seg * e)); },
    async () => { rows.forEach(r => r.g.style.opacity = 1); setDumbs(0); await show({ duty: 1 });
      await tween(1100, setDumbs); if (!(await wait(500))) return; rows.forEach(r => r.g.style.opacity = r.hot ? 1 : .3); },
    async () => { setVerbs(false); await show({ cards: 1 }); if (!(await wait(500))) return; setVerbs(true); },
    optional(async () => { setVerbs(true); await show({ cards: 1, note: 1 }); }),
    optional(async () => { setCtx(0); await show({ ctx: 1 }); await tween(1100, setCtx); }),
    optional(async () => { setCtx(1); await show({ ctx: 1, open: 1 }); })
  ];
}
