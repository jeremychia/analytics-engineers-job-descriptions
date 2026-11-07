/* Slides only the senior-room deck uses: the junior pipeline, what moves you up, who teaches the juniors, what AI changes, and the opening ad with the one line it is missing. */
/* the levels stacked like a population pyramid, junior at the base: a narrow base under a wide middle */
function buildPipeline(stage) {
  const W = 1000, N = D.seniority_n;
  const levels = [['manager', C.plum], ['staff', C.plum], ['lead', C.plum], ['senior', C.plum], ['mid', C.mute], ['junior', C.coral]];
  const svg = s('svg', { viewBox: `0 0 ${W} 520`, class: 'chart' }, stage), CX = 560, HALF = 330, Y0 = 20, ROW = 60, BH = 48, peak = Math.max(...levels.map(([lv]) => N[lv]));
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '20px', fill: C.ink }, st) }, a), p);
  const bars = levels.map(([lv, col], k) => {
    const y = Y0 + k * ROW, half = HALF * N[lv] / peak, strong = lv === 'junior';
    txt(svg, 150, y + BH / 2 + 7, lv, { fontSize: '19px', fontWeight: strong ? 700 : 500, fill: strong ? C.coral : C.ink2 }, { 'text-anchor': 'end' });
    const bar = s('rect', { x: CX, y, width: 0, height: BH, rx: 6, fill: col }, svg);
    const n = txt(svg, CX + half + 12, y + BH / 2 + 7, `${N[lv]}`, { fontSize: '19px', fontWeight: strong ? 700 : 500, fill: strong ? C.coral : C.ink2, opacity: 0 });
    return { bar, n, half };
  });
  // grow from the base up, each bar outward from the centre line
  const grow = e => bars.forEach(({ bar, n, half }, k) => { const t = Math.min(1, Math.max(0, e * 1.8 - (bars.length - 1 - k) * .16)), w = half * (1 - (1 - t) ** 3);
    bar.setAttribute('x', CX - w); bar.setAttribute('width', 2 * w); n.style.opacity = t >= 1 ? 1 : 0; });
  return [async () => { grow(0); await tween(1600, grow); }];
}

