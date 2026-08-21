/* ═══════════════════════════════════════════════════════════════════
   ORIFLAME ABUJA — APPLICATION LOGIC
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

// ── PRODUCT DATABASE ─────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'p001',
    name: 'NovAge Ecollagen Wrinkle Power Serum',
    category: 'skincare',
    price: 28500,
    badge: 'Best Seller',
    image: 'assets/images/novage_ecollagen_serum.jpg',
    desc: 'Marine ecollagen + ProRetinol complex. Clinically proven to reduce the appearance of deep wrinkles by up to 30% in 4 weeks. 30ml.',
    shades: [],
  },
  {
    id: 'p002',
    name: 'NovAge Ultimate Lift 4-Piece Set',
    category: 'skincare',
    price: 54000,
    badge: 'New',
    image: 'assets/images/novage_ultimate_lift.jpg',
    desc: 'Complete anti-ageing system: Ultimate Lift Day Cream SPF 15, Lifting Eye Cream, Lifting Concentrate Serum & Night Cream. Visibly lifts & firms in 4 weeks.',
    shades: [],
  },
  {
    id: 'p003',
    name: 'Giordani Gold MasterCreation Foundation',
    category: 'makeup',
    price: 19800,
    badge: 'VIP Pick',
    image: 'assets/images/giordani_foundation.jpg',
    desc: 'Liquid foundation with SPF 25 and 24-hour wear. Enriched with 24K gold and vitamin E for a flawless, skin-enhancing finish. 30ml. Available in 10 shades.',
    shades: ['#F5DEB3','#E8C99A','#D2A679','#C8956C','#A0724A','#7B4F2E','#6B3A20','#4E2C14'],
  },
  {
    id: 'p004',
    name: 'Giordani Gold Iconic Lipstick',
    category: 'makeup',
    price: 12500,
    badge: null,
    image: 'assets/images/giordani_lipstick.jpg',
    desc: 'Luxuriously creamy formula enriched with 24K gold and vitamin E. Up to 12 hours of rich, comfortable colour in 30 iconic shades. Iconic embossed gold case.',
    shades: ['#8B0000','#C0392B','#A0522D','#C47C5A','#F4A7B9'],
  },
  {
    id: 'p005',
    name: 'Possess Absolute Eau de Parfum',
    category: 'fragrance',
    price: 38000,
    badge: 'Exclusive',
    image: 'assets/images/perfume_possess.jpg',
    desc: 'A bold oriental fragrance. Top notes: saffron & bergamot. Heart: rose absolute & jasmine sambac. Base: oud wood, amber & musk. Lasts 8–10 hours. 50ml EDP.',
    shades: [],
  },
  {
    id: 'p006',
    name: 'Giordani Gold Essenza Eau de Parfum',
    category: 'fragrance',
    price: 32000,
    badge: null,
    image: 'assets/images/giordani_essenza_edp.jpg',
    desc: 'Timeless Italian luxury. Notes: bergamot & mandarin top; rose centifolia & peony heart; sandalwood & warm musk base. 50ml. Long-lasting elegance.',
    shades: [],
  },
  {
    id: 'p007',
    name: 'Love Nature Body Cream — Honey & Almond',
    category: 'body',
    price: 8900,
    badge: 'Organic',
    image: 'assets/images/wellness_bodycare.jpg',
    desc: 'Certified organic honey and sweet almond oil blend. Provides 72-hour intense moisturisation, leaving skin soft, nourished, and delicately scented. 250ml.',
    shades: [],
  },
  {
    id: 'p008',
    name: 'Tender Care Protecting Balm',
    category: 'body',
    price: 4500,
    badge: null,
    image: 'assets/images/tender_care_balm.jpg',
    desc: 'Oriflame\u2019s iconic multi-purpose balm. Enriched with Panthenol (Pro-Vitamin B5) and Jojoba Oil. Use on lips, cuticles, dry elbows, and rough skin. 15ml tin.',
    shades: [],
  },
  {
    id: 'p009',
    name: 'THE ONE Tremendous Volume Mascara',
    category: 'makeup',
    price: 11500,
    badge: null,
    image: 'assets/images/the_one_mascara.jpg',
    desc: 'Multifaceted hourglass brush delivers 8× more volume and length in a single stroke. Long-wear, clump-free formula in Deep Black. 8ml.',
    shades: [],
  },
  {
    id: 'p010',
    name: 'NovAge Bright Sublime Advanced Brightening Serum',
    category: 'skincare',
    price: 24000,
    badge: 'New',
    image: 'assets/images/novage_bright_sublime.jpg',
    desc: 'Powered by stable Vitamin C (Ascorbyl Glucoside) and niacinamide. Fades dark spots and evens skin tone visibly in 4 weeks. Suitable for all skin tones. 30ml.',
    shades: [],
  },
];

// ── QUIZ DATA ─────────────────────────────────────────────────────────────
const QUIZ_STEPS = [
  {
    question: 'What is your primary body & wellness goal?',
    options: [
      { label: 'Deep Body Moisture & Skin Softness', value: 'hydration' },
      { label: 'Weight Management & Balanced Nutrition', value: 'nutrition' },
      { label: 'Intimate Care & Gentle Daily Hygiene', value: 'hygiene' },
      { label: 'Firming & Anti-Ageing Body Care', value: 'antiage' },
    ],
  },
  {
    question: 'What type of daily care routine do you prefer?',
    options: [
      { label: 'Nourishing Body Scrubs & Creams', value: 'smoothness' },
      { label: 'Daily Wellness Shake & Energy Boost', value: 'energy' },
      { label: 'Soothing pH-Balanced Freshness', value: 'freshness' },
      { label: 'Complete Body & Wellness System', value: 'complete' },
    ],
  },
  {
    question: 'What best describes your lifestyle focus?',
    options: [
      { label: 'Fitness, Health & Active Energy', value: 'active' },
      { label: 'Self-Care & Relaxing Home Pampering', value: 'pampering' },
      { label: 'Busy Corporate Schedule / On-the-Go', value: 'professional' },
      { label: 'Gentle Care for Sensitive Skin & Body', value: 'gentle' },
    ],
  },
];

const QUIZ_RESULTS = {
  hydration:  { icon: '🌿', title: 'Nourishing Body & Skincare Routine', text: 'Your personalized wellness routine focuses on intense body hydration, smooth exfoliation, and velvety soft skin.', products: ['Love Nature Honey & Almond Body Cream', 'Optimals Body Exfoliating Scrub', 'Tender Care Protecting Balm'] },
  nutrition:  { icon: '🥗', title: 'Wellosophy Weight & Health Regimen', text: 'Your ideal wellness regimen supports your weight management goals with clean, balanced nutrition and high protein shakes.', products: ['Wellosophy Meal Replacement Shake', 'Wellosophy Wellness Pack', 'Personal Hygiene Essentials'] },
  hygiene:    { icon: '🌸', title: 'Feminelle Intimate & Body Care', text: 'Your routine delivers gentle, pH-balanced freshness, irritation-free comfort, and daily intimate care.', products: ['Feminelle Soothing Intimate Wash', 'Love Nature Body Cream', 'Tender Care Balm'] },
  antiage:    { icon: '✨', title: 'NovAge Body & Skincare System', text: 'Your regimen combines bioactive plant technology for firm, smooth, youthfully energized body skin.', products: ['NovAge MEN Set / NovAge Ultimate Lift Set', 'Optimals Body Scrub', 'Love Nature Body Cream'] },
};

// ── STATE ─────────────────────────────────────────────────────────────────
const state = {
  cart: JSON.parse(localStorage.getItem('oriflame_cart') || '[]'),
  filter: 'all',
  search: '',
  sort: 'default',
  quizStep: 0,
  quizAnswers: [],
  wishlist: new Set(JSON.parse(localStorage.getItem('oriflame_wishlist') || '[]')),
};

// ── HELPERS ───────────────────────────────────────────────────────────────
const fmt = (n) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(n);

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('is-visible');
  setTimeout(() => el.classList.remove('is-visible'), 3000);
}

function saveCart() {
  localStorage.setItem('oriflame_cart', JSON.stringify(state.cart));
}

function saveWishlist() {
  localStorage.setItem('oriflame_wishlist', JSON.stringify([...state.wishlist]));
}

// ── PRELOADER ─────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('is-hidden');
  }, 1800);
});

// ── HEADER SCROLL ─────────────────────────────────────────────────────────
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 60);
}, { passive: true });

// ── MOBILE MENU ───────────────────────────────────────────────────────────
const menuBtn     = document.getElementById('menu-btn');
const mainNav     = document.getElementById('main-nav');


function openMobileMenu() {
  if (!mainNav || !menuBtn) return;
  mainNav.classList.add('is-open');
  menuBtn.classList.add('is-open');
  menuBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (!mainNav || !menuBtn) return;
  mainNav.classList.remove('is-open');
  menuBtn.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (menuBtn) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mainNav.classList.contains('is-open') ? closeMobileMenu() : openMobileMenu();
  });
}

if (mainNav) {
  mainNav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close when tapping outside links on the backdrop
  mainNav.addEventListener('click', (e) => {
    if (e.target === mainNav) {
      closeMobileMenu();
    }
  });
}

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav && mainNav.classList.contains('is-open')) {
    closeMobileMenu();
  }
});

// ── HERO SLIDER ───────────────────────────────────────────────────────────
(function initHero() {
  const slides   = document.querySelectorAll('.hero__slide');
  const dots     = document.querySelectorAll('.hero__dot');
  const prevBtn  = document.getElementById('hero-prev');
  const nextBtn  = document.getElementById('hero-next');
  const curNum   = document.getElementById('hero-current-num');
  const totNum   = document.getElementById('hero-total-num');
  const capPill  = document.getElementById('hero-slide-caption');
  const heroElem = document.getElementById('hero');

  if (slides.length === 0) return;

  let current = 0;
  let timer;
  const AUTOPLAY_DELAY = 4500;

  if (totNum) {
    totNum.textContent = String(slides.length).padStart(2, '0');
  }

  function goTo(n) {
    if (slides[current]) slides[current].classList.remove('is-active');
    if (dots[current])   dots[current].classList.remove('is-active');

    current = (n + slides.length) % slides.length;

    if (slides[current]) {
      slides[current].classList.add('is-active');
      const caption = slides[current].dataset.caption || 'Oriflame Luxury Collection';
      if (capPill) {
        capPill.style.opacity = '0';
        setTimeout(() => {
          capPill.textContent = caption;
          capPill.style.opacity = '1';
        }, 150);
      }
    }

    if (dots[current]) {
      // Force animation restart on active dot
      dots[current].classList.remove('is-active');
      void dots[current].offsetWidth; // trigger reflow
      dots[current].classList.add('is-active');
    }

    if (curNum) curNum.textContent = String(current + 1).padStart(2, '0');
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => {
      goTo(current + 1);
    }, AUTOPLAY_DELAY);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      startAuto();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goTo(current - 1);
      startAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goTo(current + 1);
      startAuto();
    });
  }

  // Touch Swipe Support for mobile devices
  let touchStartX = 0;
  let touchEndX   = 0;

  if (heroElem) {
    heroElem.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroElem.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        // Swiped Left -> Next
        goTo(current + 1);
        startAuto();
      } else if (touchEndX - touchStartX > 45) {
        // Swiped Right -> Prev
        goTo(current - 1);
        startAuto();
      }
    }, { passive: true });
  }

  startAuto();
})();

// ── CART ──────────────────────────────────────────────────────────────────
const cartBtn     = document.getElementById('cart-btn');
const cartClose   = document.getElementById('cart-close-btn');
const cartOverlay = document.getElementById('cart-overlay');
const cartDrawer  = document.getElementById('cart-drawer');
const cartCount   = document.getElementById('cart-count');
const cartTotal   = document.getElementById('cart-total');
const cartItems   = document.getElementById('cart-items');

function openCart() {
  if (!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.add('is-open');
  cartOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  if (!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.remove('is-open');
  cartOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

if (cartBtn)     cartBtn.addEventListener('click', openCart);
if (cartClose)   cartClose.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

function updateCartUI() {
  const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = state.cart.reduce((s, i) => s + i.qty, 0);

  if (cartCount) {
    cartCount.textContent = count;
    cartCount.classList.toggle('is-visible', count > 0);
  }
  if (cartTotal) cartTotal.textContent = fmt(total);

  syncCatalogueSteppers();

  if (state.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty__icon">🛍️</div>
        <p>Your cart is empty.<br/>Add something beautiful!</p>
      </div>`;
    return;
  }

  cartItems.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item__img" loading="lazy" />
      <div>
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__cat">${item.category}</div>
        <div class="cart-item__price">${fmt(item.price)}</div>
        <div class="cart-item__qty">
          <button class="cart-qty-btn" data-action="dec" data-id="${item.id}" aria-label="Decrease quantity">−</button>
          <span>${item.qty}</span>
          <button class="cart-qty-btn" data-action="inc" data-id="${item.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item__remove" data-remove="${item.id}" aria-label="Remove ${item.name}">✕</button>
    </div>
  `).join('');

  // Qty & remove events
  cartItems.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id  = btn.dataset.id;
      const act = btn.dataset.action;
      const idx = state.cart.findIndex(i => i.id === id);
      if (idx === -1) return;
      act === 'inc' ? state.cart[idx].qty++ : state.cart[idx].qty--;
      if (state.cart[idx].qty < 1) state.cart.splice(idx, 1);
      saveCart();
      updateCartUI();
    });
  });
  cartItems.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const id  = btn.dataset.remove;
      state.cart = state.cart.filter(i => i.id !== id);
      saveCart();
      updateCartUI();
      showToast('Item removed from cart');
    });
  });
}

function addToCart(product) {
  const existing = state.cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`✦ ${product.name} added to cart`);
}

// WhatsApp Checkout
const waCheckoutBtn = document.getElementById('whatsapp-checkout-btn');
if (waCheckoutBtn) waCheckoutBtn.addEventListener('click', () => {
  if (state.cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const lines = state.cart.map(i => `• ${i.name} ×${i.qty} — ${fmt(i.price * i.qty)}`).join('%0A');
  const msg = encodeURIComponent(`Hello Oriflame Abuja! 🌿✨\n\nI'd like to order:\n`) + lines +
    `%0A%0A*Total: ${encodeURIComponent(fmt(total))}*%0A%0APlease confirm availability and delivery to my Abuja address. Thank you!`;
  window.open(`https://wa.me/2348160756002?text=${msg}`, '_blank');
});

// ── PRODUCT CATALOG ───────────────────────────────────────────────────────
const productGrid = document.getElementById('product-grid');

function filterAndSort() {
  let items = [...PRODUCTS];

  // Filter by category
  if (state.filter !== 'all') {
    items = items.filter(p => p.category === state.filter);
  }
  // Filter by search
  if (state.search.trim()) {
    const q = state.search.toLowerCase();
    items = items.filter(p =>
      p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
  }
  // Sort
  switch (state.sort) {
    case 'price-asc':  items.sort((a,b) => a.price - b.price); break;
    case 'price-desc': items.sort((a,b) => b.price - a.price); break;
    case 'name-asc':   items.sort((a,b) => a.name.localeCompare(b.name)); break;
  }
  return items;
}

function renderProducts() {
  const items = filterAndSort();

  if (items.length === 0) {
    productGrid.innerHTML = `<div class="no-products"><p>No products found. Try a different search or filter.</p></div>`;
    return;
  }

  productGrid.innerHTML = items.map(p => `
    <article class="product-card animate-on-scroll" data-id="${p.id}">
      <div class="product-card__img-wrap">
        <img src="${p.image}" alt="${p.name}" class="product-card__img" loading="lazy" />
        ${p.badge ? `<div class="product-card__badge">${p.badge}</div>` : ''}
        <button class="product-card__wishlist ${state.wishlist.has(p.id) ? 'is-active' : ''}"
          data-wishlist="${p.id}" aria-label="Add ${p.name} to wishlist" aria-pressed="${state.wishlist.has(p.id)}">
          ${state.wishlist.has(p.id) ? '♥' : '♡'}
        </button>
      </div>
      <div class="product-card__body">
        <div class="product-card__cat">${p.category}</div>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        ${p.shades.length > 0 ? `
          <div class="product-card__shades" aria-label="Available shades">
            ${p.shades.map((s, i) => `<button class="shade-dot" style="background:${s}" aria-label="Shade ${i+1}" data-shade="${s}"></button>`).join('')}
          </div>` : ''}
        <div class="product-card__footer">
          <div class="product-card__price">${fmt(p.price)}</div>
          <a href="https://wa.me/2348160756002?text=${encodeURIComponent('Hello Oriflame Abuja! ✦ I am interested in purchasing *' + p.name + '* (' + fmt(p.price) + '). Please confirm availability & delivery in Abuja.')}" target="_blank" rel="noopener noreferrer" class="product-card__add btn-wa-order" aria-label="Order ${p.name} on WhatsApp">Order on WhatsApp</a>
        </div>
      </div>
    </article>
  `).join('');

  // Wishlist
  productGrid.querySelectorAll('[data-wishlist]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.wishlist;
      if (state.wishlist.has(id)) {
        state.wishlist.delete(id);
        btn.innerHTML = '♡';
        btn.classList.remove('is-active');
        btn.setAttribute('aria-pressed', 'false');
        showToast('Removed from wishlist');
        saveWishlist();
      } else {
        state.wishlist.add(id);
        btn.innerHTML = '♥';
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        showToast('✦ Added to wishlist');
        saveWishlist();
      }
    });
  });

  // Shade picker
  productGrid.querySelectorAll('.shade-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const parent = dot.closest('.product-card__shades');
      parent.querySelectorAll('.shade-dot').forEach(d => d.classList.remove('is-active'));
      dot.classList.add('is-active');
    });
  });

  // Scroll animations
  observeAnimations();
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('is-active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');
    state.filter = btn.dataset.filter;
    renderProducts();
  });
});

// Search
const searchInput = document.getElementById('catalog-search');
let searchTimer;
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.search = e.target.value;
      renderProducts();
    }, 300);
  });
}

// Sort
const sortSelect = document.getElementById('catalog-sort');
if (sortSelect) {
  sortSelect.addEventListener('change', (e) => {
    state.sort = e.target.value;
    renderProducts();
  });
}

// ── BEAUTY QUIZ ───────────────────────────────────────────────────────────
const quizIntro    = document.getElementById('quiz-intro');
const quizWidget   = document.getElementById('quiz-widget');
const quizStep     = document.getElementById('quiz-step');
const quizResult   = document.getElementById('quiz-result');
const quizProgress = document.getElementById('quiz-progress-bar');
const quizBackBtn  = document.getElementById('quiz-back-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');

function renderQuizStep() {
  if (!quizStep || !quizProgress) return;
  const step = QUIZ_STEPS[state.quizStep];
  const pct  = Math.round((state.quizStep / QUIZ_STEPS.length) * 100);
  quizProgress.style.width = pct + '%';

  quizStep.innerHTML = `
    <h3 class="quiz__question">${step.question}</h3>
    <div class="quiz__options">
      ${step.options.map(opt => `
        <button class="quiz__option" data-value="${opt.value}">${opt.label}</button>
      `).join('')}
    </div>
  `;

  if (quizBackBtn) {
    quizBackBtn.style.display = state.quizStep > 0 ? 'inline-flex' : 'none';
  }

  quizStep.querySelectorAll('.quiz__option').forEach(btn => {
    btn.addEventListener('click', () => {
      state.quizAnswers[state.quizStep] = btn.dataset.value;
      if (state.quizStep < QUIZ_STEPS.length - 1) {
        state.quizStep++;
        renderQuizStep();
      } else {
        showQuizResult();
      }
    });
  });
}

function showQuizResult() {
  if (!quizWidget || !quizResult || !quizProgress) return;
  quizProgress.style.width = '100%';

  // Weighted scoring: answer[0] = 3pts, answer[1] = 2pts, answer[2] = 1pt
  // Each answer value maps to a QUIZ_RESULTS key; tally scores across all answers
  const ANSWER_WEIGHT_MAP = {
    // Q1 options → result key
    hydration:    'hydration',
    nutrition:    'nutrition',
    hygiene:      'hygiene',
    antiage:      'antiage',
    // Q2 options → result key
    smoothness:   'hydration',
    energy:       'nutrition',
    freshness:    'hygiene',
    complete:     'antiage',
    // Q3 options → result key
    active:       'nutrition',
    pampering:    'hydration',
    professional: 'antiage',
    gentle:       'hygiene',
  };
  const weights = [3, 2, 1];
  const scores = {};
  state.quizAnswers.forEach((answer, i) => {
    const key = ANSWER_WEIGHT_MAP[answer];
    if (key) scores[key] = (scores[key] || 0) + (weights[i] || 1);
  });
  const bestKey = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b, state.quizAnswers[0] || 'hydration');
  const result = QUIZ_RESULTS[bestKey] || QUIZ_RESULTS['hydration'];

  const quizMessage = `Hello Oriflame Abuja! 🌿\n\nI completed the Body & Wellness Quiz on your website and my result is:\n\n✨ *${result.title}*\n${result.text}\n\n*Recommended Products:*\n${result.products.map(p => `• ${p}`).join('\n')}\n\nI'd like to get started with these recommendations. Please assist me!`;

  const waUrl = `https://wa.me/2348160756002?text=${encodeURIComponent(quizMessage)}`;

  quizWidget.style.display = 'none';
  quizResult.innerHTML = `
    <div class="quiz__result-icon">${result.icon}</div>
    <h3 class="quiz__result-title">${result.title}</h3>
    <p class="quiz__result-text">${result.text}</p>
    <div class="quiz__result-products">
      ${result.products.map(name => `<div class="quiz__result-product">✦ ${name}</div>`).join('')}
    </div>
    <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; margin-top:2rem;">
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="margin-right:0.3rem"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.865L.057 23.998l6.305-1.655A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-4.99-1.368l-.358-.213-3.742.981.999-3.645-.234-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
        Message us on WhatsApp
      </a>
      <button class="btn btn--ghost" id="quiz-restart-btn">Retake Quiz</button>
    </div>
  `;
  quizResult.classList.add('is-active');
  quizResult.removeAttribute('aria-hidden');

  const restartBtn = document.getElementById('quiz-restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      state.quizStep = 0;
      state.quizAnswers = [];
      quizResult.classList.remove('is-active');
      quizResult.setAttribute('aria-hidden', 'true');
      quizWidget.style.display = 'block';
      renderQuizStep();
    });
  }
}

if (startQuizBtn) {
  startQuizBtn.addEventListener('click', () => {
    if (quizIntro) quizIntro.style.display = 'none';
    if (quizWidget) {
      quizWidget.style.display = 'block';
      quizWidget.setAttribute('aria-hidden', 'false');
    }
    state.quizStep = 0;
    state.quizAnswers = [];
    renderQuizStep();
  });
}

if (quizBackBtn) {
  quizBackBtn.addEventListener('click', () => {
    if (state.quizStep > 0) {
      state.quizStep--;
      renderQuizStep();
    }
  });
}

// Partner modal
const partnerSignupBtn   = document.getElementById('partner-signup-btn');
const partnerModalOverlay = document.getElementById('partner-modal-overlay');
const partnerModalClose  = document.getElementById('partner-modal-close');

if (partnerSignupBtn && partnerModalOverlay) {
  partnerSignupBtn.addEventListener('click', () => {
    partnerModalOverlay.classList.add('is-open');
    partnerModalOverlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
  });
}

if (partnerModalClose && partnerModalOverlay) {
  partnerModalClose.addEventListener('click', closePartnerModal);
  partnerModalOverlay.addEventListener('click', (e) => {
    if (e.target === partnerModalOverlay) closePartnerModal();
  });
}

function closePartnerModal() {
  if (!partnerModalOverlay) return;
  partnerModalOverlay.classList.remove('is-open');
  partnerModalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

const partnerForm = document.getElementById('partner-form');
if (partnerForm) {
  partnerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const name  = form['p-name'].value.trim();
    const phone = form['p-phone'].value.trim();
    const area  = form['p-area'].value.trim();

    if (!name || !phone || !area) {
      showToast('Please fill in all partner fields.');
      return;
    }

    const msg = encodeURIComponent(
      `Hello Oriflame Abuja! ✦\n\nI'm interested in becoming a Beauty Partner:\n\n• Name: ${name}\n• Phone: ${phone}\n• Area: ${area}\n\nPlease contact me with more information. Thank you!`
    );
    window.open(`https://wa.me/2348160756002?text=${msg}`, '_blank');
    showToast('✦ Application sent! We\'ll contact you within 24hrs');
    form.reset();
    closePartnerModal();
  });
}

// ── NEWSLETTER ────────────────────────────────────────────────────────────
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value.trim();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    showToast('✦ Thank you! You\'re subscribed to Oriflame Abuja updates.');
    e.target.reset();
  });
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────────────────────
function observeAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.02, rootMargin: '100px 0px 100px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
    }
  });
}

function initAnimations() {
  const targets = document.querySelectorAll(
    '.brand-strip__item, .featured-review-item, .testimonial-card, ' +
    '.partners__benefit-card, .contact__info, .contact__visual, ' +
    '.staff-card, .pillar-item, .founder-card'
  );
  targets.forEach((el, i) => {
    el.classList.add('animate-on-scroll');
    el.dataset.delay = (i % 3) + 1;
  });
  observeAnimations();
}

// ── SET MIN DATE FOR BOOKING ───────────────────────────────────────────────
function setMinDate() {
  const dateInput = document.getElementById('booking-date');
  if (!dateInput) return;
  const today = new Date();
  today.setDate(today.getDate() + 1);
  dateInput.min = today.toISOString().split('T')[0];
}

// ── PARALLAX WITH DATA-SPEED ──────────────────────────────────────────────
function initParallax() {
  const parallaxEls = document.querySelectorAll('[data-speed]');
  if (!parallaxEls.length) return;

  function updateParallax() {
    const windowH = window.innerHeight;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 1;
      const rect = el.getBoundingClientRect();
      if (rect.top < windowH && rect.bottom > 0) {
        const offset = ((rect.top + rect.height / 2) - windowH / 2) * (1 - speed) * 0.4;
        el.style.transform = `translateY(${offset.toFixed(2)}px) scale(1.04)`;
      }
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
}

// ── CATALOGUE INTERACTIVITY & DETAIL VIEW LOGIC ─────────────────────────
const CATALOG_ITEMS = [
  {
    id: 'cat-01',
    name: 'Optimals set',
    preview: 'When your skin tone evens o...',
    desc: 'When your skin tone evens out naturally. Achieve a radiant, balanced complexion with Oriflame Optimals Swedish botanical science formulated with natural Swedish plant extracts.',
    category: 'Skincare',
    price: 38500,
    image: 'assets/images/cat_optimals.webp',
    waText: 'Hi, I would like to order the Optimals set from Oriflame Central Store Abuja.'
  },
  {
    id: 'cat-02',
    name: 'Weightloss mistakes',
    preview: "Weightloss doesn't have to b...",
    desc: "Weightloss doesn't have to be hard. The Oriflame Wellosophy Meal Replacement Shake is designed to help you stay satisfied while supporting your nutrition and weight management goals.",
    category: 'Wellness',
    price: 42000,
    image: 'assets/images/cat_weightloss.webp',
    waText: 'Hi, I would like to order the Wellosophy Meal Replacement Shake from Oriflame Central Store Abuja.'
  },
  {
    id: 'cat-03',
    name: 'Personal Hygiene',
    preview: 'Personal Hygiene takes anot...',
    desc: 'Personal Hygiene takes another level of Swedish care. Gentle organic oral, intimate, and daily body care essentials crafted for whole-family comfort and long-lasting freshness.',
    category: 'Personal Care',
    price: 18500,
    image: 'assets/images/cat_hygiene.webp',
    waText: 'Hi, I would like to order the Personal Hygiene products from Oriflame Central Store Abuja.'
  },
  {
    id: 'cat-04',
    name: 'FRAGRANCES',
    preview: 'Celebrate Life and Smell fab...',
    desc: 'Celebrate Life and Smell fabulous with exclusive Swedish perfumes and luxury artisan fragrances crafted for elegance and unforgettable presence.',
    category: 'Fragrance',
    price: 35000,
    image: 'assets/images/cat_fragrances.webp',
    waText: 'Hi, I would like to order from the Fragrances collection from Oriflame Central Store Abuja.'
  },
  {
    id: 'cat-05',
    name: 'ALL OR NOTHING',
    preview: 'Live life with passion and b...',
    desc: 'Live life with passion and boldness. All or Nothing Parfum is crafted with exclusive Vanilla Surabsolute and room-filling luxury fragrance technology for an unforgettable signature scent.',
    category: 'Fragrance',
    price: 48000,
    image: 'assets/images/cat_all_or_nothing.webp',
    waText: 'Hi, I would like to order the All or Nothing Parfum from Oriflame Central Store Abuja.'
  },
  {
    id: 'cat-06',
    name: 'NovAge MEN',
    preview: "Engineered for men's skin to...",
    desc: "Engineered specifically for men's skin to fight signs of fatigue and ageing. Powered by bioactive Baobab anti-ageing technology and Coffea Bengalensis plant stem cell extract for energized skin.",
    category: 'Skincare',
    price: 54000,
    image: 'assets/images/cat_novage_men.webp',
    waText: 'Hi, I would like to order the NovAge Men Set from Oriflame Central Store Abuja.'
  }
];

function syncCatalogueSteppers() {
  document.querySelectorAll('.catalogue-card__cart-wrap').forEach(wrap => {
    const id = wrap.dataset.itemId;
    const addBtn = wrap.querySelector('.btn-add-cart');
    const stepper = wrap.querySelector('.cart-stepper');
    const qtySpan = wrap.querySelector('.cart-stepper__qty');
    const itemInCart = state.cart.find(i => i.id === id);

    if (itemInCart && itemInCart.qty > 0) {
      if (addBtn) addBtn.style.display = 'none';
      if (stepper) stepper.style.display = 'flex';
      if (qtySpan) qtySpan.textContent = itemInCart.qty;
    } else {
      if (addBtn) addBtn.style.display = 'flex';
      if (stepper) stepper.style.display = 'none';
    }
  });
}

// ── CATALOGUE DRAWER & DETAIL VIEW CONTROLS ─────────────────────────────
const catalogueDrawer = document.getElementById('catalogue-drawer');
const catalogueOverlay = document.getElementById('catalogue-overlay');
const catalogueListView = document.getElementById('catalogue-list-view');
const catalogueDetailView = document.getElementById('catalogue-detail-view');
const catalogueCloseBtn = document.getElementById('catalogue-close-btn');
const catalogueDetailCloseBtn = document.getElementById('catalogue-detail-close-btn');
const catalogueBottomCloseBtn = document.getElementById('catalogue-bottom-close-btn');
const catalogueBackBtn = document.getElementById('catalogue-back-btn');
const catalogueDetailBottomBackBtn = document.getElementById('catalogue-detail-bottom-back-btn');

function openCatalogue() {
  if (!catalogueDrawer) return;
  showCatalogueList();
  catalogueDrawer.classList.add('is-open');
  if (catalogueOverlay) catalogueOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  closeMobileMenu();
  updateFloatingWaBtnVisibility();
}

function closeCatalogue() {
  if (!catalogueDrawer) return;
  catalogueDrawer.classList.remove('is-open');
  if (catalogueOverlay) catalogueOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
  setTimeout(showCatalogueList, 300);
  setTimeout(updateFloatingWaBtnVisibility, 350);
}

function showCatalogueList() {
  if (catalogueDetailView) catalogueDetailView.style.display = 'none';
  if (catalogueListView) catalogueListView.style.display = 'flex';
  syncCatalogueSteppers();
}

function showCatalogueDetail(productId) {
  const product = CATALOG_ITEMS.find(p => p.id === productId);
  if (!product) return;

  const detailImg = document.getElementById('catalogue-detail-img');
  const detailTitle = document.getElementById('catalogue-detail-title');
  const detailDesc = document.getElementById('catalogue-detail-desc');
  const detailWaBtn = document.getElementById('catalogue-detail-wa-btn');
  const detailCartWrap = document.getElementById('catalogue-detail-cart-wrap');
  const detailAddBtn = document.getElementById('catalogue-detail-add-btn');
  const detailStepperBtns = document.querySelectorAll('#catalogue-detail-stepper .cart-stepper__btn');

  if (detailImg) {
    detailImg.src = product.image;
    detailImg.alt = product.name;
  }
  if (detailTitle) detailTitle.textContent = product.name;
  if (detailDesc) detailDesc.textContent = product.desc;
  if (detailWaBtn) {
    detailWaBtn.href = `https://wa.me/2348160756002?text=${encodeURIComponent(product.waText)}`;
  }
  if (detailCartWrap) detailCartWrap.dataset.itemId = product.id;
  if (detailAddBtn) detailAddBtn.dataset.id = product.id;
  detailStepperBtns.forEach(btn => btn.dataset.id = product.id);

  if (catalogueListView) catalogueListView.style.display = 'none';
  if (catalogueDetailView) catalogueDetailView.style.display = 'flex';
  
  syncCatalogueSteppers();
}

if (catalogueCloseBtn) catalogueCloseBtn.addEventListener('click', closeCatalogue);
if (catalogueDetailCloseBtn) catalogueDetailCloseBtn.addEventListener('click', closeCatalogue);
if (catalogueBottomCloseBtn) catalogueBottomCloseBtn.addEventListener('click', closeCatalogue);
if (catalogueBackBtn) catalogueBackBtn.addEventListener('click', showCatalogueList);
if (catalogueDetailBottomBackBtn) catalogueDetailBottomBackBtn.addEventListener('click', showCatalogueList);
if (catalogueOverlay) catalogueOverlay.addEventListener('click', closeCatalogue);

// Open Catalogue whenever Catalogue nav link is clicked
document.querySelectorAll('a[href="#catalog"], a[href="index.html#catalog"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    openCatalogue();
  });
});

function initCatalogue() {
  // Clicking an item or picture in the catalogue list opens the full detail view
  document.querySelectorAll('.catalog-list-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      showCatalogueDetail(id);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showCatalogueDetail(item.dataset.id);
      }
    });
  });

  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.id;
      const product = CATALOG_ITEMS.find(p => p.id === id);
      if (product) {
        addToCart(product);
      }
    });
  });

  document.querySelectorAll('.cart-stepper__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      const product = CATALOG_ITEMS.find(p => p.id === id);
      const idx = state.cart.findIndex(i => i.id === id);

      if (action === 'inc') {
        if (idx > -1) {
          state.cart[idx].qty++;
        } else if (product) {
          state.cart.push({ ...product, qty: 1 });
        }
      } else if (action === 'dec') {
        if (idx > -1) {
          state.cart[idx].qty--;
          if (state.cart[idx].qty <= 0) {
            state.cart.splice(idx, 1);
          }
        }
      }
      saveCart();
      updateCartUI();
    });
  });

  syncCatalogueSteppers();
}

// ── REVIEWS AUTO SLIDESHOW ────────────────────────────────────────────────
function initReviewsSlideshow() {
  const container = document.getElementById('reviews-slideshow');
  if (!container) return;
  const slides = container.querySelectorAll('.reviews-slideshow__slide');
  const dots = document.querySelectorAll('#reviews-slideshow-dots .reviews-slideshow__dot');
  if (!slides.length) return;
  let current = 0;
  let reviewTimer;

  function goToSlide(idx) {
    slides[current].classList.remove('is-active');
    if (dots[current]) dots[current].classList.remove('is-active');
    current = idx;
    slides[current].classList.add('is-active');
    if (dots[current]) dots[current].classList.add('is-active');
  }

  function startAuto() {
    clearInterval(reviewTimer);
    reviewTimer = setInterval(() => {
      const next = (current + 1) % slides.length;
      goToSlide(next);
    }, 4000);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      startAuto(); // reset timer after manual nav
    });
  });

  startAuto();
}

// ── FLOATING WA BUTTON VISIBILITY CONTROL ─────────────────────────────
function updateFloatingWaBtnVisibility() {
  const floatingWaBtn = document.querySelector('.floating-wa-btn');
  if (!floatingWaBtn) return;

  const catalogueDrawer = document.getElementById('catalogue-drawer');
  const hero = document.getElementById('hero') || document.querySelector('.about-hero');

  // 1. Hide if Catalogue drawer is open
  if (catalogueDrawer && catalogueDrawer.classList.contains('is-open')) {
    floatingWaBtn.classList.add('is-hidden');
    return;
  }

  // 2. Hide if user is currently viewing the Hero section
  if (hero) {
    const heroHeight = hero.offsetHeight || window.innerHeight;
    if (window.scrollY < heroHeight - 100) {
      floatingWaBtn.classList.add('is-hidden');
      return;
    }
  }

  // 3. In every other section, SHOW the WhatsApp button!
  floatingWaBtn.classList.remove('is-hidden');
}

window.addEventListener('scroll', updateFloatingWaBtnVisibility, { passive: true });
window.addEventListener('resize', updateFloatingWaBtnVisibility, { passive: true });

// ── INIT ──────────────────────────────────────────────────────────────────
(function init() {
  if (document.getElementById('product-grid')) {
    renderProducts();
  }
  initCatalogue();
  initReviewsSlideshow();
  updateCartUI();
  initAnimations();
  initParallax();
  setMinDate();
  updateFloatingWaBtnVisibility();
})();
