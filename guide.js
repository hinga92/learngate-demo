/* In-app User guide + About (Grown-ups area). */
'use strict';
const APP_VERSION = '3.2';
const APP_DATE = 'November 2026';
const APP_DEVELOPER = 'the Learning Gate team';
const MASCOT = () => (typeof S !== 'undefined' && S.mascotName) || 'Gigi';

const GUIDE = [
  ['What Learning Gate is', `
    <p>Learning Gate keeps Ava's tablet and iPad on a learning screen until she answers a few Grade 1 questions or reads a real book. Then it unlocks a set amount of play time.</p>
    <ul><li><b>Learning Gate app</b> on her tablet and iPad: questions, Gigi's Stories, the bedtime story, reading, challenges, the lock, Help and study calls.</li>
    <li><b>Grown-ups area</b> (this area, behind your PIN): settings, progress cards and parent controls.</li>
    <li><b>Parent dashboard</b> on Dad's iPhone Home Screen: progress and remote control.</li>
    <li><b>Learning Gate progress Sheet</b> (Google, the parent's Google account): stores progress, passes remote commands, sends the Sunday email.</li></ul>
    <p>Questions follow the Grade 1 study plan and the class teacher's class work. Skills she finds hard come up more often, and each skill has its own level (see "Levels").</p>`],
  ['Installing and updating', `
    <p>The project lives on the Mac in <b>~/Automation-Projects/LearnGate</b> (backed up to GitHub, see "Backup"). Connect the device by USB and unlock it.</p>
    <p><b>Tablet:</b></p><pre>cd ~/Automation-Projects/LearnGate && bash install_on_tablet.sh</pre>
    <p><b>iPad:</b></p><pre>cd ~/Automation-Projects/LearnGate && bash install_on_ipad.sh</pre>
    <ul><li>First launch: set the PIN, then tap <b>Fix</b> on any item in Tablet setup.</li>
    <li>After installing, turn off USB debugging on the tablet (Settings → Developer options).</li>
    <li>The iPad build stops opening after 7 days: run the iPad command again. Progress is kept.</li>
    <li>Building needs the file <b>secrets.js</b> (the Sheet link and password). It is on the Mac but never on GitHub; on a new computer copy <b>secrets.example.js</b> to <b>secrets.js</b> and fill it in.</li></ul>`],
  ["Ava's day", `
    <ol><li>She taps <b>🚀 Let's learn!</b> Each question is read aloud. (Since 3.0, signs and dashes are read as words: "8 + 2 = 10" is read "8 plus 2 equals 10", "kan-ga-roo" as "kan, ga, roo", and the choice she taps is not spoken over the question.) A wrong first try gives a hint; a second miss shows the answer and brings the skill back later.</li>
    <li>The reward screen shows her score and the minutes earned. <b>Let's play!</b> opens the apps you allowed, with a countdown.</li>
    <li>When time runs out, the tablet comes back here and locks again.</li></ol>
    <ul><li>Defaults: 5 questions earn 20 minutes, up to 90 minutes a day (change in Rules). When the day's play is used up, home says "Want to keep learning? Ask a grown-up" (see "More play time today").</li>
    <li><b>Rest time</b> (default 8 pm–7 am): learning and play are closed; Help and the bedtime story still work.</li>
    <li><b>🔊☀️</b> lets her change volume (up to your limit) and brightness.</li>
    <li><b>🆘 Help</b> works on every screen, even locked or at rest time. On the iPad it opens <b>FaceTime</b> (video, or audio only; set the FaceTime address in the Help button card).</li>
    <li><b>⚙ Grown-ups</b> (top-right of home): hold it for about 1 second, then enter the PIN.</li>
    <li><b>🔑 Grown-up key</b> (bottom-left on questions, stories, reading, challenges and results): press and hold it, enter the PIN, then choose Open Grown-ups, Stop and go home, Let her play now, or Parent mode. Progress so far is kept.</li></ul>`],
  ['More play time today ("let her keep learning")', `
    <p>If she wants to keep learning after the daily limit, give her more minutes <b>to earn</b>, not free play:</p>
    <ul><li><b>Here:</b> the card <b>📚 Let her earn more play time today</b> at the top of Grown-ups → +30 or +60.</li>
    <li><b>From the iPhone dashboard:</b> Remote control → <b>📚 +30 / +60 min to earn</b> (asks your PIN).</li></ul>
    <p>She sees "Dad says you can keep learning!", <b>Let's learn</b> comes back, and questions or <b>I read a book</b> earn play again until the extra minutes are used. Today only; rest time still applies. Sending it to both devices does not double it. (<b>🎁 +15 / +30 min play</b> on the dashboard still gives play time without learning.)</p>`],
  ["Gigi's Stories (sight-word books)", `
    <p><b>📖 Gigi's Stories</b> (home screen) is a series of 12 short books, <i>Gigi's Adventures</i>, with simple animations. Each book adds 2–4 new sight words from the class teacher's list and the Dolch lists. Since 3.2, books 7–12 follow the 12-week plan: sh, ch, th and wh, short sentences and capitals (books 7–10), then magic e and story questions (books 11–12).</p>
    <ol><li><b>Warm-up:</b> she taps the new words (and up to 3 of her own learning words) to hear them.</li>
    <li><b>Read with Gigi:</b> on each page Gigi reads first while the words light up, then Ava repeats it into the microphone. Words turn green as she reads. She can tap any word to hear it. After 3 tries she always moves on.</li>
    <li><b>After the book:</b> two story questions and a "find the word" game.</li></ol>
    <ul><li>The first time she finishes a book she wins a trophy (counts toward treats). The next book opens when she reads about 85% of the words right on her first try, or after two reads.</li>
    <li><b>⭐ Read by myself</b> (after the first read): she reads first and can tap <b>Help me</b>. A good solo read earns the third star. Re-reads matter: a sight word counts as <b>known</b> only after she reads it by herself on 3 different days.</li>
    <li>Stories never unlock play time. Like challenges, they rest at bedtime unless "Allow challenges during rest time" is on.</li></ul>`],
  ['🗓️ 12-week plan, phase checks and paper homework (since 3.2)', `
    <p>Her 12-week study plan (Nov 23, 2026 – Feb 14, 2027) is in the app: Grown-ups → <b>🗓️ 12-week plan</b>.</p>
    <ul><li><b>Daily questions:</b> her report-card weights still come first. On top of that, this week's plan skills come up about twice as often, and the day's focus a little more (Mon phonics + sight words, Tue equations, Wed reading aloud, Thu make a ten + spelling, Fri writing).</li>
    <li><b>Sight words:</b> this week's words (and earlier words of the same phase she doesn't know yet) come up more in the sight-word questions. The card shows them, with ⭐ on words she knows.</li>
    <li><b>Repeat a week:</b> if a phase check isn't passed, tap <b>↩ Repeat last week</b>. The plan then runs one week behind the calendar. <b>↪ Back one repeat</b> undoes it. Untick "Follow the 12-week plan" to turn it off.</li>
    <li><b>🎯 Phase checks</b> (end of weeks 4, 8 and 12): open Phase 1, 2 or 3 and do the parts in any order. Tablet parts (adding within 10 in under 5 seconds, ending sounds, clapping, missing numbers, shapes, telling time) are checked by the app. For sight words and sentences she reads aloud and you tap ✅ or 🌱. For writing, retelling and explaining you decide. About 8 out of 10 on each part passes.</li>
    <li><b>📝 Paper homework:</b> after checking a worksheet, pick the skill (this week's skills have a ⭐), enter how many were right out of how many, and add a note. The card shows each skill's paper score. Under 70% (🎯) gives that skill a little more practice in the app.</li>
    <li>Homework scores and check results also appear on your phone dashboard (<b>📝 Paper homework &amp; plan checks</b>) and in the Sunday email.</li>
    <li>The plan is written for Grade 1, so it pauses if another grade is chosen.</li></ul>`],
  ['🎒 Grades (since 3.1)', `
    <ul><li><b>Kindergarten:</b> counting to 20, more and fewer, teen numbers, adding and taking away within 5, making 10, flat and solid shapes; letter sounds, rhymes, syllables, first sight words; science, social studies, arts and health questions for K.</li>
    <li><b>Grade 1:</b> adding and subtracting within 20, place value, time, shapes; phonics (short vowels, digraphs, magic e), sight words, story questions, building sentences.</li>
    <li><b>Grade 2:</b> within 100 and 1,000, even and odd, coins, arrays, skip-counting, measuring; prefixes and suffixes, synonyms and antonyms, irregular verbs and plurals, homophones, reading passages, punctuation.</li>
    <li><b>Grade 3:</b> multiplication and division facts, rounding, fractions on bars and number lines, area and perimeter, time to the minute, two-step word problems; context clues, figurative language, verb tenses, subject–verb agreement.</li>
    <li><b>Grade 4:</b> place value to a million, multi-digit multiplication, division with remainders, factors and primes, equivalent fractions, decimals, angles, unit conversions; Greek and Latin roots, progressive tenses, fragments and run-ons.</li>
    <li><b>Grade 5:</b> decimal operations, powers of 10, adding fractions with different denominators, multiplying fractions, 2-digit division, volume, the coordinate plane, order of operations; perfect tenses and longer reading passages.</li></ul>
    <p>Science, social studies, arts and health questions follow the California standards for each grade. <b>🏆 Challenges</b> only show the challenges that fit the grade. Ava is in <b>Grade 1</b>. Change the grade any time in Grown-ups → <b>🎒 Grade and sight words</b> (for example when she starts Grade 2). Her Grade 1 sight words and the class teacher's class list stay exactly as before.</p>`],
  ["Gigi's Stories: books for every grade", `
    <p><b>📖 Gigi's Stories</b> changes with the grade you chose. In Grade 1 the shelf shows <b>📚 My grade</b> (her sight-word books) and <b>🚀 Challenge</b> (Grade 2 stories and true-fact books, for when she is ready). From Grade 2 it shows three tabs: <b>⬇ Easier</b>, <b>📚 My grade</b> and <b>🚀 Challenge</b>, and the book that fits best has a <b>⭐ Just right</b> badge.</p>
    <ul><li><b>Kindergarten–Grade 1:</b> short sight-word books. Gigi reads each page first, then she repeats it (echo reading).</li>
    <li><b>Grades 2–3:</b> longer stories and true-fact books. She reads each page out loud into the microphone (Gigi can read it first), with "words to know" before the book and 3–5 questions after it. Grade 3 adds a quick check-in question halfway.</li>
    <li><b>Grades 4–5:</b> chapter-style books with headings, one paragraph a page, read silently or aloud. One <b>fluency page</b> is read into the microphone to measure accuracy and words per minute. Questions include main idea, inference, theme, vocabulary and <b>"Which sentence from the book shows that?"</b> evidence questions, with a <b>🔎 Look back</b> button.</li></ul>
    <p><b>Levels:</b> a book is "just right" when about 80% of the questions are right on the first try and about 95% (Grade 2) or 90% (Grades 3–5) of the words are read correctly. Then the next level opens. After two hard books in a row, an easier book is suggested. She can always choose any book and re-read. Grown-ups → <b>📖 Gigi's Stories: reading level</b> shows the level, the last books, scores and reading speed.</p>`],
  ['Sight words and levels', `
    <p><b>Sight words:</b> every sight word she meets is tracked: <i>new → learning → known</i>. A word is <b>known</b> after she reads it <b>by herself</b> on 3 different days, then it comes back for review after 1, 3, 7, 14 and 30 days. Her learning and tricky words come back in the story warm-ups, the word game, the daily sight-word questions and the read-aloud sentences.</p>
    <p><b>Levels:</b> each skill has level 1–3. She moves up after <b>85%</b> or more right on the first try over her last 8–10 answers at that level, and back down below <b>60%</b>, so one lucky or unlucky answer never changes it.</p>
    <p>The <b>📖 Gigi's Stories &amp; sight words</b> and <b>📈 Levels</b> cards (Grown-ups) show books read, words known / learning / tricky, and every skill with its level and last-10 score (⬆️ ⬇️ = changed this week).</p>`],
  ['🌙 Bedtime story', `
    <p>One calm, read-to-me story each night to build a bedtime routine. The <b>🌙 Bedtime story</b> button shows on home only during <b>story time</b>: 7:30–8:45 pm unless you change it (it works even during rest time).</p>
    <ul><li>Gigi reads it aloud with the words lighting up, on a dark starry screen; the screen dims while it plays and goes back afterwards. Pause, back and next buttons are there.</li>
    <li>One new story per night (14 stories in rotation). <b>Hear it again</b> is allowed but counts once.</li>
    <li>Its own <b>🌙 nights in a row</b> streak. It never unlocks play time.</li>
    <li>Change story time or turn it off in the <b>🌙 Bedtime story</b> card (Grown-ups): set <b>Story time from … until …</b> to end around her bedtime, then Save. Both devices get the new times.</li></ul>`],
  ['📚 I read a book (real books)', `
    <p>A timer (15 minutes by default) for a real paper book.</p>
    <ol><li><b>Which book?</b> Tap a book from her shelf (the last 8 books she read) or <b>＋ A new book</b> and type the title and author (a grown-up can help).</li>
    <li>The book shows under the clock while she reads. Pause and Stop are there.</li>
    <li>When time is up, check the title and author and confirm with the PIN.</li>
    <li><b>Finished the book early?</b> Tap <b>✅ I finished my book</b> under the clock. A grown-up enters the PIN, checks the title and the minutes she actually read, and taps Done. She still gets the full play reward.</li>
    <li><b>Read a book without the timer?</b> On the start screen, pick the book and tap <b>📝 Already read one? Log it</b>. A grown-up enters the PIN and types the minutes.</li></ol>
    <p><b>If nobody checked when the time was up,</b> the timer waits at 0:00 on that device. Tap <b>Which book was it?</b> to pick the book she read, then confirm; or tap <b>✖ Start over</b> (twice) to clear it without play time. Timers left for more than 12 hours are cleared by themselves. Each device keeps its own timer.</p>
    <p>She gets 3 stars and 15 minutes of play (unless the day's play is used up or it is rest time). The book is remembered for one-tap re-reads and shows with its author on the dashboard and in the Sunday email.</p>
    <p><b>Reading tutor</b> (read-aloud questions): <b>🔊 Listen first</b> highlights each word as it is spoken; tap any word to hear it; words turn green as she reads aloud.</p>`],
  ['🏠 Home library (our paper books)', `
    <p>Our own paper books are in the app as shelves: a sample shelf of classic tales (in the real app: the family's own book series). Only the titles are in the app, never the books' text.</p>
    <ol><li>In <b>📚 I read a book</b>, the next book from each shelf is shown under <b>From our home library</b>. Tap it, then start the timer.</li>
    <li>When the time is up, choose <b>who read it</b>: by herself, or together.</li>
    <li><b>Talk about it:</b> Gigi asks 3 short questions aloud (who, where, the problem, the ending, her favourite part, or the book's theme). From Grade 3 (since 3.1) the questions grow up: how the main character changed, the lesson, who is telling the story, and "find the part that shows it". She answers out loud; a grown-up taps <b>👍 Got it</b> or <b>🤔 Needed help</b>. There is no pass or fail, and play time is never held back. <b>Skip talking today</b> is always there.</li>
    <li><b>Phonics books</b> she read by herself end with a 3-round <b>sound game</b> on that book's vowel sound.</li></ol>
    <ul><li>Each book moves through <b>To read → 🤝 Read together → ⭐ Read by herself → 🏅 Mastered</b>. Mastered = read by herself twice and she understood it (read-together books: twice together).</li>
    <li>Grown-ups → <b>🏠 Home library</b>: tap a status to change it, ✎ to add your own question for a book, and <b>＋ Add a book</b> for any other paper book (tick "read together" for harder or chapter books when she is ready).</li>
    <li>Home library progress is shared between her devices and shows on the dashboard and in the Sunday email.</li></ul>`],
  ['Feelings check-in and __MASCOT__', `
    <p>Once a day the app asks "How are you feeling today?" (happy, calm, tired, sad, mad, worried). She can skip it. If she feels sad, mad or worried, she gets a kind reply and buttons to talk to Dad or call Mom or Grandma. It never blocks learning.</p>
    <p><b>__MASCOT__</b> grows with learning days: egg (0), hatchling (1), chick (3), baby owl (6), reading owl (10), graduate owl (16), star owl (25), royal owl (40). It only grows; it never gets sad or shrinks.</p>`],
  ['Challenges, trophies and treats', `
    <p>Challenges are 10-question rounds that win trophies; they never unlock play time. A trophy needs 8 of 10 right on the first try (9 of 10 from level 4). Gigi's Stories also win a trophy the first time each book is finished.</p>
    <ul><li>Every 10 trophies earns a treat from Dad (about $5). Mark it given in <b>Trophies and treats</b>.</li>
    <li><b>Car mode</b> reads every question aloud and repeats it. Turn on "Allow challenges during rest time" for evening car rides.</li></ul>`],
  ['Study calls with Mom and Grandma', `
    <ol><li>Ava taps <b>📞 Study call</b>, then WhatsApp Mom, WhatsApp Grandma or Join our Google Meet.</li>
    <li>In WhatsApp she taps the 🎥 video button.</li>
    <li>She shares her screen. Tablet: Share screen → <b>Entire screen</b> → Start now. iPad: Share screen → Start Broadcast.</li>
    <li>She presses Home to come back; the call keeps going.</li></ol>
    <ul><li>Calls are never cut off by the lock. The study call closes itself 2 minutes after the call ends. Games stay locked.</li>
    <li>iPad: turn off Guided Access first. On her WhatsApp: Privacy → Calls → <b>Silence unknown callers</b>.</li></ul>`],
  ["Dad's iPhone dashboard and remote control", `
    <p>The Learning Gate icon on Dad's iPhone opens straight to her progress: each device's status, trophies, stars, play time, today's feeling, the last 7 days, <b>📖 Reading &amp; sight words</b>, <b>📈 Levels</b> and recent activity.</p>
    <ul><li><b>Personal link:</b> the icon is a private link, so there is no secret to type. Anyone with the link can see progress, so keep it to yourself. If a phone is lost, tap <b>🔗 Make a new link</b> at the bottom (the old one stops working).</li>
    <li><b>Add it to a phone:</b> open the dashboard, tap <b>📲 Get my Home Screen link</b> → Copy, open the <b>Safari</b> app, paste and go, then Share → Add to Home Screen. (Opened from an icon, there is no Share button.)</li>
    <li><b>Remote control</b> asks your parent PIN once per visit: +15 or +30 minutes of play, <b>📚 +30 / +60 min to earn</b>, Lock now, quick messages or your own message. ✅ means the device received it. 5 wrong PINs lock commands for a while.</li>
    <li>The tablet checks about once a minute, even during play. The iPad checks while Learning Gate is open.</li></ul>`],
  ['Google Sheet and weekly email', `
    <p>The <b>Learning Gate progress</b> Sheet (the parent's Google account) is the go-between; you never need to open it. Don't delete or rename its <b>Sessions</b> tab, and keep sharing Restricted.</p>
    <p>Every Sunday at 5 pm, three separate emails go to the family: learning days, questions, trophies, real books (with authors), play earned, <b>🌙 bedtime stories</b>, <b>📖 reading &amp; sight words</b> (books, new words learned, tricky words) and <b>📈 levels</b> (moved up, easier for now, finding it hard).</p>
    <p><b>One progress on every device:</b> the tablet and iPad share stars, trophies, levels, sight words, story books, real books, bedtime nights and settings through the Sheet. They catch up when the app opens and after every activity; both devices need internet.</p>`],
  ['Sharing with a teacher (demo edition)', `
    <p>A <b>demo edition</b> can be shared with teachers and reviewers. It has a made-up child ("Ava") with sample progress, no family names, numbers or links, no real names, and no syncing. It runs in any web browser, needs no account, and nothing done in it is sent anywhere. The grown-ups PIN in the demo is 1234.</p>
    <ul><li><b>The link to send:</b> <b>this website</b> (a free public website on GitHub Pages; anyone with the link can open it).</li>
    <li><b>Reading aloud</b> works there too: allow the microphone when asked (best in Safari or Chrome).</li>
    <li><b>After changing the app,</b> update the demo website from the Mac (it rebuilds, checks and publishes; live in about a minute):</li></ul>
    <pre>cd ~/Automation-Projects/LearnGate && bash tools/publish_demo.sh</pre>
    <ul><li>It stops if any family detail would end up in the demo. Only the demo goes to the public website; the real app stays in the private backup.</li>
    <li>There is also a private copy on your Claude page ("Learning Gate Demo"), which only people with a Claude account you share it with can open.</li>
    <li>The demo can't lock a tablet, make calls or show the parent dashboard; those need the installed app.</li></ul>`],
  ['Backup', `
    <ul><li>The whole project is backed up to the private GitHub repository <b>LearnGate</b> every 10 minutes when something changed (a background job on the Mac). The Sheet password is never sent there.</li>
    <li>Log on the Mac: <b>~/Library/Logs/learngate-backup.log</b>. Pause and resume commands are in the project's README.</li></ul>`],
  ['Safety and privacy', `
    <ul><li>No ads, no tracking, no outside analytics. Progress stays in the family Google account.</li>
    <li>The Sheet only answers devices that know its password. Remote commands (unlock, lock, messages) also need a parent PIN, checked by the Sheet, with a lockout after 5 wrong tries. At most 8 devices can connect.</li>
    <li>The Sunday email can only be sent on Sunday afternoon (once), and the test email only by you from the Apps Script editor, so nobody else can use the Sheet to send emails.</li>
    <li>The app only runs its own code (a content security policy blocks anything injected), and settings shared between devices are checked before use.</li>
    <li>A security test that attacks a local copy of the Sheet script can be run on the Mac at any time: <b>node tools/security_test.js</b>.</li>
    <li>USB debugging lets anyone with a cable read the tablet's app data: keep it off except while installing updates.</li>
    <li>The app shows only its own pages; outside web pages are blocked.</li>
    <li>The PINs are stored scrambled, with a lockout after 5 wrong tries.</li>
    <li>Help always works. The app rewards and never punishes.</li>
    <li>If a device is lost: make a new dashboard link, change the secret in the Sheet's script and in secrets.js, redeploy, and install a new app build.</li></ul>`],
  ['Troubleshooting', `
    <ul><li><b>iPad app won't open:</b> run the iPad install command again (7-day limit).</li>
    <li><b>Can't open Grown-ups:</b> hold ⚙ (top-right of home) for about 1 second.</li>
    <li><b>Dashboard asks for the secret:</b> you opened an old icon. Use the personal link (see the dashboard section).</li>
    <li><b>Dashboard shows no devices:</b> she needs to finish one session; check the internet.</li>
    <li><b>Remote command shows ⏳:</b> tablet, wait a minute; iPad, open Learning Gate.</li>
    <li><b>Can't share screen:</b> tablet, choose Entire screen; iPad, turn off Guided Access.</li>
    <li><b>Read-aloud or stories never hear her:</b> allow the microphone in Tablet setup (iPad: Settings → Learning Gate → Microphone and Speech Recognition).</li>
    <li><b>No 🌙 button:</b> it only shows around bedtime, and can be switched off in the 🌙 Bedtime story card.</li>
    <li><b>You need the tablet:</b> Right now → Parent mode.</li></ul>`]
];

