// Hook & Hold — vanilla JS interactivity

// ─── Data ──────────────────────────────────────────────────────────────────────

const projects = [
  { client: 'Hook & Hold',         cat: 'Available',            subj: 'Current Site on Auction',     prev: 'A launch-ready premium concept created during a paused engagement. Available for acquisition by the right brand.',                  tag: 'auction', video: '/numberfour (2).mp4' },
  { client: 'LGPSM',               cat: 'HR · Remote teams',    subj: 'Distributed team platform',   prev: 'A streamlined HR and remote team management platform built for distributed teams.',                                              tag: 'live',    video: '/numberone.mp4'   },
  { client: 'Automation Machines', cat: 'Industrial automation',subj: 'Industrial precision brand',  prev: 'An industrial automation website designed to showcase precision systems and operational efficiency.',                              tag: 'live',    video: '/numbertwo.mp4'   },
  { client: 'Smart Prosthetics',   cat: 'Health technology',    subj: 'Human progress concept',      prev: 'A concept experience for advanced prosthetics technology, built around resilience, human progress, and accessibility.',          tag: 'concept', video: '/numberthree.mp4' },
  { client: 'Takashi Tactical',    cat: 'Tactical gear',        subj: 'Tactical accessories brand',  prev: 'A premium tactical accessories brand focused on custom printed bandanas and functional gear.',                                    tag: 'live',    video: '/numberfive.mp4'  },
  { client: 'Your Brand Here',     cat: 'Enquire',              subj: 'The next flagship experience',prev: 'The next flagship experience could be yours.',                                                                                     tag: 'cta',     video: null, ctaBig: 'Your Brand Here', ctaSub: '→ BOOK A DISCOVERY CALL' },
];

const faqs = [
  { q: 'How long does a project usually take?',        a: 'Most focused engagements are completed within two weeks from briefing to launch. Scope and feedback cycles determine the pace. The Starter package typically ships within a fortnight, while more complex flagships are scoped individually. We work to a clear timeline from day one.' },
  { q: 'Do you offer ongoing support?',                a: 'Yes. Every project includes a 30-day post-launch window for refinements and performance review. Beyond that, we offer ongoing support for content updates, seasonal campaigns, conversion improvements, and design iterations. Support arrangements are reserved for current and former clients.' },
  { q: 'What platforms do you build on?',              a: 'Our default stack is React, Next.js, and a headless CMS, typically Sanity or Contentful, deployed to the edge. For experiential layers we lean on WebGL, GSAP, and Lenis. Platform decisions are always made for the brief, never the trend.' },
  { q: 'Do you handle strategy and copywriting?',      a: 'Strategy is part of every engagement. Copy is collaborative. We bring an editorial sensibility and structure, and partner with your team or our copy network for the final voice.' },
  { q: 'Can you redesign an existing website?',        a: "Often, but only when there's a real reason to. We start with a candid audit. Sometimes the right answer is a focused refresh, sometimes a full rebuild, sometimes neither. We'll tell you which." },
  { q: 'How involved will we need to be?',             a: 'A single decision-maker, two to four hours a week. We protect your time with weekly cinema reviews, paced, prepared, and replayable, instead of recurring status calls.' },
  { q: 'Do you build custom interactions and motion?', a: 'Always. Motion language is part of the brand expression, not a finishing touch. Every engagement ships with a documented scroll language, transition kit, and micro-interaction system.' },
  { q: 'What happens after launch?',                   a: 'A 30-day iteration window is built into every engagement: telemetry, copy refinements, and motion polish based on how the work actually performs in the wild. Beyond that, ongoing support or focused follow-up sprints.' },
];

const CALENDLY_URL = 'https://calendly.com/mukonamamaila-qyuo/15minutediscoverycall';

