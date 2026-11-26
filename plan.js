/* Ava's 12-week plan (Nov 23, 2026 – Feb 14, 2027) inside the app.
   - Her report-card weights stay the base. This week's plan skills get a boost on top (and a smaller one for
     the day's focus: Mon phonics, Tue equations, Wed reading aloud, Thu make-a-ten + spelling, Fri writing).
   - This week's sight words come up more often in the sight-word questions.
   - Phase checks (end of weeks 4, 8, 12): the app runs the parts it can check and a grown-up marks the rest.
   - Paper homework: a grown-up logs the score of a worksheet; it shows in a report and weak skills come up more. */
'use strict';
const PLAN_WEEKS = [
  null,
  {d: 'Nov 23 – 29', read: 'Ending sounds + short a', math: 'Adding within 10 + doubles (2 + 2 to 5 + 5)', write: 'All about cats: Cats have ___.',
   words: ['they', 'this', 'that', 'there', 'the', 'an', 'and', 'do', 'as', 'come'], skills: ['r_end', 'r_cvc', 'r_sight', 'r_th', 'm_add10', 'm_doubles']},
  {d: 'Nov 30 – Dec 6', read: 'Short i and o + clapping syllables', math: 'Taking away within 10 + doubles to 9 + 9', write: 'I can ___.',
   words: ['his', 'here', 'in', 'my', 'me', 'not', 'play', 'said', 'so', 'see'], skills: ['r_cvc', 'r_syll', 'r_sight', 'm_sub10', 'm_doubles']},
  {d: 'Dec 7 – 13', read: 'Short u and e + rhyming words', math: 'Turn-around facts + doubles plus one', write: 'All about the sun: The sun is ___.',
   words: ['to', 'you', 'all', 'but', 'are', 'more', 'be', 'day', 'for', 'got'], skills: ['r_cvc', 'r_rhyme', 'r_sight', 'm_turn', 'm_doubles']},
  {d: 'Dec 14 – 20', read: 'Review short-vowel words', math: 'True or false with the = sign + doubles review', write: 'In winter I ___.',
   words: ['is', 'like', 'look', 'or', 'over', 'she', 'went', 'down', 'has', 'out', 'about', 'been'], skills: ['r_cvc', 'r_end', 'r_sight', 'm_truefalse', 'm_doubles'], check: 1},
  {d: 'Dec 21 – 27', read: 'sh and ch', math: 'Fact families (2, 5, 7)', write: 'All about dogs: Dogs need ___.', light: true,
   words: ['all', 'am', 'are', 'at', 'ate', 'be', 'black', 'brown', 'but', 'came', 'did', 'do', 'eat'], skills: ['r_digraph', 'r_sight', 'm_factfam', 'm_bond']},
  {d: 'Dec 28 – Jan 3', read: 'th and wh', math: 'Missing numbers within 10', write: 'This year I want to ___.', light: true,
   words: ['four', 'get', 'good', 'have', 'he', 'into', 'like', 'must', 'new', 'no', 'now', 'on', 'our'], skills: ['r_digraph', 'r_th', 'r_sight', 'm_missing']},
  {d: 'Jan 4 – 10', read: 'Reading short sentences out loud', math: 'Make a ten to add to 20 (9 + 4 = 10 + 3)', write: 'All about frogs: Frogs can ___.',
   words: ['out', 'please', 'pretty', 'ran', 'ride', 'saw', 'say', 'she', 'so', 'soon', 'that', 'there', 'they'], skills: ['r_aloud', 'r_sight', 'w_order', 'm_add20', 'm_bond']},
  {d: 'Jan 11 – 17', read: 'Capital letters and periods', math: 'Shapes: name them, count sides and corners', write: 'My friend is ___ because ___.',
   words: ['this', 'too', 'under', 'want', 'was', 'well', 'went', 'what', 'white', 'who', 'will', 'with', 'yes'], skills: ['w_caps', 'r_syll', 'r_sight', 'm_shapes'], check: 2},
  {d: 'Jan 18 – 24', read: 'Silent e: a_e and i_e (cake, bike)', math: 'Missing numbers within 20', write: 'All about the moon: The moon ___.',
   words: ['after', 'again', 'an', 'any', 'as', 'ask', 'by', 'could', 'every', 'fly'], skills: ['r_silente', 'r_sight', 'm_missing']},
  {d: 'Jan 25 – 31', read: 'Silent e: o_e and u_e (home, cube)', math: 'Story problems: "How many more?"', write: 'My family likes to ___.',
   words: ['from', 'give', 'going', 'had', 'has', 'her', 'him', 'his', 'how', 'just'], skills: ['r_silente', 'r_sight', 'm_word', 'm_rest']},
  {d: 'Feb 1 – 7', read: 'Story questions: who, what, where', math: 'Tens and ones; comparing numbers', write: 'All about plants: Plants need ___.',
   words: ['know', 'let', 'live', 'may', 'of', 'old', 'once', 'open', 'over', 'put'], skills: ['r_comp', 'r_sight', 'm_place', 'm_compare']},
  {d: 'Feb 8 – 14', read: 'Retell a story: beginning, middle, end', math: 'Telling time to the hour and half hour', write: 'I love ___ because ___.',
   words: ['round', 'some', 'stop', 'take', 'thank', 'them', 'then', 'think', 'walk', 'were', 'when'], skills: ['r_comp', 'r_sight', 'm_time'], check: 3}
];
const PLAN_PHASES = {1: 'Sounds and facts', 2: 'Patterns and families', 3: 'Stories and reasoning'};
// The day's focus from the study plan (0 = Sunday).
const PLAN_DAYS = {1: ['r_sight', 'r_cvc', 'r_digraph', 'r_silente', 'r_end'], 2: ['m_missing', 'm_truefalse', 'm_turn', 'm_factfam'], 3: ['r_aloud', 'r_comp'],
  4: ['m_add20', 'm_bond', 'm_doubles', 'w_spell'], 5: ['w_order', 'w_caps', 'w_punct']};
