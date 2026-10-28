// Loads question-charts.js (about 400 KB) once the page is idle; it then fills every [data-q] element with that question's chart.
addEventListener('load', () => {
  const load = () => { const script = document.createElement('script'); script.src = 'question-charts.js'; document.head.append(script); };
  if ('requestIdleCallback' in window) requestIdleCallback(load, { timeout: 3000 }); else setTimeout(load, 1500);
});