addScreen('guide', `<header class="playhead"><button class="small-btn" id="gdBack">⬅ Back to Grown-ups</button><span class="muted">Learning Gate ${APP_VERSION}</span></header>
  <div class="guidewrap"><h1>📖 Learning Gate user guide</h1><p class="muted">Tap a topic to open it.</p><div id="gdBody"></div>
  <div class="card aboutcard"><h3>ℹ️ About</h3><p>Learning Gate ${APP_VERSION} (${APP_DATE})<br>Developed by <b>${APP_DEVELOPER}</b> for Ava</p></div></div>`);
function renderGuide() {
  const mm = esc(MASCOT()), fill = t => t.replace(/__MASCOT__/g, mm);
  $('#gdBody').innerHTML = GUIDE.map((g, i) => `<details class="gd" ${i === 0 ? 'open' : ''}><summary>${esc(fill(g[0]))}</summary><div class="gdtext">${fill(g[1])}</div></details>`).join('');
  $('#gdBack').onclick = () => renderParent(false);
  show('guide'); $('#guide').scrollTop = 0;
}

const _renderParentGd = renderParent;
renderParent = function () {
  const r = _renderParentGd.apply(this, arguments);
  const body = $('#parentBody');
  if (body && !$('#gdCard')) {
    body.insertAdjacentHTML('afterbegin', `<div class="card" id="gdCard"><div class="row" style="justify-content:space-between;align-items:center"><span><b>📖 New here?</b> Everything the app does, step by step.</span><button class="small-btn ok" id="gdOpen">📖 User guide</button></div></div>`);
    body.insertAdjacentHTML('beforeend', `<div class="card aboutcard" id="aboutCard"><h3>ℹ️ About</h3><p>Learning Gate ${APP_VERSION} (${APP_DATE})<br>Developed by <b>${APP_DEVELOPER}</b> for Ava</p><button class="small-btn" id="gdOpen2">📖 User guide</button></div>`);
    const go = () => { if (saveParent()) renderGuide(); };
    $('#gdOpen').onclick = go; $('#gdOpen2').onclick = go;
  }
  return r;
};