const PLAN_DAY_NAMES = ['Rest day: story time only', 'Phonics + sight words', 'Equations + the = sign', 'Reading aloud + stories', 'Make a ten + spelling', 'Writing 2–3 sentences', 'Reading outing'];

Object.assign(DEFAULT_SETTINGS, {planOn: true, planStart: '2026-11-23', planOffset: 0});
['planOn', 'planStart', 'planOffset'].forEach(k => { if (S[k] === undefined) S[k] = DEFAULT_SETTINGS[k]; });
P.planChecks = P.planChecks || {}; P.homework = P.homework || [];

// Week 1–12 from the calendar, minus any weeks a grown-up chose to repeat. 0 = before the start or after week 12.
function planWeekRaw() {
  const st = new Date((S.planStart || '2026-11-23') + 'T00:00:00'); if (isNaN(st)) return 0;
  const now = new Date(); now.setHours(12, 0, 0, 0);
  return Math.floor((now - st) / (7 * 864e5)) + 1 - (+S.planOffset || 0);
}
function planWeek() { if (S.planOn === false || S.grade !== '1') return 0; const w = planWeekRaw(); return w >= 1 && w <= 12 ? w : 0; }
const planPhase = w => w ? Math.ceil(w / 4) : 0;
// This week's sight words, plus earlier words of the same phase she doesn't know yet.
function planWords() {
  const w = planWeek(); if (!w) return [];
  const known = x => typeof wordState === 'function' && wordState(x) === 'known';
  const out = PLAN_WEEKS[w].words.filter(x => !known(x));
  for (let i = (planPhase(w) - 1) * 4 + 1; i < w; i++) PLAN_WEEKS[i].words.forEach(x => { if (!known(x) && !out.includes(x)) out.push(x); });
  return out;
}
// Paper homework score for a skill (the last 3 worksheets), or null.
function paperScore(id) {
  const h = P.homework.filter(x => x.skill === id).slice(-3); if (!h.length) return null;
  const ok = h.reduce((a, x) => a + (+x.ok || 0), 0), n = h.reduce((a, x) => a + (+x.n || 0), 0); return n ? ok / n : null;
}
// Report-card weights stay the base; the plan multiplies on top.
(() => { const prev = priority; priority = function (id) {
  let p = prev.apply(this, arguments);
  const w = planWeek();
  if (w) { if (PLAN_WEEKS[w].skills.includes(id)) p *= 1.8; if ((PLAN_DAYS[new Date().getDay()] || []).includes(id)) p *= 1.3; }
  const ps = paperScore(id); if (ps !== null && ps < 0.7) p *= 1.3;   // weak on paper: a bit more practice here
  return p; }; })();

