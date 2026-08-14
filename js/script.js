/* =========================================================
   JACOBABAD CITY — SCRIPT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById('nav');
  const toTopBtn = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 40;
    nav.classList.toggle('scrolled', scrolled);
    toTopBtn.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });

  toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('mobile-open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    burger.classList.remove('open');
  }));

  /* ---------- Scrollspy (active nav link) ---------- */
  const sections = [...document.querySelectorAll('section[id], footer[id]')];
  const links = [...navLinks.querySelectorAll('a')];
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spyObserver.observe(s));

  /* ---------- Theme toggle (day / night) ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const knob = themeToggle.querySelector('.knob');
  const body = document.body;
  const applyTheme = (t) => {
    body.setAttribute('data-theme', t);
    knob.textContent = t === 'night' ? '☾' : '☀';
    try { localStorage.setItem('jcb-theme', t); } catch (e) {}
  };
  let savedTheme = 'day';
  try { savedTheme = localStorage.getItem('jcb-theme') || 'day'; } catch (e) {}
  applyTheme(savedTheme);
  themeToggle.addEventListener('click', () => {
    applyTheme(body.getAttribute('data-theme') === 'day' ? 'night' : 'day');
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Animated stat counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => countObserver.observe(c));

  /* ---------- Ajrak scrolling band content ---------- */
  const ajrakWords = ['Jacobabad', 'جیکب آباد', 'Founded 1847', 'قیام 1847ء', 'Sindh · Pakistan', 'City of Heat & Heritage'];
  const ajrakRow = document.getElementById('ajrakRow');
  if (ajrakRow) {
    const build = ajrakWords.concat(ajrakWords).map(w => `<span>${w}</span>`).join('');
    ajrakRow.innerHTML = build + build;
  }

  /* ---------- Hero + Map search ---------- */
  const mapFrame = document.getElementById('mapFrame');
  const goToMap = (query) => {
    const q = encodeURIComponent(`${query} Jacobabad Sindh Pakistan`);
    if (mapFrame) mapFrame.src = `https://www.google.com/maps?q=${q}&output=embed`;
    const mapSection = document.getElementById('map');
    if (mapSection) mapSection.scrollIntoView({ behavior: 'smooth' });
  };

  const heroForm = document.getElementById('heroSearchForm');
  const heroInput = document.getElementById('heroSearchInput');
  heroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = heroInput.value.trim();
    if (val) goToMap(val);
  });

  const mapForm = document.getElementById('mapSearchForm');
  const mapInput = document.getElementById('mapSearchInput');
  mapForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = mapInput.value.trim();
    if (val) {
      const q = encodeURIComponent(`${val} Jacobabad Sindh Pakistan`);
      mapFrame.src = `https://www.google.com/maps?q=${q}&output=embed`;
    }
  });

  document.querySelectorAll('.map-chips button').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = encodeURIComponent(btn.getAttribute('data-q'));
      mapFrame.src = `https://www.google.com/maps?q=${q}&output=embed`;
      mapInput.value = btn.getAttribute('data-q');
    });
  });

  /* ---------- Lightbox: gallery + place cards, each with title/history ---------- */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbTitle = document.getElementById('lbTitle');
  const lbHistory = document.getElementById('lbHistory');
  const lbCategory = document.getElementById('lbCategory');
  let activeGroup = [];
  let lbIndex = 0;

  const openLightbox = (group, i) => {
    activeGroup = group;
    lbIndex = (i + group.length) % group.length;
    const btn = group[lbIndex];
    lbImg.src = btn.getAttribute('data-full');
    lbImg.alt = btn.getAttribute('data-title') || '';
    lbTitle.textContent = btn.getAttribute('data-title') || '';
    lbHistory.textContent = btn.getAttribute('data-history') || '';
    const cat = btn.getAttribute('data-category');
    if (cat) { lbCategory.textContent = cat; lbCategory.style.display = 'inline-flex'; }
    else { lbCategory.style.display = 'none'; }
    lightbox.classList.add('open');
  };
  const closeLightbox = () => lightbox.classList.remove('open');

  const galleryButtons = [...document.querySelectorAll('#galleryGrid button')];
  galleryButtons.forEach((btn, i) => btn.addEventListener('click', () => openLightbox(galleryButtons, i)));

  const placeCards = [...document.querySelectorAll('.place-card')];
  placeCards.forEach((card, i) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // let "View on map" link work normally
      openLightbox(placeCards, i);
    });
  });

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbNext').addEventListener('click', () => openLightbox(activeGroup, lbIndex + 1));
  document.getElementById('lbPrev').addEventListener('click', () => openLightbox(activeGroup, lbIndex - 1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') openLightbox(activeGroup, lbIndex + 1);
    if (e.key === 'ArrowLeft') openLightbox(activeGroup, lbIndex - 1);
  });

  /* ---------- Newspaper: live clock + day strip ---------- */
  const newsDate = document.getElementById('newsDate');
  const newsTime = document.getElementById('newsTime');
  const tickClock = () => {
    const now = new Date();
    newsDate.textContent = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    newsTime.textContent = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  };
  tickClock();
  setInterval(tickClock, 1000 * 30);

  const dayStrip = document.getElementById('dayStrip');
  const today = new Date();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    const isToday = d.toDateString() === today.toDateString();
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'day-chip' + (isToday ? ' today' : '');
    chip.innerHTML = `${dayNames[d.getDay()]}<b>${d.getDate()}</b>`;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.day-chip').forEach(c => c.classList.remove('today'));
      chip.classList.add('today');
      newsDate.textContent = d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    });
    dayStrip.appendChild(chip);
  }

  /* ---------- Contact form (submits to FormSubmit — real email delivery) ---------- */
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        btn.textContent = 'Message sent ✓';
        contactForm.reset();
      } else {
        btn.textContent = 'Could not send — try email directly';
      }
    } catch (err) {
      btn.textContent = 'Could not send — try email directly';
    }
    setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 3200);
  });

});
