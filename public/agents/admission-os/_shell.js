// Admissions OS — NAO (Narrative Anchor Object) persistence & schema
// Shared across every agent page. Uses localStorage with a versioned key.

const NAO_KEY = 'admissions_os_nao_v1';
const PROGRESS_KEY = 'admissions_os_progress_v1';

// Default NAO shape — matches what each agent writes/reads
const EMPTY_NAO = {
  version: 0,
  createdAt: null,
  updatedAt: null,
  applicant: {
    name: null,
    background: null,
    currentRole: null,
    yearsExperience: null,
  },
  goals: {
    shortTerm: null,
    longTerm: null,
    whyMba: null,
  },
  schools: [],
  themes: [],
  claims: [],
  voiceFingerprint: {
    register: null,
    sentenceLength: null,
    vocabTier: null,
    quirks: [],
  },
  constraints: {
    applicationRound: null,
    gmat: null,
    wordBudgetUsed: 0,
  },
  documents: {
    essays: [],
    resume: null,
    recLetters: [],
  },
};

// ---------- read / write ----------
function loadNAO() {
  try {
    const raw = localStorage.getItem(NAO_KEY);
    if (!raw) return structuredClone(EMPTY_NAO);
    const parsed = JSON.parse(raw);
    // Guard against malformed or pre-v1 data
    if (!parsed || typeof parsed !== 'object' || !('version' in parsed)) {
      return structuredClone(EMPTY_NAO);
    }
    return parsed;
  } catch (e) {
    console.warn('NAO load failed:', e);
    return structuredClone(EMPTY_NAO);
  }
}

function saveNAO(nao) {
  nao.updatedAt = new Date().toISOString();
  nao.version = (nao.version || 0) + 1;
  localStorage.setItem(NAO_KEY, JSON.stringify(nao));
  document.dispatchEvent(new CustomEvent('nao-updated', { detail: nao }));
  return nao;
}

function clearNAO() {
  localStorage.removeItem(NAO_KEY);
  localStorage.removeItem(PROGRESS_KEY);
  document.dispatchEvent(new CustomEvent('nao-updated', { detail: structuredClone(EMPTY_NAO) }));
}

// ---------- progress tracking ----------
// Each step logs itself as completed so the stepper can render checkmarks.
function getProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : { completed: [] };
  } catch {
    return { completed: [] };
  }
}

function markStepDone(stepId) {
  const p = getProgress();
  if (!p.completed.includes(stepId)) p.completed.push(stepId);
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  document.dispatchEvent(new CustomEvent('progress-updated', { detail: p }));
}

function isStepDone(stepId) {
  return getProgress().completed.includes(stepId);
}

