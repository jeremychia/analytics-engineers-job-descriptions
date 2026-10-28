/* Pitch: 937 ads on the duty-by-stack map. In the deck, builds go from "no shared tool mix" to three calls to action; the explorer keeps the interactive tool picker. */
const PITCH_REGION_NAMES = { apac: 'Asia-Pacific', baltics: 'Baltics', benelux: 'Benelux', berlin: 'Berlin', dach_other: 'Rest of Germany, Austria, Switzerland',
  france: 'France', global_remote: 'Remote, any country', hamburg: 'Hamburg', iberia: 'Spain and Portugal', ireland: 'Ireland', nordics: 'Nordics',
  nyc_metro: 'New York area', other: 'Rest of world', other_europe: 'Rest of Europe', uk_remote: 'United Kingdom' };
const popcount = v => { let c = 0; while (v) { c += v & 1; v >>= 1; } return c; };

function pitchMap(svg, ads, box) {
  const { x: L, y: T, w: W, h: H } = box;
  const xs = ads.map(a => a[0]).sort((a, b) => a - b), ys = ads.map(a => a[1]).sort((a, b) => a - b);
  const q = (arr, p) => arr[Math.floor(p * (arr.length - 1))], x0 = q(xs, .01), x1 = q(xs, .99), y0 = q(ys, .01), y1 = q(ys, .99);
  const X = v => L + (Math.min(x1, Math.max(x0, v)) - x0) / (x1 - x0) * W, Y = v => T + H - (Math.min(y1, Math.max(y0, v)) - y0) / (y1 - y0) * H;
  const axis = { fill: C.ink2, fontSize: '15px' };
  s('text', { x: L, y: T + H + 30, text: '← BI and reporting', style: axis }, svg);
  s('text', { x: L + W, y: T + H + 30, 'text-anchor': 'end', text: 'modelling, pipelines, warehouse →', style: axis }, svg);
  s('text', { x: L - 16, y: T + H, transform: `rotate(-90 ${L - 16} ${T + H})`, text: 'Power BI · Azure · Fabric', style: axis }, svg);
  s('text', { x: L - 16, y: T, 'text-anchor': 'end', transform: `rotate(-90 ${L - 16} ${T})`, text: 'dbt · Snowflake · BigQuery →', style: axis }, svg);
  const rr = rng(4), g = s('g', {}, svg);
  return ads.map(a => { const c = s('circle', { cx: X(a[0]) + (rr() - .5) * 4, cy: Y(a[1]) + (rr() - .5) * 4, r: 0, fill: C.grey }, g);
    c.addEventListener('mousemove', e => tip.show(e, `<b>${a[5]}</b>`)); c.addEventListener('mouseleave', () => tip.hide()); return c; });
}

function buildPitch(stage, v2 = false) {
  return stage.classList.contains('vstage') ? buildPitchExplorer(stage) : buildPitchDeck(stage, v2);
}

