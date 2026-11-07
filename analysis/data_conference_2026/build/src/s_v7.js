/* Slides only the v7 deck uses: the ads as a record, how far the words lag the work, what the ads leave out, the junior door, the close, and the tested findings to ask about. */
const v7 = {
  show: (el, on) => el.style.opacity = on ? 1 : 0,
  fade: (el, o = {}) => (Object.assign(el.style, { opacity: 0, transition: 'opacity .5s' }, o), el),
  line: (plain, em, size = 'clamp(22px,3vw,46px)') => v7.fade(h('div', { class: 'finalline', style: { fontSize: size } }, plain, h('em', {}, em))),
  big: (num, text, col = C.coral) => v7.fade(h('div', { style: { display: 'flex', alignItems: 'baseline', gap: '1.2vw' } },
    h('div', { style: { fontSize: 'clamp(40px,5vw,80px)', fontWeight: 700, color: col, lineHeight: 1, minWidth: 'clamp(70px,7vw,120px)', textAlign: 'right' } }, num),
    h('div', { style: { fontSize: 'clamp(17px,2vw,30px)', fontWeight: 700 } }, text))),
  steps: (els, states, pause = 500) => states.map(on => async () => { els.forEach((el, k) => v7.show(el, on[k])); await wait(Anim.fast ? 0 : pause); })
};