/* three in four junior ads don't say who will teach the new hire, and half name neither a teacher nor anything to learn with (all junior ads read by hand); the model line last */
function buildMentorGap(stage, o = {}) {   // o.call: false leaves the call to act for the last slide
  const W = 1000, MG = D.mentoring, [jk, jn] = MG.junior_names_guide, lk = MG.junior_learning[0], nk = MG.junior_neither[0], both = jk + lk - (jn - nk);
  const COLS = Math.max(16, Math.ceil(jn / 5)), tight = Math.ceil(jn / COLS) > 4, P = tight ? 30 : 34, r = tight ? 11 : 13, X0 = 40, Y0 = 70;   // at most five rows: a sixth would push the legend into the quote
  const svg = s('svg', { viewBox: `0 0 ${W} 520`, class: 'chart' }, stage);
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '20px', fill: C.ink }, st) }, a), p);
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const gJ = layer(), gL = layer(), gQ = layer();
  txt(gJ, X0, 40, `${jn} junior ads, read by hand`, { fontSize: '18px', fontWeight: 700, fill: C.ink2 });
  // dot order: names a teacher and something to learn with, a teacher only, something to learn with only, neither (the last rows)
  const RX = X0 + COLS * P + 30, at = i => [X0 + (i % COLS) * P + r, Y0 + Math.floor(i / COLS) * P + r];
  const dots = Array.from({ length: jn }, (_, i) => s('circle', { cx: at(i)[0], cy: at(i)[1], r: 0, fill: i < jk ? C.coral : C.grey }, gJ));
  Array.from({ length: jn }, (_, i) => i).filter(i => i < both || (i >= jk && i < jk + lk - both)).forEach(i => s('circle', { cx: at(i)[0], cy: at(i)[1], r: r + 3, fill: 'none', stroke: C.plum, 'stroke-width': 2.5 }, gL));
  txt(gL, X0, Y0 + Math.ceil(jn / COLS) * P + 18, '○ ringed: a learning budget, training or set time to learn', { fontSize: '15px', fill: C.plum, fontWeight: 600 });
  txt(gJ, RX, Y0 + 30, `${jn - jk}`, { fontSize: '56px', fontWeight: 700, fill: C.ink, letterSpacing: '-.03em' });
  txt(gJ, RX, Y0 + 58, 'don’t say who will teach', { fontSize: '18px', fill: C.ink2 });
  txt(gJ, RX, Y0 + 100, `${jk} do`, { fontSize: '26px', fontWeight: 700, fill: C.coral });
  txt(gL, RX, Y0 + 152, `${nk} have neither`, { fontSize: '26px', fontWeight: 700, fill: C.ink });
  txt(gL, RX, Y0 + 176, 'no one to teach, nothing to learn with', { fontSize: '16px', fill: C.ink2 });
  // the model: one ad that says who teaches and when
  const words = D.quotes.asb.split(' '), lines = [''];
  words.forEach(w => { const cur = lines[lines.length - 1]; if ((cur + ' ' + w).length > 72 && cur) lines.push(w); else lines[lines.length - 1] = cur ? cur + ' ' + w : w; });
  s('text', { x: X0, y: 338, class: 'cardlab', text: 'One sentence that does both · ASB Bank' }, gQ);
  lines.forEach((l, k) => txt(gQ, X0, 374 + k * 32, (k ? '' : '“') + l + (k === lines.length - 1 ? '”' : ''), { fontSize: '22px', fontWeight: 500 }));
  if (o.call !== false) txt(gQ, X0, 494, 'Mentor someone? Say so in the junior ad.', { fontSize: '30px', fontWeight: 700, fill: C.coral });
  const pop = e => dots.forEach((d, i) => d.setAttribute('r', r * Math.min(1, Math.max(0, e * 1.6 - i / dots.length * .6))));
  const show = (...on) => [gJ, gL, gQ].forEach((g, k) => g.style.opacity = on[k] ? 1 : 0);
  return [
    async () => { show(1, 0, 0); pop(0); await tween(1100, pop); },
    async () => { pop(1); show(1, 1, 0); await wait(Anim.fast ? 0 : 500); },
    async () => { pop(1); show(1, 1, 1); await wait(Anim.fast ? 0 : 500); }
  ];
}

function buildRewrite(stage, o = {}) {   // o.line: [plain, emphasised] for the last line
  const [jk, jn] = D.mentoring.junior_names_guide;
  const says = D.quotes.enhance_says + '…', asks = D.quotes.enhance_asks;
  const keep = 'Strong internships or graduate projects count.', yrs = '2-5 years', at = asks.indexOf(yrs);
  const card = h('div', { class: 'adcard' }, h('div', { class: 'adlab' }, 'Enhance · Dubai · from the ad text'),
    h('div', { class: 'adline' }, h('span', { class: 'tag say' }, 'SAYS'), h('span', { class: 'txt' }, says)),
    h('div', { class: 'adline' }, h('span', { class: 'tag ask' }, 'ASKS'), h('span', { class: 'txt' },
      asks.slice(0, at), h('s', { style: { textDecorationColor: C.coral, textDecorationThickness: '4px' } }, yrs),
      asks.slice(at + yrs.length, asks.indexOf(keep)), h('mark', { class: 'm-ask' }, keep))));
  const blank = (label, note) => h('div', { style: { border: `2px dashed ${C.coral}`, borderRadius: '14px', padding: '1vh 1vw', flex: '1' } },
    h('div', { style: { fontSize: 'clamp(15px,1.5vw,24px)', fontWeight: 700 } }, label), h('div', { style: { fontSize: 'clamp(12px,1.05vw,17px)', color: C.ink2 } }, note));
  const blanks = h('div', { style: { display: 'flex', gap: '1vw', marginTop: '2.4vh', opacity: 0, transition: 'opacity .5s' } },
    blank('+ who will teach them', `said in ${jk} of ${jn} junior ads`));
  const line = h('div', { class: 'finalline', style: { fontSize: 'clamp(24px,3vw,46px)', marginTop: '3vh', opacity: 0, transition: 'opacity .6s' } }, ...(o.line ? [o.line[0], h('em', {}, o.line[1])] : ['Someone held the door for each of us, then taught us. ', h('em', {}, 'Do both for the next one.')]));
  stage.append(h('div', { class: 'col' }, card, blanks, line));
  return [
    async () => { blanks.style.opacity = 0; line.style.opacity = 0; await wait(Anim.fast ? 0 : 400); },
    async () => { blanks.style.opacity = 1; if (!(await wait(Anim.fast ? 0 : 900))) return; line.style.opacity = 1; }
  ];
}