const services = [
  {
    icon: 'eye',
    h: 'Cinematic Web Design',
    p: 'Dark, layered, atmospheric interfaces with restraint and gravity. Custom from the first pixel.',
    d: ['Art direction', 'Hi-fi prototypes', 'Editorial systems'],
    detail: 'Every surface is composed with the patience of a film frame. Typography weighted for hierarchy, palette restrained to a few defensible notes, motion that earns attention rather than asking for it.',
    when: 'When a template build would make the brand feel smaller than it actually is.',
  },
  {
    icon: 'zap',
    h: 'Interactive Development',
    p: 'Production-grade React, WebGL and motion engineered for 60fps and 99 Lighthouse.',
    d: ['React · Next', 'WebGL · GLSL', 'Edge perf'],
    detail: 'Production builds on React and Next.js, with WebGL, GSAP, and Lenis used where they earn their weight. Edge-deployed, performance-budgeted, audited for Lighthouse scores in the high nineties.',
    when: 'When the brand needs polish without slowing the page down.',
  },
  {
    icon: 'star',
    h: 'Brand Positioning',
    p: 'A defensible voice and visual posture for brands that need authority, not noise.',
    d: ['Narrative', 'Tone & voice', 'Identity refresh'],
    detail: 'A defensible point of view, a voice that holds up in long copy, and a visual posture that signals authority before a single word is read. Built to outlast the next trend cycle.',
    when: 'When the brand has outgrown its current voice but does not yet sound like itself.',
  },
  {
    icon: 'layer',
    h: 'Motion Systems',
    p: 'Choreographed transitions, scroll language, and micro-interactions that hold the eye.',
    d: ['Scroll language', 'Transitions', 'Sound design'],
    detail: 'A documented motion language for the brand: scroll choreography, transition kit, easing curves, micro-interaction patterns. Built once, reused across every surface.',
    when: 'When motion is being added everywhere but nothing feels coherent.',
  },
  {
    icon: 'arrow',
    h: 'Conversion Optimization',
    p: 'Quiet, evidence-led optimization. We move metrics without dressing up the brand.',
    d: ['Funnel audits', 'Test programs', 'Analytics'],
    detail: 'Quiet, evidence-led optimization. Funnel audits, structured test programs, and analytics that move the right metrics without dressing up the brand or chasing the dashboard.',
    when: 'When the work is already converting, but not at the rate the brand deserves.',
  },
  {
    icon: 'globe',
    h: 'Creative Direction',
    p: 'Embedded direction across photography, film, type, and tone. One cohesive throughline.',
    d: ['Photo direction', 'Film direction', 'System keeping'],
    detail: 'Embedded direction across photography, film, typography, and tone. One throughline that holds the brand together across launches, campaigns, and channels.',
    when: 'When the brand is being built by many hands and starting to look like it.',
  },
];

const icons = {
  eye:   '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  zap:   '<path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="currentColor"/>',
  star:  '<path d="M12 3l2.6 6 6.4.5-4.9 4.2 1.5 6.3L12 16.8 6.4 20l1.5-6.3L3 9.5l6.4-.5z"/>',
  layer: '<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
};

const steps = [
  { n: '01', s: 'Strategy',    b: 'Discovery, audit, and a sharp brand-shaped POV.',                    w: 'DAY 1'    },
  { n: '02', s: 'Structure',   b: 'Information architecture, narrative beats, wireframes.',             w: 'DAY 2–3'  },
  { n: '03', s: 'Motion',      b: 'Hi-fi design, scroll language, prototype reviews.',                  w: 'DAY 4–5'  },
  { n: '04', s: 'Development', b: 'Production build with embedded QA and accessibility.',               w: 'DAY 6–13' },
  { n: '05', s: 'Launch',      b: 'Soft-launch, telemetry, and a 30-day iteration window.',             w: 'DAY 14'   },
];

