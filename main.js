/* ══════════════════════════════════════════════════════════
   AI BIZ PRODUCE 02 — main.js
   Computational Canvas + Glitch + Scroll + Works Gallery
   ══════════════════════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────────────────────
   VAULT DATA — decks, docs, PDFs, Google Slides, etc.
   To add: push a new object. url can be Google Drive, Box,
   Slides, PDF path, or any link.
   type: 'DECK' | 'DOC' | 'DATA' | 'VIDEO' | 'OTHER'
   ──────────────────────────────────────────────────────── */
const VAULT = [
  {
    id: 'credential-unit02',
    title: 'AI Biz Produce Unit 02 Credential',
    titleJP: 'AIビジネスプロデュース二部 クレデンシャル',
    desc: '岡安ユニットのクレデンシャルデッキ。Value Proposition / Tactics / Case Studies / Roadmap。',
    url: null,  // Google Drive or Box URLをここに
    type: 'DECK',
    author: '岡安ユニット',
    date: '2026-03',
    tags: ['Credential', 'Strategy', 'FY26'],
  },
  {
    id: 'ai-biz-deck',
    title: 'AI × Biz Produce Deck',
    titleJP: 'AI×ビズプロデュースデッキ',
    desc: 'AI時代の広告会社の役割変化、戦略コンサル×AIツール提供モデルの全体像を解説。',
    url: null,
    type: 'DECK',
    author: '柏崎 貴之',
    date: '2026-03',
    tags: ['AI Strategy', 'Business Model', 'Hakuhodo'],
  },
  {
    id: 'lost-journey-guide',
    title: 'ロストジャーニー発見＆改善 完全ガイドブック',
    titleJP: 'Lost Journey Guide',
    desc: 'CJ関連のロストジャーニーApp向け参考資料。発見から改善プロセスまでを体系化。',
    url: null,
    type: 'DOC',
    author: 'Unit 02',
    date: '2026-03',
    tags: ['CX', 'Journey', 'Reference'],
  },
  {
    id: 'dentsu-ai',
    title: '電通 AIケイパビリティ 2026年2月版',
    titleJP: '競合分析 — 電通AI',
    desc: '電通のAIケイパビリティ最新版。競合の攻め方の把握と差別化戦略立案に活用。',
    url: null,
    type: 'DATA',
    author: 'Unit 02',
    date: '2026-02',
    tags: ['Competitive Intel', 'Dentsu', 'AI'],
  },
  {
    id: 'pitch-winning',
    title: '中小が大手にコンペで連勝する方法 Vol.2',
    titleJP: 'ピッチ勝利戦略',
    desc: 'ピッチ戦略のリファレンス資料。勝ち筋の構造化と差別化ポイントの分析。',
    url: null,
    type: 'DOC',
    author: 'Unit 02',
    date: '2026-03',
    tags: ['Pitch', 'Strategy', 'Reference'],
  },
];

const DOC_TYPE_COLOR = {
  DECK:  { col: [255, 179, 0],   label: '📊 DECK'  },
  DOC:   { col: [0, 229, 255],   label: '📄 DOC'   },
  DATA:  { col: [105, 255, 71],  label: '📈 DATA'  },
  VIDEO: { col: [255, 23, 68],   label: '🎬 VIDEO' },
  OTHER: { col: [240, 238, 232], label: '📎 FILE'  },
};

/* ────────────────────────────────────────────────────────
   RENDER VAULT
   ──────────────────────────────────────────────────────── */
function renderVault() {
  const grid = document.getElementById('vault-grid');
  if (!grid) return;

  grid.innerHTML = VAULT.map((d, i) => {
    const meta  = DOC_TYPE_COLOR[d.type] || DOC_TYPE_COLOR.OTHER;
    const delay = (i * 0.06).toFixed(2);
    const rgb   = meta.col.join(',');

    const linkHtml = d.url
      ? `<a href="${d.url}" target="_blank" rel="noopener" class="vault-open" style="color:rgb(${rgb})">→ OPEN</a>`
      : `<span class="vault-soon">// URL未設定</span>`;

    return `
      <div class="vault-card fade-up" style="--delay:${delay}s;--accent:${rgb}">
        <div class="vc-type" style="color:rgb(${rgb});border-color:rgba(${rgb},0.3)">${meta.label}</div>
        <div class="vc-title">${d.title}</div>
        <div class="vc-title-jp">${d.titleJP}</div>
        <div class="vc-desc">${d.desc}</div>
        <div class="vc-tags">${d.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="vc-footer">
          <span class="vc-meta">${d.author} // ${d.date}</span>
          ${linkHtml}
        </div>
      </div>`;
  }).join('');
}

