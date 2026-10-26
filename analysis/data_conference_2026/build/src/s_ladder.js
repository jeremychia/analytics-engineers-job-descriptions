/* The ladder as two slope charts: the core stays flat, the verbs climb. Real prevalence by level (classifier ladder). */
function buildLadder(stage) {
  const W = 1000, H = 540, core = D.ladder.core, svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const lv = ['Junior', 'Mid', 'Senior', 'Lead+'];
  const panel = (x0, title, items, col) => {
    const g = s('g', { style: { opacity: 0 } }, svg), pw = 330, y0 = 90, ph = 300, X = i => x0 + 20 + i * (pw - 20) / 3, Y = v => y0 + ph - v / 100 * ph;
    s('text', { x: x0, y: 52, class: 'cardlab', text: title }, g);
    [0, 25, 50, 75, 100].forEach(v => { s('line', { x1: x0 + 10, x2: x0 + pw + 8, y1: Y(v), y2: Y(v), stroke: C.line, 'stroke-width': v ? .8 : 1.6 }, g);
      s('text', { x: x0 - 2, y: Y(v) + 4, 'text-anchor': 'end', class: 'tick', text: v ? v + '%' : '' }, g); });
    lv.forEach((l, i) => s('text', { x: X(i), y: y0 + ph + 26, 'text-anchor': 'middle', class: 'tick', text: l }, g));
    const paths = items.map(([key, label, color]) => { const v = core[key]; const d = v.map((p, i) => (i ? 'L' : 'M') + X(i) + ',' + Y(p)).join(' ');
      const p = s('path', { d, fill: 'none', stroke: color, 'stroke-width': 4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
      const len = p.getTotalLength(); p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
      const dots = v.map((q, i) => { const c = s('circle', { cx: X(i), cy: Y(q), r: 5, fill: color, stroke: C.bg, 'stroke-width': 2, style: { opacity: 0 } }, g); return c; });
      const lab = s('text', { x: X(3) + 12, y: Y(v[3]) + 4, class: 'endlab', text: label, style: { fill: color, opacity: 0 } }, g);
      return { p, len, dots, lab, v }; });
    const ord = paths.slice().sort((a, b) => b.v[3] - a.v[3]); let last = -1e9;      // top to bottom, at least 17px apart
    ord.forEach(o => { let y = Y(o.v[3]) + 4; if (y - last < 17) y = last + 17; o.lab.setAttribute('y', y); last = y; });
    return { g, paths, X, Y, y0, ph };
  };
  const left = panel(40, 'The core: asked at every level', [['SQL', 'SQL', C.plum], ['Any warehouse (Snowflake/BQ/Databricks/Redshift/Fabric)', 'a warehouse', C.blue],
    ['THEME: Data Quality & Testing', 'tests on data', C.teal], ['THEME: Stakeholder Collaboration & Requirements', 'stakeholders', C.amber]], C.plum);
  const right = panel(540, 'The verb: what changes', [['SCOPE: support / assist', '“support”', C.mute], ['SCOPE: own', '“own”', C.blue], ['Mentoring / coaching / code review', 'mentor', C.teal],
    ['Define standards / best practices / conventions', 'set standards', C.plum], ['Roadmap / prioritisation / strategy', 'roadmap', C.coral], ['SCOPE: lead / drive', '“lead / drive”', C.amber]], C.coral);
  const yrs = s('g', { style: { opacity: 0 } }, svg);
  s('text', { x: 40, y: 462, class: 'rowsub', text: 'Median years asked' }, yrs);
  D.ladder.years.forEach((v, i) => { s('text', { x: left.X(i), y: 494, 'text-anchor': 'middle', class: 'ladnum2', text: v }, yrs); });
  const fr = s('g', { style: { opacity: 0 } }, svg);
  s('rect', { x: 520, y: 456, width: 450, height: 62, rx: 14, fill: C.paper, stroke: C.line }, fr);
  s('text', { x: 540, y: 482, class: 'rowlab', text: 'France (94 ads): same direction, wide margins' }, fr);
  s('text', { x: 540, y: 504, class: 'rowsub', text: 'only the degree step is clear: 92% of 13 junior ads, 44% of mid ads' }, fr);
  const draw = async (pn, delay0 = 0) => { pn.g.style.transition = 'opacity .5s'; pn.g.style.opacity = 1;
    await Promise.all(pn.paths.map(({ p, len, dots, lab }, i) => tween(1500, e => { p.style.strokeDashoffset = len * (1 - e);
      dots.forEach((d, k) => d.style.opacity = e > k / 3 ? 1 : 0); lab.style.opacity = e > .9 ? 1 : 0; }, { delay: delay0 + i * 260, ease: E.inOut }))); };
  const cap = s('text', { x: 540, y: 440, class: 'rowsub', text: 'mid to senior: mentoring +20 points, standards +19 · senior to lead: roadmap +31', style: { opacity: 0 } }, svg);
  return [
    async () => { await draw(left); },
    async () => { await draw(right); },
    async () => { yrs.style.transition = fr.style.transition = cap.style.transition = 'opacity .6s'; cap.style.opacity = 1; await wait(500); yrs.style.opacity = 1; fr.style.opacity = 1; await wait(600); }
  ];
}