function buildPitchDeck(stage, v2 = false) {
  const P = D.pitch, ads = P.ads, Tp = P.template, Wv = 1000, Hv = 520;
  const svg = s('svg', { viewBox: `0 0 ${Wv} ${Hv}`, class: 'chart' }, stage);
  const dots = pitchMap(svg, ads, { x: 44, y: 34, w: 540, h: 430 });
  dots.forEach(c => { c.style.transition = 'fill .5s, r .5s, opacity .5s'; });
  // per-ad roles, recomputed from the masks so the dots match the counts in D.pitch
  const mix = {}; ads.forEach(a => mix[a[2]] = (mix[a[2]] || 0) + 1);
  const masks = Object.keys(mix).map(Number);
  const T = D.tools.reduce((m, t, k) => Tp.tools.includes(t) ? m | 1 << k : m, 0);
  const role = ads.map(a => ({ unique: mix[a[2]] === 1, apart: mix[a[2]] === 1 && masks.some(o => popcount(o ^ a[2]) === 1),
    exact: a[2] === T, away: popcount(a[2] & ~T) === 1, upper: a[3] >= 2, core: (a[2] & T) !== 0 }));
  const paint = f => dots.forEach((c, i) => { const [fill, r, o] = f(role[i]); c.style.fill = fill; c.style.r = r; c.style.opacity = o; });
  const base = [C.grey, 3, .9], lit = [C.coral, 3.6, 1];

  // map caption: what coral means at this build
  const cap = s('text', { x: 44, y: 22, style: { fill: C.ink2, fontSize: '15px', transition: 'opacity .4s' } }, svg);
  const setCap = t => { cap.textContent = t; cap.style.opacity = t ? 1 : 0; };
  const ring = s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  ads.forEach((a, i) => { if (role[i].exact) s('circle', { cx: dots[i].getAttribute('cx'), cy: dots[i].getAttribute('cy'), r: 11, fill: 'none', stroke: C.ink, 'stroke-width': 2 }, ring); });

  // right panel: evidence page, then the three lanes
  const px = 640, grp = () => s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const txt = (g, x, y, t, st = {}) => s('text', { x, y, text: t, style: { fill: C.ink, fontSize: '17px', ...st } }, g);
  const gN = grp(); txt(gN, px, 62, P.n.toLocaleString('en-US'), { fontSize: '44px', fontWeight: 700, letterSpacing: '-.03em' });
  txt(gN, px + 104, 44, 'ads that name a tool'); txt(gN, px + 104, 64, 'one dot each', { fill: C.ink2, fontSize: '15px' });
  const gU = grp(); txt(gU, px, 132, pct(P.unique, P.n) + '%', { fontSize: '44px', fontWeight: 700, fill: C.coral, letterSpacing: '-.03em' });
  txt(gU, px + 104, 114, 'have a tool mix'); txt(gU, px + 104, 134, 'no other ad names'); tag(gU, px + 104, 162, 'descriptive');
  const gA = grp(); txt(gA, px, 200, `${P.one_apart} of them: one tool from another ad`, { fontWeight: 700 });
  txt(gA, px, 221, 'same core, specific tail', { fill: C.ink2, fontSize: '15px' });
  const gT = grp(); txt(gT, px, 256, 'a template CV: the five most-named tools', { fill: C.ink2, fontSize: '15px' });
  let cx = px; Tp.tools.forEach(t => { const w = t.length * 8.6 + 20;
    s('rect', { x: cx, y: 266, width: w, height: 28, rx: 14, fill: C.paper, stroke: C.plum, 'stroke-width': 1.5 }, gT);
    txt(gT, cx + w / 2, 285, t, { fontSize: '15px', textAnchor: 'middle', fill: C.plum, fontWeight: 500 }); cx += w + 6; });
  txt(gT, px, 324, `fits ${Tp.exact} ads exactly`, { fontWeight: 700, fontSize: '19px' });
  const gO = grp(); txt(gO, px, 366, `${Tp.one_away} are one tool away`, { fontWeight: 700, fontSize: '19px', fill: C.coral });
  const mx = Math.max(...Tp.one_away_missing.map(m => m[1]));
  Tp.one_away_missing.forEach(([t, n], k) => { const y = 388 + k * 26;
    txt(gO, px, y + 14, t, { fontSize: '15px', fill: C.ink2 });
    s('rect', { x: px + 80, y: y + 2, width: n / mx * 170, height: 16, rx: 3, fill: C.coral, opacity: .8 }, gO);
    txt(gO, px + 86 + n / mx * 170, y + 15, '+' + n, { fontSize: '15px', fontWeight: 700 }); });
  txt(gO, px, 492, 'that one tool is your pitch', { fontWeight: 700, fontSize: '21px', fill: C.coral });
  const evidence = [gN, gU, gA, gT, gO];

  const lanes = [
    { who: 'hiring?', head: 'What is missing from your ad?', body: ['honest years · one concrete AI sentence', 'pay · the stack you run'] },
    { who: 'moving up?', head: 'Practise the next verb.', body: ['same tools, bigger verb:', 'support → own → lead'] },
    { who: 'starting out?', head: 'The core is the same everywhere.', body: ['your background is the niche:', 'pitch the mix only you have'] }
  ].map((l, k) => { const g = grp(), y = 40 + k * 152;
    const bar = s('rect', { x: px - 14, y: y - 4, width: 5, height: 118, rx: 2.5, fill: C.coral }, g);
    txt(g, px, y + 14, l.who.toUpperCase(), { fontSize: '15px', fill: C.coral, fontWeight: 700, letterSpacing: '.08em', fontFamily: "'JetBrains Mono',monospace" });
    txt(g, px, y + 46, l.head, { fontSize: '22px', fontWeight: 700 });
    l.body.forEach((b, j) => txt(g, px, y + 78 + j * 24, b, { fontSize: '17px', fill: C.ink2 }));
    return { g, bar }; });

  // absolute state of the panel: which evidence lines show, which lane is lit (lane 3 = all three lit)
  const panel = (upTo, lane) => {
    evidence.forEach((g, k) => g.style.opacity = lane < 0 && k <= upTo ? 1 : 0);
    lanes.forEach((l, k) => { const lit = k === lane || lane === 3; l.g.style.opacity = k > lane ? 0 : lit ? 1 : .55; l.bar.style.opacity = lit ? 1 : 0; });
  };
  const show = (upTo, lane, f, caption, ringOn = false) => { panel(upTo, lane); paint(f); setCap(caption); ring.style.opacity = ringOn ? 1 : 0; };

  const steps = [
    async () => { panel(0, -1); setCap(''); ring.style.opacity = 0;
      dots.forEach((c, i) => { c.style.opacity = 0; c.style.r = 0; c.style.fill = C.mute; later(() => { c.style.r = 3; c.style.opacity = .9; }, (i % 200) * 5); });
      await wait(1300); },
    async () => show(1, -1, r => r.unique ? lit : base, 'coral: a tool mix found in one ad only'),
    optional(async () => show(2, -1, r => r.apart ? lit : r.unique ? ['#f3a79e', 3, .9] : base, 'coral: one tool away from another ad\'s mix')),
    optional(async () => show(3, -1, r => r.exact ? [C.coral, 6, 1] : [C.grey, 2.6, .7], 'ringed: ads that name exactly the template', true)),
    async () => show(4, -1, r => r.exact ? [C.plum, 6, 1] : r.away ? lit : [C.grey, 2.6, .7], 'coral: one tool short of the template · ringed: exact fit', true),
    optional(async () => show(4, 0, r => r.unique ? lit : base, 'coral: a tool mix found in one ad only')),
    optional(async () => show(4, 1, r => r.upper ? lit : base, 'coral: senior and lead ads')),
    async () => show(4, 2, r => r.core ? lit : base, 'coral: ads that name a template tool')
  ];
  if (v2) return [chain(steps[0], steps[1]), async () => show(4, 3, r => r.unique ? lit : base, `coral: ${pct(P.unique, P.n)}% of ads, a tool mix no other ad names`)];
  return steps;
}

