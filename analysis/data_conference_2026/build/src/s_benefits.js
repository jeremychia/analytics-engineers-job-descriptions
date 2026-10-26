/* Benefits grid: share of ads in each region that mention each benefit. The law shows through. */
function buildBenefits(stage) {
  const W = 1000, H = 540, B = D.benefits, regs = B.regions, tags = B.tags, svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const label = { health: 'health insurance', pension: 'pension / 401k', equity: 'equity', bonus: 'bonus', pto: 'paid time off', parental: 'parental leave', remote_flex: 'remote / hybrid',
    learning: 'learning budget', wellbeing: 'wellbeing', meal: 'meal vouchers', transport: 'transport / mobility', flex_hours: 'flexible hours' };
  const L = 170, T = 74, cw = 86, rh = 33, stops = [[0, '#fbeee9'], [15, '#f5d0c8'], [35, '#ea5b4d'], [60, '#5b2a4a']];
  const cells = [], gH = s('g', {}, svg);
  regs.forEach((r, ci) => s('text', { x: L + ci * cw + cw / 2, y: 58, 'text-anchor': 'middle', class: 'colhead', text: r.replace(' & Ireland', ' & IE').replace('Southern Europe', 'S. Europe').replace('CEE/Baltics', 'CEE') }, gH));
  tags.forEach((t, ri) => { s('text', { x: L - 12, y: T + ri * rh + 22, 'text-anchor': 'end', class: 'rowlab2', text: label[t] || t }, gH);
    regs.forEach((r, ci) => { const v = B.pct[t][r] ?? 0; const x = L + ci * cw, y = T + ri * rh;
      const g = s('g', { style: { opacity: 0 } }, svg);
      const rect = s('rect', { x: x + 2, y: y + 2, width: cw - 4, height: rh - 4, rx: 6, fill: scale(stops, v) }, g);
      s('text', { x: x + cw / 2, y: y + 22, 'text-anchor': 'middle', class: 'cellnum', text: v >= 1 ? Math.round(v) : '0', style: { fill: v > 28 ? '#fff' : C.ink2 } }, g);
      rect.addEventListener('mousemove', e => tip.show(e, `<b>${label[t]}</b><br>${r}: ${v}% of ${B.n[r]} ads`)); rect.addEventListener('mouseleave', () => tip.hide());
      cells.push({ g, ci, ri, rect, r, t, v }); }); });
  const hl = s('rect', { x: 0, y: T - 4, width: cw, height: rh * tags.length + 8, rx: 10, fill: 'none', stroke: C.ink, 'stroke-width': 3, style: { opacity: 0 } }, svg);
  const hlRow = s('rect', { x: L - 4, y: 0, width: cw * regs.length + 8, height: rh, rx: 10, fill: 'none', stroke: C.ink, 'stroke-width': 3, style: { opacity: 0 } }, svg);
  const note = h('div', { class: 'bnote', style: { opacity: 0 } }); stage.append(note);
  const setNote = html => { note.style.opacity = 0; later(() => { note.innerHTML = html; note.style.opacity = 1; }, Anim.fast ? 0 : 200); };
  const col = name => regs.indexOf(name);
  const move = (rect, x, y, w, hh) => { rect.setAttribute('x', x); rect.setAttribute('y', y); rect.setAttribute('width', w); rect.setAttribute('height', hh); rect.style.transition = Anim.fast ? 'none' : 'all .6s cubic-bezier(.2,.8,.2,1)'; rect.style.opacity = 1; };
  return [
    async () => { cells.forEach(c => { c.g.style.transition = `opacity .5s ${Anim.fast ? 0 : c.ci * 160 + c.ri * 18}ms`; c.g.style.opacity = 1; }); await wait(Anim.fast ? 0 : regs.length * 160 + 800); },
    async () => { const ci = col('US'); move(hl, L + ci * cw - 2, T - 4, cw + 4, rh * tags.length + 8); setNote('<b>US:</b> health 58% · pension 54% · equity 48%. The ad sells what the law doesn’t give.'); await wait(700); },
    async () => { const ci = col('France'); move(hl, L + ci * cw - 2, T - 4, cw + 4, rh * tags.length + 8); setNote('<b>France:</b> meal vouchers 35%. Pension: 0%. Built in, so not advertised.'); await wait(700); },
    async () => { hl.style.opacity = 0; const ri = tags.indexOf('pension'); move(hlRow, L - 4, T + ri * rh, cw * regs.length + 8, rh); setNote('<b>Pension:</b> 54% in the US, 36% in Benelux, 0% in France. A benefit in an ad is a gap the law leaves.'); await wait(700); }
  ];
}
