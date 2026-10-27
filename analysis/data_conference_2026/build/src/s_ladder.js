/* The ladder: the core stays flat, the strategic verb climbs; six single verbs drawn faint behind it. One ad set (English ads with a level). */
function buildLadder(stage) {
  const W = 1000, H = 520, L = D.ladder, core = L.core, svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const lv = ['Junior', 'Mid', 'Senior', 'Lead+'], y0 = 66, ph = 300, Y = v => y0 + ph - v / 100 * ph, base = Y(0);
  const layer = (o = {}) => s('g', { style: Object.assign({ opacity: 0, transition: 'opacity .6s' }, o) }, svg);
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '15px', fill: C.ink2 }, st) }, a), p);
  const pathOf = (v, X, from = 0, to = 3) => v.slice(from, to + 1).map((q, i) => (i ? 'L' : 'M') + X(from + i) + ',' + Y(q)).join(' ');
  const spread = (items, gap = 18) => { let last = -1e9; items.forEach(o => { o.ly = Math.max(o.ly, last + gap); last = o.ly; }); };
  const axes = (g, X, x1, x2, tickX) => {
    [0, 25, 50, 75, 100].forEach(v => { s('line', { x1, x2, y1: Y(v), y2: Y(v), stroke: C.line, 'stroke-width': v ? .8 : 1.6 }, g);
      if (v && v < 100) txt(g, tickX, Y(v) + 4, v + '%', { fontSize: '13px', fill: C.mute, fontFamily: 'JetBrains Mono, monospace' }, { 'text-anchor': 'end' }); });
    lv.forEach((l, i) => txt(g, X(i), base + 26, l, { fill: C.ink2, fontWeight: 600 }, { 'text-anchor': 'middle' }));
  };
  const drawIn = (p, dur, delay = 0) => { const len = p.getTotalLength(); p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
    return tween(dur, e => { p.style.strokeDashoffset = len * (1 - e); }, { delay, ease: E.inOut }); };

  // 1. the core: four lines in one colour, years under each level
  const XC = i => 70 + i * 80, gCore = layer();
  s('text', { x: 40, y: 18, class: 'cardlab', text: 'Same at every level', style: { fontSize: '15px' } }, gCore);
  tag(gCore, 258, 18, 'suggestive');
  axes(gCore, XC, 56, 322, 52);
  const coreItems = [['SQL', 'SQL'], ['Any warehouse (Snowflake/BQ/Databricks/Redshift/Fabric)', 'a warehouse'],
    ['THEME: Data Quality & Testing', 'tests on data'], ['THEME: Stakeholder Collaboration & Requirements', 'stakeholders']]
    .map(([k, label]) => ({ v: core[k], label, ly: Y(core[k][3]) + 5 }));
  const coreLines = coreItems.map(o => s('path', { d: pathOf(o.v, XC), fill: 'none', stroke: C.plum, 'stroke-width': 3.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, gCore));
  spread(coreItems.slice().sort((a, b) => a.ly - b.ly));
  const coreLabs = coreItems.map(o => txt(gCore, XC(3) + 12, o.ly, o.label, { fill: C.plum, fontWeight: 700, opacity: 0 }));
  const gYears = layer();
  L.years.forEach((v, i) => s('text', { x: XC(i), y: base + 58, 'text-anchor': 'middle', class: 'ladnum2', text: v, style: { fontSize: '26px' } }, gYears));
  txt(gYears, 56, base + 82, 'median years asked');

  // 2. the verb panel and the one tested line
  const XV = i => 480 + i * 130, gVerb = layer(), gStrat = layer();
  s('text', { x: 470, y: 18, class: 'cardlab', text: 'The verb: what changes', style: { fontSize: '15px' } }, gVerb);
  axes(gVerb, XV, 466, 880, 460);
  const sv = core['strategic verbs'], stratLine = s('path', { d: pathOf(sv, XV), fill: 'none', stroke: C.coral, 'stroke-width': 6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, gStrat);
  const stratDots = sv.map((v, i) => s('circle', { cx: XV(i), cy: Y(v), r: 6.5, fill: C.coral, stroke: C.bg, 'stroke-width': 2.5, style: { opacity: 0 } }, gStrat));
  sv.forEach((v, i) => s('text', { x: XV(i), y: base + 52, 'text-anchor': 'middle', text: Math.round(v) + '%', style: { fontSize: '22px', fontWeight: 700, fill: C.coral } }, gStrat));
  const stratY = Y(sv[3]);
  tag(gStrat, 884, stratY - 22, 'conclusive');
  txt(gStrat, 886, stratY + 8, 'define, own', { fill: C.coral, fontWeight: 700, fontSize: '17px' });
  txt(gStrat, 886, stratY + 27, 'or lead', { fill: C.coral, fontWeight: 700, fontSize: '17px' });

  // 3. six single verbs, faint; junior to mid dashed (too few juniors), except "support", the one tested drop
  const gSix = layer(), gSeg = layer(), fade = '#c9b2ad';
  const six = [['SCOPE: lead / drive', '“lead / drive”'], ['SCOPE: own', '“own”'], ['Roadmap / prioritisation / strategy', 'roadmap'],
    ['SCOPE: support / assist', '“support”', true], ['Define standards / best practices / conventions', 'set standards'], ['Mentoring / coaching / code review', 'mentor']]
    .map(([k, label, solid]) => ({ v: core[k], label, solid, ly: Y(core[k][3]) + 5 }));
  six.forEach(o => {
    s('path', { d: pathOf(o.v, XV, 0, 1), fill: 'none', stroke: fade, 'stroke-width': 2, 'stroke-dasharray': o.solid ? 'none' : '5 5', 'stroke-linecap': 'round' }, gSix);
    s('path', { d: pathOf(o.v, XV, 1, 3), fill: 'none', stroke: fade, 'stroke-width': 2.4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, gSix);
  });
  const ordered = six.slice().sort((a, b) => a.ly - b.ly); ordered.forEach(o => { o.ly = Math.max(o.ly, stratY + 50); }); spread(ordered);
  six.forEach(o => { s('line', { x1: XV(3) + 3, y1: Y(o.v[3]), x2: XV(3) + 12, y2: o.ly - 5, stroke: fade, 'stroke-width': 1.2 }, gSix);
    txt(gSix, XV(3) + 15, o.ly, o.label, { fill: C.ink2, fontWeight: 600 }); });
  svg.appendChild(gStrat);                                                   // the tested line stays on top of the faint ones
  [[0.5, ['support → own']], [1.5, ['+ mentor', '+ standards']], [2.5, ['+ roadmap']]].forEach(([i, ts]) => ts.forEach((t, k) =>
    txt(gSeg, 480 + i * 130, base + 80 + k * 19, t, { fill: C.ink, fontWeight: 700 }, { 'text-anchor': 'middle' })));
  s('line', { x1: 480, x2: 504, y1: base + 123, y2: base + 123, stroke: fade, 'stroke-width': 2, 'stroke-dasharray': '5 5' }, gSeg);
  txt(gSeg, 512, base + 128, `junior: ${L.n[0]} ads, too few to read dips`);

  // 4. same work, next verb
  const gNext = layer(), dex = D.quotes.dex.split(' '), qLines = [''];
  dex.forEach(w => { const cur = qLines[qLines.length - 1]; if ((cur + ' ' + w).length > 34 && cur) qLines.push(w); else qLines[qLines.length - 1] = cur ? cur + ' ' + w : w; });
  const arrow = s('path', { d: 'M 586 128 Q 700 150 812 112', fill: 'none', stroke: C.coral, 'stroke-width': 3, 'stroke-linecap': 'round' }, gNext);
  s('path', { d: 'M 798 106 L 814 111 L 803 124', fill: 'none', stroke: C.coral, 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, gNext);
  txt(gNext, 582, 106, 'same work, next verb', { fill: C.coral, fontWeight: 700, fontSize: '19px' });
  const qx = 712, qy = 288, qh = 24 + qLines.length * 19;
  s('line', { x1: XV(2), y1: Y(core['Define standards / best practices / conventions'][2]) + 4, x2: XV(2) + 8, y2: qy, stroke: C.ink2, 'stroke-width': 1.2 }, gNext);
  s('circle', { cx: XV(2), cy: Y(core['Define standards / best practices / conventions'][2]), r: 4.5, fill: C.ink2 }, gNext);
  s('rect', { x: qx, y: qy, width: 276, height: qh, rx: 12, fill: C.paper, stroke: C.line }, gNext);
  qLines.forEach((l, i) => txt(gNext, qx + 14, qy + 23 + i * 19, (i ? '' : '“') + l + (i === qLines.length - 1 ? '”' : ''), { fill: C.ink, fontStyle: 'italic' }));

  // 5. cautious: whose ladder this is
  const gCaut = layer();
  s('rect', { x: 40, y: 472, width: 412, height: 34, rx: 17, fill: 'none', stroke: C.ink2, 'stroke-width': 1.4, 'stroke-dasharray': '5 4' }, gCaut);
  txt(gCaut, 56, 494, 'ads for outside hires, not your company’s ladder', { fill: C.ink2, fontWeight: 600 });

  // 6. stretch: same tools, different verb, joined at the top level
  const gStretch = layer();
  [XC(3), XV(3)].forEach(x => s('rect', { x: x - 16, y: y0 - 4, width: 32, height: ph + 8, rx: 10, fill: C.coral, opacity: .1 }, gStretch));
  s('path', { d: `M ${XC(3)} ${y0 - 6} V ${y0 - 16} H ${XV(3)} V ${y0 - 6}`, fill: 'none', stroke: C.coral, 'stroke-width': 2 }, gStretch);
  s('rect', { x: 372, y: 28, width: 440, height: 30, fill: C.bg }, gStretch);
  txt(gStretch, 592, 49, 'same tools, different verb: is seniority trust and scope?', { fill: C.ink, fontWeight: 700, fontSize: '17px' }, { 'text-anchor': 'middle' });
  svg.insertBefore(gStretch, svg.firstChild);                                  // the column bands sit behind the lines
  const stretchText = [...gStretch.children].slice(-2); stretchText.forEach(e => svg.appendChild(e)); stretchText.forEach(e => { e.style.opacity = 0; e.style.transition = 'opacity .6s'; });

  return [
    async () => { gCore.style.opacity = 1;
      await Promise.all(coreLines.map((p, i) => drawIn(p, 1300, i * 200)));
      coreLabs.forEach(l => l.style.opacity = 1); if (!(await wait(400))) return; gYears.style.opacity = 1; },
    async () => { gVerb.style.opacity = 1; gStrat.style.opacity = 1;
      await drawIn(stratLine, 1600); stratDots.forEach(d => d.style.opacity = 1); },
    async () => { gSix.style.opacity = 1; if (!(await wait(700))) return; gSeg.style.opacity = 1; },
    async () => { gNext.style.opacity = 1; await drawIn(arrow, 800); },
    optional(async () => { gCaut.style.opacity = 1; }),
    optional(async () => { gStretch.style.opacity = 1; stretchText.forEach(e => e.style.opacity = 1); })
  ];
}
