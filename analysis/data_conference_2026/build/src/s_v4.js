/* Slides only the senior-room deck uses: the junior pipeline, what moves you up, who teaches the juniors, what AI changes, and the opening ad with the one line it is missing. */
/* the levels stacked like a population pyramid, junior at the base: a narrow base under a wide middle */
function buildPipeline(stage) {
  const W = 1000, N = D.seniority_n, jr = N.junior, up = N.senior + N.lead + N.staff + N.manager;
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
  txt(svg, 40, Y0 + 6 * ROW + 46, `${jr} junior ads against ${up} at senior level or above, of ${D.corpus_n.toLocaleString('en-US')}`, { fontSize: '18px', fill: C.ink2 });
  tag(svg, W - 8, Y0 + 6 * ROW + 46, 'descriptive', { anchor: 'end' });
  // grow from the base up, each bar outward from the centre line
  const grow = e => bars.forEach(({ bar, n, half }, k) => { const t = Math.min(1, Math.max(0, e * 1.8 - (bars.length - 1 - k) * .16)), w = half * (1 - (1 - t) ** 3);
    bar.setAttribute('x', CX - w); bar.setAttribute('width', 2 * w); n.style.opacity = t >= 1 ? 1 : 0; });
  return [async () => { grow(0); await tween(1600, grow); }];
}

/* three in four junior ads don't say who will teach the new hire, and half name neither a teacher nor anything to learn with (all 64 read by hand); a third of senior ads ask you to mentor (hand-read sample) as context */
function buildMentorGap(stage) {
  const W = 1000, MG = D.mentoring, [sk, sn] = MG.senior_asks_mentor, [jk, jn] = MG.junior_names_guide, lk = MG.junior_learning[0], nk = MG.junior_neither[0], both = jk + lk - (jn - nk);
  const svg = s('svg', { viewBox: `0 0 ${W} 520`, class: 'chart' }, stage), COLS = 16, P = 34, r = 13, X0 = 40, Y0 = 150;
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '20px', fill: C.ink }, st) }, a), p);
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const gS = layer(), gJ = layer(), gQ = layer(), gL = layer();
  txt(gS, X0, 52, `${Math.round(sk / sn * 3)} in 3 senior ads`, { fontSize: '30px', fontWeight: 700, fill: C.plum });
  txt(gS, X0 + 250, 52, 'ask you to mentor, coach or review code', { fontSize: '20px', fill: C.ink2 });
  txt(gJ, X0, 118, `${jn} junior ads, read by hand`, { fontSize: '18px', fontWeight: 700, fill: C.ink2 });
  // dot order: names a teacher and something to learn with, a teacher only, something to learn with only, neither (the last rows)
  const RX = X0 + COLS * P + 30, at = i => [X0 + (i % COLS) * P + r, Y0 + Math.floor(i / COLS) * P + r];
  const dots = Array.from({ length: jn }, (_, i) => s('circle', { cx: at(i)[0], cy: at(i)[1], r: 0, fill: i < jk ? C.coral : C.grey }, gJ));
  Array.from({ length: jn }, (_, i) => i).filter(i => i < both || (i >= jk && i < jk + lk - both)).forEach(i => s('circle', { cx: at(i)[0], cy: at(i)[1], r: r + 3, fill: 'none', stroke: C.plum, 'stroke-width': 2.5 }, gL));
  txt(gL, X0, Y0 + Math.ceil(jn / COLS) * P + 18, '○ ringed: a learning budget, a training programme or set time to learn', { fontSize: '15px', fill: C.plum, fontWeight: 600 });
  txt(gL, RX, Y0 + 166, `${nk} have neither`, { fontSize: '26px', fontWeight: 700, fill: C.ink });
  txt(gL, RX, Y0 + 190, 'no one named to teach, nothing to learn with', { fontSize: '16px', fill: C.ink2 });
  txt(gJ, RX, Y0 + 30, `${jn - jk}`, { fontSize: '56px', fontWeight: 700, fill: C.ink, letterSpacing: '-.03em' });
  txt(gJ, RX, Y0 + 58, 'don’t say who will teach', { fontSize: '18px', fill: C.ink2 });
  txt(gJ, RX, Y0 + 80, 'the new hire', { fontSize: '18px', fill: C.ink2 });
  txt(gJ, RX, Y0 + 124, `${jk} do`, { fontSize: '26px', fontWeight: 700, fill: C.coral });
  tag(svg, W - 8, 52, 'descriptive', { anchor: 'end' });
  const picks = [['enhance', 'Enhance', 'learn from senior analytics engineers'], ['agile-actors', 'Agile Actors', 'Onboarding Buddy to support and guide you from day one'],
    ['fleury-michon', 'Fleury Michon', 'Encadré(e) par un tuteur expérimenté']]
    .map(([key, co, part]) => { const q = Object.entries(MG.quotes).find(([id]) => id.includes('_' + key + '_')); return q && q[1].includes(part) ? [co, part] : null; }).filter(Boolean);
  s('text', { x: X0, y: 340, class: 'cardlab', text: `How the ${jk} say it` }, gQ);
  picks.forEach(([co, part], k) => { const t = s('text', { x: X0, y: 376 + k * 32, style: { fontSize: '21px', fill: C.ink } }, gQ);
    s('tspan', { text: `“${part}”`, style: { fontWeight: 500 } }, t); s('tspan', { text: `  · ${co}`, style: { fill: C.ink2, fontSize: '17px' } }, t); });
  txt(gL, X0, 494, 'Mentor someone? Say so in the junior ad.', { fontSize: '30px', fontWeight: 700, fill: C.coral });
  const pop = e => dots.forEach((d, i) => d.setAttribute('r', r * Math.min(1, Math.max(0, e * 1.6 - i / dots.length * .6))));
  return [
    async () => { gQ.style.opacity = 0; gL.style.opacity = 0; gS.style.opacity = 1; gJ.style.opacity = 1; pop(0); await tween(1100, pop); },
    async () => { pop(1); gL.style.opacity = 0; gS.style.opacity = 1; gJ.style.opacity = 1; gQ.style.opacity = 1; await wait(Anim.fast ? 0 : 500); },
    async () => { pop(1); gS.style.opacity = 1; gJ.style.opacity = 1; gQ.style.opacity = 1; gL.style.opacity = 1; await wait(Anim.fast ? 0 : 500); }
  ];
}