// ---- phase checks ----
const PLAN_CHECKS = {
  1: [{id: 'words', kind: 'words', label: 'Reads the class sight words (weeks 1–4)', weeks: [1, 2, 3, 4], pass: 0.8},
      {id: 'add', kind: 'quiz', label: 'Adds within 10 in under 5 seconds each', skill: 'm_add10', lvl: 2, n: 10, secs: 5, need: 8},
      {id: 'end', kind: 'quiz', label: 'Says the last sound of short-vowel words', skill: 'r_end', lvl: 1, n: 10, need: 8},
      {id: 'clap', kind: 'quiz', label: 'Claps 3-part words right 9 out of 10 times', skill: 'r_syll', lvl: 3, n: 10, need: 9}],
  2: [{id: 'sent', kind: 'sentences', label: 'Reads 5 short sentences with 1 or fewer mistakes', n: 5, need: 4},
      {id: 'miss', kind: 'quiz', label: 'Solves 8 of 10 missing-number problems', skill: 'm_missing', lvl: 1, n: 10, need: 8},
      {id: 'write', kind: 'grownup', label: 'Writes a sentence with a capital, spaces and a period', how: 'Ask her to write one sentence on paper about her day.'},
      {id: 'shape', kind: 'quiz', label: 'Names circle, triangle, square, rectangle, hexagon', skill: 'm_shapes', lvl: 1, n: 5, need: 4}],
  3: [{id: 'retell', kind: 'grownup', label: 'Retells a short story in order', how: 'Read a short story together (for example a Gigi story), then ask: what happened at the beginning, the middle and the end?'},
      {id: 'explain', kind: 'grownup', label: 'Explains her answer to a story problem', how: 'Ask: "Sam has 9 stars. Mia has 6. How many more does Sam have? How do you know?"'},
      {id: 'words', kind: 'words', label: 'Reads the 1st-grade sight words (weeks 9–12)', weeks: [9, 10, 11, 12], pass: 0.8},
      {id: 'time', kind: 'quiz', label: 'Tells time to the hour and half hour', skill: 'm_time', lvl: 3, n: 10, need: 8}]
};
const chkState = ph => (P.planChecks[ph] = P.planChecks[ph] || {parts: {}});
const chkPassAll = ph => PLAN_CHECKS[ph].every(c => (chkState(ph).parts[c.id] || {}).pass);
const chkDone = ph => PLAN_CHECKS[ph].every(c => chkState(ph).parts[c.id]);
function chkSave(ph, c, res) {
  const st = chkState(ph); st.parts[c.id] = Object.assign({t: Date.now()}, res); st.t = Date.now();
  if (chkDone(ph)) { st.pass = chkPassAll(ph); const n = PLAN_CHECKS[ph].length, ok = PLAN_CHECKS[ph].filter(x => st.parts[x.id].pass).length;
    logEvent({type: 'check', challenge: `Phase ${ph} check`, level: ph, ok, n, pass: st.pass, skills: PLAN_CHECKS[ph].map(x => (st.parts[x.id].pass ? '✓ ' : '✗ ') + x.label).join('; ')}); }
  saveAll(); if (typeof trySync === 'function') setTimeout(trySync, 300);
}

addScreen('pcheck', `<header class="playhead"><button class="small-btn" id="pcBack">⬅ Grown-ups</button><span class="muted" id="pcTitle"></span></header>
  <div class="pcbody" id="pcBody"></div>`);