// ---------- NAO panel renderer ----------
function renderNAOPanel(container) {
  const nao = loadNAO();
  const isEmpty = nao.version === 0;

  if (isEmpty) {
    container.innerHTML = `
      <div class="nao-head">
        <span class="nao-title">Narrative Anchor</span>
        <span class="nao-ver">v0 · empty</span>
      </div>
      <div class="nao-empty">
        The NAO is the applicant's story in structured form. Every agent reads from it and writes back to it.
        <br><br>
        Complete the intake and run the Strategy agent to populate it.
      </div>`;
    return;
  }

  const schoolChips = nao.schools.length
    ? nao.schools.map(s => `<span class="nao-chip">${escapeHTML(s)}</span>`).join('')
    : '<span class="nao-chip" style="opacity:0.5">none yet</span>';

  const themeChips = nao.themes.length
    ? nao.themes.map(t => `<span class="nao-chip">${escapeHTML(t)}</span>`).join('')
    : '<span class="nao-chip" style="opacity:0.5">—</span>';

  const claimsHTML = nao.claims.length
    ? nao.claims.slice(0, 5).map(c => `
        <div class="nao-claim">
          <div class="nao-claim-text">${escapeHTML(c.text)}</div>
          <div class="nao-claim-meta">${escapeHTML(c.evidence || 'no evidence yet')}</div>
        </div>`).join('')
    : '<div class="nao-empty" style="padding:4px 0">No claims yet.</div>';

  const more = nao.claims.length > 5 ? `<div class="nao-claim-meta" style="margin-top:4px">+${nao.claims.length - 5} more</div>` : '';

  container.innerHTML = `
    <div class="nao-head">
      <span class="nao-title">Narrative Anchor</span>
      <span class="nao-ver">v${nao.version} · ${nao.claims.length} claims</span>
    </div>
    <div class="nao-section">
      <div class="nao-section-head">Applicant</div>
      ${nao.applicant.name ? `<div class="nao-field"><span class="label">Name</span>${escapeHTML(nao.applicant.name)}</div>` : ''}
      ${nao.applicant.currentRole ? `<div class="nao-field"><span class="label">Role</span>${escapeHTML(nao.applicant.currentRole)}</div>` : ''}
      ${nao.applicant.yearsExperience ? `<div class="nao-field"><span class="label">Experience</span>${escapeHTML(nao.applicant.yearsExperience)} yrs</div>` : ''}
    </div>
    ${nao.goals.shortTerm || nao.goals.longTerm ? `
    <div class="nao-section">
      <div class="nao-section-head">Goals</div>
      ${nao.goals.shortTerm ? `<div class="nao-field"><span class="label">Short-term</span>${escapeHTML(nao.goals.shortTerm)}</div>` : ''}
      ${nao.goals.longTerm ? `<div class="nao-field"><span class="label">Long-term</span>${escapeHTML(nao.goals.longTerm)}</div>` : ''}
    </div>` : ''}
    <div class="nao-section">
      <div class="nao-section-head">Target schools <span class="count">${nao.schools.length}</span></div>
      <div>${schoolChips}</div>
    </div>
    <div class="nao-section">
      <div class="nao-section-head">Themes <span class="count">${nao.themes.length}</span></div>
      <div>${themeChips}</div>
    </div>
    <div class="nao-section">
      <div class="nao-section-head">Claims <span class="count">${nao.claims.length}</span></div>
      ${claimsHTML}${more}
    </div>
    ${nao.voiceFingerprint.register ? `
    <div class="nao-section">
      <div class="nao-section-head">Voice fingerprint</div>
      <div class="nao-field"><span class="label">Register</span>${escapeHTML(nao.voiceFingerprint.register)}</div>
      ${nao.voiceFingerprint.sentenceLength ? `<div class="nao-field"><span class="label">Avg sentence</span>${escapeHTML(nao.voiceFingerprint.sentenceLength)} words</div>` : ''}
    </div>` : ''}
  `;
}

// ---------- stepper renderer ----------
const STEPS = [
  { id: 'home',       href: 'index.html',         num: '·', name: 'Overview',          agent: 'Start here' },
  { id: 'intake',     href: '1-intake.html',      num: '1', name: 'Intake',            agent: '30 questions' },
  { id: 'strategy',   href: '2-strategy.html',    num: '2', name: 'Strategy',          agent: 'NAO v1' },
  { id: 'editor',     href: '3-editor.html',      num: '3', name: 'Essay editor',      agent: 'Story Architect · Editing' },
  { id: 'deep',       href: '4-deep-review.html', num: '4', name: 'Deep review',       agent: 'Scoring · Advisor' },
  { id: 'framework',  href: '7-framework.html',   num: '5', name: 'Framework gate',    agent: 'Unanchored claims' },
  { id: 'gaps',       href: '5-gap-analysis.html',num: '6', name: 'Gap analysis',      agent: 'Missing evidence' },
  { id: 'schools',    href: '6-comparison.html',  num: '7', name: 'School comparison', agent: 'Per-school fit' },
];