function buildRewrite(stage) {
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
  const line = h('div', { class: 'finalline', style: { fontSize: 'clamp(24px,3.4vw,52px)', marginTop: '3vh', opacity: 0, transition: 'opacity .6s' } }, 'Someone held the door for each of us, then taught us. ', h('em', {}, 'Do both for the next one.'));
  stage.append(h('div', { class: 'col' }, card, blanks, line));
  return [
    async () => { blanks.style.opacity = 0; line.style.opacity = 0; await wait(Anim.fast ? 0 : 400); },
    async () => { blanks.style.opacity = 1; if (!(await wait(Anim.fast ? 0 : 900))) return; line.style.opacity = 1; }
  ];
}

/* what moves you up: SQL is asked at every level (flat), the business is named in about four in ten ads at every level (flat); the podcast says the business is the path. The ads may lag. */
function buildRung(stage) {
  const W = 1000, H = 330, P = D.progression, svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage), y0 = 54, ph = 214, Y = v => y0 + ph - v / 100 * ph, base = Y(0);
  const lv = ['Junior', 'Mid', 'Senior', 'Lead+'], layer = () => s('g', { style: { opacity: 0, transition: 'opacity .6s' } }, svg);
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '16px', fill: C.ink2 }, st) }, a), p);
  const panel = (g, x0, title, vals, col, note) => {
    const X = i => x0 + 40 + i * 100;
    txt(g, x0, 22, title, { fontSize: '19px', fontWeight: 700, fill: col });
    [0, 50, 100].forEach(v => { s('line', { x1: x0 + 10, x2: x0 + 440, y1: Y(v), y2: Y(v), stroke: C.line, 'stroke-width': v ? .8 : 1.6 }, g); if (v && v < 100) txt(g, x0 + 4, Y(v) + 4, v + '%', { fontSize: '13px', fill: C.mute }, { 'text-anchor': 'end' }); });
    lv.forEach((l, i) => { txt(g, X(i), base + 24, l, { fontWeight: 600 }, { 'text-anchor': 'middle' }); txt(g, X(i), base + 42, `n=${P.n[i]}`, { fontSize: '12px', fill: C.mute }, { 'text-anchor': 'middle' }); });
    const d = (a, b) => vals.slice(a, b + 1).map((v, i) => (i ? 'L' : 'M') + X(a + i) + ',' + Y(v)).join(' ');
    const first = s('path', { d: d(0, 1), fill: 'none', stroke: col, 'stroke-width': 5, 'stroke-dasharray': '2 9', 'stroke-linecap': 'round' }, g);   // dotted: only 43 junior ads
    const rest = s('path', { d: d(1, 3), fill: 'none', stroke: col, 'stroke-width': 5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
    vals.forEach((v, i) => { s('circle', { cx: X(i), cy: Y(v), r: 6, fill: col, stroke: C.bg, 'stroke-width': 2 }, g); txt(g, X(i), Y(v) - 14, v + '%', { fontSize: '19px', fontWeight: 700, fill: col }, { 'text-anchor': 'middle' }); });
    return [first, rest];
  };
  const gSql = layer(), gBiz = layer(), gTag = layer();
  const [sa, sb] = panel(gSql, 60, 'asks for SQL', P.sql, C.plum), [ba, bb] = panel(gBiz, 540, 'names the business', P.business, C.coral);
  tag(gSql, 500, 22, 'descriptive', { anchor: 'end' }); tag(gBiz, 980, 22, 'untested', { anchor: 'end' });
  const drawIn = (p, dur) => { const len = p.getTotalLength(); p.style.strokeDasharray = len; p.style.strokeDashoffset = len; return tween(dur, e => { p.style.strokeDashoffset = len * (1 - e); }, { ease: E.inOut }); };
  const note = h('div', { style: { fontSize: 'clamp(14px,1.5vw,23px)', lineHeight: 1.35, opacity: 0, transition: 'opacity .5s' } },
    h('b', {}, 'Tristan Handy: '), 'there is a career path for people curious how the business works and how to create more value. ', h('span', { style: { color: C.ink2 } }, 'Joe Reis: some people are attached to the identity of “I can write really complex SQL”.'));
  const line = h('div', { class: 'finalline', style: { fontSize: 'clamp(22px,3vw,46px)', opacity: 0, transition: 'opacity .6s' } }, 'How do you move up? ', h('em', {}, 'The ads don’t say. They may lag.'));
  stage.append(h('div', { class: 'col', style: { gap: '2vh' } }, svg, note, line));
  [sa, sb, ba, bb].forEach(p => p.style.opacity = 0);
  const show = (el, on) => el.style.opacity = on ? 1 : 0;
  return [
    async () => { show(note, 0); show(line, 0); show(gBiz, 0); show(gSql, 1); [sa, sb].forEach(p => p.style.opacity = 1); await drawIn(sb, 1100); },
    async () => { show(gSql, 1); show(gBiz, 1); [ba, bb].forEach(p => p.style.opacity = 1); show(note, 0); show(line, 0); await drawIn(bb, 1100); },
    async () => { show(note, 1); show(line, 0); await wait(Anim.fast ? 0 : 500); },
    async () => { show(note, 1); show(line, 1); await wait(Anim.fast ? 0 : 600); }
  ];
}

/* what comes next: an outside signal on young workers, then an ad that says the tool now writes the first draft and the new hire reviews it */
function buildNext(stage) {
  const ST = D.stanford, Q = D.quotes, show = (el, on) => el.style.opacity = on ? 1 : 0;
  const stat = h('div', { style: { display: 'flex', alignItems: 'center', gap: '2vw', transition: 'opacity .5s' } },
    h('div', { style: { fontSize: 'clamp(52px,7.5vw,120px)', fontWeight: 700, color: C.coral, letterSpacing: '-.04em', lineHeight: 1 } }, `${ST.gap_pct}%`),
    h('div', {}, h('div', { style: { fontSize: 'clamp(17px,2vw,30px)', fontWeight: 700, lineHeight: 1.2 } }, `below trend: US jobs held by ${ST.ages}-year-olds in work exposed to AI`),
      h('div', { style: { fontSize: 'clamp(12px,1.1vw,17px)', color: C.ink2, marginTop: '.8vh' } }, `Stanford Digital Economy Lab, revised ${ST.revised} · outside these ads · the authors call it a pattern, not proof`)));
  const at = Q.zego_asks.indexOf('critically');
  const card = h('div', { class: 'adcard', style: { opacity: 0, transition: 'opacity .5s' } }, h('div', { class: 'adlab' }, 'Zego · analytics engineer, 1–3 years · from the ad text'),
    h('div', { class: 'adline' }, h('span', { class: 'tag say' }, 'SAYS'), h('span', { class: 'txt' }, Q.zego_says + '…')),
    h('div', { class: 'adline' }, h('span', { class: 'tag ask' }, 'ASKS'), h('span', { class: 'txt' }, Q.zego_asks.slice(0, at), h('mark', { class: 'm-ask' }, Q.zego_asks.slice(at)))));
  const [gk, gn] = D.mentoring.junior_asks_ai;
  const teach = h('div', { style: { fontSize: 'clamp(15px,1.6vw,24px)', fontWeight: 700, opacity: 0, transition: 'opacity .5s' } }, `${gn} junior ads ask for AI. `, h('span', { style: { color: C.coral } }, `${gk} say who will teach.`));
  const line = h('div', { class: 'finalline', style: { fontSize: 'clamp(22px,3vw,46px)', opacity: 0, transition: 'opacity .6s' } }, 'In ten years, someone reviews what the AI writes. ', h('em', {}, 'That person is a junior today.'));
  stage.append(h('div', { class: 'col', style: { gap: '2.2vh' } }, stat, card, teach, line));
  return [
    async () => { show(stat, 1); show(card, 0); show(teach, 0); show(line, 0); await wait(Anim.fast ? 0 : 400); },
    async () => { show(stat, 1); show(card, 1); show(teach, 1); show(line, 0); await wait(Anim.fast ? 0 : 500); },
    async () => { show(stat, 1); show(card, 1); show(teach, 1); show(line, 1); await wait(Anim.fast ? 0 : 600); }
  ];
}
