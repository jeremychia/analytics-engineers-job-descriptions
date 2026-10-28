/* Titles: hundreds of titles and no shared definition, yet every ad sits on one spectrum from reporting to engineering by its duties. */
function buildTitles(stage) {
  const W = 1000, H = 540, T = D.titles, r = rng(7);
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const fade = (el, on) => { el.style.opacity = on ? 1 : 0; };
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .6s' } }, svg);
  const LEFT = 70, RIGHT = 930, MID = 182, GAP = 7, CAP = 26, AXIS_Y = 292, TL = 518;
  const ink = (size, fill = C.ink2, weight = 500) => ({ fontSize: size + 'px', fill, fontWeight: weight });

  // per-ad position on the spectrum, and its group
  const X = T.x, placed = X.filter(v => v != null), lo = Math.min(...placed), hi = Math.max(...placed);
  const frac = v => (v - lo) / (hi - lo), toX = v => LEFT + frac(v) * (RIGHT - LEFT);
  const plain = i => T.ads[i][1].trim() === 'Analytics Engineer';
  const groups = Object.keys(T.names).map(c => ({ c, name: T.names[c], m: T.group_x[c] })).sort((a, b) => a.m - b.m);
  const palette = [C.blue, C.plum, C.teal, C.amber, C.ink2], colour = {};
  groups.forEach((g, k) => { g.col = colour[g.c] = palette[k]; });
  const stable = (T.stability[T.k] || {}).ari_mean >= 0.75;

  // dot-histogram columns; a full column spills into the nearest one with room
  const columns = Math.floor((RIGHT - LEFT) / GAP), height = new Array(columns + 1).fill(0), swarm = {};
  X.map((v, i) => [v, i]).filter(([v]) => v != null).sort((a, b) => a[0] - b[0]).forEach(([v, i]) => {
    const ideal = Math.round(frac(v) * columns);
    let col = ideal;
    for (let d = 0; d <= columns; d++) {
      const pick = [ideal + d, ideal - d].find(c => c >= 0 && c <= columns && height[c] < CAP);
      if (pick != null) { col = pick; break; }
    }
    const k = height[col]++;
    swarm[i] = [LEFT + col * GAP, MID + ((k + 1) >> 1) * GAP * (k % 2 ? -1 : 1)];
  });

  // 1. the cloud of titles
  const cloud = s('g', {}, svg);
  const dots = T.ads.map(([c], i) => {
    const el = s('circle', { cx: 0, cy: 0, r: 3, class: 'dot' }, cloud);
    el.style.transition = 'transform 1.4s cubic-bezier(.2,.8,.2,1), fill .6s, opacity .6s';
    return { el, i, c: String(c), x0: 40 + r() * (W - 80), y0: 105 + r() * 370, at: swarm[i] };
  });
  const big = s('text', { x: W / 2, y: 52, 'text-anchor': 'middle', class: 'bignum', text: '0', style: { transition: 'opacity .5s' } }, svg);
  const sub = s('text', { x: W / 2, y: 84, 'text-anchor': 'middle', text: `different job titles on ${T.n} analytics-engineer ads`,
    style: { ...ink(17), transition: 'opacity .5s' } }, svg);
  const off = new Set(T.off_title), seen = new Set();
  const pool = T.ads.map((a, i) => [a[1].trim(), T.ids[i]]).filter(([t, id]) => !off.has(id) && t !== 'Analytics Engineer' && t.length <= 34 && !/[\[\]\d]/.test(t) && !seen.has(t) && seen.add(t));
  const floaters = shuffle(pool, rng(3)).slice(0, 12).map(([t], k) => { const row = k >> 1, right = k & 1;
    const x = right ? 700 + (row % 2 ? -40 : 50) : 270 + (row % 2 ? 80 : -30);
    return s('text', { x, y: 132 + row * 68, 'text-anchor': 'middle', text: t, 'paint-order': 'stroke', stroke: C.bg, 'stroke-width': 6,
      style: { ...ink(16), opacity: 0, transition: 'opacity .5s' } }, svg); });

  // 2. the outside mark: a timeline stub
  const line = layer();
  s('text', { x: 40, y: TL, text: '2019', style: ink(17, C.ink, 700) }, line);
  s('circle', { cx: 96, cy: TL - 6, r: 6, fill: C.ink2 }, line);
  s('text', { x: 110, y: TL, text: 'the role first written up (Locally Optimistic)', style: ink(15) }, line);
  s('line', { x1: 462, x2: 520, y1: TL - 6, y2: TL - 6, stroke: C.ink2, 'stroke-width': 2, 'stroke-dasharray': '2 6' }, line);
  s('circle', { cx: 532, cy: TL - 6, r: 6, fill: C.coral }, line);
  s('text', { x: 546, y: TL, text: 'almost eight years on: no shared definition', style: ink(17, C.coral, 700) }, line);

  // 3. the spectrum, with the duties that pull each way and the groups along it
  const spectrum = layer();
  s('line', { x1: LEFT, x2: RIGHT, y1: AXIS_Y, y2: AXIS_Y, stroke: C.line, 'stroke-width': 2 }, spectrum);
  s('text', { x: LEFT, y: 64, text: '◀ dashboards, analysis', style: ink(17, groups[0].col, 700) }, spectrum);
  s('text', { x: RIGHT, y: 64, 'text-anchor': 'end', text: 'modelling, data quality, pipelines ▶', style: ink(17, groups[groups.length - 1].col, 700) }, spectrum);
  const head = s('text', { x: W / 2, y: 30, 'text-anchor': 'middle', style: ink(18, C.ink, 700) }, svg);
  const headTag = s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg);
  const setHead = (text, word, fill = C.ink) => {
    head.textContent = text; head.style.fill = fill; headTag.innerHTML = ''; fade(headTag, !!word);
    if (!word) return;
    let w = text.length * 9; try { w = head.getComputedTextLength() || w; } catch (e) { }
    tag(headTag, W / 2 + w / 2 + 12, 30, word);
  };

  const named = layer(), cardW = (RIGHT - LEFT) / groups.length, ROW = [AXIS_Y + 56, AXIS_Y + 78, AXIS_Y + 114, AXIS_Y + 148];
  groups.forEach((g, k) => {
    g.cx = LEFT + cardW * (k + .5); const mx = toX(g.m);
    s('path', { d: `M${mx} ${AXIS_Y - 2}l-7 -12h14z`, fill: g.col }, named);
    s('path', { d: `M${mx} ${AXIS_Y + 4}C${mx} ${AXIS_Y + 24} ${g.cx} ${AXIS_Y + 14} ${g.cx} ${AXIS_Y + 34}`, fill: 'none', stroke: g.col, 'stroke-width': 1.5 }, named);
    s('text', { x: g.cx, y: ROW[0], 'text-anchor': 'middle', text: g.name, style: ink(19, g.col, 700) }, named);
    s('text', { x: g.cx, y: ROW[1], 'text-anchor': 'middle', text: `${T.group_n[g.c]} ads`, style: ink(15) }, named);
  });

  // 4-6. what each end asks for
  const rows = {}, other = g => groups.length === 2 ? 'the other end' : 'the rest';
  rows.plain = layer(); rows.sql = layer(); rows.word = layer();
  groups.forEach(g => {
    s('text', { x: g.cx, y: ROW[2], 'text-anchor': 'middle', text: `${T.exact_ae[g.c]} titled “Analytics Engineer”`, style: ink(18, C.coral, 700) }, rows.plain);
    s('text', { x: g.cx, y: ROW[2], 'text-anchor': 'middle', text: `SQL ${Math.round(T.core[g.c])}%`, style: ink(18, C.ink, 700) }, rows.sql);
    const m = T.marks[g.c];
    s('text', { x: g.cx, y: ROW[3], 'text-anchor': 'middle', text: `${m.tool} ${Math.round(m.share)}%`, style: ink(20, C.coral, 700) }, rows.word);
    s('text', { x: g.cx, y: ROW[3] + 22, 'text-anchor': 'middle', text: `against ${Math.round(m.rest)}% at ${other(g)}`, style: ink(15) }, rows.word);
  });
  const core = groups.map(g => Math.round(T.core[g.c])), coreText = Math.min(...core) === Math.max(...core) ? `${core[0]}%` : `${Math.min(...core)}–${Math.max(...core)}%`;

  // absolute state of every dot
  const paint = mode => dots.forEach(d => {
    const on = d.at && mode !== 'cloud', hot = mode === 'plain' && plain(d.i);
    d.el.style.transform = `translate(${on ? d.at[0] : d.x0}px,${on ? d.at[1] : d.y0}px)`;
    d.el.style.fill = mode === 'cloud' ? C.ink : hot ? C.coral : colour[d.c] || C.mute;
    d.el.style.opacity = mode === 'cloud' ? .26 : !d.at ? 0 : mode === 'plain' ? (hot ? 1 : .2) : mode === 'dim' ? .4 : .85;
  });
  const show = (...on) => [line, spectrum, named, rows.plain, rows.sql, rows.word].forEach(g => fade(g, on.includes(g)));
  const intro = on => { fade(big, on); fade(sub, on); floaters.forEach((f, k) => later(() => fade(f, on), on && !Anim.fast ? 120 * k : 0)); };
  const spread = (mode, text, word, fill, ...on) => { intro(false); paint(mode); show(line, spectrum, named, ...on); setHead(text, word, fill); };

  return [
    async () => {   // hundreds of titles
      paint('cloud'); show(); setHead('', null); intro(true); big.textContent = '0';
      await countUp(big, T.n_titles, { dur: 1500 });
    },
    async () => {   // almost eight years on
      paint('cloud'); intro(true); big.textContent = T.n_titles; show(line); setHead('', null);
    },
    async () => {   // but every ad sits on one spectrum
      spread('spectrum', 'one spectrum, two ends', stable ? 'suggestive' : 'descriptive', C.ink);
    },
    optional(async () => {   // the plain title sits at both ends
      spread('plain', 'the plain title sits at both ends', null, C.coral, rows.plain);
    }),
    optional(async () => {   // the core travels
      spread('dim', `SQL at both ends: ${coreText} · ${T.n} ads`, null, C.ink, rows.sql);
    }),
    async () => {   // the word that tells the ends apart
      spread('dim', `search these words, not the title · ${T.n} ads`, null, C.coral, rows.sql, rows.word);
    }
  ];
}
