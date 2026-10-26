/* The AI waffle: 1,125 dots, one per ad. Light up the ones that ask, sort vague from concrete, ring the 'required, no duty'. */
function buildAI(stage) {
  const W = 1000, H = 520, rows = D.ai.rows, N = rows.length, COLS = 45, ROWS = Math.ceil(N / COLS), r = rng(5);
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const cw = 17.2, ch = 15.2, x0 = 20, y0 = 52;
  const pos = i => [x0 + (i % COLS) * cw + 8, y0 + Math.floor(i / COLS) * ch + 8];
  const rnd = shuffle([...Array(N).keys()], r);                      // initial scrambled slot for each ad
  const grp = rows.map((q, i) => ({ i, g: q[0] ? (q[1] === 2 ? 0 : 1) : 2 }));  // 0 concrete, 1 vague, 2 none
  const sorted = grp.slice().sort((a, b) => a.g - b.g || a.i - b.i);
  const slotA = Array(N), slotB = Array(N);
  rnd.forEach((ad, k) => slotA[ad] = k); sorted.forEach((o, k) => slotB[o.i] = k);
  const G = s('g', {}, svg), rings = s('g', {}, svg), ann = s('g', { style: { opacity: 0 } }, svg);
  const dots = rows.map((q, i) => { const [x, y] = pos(slotA[i]); const c = s('circle', { cx: 0, cy: 0, r: 6.2, fill: C.grey }, G);
    c.style.transform = `translate(${x}px,${y}px) scale(0)`; return c; });
  const title = s('text', { x: x0, y: 30, class: 'bignum2' }, svg); title.textContent = '0';
  const sub = s('text', { x: x0 + 120, y: 30, class: 'lbl', text: 'ads, one dot each' }, svg);
  const legend = h('div', { class: 'legend', style: { opacity: 0 } });
  stage.append(legend);
  const nAI = rows.filter(q => q[0]).length, nC = rows.filter(q => q[1] === 2).length, nV = rows.filter(q => q[0] && q[1] === 1).length, nR = rows.filter(q => q[2]).length;
  const nReq = rows.filter(q => q[3]).length;
  const side = h('div', { class: 'aiside', style: { opacity: 0 } });
  stage.append(side);
  return [
    async () => { dots.forEach((c, i) => { const [x, y] = pos(slotA[i]); c.style.transition = `transform .55s cubic-bezier(.2,.9,.3,1.3) ${Anim.fast ? 0 : (i % 90) * 7 + Math.floor(i / 90) * 4}ms`;
        c.style.transform = `translate(${x}px,${y}px) scale(1)`; });
      await countUp(title, N, { dur: 1400 }); },
    async () => { sub.textContent = 'ads. Lit: those that ask for AI as part of the role';
      rows.forEach((q, i) => { if (!q[0]) return; later(() => { dots[i].style.transition = 'fill .35s'; dots[i].style.fill = C.coral; }, Anim.fast ? 0 : (slotA[i] / N) * 1400); });
      await wait(1500); title.textContent = nAI.toLocaleString('en-US'); sub.textContent = `ask for AI in the role (${pct(nAI, N)}% of ads)`; },
    async () => { dots.forEach((c, i) => { const [x, y] = pos(slotB[i]); c.style.transition = `transform 1.3s cubic-bezier(.3,.8,.2,1) ${Anim.fast ? 0 : (slotB[i] % 70) * 12}ms, fill .5s`;
        c.style.transform = `translate(${x}px,${y}px) scale(1)`; const g = grp[i].g; c.style.fill = g === 0 ? C.plum : g === 1 ? '#f3a79e' : C.grey; });
      await wait(1700);
      legend.style.opacity = 1;
      legend.innerHTML = `<span><i style="background:${C.plum}"></i>names a tool or a task <b>${nC}</b> (${pct(nC, nC + nV)}%)</span><span><i style="background:#f3a79e"></i>stays vague <b>${nV}</b> (${pct(nV, nC + nV)}%)</span><span><i style="background:${C.grey}"></i>no AI ask</span>`; },
    async () => { rows.forEach((q, i) => { if (!q[2]) return; const [x, y] = pos(slotB[i]);
        const ring = s('circle', { cx: x, cy: y, r: 6, fill: 'none', stroke: C.ink, 'stroke-width': 2.2, class: 'ring', style: { opacity: 0 } }, rings);
        later(() => { ring.style.transition = 'opacity .4s, r .6s'; ring.style.opacity = 1; ring.setAttribute('r', 10.5); }, Anim.fast ? 0 : (i % 40) * 22); });
      await wait(1200); side.style.opacity = 1;
      side.innerHTML = `<div class="bigstat"><span>${nR}</span></div><div class="lbl2">ads that require AI but describe no AI work in the duties, ${pct(nR, nReq)}% of the ${nReq} that require it</div>`; },
    async () => { side.style.opacity = 0; await wait(300);
      side.style.opacity = 1; side.className = 'aiside quotes';
      side.innerHTML = `<div class="q vague"><b>vague</b>“${D.quotes.vague}”<small>Aritzia</small></div><div class="q conc"><b>concrete</b>“${D.quotes.concrete}”<small>LC Waikiki</small></div><div class="lbl2">Share of ads that ask for AI, by month of scrape: Aug 48% · Sep 48% · Oct 50%. Flat.</div>`; }
  ];
}
