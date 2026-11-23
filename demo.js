/* Learning Gate DEMO edition only (added by tools/build_demo.py, never in the real app).
   Fictional child "Ava", grown-ups PIN 1234, sample progress, no syncing, bedtime story always open.
   Everything stays in this browser; "Reset demo" starts over. */
'use strict';
(() => {
  const FLAG = 'lg_demo_v1';
  let seeded = false; try { seeded = !!localStorage.getItem(FLAG); } catch (e) {}
  const day = n => { const d = new Date(); d.setDate(d.getDate() - n); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const ago = (n, h) => { const d = new Date(); d.setDate(d.getDate() - n); d.setHours(h, 15, 0, 0); return d.getTime(); };

  if (!seeded) {
    Object.assign(S, {childName: 'Ava', pin: makePin('1234'), bedtimeStart: '', bedtimeEnd: '', mascotName: 'Gigi', helpName: 'Mom', helpPhone: '',
      challengesAtRest: true, deviceName: 'Demo', deviceRole: 'child', syncUrl: '', syncKey: '', settingsT: Date.now()});
    // sample progress: a few days of practice with some strong and some weaker skills
    const hist = (n, ok) => Array.from({length: n}, (_, i) => (i * 7 % 10) < ok ? 1 : 0);
    const mk = (n, ok, box) => { const h = hist(n, ok); return {seen: n, correct: h.reduce((a, b) => a + b, 0), box, streak: 1, last: ago(1, 17), hist: h.slice(-20)}; };
    P.skills = Object.assign(P.skills || {}, {m_add10: mk(10, 9, 4), m_doubles: mk(12, 9, 4), m_sub20: mk(10, 6, 2), m_bond: mk(8, 8, 3),
      r_sight: mk(9, 6, 2), r_th: mk(8, 7, 3), r_comp: mk(8, 6, 2), r_cvc: mk(6, 6, 3), w_caps: mk(6, 5, 3), s_phys: mk(5, 3, 1)});
    P.sessions = [3, 2, 1].map((d, i) => ({date: day(d), t: ago(d, 16), n: 5, ok: 4 - (i % 2), dur: 240, mins: 20, dev: 'Demo',
      skills: [{skill: 'm_add10', first: true}, {skill: 'r_sight', first: i !== 1}, {skill: 'm_sub20', first: false}, {skill: 'r_comp', first: true}, {skill: 'w_caps', first: true}]}));
    P.stars = 64; P.sessionCount = 3;
    P.trophies = [{ch: 'doubles', level: 1, ok: 9, n: 10, medal: 'silver', t: ago(2, 17)}, {ch: 'gigistory', level: 1, ok: 18, n: 20, medal: 'silver', t: ago(1, 18)}];
    P.ch = {doubles: {level: 2, tries: 1, best: 9}};
    P.words = {}; const W = (w, ok, miss, days) => { P.words[w] = {seen: ok + miss, ok, miss, help: 0, days, stage: days.length >= 3 ? 0 : 0, due: days.length >= 3 ? Date.now() + 864e5 : 0, last: ago(1, 18), knownT: days.length >= 3 ? ago(1, 18) : 0}; };
    ['look', 'see', 'can', 'and'].forEach(w => W(w, 5, 0, [day(3), day(2), day(1)]));
    ['play', 'we', 'like', 'to', 'come'].forEach(w => W(w, 2, 0, [day(1)]));
    ['said', 'they', 'here'].forEach(w => W(w, 1, 2, []));
    P.stories = {g1: {stars: 2, reads: 1, best: 90, last: ago(1, 18)}};
    P.books = [{date: day(2), t: ago(2, 19), mins: 15, title: 'The Little Red Hen', author: ''}];
    P.bedtime = {nights: [day(2), day(1)], streak: 2, best: 2, count: 2};
    P.moodAsked = ''; P.usage = {};
    saveAll();
    try { localStorage.setItem(FLAG, '1'); } catch (e) {}
  }

  // the bedtime story can be tried at any time in the demo
  if (typeof bedtimeOpen === 'function') bedtimeOpen = () => S.bedtimeStories !== false;

  // small demo badge: PIN + reset
  const css = document.createElement('style');
  css.textContent = '.demobadge{position:fixed;right:10px;bottom:10px;z-index:60;background:#3b2a00;color:#fff;border-radius:999px;padding:6px 8px 6px 14px;font:600 14px system-ui,sans-serif;display:flex;gap:8px;align-items:center;box-shadow:0 2px 8px #0003;opacity:.9}' +
    '.demobadge button{font:inherit;border:0;border-radius:999px;padding:4px 10px;background:#fff3;color:#fff;cursor:pointer}';
  document.head.appendChild(css);
  const b = document.createElement('div'); b.className = 'demobadge';
  b.innerHTML = '🧪 Demo · Grown-ups PIN <b>1234</b><button id="demoReset" title="Start the demo over">↺ Reset</button>';
  document.body.appendChild(b);
  const rb = b.querySelector('#demoReset'); let armed = 0;
  rb.onclick = () => { if (Date.now() - armed > 4000) { armed = Date.now(); rb.textContent = 'Tap again to reset'; setTimeout(() => { rb.textContent = '↺ Reset'; }, 4000); return; }
    try { localStorage.clear(); } catch (e) {} location.reload(); };

  // Hosted pages can't show pop-up dialogs: show messages as a small note instead, and treat questions as "yes" (demo data only).
  const note = document.createElement('div'); note.className = 'demonote'; document.body.appendChild(note);
  css.textContent += '.demonote{position:fixed;left:50%;top:14px;transform:translateX(-50%);z-index:70;background:#3b2a00;color:#fff;border-radius:14px;padding:10px 16px;font:500 16px system-ui,sans-serif;max-width:90vw;display:none;box-shadow:0 4px 14px #0004}';
  // Inside a hosted frame (the Claude page) dialogs and the microphone are blocked; on a normal website (GitHub Pages) they work.
  let framed = true; try { framed = window.self !== window.top; } catch (e) {}
  if (framed) {
    let nt = null; window.alert = msg => { note.textContent = String(msg); note.style.display = 'block'; clearTimeout(nt); nt = setTimeout(() => { note.style.display = 'none'; }, 4000); };
    window.confirm = () => true;
    // no microphone here: stories use "I read it!" and read-aloud questions are left out
    Bridge.canListen = () => false;
  }

  // a first guide topic that explains the demo
  if (typeof GUIDE !== 'undefined') GUIDE.unshift(['🧪 About this demo', `
    <p>This is a <b>demo edition</b> for teachers and reviewers. "Ava" is a made-up child with sample progress. Nothing you do here leaves this browser, and nothing is sent anywhere.</p>
    <ul><li><b>Grown-ups:</b> hold ⚙ (top-right of home) for about 1 second, PIN <b>1234</b>.</li>
    <li><b>Try:</b> 🚀 Let's learn, 📖 Gigi's Stories, 🌙 Bedtime story (open any time in the demo), 📚 I read a book, 🏆 Challenges, and the Grown-ups cards (📖 sight words, 📈 levels).</li>
    <li><b>Turn the sound on:</b> Gigi reads the questions and stories aloud.</li>
    <li><b>Reading aloud:</b> on the website, allow the microphone when asked and Gigi checks each word (works best in Safari or Chrome). Where the microphone isn't available, Ava taps "✅ I read it!" instead.</li>
    <li><b>Not in the demo:</b> locking the tablet and opening apps after play time, phone and study calls, and the parent dashboard. Those need the installed app.</li>
    <li><b>↺ Reset</b> (bottom-right) starts over with the sample progress.</li></ul>`]);
})();