/* ────────────────────────────────────────────────────────
   SIGNAL DATA — Frontier AI Research Orgs
   ──────────────────────────────────────────────────────── */
const RESEARCH_ORGS = [
  {
    id: 'anthropic',
    name: 'Anthropic',
    label: 'ANTHROPIC RESEARCH',
    tagline: 'AI safety company building reliable, interpretable, and steerable AI systems.',
    taglineJP: '信頼性・解釈可能性・制御可能性を追求するAI安全研究機関。Claude の開発元。',
    url: 'https://www.anthropic.com/research',
    areas: ['Alignment', 'Interpretability', 'Constitutional AI', 'Societal Impact', 'Economic Research', 'Model Safety'],
    accent: [204, 120, 92],
    founded: 'Founded 2021',
    location: 'San Francisco',
  },
  {
    id: 'openai',
    name: 'OpenAI',
    label: 'OPENAI RESEARCH',
    tagline: 'Ensuring that artificial general intelligence benefits all of humanity.',
    taglineJP: '汎用人工知能が全人類の利益になるよう研究・実装。GPT / o系モデルの開発元。',
    url: 'https://openai.com/research/',
    areas: ['GPT / o-series', 'Multimodal AI', 'Reasoning', 'Safety & Alignment', 'Scalable Oversight', 'RLHF'],
    accent: [240, 238, 232],
    founded: 'Founded 2015',
    location: 'San Francisco',
  },
  {
    id: 'google-labs',
    name: 'Google Labs',
    label: 'GOOGLE LABS',
    tagline: 'Incubating experimental AI ideas and releasing them to the world.',
    taglineJP: '実験的なAIアイデアのインキュベーションと世界への公開。NotebookLM / Gemini。',
    url: 'https://labs.google/',
    areas: ['NotebookLM', 'Gemini', 'AI Experiments', 'Search Generative', 'Multimodal', 'Project Mariner'],
    accent: [66, 133, 244],
    founded: 'est. Google',
    location: 'Mountain View',
  },
];

function renderSignal() {
  const el = document.getElementById('signal-orgs');
  if (!el) return;

  el.innerHTML = RESEARCH_ORGS.map((org, i) => {
    const rgb   = org.accent.join(',');
    const delay = (i * 0.12).toFixed(2);
    return `
      <div class="signal-card fade-up" style="--delay:${delay}s;--sig-rgb:${rgb}">
        <div class="sig-header">
          <div class="sig-label">${org.label}</div>
          <div class="sig-meta">
            <span>${org.founded}</span>
            <span>${org.location}</span>
          </div>
        </div>
        <div class="sig-org-name" style="color:rgb(${rgb})">${org.name}</div>
        <p class="sig-tagline">${org.tagline}</p>
        <p class="sig-tagline-jp">${org.taglineJP}</p>
        <div class="sig-areas">
          ${org.areas.map(a => `<span class="sig-area">${a}</span>`).join('')}
        </div>
        <a href="${org.url}" target="_blank" rel="noopener" class="sig-link" style="color:rgb(${rgb})">→ VISIT RESEARCH</a>
      </div>`;
  }).join('');
}

/* ────────────────────────────────────────────────────────
   WORKS DATA — To add a new work, push to this array.
   ──────────────────────────────────────────────────────── */