/* the record: one dot per ad, then the dots fold onto a timeline that starts with the newspaper-ads study, then an empty place for the next snapshot */
function buildRecord(stage) {
  const W = 1000, N = D.corpus_n, lv = D.ai.rows.map(r => r[4]), svg = s('svg', { viewBox: `0 0 ${W} 430`, class: 'chart' }, stage);
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '17px', fill: C.ink2 }, st) }, a), p);
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .6s' } }, svg);
  // the timeline: 1940-2000 on the left, a break, then 2018-2030 stretched so the snapshots have room
  const AX = 330, X = y => y <= 2000 ? 60 + (y - 1940) / 60 * 330 : 470 + (y - 2018) / 12 * 490;
  const gT = layer(), gNext = layer();
  s('line', { x1: X(1940), x2: X(2000), y1: AX, y2: AX, stroke: C.ink2, 'stroke-width': 2 }, gT);
  s('line', { x1: X(2018), x2: X(2030), y1: AX, y2: AX, stroke: C.ink2, 'stroke-width': 2 }, gT);
  txt(gT, (X(2000) + X(2018)) / 2, AX + 6, '//', { fontSize: '20px', fontWeight: 700 }, { 'text-anchor': 'middle' });
  s('rect', { x: X(1940), y: AX - 70, width: X(2000) - X(1940), height: 60, rx: 8, fill: C.plum, opacity: .18 }, gT);
  txt(gT, X(1940) + 12, AX - 44, 'Millions of newspaper job ads', { fontSize: '19px', fontWeight: 700, fill: C.plum });
  txt(gT, X(1940) + 12, AX - 20, 'same titles, different work', { fontSize: '16px', fill: C.plum });
  [[1940, 'start'], [2000, 'end']].forEach(([y, a]) => txt(gT, X(y), AX + 26, y, { fontWeight: 700 }, { 'text-anchor': a }));
  txt(gT, X(1940), AX + 50, 'Atalay, Phongthiengtham, Sotelo & Tannenbaum, 2020', { fontSize: '14px', fill: C.mute });
  s('line', { x1: X(2019), x2: X(2019), y1: AX - 8, y2: AX + 8, stroke: C.ink2, 'stroke-width': 2 }, gT);
  txt(gT, X(2019), AX + 26, '2019', { fontWeight: 700 }, { 'text-anchor': 'middle' });
  txt(gT, X(2019), AX + 48, '“analytics engineer”', { fontSize: '15px' }, { 'text-anchor': 'middle' });
  txt(gT, X(2019), AX + 66, 'gets its name', { fontSize: '15px' }, { 'text-anchor': 'middle' });
  // the snapshot: every ad a dot, juniors in coral; first a wide grid, then a column standing on 2026
  const big = { cols: 62, gap: 13, r: 4.5, x0: (W - 61 * 13) / 2, y0: 66 }, small = { cols: 34, gap: 2.9, r: 1.2, x0: X(2026) - 16.5 * 2.9, y0: AX - 12 - Math.ceil(N / 34) * 2.9 };
  const at = (L, i) => [L.x0 + (i % L.cols) * L.gap, L.y0 + Math.floor(i / L.cols) * L.gap];
  const order = lv.map((_, i) => i).sort((i, j) => (lv[i] === 0) - (lv[j] === 0));   // juniors last, so they gather in one corner
  const dots = order.map((i, k) => ({ c: s('circle', { r: 0, fill: lv[i] === 0 ? C.coral : C.plum }, svg), k }));
  const place = (L, e = 1, r = L.r) => dots.forEach(d => { const [x, y] = at(L, d.k); d.c.setAttribute('cx', x); d.c.setAttribute('cy', y); d.c.setAttribute('r', r * e); });
  const gBig = layer();
  txt(gBig, W / 2, 40, `${N.toLocaleString('en-US')} job ads, April to November 2026 · one dot each`, { fontSize: '19px', fontWeight: 700 }, { 'text-anchor': 'middle' });
  // the juniors fill the last rows: a coral label below the grid points up at the middle of the last row's coral dots
  const juniors = lv.filter(l => l === 0).length, lastRow = Math.floor((N - 1) / big.cols), firstCoral = Math.max(N - juniors, lastRow * big.cols);
  const [cx0] = at(big, firstCoral), [cx1, rowY] = at(big, N - 1), tx = (cx0 + cx1) / 2, ty = rowY + big.r + 6;
  s('path', { d: `M ${tx + 80} ${ty + 30} Q ${tx + 10} ${ty + 34} ${tx} ${ty}`, fill: 'none', stroke: C.coral, 'stroke-width': 3, 'stroke-linecap': 'round' }, gBig);
  s('path', { d: `M ${tx - 3} ${ty + 13} L ${tx} ${ty} L ${tx + 9} ${ty + 9}`, fill: 'none', stroke: C.coral, 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, gBig);
  txt(gBig, tx + 88, ty + 37, `${juniors} junior ads`, { fill: C.coral, fontWeight: 700, fontSize: '19px' });
  const gSnap = layer();
  txt(gSnap, X(2026), AX + 26, '2026', { fontWeight: 700, fill: C.coral }, { 'text-anchor': 'middle' });
  txt(gSnap, X(2026), AX + 48, 'snapshot one', { fontSize: '15px', fill: C.coral, fontWeight: 700 }, { 'text-anchor': 'middle' });
  txt(gSnap, X(2026), AX + 66, `${N.toLocaleString('en-US')} ads`, { fontSize: '15px' }, { 'text-anchor': 'middle' });
  const nx = X(2029), h0 = Math.ceil(N / 34) * 2.9;
  s('rect', { x: nx - 50, y: AX - 12 - h0, width: 100, height: h0, rx: 6, fill: 'none', stroke: C.ink2, 'stroke-width': 2, 'stroke-dasharray': '6 5' }, gNext);
  txt(gNext, nx, AX + 26, 'next', { fontWeight: 700 }, { 'text-anchor': 'middle' });
  txt(gNext, nx, AX + 48, 'snapshot two', { fontSize: '15px' }, { 'text-anchor': 'middle' });
  const line = v7.line('A job ad is a record of what we expect from each other. ', 'This is snapshot one.');
  stage.append(h('div', { class: 'col', style: { gap: '2vh' } }, svg, line));
  const morph = e => dots.forEach(d => { const [x0, y0] = at(big, d.k), [x1, y1] = at(small, d.k);
    d.c.setAttribute('cx', x0 + (x1 - x0) * e); d.c.setAttribute('cy', y0 + (y1 - y0) * e); d.c.setAttribute('r', big.r + (small.r - big.r) * e); });
  const show = (...on) => [gBig, gT, gSnap, gNext, line].forEach((g, k) => v7.show(g, on[k]));
  let turn = 0;   // a quick second click must not be undone when the fold finishes
  return [
    async () => { turn = 1; show(1, 0, 0, 0, 0); place(big, 0); await tween(1200, e => place(big, e)); },
    async () => { const me = turn = 2; show(0, 0, 0, 0, 0); morph(0); if (!(await tween(1300, morph, { ease: E.inOut })) || turn !== me) return; show(0, 1, 1, 0, 0); await wait(Anim.fast ? 0 : 600); },
    async () => { turn = 3; morph(1); show(0, 1, 1, 1, 1); await wait(Anim.fast ? 0 : 600); }
  ];
}

