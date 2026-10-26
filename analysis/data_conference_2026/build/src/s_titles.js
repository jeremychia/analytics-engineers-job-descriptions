/* 534 titles -> five jobs: 721 dots drift as a cloud, then fly into five clusters. */
function buildTitles(stage) {
  const W = 1000, H = 540, T = D.titles, r = rng(7);
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const colors = { 3: C.plum, 1: C.coral, 2: C.blue, 4: C.teal, 0: C.amber };
  const centers = { 1: [120, 300], 0: [300, 300], 3: [500, 300], 2: [700, 300], 4: [880, 300] };
  const order = { 1: 154, 0: 69, 3: 189, 2: 158, 4: 151 };
  const used = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
  const g = s('g', {}, svg), labels = s('g', { style: { opacity: 1 } }, svg), cls = s('g', { style: { opacity: 0 } }, svg);
  const dots = T.ads.map(([c], i) => {
    const k = used[c]++, a = k * 2.399963, rad = 5.4 * Math.sqrt(k + .5);
    const tx = centers[c][0] + rad * Math.cos(a), ty = centers[c][1] + 20 + rad * Math.sin(a);
    const x0 = 40 + r() * (W - 80), y0 = 70 + r() * (H - 190);
    const el = s('circle', { cx: 0, cy: 0, r: 3.1, fill: C.ink, 'fill-opacity': .32, class: 'dot' }, g);
    el.style.transform = `translate(${x0}px,${y0}px)`;
    return { el, x0, y0, tx, ty, c };
  });
  const samples = shuffle([...new Set(T.ads.map(a => a[1]))], rng(3)).slice(0, 15);
  const floaters = samples.map((t, i) => { const x = 60 + r() * (W - 320), y = 90 + r() * (H - 220);
    const el = s('text', { x, y, class: 'floater', text: t.length > 38 ? t.slice(0, 36) + '…' : t, style: { opacity: 0 } }, labels);
    el.style.animationDelay = (-r() * 6) + 's'; return el; });
  const big = s('text', { x: W / 2, y: 44, 'text-anchor': 'middle', class: 'bignum' }, svg); big.textContent = '0';
  const sub = s('text', { x: W / 2, y: 70, 'text-anchor': 'middle', class: 'lbl', text: 'different job titles in 721 analytics-engineer ads' }, svg);
  const names = T.names;
  for (const c of [1, 0, 3, 2, 4]) {
    const [x] = centers[c];
    s('text', { x, y: 462, 'text-anchor': 'middle', class: 'clname', text: names[c] }, cls);
    s('text', { x, y: 492, 'text-anchor': 'middle', class: 'clnum', text: order[c] + ' ads', style: { fill: colors[c] } }, cls);
  }
  return [
    async () => {
      dots.forEach((d, i) => { d.el.style.transition = 'opacity .5s'; });
      floaters.forEach((f, i) => later(() => f.style.opacity = .85, Anim.fast ? 0 : 150 * i));
      await countUp(big, T.n_titles, { dur: 1600 });
    },
    async () => {
      floaters.forEach(f => f.style.opacity = 0); big.textContent = '5'; sub.textContent = 'kinds of job, found by what the duties ask';
      dots.forEach((d, i) => { d.el.style.transition = `transform 1.5s cubic-bezier(.2,.8,.2,1) ${Anim.fast ? 0 : (i % 60) * 16}ms, fill-opacity .6s`;
        d.el.style.transform = `translate(${d.tx}px,${d.ty}px)`; d.el.style.fill = colors[d.c]; d.el.style.fillOpacity = .92; });
      await wait(1100); cls.style.transition = 'opacity .8s'; cls.style.opacity = 1; await wait(500);
    }
  ];
}
