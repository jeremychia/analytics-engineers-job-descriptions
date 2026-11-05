/* The senior-room talk, revised (jd_deck_v5.html, script in talk_v5_for_the_people.md): one thing to look at per click. A footer names the ads and how they were read; definitions and tests live in the script's numbers table. Runs after slides_v2.js. */
{
  const by = Object.fromEntries(SLIDES.map(S => [S.id, S])), N = D.seniority_n, A = D.corpus_n.toLocaleString('en-US');
  const ratio = Math.round((N.senior + N.lead + N.staff + N.manager) / N.junior);
  document.head.append(Object.assign(document.createElement('style'), { textContent: '.vtag { display: none }' }));   // the talk never explains the verdict tags, so the words on each slide carry how sure it is
  SLIDES.splice(0, SLIDES.length,
    { ...by.open, foot: 'Typical = the middle ask among junior ads that state years.' },
    { id: 'job', name: 'The job', kick: 'First · What is the job?', title: 'SQL and people are the floor. <em>The rest is local.</em>', build: buildJob,
      foot: 'Duties read from each ad’s list of responsibilities. Tools named anywhere in the ad.' },
    { id: 'pipeline', name: 'Doors', kick: 'Let them in · How many doors are there?', title: `1 junior ad. <em>${ratio} senior or above.</em>`, build: buildPipeline,
      foot: `All ${A} ads, levelled by an AI model. Collected during one job search, so they lean senior.` },
    { ...by.juniors, kick: 'Let them in · What stands in the way?', title: 'Junior in the label. <em>Years and a degree in the ask.</em>', build: st => pick(buildJuniors(st, 'years', { degreeWords: true }), [1, 2, 7]),
      foot: 'Junior ads levelled by an AI model. A degree counts with or without “or equivalent”. Other routes read by hand.' },
    { ...by.ladder, name: 'Next verb', kick: 'Help them up · What changes at each step?', title: 'The core stays the same. <em>At senior, the verb is mentor.</em>',
      foot: 'English ads with a level. Ads for outside hires, not a promotion ladder.',
      build: st => { const f = buildLadder(st, { years: false, mentorAlone: true }); return [f[0], chain(f[1], f[2]), f.mentor]; } },
    { id: 'rung', name: 'Next rung', kick: 'Help them up · What moves you up?', title: 'SQL in every ad. <em>The business in a third.</em>', build: buildRung,
      foot: 'English ads with a level. The business = a phrase match, a first pass. Handy (Joe Reis’s podcast) and Seattle Data Guy (2027 post), paraphrased.' },
    { id: 'mentoring', name: 'Who teaches', kick: 'Pass it on · Who teaches the juniors?', title: `3 in 4 junior ads <em>don’t say who will teach.</em>`, build: buildMentorGap,
      foot: 'Every junior ad read by hand. Vague promises of growth do not count.' },
    { id: 'next', name: 'What next', kick: 'What comes next · What does AI change?', title: 'The tool writes the first draft. <em>Someone still teaches the review.</em>', build: buildNext,
      foot: `Stanford Digital Economy Lab, “Canaries in the Coal Mine”, revised ${D.stanford.revised}. Junior ads asking for AI, read by hand.` },
    { id: 'rewrite', name: 'Your ad', kick: 'The ad again', title: 'One line right. <em>One line missing.</em>', build: buildRewrite, foot: '' },
    { ...SLIDE_BY_ID.benefits, name: 'Q&A: benefits', kick: 'For questions · What can I ask for?' });
}