$('#pcBack').onclick = () => { Bridge.stopSpeak(); renderParent(false); };
let pcPhase = 1;
function openCheck(ph) {
  pcPhase = ph; const st = chkState(ph);
  $('#pcTitle').textContent = `🎯 Phase ${ph} check · ${PLAN_PHASES[ph]}`;
  $('#pcBody').innerHTML = `<div class="card"><h3>🎯 Phase ${ph} check</h3><p class="muted">Do the parts in any order, on one day or a few. About 8 out of 10 right on each? Move on. If not, repeat this phase's hardest week (Grown-ups → 🗓️ 12-week plan).</p>
    ${PLAN_CHECKS[ph].map(c => { const r = st.parts[c.id];
      return `<div class="pcrow"><div><b>${esc(c.label)}</b><br><span class="muted">${c.kind === 'grownup' ? 'A grown-up decides' : c.kind === 'quiz' ? 'Ava answers on the tablet' : 'Ava reads, a grown-up taps'}${r ? ` · last done ${new Date(r.t).toLocaleDateString()}` : ''}</span></div>
        <div class="pcres">${r ? (r.pass ? `<span class="pill okp">✅ Pass${r.n ? ` ${r.ok}/${r.n}` : ''}</span>` : `<span class="pill nyp">🌱 Not yet${r.n ? ` ${r.ok}/${r.n}` : ''}</span>`) : ''}<button class="small-btn ${r ? '' : 'ok'}" data-part="${c.id}">${r ? '🔁 Again' : '▶ Start'}</button></div></div>`; }).join('')}
    ${chkDone(ph) ? `<p class="pcsum">${st.pass ? '🎉 <b>Phase passed!</b> On to the next phase.' : '🌱 <b>Not yet on every part.</b> Repeat the hardest week, then try those parts again.'}</p>` : ''}</div>`;
  $('#pcBody').querySelectorAll('[data-part]').forEach(b => b.onclick = () => runPart(ph, PLAN_CHECKS[ph].find(c => c.id === b.dataset.part)));
  show('pcheck');
}
function runPart(ph, c) {
  if (c.kind === 'quiz') return runQuizPart(ph, c);
  if (c.kind === 'grownup') {
    $('#pcBody').innerHTML = `<div class="card pcbig"><h3>${esc(c.label)}</h3><p>${esc(c.how)}</p><div class="row"><button class="bigbtn2 ok" id="pcYes">✅ Yes</button><button class="bigbtn2 ghost" id="pcNo">🌱 Not yet</button></div></div>`;
    $('#pcYes').onclick = () => { chkSave(ph, c, {pass: true}); openCheck(ph); }; $('#pcNo').onclick = () => { chkSave(ph, c, {pass: false}); openCheck(ph); };
    return;
  }
  // words or sentences: Ava reads each one, a grown-up taps ✅ or 🌱
  let items = c.kind === 'words' ? shuffle([...new Set([].concat(...c.weeks.map(w => PLAN_WEEKS[w].words)))]) : [];
  if (c.kind === 'sentences') { const seen = new Set(); for (let k = 0; k < 40 && items.length < c.n; k++) { try { const t = G.r_aloud().text; if (t && !seen.has(t)) { seen.add(t); items.push(t); } } catch (e) { break; } } }
  let i = 0, ok = 0;
  const draw = () => {
    if (i >= items.length) { const pass = c.kind === 'words' ? ok >= Math.ceil(items.length * c.pass) : ok >= c.need; chkSave(ph, c, {ok, n: items.length, pass}); return openCheck(ph); }
    $('#pcBody').innerHTML = `<div class="card pcbig"><p class="muted">${esc(c.label)} · ${i + 1} of ${items.length}</p><div class="pcword ${c.kind === 'sentences' ? 'sent' : ''}">${esc(wordShow ? wordShow(items[i]) : items[i])}</div>
      <p class="muted">${c.kind === 'words' ? 'Ava reads the word out loud. Did she read it without help?' : 'Ava reads the sentence out loud. One mistake or fewer?'}</p>
      <div class="row"><button class="bigbtn2 ok" id="pcR">✅ Yes</button><button class="bigbtn2 ghost" id="pcW">🌱 Not yet</button></div></div>`;
    $('#pcR').onclick = () => { ok++; i++; draw(); }; $('#pcW').onclick = () => { i++; draw(); };
  };
  draw();
}
function runQuizPart(ph, c) {
  session = {plan: Array(c.n).fill(c.skill), i: 0, firstTry: 0, start: Date.now(), results: [], practice: true,
    challenge: {id: 'check', level: ph, difficulty: c.lvl, name: `Phase ${ph} check`, icon: '🎯'}, check: {ph, c, res: []}};
  nextQuestion();
}
// While a check runs: its own badge, time each first answer, and come back to the check page at the end.
(() => {
  const prevNQ = nextQuestion; nextQuestion = function () { const r = prevNQ.apply(this, arguments);
    if (session && session.check && session.i < session.plan.length) { session.check.shown = Date.now(); $('#qbadge').innerHTML = `🎯 Phase ${session.check.ph} check · ${session.i + 1} of ${session.plan.length}`; }
    return r; };
  const prevA = answer; answer = function (val) {
    const s = session; if (s && s.check && !s.locked && !s.tries) { const it = s.item, good = String(val) === String(it.type === 'tiles' ? it.answer.join(it.join) : it.answer);
      const ms = Date.now() - Math.max(s.check.shown || 0, s.qSpeakUntil || 0);   // timed from when the question has been read out
      s.check.res.push({good, ms}); }
    return prevA.apply(this, arguments); };
  const prevFC = finishChallenge; finishChallenge = function () {
    const s = session; if (!s || !s.check) return prevFC.apply(this, arguments);
    const {ph, c, res} = s.check; const ok = res.filter(x => x.good && (!c.secs || x.ms <= c.secs * 1000)).length;
    P.sessions.push({date: todayKey(), t: Date.now(), n: res.length, ok, dur: Math.round((Date.now() - s.start) / 1000), mins: 0, skills: s.results, check: ph}); P.sessions = P.sessions.slice(-400);
    chkSave(ph, c, {ok, n: res.length, pass: ok >= c.need}); openCheck(ph);
  };
})();