/* Explorer only: pick your tools, a level and a region; ads that name only tools you have light up. */
function buildPitchExplorer(stage) {
  const P = D.pitch, ads = P.ads, T = D.tools;
  const wrap = h('div', { class: 'pitch' }); stage.append(wrap);
  const left = h('div', { class: 'pmap' }), right = h('div', { class: 'ppanel' }); wrap.append(left, right);
  const svg = s('svg', { viewBox: '0 0 640 540', class: 'chart' }, left);
  const dots = pitchMap(svg, ads, { x: 40, y: 30, w: 580, h: 440 });
  const mine = new Set();
  const lvl = h('select', { class: 'sel' }, ['any level', 'junior', 'mid', 'senior', 'lead+'].map((l, i) => h('option', { value: i - 1 }, l)));
  const regs = P.regions.slice().sort((a, b) => (PITCH_REGION_NAMES[a] || a).localeCompare(PITCH_REGION_NAMES[b] || b));
  const reg = h('select', { class: 'sel' }, [h('option', { value: '' }, 'any region'), ...regs.map(r => h('option', { value: r }, PITCH_REGION_NAMES[r] || r))]);
  const chips = h('div', { class: 'chips' }), out = h('div', { class: 'pout' });
  const chipEls = T.map((t, k) => { const c = h('button', { class: 'tchip', 'aria-pressed': 'false' }, t); c.onclick = () => toggle(k); chips.append(c); return c; });
  right.append(h('div', { class: 'plab' }, 'Your tools'), chips, h('div', { class: 'psel' }, lvl, reg), out);
  function toggle(k, on) { const want = on ?? !mine.has(k); if (want) mine.add(k); else mine.delete(k); chipEls[k].setAttribute('aria-pressed', String(want)); update(); }
  function update() {
    const L = +lvl.value, R = reg.value; let mask = 0; mine.forEach(k => mask |= 1 << k);
    const sel = ads.map(a => (L < 0 || a[3] === L) && (!R || a[4] === R));
    const pool = sel.filter(Boolean).length; let match = 0, near = 0, exact = 0; const miss = {};
    ads.forEach((a, i) => { const el = dots[i]; if (!sel[i]) { el.style.fill = C.line; el.style.opacity = .35; el.setAttribute('r', 2.2); return; }
      const m = a[2] & ~mask, nm = popcount(m);
      if (a[2] === mask && mask) exact++;
      if (mask && nm === 0) { match++; el.style.fill = C.coral; el.style.opacity = 1; el.setAttribute('r', 5); }
      else if (mask && nm === 1) { near++; const k = Math.log2(m); miss[k] = (miss[k] || 0) + 1; el.style.fill = C.amber; el.style.opacity = .9; el.setAttribute('r', 3.8); }
      else { el.style.fill = C.grey; el.style.opacity = .75; el.setAttribute('r', 2.8); } });
    const gaps = Object.entries(miss).sort((a, b) => b[1] - a[1]).slice(0, 3);
    if (!mask) { out.innerHTML = `<div class="phint">${pool} ads. Pick your tools: ads naming only those turn coral.</div>`; return; }
    out.innerHTML = `<div class="bigstat"><span>${pct(match, pool)}%</span></div><div class="lbl2">${match} of ${pool} ads name only tools you have</div>
      <div class="pgap"><b>One tool away</b> (${near} ads): ${gaps.length ? gaps.map(([k, n]) => `${T[k]} +${n}`).join(' · ') : 'none'}</div>
      <div class="pgap">${exact ? `Exactly your mix: <b>${exact}</b> ad${exact > 1 ? 's' : ''}.` : 'No ad names exactly your mix.'}</div>`;
  }
  lvl.onchange = reg.onchange = update;
  const demo = Tp => Tp.map(t => T.indexOf(t)).filter(k => k >= 0);
  return [
    async () => { mine.clear(); chipEls.forEach(c => c.setAttribute('aria-pressed', 'false')); lvl.value = -1; reg.value = ''; update();
      dots.forEach((c, i) => { c.style.transition = 'fill .4s, opacity .4s, r .4s'; later(() => c.setAttribute('r', 2.8), (i % 200) * 5); }); await wait(1300); },
    async () => { mine.clear(); chipEls.forEach(c => c.setAttribute('aria-pressed', 'false'));
      for (const k of demo(P.template.tools)) { toggle(k, true); if (!(await wait(700))) return; } }
  ];
}
