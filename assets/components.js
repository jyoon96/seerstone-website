/* SeerStone — components.js
 * Vanilla JS implementations of the spec's shared components:
 * Header, Footer (with watermark fitWatermark), AnimatedHeading,
 * FadeIn observer, count-up ProofBar, mobile menu, accordion.
 *
 * Pages call SS.init({ active: 'home' }) after DOM ready.
 */
(function(){
  const NAV = [
    { href: 'index.html',        label: 'About',         alt: 'home' },
    { href: 'about.html',        label: 'About',         alt: 'about' },
    { href: 'platform.html',     label: 'Platform' },
    { href: 'ai-marketing.html', label: 'AI Marketing' },
    { href: 'fulfillment.html',  label: 'Fulfillment' },
    { href: 'korea.html',        label: 'Korea' },
    { href: 'careers.html',      label: 'Careers' }
  ];
  // displayed nav (homepage's "About" link is the about page)
  const DISPLAY = [
    { href: 'about.html',        label: 'About',         key: 'about' },
    { href: 'platform.html',     label: 'Platform',      key: 'platform' },
    { href: 'ai-marketing.html', label: 'AI Marketing',  key: 'ai-marketing' },
    { href: 'fulfillment.html',  label: 'Fulfillment',   key: 'fulfillment' },
    { href: 'korea.html',        label: 'Korea',         key: 'korea' },
    { href: 'careers.html',      label: 'Careers',       key: 'careers' }
  ];

  function el(tag, props, kids) {
    const n = document.createElement(tag);
    if (props) for (const k in props) {
      if (k === 'style') Object.assign(n.style, props[k]);
      else if (k === 'class') n.className = props[k];
      else if (k === 'html') n.innerHTML = props[k];
      else if (k.startsWith('on')) n.addEventListener(k.slice(2).toLowerCase(), props[k]);
      else n.setAttribute(k, props[k]);
    }
    if (kids) (Array.isArray(kids)?kids:[kids]).forEach(k => k && n.appendChild(typeof k === 'string' ? document.createTextNode(k) : k));
    return n;
  }

  // ---------- HEADER ----------
  function buildHeader(active) {
    const shell = el('div', { class: 'header-shell' });
    const nav = el('nav', { class: 'nav liquid-glass', 'aria-label': 'Primary' });
    // logo: TODO replace with custom SVG when uploaded
    const logo = el('a', { href: 'index.html', class: 'nav-logo' }, 'SEERSTONE');

    const links = el('div', { class: 'nav-links' });
    DISPLAY.forEach(item => {
      const a = el('a', { href: item.href }, item.label);
      if (item.key === active) a.classList.add('active');
      links.appendChild(a);
    });

    const right = el('div', { class: 'flex items-center gap-3' });
    const contact = el('a', { href: 'contact.html', class: 'btn btn-primary' }, 'Contact');
    const ham = el('button', { class: 'nav-hamburger', 'aria-label': 'Open menu', onclick: toggleMobile },
      [el('span'), el('span'), el('span')]);
    right.appendChild(contact);
    right.appendChild(ham);

    nav.appendChild(logo);
    nav.appendChild(links);
    nav.appendChild(right);
    shell.appendChild(nav);

    // mobile menu
    const menu = el('div', { class: 'mobile-menu liquid-glass', id: 'ss-mobile-menu' });
    DISPLAY.concat([{ href: 'contact.html', label: 'Contact', key: 'contact' }]).forEach(item => {
      menu.appendChild(el('a', { href: item.href }, item.label));
    });
    return [shell, menu];
  }
  function toggleMobile() {
    const m = document.getElementById('ss-mobile-menu');
    if (m) m.classList.toggle('open');
  }

  // ---------- FOOTER ----------
  function buildFooter() {
    const footer = el('footer', { class: 'footer' });
    const grid = el('div', { class: 'footer-grid' });

    // LEFT card (deep navy, rock photo bg, Caveat "Stay in touch!", socials)
    const left = el('div', { class: 'footer-left' });
    // Rock cairn photograph — replaces the warm gradient placeholder.
    left.appendChild(el('div', { class: 'footer-left-rock', 'aria-hidden': 'true' }));
    left.appendChild(el('div', { class: 'footer-left-tint', 'aria-hidden': 'true' }));
    // wordmark
    left.appendChild(el('div', { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: '22px', letterSpacing: '-0.03em', textTransform: 'uppercase' } }, 'SEERSTONE'));
    // tagline (middle)
    left.appendChild(el('div', { class: 'footer-tagline', style:{ marginTop: '24px' } , html:
      'An AI-native consumer goods group.<br><span class="dim">Building, marketing, and shipping at scale.</span>'
    }));
    // "Stay in touch!" + socials removed per request.

    // RIGHT card (white, FloatingBadge, nav cols, bottom CTA + subscribe)
    const right = el('div', { class: 'footer-right' });

    // FLOATING BADGE #1: "Since day one." with "S" cube (CAVEAT MOMENT also)
    const badge = el('div', { class: 'float-badge', style: { top: '-32px', right: '40px', flexDirection: 'column', alignItems: 'flex-end' } });
    const cube = el('div', { class: 'float-cube' }, el('span', null, 'S'));
    badge.appendChild(cube);
    const labelRow = el('div', { style: { display:'flex', alignItems:'center', gap:'8px', marginTop:'8px' } });
    labelRow.appendChild(handArrow());
    labelRow.appendChild(el('span', { class: 'float-label' }, 'Since day one.'));
    badge.appendChild(labelRow);
    right.appendChild(badge);

    const cols = el('div', { class: 'footer-cols' });
    const navCol = el('div', { class: 'footer-col' });
    navCol.appendChild(el('div', { class: 'footer-col-title' }, 'Navigation'));
    const ul1 = el('ul');
    ['About|about.html','Platform|platform.html','AI Marketing|ai-marketing.html','Fulfillment|fulfillment.html','Korea|korea.html','Careers|careers.html'].forEach(s => {
      const [l,h] = s.split('|'); ul1.appendChild(el('li', null, el('a', { href: h }, l)));
    });
    navCol.appendChild(ul1);

    const reachCol = el('div', { class: 'footer-col' });
    reachCol.appendChild(el('div', { class: 'footer-col-title' }, 'Reach us'));
    const ul2 = el('ul');
    ['Contact|contact.html','Press inquiries|contact.html','Korean partners|korea.html','Careers|careers.html'].forEach(s => {
      const [l,h] = s.split('|'); ul2.appendChild(el('li', null, el('a', { href: h }, l)));
    });
    reachCol.appendChild(ul2);
    cols.appendChild(navCol); cols.appendChild(reachCol);
    right.appendChild(cols);

    // bottom row
    const bottom = el('div', { class: 'footer-bottom' });
    bottom.appendChild(el('div', { class: 'footer-copy' }, '© 2026 SeerStone Holdings. All rights reserved.'));
    const ctaBlock = el('div', { class: 'footer-cta-block' });
    ctaBlock.appendChild(el('div', { class: 'small' }, 'AI moves fast.'));
    ctaBlock.appendChild(el('a', { href: 'contact.html', class: 'big' }, 'Build with us →'));
    // subscribe pill removed per request.
    bottom.appendChild(ctaBlock);
    right.appendChild(bottom);

    grid.appendChild(left);
    grid.appendChild(right);
    footer.appendChild(grid);

    // watermark
    const wm = el('div', { class: 'footer-watermark', 'aria-hidden': 'true', html:
      '<svg id="watermarkSvg" viewBox="62 95 876 175" preserveAspectRatio="xMidYMid meet"><text id="watermarkText" x="500" y="240" text-anchor="middle" font-size="320">SEERSTONE</text></svg>'
    });
    footer.appendChild(wm);

    return footer;
  }

  function handArrow() {
    // a small hand-drawn arrow SVG, pointing up-right
    const wrap = document.createElement('span');
    wrap.className = 'float-arrow';
    wrap.innerHTML = `<svg width="46" height="28" viewBox="0 0 46 28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 22 C 10 10, 22 4, 40 6" />
      <path d="M40 6 L 34 2 M40 6 L 36 12" />
    </svg>`;
    return wrap;
  }

  function fitWatermark() {
    const svg = document.getElementById('watermarkSvg');
    const text = document.getElementById('watermarkText');
    if (!svg || !text) return;
    try {
      const bbox = text.getBBox();
      svg.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    } catch (e) {}
  }

  // ---------- ANIMATED HEADING ----------
  // Wraps each word in an inline-block container so individual chars
  // can animate without breaking words across lines.
  function animateHeadings() {
    document.querySelectorAll('[data-ah]').forEach(node => {
      const raw = node.getAttribute('data-ah') || node.textContent;
      node.innerHTML = '';
      node.classList.add('ah');
      const lines = raw.split('\n');
      let idx = 0;
      lines.forEach((line) => {
        const lineEl = document.createElement('span');
        lineEl.className = 'ah-line';
        // split into words but keep spaces as their own token
        const tokens = line.split(/(\s+)/);
        tokens.forEach(token => {
          if (token === '') return;
          if (/^\s+$/.test(token)) {
            // animated space — one char span so timing stays in sync
            const span = document.createElement('span');
            span.className = 'ah-char ah-space';
            span.textContent = '\u00A0';
            span.style.transitionDelay = (200 + idx * 30) + 'ms';
            lineEl.appendChild(span);
            idx++;
          } else {
            const word = document.createElement('span');
            word.className = 'ah-word';
            for (const ch of token) {
              const span = document.createElement('span');
              span.className = 'ah-char';
              span.textContent = ch;
              span.style.transitionDelay = (200 + idx * 30) + 'ms';
              word.appendChild(span);
              idx++;
            }
            lineEl.appendChild(word);
          }
        });
        node.appendChild(lineEl);
      });
      requestAnimationFrame(() => {
        node.querySelectorAll('.ah-char').forEach(c => c.classList.add('in'));
      });
    });
  }

  // ---------- FADE-IN ----------
  function observeFadeIns() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in').forEach(n => {
      if (n.hasAttribute('data-delay')) n.style.transitionDelay = n.getAttribute('data-delay') + 'ms';
      io.observe(n);
    });
  }

  // ---------- COUNT UP ----------
  function countUps() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const n = en.target;
          const target = parseFloat(n.getAttribute('data-target'));
          const prefix = n.getAttribute('data-prefix') || '';
          const suffix = n.getAttribute('data-suffix') || '';
          const decimals = parseInt(n.getAttribute('data-decimals') || '0', 10);
          const start = performance.now();
          const dur = 1200;
          function frame(t) {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const v = target * eased;
            n.textContent = prefix + (decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString()) + suffix;
            if (p < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
          io.unobserve(n);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('[data-countup]').forEach(n => io.observe(n));
  }

  // ---------- MARQUEE — keep track ≥ 2 × viewport for seamless loop ----------
  function fillMarquees() {
    document.querySelectorAll('.marquee').forEach(m => {
      const track = m.querySelector('.marquee-track');
      if (!track || track.dataset.filled === '1') return;
      const viewportWidth = window.innerWidth;
      // Repeatedly DOUBLE the track until it's ≥ 2× viewport. Doubling preserves
      // the seamless property: first half is always identical to second half,
      // so translateX(0 → -50%) cycles cleanly with no visible jump.
      let safety = 0;
      while (track.scrollWidth < viewportWidth * 2 && safety < 8) {
        const snapshot = [...track.children];
        snapshot.forEach(node => track.appendChild(node.cloneNode(true)));
        safety++;
      }
      track.dataset.filled = '1';
    });
  }
  // refill on resize (debounced)
  let resizeT;
  window.addEventListener('resize', () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => {
      document.querySelectorAll('.marquee-track[data-filled="1"]').forEach(t => {
        t.dataset.filled = '0';
      });
      fillMarquees();
    }, 200);
  });
  // ---------- ACCORDION ----------
  function bindAccordion() {
    document.querySelectorAll('.accordion-row').forEach(row => {
      const head = row.querySelector('.accordion-head');
      if (!head) return;
      head.addEventListener('click', () => row.classList.toggle('open'));
    });
  }

  // ---------- PUBLIC API ----------
  window.SS = {
    init({ active } = {}) {
      // header + mobile menu
      const headerNodes = buildHeader(active);
      headerNodes.forEach(n => document.body.insertBefore(n, document.body.firstChild));
      // skip link
      const skip = el('a', { href: '#main', class: 'skip-link' }, 'Skip to content');
      document.body.insertBefore(skip, document.body.firstChild);
      // footer
      const footer = buildFooter();
      // append at end of #footer-host or body
      const host = document.getElementById('footer-host') || document.body;
      host.appendChild(footer);

      // animations
      animateHeadings();
      observeFadeIns();
      countUps();
      bindAccordion();
      fillMarquees();

      // watermark fit
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(fitWatermark);
      } else {
        window.addEventListener('load', fitWatermark);
      }
      window.addEventListener('resize', fitWatermark);
    },
    handArrow
  };
})();