const WORKS = [
  {
    id: 'client-dd',
    title: 'Client Due Diligence App',
    titleJP: 'クライアントDDアプリ',
    desc: '営業部長向けのクライアント状況把握ツール。回答フォームとダッシュボードをセットで提供。クライアントの健全性を可視化し、アクション設計をサポート。',
    url: 'https://client-dd.koya-yoshizumi.workers.dev/',
    dashboardUrl: 'https://client-dd.koya-yoshizumi.workers.dev/dashboard.html',
    builder: 'Koya Yoshizumi',
    builderJP: '吉住 光哉',
    status: 'LIVE',
    tags: ['Cloudflare Workers', 'Sales Intelligence', 'Dashboard'],
    date: '2026-03',
  },
  {
    id: 'pitch-evaluator',
    title: 'TH Pitch Evaluator',
    titleJP: 'ピッチ評価ツール',
    desc: '提案資料を社内メンバーが評価・FBを集約するツール。裏側にAIを搭載し「THらしい提案」「勝ち筋のある提案」を学習。将来的にはAI評価視点も実装予定。',
    url: 'https://th-pitch-evaluator.koya-yoshizumi.workers.dev/',
    builder: 'Koya Yoshizumi',
    builderJP: '吉住 光哉',
    status: 'LIVE',
    tags: ['Cloudflare Workers', 'AI Evaluation', 'Pitch Intel'],
    date: '2026-03',
  },
  {
    id: 'virtual-consumer',
    title: 'Virtual Sei-katsu-sha',
    titleJP: 'バーチャル生活者チャット',
    desc: 'RAG（検索拡張生成）を使って生活者の声を再現するAIチャットシステム。HELLO WORLDプロジェクトの核。10,000人規模のインサイトをリアルタイムで抽出。',
    url: 'https://hello-world-vc-rag.onrender.com/',
    builder: 'Taka Kashiwazaki',
    builderJP: '柏崎 貴之',
    status: 'LIVE',
    tags: ['RAG', 'LLM', 'Sei-katsu-sha', 'Python'],
    date: '2026-02',
    loginNote: 'ID: hp_admin / PW: helloworld2025',
  },
  {
    id: 'test-marketing',
    title: 'AI Test Marketing Lab',
    titleJP: 'AIテストマーケティングラボ',
    desc: 'バーチャル生活者×テストマーケティングのシミュレーションサイト。新製品や新サービスを仮想市場でテストし、リアルなフィードバックをAIで生成する。',
    url: 'https://gym-simulator.vercel.app/',
    builder: 'Taka Kashiwazaki',
    builderJP: '柏崎 貴之',
    status: 'LIVE',
    tags: ['Vercel', 'Virtual Consumer', 'Test Marketing'],
    date: '2026-03',
  },
  {
    id: 'ai-hub-knowledge',
    title: 'AI HUB Knowledge Hub',
    titleJP: 'AI HUBナレッジハブ',
    desc: 'HAITCのAI変革ナレッジを体系化したサイト。5つのChapterで構成。Philosophy / Virtual Sei-katsu-sha / HAKUNEO / Solutions / Promptsをカバー。',
    url: 'https://takayuki017.github.io/ai-hub-knowledge/',
    builder: 'Taka Kashiwazaki',
    builderJP: '柏崎 貴之',
    status: 'LIVE',
    tags: ['GitHub Pages', 'Knowledge Base', 'HAITC', 'VSKS'],
    date: '2026-02',
  },
  {
    id: 'pitch-defeat-analyzer',
    title: 'Pitch Defeat Analyzer',
    titleJP: 'ピッチ敗因分析アプリ',
    desc: 'ピッチ敗戦のパターンを学習・分析し、次の提案改善に活かすAIツール。競合動向と自社の強みを照合して敗因を構造化する。',
    url: null,
    builder: 'Koya Yoshizumi',
    builderJP: '吉住 光哉',
    status: 'DEV',
    tags: ['AI Analysis', 'Competitive Intel', 'Pitch Strategy'],
    date: '2026-04',
  },
  {
    id: 'hakuhodo-kuro',
    title: '博報堂黒子 AI',
    titleJP: '博報堂黒子 for XX',
    desc: 'クリエイティブ、ストプラ、メディアなど各職能向けのAI黒子システム。役割ごとにカスタマイズされたAIアシスタントを提供し、業務を裏から支援。',
    url: null,
    builder: 'Unit 02',
    builderJP: '岡安ユニット',
    status: 'CONCEPT',
    tags: ['Custom AI', 'Role-based', 'Productivity'],
    date: '2026-Q2',
  },
  {
    id: 'ai-usage-check',
    title: 'AI利用度チェックApp',
    titleJP: 'AI利用度診断ツール',
    desc: '組織やチームのAI活用レベルを診断するアプリ。スコアリングとベンチマーク比較で改善ポイントを可視化。社内啓蒙の起点として活用。',
    url: null,
    builder: 'Unit 02',
    builderJP: '岡安ユニット',
    status: 'CONCEPT',
    tags: ['AI Adoption', 'Diagnostics', 'Internal Tool'],
    date: '2026-Q2',
  },
];