/* the lag: the years-of-FastAPI story, the new word against the old one, the vague AI ask, then the claim */
function buildLag(stage) {
  const S = D.semantics, rows = D.ai.rows.filter(r => r[0]), vague = rows.filter(r => r[1] === 1).length;
  // how it started and how it's going: his two posts about FastAPI job ads, verbatim, side by side
  const red = text => h('span', { style: { color: C.coral, fontWeight: 700 } }, text);
  const postCard = (head, date, ...lines) => v7.fade(h('div', { style: { display: 'flex', flexDirection: 'column', gap: '1.2vh', flex: '1 1 0', maxWidth: '40vw' } },
    h('div', { style: { fontSize: 'clamp(18px,2vw,32px)', fontWeight: 700 } }, head),
    h('div', { class: 'adcard', style: { flex: 1, boxShadow: '0 6px 30px rgba(42,10,8,.12)' } },
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '1vw', fontSize: 'clamp(14px,1.3vw,21px)', fontWeight: 700 } },
        IMG.tiangolo_avatar ? h('img', { src: IMG.tiangolo_avatar, alt: 'Sebastián Ramírez', style: { width: 'clamp(40px,4vw,64px)', height: 'clamp(40px,4vw,64px)', borderRadius: '50%' } }) : [],
        'Sebastián Ramírez, who created FastAPI'),
      ...lines.map(line => h('div', { style: { fontSize: 'clamp(15px,1.6vw,26px)', lineHeight: 1.35, marginTop: '1.2vh' } }, ...line))),
    h('div', { class: 'adlab' }, date)));
  const started = postCard('How it started', '11 July 2020',
    ['I saw a job post the other day. 👔'], ['It required ', red('4+ years of experience in FastAPI'), '. 🤦'],
    ['I couldn\'t apply as I only have ', red('1.5+ years'), ' of experience since I created that thing. 😅'],
    ['Maybe it\'s time to re-evaluate that "years of experience = skill level". ♻️']);
  const going = postCard('How it\'s going', 'On Bluesky · 6 July 2026',
    [red('I might not have enough experience to apply'), ' to some @fastapi.tiangolo.com jobs, but at least it now has 100k GitHub stars. ✨'], ['Thank you for letting me build this. 🙌']);
  const card = v7.fade(h('div', { style: { display: 'flex', gap: '3vw', alignItems: 'stretch', justifyContent: 'center' } }, started, going));
  const ctx = v7.big(`${S.context_engineering}`, `of ${D.corpus_n.toLocaleString('en-US')} ads say “context engineering”`);
  const sem = v7.big(`${S.ai[0] + S.other[0]}`, 'say “semantic layer” or “semantic model”', C.plum);
  const ai = v7.fade(h('div', { style: { fontSize: 'clamp(16px,1.8vw,28px)', lineHeight: 1.35 } },
    h('b', {}, `${rows.length} ads ask for AI. ${vague} only in words like: `), h('span', { style: { fontStyle: 'italic' } }, `“${D.quotes.vague}”`)));
  const line = v7.line('Ads describe the team we have. ', 'Not the one we are building.');
  stage.append(h('div', { class: 'col', style: { gap: '3vh' } }, card, ctx, sem, ai, line));
  const only = on => { card.style.display = on ? 'flex' : 'none'; [ctx, sem, ai, line].forEach(el => el.style.display = on ? 'none' : el === ctx || el === sem ? 'flex' : ''); };   // the story leaves once the counts are up: one thing to look at per click
  return [
    async () => { only(1); [card, ctx, sem, ai, line].forEach((el, k) => v7.show(el, k === 0)); v7.show(started, 1); v7.show(going, 0); await wait(Anim.fast ? 0 : 500); },
    async () => { only(1); v7.show(card, 1); v7.show(started, 1); v7.show(going, 1); await wait(Anim.fast ? 0 : 500); },
    async () => { only(0); [ctx, sem, ai, line].forEach((el, k) => v7.show(el, k < 2)); await wait(Anim.fast ? 0 : 500); },
    async () => { only(0); [ctx, sem, ai, line].forEach((el, k) => v7.show(el, k < 3)); await wait(Anim.fast ? 0 : 500); },
    async () => { only(0); [ctx, sem, ai, line].forEach(el => v7.show(el, 1)); await wait(Anim.fast ? 0 : 600); }
  ];
}

/* what the ads leave out, then pay where the law asks for it against where it doesn't */
function buildDisclose(stage) {
  const box = h('div', {}), P = D.benefits.pay, EU = ['UK & Ireland', 'France', 'DACH', 'Benelux', 'Southern Europe', 'CEE/Baltics', 'Nordics'];
  const f = buildMissing(box, { line: '' });
  const eu = EU.reduce((a, g) => [a[0] + P[g].k, a[1] + P[g].n], [0, 0]), pct = ([k, n]) => Math.round(100 * k / n);
  const pay = v7.fade(h('div', { style: { display: 'flex', gap: '4vw', alignItems: 'baseline', justifyContent: 'center' } },
    h('div', { style: { fontSize: 'clamp(17px,2vw,30px)', fontWeight: 700 } }, 'Pay in the ad: ', h('span', { style: { color: C.coral } }, `US ${Math.round(P.US.pct)}%`), ', where several states require it. ',
      h('span', { style: { color: C.ink2 } }, `Europe ${pct(eu)}%.`))));
  stage.append(h('div', { class: 'col', style: { gap: '1vh' } }, box, pay));
  return [f[0], async () => { v7.show(pay, 0); await f[1](); }, async () => { v7.show(pay, 1); await wait(Anim.fast ? 0 : 500); }];
}

