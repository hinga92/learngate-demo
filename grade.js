/* Grade (K–5) and the class sight-word list, set in the Grown-ups area.
   Ported from the family beta (setup.js) without its setup wizard. Ava starts in Grade 1:
   raising the grade opens the next grade's skills, sight words and story shelf. */
'use strict';
const GRADES = [['K', 'Kindergarten', '🌱'], ['1', 'Grade 1', '🌿'], ['2', 'Grade 2', '🌳'], ['3', 'Grade 3', '🍎'], ['4', 'Grade 4', '🚀'], ['5', 'Grade 5', '🎓']];
// Grade or class words changed: rebuild the sight-word levels (stories.js keeps a set of all words it can track).
let gradeSig = '';
function applyGrade() {
  gradeSig = S.grade + '|' + (S.classWords || []).join(',');
  buildSight(S.grade, S.classWords);
  if (typeof SIGHT_SET !== 'undefined') [].concat(...SIGHT).forEach(x => SIGHT_SET.add(x.toLowerCase()));
}
applyGrade();
// The grade can also arrive from the other device through sync: rebuild when it differs.
(() => { const prev = renderHome; renderHome = function () {
  if (S.grade + '|' + (S.classWords || []).join(',') !== gradeSig) applyGrade();
  return prev.apply(this, arguments); }; })();

// ---- Grown-ups card: grade and sight words ----
(() => {
  const card = () => `<div class="card" id="grCard"><h3>🎒 Grade and sight words</h3>
    <label>Grade <select id="grSel">${GRADES.map(([g, n]) => `<option value="${g}" ${S.grade === g ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
    <p>Class sight-word list from the teacher (these words come first, then the Dolch words for the grade). Leave it empty in Grade 1 to keep the class teacher's list.</p>
    <textarea id="grCW" rows="3" class="wzarea" placeholder="e.g. the, and, said, come, here, play">${esc((S.classWords || []).join(', '))}</textarea>
    <p class="muted">Changing the grade changes which skills, challenges and story shelves she gets, and where new skills start. Skills she already practised keep their level.</p></div>`;
  const prevRP = renderParent;
  renderParent = function () {
    const r = prevRP.apply(this, arguments);
    const rules = [...document.querySelectorAll('#parentBody .card')].find(c => c.querySelector('#sName'));
    if (rules && !$('#grCard')) rules.insertAdjacentHTML('beforebegin', card());
    return r;
  };
  const prevSP = saveParent;
  saveParent = function () {
    if ($('#grSel')) { S.grade = GRADES.some(g => g[0] === $('#grSel').value) ? $('#grSel').value : '1'; S.classWords = uniqWords($('#grCW').value); applyGrade(); }
    return prevSP.apply(this, arguments);
  };
})();