function renderStepper(container, activeId) {
  const progress = getProgress();
  const doneIds = new Set(progress.completed);

  const stepsHTML = STEPS.map((s, i) => {
    const isActive = s.id === activeId;
    const isDone = doneIds.has(s.id);
    const classes = ['step'];
    if (isActive) classes.push('active');
    if (isDone) classes.push('done');
    return `
      <a href="${s.href}" class="${classes.join(' ')}">
        <span class="step-num ${isDone && !isActive ? 'check' : ''}">${isDone && !isActive ? '' : s.num}</span>
        <span class="step-body">
          <span class="step-name">${s.name}</span>
          <span class="step-agent">${s.agent}</span>
        </span>
      </a>`;
  }).join('');

  container.innerHTML = `
    <div class="stepper-title">Journey</div>
    ${stepsHTML}
    <div class="stepper-footer">
      Prototype state is stored in this browser only. Reset clears the NAO and all progress.
      <button class="reset-btn" onclick="if(confirm('Clear all prototype state?')) { clearNAO(); location.reload(); }">Reset journey</button>
    </div>`;
}

// ---------- top bar renderer ----------
function renderTopBar(container, crumbs) {
  const crumbHTML = crumbs
    ? crumbs.map((c, i) => i === crumbs.length - 1 ? `<em>${escapeHTML(c)}</em>` : `<span>${escapeHTML(c)}</span><span class="sep">/</span>`).join(' ')
    : '';
  container.innerHTML = `
    <div class="brand">Admissions OS</div>
    <div class="crumbs">${crumbHTML}</div>
    <div class="top-actions">
      <a href="index.html">Overview</a>
    </div>`;
}

// ---------- shell mount ----------
// Usage in each page:
//   <body><div id="shell"></div> ... </body>
//   <script>mountShell({ activeStep: 'strategy', crumbs: ['Strategy', 'Generate NAO'] })</script>
function mountShell(opts) {
  const { activeStep, crumbs } = opts;

  const topbar = document.getElementById('topbar');
  const stepper = document.getElementById('stepper');
  const naoPanel = document.getElementById('nao-panel');

  if (topbar) renderTopBar(topbar, crumbs);
  if (stepper) renderStepper(stepper, activeStep);
  if (naoPanel) renderNAOPanel(naoPanel);

  // Re-render NAO panel whenever it updates
  document.addEventListener('nao-updated', () => {
    if (naoPanel) renderNAOPanel(naoPanel);
  });
  document.addEventListener('progress-updated', () => {
    if (stepper) renderStepper(stepper, activeStep);
  });
}

// ---------- utility ----------
function escapeHTML(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Simulated per-agent cost. Mirrors Section 8.3 of the project plan (warm cache).
function simulateAgentCall(agentName) {
  const costs = {
    'strategy':         { model: 'Sonnet 4.6', cold: 0.053, warm: 0.042 },
    'framework':        { model: 'Sonnet 4.6', cold: 0.030, warm: 0.011 },
    'story-fg':         { model: 'Haiku 4.5',  cold: 0.0053, warm: 0.0018 },
    'story-od':         { model: 'Sonnet 4.6', cold: 0.046, warm: 0.015 },
    'scoring':          { model: 'Sonnet 4.6', cold: 0.244, warm: 0.080 },
    'advisor':          { model: 'Sonnet 4.6', cold: 0.063, warm: 0.024 },
    'editing-fg':       { model: 'Haiku 4.5',  cold: 0.0045, warm: 0.0015 },
    'editing-od':       { model: 'Sonnet 4.6', cold: 0.074, warm: 0.024 },
    'gap-analysis':     { model: 'Sonnet 4.6', cold: 0.080, warm: 0.027 },
    'comparison':       { model: 'Sonnet 4.6', cold: 0.074, warm: 0.027 },
  };
  const c = costs[agentName] || { model: 'Sonnet 4.6', cold: 0.05, warm: 0.02 };
  // Assume 40% warm hit rate in this simulator
  const warm = Math.random() < 0.4;
  return {
    model: c.model,
    cost: warm ? c.warm : c.cold,
    cacheHit: warm,
  };
}