/* ────────────────────────────────────────────────────────
   RENDER WORKS GALLERY
   ──────────────────────────────────────────────────────── */
function renderWorks() {
  const grid = document.getElementById('works-grid');
  if (!grid) return;

  grid.innerHTML = WORKS.map((w, i) => {
    const statusClass = w.status === 'LIVE' ? 'live' : w.status === 'DEV' ? 'dev' : 'concept';
    const statusLabel = w.status === 'LIVE' ? '🟢 LIVE' : w.status === 'DEV' ? '🟡 IN DEV' : '⚪ CONCEPT';
    const delay = (i * 0.07).toFixed(2);

    const linkHtml = w.url
      ? `<a href="${w.url}" target="_blank" rel="noopener" class="wc-link">→ OPEN SYSTEM</a>`
      : `<span class="wc-link-dead">-- COMING SOON --</span>`;

    const loginHtml = w.loginNote
      ? `<div class="wc-login"><span class="wc-login-icon">🔑</span>${w.loginNote}</div>`
      : '';

    return `
      <div class="work-card fade-up" style="--delay:${delay}s">
        <div class="wc-header">
          <span class="wc-status ${statusClass}">${statusLabel}</span>
          <span class="wc-builder">${w.builderJP}</span>
        </div>
        <div class="wc-title">${w.title}</div>
        <div class="wc-title-jp">${w.titleJP}</div>
        <div class="wc-desc">${w.desc}</div>
        ${loginHtml}
        <div class="wc-tags">${w.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="wc-footer">
          <span class="wc-date">${w.date}</span>
          ${linkHtml}
        </div>
      </div>`;
  }).join('');

  // Update count
  const liveCount  = WORKS.filter(w => w.status === 'LIVE').length;
  const devCount   = WORKS.filter(w => w.status === 'DEV' || w.status === 'CONCEPT').length;
  const liveEl = document.getElementById('live-count');
  const devEl  = document.getElementById('dev-count');
  if (liveEl) liveEl.textContent = liveCount;
  if (devEl)  devEl.textContent  = devCount;

  // Add small CSS for login note
  const style = document.createElement('style');
  style.textContent = `.wc-login{font-family:var(--mono);font-size:0.58rem;color:var(--muted);margin-bottom:0.8rem;display:flex;align-items:center;gap:0.4rem;}.wc-login-icon{font-size:0.7rem;}`;
  document.head.appendChild(style);
}

/* ────────────────────────────────────────────────────────
   IDEA EXPLOSION CANVAS
   INSPIRATION × LOGIC → spiraling orbit → collision → IDEA burst
   ──────────────────────────────────────────────────────── */
class IdeaExplosionCanvas {
  constructor(canvas) {
    this.canvas  = canvas;
    this.ctx     = canvas.getContext('2d');
    this.particles = [];
    this.trails    = []; // persistent trail dots

    // Phase state machine
    this.phase     = 'ORBIT'; // ORBIT → EXPLODE → DISSIPATE
    this.cycleT    = 0;
    this.cycleDur  = 6;      // seconds per full orbit-to-collision cycle
    this.explodeT  = 0;
    this.resetT    = 0;

    // Orbit geometry
    this.maxR = 0;   // set in resize()
    this.minR = 6;
    this.orbSpeed = (Math.PI * 2) / this.cycleDur; // rad/s, one full revolution

    // Explosion visuals
    this.flashAlpha = 0;
    this.ringR      = 0;
    this.ringAlpha  = 0;
    this.ring2R     = 0;

    // Idea words emitted on explosion
    this.WORDS = [
      'INSIGHT', 'IDEA', 'WHY?', 'VISION', 'PATTERN',
      'BREAKTHROUGH', 'STRATEGY', 'SIGNAL', 'HYPOTHESIS',
      'アイデア', '洞察', '発想', '仮説', '突破口', '戦略',
    ];

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this._last = performance.now();
    requestAnimationFrame(t => this._tick(t));
  }

  resize() {
    this.canvas.width  = this.canvas.offsetWidth  || window.innerWidth;
    this.canvas.height = this.canvas.offsetHeight || window.innerHeight;
    const W = this.canvas.width, H = this.canvas.height;
    // Orbit center: upper-right quadrant — balanced against bottom-left text
    this.cx   = W * 0.60;
    this.cy   = H * 0.38;
    this.maxR = Math.min(W, H) * 0.22;
  }

