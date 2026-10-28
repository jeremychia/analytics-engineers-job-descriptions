/* The senior-room talk (jd_deck_v4.html, script in talk_v4_for_the_people.md): how the field lets people in, helps them up, and who teaches them. Runs after slides_v2.js and reuses its footers. */
{
  const by = Object.fromEntries(SLIDES.map(S => [S.id, S])), N = D.seniority_n, MG = D.mentoring;
  const ratio = Math.round((N.senior + N.lead + N.staff + N.manager) / N.junior);
  SLIDES.splice(0, SLIDES.length,
    by.open,
    { id: 'pipeline', name: 'Doors', kick: 'Let them in · How many doors are there?', title: `1 junior ad. <em>${ratio} senior or above.</em>`, build: buildPipeline,
      foot: `All ${D.corpus_n.toLocaleString('en-US')} ads, by the level an AI model read from each one. The ads were collected during one person’s job search, so they lean senior.` },
    { ...by.juniors, kick: 'Let them in · What stands in the way?' },
    { ...by.ladder, name: 'Next verb', kick: 'Help them up · What changes at each step?', title: 'The core stays the same. <em>Hand them the next verb.</em>' },
    { id: 'mentoring', name: 'Who teaches', kick: 'Pass it on · Who teaches the juniors?', title: `3 in 4 junior ads <em>don’t say who will teach.</em>`, build: buildMentorGap,
      foot: `All ${MG.junior_names_guide[1]} junior ads read by hand: ${MG.junior_names_guide[0]} name a person or role who will mentor, guide or supervise the new hire (${MG.junior_any_support[0]} if a structured programme counts). Senior: ${MG.senior_asks_mentor[0]} of a random ${MG.senior_asks_mentor[1]} senior ads, read by hand, ask the candidate to mentor, coach or review code.` },
    { id: 'rewrite', name: 'Your ad', kick: 'The ad again', title: 'One line right. <em>One line missing.</em>', build: buildRewrite,
      foot: 'Verbatim from the ad (Enhance, Dubai). The added line is the one most junior ads leave out; counted on all junior ads, read by hand.' });
}
