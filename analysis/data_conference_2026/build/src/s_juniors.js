/* Juniors: four ways to count, the gates, three contradictions, then France. */
function buildJuniors(stage) {
  const W = 1000, H = 540, J = D.junior, ads = J.ads, n = ads.length;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const g1 = s('g', {}, svg), g2 = s('g', { style: { opacity: 0 } }, svg), g3 = s('g', { style: { opacity: 0 } }, svg), g4 = s('g', { style: { opacity: 0 } }, svg);
  // 1. concentric ways to count
  const cnt = [['by a loose count', D.junior_counts.loose, C.soft], ['an explicit early-career label', D.junior_counts.text_label, '#f3b8ae'], ['by the classifier', D.junior_counts.classifier, '#ea8478'], ['by the title', D.junior_counts.title, C.coral]];
  const k = 15, cx = 300, cy = 290, circles = cnt.map(([lab, v, col], i) => { const rr = k * Math.sqrt(v);
    const c = s('circle', { cx, cy: cy + (cnt[0][1] ? k * Math.sqrt(cnt[0][1]) - rr : 0) - 10, r: 0, fill: col, stroke: C.bg, 'stroke-width': 2 }, g1); return { c, rr }; });
  cnt.forEach(([lab, v], i) => { const y = 130 + i * 90; s('line', { x1: 540, x2: 580, y1: y - 6, y2: y - 6, stroke: C.line }, g1);
    s('text', { x: 600, y, class: 'ladnum', text: v }, g1); s('text', { x: 600, y: y + 26, class: 'rowsub', text: lab }, g1); });
  s('text', { x: 40, y: 40, class: 'lbl', text: 'Four ways to count junior-open ads, four answers' }, g1);
  // 2. the 64 junior dots with hard gates
  const cols = 16, dw = 46, dh = 56, gx = 90, gy = 100;
  const dots = ads.map((a, i) => { const x = gx + (i % cols) * dw, y = gy + Math.floor(i / cols) * dh;
    const c = s('circle', { cx: x, cy: y, r: 15, fill: C.grey }, g2); c.style.transformOrigin = `${x}px ${y}px`; return c; });
  const gateN = ads.filter(a => a.gate).length, yrsN = ads.filter(a => a.flags[1]).length, langN = ads.filter(a => a.flags[2]).length, visaN = ads.filter(a => a.flags[4]).length;
  s('text', { x: 40, y: 40, class: 'lbl', text: `${n} ads the classifier calls junior, one dot each` }, g2);
  const lg = s('g', { style: { opacity: 0 } }, g2);
  s('text', { x: gx - 20, y: 370, class: 'bignum2', text: `${pct(gateN, n)}%` }, lg);
  s('text', { x: gx + 130, y: 354, class: 'rowlab', text: 'face a hard gate' }, lg);
  s('text', { x: gx + 130, y: 380, class: 'rowsub', text: `${yrsN} ask 2+ years · ${langN} need a language other than English · ${visaN} need a visa or clearance` }, lg);
  s('text', { x: gx - 20, y: 450, class: 'rowsub', text: `${pct(ads.filter(a => a.flags[0]).length, n)}% state a degree; ${ads.filter(a => a.flags[3]).length} ask for a portfolio` }, lg);
  // 3. contradictions
  const cards = [['Accenture, Lisbon', D.quotes.accenture_says, D.quotes.accenture_asks], ['Dataroots', 'junior-analytics-engineer', D.quotes.dataroots], ['Enhance', D.quotes.enhance_says, D.quotes.enhance_asks]];
  const cardEls = cards.map(([co, say, ask], i) => { const x = 30 + i * 320, g = s('g', { style: { opacity: 0 } }, g3);
    s('rect', { x, y: 90, width: 300, height: 360, rx: 20, fill: C.paper, stroke: C.line }, g);
    s('text', { x: x + 22, y: 130, class: 'cardlab', text: co }, g);
    const fo = s('foreignObject', { x: x + 22, y: 146, width: 256, height: 290 }, g);
    fo.append(h('div', { class: 'ctr' }, h('div', { class: 'tag say' }, 'SAYS'), h('p', {}, '“' + say + '”'), h('div', { class: 'tag ask' }, 'ASKS'), h('p', {}, '“' + ask + '”')));
    return g; });
  s('text', { x: 40, y: 50, class: 'lbl', text: 'Junior in the title, more in the text' }, g3);
  // 4. France
  const fr = ads.filter(a => a.fr), nb = fr.filter(a => a.bac).length;
  s('text', { x: 40, y: 46, class: 'bignum2', text: `${nb} of ${fr.length}` }, g4);
  s('text', { x: 210, y: 46, class: 'rowlab', text: 'junior ads in France name a Bac+4/5, a master’s or an engineering school' }, g4);
  const fcards = fr.map((a, i) => { const x = 40 + (i % 5) * 190, y = 100 + Math.floor(i / 5) * 118, g = s('g', { style: { opacity: 0 } }, g4);
    s('rect', { x, y, width: 176, height: 100, rx: 14, fill: a.bac ? C.paper : 'none', stroke: a.bac ? C.coral : C.line, 'stroke-width': a.bac ? 2.5 : 1.2, 'stroke-dasharray': a.bac ? '' : '5 4' }, g);
    s('text', { x: x + 14, y: y + 30, class: 'frco', text: a.co.length > 18 ? a.co.slice(0, 17) + '…' : a.co }, g);
    s('text', { x: x + 14, y: y + 52, class: 'rowsub', text: a.role.length > 26 ? a.role.slice(0, 25) + '…' : a.role }, g);
    s('text', { x: x + 14, y: y + 82, class: 'frtick', text: a.bac ? '✓ Bac+4/5 · master · école' : 'no degree level named', style: { fill: a.bac ? C.coral : C.mute } }, g); return g; });
  s('text', { x: 40, y: 500, class: 'rowsub', text: 'Found by searching for alternance, stage and junior. Where pay is stated, internships pay €1,100 to €1,700 gross a month.' }, g4);
  return [
    async () => { await Promise.all(circles.map(({ c, rr }, i) => tween(900, e => c.setAttribute('r', rr * e), { delay: i * 260, ease: E.back }))); },
    async () => { g1.style.transition = g2.style.transition = 'opacity .5s'; g1.style.opacity = 0; g2.style.opacity = 1; await wait(300);
      dots.forEach((c, i) => { c.style.transform = 'scale(0)'; c.style.transition = `transform .45s cubic-bezier(.2,.9,.3,1.4) ${Anim.fast ? 0 : i * 14}ms, fill .4s`; requestAnimationFrame(() => c.style.transform = 'scale(1)'); });
      await wait(Anim.fast ? 0 : n * 14 + 500);
      ads.forEach((a, i) => { if (a.gate) later(() => dots[i].style.fill = C.coral, Anim.fast ? 0 : i * 22); });
      await wait(Anim.fast ? 0 : n * 22 + 200); lg.style.transition = 'opacity .6s'; lg.style.opacity = 1; await wait(600); },
    async () => { g2.style.opacity = 0; g3.style.opacity = 1; await wait(300);
      for (const g of cardEls) { g.style.transition = 'opacity .5s, transform .6s'; g.style.transform = 'translateY(20px)'; requestAnimationFrame(() => { g.style.opacity = 1; g.style.transform = 'none'; }); await wait(450); } },
    async () => { g3.style.opacity = 0; g4.style.transition = g3.style.transition = 'opacity .5s'; g4.style.opacity = 1; await wait(300);
      for (let i = 0; i < fcards.length; i++) { const g = fcards[i]; g.style.transition = 'opacity .4s'; g.style.opacity = 1; await wait(90); } }
  ];
}