  /* Current orbit radius: linearly shrinks from maxR to minR over cycleDur */
  get r() {
    const t = Math.min(this.cycleT, this.cycleDur);
    return this.maxR - (this.maxR - this.minR) * (t / this.cycleDur);
  }

  /* xy of orb given angle offset */
  _pos(angleOffset) {
    const a = this.cycleT * this.orbSpeed + angleOffset;
    return {
      x: this.cx + Math.cos(a) * this.r,
      y: this.cy + Math.sin(a) * this.r,
    };
  }

  /* Trigger the explosion */
  _explode() {
    this.phase    = 'EXPLODE';
    this.explodeT = 0;
    this.flashAlpha = 1;
    this.ringR   = 0;  this.ringAlpha = 1;
    this.ring2R  = 0;

    const cx = this.cx, cy = this.cy;

    /* ── Burst dots (amber + cyan) ── */
    for (let i = 0; i < 60; i++) {
      const angle = (Math.PI * 2 / 60) * i + (Math.random() - 0.5) * 0.15;
      const spd   = Math.random() * 5.5 + 1.5;
      const isA   = i % 2 === 0;
      const col   = isA ? [255, 179, 0] : [0, 229, 255];
      this.particles.push({
        type: 'dot',
        x: cx, y: cy,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        r: Math.random() * 3.5 + 0.8,
        col, alpha: 1, decay: Math.random() * 0.014 + 0.007,
      });
    }

    /* ── Spark streaks ── */
    for (let i = 0; i < 35; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd   = Math.random() * 9 + 4;
      this.particles.push({
        type: 'spark',
        x: cx, y: cy,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        alpha: 1, decay: Math.random() * 0.035 + 0.02,
      });
    }

    /* ── Word particles ── */
    const wordList = [...this.WORDS].sort(() => Math.random() - 0.5).slice(0, 14);
    wordList.forEach((word, i) => {
      const angle = (Math.PI * 2 / wordList.length) * i;
      const spd   = Math.random() * 2.2 + 0.9;
      const isJP  = /[\u3040-\u30FF\u4E00-\u9FFF]/.test(word);
      const col   = i % 2 === 0 ? [0, 229, 255] : [255, 179, 0];
      this.particles.push({
        type: 'word',
        x: cx, y: cy,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd - 0.4,
        text: word,
        size: Math.random() * 5 + (isJP ? 12 : 10),
        col, alpha: 1, decay: Math.random() * 0.005 + 0.003,
      });
    });

    /* ── Central IDEA flash text ── */
    this.particles.push({
      type: 'center', x: cx, y: cy,
      vy: -0.5, text: 'IDEA',
      alpha: 1, decay: 0.007,
    });
  }