const tiers = [
  {
    name: 'Starter',
    priceBase: 'R4,000',
    priceSupportSuffix: ' + R800/mo',
    subBase: 'Once-off',
    subSupport: 'Launch + ongoing support',
    desc: 'For founders launching a single-page authority site or focused conversion experience.',
    listBase: [
      'Single bespoke page',
      'Brand-shaped art direction',
      'Cinematic motion language',
      'On-page SEO foundation',
      '2-week build · 1 revision round',
    ],
    listSupport: [
      'Monthly content edits (up to 2 requests)',
      'Mobile responsiveness monitoring',
      'Security & maintenance support',
      'Quarterly visual refreshes',
      'Priority support response',
      '2-week build · 3 revision rounds',
    ],
  },
  {
    name: 'Growth',
    priceBase: 'R12,000',
    priceSupportSuffix: ' + R2,000/mo',
    subBase: 'Once-off',
    subSupport: 'Growth partnership',
    desc: 'For brands rebuilding their digital flagship with cinematic intent and conversion in mind.',
    listBase: [
      'Up to 8 pages · custom system',
      'Custom motion + scroll language',
      'CMS integration · headless ready',
      'Conversion architecture & testing',
      '3–4 week build · 2 revision rounds',
    ],
    listSupport: [
      'Monthly performance reviews',
      'Content & copy updates',
      'Ongoing SEO improvements',
      'Monthly conversion optimization',
      'CMS maintenance & fixes',
      'Seasonal landing page updates',
      'Priority turnaround',
      '3–4 week build · 4 revision rounds',
    ],
  },
  {
    name: 'Authority',
    priceBase: 'Custom Quote',
    priceOnSupport: 'Custom + Monthly Partnership',
    subBase: '',
    subSupport: 'Long-term creative partnership',
    pro: true,
    desc: 'For studios, agencies, and category leaders who need an enterprise-grade flagship.',
    listBase: [
      'Unlimited pages · full design system',
      'WebGL or 3D experiential layer',
      'Embedded creative direction',
      '30-day post-launch iteration window',
      'Priority retainer eligibility',
    ],
    listSupport: [
      'Dedicated creative partnership',
      'Ongoing experimentation & iteration',
      'Monthly design optimization',
      'Executive priority support',
      'Continuous UX improvements',
      'Quarterly strategic redesign sessions',
      'Unlimited priority revisions',
    ],
  },
];

// ─── SVG helpers ───────────────────────────────────────────────────────────────

const chevSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="chev"><path d="M9 6l6 6-6 6"/></svg>`;
const checkSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4 4 10-10"/></svg>`;
const chevDownSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

function ic(name) {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
}

// ─── Showcase ──────────────────────────────────────────────────────────────────

function tagLabel(tag) {
  if (tag === 'live')    return { text: '● Live',      cls: 'live'    };
  if (tag === 'review')  return { text: '● In review', cls: 'review'  };
  if (tag === 'concept') return { text: '● Concept',   cls: 'concept' };
  if (tag === 'auction') return { text: 'On Auction',  cls: 'auction' };
  if (tag === 'cta')     return { text: '',            cls: ''        };
  return                        { text: '● Draft',     cls: 'draft'   };
}