/* what moves you up: SQL is asked at every level (flat), the business is named in about a third of ads at every level (flat); two outside voices say the business is the path, so it is an ask the ads leave unwritten */
function buildRung(stage, o = {}) {   // o.voices: false leaves out the two outside lines; o.line: [plain, emphasised] for the last line
  const W = 1000, H = 330, P = D.progression, svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage), y0 = 54, ph = 214, Y = v => y0 + ph - v / 100 * ph, base = Y(0);
  const lv = ['Junior', 'Mid', 'Senior', 'Lead+'], layer = () => s('g', { style: { opacity: 0, transition: 'opacity .6s' } }, svg);
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '16px', fill: C.ink2 }, st) }, a), p);
  const panel = (g, x0, title, vals, col, note) => {
    const X = i => x0 + 40 + i * 100;
    txt(g, x0, 22, title, { fontSize: '19px', fontWeight: 700, fill: col });
    [0, 50, 100].forEach(v => { s('line', { x1: x0 + 10, x2: x0 + 440, y1: Y(v), y2: Y(v), stroke: C.line, 'stroke-width': v ? .8 : 1.6 }, g); if (v && v < 100) txt(g, x0 + 4, Y(v) + 4, v + '%', { fontSize: '13px', fill: C.mute }, { 'text-anchor': 'end' }); });
    lv.forEach((l, i) => txt(g, X(i), base + 24, l, { fontWeight: 600 }, { 'text-anchor': 'middle' }));
    const d = (a, b) => vals.slice(a, b + 1).map((v, i) => (i ? 'L' : 'M') + X(a + i) + ',' + Y(v)).join(' ');
    const first = s('path', { d: d(0, 1), fill: 'none', stroke: col, 'stroke-width': 5, 'stroke-dasharray': '2 9', 'stroke-linecap': 'round' }, g);   // dotted: the junior count is small
    const rest = s('path', { d: d(1, 3), fill: 'none', stroke: col, 'stroke-width': 5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
    vals.forEach((v, i) => { s('circle', { cx: X(i), cy: Y(v), r: 6, fill: col, stroke: C.bg, 'stroke-width': 2 }, g); txt(g, X(i), Y(v) - 14, v + '%', { fontSize: '19px', fontWeight: 700, fill: col }, { 'text-anchor': 'middle' }); });
    return [first, rest];
  };
  const gSql = layer(), gBiz = layer(), gTag = layer();
  const [sa, sb] = panel(gSql, 60, 'asks for SQL', P.sql, C.plum), [ba, bb] = panel(gBiz, 540, 'names the business', P.business, C.coral);
  const drawIn = (p, dur) => { const len = p.getTotalLength(); p.style.strokeDasharray = len; p.style.strokeDashoffset = len; return tween(dur, e => { p.style.strokeDashoffset = len * (1 - e); }, { ease: E.inOut }); };
  const note = h('div', { style: { fontSize: 'clamp(15px,1.6vw,25px)', lineHeight: 1.35, opacity: 0, transition: 'opacity .5s' } },
    h('div', {}, h('b', {}, 'Tristan Handy: '), 'the path up is for people curious how the business works.'),
    h('div', {}, h('b', {}, 'Seattle Data Guy: '), 'modelling the business is the hard part ahead.'));
  const line = h('div', { class: 'finalline', style: { fontSize: 'clamp(22px,3vw,46px)', opacity: 0, transition: 'opacity .6s' } }, ...(o.line ? [o.line[0], h('em', {}, o.line[1])] : ['The business is expected. ', h('em', {}, 'Two in three ads don’t write it down.')]));
  stage.append(h('div', { class: 'col', style: { gap: '2vh' } }, svg, ...(o.voices === false ? [] : [note]), line));
  [sa, sb, ba, bb].forEach(p => p.style.opacity = 0);
  const show = (el, on) => el.style.opacity = on ? 1 : 0;
  return [
    async () => { show(note, 0); show(line, 0); show(gBiz, 0); show(gSql, 1); [sa, sb].forEach(p => p.style.opacity = 1); await drawIn(sb, 1100); },
    async () => { show(gSql, 1); show(gBiz, 1); [ba, bb].forEach(p => p.style.opacity = 1); show(note, 0); show(line, 0); await drawIn(bb, 1100); },
    ...(o.voices === false ? [] : [async () => { show(note, 1); show(line, 0); await wait(Anim.fast ? 0 : 500); }]),
    async () => { show(note, 1); show(line, 1); await wait(Anim.fast ? 0 : 600); }
  ];
}

/* what comes next: an outside signal on young workers, then an ad that says the tool now writes the first draft and the new hire reviews it */
function buildNext(stage) {
  const ST = D.stanford, Q = D.quotes, show = (el, on) => el.style.opacity = on ? 1 : 0;
  const stat = h('div', { style: { display: 'flex', alignItems: 'center', gap: '2vw', transition: 'opacity .5s' } },
    h('div', { style: { fontSize: 'clamp(52px,7.5vw,120px)', fontWeight: 700, color: C.coral, letterSpacing: '-.04em', lineHeight: 1 } }, `${ST.gap_pct}%`),
    h('div', {}, h('div', { style: { fontSize: 'clamp(17px,2vw,30px)', fontWeight: 700, lineHeight: 1.2 } }, `below trend: US jobs held by ${ST.ages}-year-olds in work exposed to AI`),
      h('div', { style: { fontSize: 'clamp(12px,1.1vw,17px)', color: C.ink2, marginTop: '.8vh' } }, `Stanford Digital Economy Lab · outside these ads · the authors call it a pattern, not proof`)));
  const at = Q.zego_asks.indexOf('critically');
  const card = h('div', { class: 'adcard', style: { opacity: 0, transition: 'opacity .5s' } }, h('div', { class: 'adlab' }, 'Zego · analytics engineer, 1–3 years · from the ad text'),
    h('div', { class: 'adline' }, h('span', { class: 'tag say' }, 'SAYS'), h('span', { class: 'txt' }, Q.zego_says + '…')),
    h('div', { class: 'adline' }, h('span', { class: 'tag ask' }, 'ASKS'), h('span', { class: 'txt' }, Q.zego_asks.slice(0, at), h('mark', { class: 'm-ask' }, Q.zego_asks.slice(at)))));
  const [gk, gn] = D.mentoring.junior_asks_ai;
  const teach = h('div', { style: { fontSize: 'clamp(17px,2vw,30px)', fontWeight: 700, opacity: 0, transition: 'opacity .5s' } }, `${gn} junior ads ask for AI. `, h('span', { style: { color: C.coral } }, `${gk} say who will teach.`));
  const line = h('div', { class: 'finalline', style: { fontSize: 'clamp(22px,3vw,46px)', opacity: 0, transition: 'opacity .6s' } }, 'In ten years, someone reviews what the AI writes. ', h('em', {}, 'That person is a junior today.'));
  stage.append(h('div', { class: 'col', style: { gap: '3vh' } }, stat, card, teach, line));
  const only = on => stat.style.display = on ? '' : 'none';   // the outside figure leaves once the ad is up: one thing to look at per click
  return [
    async () => { only(1); show(stat, 1); show(card, 0); show(teach, 0); show(line, 0); await wait(Anim.fast ? 0 : 400); },
    async () => { only(0); show(card, 1); show(teach, 1); show(line, 0); await wait(Anim.fast ? 0 : 500); },
    async () => { only(0); show(card, 1); show(teach, 1); show(line, 1); await wait(Anim.fast ? 0 : 600); }
  ];
}

/* what the job is: the duties ads list, with working with people as common as modelling, then the tools, where only SQL, Python and dbt are near universal */
function buildJob(stage) {
  const W = 1000, J = D.job, N = J.n_themes, A = D.corpus_n, pct = (k, n) => Math.round(100 * k / n);
  const label = { 'BI & Reporting/Dashboards': 'reporting and dashboards', 'Stakeholder Collaboration & Requirements': 'working with stakeholders',
    'Data Modeling & Transformation': 'data modelling', 'Data Quality & Testing': 'data quality and testing', 'Governance & Documentation': 'governance and docs',
    'Pipeline Engineering & Orchestration': 'pipelines', 'Business Analysis & Insight Generation': 'business analysis', 'Data Infrastructure & Warehouse Ops': 'running the warehouse' };
  const svg = s('svg', { viewBox: `0 0 ${W} 520`, class: 'chart' }, stage);
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '18px', fill: C.ink }, st) }, a), p);
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const bar = (g, x, y, h, v, col) => { s('rect', { x, y, width: 200, height: h, rx: 4, fill: C.grey, opacity: .45 }, g); return { el: s('rect', { x, y, width: 0, height: h, rx: 4, fill: col }, g), to: 2 * v }; };
  // left: the eight most common duty themes, out of 16
  const gT = layer(), tBars = [], TX = 250, TY = 62, TR = 44;
  txt(gT, 0, 26, `duties in the ad · % of ${N.toLocaleString('en-US')} ads`, { fontSize: '16px', fontWeight: 700, fill: C.ink2 });
  const rows = J.themes.slice(0, 8).map(([t, k], i) => { const y = TY + i * TR, hi = t.startsWith('Stakeholder'), top = i < 4, v = pct(k, N);
    const g = s('g', { style: { transition: 'opacity .5s' } }, gT);
    txt(g, TX - 12, y + 19, label[t], { fontSize: '18px', fontWeight: hi ? 700 : 500, fill: hi ? C.coral : top ? C.ink : C.ink2 }, { 'text-anchor': 'end' });
    tBars.push(bar(g, TX, y + 4, 22, v, hi ? C.coral : top ? C.plum : C.mute));
    txt(g, TX + 2 * v + 10, y + 21, `${v}%`, { fontSize: '17px', fontWeight: 700, fill: hi ? C.coral : C.ink2 }); return { g, hi }; });
  // right: the core tools, then the next four of any kind
  const gK = layer(), kBars = [], KX = 740, head = { core: 'core', next: 'the next four' };
  txt(gK, KX - 132, 26, `tools named · % of ${A.toLocaleString('en-US')} ads`, { fontSize: '16px', fontWeight: 700, fill: C.ink2 });
  let y = 52;
  for (const grp in head) { txt(gK, KX - 132, y + 12, head[grp], { fontSize: '14px', fontWeight: 700, fill: C.mute, letterSpacing: '.06em' }); y += 20;
    (grp === 'core' ? J.tools.core : J.tools_next).forEach(([lab, k]) => { const v = pct(k, A), core = grp === 'core';
      txt(gK, KX - 12, y + 17, lab, { fontSize: '18px', fontWeight: core ? 700 : 500, fill: core ? C.ink : C.ink2 }, { 'text-anchor': 'end' });
      kBars.push(bar(gK, KX, y + 3, 20, v, core ? C.plum : C.mute));
      txt(gK, KX + 2 * v + 10, y + 19, `${v}%`, { fontSize: '16px', fontWeight: 700, fill: C.ink2 }); y += 30; }); y += 16; }
  const caption = words => { const g = layer();
    const t = s('text', { x: 0, y: 470, style: { fontSize: '21px', fontWeight: 500, fill: C.ink } }, g);
    words.forEach(([w, hi]) => s('tspan', { text: w, style: hi ? { fill: C.coral, fontWeight: 700 } : {} }, t)); return g; };
  const cap1 = caption([['working with stakeholders: '], ['in as many ads as data modelling', 1]]);
  const cap2 = caption([['after SQL, Python and dbt, '], [`the next is in ${Math.round(pct(J.max_other, A) / 10)} ads in 10`, 1]]);
  const grow = (bars, e) => bars.forEach(b => b.el.setAttribute('width', b.to * (1 - (1 - e) ** 3)));
  return [
    async () => { gT.style.opacity = 1; gK.style.opacity = 0; cap2.style.opacity = 0; rows.forEach(r => r.g.style.opacity = 1); grow(kBars, 0);
      cap1.style.opacity = 1; await tween(1100, e => grow(tBars, e)); },
    async () => { grow(tBars, 1); gT.style.opacity = 1; rows.forEach(r => r.g.style.opacity = r.hi ? 1 : .35); cap1.style.opacity = 0; cap2.style.opacity = 1;
      gK.style.opacity = 1; await tween(1100, e => grow(kBars, e), { delay: 200 }); }
  ];
}
