/* Slides only the v9 deck uses: the recap left up during questions. Runs after s_v8.js. */

/* the last slide, up during questions: the four points with the number the room heard for each, then a QR code to connect on LinkedIn */
function buildRecap(stage) {
  const LC = D.stats2.ladder_core, S = D.semantics, N = D.seniority_n, pay = D.missing.items.find(m => m.key === 'pay').pct;
  const ratio = Math.round((N.senior + N.lead + N.staff + N.manager) / N.junior);
  const points = [
    ['The core is shared.', 'Three in four ask you to model, test, report and work with people.'],
    ['The words lag the work.', `${S.context_engineering} say “context engineering”. ${S.layer.ai[0] + S.layer.other[0]} name a semantic layer.`],
    ['Growth is written down. Pay isn’t.', `${Math.round(LC['SCOPE: lead / drive'][3])}% of lead roles ask you to lead. ${pay}% give the pay.`],
    [`1 junior job description for every ${ratio} senior.`, 'Who will be senior next?']
  ].map(([lead, rest], i) => h('div', { style: { display: 'flex', gap: '1.4vw', alignItems: 'baseline' } },
    h('div', { style: { fontSize: 'clamp(20px,2.4vw,38px)', fontWeight: 700, color: C.coral, minWidth: '1.2em' } }, `${i + 1}`),
    h('div', {}, h('span', { style: { fontSize: 'clamp(18px,2.1vw,32px)', fontWeight: 700 } }, `${lead} `),
      h('span', { style: { fontSize: 'clamp(15px,1.6vw,25px)', color: C.ink2 } }, rest))));
  const code = (Q, title, label) => h('a', { href: Q.url, target: '_blank', style: { display: 'flex', alignItems: 'center', gap: '1.2vw', textDecoration: 'none', color: C.ink, flex: '1 1 0', minWidth: 0 } },
    h('div', { style: { width: 'clamp(70px,8vw,120px)', flex: 'none' }, html: v7.qr(Q) }),
    h('div', {}, h('div', { style: { fontSize: 'clamp(15px,1.6vw,25px)', fontWeight: 700 } }, title),
      h('div', { style: { fontSize: 'clamp(12px,1.2vw,18px)', color: C.ink2, marginTop: '.4vh', overflowWrap: 'anywhere' } }, label)));
  const short = url => url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '');
  stage.append(h('div', { class: 'col', style: { gap: '2.6vh' } },
    h('div', { style: { fontSize: 'clamp(22px,2.8vw,44px)', fontWeight: 700 } }, 'Snapshot one: ', h('span', { style: { color: C.coral } }, 'what job descriptions say')),
    ...points,
    h('div', { style: { display: 'flex', gap: '3vw', marginTop: '1.5vh' } },
      code(QR_LINKEDIN, 'Connect with me on LinkedIn', `Jeremy Chia · ${short(QR_LINKEDIN.url)}`))));
  return [async () => { await wait(Anim.fast ? 0 : 300); }];
}
