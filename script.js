/* ==========================================================================
   Chaman Sengar Portfolio — Interactive Vanilla JS Engine
   Zero dependencies: Neural Canvas, Terminal CLI, Spotlight, Modal, & GH Sync
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Grounded Portfolio Data (from github.com/Chamansengar)
     ------------------------------------------------------------------------ */
  const PROJECTS = [
    {
      id: 'deepfake-web',
      title: 'Deepfake Detection AI — Multi-Modal Forensic Platform',
      kind: 'AI / ML • Full Stack',
      categories: ['ai', 'fullstack'],
      featured: true,
      liveUrl: 'https://deepfake-detection-web.vercel.app',
      repoUrl: 'https://github.com/Chamansengar/Deepfake_detection_Web',
      language: 'Python / FastAPI',
      summary:
        'Multi-modal forensic platform detecting manipulated images, videos, and synthetic voice recordings with Explainable AI heatmaps and a Dynamic Black Space UI.',
      stack: ['FastAPI', 'PyTorch', 'HuggingFace Transformers', 'Docker', 'Python'],
      pipeline: ['Media Upload', 'Face / Frame / Audio Extraction', 'PyTorch + Transformer Inference', 'Grad-CAM / Acoustic Forensics', 'Verdict & Confidence Report'],
      highlights: [
        'Supports multi-modal deepfake detection across images, video streams, and voice recordings.',
        'Containerized with Docker for Hugging Face Spaces & paired with a live Vercel frontend.',
        'Includes Colab training & deployment notebooks alongside FastAPI inference endpoints.'
      ]
    },
    {
      id: 'convo',
      title: 'Convo — Peer-to-Peer E2EE Video Conferencing',
      kind: 'Full Stack • Real-Time',
      categories: ['fullstack', 'realtime'],
      featured: false,
      liveUrl: 'https://convo-frontend-gules.vercel.app',
      repoUrl: 'https://github.com/Chamansengar/Video-Conferencing-Application',
      language: 'JavaScript / WebRTC',
      summary:
        'Secure peer-to-peer video conferencing built with WebRTC, React, and Node.js featuring optional AES end-to-end encryption via Insertable Streams and local recording.',
      stack: ['WebRTC', 'React', 'Node.js', 'JWT', 'MediaRecorder API'],
      pipeline: ['JWT / Guest Auth', 'Signaling Server', 'Direct P2P WebRTC Mesh', 'Insertable Streams AES E2EE', 'Screen Share, Chat & .webm Recording'],
      highlights: [
        'Direct peer-to-peer WebRTC media connections without third-party relay servers.',
        'Optional passcode-based AES end-to-end encryption using WebRTC Insertable Streams.',
        'Includes screen sharing, persistent room chat, meeting scheduling, and local .webm recording.'
      ]
    },
    {
      id: 'collab-edit',
      title: 'CollabEdit — CRDT Collaborative Document Editor',
      kind: 'Full Stack • Real-Time',
      categories: ['fullstack', 'realtime'],
      featured: false,
      liveUrl: null,
      repoUrl: 'https://github.com/Chamansengar/collab-edit',
      language: 'JavaScript / MERN',
      summary:
        'Real-time collaborative Markdown document platform powered by Yjs CRDTs and Socket.IO, enabling conflict-free multi-user editing, remote cursors, and version rollback.',
      stack: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Yjs CRDT'],
      pipeline: ['Client Markdown Buffer', 'Yjs CRDT State Vector', 'Socket.IO Broadcast', 'MongoDB Persistence & Snapshots', 'Version History Rollback'],
      highlights: [
        'Conflict-free concurrent editing powered by Yjs CRDT convergence.',
        'Live remote cursor & selection awareness across connected collaborators.',
        'Role-based access control (Owner, Admin, Editor, Viewer) with JWT refresh tokens.'
      ]
    },
    {
      id: 'deepfake-engine',
      title: 'DeepFake Detection Engine (Spatial-Temporal + Audio)',
      kind: 'AI / ML Research',
      categories: ['ai'],
      featured: false,
      liveUrl: null,
      repoUrl: 'https://github.com/Chamansengar/Deepfake-Ai-model-',
      language: 'Python / PyTorch',
      stars: 1,
      summary:
        'Hybrid spatial-temporal neural architecture combining MTCNN, InceptionResnetV1, and Transformer/LSTM sequence modeling with Wav2Vec2 audio forensics and Gradio UI.',
      stack: ['PyTorch', 'MTCNN', 'InceptionResnetV1', 'Wav2Vec2', 'Grad-CAM', 'Gradio'],
      pipeline: ['MTCNN Face Crop', 'InceptionResnetV1 Embeddings', 'Transformer / LSTM Sequence', 'Wav2Vec2 + F0 Jitter Check', 'Grad-CAM + Mel-Spectrogram'],
      highlights: [
        'Frame-by-frame & sequence-aware temporal video detection with Test-Time Augmentation (TTA).',
        'Voice clone detection analyzing 0–8kHz Mel-Spectrograms and F0 pitch micro-jitter.',
        'Interactive Gradio interface with adjustable thresholds and chunk windows.'
      ]
    },
    {
      id: 'pushup-counter',
      title: 'AI Push-Up Counter & Pose Tracker',
      kind: 'Computer Vision',
      categories: ['ai'],
      featured: false,
      liveUrl: null,
      repoUrl: 'https://github.com/Chamansengar/Push-up-counter-',
      language: 'Python / OpenCV',
      summary:
        'Real-time computer vision workout assistant using MediaPipe pose landmark estimation and trigonometric joint-angle tracking to count reps accurately.',
      stack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      pipeline: ['Webcam Frame Capture', 'MediaPipe Pose Landmarks', 'Elbow & Shoulder Angle Math', 'State-Machine Rep Counter'],
      highlights: [
        'Tracks body keypoints in real time with MediaPipe Pose.',
        'Uses hysteresis angle thresholds to eliminate false rep counts.',
        'Includes automated unit verification in test_pushup_counter.py.'
      ]
    },
    {
      id: 'dsa-and-tools',
      title: 'Java DSA Solutions & Interactive Web Utilities',
      kind: 'CS Foundations',
      categories: ['fullstack'],
      featured: false,
      wideSpan: true,
      liveUrl: null,
      repoUrl: 'https://github.com/Chamansengar/Striver-A2Z-DSA-Sheet-Solution-using-JAVA',
      language: 'Java / HTML / JS',
      summary:
        'Structured algorithmic problem-solving across Striver’s A2Z DSA sheet in Java alongside foundational frontend tools like Working-calculator.',
      stack: ['Java', 'Algorithms & Data Structures', 'HTML5', 'CSS3', 'JavaScript'],
      pipeline: ['Problem Decomposition', 'Optimal Time/Space Complexity', 'Clean Java Implementation', 'Edge-Case Verification'],
      highlights: [
        'Systematic practice of arrays, trees, graphs, dynamic programming, and recursion in Java.',
        'Clean vanilla web utility builds strengthening core DOM & CSS fundamentals.'
      ]
    }
  ];

  const SKILLS = [
    { name: 'PyTorch', cat: 'ai', desc: 'Deep learning pipelines, spatial-temporal classifiers, and Grad-CAM visual explainability.', projects: ['Deepfake_detection_Web', 'Deepfake-Ai-model-'] },
    { name: 'HuggingFace Transformers', cat: 'ai', desc: 'Pretrained transformer & Wav2Vec2 acoustic models for multimodal deepfake detection.', projects: ['Deepfake_detection_Web', 'Deepfake-Ai-model-'] },
    { name: 'OpenCV & MediaPipe', cat: 'ai', desc: 'Real-time video frame extraction, face detection, and pose landmark geometry.', projects: ['Push-up-counter-', 'Deepfake-Ai-model-'] },
    { name: 'Pandas / NumPy / Plotly', cat: 'ai', desc: 'Data preprocessing, numerical computing, and forensic signal visualizations.', projects: ['Deepfake-Ai-model-', 'Push-up-counter-'] },
    { name: 'React & TypeScript', cat: 'web', desc: 'Component-driven interactive UIs for video conferencing, collaborative editing, and dashboards.', projects: ['Convo-frontend', 'collab-edit'] },
    { name: 'Node.js & Express', cat: 'web', desc: 'REST APIs, JWT refresh-token auth, signaling servers, and role-based access control.', projects: ['Convo-backend', 'collab-edit'] },
    { name: 'FastAPI', cat: 'web', desc: 'High-performance Python async backend serving ML inference endpoints.', projects: ['Deepfake_detection_Web'] },
    { name: 'WebRTC & Socket.IO', cat: 'web', desc: 'Direct P2P audio/video streams, AES Insertable Streams E2EE, and real-time rooms.', projects: ['Video-Conferencing-Application', 'collab-edit'] },
    { name: 'Yjs (CRDT)', cat: 'web', desc: 'Conflict-free replicated data types for zero-lag concurrent document editing.', projects: ['collab-edit'] },
    { name: 'HTML5 / CSS3 / JS', cat: 'web', desc: 'Semantic markup, responsive CSS systems, Canvas animations, and vanilla DOM engineering.', projects: ['Working-calculator', 'Portfolio'] },
    { name: 'MongoDB & MySQL', cat: 'cloud', desc: 'Schema design, document snapshots, and relational persistence.', projects: ['collab-edit', 'Convo-backend'] },
    { name: 'AWS & Vercel', cat: 'cloud', desc: 'Cloud exploration, serverless/edge frontend deployments, and full-stack hosting.', projects: ['Deepfake_detection_Web', 'Convo-frontend'] },
    { name: 'Docker & Firebase', cat: 'cloud', desc: 'Reproducible ML inference containers and real-time cloud app backends.', projects: ['Deepfake_detection_Web'] },
    { name: 'Python', cat: 'lang', desc: 'Primary language for AI/ML research, computer vision, and FastAPI services.', projects: ['Deepfake_detection_Web', 'Push-up-counter-'] },
    { name: 'JavaScript / TypeScript', cat: 'lang', desc: 'Full-stack MERN engineering, async real-time protocols, and browser APIs.', projects: ['Convo-frontend', 'collab-edit'] },
    { name: 'Java / C / C++', cat: 'lang', desc: 'Data structures, algorithms (Striver A2Z DSA), and systems programming fundamentals.', projects: ['Striver-A2Z-DSA-Sheet'] }
  ];

  const REPOS_FALLBACK = [
    { name: 'Deepfake_detection_Web', lang: 'Python', desc: 'Multi-Modal Forensic Platform (FastAPI + PyTorch + Docker)', url: 'https://github.com/Chamansengar/Deepfake_detection_Web', homepage: 'https://deepfake-detection-web.vercel.app', stars: 0 },
    { name: 'Deepfake-Ai-model-', lang: 'Python', desc: 'Hybrid spatial-temporal video & Wav2Vec2 audio deepfake engine', url: 'https://github.com/Chamansengar/Deepfake-Ai-model-', homepage: null, stars: 1 },
    { name: 'Video-Conferencing-Application', lang: 'JavaScript', desc: 'Convo — P2P WebRTC video conferencing with AES E2EE', url: 'https://github.com/Chamansengar/Video-Conferencing-Application', homepage: null, stars: 0 },
    { name: 'Convo-frontend', lang: 'JavaScript', desc: 'Frontend client for Convo P2P video platform', url: 'https://github.com/Chamansengar/Convo-frontend', homepage: 'https://convo-frontend-gules.vercel.app', stars: 0 },
    { name: 'Convo-backend', lang: 'JavaScript', desc: 'Signaling & REST backend for Convo', url: 'https://github.com/Chamansengar/Convo-backend', homepage: 'https://convo-backend-kappa.vercel.app', stars: 0 },
    { name: 'collab-edit', lang: 'JavaScript', desc: 'Real-time collaborative Markdown editor with Yjs CRDT & Socket.IO', url: 'https://github.com/Chamansengar/collab-edit', homepage: null, stars: 0 },
    { name: 'Push-up-counter-', lang: 'Python', desc: 'Computer vision workout tracker using MediaPipe & OpenCV', url: 'https://github.com/Chamansengar/Push-up-counter-', homepage: null, stars: 0 },
    { name: 'Striver-A2Z-DSA-Sheet-Solution-using-JAVA', lang: 'Java', desc: 'Striver A2Z DSA course/sheet solutions in Java', url: 'https://github.com/Chamansengar/Striver-A2Z-DSA-Sheet-Solution-using-JAVA', homepage: null, stars: 0 },
    { name: 'Working-calculator', lang: 'HTML', desc: 'Arithmetic problem-solving web calculator', url: 'https://github.com/Chamansengar/Working-calculator', homepage: null, stars: 0 }
  ];

  /* ------------------------------------------------------------------------
     2. Theme & Interactive Accent Palette Persistence
     ------------------------------------------------------------------------ */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const metaThemeColor = document.getElementById('metaThemeColor');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0f172a' : '#f7f8fc');
    }
  }

  function applyPalette(palette) {
    root.setAttribute('data-palette', palette);
    document.querySelectorAll('[data-palette-btn]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.paletteBtn === palette);
    });
  }

  const savedTheme = localStorage.getItem('chaman-theme-v2');
  applyTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light');

  const savedPalette = localStorage.getItem('chaman-palette-v2');
  applyPalette(['indigo', 'ocean', 'emerald'].includes(savedPalette) ? savedPalette : 'indigo');

  themeToggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('chaman-theme-v2', next);
    showToast(`Switched to ${next === 'dark' ? 'Midnight Slate Dark' : 'Studio Warm Light'} theme`);
  });

  const PALETTE_LABELS = {
    indigo: 'Indigo & Teal',
    ocean: 'Ocean & Coral',
    emerald: 'Emerald & Cobalt'
  };

  function setPalette(palette) {
    if (!PALETTE_LABELS[palette]) return;
    applyPalette(palette);
    localStorage.setItem('chaman-palette-v2', palette);
    showToast(`Palette: ${PALETTE_LABELS[palette]}`);
  }

  document.querySelectorAll('[data-palette-btn]').forEach((btn) => {
    btn.addEventListener('click', () => setPalette(btn.dataset.paletteBtn));
  });

  /* ------------------------------------------------------------------------
     3. Toast Notification Helper
     ------------------------------------------------------------------------ */
  const toastEl = document.getElementById('toast');
  let toastTimer = null;
  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
  }

  /* ------------------------------------------------------------------------
     4. Neural Constellation Canvas Background
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('neuralCanvas');
  const ctx = canvas?.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canvas && ctx && !prefersReducedMotion) {
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const mouse = { x: -9999, y: -9999 };
    const nodeCount = Math.min(72, Math.max(32, Math.floor((w * h) / 22000)));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 1.1
    }));

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    function animateCanvas() {
      ctx.clearRect(0, 0, w, h);
      const isLight = root.getAttribute('data-theme') === 'light';
      const styles = getComputedStyle(root);
      const primaryRgb = styles.getPropertyValue('--accent-rgb').trim() || '67, 56, 202';
      const secondaryRgb = styles.getPropertyValue('--accent-secondary-rgb').trim() || '13, 148, 136';
      const nodeColor = `rgba(${primaryRgb}, ${isLight ? 0.28 : 0.42})`;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${primaryRgb}, ${(1 - dist / 135) * (isLight ? 0.12 : 0.16)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect to cursor
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 170) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${secondaryRgb}, ${(1 - md / 170) * (isLight ? 0.28 : 0.34)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
      requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
  }

  /* ------------------------------------------------------------------------
     5. Spotlight & Subtle 3D Tilt Effects
     ------------------------------------------------------------------------ */
  function bindSpotlightAndTilt(scope = document) {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;
    scope.querySelectorAll('.spotlight-card').forEach((card) => {
      if (card.dataset.boundSpotlight) return;
      card.dataset.boundSpotlight = '1';

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        if (card.hasAttribute('data-tilt')) {
          const rx = ((y / rect.height) - 0.5) * -5;
          const ry = ((x / rect.width) - 0.5) * 5;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        if (card.hasAttribute('data-tilt')) {
          card.style.transform = '';
        }
      });
    });
  }
  bindSpotlightAndTilt();

  /* ------------------------------------------------------------------------
     6. Typewriter Role Rotator
     ------------------------------------------------------------------------ */
  const roles = [
    'Full Stack MERN Developer',
    'AI & Deep Learning Engineer',
    'WebRTC & CRDT Systems Builder',
    'B.Tech CSE (AI) Undergraduate'
  ];
  const typeEl = document.getElementById('typewriterText');
  if (typeEl && !prefersReducedMotion) {
    let roleIdx = 0;
    let charIdx = roles[0].length;
    let deleting = true;

    const tick = () => {
      const current = roles[roleIdx];
      if (deleting) {
        charIdx--;
        typeEl.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          setTimeout(tick, 320);
          return;
        }
        setTimeout(tick, 34);
      } else {
        charIdx++;
        typeEl.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
        setTimeout(tick, 58);
      }
    };
    setTimeout(tick, 2000);
  }

  /* ------------------------------------------------------------------------
     7. Interactive Developer Terminal
     ------------------------------------------------------------------------ */
  const termOutput = document.getElementById('terminalOutput');
  const termForm = document.getElementById('terminalForm');
  const termInput = document.getElementById('terminalInput');
  const termClear = document.getElementById('terminalClear');

  function appendTerm(cmd, responseHtml) {
    if (!termOutput) return;
    const line = document.createElement('div');
    line.className = 'term-line';
    line.innerHTML = `<span class="term-prompt">$</span> ${escapeHtml(cmd)}`;
    const resp = document.createElement('div');
    resp.className = 'term-resp';
    resp.innerHTML = responseHtml;
    termOutput.append(line, resp);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  function runTerminalCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      termOutput.innerHTML = '';
      return;
    }

    const commands = {
      help: 'Commands: <code>whoami</code>, <code>projects</code>, <code>stack</code>, <code>education</code>, <code>contact</code>, <code>open deepfake</code>, <code>open convo</code>, <code>open collab</code>, <code>github</code>, <code>theme</code>, <code>palette indigo|ocean|emerald</code>, <code>clear</code>',
      whoami: 'Chaman Sengar (@Chamansengar) — Full Stack MERN &amp; AI/ML Engineer based in Ghaziabad, India.',
      education: 'B.Tech in Computer Science &amp; Engineering (Artificial Intelligence) • Active DSA &amp; System Design learner.',
      stack: 'AI/ML: PyTorch, Transformers, OpenCV, MediaPipe • Web: React, Node.js, FastAPI, WebRTC, Yjs CRDT • Cloud: AWS, Vercel, Docker, MongoDB.',
      projects: '1) Deepfake_detection_Web (Live) 2) Convo WebRTC E2EE (Live) 3) CollabEdit CRDT 4) DeepFake Engine 5) Push-Up Counter. Type <code>open deepfake</code>, <code>open convo</code>, or <code>open collab</code>.',
      contact: 'Email: chamansengarng@gmail.com | GitHub: github.com/Chamansengar | LinkedIn: chaman-sengar-b96bb3368',
      github: () => {
        window.open('https://github.com/Chamansengar', '_blank', 'noopener');
        return 'Opening github.com/Chamansengar in a new tab...';
      },
      'open deepfake': () => {
        openProjectModal('deepfake-web');
        return 'Opening Deepfake Detection AI architecture modal...';
      },
      'open convo': () => {
        openProjectModal('convo');
        return 'Opening Convo P2P Video Conferencing architecture modal...';
      },
      'open collab': () => {
        openProjectModal('collab-edit');
        return 'Opening CollabEdit CRDT architecture modal...';
      },
      theme: () => {
        themeToggle?.click();
        return 'Toggled Light / Slate Dark mode.';
      },
      'palette indigo': () => {
        setPalette('indigo');
        return 'Applied Indigo &amp; Teal accent palette.';
      },
      'palette ocean': () => {
        setPalette('ocean');
        return 'Applied Ocean &amp; Coral accent palette.';
      },
      'palette emerald': () => {
        setPalette('emerald');
        return 'Applied Emerald &amp; Cobalt accent palette.';
      }
    };

    const handler = commands[cmd];
    if (typeof handler === 'function') {
      appendTerm(raw, handler());
    } else if (handler) {
      appendTerm(raw, handler);
    } else {
      appendTerm(raw, `Command not found: <code>${escapeHtml(raw)}</code>. Try <code>help</code>.`);
    }
  }

  termForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    runTerminalCommand(termInput.value);
    termInput.value = '';
  });

  termClear?.addEventListener('click', () => {
    if (termOutput) termOutput.innerHTML = '';
  });

  document.querySelectorAll('.term-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      runTerminalCommand(chip.dataset.cmd || '');
    });
  });

  /* ------------------------------------------------------------------------
     8. Projects Grid, Filter Tabs & Architecture Modal
     ------------------------------------------------------------------------ */
  const projectsGrid = document.getElementById('projectsGrid');
  const projectModal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    const items = PROJECTS.filter((p) => filter === 'all' || p.categories.includes(filter));

    projectsGrid.innerHTML = items
      .map((p) => {
        const featuredCls = p.featured && filter === 'all' ? ' featured' : '';
        const wideCls = p.wideSpan && filter === 'all' ? ' wide-span' : '';
        const liveBadge = p.liveUrl ? `<span class="live-pill">Live</span>` : '';
        const starBadge = p.stars ? `<span>★ ${p.stars}</span>` : '';
        const liveLink = p.liveUrl
          ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-link" onclick="event.stopPropagation()">Live App ↗</a>`
          : '';

        return `
          <article class="project-card glass-card spotlight-card${featuredCls}${wideCls}" data-project-id="${p.id}" data-tilt tabindex="0">
            <div class="project-top">
              <span class="project-kind">${p.kind}</span>
              <div class="project-badges">
                ${liveBadge}
                ${starBadge}
                <span>${p.language}</span>
              </div>
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.summary}</p>
            <div class="project-stack">
              ${p.stack.map((t) => `<span class="stack-tag">${t}</span>`).join('')}
            </div>
            <div class="project-actions">
              <div class="project-links">
                <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="text-link" onclick="event.stopPropagation()">GitHub ↗</a>
                ${liveLink}
              </div>
              <button type="button" class="inspect-btn" data-inspect="${p.id}">Inspect Architecture</button>
            </div>
          </article>
        `;
      })
      .join('');

    bindSpotlightAndTilt(projectsGrid);

    projectsGrid.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('click', () => openProjectModal(card.dataset.projectId));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(card.dataset.projectId);
        }
      });
    });
  }

  function openProjectModal(projectId) {
    const p = PROJECTS.find((item) => item.id === projectId);
    if (!p || !projectModal || !modalBody) return;

    modalBody.innerHTML = `
      <span class="project-kind">${p.kind}</span>
      <h3>${p.title}</h3>
      <p class="section-subtitle">${p.summary}</p>

      <span class="modal-section-label">SYSTEM PIPELINE &amp; DATA FLOW</span>
      <div class="arch-pipeline">
        ${p.pipeline
          .map((step, i) => `<span class="arch-node">${step}</span>${i < p.pipeline.length - 1 ? '<span class="arch-arrow">→</span>' : ''}`)
          .join('')}
      </div>

      <span class="modal-section-label">ENGINEERING HIGHLIGHTS</span>
      <ul class="highlight-list">
        ${p.highlights.map((h) => `<li>${h}</li>`).join('')}
      </ul>

      <span class="modal-section-label">TECH STACK</span>
      <div class="project-stack" style="margin-bottom: 1.5rem;">
        ${p.stack.map((t) => `<span class="stack-tag">${t}</span>`).join('')}
      </div>

      <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
        <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">View Source on GitHub ↗</a>
        ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Open Live Deployment ↗</a>` : ''}
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
  }

  function closeModals() {
    projectModal?.classList.remove('open');
    projectModal?.setAttribute('aria-hidden', 'true');
    cmdPalette?.classList.remove('open');
    cmdPalette?.setAttribute('aria-hidden', 'true');
  }

  modalClose?.addEventListener('click', closeModals);
  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModals();
  });

  document.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderProjects(btn.dataset.filter);
    });
  });

  renderProjects('all');

  /* ------------------------------------------------------------------------
     9. Interactive Tech Constellation
     ------------------------------------------------------------------------ */
  const skillsCloud = document.getElementById('skillsCloud');
  const inspectorTitle = document.getElementById('inspectorTitle');
  const inspectorDesc = document.getElementById('inspectorDesc');
  const inspectorProjects = document.getElementById('inspectorProjects');

  function selectSkill(skill) {
    if (!inspectorTitle || !inspectorDesc || !inspectorProjects) return;
    inspectorTitle.textContent = skill.name;
    inspectorDesc.textContent = skill.desc;
    inspectorProjects.innerHTML = skill.projects
      .map((proj) => `<span class="inspector-proj-chip">${proj}</span>`)
      .join('');

    skillsCloud?.querySelectorAll('.skill-pill').forEach((el) => {
      el.classList.toggle('active', el.dataset.skill === skill.name);
    });
  }

  function renderSkills(cat = 'all') {
    if (!skillsCloud) return;
    const filtered = SKILLS.filter((s) => cat === 'all' || s.cat === cat);
    skillsCloud.innerHTML = filtered
      .map(
        (s) => `
        <button type="button" class="skill-pill" data-skill="${s.name}">
          <span class="skill-cat-dot dot-${s.cat}"></span>
          <span>${s.name}</span>
        </button>
      `
      )
      .join('');

    skillsCloud.querySelectorAll('.skill-pill').forEach((btn, idx) => {
      const skillObj = filtered[idx];
      btn.addEventListener('click', () => selectSkill(skillObj));
    });

    if (filtered[0]) selectSkill(filtered[0]);
  }

  document.querySelectorAll('[data-skill-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-skill-filter]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.dataset.skillFilter);
    });
  });

  renderSkills('all');

  /* ------------------------------------------------------------------------
     10. GitHub Telemetry & Live Hydration (with offline fallback)
     ------------------------------------------------------------------------ */
  const repoListEl = document.getElementById('repoList');

  function renderRepos(repos) {
    if (!repoListEl) return;
    repoListEl.innerHTML = repos
      .map(
        (r) => `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="repo-row">
          <div>
            <div class="repo-name">${escapeHtml(r.name)}</div>
            <div class="repo-sub">${escapeHtml(r.desc || 'Public GitHub repository')}</div>
          </div>
          <div class="repo-meta">
            ${r.homepage ? '<span class="live-pill">Live</span>' : ''}
            <span>${escapeHtml(r.lang || 'Docs')}</span>
            <span>★ ${r.stars ?? 0}</span>
          </div>
        </a>
      `
      )
      .join('');
  }

  renderRepos(REPOS_FALLBACK);

  async function syncLiveGitHub() {
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch('https://api.github.com/users/Chamansengar'),
        fetch('https://api.github.com/users/Chamansengar/repos?sort=updated&per_page=15')
      ]);
      if (!userRes.ok || !reposRes.ok) return;

      const user = await userRes.json();
      const repos = await reposRes.json();

      if (typeof user.public_repos === 'number') {
        document.getElementById('ghRepoCount').textContent = user.public_repos;
        document.getElementById('statRepos').textContent = user.public_repos;
      }
      if (typeof user.followers === 'number') {
        document.getElementById('ghFollowers').textContent = user.followers;
      }
      const statusEl = document.getElementById('ghSyncStatus');
      if (statusEl) statusEl.textContent = '● Live GitHub API Synced';

      if (Array.isArray(repos) && repos.length > 0) {
        const mapped = repos
          .filter((r) => r.name !== 'Chamansengar')
          .map((r) => {
            const fallbackMatch = REPOS_FALLBACK.find((f) => f.name === r.name);
            return {
              name: r.name,
              lang: r.language || fallbackMatch?.lang || 'Code',
              desc: r.description || fallbackMatch?.desc || 'Public repository by Chaman Sengar',
              url: r.html_url,
              homepage: r.homepage || fallbackMatch?.homepage || null,
              stars: r.stargazers_count || 0
            };
          });
        renderRepos(mapped);
      }
    } catch {
      // Gracefully keep verified static snapshot when offline or rate-limited
    }
  }
  syncLiveGitHub();

  /* ------------------------------------------------------------------------
     11. Command Palette (Ctrl + K)
     ------------------------------------------------------------------------ */
  const cmdPalette = document.getElementById('cmdPalette');
  const cmdTrigger = document.getElementById('cmdTrigger');
  const cmdInput = document.getElementById('cmdInput');
  const cmdResults = document.getElementById('cmdResults');

  const CMD_ITEMS = [
    { label: 'Go to About & Pillars', type: 'Section', run: () => { location.hash = '#about'; } },
    { label: 'Go to Featured Projects', type: 'Section', run: () => { location.hash = '#projects'; } },
    { label: 'Go to Tech Stack Constellation', type: 'Section', run: () => { location.hash = '#skills'; } },
    { label: 'Go to GitHub Telemetry', type: 'Section', run: () => { location.hash = '#github-activity'; } },
    { label: 'Go to Contact', type: 'Section', run: () => { location.hash = '#contact'; } },
    { label: 'Inspect: Deepfake Detection AI', type: 'Project', run: () => openProjectModal('deepfake-web') },
    { label: 'Inspect: Convo P2P Video Conferencing', type: 'Project', run: () => openProjectModal('convo') },
    { label: 'Inspect: CollabEdit CRDT Editor', type: 'Project', run: () => openProjectModal('collab-edit') },
    { label: 'Inspect: DeepFake Detection Engine', type: 'Project', run: () => openProjectModal('deepfake-engine') },
    { label: 'Inspect: Push-Up Counter (OpenCV)', type: 'Project', run: () => openProjectModal('pushup-counter') },
    { label: 'Toggle Light / Slate Dark Mode', type: 'Theme', run: () => themeToggle?.click() },
    { label: 'Palette: Indigo & Teal', type: 'Theme', run: () => setPalette('indigo') },
    { label: 'Palette: Ocean & Coral', type: 'Theme', run: () => setPalette('ocean') },
    { label: 'Palette: Emerald & Cobalt', type: 'Theme', run: () => setPalette('emerald') },
    { label: 'Copy Email (chamansengarng@gmail.com)', type: 'Action', run: () => copyText('chamansengarng@gmail.com') },
    { label: 'Open GitHub Profile ↗', type: 'External', run: () => window.open('https://github.com/Chamansengar', '_blank', 'noopener') }
  ];

  function renderCmdItems(query = '') {
    if (!cmdResults) return;
    const q = query.trim().toLowerCase();
    const matches = CMD_ITEMS.filter((item) => item.label.toLowerCase().includes(q) || item.type.toLowerCase().includes(q));
    cmdResults.innerHTML = matches.length
      ? matches
          .map(
            (m, i) => `
          <button type="button" class="cmd-item" data-cmd-idx="${i}">
            <span>${m.label}</span>
            <span class="cmd-item-type">${m.type}</span>
          </button>
        `
          )
          .join('')
      : `<div class="cmd-item"><span style="color:var(--text-muted)">No matching commands</span></div>`;

    cmdResults.querySelectorAll('[data-cmd-idx]').forEach((btn) => {
      const idx = Number(btn.dataset.cmdIdx);
      btn.addEventListener('click', () => {
        closeModals();
        matches[idx].run();
      });
    });
  }

  function openCmdPalette() {
    if (!cmdPalette || !cmdInput) return;
    cmdPalette.classList.add('open');
    cmdPalette.setAttribute('aria-hidden', 'false');
    cmdInput.value = '';
    renderCmdItems('');
    setTimeout(() => cmdInput.focus(), 40);
  }

  cmdTrigger?.addEventListener('click', openCmdPalette);
  cmdInput?.addEventListener('input', (e) => renderCmdItems(e.target.value));
  cmdPalette?.addEventListener('click', (e) => {
    if (e.target === cmdPalette) closeModals();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdPalette?.classList.contains('open')) closeModals();
      else openCmdPalette();
    } else if (e.key === 'Escape') {
      closeModals();
    }
  });

  /* ------------------------------------------------------------------------
     12. Contact Copy & Form Handler
     ------------------------------------------------------------------------ */
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`Copied: ${text}`);
    } catch {
      showToast(text);
    }
  }

  document.getElementById('copyEmailBtn')?.addEventListener('click', (e) => {
    copyText(e.currentTarget.dataset.copy || 'chamansengarng@gmail.com');
  });

  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const message = document.getElementById('senderMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in your name, email, and message.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:chamansengarng@gmail.com?subject=${subject}&body=${body}`;
    showToast('Opening your email client with the message...');
    contactForm.reset();
  });

  /* ------------------------------------------------------------------------
     13. Scroll Progress, Active Nav, Mobile Drawer & Intersection Reveal
     ------------------------------------------------------------------------ */
  const scrollProgress = document.getElementById('scrollProgress');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  window.addEventListener(
    'scroll',
    () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollProgress && maxScroll > 0) {
        scrollProgress.style.width = `${(scrollTop / maxScroll) * 100}%`;
      }

      let currentId = '';
      sections.forEach((sec) => {
        if (scrollTop >= sec.offsetTop - 130) currentId = sec.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    },
    { passive: true }
  );

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  mobileMenuBtn?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav?.classList.remove('open');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }
})();