  _tick(now) {
    const dt = Math.min((now - this._last) / 1000, 0.05);
    this._last = now;

    const ctx = this.ctx;
    const W   = this.canvas.width;
    const H   = this.canvas.height;

    /* ── Background: fade for trail effect ── */
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.fillRect(0, 0, W, H);

    /* ════════════════ ORBIT phase ════════════════ */
    if (this.phase === 'ORBIT') {
      this.cycleT += dt;

      const posA = this._pos(0);          // INSPIRATION (amber)
      const posB = this._pos(Math.PI);    // LOGIC (cyan)
      const prog = this.cycleT / this.cycleDur; // 0→1

      /* Center convergence glow */
      if (prog > 0.25) {
        const ga = (prog - 0.25) / 0.75 * 0.5;
        const gr = this.maxR * (1 - prog) * 2.5 + 10;
        const g  = ctx.createRadialGradient(this.cx, this.cy, 0, this.cx, this.cy, gr);
        g.addColorStop(0, `rgba(255,255,255,${ga})`);
        g.addColorStop(0.4, `rgba(255,200,80,${ga * 0.4})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(this.cx, this.cy, gr, 0, Math.PI * 2); ctx.fill();
      }

      /* Orbit ring (dashed) */
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.cx, this.cy, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(240,238,232,0.07)';
      ctx.setLineDash([5, 10]); ctx.lineWidth = 0.8;
      ctx.stroke(); ctx.setLineDash([]); ctx.restore();

      /* Connection line — brightens as orbs converge */
      const connA = prog * prog * 0.55;
      ctx.beginPath();
      ctx.moveTo(posA.x, posA.y); ctx.lineTo(posB.x, posB.y);
      ctx.strokeStyle = `rgba(255,255,255,${connA})`;
      ctx.lineWidth = 0.5; ctx.stroke();

      /* Draw orbs */
      this._drawOrb(ctx, posA.x, posA.y, [255, 179, 0], 'INSPIRATION');
      this._drawOrb(ctx, posB.x, posB.y, [0, 229, 255], 'LOGIC');

      /* Emit trail particles */
      if (Math.random() < 0.35) {
        [{ pos: posA, col: [255, 179, 0] }, { pos: posB, col: [0, 229, 255] }]
          .forEach(({ pos, col }) => {
            this.trails.push({
              x: pos.x + (Math.random() - 0.5) * 4,
              y: pos.y + (Math.random() - 0.5) * 4,
              r: Math.random() * 2 + 0.5,
              col, alpha: 0.55,
              decay: Math.random() * 0.018 + 0.01,
            });
          });
      }

      if (this.r <= this.minR + 1) this._explode();
    }

    /* ════════════════ EXPLODE phase ════════════════ */
    if (this.phase === 'EXPLODE') {
      this.explodeT += dt;

      /* White flash */
      this.flashAlpha = Math.max(0, 1 - this.explodeT / 0.28);
      if (this.flashAlpha > 0) {
        const g = ctx.createRadialGradient(this.cx, this.cy, 0, this.cx, this.cy, 220);
        g.addColorStop(0,   `rgba(255,255,255,${this.flashAlpha * 0.95})`);
        g.addColorStop(0.35,`rgba(255,220,80,${this.flashAlpha * 0.5})`);
        g.addColorStop(0.7, `rgba(0,229,255,${this.flashAlpha * 0.15})`);
        g.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(this.cx, this.cy, 220, 0, Math.PI * 2); ctx.fill();
      }

      /* Expanding rings */
      this.ringR  += 420 * dt;
      this.ring2R += 260 * dt;
      this.ringAlpha = Math.max(0, 1 - this.ringR / 340);
      if (this.ringAlpha > 0) {
        ctx.beginPath(); ctx.arc(this.cx, this.cy, this.ringR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${this.ringAlpha * 0.8})`;
        ctx.lineWidth = 2; ctx.stroke();
        ctx.beginPath(); ctx.arc(this.cx, this.cy, this.ring2R, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,229,255,${this.ringAlpha * 0.5})`;
        ctx.lineWidth = 1; ctx.stroke();
        ctx.beginPath(); ctx.arc(this.cx, this.cy, this.ring2R * 0.55, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,179,0,${this.ringAlpha * 0.4})`;
        ctx.lineWidth = 1; ctx.stroke();
      }

      if (this.explodeT > 0.45) {
        this.phase   = 'DISSIPATE';
        this.resetT  = 0;
      }
    }

    /* ════════════════ DISSIPATE phase ════════════════ */
    if (this.phase === 'DISSIPATE') {
      this.resetT += dt;
      if (this.resetT > 3.5 && this.particles.length < 3) {
        this.phase   = 'ORBIT';
        this.cycleT  = 0;
        this.explodeT = 0;
        this.trails  = [];
      }
    }

    /* ════════════════ Draw trails ════════════════ */
    this.trails = this.trails.filter(t => t.alpha > 0.01);
    this.trails.forEach(t => {
      t.alpha -= t.decay;
      ctx.beginPath(); ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${t.col[0]},${t.col[1]},${t.col[2]},${t.alpha})`;
      ctx.fill();
    });

    /* ════════════════ Draw particles ════════════════ */
    this.particles = this.particles.filter(p => p.alpha > 0.01);
    this.particles.forEach(p => {
      p.x += p.vx || 0;
      p.y += p.vy || 0;
      if (p.type !== 'word' && p.type !== 'center') {
        p.vy = (p.vy || 0) + 0.025; // gravity on dots/sparks
      }
      p.alpha -= p.decay;

      if (p.type === 'dot') {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${p.alpha})`;
        ctx.fill();

      } else if (p.type === 'spark') {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - (p.vx) * 3.5, p.y - (p.vy) * 3.5);
        ctx.strokeStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.lineWidth = 0.8; ctx.stroke();
        ctx.restore();

      } else if (p.type === 'word') {
        ctx.save();
        ctx.font = `700 ${p.size}px 'Space Mono','Noto Sans JP',monospace`;
        ctx.fillStyle = `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${p.alpha})`;
        ctx.fillText(p.text, p.x, p.y);
        ctx.restore();

      } else if (p.type === 'center') {
        ctx.save();
        ctx.font = '900 46px "Space Mono",monospace';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '0.05em';
        const grd = ctx.createLinearGradient(p.x - 80, 0, p.x + 80, 0);
        grd.addColorStop(0, `rgba(255,179,0,${p.alpha})`);
        grd.addColorStop(1, `rgba(0,229,255,${p.alpha})`);
        ctx.fillStyle = grd;
        ctx.fillText(p.text, p.x, p.y);
        ctx.restore();
      }
    });

    requestAnimationFrame(t => this._tick(t));
  }

  _drawOrb(ctx, x, y, col, label) {
    const r = 13;

    /* Outer glow */
    const gR = r * 5;
    const g  = ctx.createRadialGradient(x, y, 0, x, y, gR);
    g.addColorStop(0,   `rgba(${col[0]},${col[1]},${col[2]},0.55)`);
    g.addColorStop(0.3, `rgba(${col[0]},${col[1]},${col[2]},0.18)`);
    g.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, gR, 0, Math.PI * 2); ctx.fill();

    /* Core sphere */
    const sphere = ctx.createRadialGradient(x - r*0.3, y - r*0.35, r*0.1, x, y, r);
    sphere.addColorStop(0, `rgba(255,255,255,0.9)`);
    sphere.addColorStop(0.3, `rgba(${col[0]},${col[1]},${col[2]},1)`);
    sphere.addColorStop(1,   `rgba(${Math.floor(col[0]*0.4)},${Math.floor(col[1]*0.4)},${Math.floor(col[2]*0.4)},1)`);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = sphere; ctx.fill();

    /* Label */
    ctx.save();
    ctx.font = '700 9px "Space Mono",monospace';
    ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},0.8)`;
    const tw = ctx.measureText(label).width;
    // Centre label below orb
    ctx.fillText(label, x - tw / 2, y + r + 16);
    ctx.restore();
  }
}

/* ────────────────────────────────────────────────────────
   COMPUTATIONAL NATURE CANVAS
   ──────────────────────────────────────────────────────── */
class ComputationalCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');
    this.nodes  = [];
    this.pulses = [];
    this.maxDist = 160;
    this.tick = 0;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.spawn();
    this.animate();
  }

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // re-scatter nodes on resize
    if (this.nodes.length) {
      this.nodes.forEach(n => {
        n.x = Math.random() * this.canvas.width;
        n.y = Math.random() * this.canvas.height;
      });
    }
  }

  spawn() {
    const count = Math.min(70, Math.floor(window.innerWidth / 20));
    const palette = [
      [0,   229, 255],  // cyan
      [240, 238, 232],  // white
      [255, 179, 0  ],  // amber
    ];
    for (let i = 0; i < count; i++) {
      const col = palette[Math.floor(Math.random() * palette.length)];
      this.nodes.push({
        x:  Math.random() * this.canvas.width,
        y:  Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r:  Math.random() * 1.5 + 0.5,
        col,
        alpha: Math.random() * 0.5 + 0.15,
      });
    }
  }

  addPulse(a, b) {
    this.pulses.push({ a, b, t: 0, speed: 0.02 });
  }

  animate() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.tick++;

    // Randomly spawn pulses
    if (this.tick % 120 === 0 && this.nodes.length > 1) {
      const i = Math.floor(Math.random() * this.nodes.length);
      let best = -1, bestD = Infinity;
      this.nodes.forEach((n, j) => {
        if (j === i) return;
        const d = Math.hypot(n.x - this.nodes[i].x, n.y - this.nodes[i].y);
        if (d < this.maxDist && d < bestD) { bestD = d; best = j; }
      });
      if (best !== -1) this.addPulse(this.nodes[i], this.nodes[best]);
    }

    // Draw connections
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x;
        const dy = this.nodes[i].y - this.nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < this.maxDist) {
          const a = (1 - d / this.maxDist) * 0.12;
          ctx.strokeStyle = `rgba(240,238,232,${a})`;
          ctx.lineWidth   = 0.4;
          ctx.beginPath();
          ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
          ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw pulses
    this.pulses = this.pulses.filter(p => p.t <= 1);
    this.pulses.forEach(p => {
      p.t += p.speed;
      const x = p.a.x + (p.b.x - p.a.x) * p.t;
      const y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,229,255,${0.9 - p.t})`;
      ctx.fill();
    });

    // Draw & move nodes
    this.nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > this.canvas.width)  n.vx *= -1;
      if (n.y < 0 || n.y > this.canvas.height)  n.vy *= -1;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.col[0]},${n.col[1]},${n.col[2]},${n.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}