// ---- paper homework ----
function addHomework(skill, ok, n, note) {
  const w = planWeek(); const e = {t: Date.now(), date: todayKey(), week: w, skill, ok, n, note: String(note || '').slice(0, 80)};
  P.homework.push(e); P.homework = P.homework.slice(-300);
  logEvent({type: 'homework', challenge: (SKILLS[skill] || {}).label || skill, ok, n, level: w, skills: e.note});
  saveAll(); if (typeof trySync === 'function') setTimeout(trySync, 300);
}

// ---- Grown-ups card: the plan, phase checks and homework ----
function planCard() {
  const w = planWeek(), raw = planWeekRaw(), W = w && PLAN_WEEKS[w], ph = planPhase(w), day = new Date().getDay();
  const known = x => typeof wordState === 'function' && wordState(x) === 'known';
  const allSkills = Object.keys(SKILLS).filter(id => gradeOk(id) && S.subjects[SKILLS[id].subject] !== false);
  const first = W ? W.skills.filter(id => SKILLS[id]) : [];
  const opts = first.concat(allSkills.filter(id => !first.includes(id))).map(id => `<option value="${id}">${esc(SKILLS[id].label)}${first.includes(id) ? ' ⭐' : ''}</option>`).join('');
  const hw = P.homework.slice(-6).reverse();
  const bySkill = {}; P.homework.forEach(x => { const b = bySkill[x.skill] = bySkill[x.skill] || {ok: 0, n: 0, k: 0}; b.ok += +x.ok || 0; b.n += +x.n || 0; b.k++; });
  const rep = Object.entries(bySkill).filter(([, b]) => b.n).sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n);
  const checks = [1, 2, 3].map(p => { const st = P.planChecks[p]; return `<button class="small-btn ${ph === p ? 'ok' : ''}" data-chk="${p}">🎯 Phase ${p}${st && st.pass ? ' ✅' : st && chkDone(p) ? ' 🌱' : ''}</button>`; }).join('');
  return `<div class="card" id="planCard"><h3>🗓️ 12-week plan</h3>
    ${S.grade !== '1' ? '<p class="muted">The plan is written for Grade 1, so it is paused while another grade is chosen.</p>' :
      w ? `<p><b>Week ${w} of 12</b> · ${W.d} · Phase ${ph}: ${PLAN_PHASES[ph]}${W.light ? ' · <i>winter break, keep it light</i>' : ''}${S.planOffset ? ` <span class="muted">(${S.planOffset} week${S.planOffset > 1 ? 's' : ''} repeated)</span>` : ''}</p>
      <ul><li>📖 Reading: ${esc(W.read)}</li><li>🔢 Math: ${esc(W.math)}</li><li>✏️ Friday writing: "${esc(W.write)}"</li><li>📅 Today: ${PLAN_DAY_NAMES[day]}</li></ul>
      <p>Sight words this week: ${W.words.map(x => `<span class="pill ${known(x) ? 'okp' : ''}">${known(x) ? '⭐ ' : ''}${esc(x)}</span>`).join(' ')}</p>
      <p class="muted">Her questions still follow her report card first. On top of that, this week's skills come up about twice as often, and today's focus a little more.</p>`
      : `<p class="muted">${raw < 1 ? 'The plan starts on ' + esc(S.planStart) + '.' : 'All 12 weeks are done. 🎉 Her questions follow her report card again.'}</p>`}
    <label class="chk"><input id="plOn" type="checkbox" ${S.planOn !== false ? 'checked' : ''}> Follow the 12-week plan in her daily questions</label>
    <div class="row"><button class="small-btn" id="plBack">↩ Repeat last week</button><button class="small-btn" id="plFwd">↪ Back one repeat</button></div>
    <h3 style="margin-top:14px">🎯 Phase checks</h3><p class="muted">At the end of weeks 4, 8 and 12. The app checks the tablet parts; you mark the rest.</p><div class="row">${checks}</div>
    <h3 style="margin-top:14px">📝 Paper homework</h3>
    <div class="hwform"><label>Skill <select id="hwSkill">${opts}</select></label>
      <label>Right <input id="hwOk" type="number" inputmode="numeric" min="0" max="50" value=""></label><label>Out of <input id="hwN" type="number" inputmode="numeric" min="1" max="50" value="10"></label>
      <label>Note <input id="hwNote" maxlength="80" placeholder="e.g. Week 1 Tuesday worksheet"></label><button class="small-btn ok" id="hwAdd">＋ Add score</button></div>
    ${rep.length ? `<table class="skills"><tr><th>Skill (paper)</th><th>Sheets</th><th>Right</th></tr>${rep.map(([id, b]) => { const pc = Math.round(100 * b.ok / b.n);
      return `<tr><td>${esc((SKILLS[id] || {}).label || id)}</td><td>${b.k}</td><td>${pc}% ${pc < 70 ? '🎯' : pc >= 85 ? '💪' : ''}</td></tr>`; }).join('')}</table>
      <p class="muted">🎯 below 70% on paper: the app gives that skill a little more practice. 💪 85% or more.</p>` : '<p class="muted">No paper scores yet. Add one after checking a worksheet.</p>'}
    ${hw.length ? `<p class="muted">Latest: ${hw.map(x => `${esc(x.date)} ${esc((SKILLS[x.skill] || {}).label || x.skill)} ${x.ok}/${x.n}`).join(' · ')}</p>` : ''}</div>`;
}
(() => { const prevRP = renderParent; renderParent = function () {
  const r = prevRP.apply(this, arguments);
  try {
    const after = $('#grCard') || [...document.querySelectorAll('#parentBody .card')].find(c => c.querySelector('#sName'));
    if (after && !$('#planCard')) after.insertAdjacentHTML('afterend', planCard());
    const redraw = () => { const c = $('#planCard'); if (c) { c.outerHTML = planCard(); wire(); } };
    const wire = () => {
      $('#plOn').onchange = () => { S.planOn = $('#plOn').checked; S.settingsT = Date.now(); saveAll(); redraw(); };
      $('#plBack').onclick = () => { S.planOffset = Math.min(12, (+S.planOffset || 0) + 1); S.settingsT = Date.now(); saveAll(); redraw(); };
      $('#plFwd').onclick = () => { S.planOffset = Math.max(0, (+S.planOffset || 0) - 1); S.settingsT = Date.now(); saveAll(); redraw(); };
      document.querySelectorAll('[data-chk]').forEach(b => b.onclick = () => openCheck(+b.dataset.chk));
      $('#hwAdd').onclick = () => { const ok = Math.round(+$('#hwOk').value), n = Math.round(+$('#hwN').value);
        if (!(n >= 1 && n <= 50) || !(ok >= 0 && ok <= n) || $('#hwOk').value === '') { alert('Enter how many were right and out of how many (1–50).'); return; }
        addHomework($('#hwSkill').value, ok, n, $('#hwNote').value.trim()); redraw(); };
    };
    wire();
  } catch (e) { console.error(e); }
  return r; }; })();

// Both devices: keep every check part and homework entry from either side.
if (typeof mergeProgress === 'function') { const prevM = mergeProgress; mergeProgress = function (L, R) { const out = prevM.apply(this, arguments);
  out.homework = unionBy(L.homework, R.homework, x => x.t + ':' + x.skill).sort((a, b) => a.t - b.t).slice(-300);
  out.planChecks = {}; [1, 2, 3].forEach(p => { const a = (L.planChecks || {})[p], b = (R.planChecks || {})[p]; if (!a && !b) return;
    const parts = Object.assign({}, (b || {}).parts); Object.entries((a || {}).parts || {}).forEach(([k, v]) => { if (!parts[k] || (v.t || 0) > (parts[k].t || 0)) parts[k] = v; });
    const o = {parts}; const n = PLAN_CHECKS[p].length; if (PLAN_CHECKS[p].every(c => parts[c.id])) o.pass = PLAN_CHECKS[p].every(c => parts[c.id].pass);
    o.t = Math.max((a || {}).t || 0, (b || {}).t || 0); out.planChecks[p] = o; });
  return out; }; }