/* the junior door: the level pyramid, then the senior ask to mentor, then the question it leaves */
function buildDoors(stage) {
  const box = h('div', {}), f = buildPipeline(box), [mk, mn] = D.mentoring.senior_asks_mentor;
  const ask = v7.fade(h('div', { style: { fontSize: 'clamp(17px,2vw,30px)', fontWeight: 700, textAlign: 'center' } }, `${Math.round(3 * mk / mn) === 1 ? 'A third' : `${Math.round(3 * mk / mn)} in 3`} of senior ads ask you to mentor.`));
  const line = v7.line('', 'Mentor whom?');
  stage.append(h('div', { class: 'col', style: { gap: '1.5vh' } }, box, ask, line));
  return [async () => { v7.show(ask, 0); v7.show(line, 0); await f[0](); }, ...v7.steps([ask, line], [[1, 0], [1, 1]])];
}

/* the close: the record goes on, then what to write, then who to make room for */
function buildClose(stage) {
  const p = (text, col = C.ink) => v7.fade(h('div', { style: { fontSize: 'clamp(20px,2.6vw,40px)', fontWeight: 700, color: col } }, text));
  const a = p('This is snapshot one. I will keep reading.', C.ink2), b = p('Write down what you expect. Write down who will teach.');
  const line = v7.line('Make room for juniors. ', 'Be intentional about the ad.');
  stage.append(h('div', { class: 'col', style: { gap: '5vh', justifyContent: 'center' } }, a, b, line));
  return v7.steps([a, b, line], [[1, 0, 0], [1, 1, 0], [1, 1, 1]], 600);
}

/* for questions: the findings that held up when tested, one card each */
function buildAskMe(stage) {
  const S = D.semantics.senior, L = D.stats.levels.mid, DL = D.junior.degree_by_level, FR = D.stats2.juniors.france_bac_checked, B = D.stats2.benefits_summary, P = D.benefits.pay;
  const pct = ([k, n]) => Math.round(100 * k / n), men = D.ladder.core['Mentoring / coaching / code review'];
  const others = ['mid', 'senior', 'lead+'].reduce((a, lv) => [a[0] + DL[lv][0], a[1] + DL[lv][1]], [0, 0]);
  const cards = [
    [`${pct(S.ai)}% vs ${pct(S.other)}%`, 'Senior ads that ask for AI name a semantic layer more often than other senior ads.'],
    [`${pct(L.dbt)}% vs ${pct(L.pbi)}%`, 'At mid level, dbt ads ask you to define, own or lead more often than Power BI ads.'],
    [`${Math.round(men[2])}% vs ${Math.round(men[1])}%`, 'Senior ads ask you to mentor, coach or review code more often than mid-level ads.'],
    [`${pct(DL.junior)}% vs ${pct(others)}%`, 'Junior ads mention a degree more often than ads at any other level.'],
    [`${FR.fr[0]} of ${FR.fr[1]}`, `French junior ads ask for a master’s degree. Elsewhere, ${FR.rest[0]} of ${FR.rest[1]} junior ads do.`],
    [`${B.differ_q01} of ${B.tags}`, `Benefit types differ by region. ${Math.round(P.US.pct)}% of US ads give the pay.`]
  ].map(([n, t]) => h('div', { style: { background: C.paper, border: `1px solid ${C.line}`, borderRadius: '14px', padding: '1.6vh 1.2vw' } },
    h('div', { style: { fontSize: 'clamp(22px,2.6vw,40px)', fontWeight: 700, color: C.coral, lineHeight: 1.1 } }, n),
    h('div', { style: { fontSize: 'clamp(13px,1.3vw,20px)', color: C.ink2, marginTop: '.8vh' } }, t)));
  stage.append(h('div', { class: 'col' }, h('div', { style: { fontSize: 'clamp(20px,2.4vw,36px)', fontWeight: 700 } }, 'These findings held up ', h('span', { style: { color: C.coral } }, 'when tested.')),
    h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.4vw' } }, ...cards)));
  return [async () => { await wait(Anim.fast ? 0 : 300); }];
}
