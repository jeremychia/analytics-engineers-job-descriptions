/* The AI waffle: 1,211 dots, one per ad. Each build recolours the dots and swaps the panel on the right. */
function buildAI(stage) {
  const W = 1000, H = 520, A = D.ai, T = D.stats.ai, rows = A.rows, N = rows.length;
  const COLS = 42, cw = 13.4, x0 = 14, y0 = 62, R = 5.1, PX = 618, PW = 1000 - PX;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const pos = k => [x0 + (k % COLS) * cw + cw / 2, y0 + Math.floor(k / COLS) * cw + cw / 2];
  const count = f => rows.filter(f).length;
  const isAI = q => q[0] === 1, isConc = q => q[1] === 2, isVague = q => q[1] === 1;
  const nAI = count(isAI), nC = count(isConc), nV = count(isVague), nReq = count(q => q[3]), nNoDuty = count(q => q[2]);
  const nUse = count(q => q[6]), nGuard = count(q => q[7]), nPrep = count(q => q[5]);
  const fmt = n => n.toLocaleString('en-US');

  /* two layouts: scrambled (step 1), then sorted concrete, vague, none */
  const slotA = Array(N), slotB = Array(N), kind = q => isConc(q) ? 0 : isVague(q) ? 1 : 2;
  shuffle([...Array(N).keys()], rng(5)).forEach((ad, k) => slotA[ad] = k);
  rows.map((q, i) => ({ i, g: kind(q) })).sort((a, b) => a.g - b.g || a.i - b.i).forEach((o, k) => slotB[o.i] = k);

  const G = s('g', {}, svg);
  const dots = rows.map((q, i) => { const [x, y] = pos(slotA[i]);
    const c = s('circle', { cx: 0, cy: 0, r: R }, G);
    Object.assign(c.style, { fill: C.grey, transform: `translate(${x}px,${y}px) scale(0)` }); return c; });
  /* one look per build: fill and opacity for each ad */
  const LOOK = {
    asks: q => [isAI(q) ? C.coral : C.grey, 1],
    kind: q => [[C.plum, C.coral, C.grey][kind(q)], 1],
    share: (base, hit) => q => hit(q) ? [C.coral, 1] : base(q) ? [C.plum, 1] : [C.grey, .5],
  };
  const paint = (slots, look, o = {}) => { const { move = 0, stagger = 0 } = o;
    rows.forEach((q, i) => { const [x, y] = pos(slots[i]), [fill, op] = look(q), c = dots[i], d = stagger ? Math.round((slots[i] / N) * stagger) : 0;
      c.style.transition = `transform ${move || .6}s cubic-bezier(.3,.8,.2,1) ${move ? (slots[i] % 70) * 9 : 0}ms, fill .45s ${d}ms, opacity .45s ${d}ms`;
      Object.assign(c.style, { transform: `translate(${x}px,${y}px) scale(1)`, fill, opacity: op }); }); };

  /* small SVG text helpers, used only here */
  const txt = (p, x, y, str, st = {}, attrs = {}) => s('text', { x, y, text: str, ...attrs, style: { fontSize: '16px', fill: C.ink, ...st } }, p);
  const wrap = (p, x, y, str, max, lh, st) => { const lines = [];
    str.split(' ').forEach(w => { const l = lines.length - 1; if (l >= 0 && (lines[l] + ' ' + w).length <= max) lines[l] += ' ' + w; else lines.push(w); });
    lines.forEach((l, k) => txt(p, x, y + k * lh, l, st)); return y + (lines.length - 1) * lh; };
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const kicker = (p, y, word) => txt(p, PX, y, word, { font: "700 15px 'JetBrains Mono',monospace", letterSpacing: '.08em', textTransform: 'uppercase', fill: C.ink2 });
  const dot = (p, x, y, fill) => s('circle', { cx: x, cy: y - 5, r: 6, fill }, p);

  /* the key above the waffle, one per look */
  const key = items => { const g = layer(); let x = x0;
    items.forEach(([fill, str]) => { dot(g, x + 6, 32, fill); const t = txt(g, x + 18, 32, str, { fontSize: '16px', fill: C.ink2 }); x += 18 + str.length * 8.1 + 22; }); return g; };
  const keys = {
    asks: key([[C.coral, `ask for AI in the role`], [C.grey, 'no AI ask']]),
    kind: key([[C.plum, `names a tool or a task ${nC}`], [C.coral, `stays vague ${nV}`], [C.grey, 'no AI ask']]),
    req: key([[C.plum, `require AI ${nReq}`], [C.coral, `…and list no AI duty ${nNoDuty}`]]),
    use: key([[C.plum, `ask to use AI tools ${nUse}`], [C.coral, `…and mention checking the output ${nGuard}`]]),
    prep: key([[C.plum, `ask for AI ${nAI}`], [C.coral, `…to get the data ready for AI ${nPrep}`]]),
  };

  /* right-hand panels, one per build */
  const P = {};
  P.find = layer();
  const big = txt(P.find, PX, 200, '0%', { fontSize: '120px', fontWeight: 700, fill: C.coral, letterSpacing: '-.05em' });
  txt(P.find, PX, 248, 'ask for AI in the role', { fontSize: '28px', fontWeight: 700 });
  txt(P.find, PX, 282, `${fmt(nAI)} of ${fmt(N)} ads`, { fontSize: '18px', fill: C.ink2 });

  P.kind = layer();
  kicker(P.kind, 40, 'practical');
  const card = (y, h, col, label, quote, who) => {
    s('rect', { x: PX, y, width: PW, height: h, rx: 12, fill: C.paper, stroke: C.line }, P.kind);
    s('rect', { x: PX, y: y + 10, width: 5, height: h - 20, rx: 2.5, fill: col }, P.kind);
    txt(P.kind, PX + 20, y + 28, label, { font: "700 15px 'JetBrains Mono',monospace", letterSpacing: '.06em', fill: col });
    const end = wrap(P.kind, PX + 20, y + 54, `“${quote}”`, 40, 22, { fontSize: '17px' });
    txt(P.kind, PX + 20, end + 24, who, { fontSize: '15px', fill: C.ink2 }); };
  card(58, 136, C.coral, `VAGUE · ${pct(nV, nAI)}%`, D.quotes.vague, 'Aritzia');
  card(208, 160, C.plum, `CONCRETE · ${pct(nC, nAI)}%`, D.quotes.concrete, 'LC Waikiki');
  txt(P.kind, PX, 400, 'Name the tool and the task.', { fontSize: '26px', fontWeight: 700 });
  txt(P.kind, PX, 430, 'Write your CV like the second one.', { fontSize: '18px', fill: C.ink2 });

  const stat = (k, word, head, line1, line2) => { const g = P[k] = layer();
    kicker(g, 110, word);
    txt(g, PX, 200, head, { fontSize: '96px', fontWeight: 700, fill: C.coral, letterSpacing: '-.04em' });
    const end = wrap(g, PX, 246, line1, 25, 32, { fontSize: '26px', fontWeight: 700 });
    txt(g, PX, end + 34, line2, { fontSize: '18px', fill: C.ink2 }); };
  stat('req', 'cautious', fmt(nNoDuty), 'require AI, then give it no AI duty', `of the ${nReq} ads that require AI (${pct(nNoDuty, nReq)}%)`);
  stat('use', 'cautious', '1 in 3', 'AI tool asks mention checking the output', `${A.guard_same.k} of ${A.guard_same.n} tool asks (${A.guard_same.pct}%)`);
  stat('prep', 'hopeful', '1 in 4', 'AI asks: get the data ready for AI', `${A.enabler.k} of ${A.enabler.n} AI asks (${pct(A.enabler.k, A.enabler.n)}%)`);

  /* three tests */
  P.tests = layer();
  kicker(P.tests, 40, 'who asks more?');
  const bx = PX + 190, bw = 150;
  const pair = (y, title, verdict, [la, a], [lb, b]) => {
    txt(P.tests, PX, y, title, { fontSize: '20px', fontWeight: 700 }); tag(P.tests, 1000, y - 4, verdict, { anchor: 'end', size: 14 });
    [[la, a, C.plum, 30], [lb, b, C.mute, 56]].forEach(([lab, [k, n], fill, dy]) => {
      txt(P.tests, PX, y + dy, lab, { fontSize: '16px', fill: C.ink2 });
      s('rect', { x: bx, y: y + dy - 15, width: bw * k / n, height: 18, rx: 3, fill }, P.tests);
      txt(P.tests, bx + bw * k / n + 8, y + dy, pct(k, n) + '%', { fontSize: '16px', fontWeight: 700 }); }); };
  pair(84, 'by stack', 'conclusive', ['dbt only', T.dbt_vs_pbi.a], ['Power BI / Fabric only', T.dbt_vs_pbi.b]);
  pair(184, 'by level', 'inconclusive', ['senior', T.senior_vs_junior.a], [`junior (${T.senior_vs_junior.b[1]} ads)`, T.senior_vs_junior.b]);
  const my = 284; txt(P.tests, PX, my, 'by month, English ads', { fontSize: '20px', fontWeight: 700 }); tag(P.tests, 1000, my - 4, 'inconclusive', { anchor: 'end', size: 14 });
  const lo = .40, hi = .70, top = my + 26, ht = 120, Y = v => top + ht * (hi - v) / (hi - lo);
  [.4, .5, .6, .7].forEach(v => { s('line', { x1: PX + 34, x2: PX + 300, y1: Y(v), y2: Y(v), stroke: C.line, 'stroke-width': 1 }, P.tests);
    txt(P.tests, PX + 26, Y(v) + 5, Math.round(v * 100) + '%', { font: "13px 'JetBrains Mono',monospace", fill: C.mute }, { 'text-anchor': 'end' }); });
  Object.entries(A.months_detail).forEach(([m, d], k) => { const x = PX + 80 + k * 90;
    s('line', { x1: x, x2: x, y1: Y(d.ci[0]), y2: Y(d.ci[1]), stroke: C.plum, 'stroke-width': 2.5 }, P.tests);
    s('circle', { cx: x, cy: Y(d.k / d.n), r: 6.5, fill: C.plum }, P.tests);
    txt(P.tests, x + 12, Y(d.k / d.n) + 5, pct(d.k, d.n) + '%', { fontSize: '16px', fontWeight: 700 });
    txt(P.tests, x, top + ht + 22, m, { fontSize: '16px', fill: C.ink2 }, { 'text-anchor': 'middle' }); });
  txt(P.tests, PX + 316, Y(.55) + 6, 'no clear', { fontSize: '17px', fill: C.ink2 });
  txt(P.tests, PX + 316, Y(.55) + 26, 'trend', { fontSize: '17px', fill: C.ink2 });

  /* the closing question: the survey beside the ads */
  P.ask = layer();
  kicker(P.ask, 40, 'open question');
  const sx = v => PX + PW * v, sy = 92, ay = 212, adsShare = nAI / N;
  txt(P.ask, PX, sy - 12, 'dbt Labs survey: prioritise AI-assisted coding', { fontSize: '16px', fill: C.ink2 });
  s('rect', { x: PX, y: sy, width: sx(.72) - PX, height: 22, rx: 3, fill: 'none', stroke: C.ink2, 'stroke-width': 1.6, 'stroke-dasharray': '5 4' }, P.ask);
  txt(P.ask, sx(.72) + 8, sy + 18, '72%', { fontSize: '20px', fontWeight: 700 });
  txt(P.ask, PX, sy + 44, '2026 · n = 363 · vendor survey', { fontSize: '15px', fill: C.mute });
  s('line', { x1: PX, x2: 1000, y1: 164, y2: 164, stroke: C.line, 'stroke-width': 1.2, 'stroke-dasharray': '3 4' }, P.ask);
  txt(P.ask, PX + PW / 2, 170, 'different people, different question', { fontSize: '16px', fontStyle: 'italic', fill: C.ink2, paintOrder: 'stroke', stroke: C.bg, strokeWidth: '8px' }, { 'text-anchor': 'middle' });
  txt(P.ask, PX, ay - 12, 'job ads: ask for AI in the role', { fontSize: '16px', fill: C.ink2 });
  s('rect', { x: PX, y: ay, width: sx(nC / N) - PX, height: 22, fill: C.plum }, P.ask);
  s('rect', { x: sx(nC / N), y: ay, width: sx(adsShare) - sx(nC / N), height: 22, fill: C.coral }, P.ask);
  txt(P.ask, sx(adsShare) + 8, ay + 18, `${pct(nAI, N)}%`, { fontSize: '20px', fontWeight: 700 });
  txt(P.ask, PX, ay + 44, `${pct(nV, nAI)}% of those stay vague`, { fontSize: '15px', fill: C.coral, fontWeight: 700 });
  txt(P.ask, PX, 330, 'Are ads a lagging indicator?', { fontSize: '26px', fontWeight: 700 });
  txt(P.ask, PX, 370, 'What else you do every day', { fontSize: '21px', fill: C.ink2 });
  txt(P.ask, PX, 398, 'isn’t in the ad yet?', { fontSize: '21px', fill: C.ink2 });
  tag(P.ask, PX + 202, 394, 'untested', { size: 14 });

  const show = (panel, keyName) => { Object.values(P).forEach(g => g.style.opacity = g === P[panel] ? 1 : 0);
    Object.entries(keys).forEach(([k, g]) => g.style.opacity = k === keyName ? 1 : 0); };

  return [
    async () => { show(null, null); big.textContent = '0%';
      dots.forEach((c, i) => { const [x, y] = pos(slotA[i]); c.style.transition = `transform .55s cubic-bezier(.2,.9,.3,1.3) ${(i % 90) * 7 + Math.floor(i / 90) * 4}ms`;
        Object.assign(c.style, { transform: `translate(${x}px,${y}px) scale(1)`, fill: C.grey, opacity: 1 }); });
      if (!(await wait(1300))) return;
      paint(slotA, LOOK.asks, { stagger: 1200 }); show('find', 'asks');
      await countUp(big, pct(nAI, N), { dur: 1200, fmt: v => Math.round(v) + '%' }); },
    async () => { big.textContent = pct(nAI, N) + '%'; paint(slotB, LOOK.kind, { move: 1.3 }); show('kind', 'kind'); },
    async () => { paint(slotB, LOOK.share(q => q[3], q => q[2])); show('req', 'req'); },
    optional(async () => { paint(slotB, LOOK.share(q => q[6], q => q[7])); show('use', 'use'); }),
    optional(async () => { paint(slotB, LOOK.share(isAI, q => q[5])); show('prep', 'prep'); }),
    async () => { paint(slotB, LOOK.asks); show('tests', 'asks'); },
    async () => { paint(slotB, LOOK.kind); show('ask', 'kind'); },
  ];
}
