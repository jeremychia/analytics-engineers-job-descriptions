/* The senior-room talk for a 5-minute slot (jd_deck_v6.html, script in talk_v6_for_the_people.md): it opens on what AI asks of senior ads, then follows the business and the teaching down to the junior ad. Runs after slides_v2.js. */
{
  const by = Object.fromEntries(SLIDES.map(S => [S.id, S])), M = D.mentoring, [mk, mn] = M.senior_asks_mentor, [jk, jn] = M.junior_names_guide;
  const thirds = Math.round(3 * mk / mn), quarters = Math.round(4 * (jn - jk) / jn), SS = D.semantics.senior;
  document.head.append(Object.assign(document.createElement('style'), { textContent: '.vtag { display: none }' }));   // the talk never explains the verdict tags, so the words on each slide carry how sure it is
  SLIDES.splice(0, SLIDES.length,
    { id: 'context', name: 'AI', kick: 'First · What does AI ask of seniors?', title: 'Senior ads that ask for AI <em>name a semantic layer nearly twice as often.</em>',
      build: st => buildContext(st, { senior: true, line: ['AI needs the business written down. ', 'Who teaches that?'] }),
      foot: 'Senior and lead ads. Semantic layer = a phrase match. Holds at the same level and ad length (p < 0.001).' },
    { id: 'rung', name: 'Same asks', kick: 'Help them up · What moves you up?', title: 'Mid, senior, lead. <em>The same asks.</em>',
      build: st => buildRung(st, { voices: false, line: ['Same skills. ', 'So what moves you up?'] }),
      foot: 'English ads with a level. The business = a phrase match, a first pass.' },
    { ...by.ladder, name: 'Next verb', kick: 'Help them up · What changes at each step?', title: 'The verb changes. <em>At senior, it is mentor.</em>',
      foot: 'English ads with a level. Each step tested, corrected for testing many verbs. Ads for outside hires, not a promotion ladder.',
      build: st => { const f = buildLadder(st, { years: false, mentorAlone: true }); return [f[0], chain(f[1], f[2]), f.mentor]; } },
    { id: 'mentoring', name: 'Who teaches', kick: 'Pass it on · Who teaches the juniors?', title: `${thirds === 1 ? 'A third' : `${thirds} in 3`} of senior ads ask you to teach. <em>${quarters}&nbsp;in&nbsp;4 junior ads don’t say who will.</em>`,
      build: st => buildMentorGap(st, { call: false }),
      foot: `Senior: ${mn} senior ads read by hand. Junior: every junior ad read by hand. Vague promises of growth do not count.` },
    { ...by.juniors, kick: 'Let them in · What stands in the way?', title: 'Junior ads ask for a degree <em>more than any other level.</em>', build: st => pick(buildJuniors(st, 'years', { degreeWords: true }), [7]),
      foot: 'Junior ads levelled by an AI model. A degree counts with or without “or equivalent” (tested, p < 0.001). Other routes read by hand.' },
    { id: 'rewrite', name: 'Your ad', kick: 'The ad again', title: 'One line right. <em>One line missing.</em>', foot: '',
      build: st => buildRewrite(st, { line: ['Mentor someone? ', 'Say so in the junior ad.'] }) },
    { ...SLIDE_BY_ID.benefits, name: 'Q&A: benefits', kick: 'For questions · What can I ask for?' });
}
