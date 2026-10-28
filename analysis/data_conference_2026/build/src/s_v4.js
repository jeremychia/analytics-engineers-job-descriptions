/* Slides only the senior-room deck uses: the junior pipeline, who teaches the juniors, and the opening ad with the one line it is missing. */
function buildPipeline(stage) {
  const W = 1000, N = D.seniority_n, jr = N.junior, up = N.senior + N.lead + N.staff + N.manager, ratio = Math.round(up / jr);
  const svg = s('svg', { viewBox: `0 0 ${W} 520`, class: 'chart' }, stage), X0 = 70, Y = 170, R = 36, GAP = (W - 2 * X0 - 2 * R) / ratio;
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '20px', fill: C.ink }, st) }, a), p);
  const dots = Array.from({ length: ratio + 1 }, (_, i) => s('circle', { cx: X0 + R + i * GAP, cy: Y, r: 0, fill: i ? C.plum : C.coral }, svg));
  txt(svg, X0 + R, Y + R + 34, 'junior', { fontSize: '18px', fontWeight: 700, fill: C.coral }, { 'text-anchor': 'middle' });
  txt(svg, X0 + R + GAP * (ratio + 1) / 2, Y + R + 34, 'senior, lead, staff or manager', { fontSize: '18px', fontWeight: 700, fill: C.plum }, { 'text-anchor': 'middle' });
  txt(svg, X0, Y + R + 80, `${jr} junior ads against ${up} at senior level or above, of ${D.corpus_n.toLocaleString('en-US')}`, { fontSize: '18px', fill: C.ink2 });
  tag(svg, W - 8, Y + R + 80, 'descriptive', { anchor: 'end' });
  const grow = e => dots.forEach((d, i) => d.setAttribute('r', R * Math.min(1, Math.max(0, e * (ratio + 1) - i * .6) / 1.2)));
  return [async () => { grow(0); await tween(1400, grow); }];
}

/* three in four junior ads don't say who will teach the new hire (all 64 read by hand); a third of senior ads ask you to mentor (hand-read sample) as context */
function buildMentorGap(stage) {
  const W = 1000, MG = D.mentoring, [sk, sn] = MG.senior_asks_mentor, [jk, jn] = MG.junior_names_guide;
  const svg = s('svg', { viewBox: `0 0 ${W} 520`, class: 'chart' }, stage), COLS = 16, P = 34, r = 13, X0 = 40, Y0 = 150;
  const txt = (p, x, y, text, st = {}, a = {}) => s('text', Object.assign({ x, y, text, style: Object.assign({ fontSize: '20px', fill: C.ink }, st) }, a), p);
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const gS = layer(), gJ = layer(), gQ = layer();
  txt(gS, X0, 52, `${Math.round(sk / sn * 3)} in 3 senior ads`, { fontSize: '30px', fontWeight: 700, fill: C.plum });
  txt(gS, X0 + 250, 52, 'ask you to mentor, coach or review code', { fontSize: '20px', fill: C.ink2 });
  txt(gJ, X0, 118, `${jn} junior ads, read by hand`, { fontSize: '18px', fontWeight: 700, fill: C.ink2 });
  const dots = Array.from({ length: jn }, (_, i) => s('circle', { cx: X0 + (i % COLS) * P + r, cy: Y0 + Math.floor(i / COLS) * P + r, r: 0, fill: i < jk ? C.coral : C.grey }, gJ));
  const RX = X0 + COLS * P + 30;
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
  txt(gQ, X0, 494, 'Mentor someone? Say so in the junior ad.', { fontSize: '30px', fontWeight: 700, fill: C.coral });
  const pop = e => dots.forEach((d, i) => d.setAttribute('r', r * Math.min(1, Math.max(0, e * 1.6 - i / dots.length * .6))));
  return [
    async () => { gJ.style.opacity = 0; gQ.style.opacity = 0; gS.style.opacity = 1; pop(0); await wait(Anim.fast ? 0 : 400); },
    async () => { gQ.style.opacity = 0; gS.style.opacity = 1; gJ.style.opacity = 1; await tween(1100, pop); },
    async () => { pop(1); gS.style.opacity = 1; gJ.style.opacity = 1; gQ.style.opacity = 1; await wait(Anim.fast ? 0 : 500); }
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
  const line = h('div', { class: 'finalline', style: { fontSize: 'clamp(24px,3.4vw,52px)', marginTop: '3vh', opacity: 0, transition: 'opacity .6s' } }, 'Someone held the door for each of us. ', h('em', {}, 'Hold it for the next one.'));
  stage.append(h('div', { class: 'col' }, card, blanks, line));
  return [
    async () => { blanks.style.opacity = 0; line.style.opacity = 0; await wait(Anim.fast ? 0 : 400); },
    async () => { blanks.style.opacity = 1; if (!(await wait(Anim.fast ? 0 : 900))) return; line.style.opacity = 1; }
  ];
}