function updateReader(p, idx) {
  document.getElementById('reader-subj').textContent   = p.subj;
  document.getElementById('reader-client').textContent = p.client;
  document.getElementById('reader-prev').textContent   = p.prev;
  document.getElementById('reader-label').textContent  = p.client;
  document.getElementById('reader-num').textContent    = `${String(idx + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;
  document.getElementById('reader-cat').textContent    = p.cat;

  const lbl = tagLabel(p.tag);
  const tagEl = document.getElementById('reader-tag');
  tagEl.textContent    = lbl.text;
  tagEl.className      = 'os-chip' + (lbl.cls ? ' ' + lbl.cls : '');
  tagEl.style.display  = lbl.text ? '' : 'none';
}

function initShowcase() {
  const video  = document.getElementById('preview-video');
  const center = document.getElementById('reader-center');
  const subEl  = document.getElementById('reader-sub');
  const ctaEl  = document.getElementById('reader-cta');
  const FADE   = 320;

  function applyProject(p, idx) {
    updateReader(p, idx);
    if (p.video) {
      video.src = p.video;
      video.load();
      video.play().catch(() => {});
      video.style.display  = '';
      center.style.display = 'none';
      if (subEl) subEl.style.display = '';
      if (ctaEl) ctaEl.style.display = 'none';
    } else {
      video.pause();
      video.removeAttribute('src');
      video.load();
      video.style.display  = 'none';
      document.getElementById('reader-big').textContent = p.ctaBig;
      if (subEl) subEl.style.display = 'none';
      if (ctaEl) ctaEl.style.display = 'inline-flex';
      center.style.display = '';
    }
  }

  function switchTo(idx, instant) {
    document.querySelectorAll('.os-row').forEach(r => r.classList.remove('active'));
    const row = document.querySelector(`.os-row[data-project="${idx}"]`);
    if (row) row.classList.add('active');

    if (instant) {
      applyProject(projects[idx], idx);
      return;
    }

    // Fade out current content
    video.classList.add('preview-fading');
    center.style.opacity    = '0';
    center.style.transition = `opacity ${FADE}ms cubic-bezier(.22,1,.36,1)`;

    setTimeout(() => {
      applyProject(projects[idx], idx);
      // Fade in new content
      video.classList.remove('preview-fading');
      center.style.opacity = '1';
    }, FADE);
  }

  document.querySelectorAll('.os-row').forEach(row => {
    row.addEventListener('click', () => {
      switchTo(parseInt(row.dataset.project, 10), false);
    });
  });

  // Auto-play project 1 on load
  switchTo(0, true);
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function buildFaq() {
  const list = document.getElementById('faq-list');

  faqs.forEach((f, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item' + (i === 0 ? ' open' : '');
    item.innerHTML = `
      <button class="faq-q" aria-expanded="${i === 0}">
        <span class="faq-num mono">${String(i + 1).padStart(2, '0')}</span>
        <span class="faq-text">${f.q}</span>
        <span class="faq-chev" aria-hidden="true">${chevDownSvg}</span>
      </button>
      <div class="faq-a-wrap"><div class="faq-a"><p>${f.a}</p></div></div>
    `;

    item.querySelector('.faq-q').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
      }
    });

    list.appendChild(item);
  });
}

// ─── Services ─────────────────────────────────────────────────────────────────

function buildServices() {
  const grid = document.getElementById('svc-grid');
  const stage = grid.parentElement; // .svc-stage

  // 1. Cards (always present — what you see at rest, and the touch-mode container)
  services.forEach((s, i) => {
    const card = document.createElement('article');
    card.className = 'liquid-glass svc-card';
    card.dataset.svc = i;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${s.h}. Activate for more detail.`);
    card.innerHTML = `
      <span class="ix">${ic(s.icon)}</span>
      <h3>${s.h}</h3>
      <p>${s.p}</p>
      <div class="deliv">${s.d.map(x => `<span>${x}</span>`).join('')}</div>
      <div class="svc-expand-wrap" aria-hidden="true">
        <div class="svc-expand-inner">
          <p class="svc-detail">${s.detail}</p>
          <div class="svc-when">
            <span class="svc-when-label">When this helps</span>
            <span class="svc-when-text">${s.when}</span>
          </div>
          <a class="pill-btn ghost svc-cta" href="${CALENDLY_URL}" target="_blank" rel="noopener noreferrer" tabindex="-1">
            <span>Book a Call</span>
            ${chevSvg}
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // 2. Single preview overlay covering the grid — desktop reveal target
  const overlay = document.createElement('div');
  overlay.className = 'svc-preview-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = services.map((s, i) => `
    <article class="svc-preview liquid-glass" data-svc="${i}">
      <div class="svc-preview-glyph" aria-hidden="true">
        <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round">${icons[s.icon]}</svg>
      </div>
      <div class="svc-preview-meta mono">
        <span>${String(i + 1).padStart(2, '0')} / ${String(services.length).padStart(2, '0')}</span>
        <span class="dotsep">·</span>
        <span>Hook &amp; Hold · Service</span>
      </div>
      <h3 class="svc-preview-title">${s.h}</h3>
      <p class="svc-preview-detail">${s.detail}</p>
      <div class="svc-preview-row">
        <div class="svc-preview-when">
          <span class="svc-when-label">When this helps</span>
          <span class="svc-when-text">${s.when}</span>
        </div>
        <div class="svc-preview-deliv">
          <span class="svc-when-label">Deliverables</span>
          <div class="deliv">${s.d.map(x => `<span>${x}</span>`).join('')}</div>
        </div>
      </div>
      <a class="pill-btn svc-preview-cta" href="${CALENDLY_URL}" target="_blank" rel="noopener noreferrer" tabindex="-1">
        <span>Book a Call</span>
        ${chevSvg}
      </a>
    </article>
  `).join('');
  stage.appendChild(overlay);

  initServicesInteraction(grid, overlay);
}

function initServicesInteraction(grid, overlay) {
  const cards = Array.from(grid.querySelectorAll('.svc-card'));
  const panels = Array.from(overlay.querySelectorAll('.svc-preview'));
  const mqMobile = window.matchMedia('(max-width: 900px)');
  const isMobile = () => mqMobile.matches;
  let hoverDelay = null;
  let activeIdx = -1;

  function setActive(idx) {
    if (activeIdx === idx) return;

    // Desktop overlay mode
    cards.forEach((c, i) => {
      c.classList.toggle('is-dim', !isMobile() && idx !== -1 && i !== idx);
      c.classList.toggle('is-active', isMobile() && i === idx);
      c.setAttribute('aria-expanded', String(isMobile() && i === idx));
      const cta = c.querySelector('.svc-cta');
      if (cta) cta.tabIndex = (isMobile() && i === idx) ? 0 : -1;
    });
    panels.forEach((p, i) => p.classList.toggle('is-active', !isMobile() && i === idx));
    overlay.classList.toggle('is-revealed', !isMobile() && idx !== -1);
    overlay.setAttribute('aria-hidden', String(!(idx !== -1 && !isMobile())));

    // Mobile CTA tabindex
    if (isMobile() && idx !== -1) {
      const mCta = cards[idx].querySelector('.svc-cta');
      if (mCta) mCta.tabIndex = 0;
    }

    activeIdx = idx;
  }

  cards.forEach((card, i) => {
    // Desktop hover (100ms debounce — Codrops anti-jitter)
    card.addEventListener('mouseenter', () => {
      if (isMobile()) return;
      if (hoverDelay) clearTimeout(hoverDelay);
      hoverDelay = setTimeout(() => setActive(i), 100);
    });
    card.addEventListener('mouseleave', () => {
      if (isMobile()) return;
      if (hoverDelay) { clearTimeout(hoverDelay); hoverDelay = null; }
      setActive(-1);
    });

    // Mobile tap = inline accordion toggle
    card.addEventListener('click', (e) => {
      if (!isMobile()) return;
      if (e.target.closest('.svc-cta')) return;
      e.preventDefault();
      setActive(activeIdx === i ? -1 : i);
    });

    // Keyboard
    card.addEventListener('keydown', (e) => {
      if (e.target.closest('.svc-cta')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActive(activeIdx === i ? -1 : i);
      } else if (e.key === 'Escape' && activeIdx === i) {
        setActive(-1);
        card.blur();
      }
    });
  });

  // Cancel any preview when the cursor leaves the grid area entirely (prevents stuck states)
  grid.parentElement.addEventListener('mouseleave', () => {
    if (isMobile()) return;
    if (hoverDelay) { clearTimeout(hoverDelay); hoverDelay = null; }
    setActive(-1);
  });

  // Reset state when crossing the desktop/mobile breakpoint
  mqMobile.addEventListener('change', () => setActive(-1));
}

// ─── Process ──────────────────────────────────────────────────────────────────

function buildProcess() {
  const list = document.getElementById('process-list');
  steps.forEach((s) => {
    const card = document.createElement('div');
    card.className = 'liquid-glass proc-card';
    card.innerHTML = `
      <div class="num">${s.n}</div>
      <div class="stage">${s.s}</div>
      <div class="blurb">${s.b}</div>
      <div class="week mono">${s.w}</div>
    `;
    list.appendChild(card);
  });
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

let retainerOn = false;

function buildPricing() {
  const grid = document.querySelector('.hh-grid');

  tiers.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'hh-card' + (t.pro ? ' pro' : '');
    card.dataset.tierIdx = i;

    const baseItems = t.listBase.map(item =>
      `<li><span class="hh-check">${checkSvg}</span><span>${item}</span></li>`
    ).join('');

    const supportItems = t.listSupport.map((item, idx) =>
      `<li style="transition-delay:${0.05 + idx * 0.045}s"><span class="hh-check">${checkSvg}</span><span>${item}</span></li>`
    ).join('');

    // Price line: non-authority gets inline suffix; authority gets replacement block
    const priceLine = t.priceOnSupport
      ? `<span class="price-base">${t.priceBase}</span>
         <span class="price-authority-support">${t.priceOnSupport}</span>`
      : `<span class="price-base">${t.priceBase}</span><span class="price-support-suffix">${t.priceSupportSuffix || ''}</span>`;

    card.innerHTML = `
      <div class="tier-s">${t.name}</div>
      <div class="tier-l">${priceLine}</div>
      <div class="tier-sub">
        <span class="sub-base">${t.subBase}</span>
        <span class="sub-support">${t.subSupport}</span>
      </div>
      <div class="desc">${t.desc}</div>
      <ul class="features-base">${baseItems}</ul>
      <div class="features-support-wrap">
        <ul class="features-support">${supportItems}</ul>
      </div>
      <a href="https://calendly.com/mukonamamaila-qyuo/15minutediscoverycall" target="_blank" rel="noopener noreferrer" class="pick">Book Discovery Call</a>
    `;
    grid.appendChild(card);
  });

  document.getElementById('pricing-toggle').addEventListener('click', () => {
    retainerOn = !retainerOn;
    document.getElementById('pricing-toggle').classList.toggle('active', retainerOn);
    document.querySelector('.hh-pricing').classList.toggle('support-on', retainerOn);
  });
}

// ─── Reveal system ────────────────────────────────────────────────────────────

function initReveal() {
  // Auto-tag common building blocks
  document.querySelectorAll([
    'section.section', 'section.cta', 'section.hh-pricing',
    '.os-frame', '.svc-card', '.proc-card', '.tmnl', '.hh-card',
    '.kicker', '.logo', '.chip', '.eyebrow', '.lede2',
    '.cta-card', '.foot', '.foot-col', '.foot-brand',
    '.os-row', '.proj-preview',
  ].join(',')).forEach(el => {
    if (!el.classList.contains('reveal-on-scroll') &&
        !el.classList.contains('rise') &&
        !el.classList.contains('fade-in')) {
      el.classList.add('reveal-on-scroll');
    }
  });

  // Line-by-line headline reveal
  document.querySelectorAll('h1, h2.display, .cta-card h2, .hh-watermark .main').forEach(el => {
    el.classList.add('reveal-lines');
  });

  // Staggered grid reveals
  document.querySelectorAll('.svc-grid, .process-list, .tmnl-grid, .logo-grid, .hh-grid, .chips, .cta-row, .nav-links').forEach(el => {
    el.classList.add('reveal-stagger');
  });

  const targets = new Set();
  document.querySelectorAll('.reveal-on-scroll, .reveal-stagger, .reveal-lines, .reveal-soft').forEach(el => targets.add(el));

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else if (entry.intersectionRatio === 0) {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: [0, 0.12], rootMargin: '0px 0px -6% 0px' });

  targets.forEach(el => io.observe(el));
}

// ─── Nav auto-hide ────────────────────────────────────────────────────────────

function initNavAutoHide() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastY = window.scrollY;
  let hidden = false;
  let downPx = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const delta = y - lastY;
    lastY = y;

    if (y < 60) {
      downPx = 0;
      if (hidden) { nav.classList.remove('nav--hidden'); hidden = false; }
      return;
    }

    if (delta < 0) {
      // Any upward movement — reveal immediately, no threshold
      downPx = 0;
      if (hidden) { nav.classList.remove('nav--hidden'); hidden = false; }
    } else if (delta > 0) {
      // Accumulate downward distance before hiding to prevent jitter
      downPx += delta;
      if (downPx > 80 && !hidden) {
        nav.classList.add('nav--hidden');
        hidden = true;
        downPx = 0;
      }
    }
  }, { passive: true });
}

// ─── Mobile showcase (≤900px) ────────────────────────────────────────────────
//
// On small screens the desktop two-pane layout becomes cramped. We render a
// dedicated vertical card stack instead — each project is a self-contained
// card with its own video preview. Videos only autoplay when the card is in
// view, so we never stream more than one or two simultaneously.

const CALENDLY = 'https://calendly.com/mukonamamaila-qyuo/15minutediscoverycall';

function buildMobileShowcase() {
  const root = document.getElementById('os-mobile');
  if (!root) return;

  const cards = projects.map((p, idx) => {
    const num   = `${String(idx + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;
    const tag   = tagLabel(p.tag);
    const chip  = tag.text ? `<span class="os-chip ${tag.cls}">${tag.text}</span>` : '';
    const cat   = p.cat ? `<span class="os-chip">${p.cat}</span>` : '';

    const preview = p.video
      ? `<div class="oc-prev" data-video="${p.video}">
           <video preload="metadata" muted loop playsinline poster=""></video>
           <span class="oc-num mono">${num}</span>
         </div>`
      : `<div class="oc-prev oc-prev-cta">
           <span class="oc-num mono">${num}</span>
           <div class="oc-center">
             <span class="oc-big">${p.ctaBig || p.client}</span>
             <a href="${CALENDLY}" target="_blank" rel="noopener noreferrer" class="pill-btn oc-cta-btn">
               <span>Book a Discovery Call</span>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="chev"><path d="M9 6l6 6-6 6"/></svg>
             </a>
           </div>
         </div>`;

    return `
      <article class="oc${p.tag === 'cta' ? ' oc-cta' : ''}">
        ${preview}
        <div class="oc-body">
          <div class="oc-head">
            <span class="oc-client">${p.client}</span>
          </div>
          <h3 class="oc-title">${p.subj}</h3>
          <p class="oc-prev-text">${p.prev}</p>
          <div class="oc-meta">${cat}${chip}</div>
        </div>
      </article>
    `;
  }).join('');

  root.innerHTML = cards;

  // Autoplay videos only when their card is in view — pause when offscreen
  if (!('IntersectionObserver' in window)) {
    root.querySelectorAll('.oc-prev[data-video]').forEach(prev => {
      const v = prev.querySelector('video');
      v.src = prev.dataset.video;
      v.play().catch(() => {});
    });
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const prev = entry.target;
      const v = prev.querySelector('video');
      if (!v) return;
      if (entry.isIntersecting) {
        if (!v.src) v.src = prev.dataset.video;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.35 });

  root.querySelectorAll('.oc-prev[data-video]').forEach(el => io.observe(el));
}

// ─── Mobile nav drawer ───────────────────────────────────────────────────────

function initNavDrawer() {
  const btn    = document.getElementById('nav-mobile-btn');
  const drawer = document.getElementById('nav-drawer');
  if (!btn || !drawer) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
    drawer.classList.toggle('open', open);
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', () => {
    const open = drawer.classList.contains('open');
    setOpen(!open);
  });

  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });

  // Close drawer when viewport returns to desktop width
  const mq = window.matchMedia('(min-width: 768px)');
  const onChange = () => { if (mq.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else if (mq.addListener) mq.addListener(onChange);
}

// ─── Boot ─────────────────────────────────────────────────────────────────────

buildFaq();
buildServices();
buildProcess();
buildPricing();
buildMobileShowcase();
initShowcase();
initReveal();
initNavAutoHide();
initNavDrawer();
