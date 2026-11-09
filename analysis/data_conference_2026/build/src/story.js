/* The charts the explorer shows, in the order the talk tells the story (talk_v8_for_the_people.md): four questions, with moving up inside the third. Each id matches its text in questions.json. */
const STORY_CHARTS = (() => {
  const v2 = Object.fromEntries([...SLIDES, ...EXTRA].map(S => [S.id, S]));
  const sqlPct = Math.round(100 * D.job.tools.core[0][1] / D.corpus_n), nextTool = Math.round(10 * D.job.max_other / D.corpus_n);
  const one = 'What is an analytics engineer?', two = 'Do ads keep up with the work?', three = 'What do ads leave unsaid?', four = 'Who will be senior next?';
  return [
    { id: 'record', chapter: 'Why read job ads?', name: 'The record', title: 'Job ads capture <em>what we expect from each other.</em>', build: buildRecord },
    { id: 'alike', chapter: one, name: 'No agreed job', title: 'Same title. <em>No closer than a data-engineer ad.</em>', build: buildAlike },
    { id: 'core', chapter: one, name: 'The core', title: 'The core is shared. <em>The rest is local.</em>',
      build: st => buildJob(st, { core: true, captions: [[['about three ads in four: '], ['model the data, test it, report on it, work with people', 1]],
        [[`SQL in ${sqlPct}%. `, 1], [`After SQL, Python and dbt, the next tool is in ${nextTool} ads in 10.`]]] }) },
    { ...v2.titles, chapter: one, name: 'Titles' },
    { ...v2.stack, chapter: one, name: 'Stack' },
    { ...EXTRA[0], chapter: one, name: 'Duty gaps' },
    { ...v2.pitch, chapter: one, name: 'Your mix' },
    { id: 'lag', chapter: two, name: 'Ads look back', title: 'Ads look back. <em>The work has moved on.</em>', build: st => buildLag(st, { link: true, story: false, vague: false }) },
    { ...v2.ai, chapter: two, name: 'AI' },
    { id: 'unsaid', chapter: three, name: 'Left unsaid', title: 'The ad asks. <em>It rarely tells.</em>', build: buildDisclose },
    { ...v2.benefits, chapter: three, name: 'Benefits' },
    { id: 'rung', chapter: three, name: 'Moving up', title: 'Same skills at every level. <em>The business is unwritten.</em>',
      build: st => buildRung(st, { voices: false, line: ['The higher you go, the closer to the business. ', 'Two in three ads don’t say so.'] }) },
    { ...v2.ladder, chapter: three, name: 'Ladder' },
    { id: 'future', chapter: four, name: 'Juniors', title: 'Few juniors today. <em>Few seniors tomorrow.</em>', build: buildFuture },
    { id: 'mentor', chapter: four, name: 'Who teaches', title: 'Most junior ads <em>don’t say who will teach.</em>', build: st => buildMentorGap(st, { call: false }) },
    { id: 'askme', chapter: 'What held up when tested', name: 'Tested', title: 'These findings held up <em>when tested.</em>', build: st => buildAskMe(st, { layer: true }) },
  ];
})();