/* ────────────────────────────────────────────────────────
   NAV SCROLL BEHAVIOUR
   ──────────────────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = nav.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    // Active link
    const sections = ['vault', 'signal', 'works', 'team', 'mission', 'submit'];
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 100) current = id;
    });
    nav.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    navLinks.classList.toggle('open', open);
  });
}

/* ────────────────────────────────────────────────────────
   LIVE CLOCK
   ──────────────────────────────────────────────────────── */
function initClock() {
  const el = document.getElementById('meta-clock');
  if (!el) return;
  const pad = n => String(n).padStart(2, '0');
  const tick = () => {
    const d = new Date();
    el.textContent = `${d.getFullYear()}.${pad(d.getMonth()+1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ────────────────────────────────────────────────────────
   NUMBER COUNTER ANIMATION
   ──────────────────────────────────────────────────────── */
function initCounters() {
  const els = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let cur = 0;
      const step = Math.max(1, Math.floor(target / 30));
      const id = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = cur;
        if (cur >= target) clearInterval(id);
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => observer.observe(el));
}

/* ────────────────────────────────────────────────────────
   FADE-UP SCROLL OBSERVER
   ──────────────────────────────────────────────────────── */
function initFadeUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ────────────────────────────────────────────────────────
   AMBIENT VIDEO — variable playback speed
   速い↔ゆっくりをサインカーブで往復。アンビエントな揺らぎ。
   ──────────────────────────────────────────────────────── */
function initAmbientVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  // Two overlapping sine waves for organic, non-repeating feel
  // Slowest: 0.20×  Fastest: 1.90×  Center: 1.05×
  const A1 = 0.6,  P1 = 18;   // amplitude, period (seconds)
  const A2 = 0.25, P2 = 7.3;  // shorter ripple on top

  const tick = (now) => {
    const t = now / 1000;
    const speed = 1.05
      + A1 * Math.sin((Math.PI * 2 / P1) * t)
      + A2 * Math.sin((Math.PI * 2 / P2) * t + 1.2);
    video.playbackRate = Math.max(0.1, Math.min(2.5, speed));
    requestAnimationFrame(tick);
  };

  const start = () => requestAnimationFrame(tick);
  video.addEventListener('canplay', start, { once: true });
  // fallback if already ready
  if (video.readyState >= 3) start();
}

/* ────────────────────────────────────────────────────────
   SUBMIT FORM
   ──────────────────────────────────────────────────────── */
function initForm() {
  const form    = document.getElementById('submit-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    // TODO: wire to Cloudflare Worker POST endpoint
    // Example: await fetch('https://your-worker.workers.dev/submit', {
    //   method: 'POST', body: JSON.stringify(data),
    //   headers: { 'Content-Type': 'application/json' }
    // });

    // TODO: wire to Cloudflare Worker POST endpoint
    console.log('[ADD_WORK]', data);

    form.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
    success.hidden = false;
    setTimeout(() => { success.hidden = true; }, 8000);
  });
}

/* ────────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderVault();
  renderSignal();
  renderWorks();
  initNav();
  initClock();
  initCounters();
  initFadeUp();
  initForm();
  initAmbientVideo();

  // Background computational canvas (subtle particle network)
  const bgCanvas = document.getElementById('canvas');
  if (bgCanvas) {
    requestAnimationFrame(() => new ComputationalCanvas(bgCanvas));
  }

  // Main visual: Idea Explosion canvas
  const ideaCanvas = document.getElementById('idea-canvas');
  if (ideaCanvas) {
    // Small delay so layout is measured correctly
    setTimeout(() => new IdeaExplosionCanvas(ideaCanvas), 100);
  }
});
