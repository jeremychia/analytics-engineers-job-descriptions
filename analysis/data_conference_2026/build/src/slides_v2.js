/* The 5-minute talk (jd_deck_v2.html, script in talk_v3_for_the_people.md): six questions, each cut to the builds that carry its answer, with plain-language footers. Replaces SLIDES in place. */
{
  Object.assign(VERDICT_LABEL, { conclusive: 'clear', suggestive: 'likely', descriptive: 'a count', inconclusive: 'unclear' });
  const by = Object.fromEntries(SLIDES.map(S => [S.id, S])), q = (n, S) => `Question ${n} · ${S.kick.split(' · ')[1]}`;
  SLIDES.splice(0, SLIDES.length,
    by.open,
    { ...by.barcode, name: 'Titles', kick: 'Question 1 · Does the title tell me the job?', title: `${D.titles.n_titles} titles. <em>Almost no two ads alike.</em>`,
      foot: `${D.titles.n} ads whose title names an analytics engineer. Alike = shared wording in the duties and requirements, averaged over 971 English ads; the square shows 150 of them. The numbers describe these ads; there is no test.`,
      build: st => buildBarcode(st, true) },
    { ...by.stack, kick: q(2, by.stack), build: buildStackV2,
      foot: 'Mid and senior ads in every language. dbt = names dbt and not Power BI or Fabric; Power BI = the reverse. Ads that name both, or neither, fall in between. Define, own or lead = verbs like define, own, shape and lead, against support, assist and deliver. The gap is 20 points at mid level and 30 at senior; chance does not explain either. It describes the ads, not the tools.' },
    { ...by.juniors, kick: q(3, by.juniors), title: '1 in 5 asks for two years. <em>4 in 5 don’t.</em>', build: st => pick(buildJuniors(st, 'years'), [1, 4, 6]),
      foot: 'Junior = ads whose text reads as junior (an AI model labelled every ad): 64 of 1,211, about 1 in 20. Two years or more = the smallest number of years of experience the ad asks for: 12 of 64. Half of junior ads state no years.' },
    { ...by.ladder, kick: q(4, by.ladder), build: st => { const f = buildLadder(st); return [f[0], chain(f[1], f[2]), f[3]]; },
      foot: 'Share of English ads at each level that mention it: 992 ads (43 junior, 441 mid, 410 senior, 98 lead or above). The verb rises at every step; the core does not move. These are ads for outside hires, not a promotion guide.' },
    { id: 'missing', name: 'Left out', kick: 'Question 5 · What doesn’t the ad tell me?', title: 'The ad asks. <em>It rarely answers.</em>', build: buildMissing,
      foot: `All ${D.missing.n.toLocaleString('en-US')} ads. Pay, remote or office, and interview steps come from fields read from each ad; years, reporting line and team size are found in the ad text. A hand read of 60 ads agreed on 55 to 60 of them for each item. The numbers describe these ads; there is no test.` },
    { ...by.pitch, kick: q(6, by.pitch), build: st => buildPitch(st, true),
      foot: '937 ads that name at least one of 19 tools. A mix is the set of tools an ad names, mentioned rather than required. The numbers describe these ads; there is no test.' },
    { ...by.close, build: st => { const f = buildAdSlide(st, true); return [instant(f[0], f[1], f[2]), f[3]]; } });
}
