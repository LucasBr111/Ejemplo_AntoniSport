/**
 * config-injector.js — ANTONI SPORT EDITION
 * Lee SITE_CONFIG + ANTONI_CATALOG e inyecta todo el contenido en el DOM.
 */

const ConfigInjector = (() => {

  /* ── helpers ── */
  function qs(sel)  { return document.querySelector(sel); }
  function qsa(sel) { return document.querySelectorAll(sel); }

  /* ════════════════════════════════════════════════════
     1. SEO
  ════════════════════════════════════════════════════ */
  function injectSEO() {
    const { seo, brand } = SITE_CONFIG;
    document.title = seo.title;
    setMeta('description', seo.description);
    setMeta('keywords', seo.keywords);
    setOG('og:title', seo.title);
    setOG('og:description', seo.description);
    setOG('og:image', seo.ogImage);
    // FAQ Schema
    if (SITE_CONFIG.faq) injectSchema(buildFAQSchema());
    // LocalBusiness Schema
    injectSchema(buildLocalBusinessSchema());
  }

  function setMeta(name, content) {
    let el = qs(`meta[name="${name}"]`);
    if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
    el.content = content;
  }
  function setOG(prop, content) {
    let el = qs(`meta[property="${prop}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
    el.content = content;
  }
  function injectSchema(schema) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
  }
  function buildFAQSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": SITE_CONFIG.faq.items.map(item => ({
        "@type": "Question", "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a }
      }))
    };
  }
  function buildLocalBusinessSchema() {
    const { brand } = SITE_CONFIG;
    return {
      "@context": "https://schema.org",
      "@type": "ClothingStore",
      "name": brand.name,
      "description": brand.description,
      "address": { "@type": "PostalAddress", "streetAddress": brand.address, "addressCountry": "PY" },
      "telephone": brand.whatsapp,
    };
  }

  /* ════════════════════════════════════════════════════
     2. NAVBAR
  ════════════════════════════════════════════════════ */
  function buildNavbar() {
    const { navbar } = SITE_CONFIG;

    // Logo img
    const logoImg = qs('.nav-logo-img');
    if (logoImg) logoImg.src = navbar.logo;

    // Desktop links
    const navLinks = qs('.nav-links-list');
    if (navLinks) {
      navLinks.innerHTML = navbar.links.map(l =>
        `<li><a href="${l.href}">${l.label}</a></li>`
      ).join('');
    }

    // Mobile links
    const mobileLinks = qs('#mobileMenu');
    if (mobileLinks) {
      mobileLinks.innerHTML = navbar.links.map(l =>
        `<a class="mobile-link" href="${l.href}" onclick="closeMobile()">${l.label}</a>`
      ).join('');
    }

    // CTA button
    const ctaBtn = qs('.nav-cta-btn');
    if (ctaBtn) {
      ctaBtn.textContent = navbar.ctaLabel;
      ctaBtn.href = navbar.ctaHref;
    }

    // WhatsApp href
    const { brand } = SITE_CONFIG;
    const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;
    qsa('.nav-wa-link').forEach(el => { el.href = waUrl; });
  }

  /* ════════════════════════════════════════════════════
     3. HERO
  ════════════════════════════════════════════════════ */
  function buildHero() {
    const { hero } = SITE_CONFIG;
    const slidesEl = qs('#heroSlides');
    const dotsEl   = qs('#heroDots');
    if (!slidesEl) return;

    slidesEl.innerHTML = hero.slides.map((s, i) => {
      const titleLines = s.title.split('\n').map(line =>
        line === s.titleEm ? `<em>${line}</em>` : line
      ).join('<br/>');
      return `
        <div class="hero-slide${i === 0 ? ' active' : ''}" id="slide${i}">
          <div class="hero-slide-bg" style="background-image:url('${s.bg}');"></div>
          <div class="hero-slide-overlay"></div>
          <div class="hero-slide-content${i === 0 ? ' active' : ''}">
            <div class="hero-eyebrow">${hero.eyebrow}</div>
            <h1 class="hero-title">${titleLines}</h1>
            <p class="hero-subtitle">${s.sub}</p>
            <div class="hero-ctas">
              <a href="${s.primaryCTA.href}" class="btn-primary-hero">${s.primaryCTA.label}</a>
              <a href="${s.secondaryCTA.href}" class="btn-secondary-hero">${s.secondaryCTA.label}</a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (dotsEl) {
      dotsEl.innerHTML = hero.slides.map((_, i) =>
        `<button class="hero-dot${i === 0 ? ' active' : ''}" onclick="goSlide(${i})"></button>`
      ).join('');
    }

    // Re-init slider con el nuevo total
    if (typeof initHeroSlider === 'function') initHeroSlider(hero.slides.length, hero.autoplayInterval);
  }

  /* ════════════════════════════════════════════════════
     4. STATS
  ════════════════════════════════════════════════════ */
  function buildStats() {
    const container = qs('.stats-inner');
    if (!container) return;
    container.innerHTML = SITE_CONFIG.stats.map((s, i) => `
      <div class="stat-item" data-anim${i > 0 ? ` data-anim-delay="${i}"` : ''}>
        <div class="stat-num"><em>${s.num}</em></div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  /* ════════════════════════════════════════════════════
     5. MOSAICO / BENTO
  ════════════════════════════════════════════════════ */
  function buildMosaico() {
    const { mosaico } = SITE_CONFIG;

    const headerEl = qs('.mosaico-header');
    if (headerEl) {
      headerEl.innerHTML = `
        <h2>${mosaico.title}<br/><em>${mosaico.titleEm}</em></h2>
        <span class="mosaico-tag">${mosaico.eyebrow}</span>
      `;
    }

    const grid = qs('.bento-grid');
    if (!grid) return;

    grid.innerHTML = mosaico.items.map((item, i) => {
      const badge = item.badge
        ? `<span class="bento-badge"${item.badgeBg ? ` style="background:${item.badgeBg};"` : ''}>${item.badge}</span>`
        : '';
      const overlayStyle = i === 3
        ? 'style="background:linear-gradient(to right,rgba(8,8,8,0.9) 0%,rgba(8,8,8,0.3) 60%);"'
        : '';
      const titleLines = item.title.replace('\n', '<br/>');
      return `
        <div class="bento-item" data-anim${i > 0 ? ` data-anim-delay="${i}"` : ''} onclick="navigateCat('${item.id}')">
          <div class="bento-bg" style="background-image:url('${item.bg}');${item.bgPos ? `background-position:${item.bgPos};` : ''}"></div>
          <div class="bento-overlay" ${overlayStyle}>
            <span class="bento-cat">${item.cat}</span>
            <h3 class="bento-title">${titleLines}</h3>
            <p class="bento-desc">${item.desc.replace('\n', '<br/>')}</p>
            <span class="bento-cta">
              ${item.cta}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </span>
          </div>
          ${badge}
          <div class="bento-accent-line"></div>
        </div>
      `;
    }).join('');
  }

  /* ════════════════════════════════════════════════════
     6. PERSONALIZACIÓN
  ════════════════════════════════════════════════════ */
  function buildPersonalizacion() {
    const { personalizacion, brand } = SITE_CONFIG;
    const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

    // Imágenes
    const imgMain  = qs('.custom-img-bg');
    const imgFloat = qs('.custom-img-float-inner');
    if (imgMain)  imgMain.style.backgroundImage  = `url('${personalizacion.imgMain}')`;
    if (imgFloat) imgFloat.style.backgroundImage = `url('${personalizacion.imgFloat}')`;

    // Textos
    const eyebrowEl = qs('.custom-eyebrow');
    const titleEl   = qs('.custom-title');
    const bodyEl    = qs('.custom-body');
    if (eyebrowEl) eyebrowEl.innerHTML = `<span></span>${personalizacion.eyebrow}`;
    if (titleEl) {
      const lines = personalizacion.title.split('\n');
      titleEl.innerHTML = lines.map(l => l === personalizacion.titleEm ? `<em>${l}</em>` : l).join('<br/>');
    }
    if (bodyEl) bodyEl.textContent = personalizacion.body;

    // Features
    const featsEl = qs('.custom-features');
    if (featsEl) {
      featsEl.innerHTML = personalizacion.features.map(f => `
        <div class="custom-feat">
          <div class="custom-feat-icon">${f.icon}</div>
          <div class="custom-feat-text">
            <strong>${f.title}</strong>
            <span>${f.desc}</span>
          </div>
        </div>
      `).join('');
    }

    // CTA
    const ctaBtn = qs('.btn-custom');
    if (ctaBtn) {
      ctaBtn.innerHTML = `${personalizacion.ctaLabel} <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8h10M9 4l4 4-4 4"/></svg>`;
    }
  }

  /* ════════════════════════════════════════════════════
     7. PARALLAX BANNERS
  ════════════════════════════════════════════════════ */
  function buildParallaxBanner(containerId, data) {
    const el = qs(`#${containerId}`);
    if (!el || !data) return;
    el.style.backgroundImage = `url('${data.bg}')`;
    el.innerHTML = `
      <div class="parallax-inner" data-anim>
        <span class="parallax-eyebrow">${data.eyebrow}</span>
        <h2 class="parallax-title">${data.title.replace('\n', '<br/>')}</h2>
        <p class="parallax-sub">${data.sub}</p>
        <a href="${data.cta.href}" class="btn-primary-hero">${data.cta.label}</a>
      </div>
    `;
    initParallax(el);
  }

  function initParallax(el) {
    window.addEventListener('scroll', () => {
      const rect = el.getBoundingClientRect();
      const vy = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vy) return;
      const offset = (rect.top / vy) * 40;
      el.style.backgroundPositionY = `calc(50% + ${offset}px)`;
    }, { passive: true });
  }

  /* ════════════════════════════════════════════════════
     8. BRAND STRIP
  ════════════════════════════════════════════════════ */
  function buildBrandStrip() {
    const el = qs('#brand-strip');
    if (!el) return;
    const items = [...SITE_CONFIG.brandStrip.items, ...SITE_CONFIG.brandStrip.items];
    el.innerHTML = `
      <div class="brand-strip-track" aria-hidden="true">
        ${items.map(item => `<span class="brand-strip-item">✦ ${item}</span>`).join('')}
      </div>
    `;
  }

  /* ════════════════════════════════════════════════════
     9. PRODUCTOS (desde ANTONI_CATALOG)
  ════════════════════════════════════════════════════ */
  function buildProductos() {
    const catalog = (typeof ANTONI_CATALOG !== 'undefined') ? ANTONI_CATALOG : null;
    if (!catalog) return;

    const { brand } = SITE_CONFIG;
    const meta = catalog.meta;

    // Header
    const headerEl = qs('.productos-header');
    if (headerEl) {
      headerEl.innerHTML = `
        <h2>${meta.title} <em>${meta.titleEm}</em></h2>
        <button class="ver-todos" onclick="openModal()">
          Pedir Diseño
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </button>
      `;
    }

    // Recolectar todos los productos
    const allProducts = [];
    catalog.categories.forEach(cat => {
      cat.products.forEach(prod => allProducts.push({ ...prod, catId: cat.id }));
    });

    const grid = qs('#productsGrid');
    if (!grid) return;

    grid.innerHTML = allProducts.map((prod, i) => {
      const waMsg = encodeURIComponent(`¡Hola Antoni Sport! Me interesa: *${prod.name}* (${prod.price}). ¿Tienen disponibilidad?`);
      const waUrl = `https://wa.me/${brand.whatsapp}?text=${waMsg}`;
      const tag   = prod.tag
        ? `<span class="product-tag"${prod.tagBg ? ` style="background:${prod.tagBg};"` : ''}>${prod.tag}</span>`
        : '';
      return `
        <div class="product-card" data-anim${i > 0 ? ` data-anim-delay="${Math.min(i, 3)}"` : ''}>
          <div class="product-img">
            <div class="product-img-bg" style="background-image:url('${prod.img}');"></div>
            <div class="product-img-overlay">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="quick-view">Consultar</a>
            </div>
            ${tag}
          </div>
          <div class="product-info">
            <div class="product-name">${prod.name}</div>
            <div class="product-sub">${prod.sub}</div>
            <div class="product-bottom">
              <div class="product-price">${prod.price}</div>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="add-btn" aria-label="Consultar por ${prod.name}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* ════════════════════════════════════════════════════
     10. GALERÍA
  ════════════════════════════════════════════════════ */
  function buildGallery() {
    const { gallery } = SITE_CONFIG;

    const eyebrowEl = qs('#gallery-eyebrow');
    const titleEl   = qs('#gallery-title');
    if (eyebrowEl) eyebrowEl.textContent = gallery.eyebrow;
    if (titleEl)   titleEl.innerHTML    = gallery.title.replace('\n', '<br/>');

    const track = qs('.gallery-track');
    if (!track) return;

    const imgs = [...gallery.images, ...gallery.images];
    track.innerHTML = imgs.map(img =>
      `<div class="gallery-item"><img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async"></div>`
    ).join('');
    track.style.animation = `galleryScroll ${gallery.images.length * 3.5}s linear infinite`;
  }

  /* ════════════════════════════════════════════════════
     11. PROCESO
  ════════════════════════════════════════════════════ */
  function buildProceso() {
    const { proceso } = SITE_CONFIG;

    const eyebrowEl = qs('#proceso-eyebrow');
    const titleEl   = qs('#proceso-title');
    if (eyebrowEl) eyebrowEl.textContent = proceso.eyebrow;
    if (titleEl)   titleEl.innerHTML    = proceso.title.replace('\n', '<br/>');

    const container = qs('.proceso-grid');
    if (!container) return;

    container.innerHTML = proceso.steps.map((step, i) => `
      <div class="proceso-step" data-anim data-anim-delay="${i}">
        <div class="proceso-num">${step.num}</div>
        <h3 class="proceso-step-title">${step.title}</h3>
        <p class="proceso-step-desc">${step.desc}</p>
      </div>
    `).join('');
  }

  /* ════════════════════════════════════════════════════
     12. FAQ
  ════════════════════════════════════════════════════ */
  function buildFAQ() {
    const { faq } = SITE_CONFIG;

    const eyebrowEl = qs('#faq-eyebrow');
    const titleEl   = qs('#faq-title');
    if (eyebrowEl) eyebrowEl.textContent = faq.eyebrow;
    if (titleEl)   titleEl.textContent   = faq.title;

    const list = qs('.faq-list');
    if (!list) return;

    list.innerHTML = faq.items.map((item, i) => `
      <div class="faq-item" data-anim data-anim-delay="${Math.min(i, 3)}">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-ans-${i}" id="faq-q-${i}">
          <span>${item.q}</span>
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" id="faq-ans-${i}" role="region" aria-labelledby="faq-q-${i}" style="max-height:0;overflow:hidden;transition:max-height 0.4s ease;">
          <div class="faq-answer-inner"><p>${item.a}</p></div>
        </div>
      </div>
    `).join('');

    // Accordion
    list.addEventListener('click', e => {
      const btn = e.target.closest('.faq-question');
      if (!btn) return;
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        openItem.querySelector('.faq-answer').style.maxHeight = '0';
        openItem.querySelector('.faq-icon').textContent = '+';
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        const answer = item.querySelector('.faq-answer');
        const inner  = answer.querySelector('.faq-answer-inner');
        answer.style.maxHeight = inner.scrollHeight + 'px';
        item.querySelector('.faq-icon').textContent = '−';
      }
    });
  }

  /* ════════════════════════════════════════════════════
     13. CONTACTO / UBICACIÓN
  ════════════════════════════════════════════════════ */
  function buildContacto() {
    const { contacto, brand } = SITE_CONFIG;

    const eyebrowEl = qs('#contacto-eyebrow');
    const titleEl   = qs('#contacto-title');
    if (eyebrowEl) eyebrowEl.textContent = contacto.eyebrow;
    if (titleEl)   titleEl.innerHTML    = contacto.title.replace('\n', '<br/>');

    // Info cards
    const infoEl = qs('.contacto-info');
    if (infoEl) {
      const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;
      infoEl.innerHTML = `
        <div class="contact-card">
          <div class="contact-card-icon">📍</div>
          <div>
            <strong>Dirección</strong>
            <p>${contacto.address}</p>
          </div>
        </div>
        <div class="contact-card">
          <div class="contact-card-icon">🕐</div>
          <div>
            <strong>Horarios</strong>
            ${contacto.schedule.map(s => `<p>${s.day}: ${s.hours}</p>`).join('')}
          </div>
        </div>
        <div class="contact-card">
          <div class="contact-card-icon">📱</div>
          <div>
            <strong>WhatsApp</strong>
            <p><a href="${waUrl}" target="_blank" rel="noopener noreferrer">+595 983 038-787</a></p>
          </div>
        </div>
        <div class="contact-card">
          <div class="contact-card-icon">📸</div>
          <div>
            <strong>Instagram</strong>
            <p><a href="${brand.instagram}" target="_blank" rel="noopener noreferrer">@antonisportt</a></p>
          </div>
        </div>
      `;
    }

    // Mapa
    const mapEl = qs('.contacto-map iframe');
    if (mapEl) mapEl.src = contacto.mapEmbedUrl;
  }

  /* ════════════════════════════════════════════════════
     14. CTA FINAL
  ════════════════════════════════════════════════════ */
  function buildCTAFinal() {
    const { cta, brand } = SITE_CONFIG;
    const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

    const eyebrowEl  = qs('#cta-eyebrow');
    const titleEl    = qs('#cta-title');
    const subEl      = qs('#cta-sub');
    const btnEl      = qs('#cta-btn');
    const microEl    = qs('#cta-micro');

    if (eyebrowEl) eyebrowEl.textContent = cta.eyebrow;
    if (titleEl)   titleEl.innerHTML    = cta.title.replace('\n', '<br/>');
    if (subEl)     subEl.textContent    = cta.sub;
    if (microEl)   microEl.textContent  = cta.microcopy;
    if (btnEl) {
      btnEl.textContent = cta.btnLabel;
      btnEl.href = waUrl;
      btnEl.target = '_blank';
      btnEl.rel = 'noopener noreferrer';
    }
  }

  /* ════════════════════════════════════════════════════
     15. FOOTER
  ════════════════════════════════════════════════════ */
  function buildFooter() {
    const { footer, brand } = SITE_CONFIG;

    const logoEl    = qs('.footer-brand-logo');
    const taglineEl = qs('.footer-tagline');
    if (logoEl)    logoEl.innerHTML    = `Antoni<span>Sport</span>`;
    if (taglineEl) taglineEl.textContent = footer.tagline;

    const colsEl = qs('.footer-cols');
    if (colsEl) {
      colsEl.innerHTML = footer.cols.map(col => `
        <div class="footer-col">
          <div class="footer-col-title">${col.title}</div>
          <ul>${col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
        </div>
      `).join('');
    }

    const year = new Date().getFullYear();
    const copyEl = qs('.footer-copy');
    if (copyEl) copyEl.textContent = `© ${year} ${brand.name}. ${footer.legal}`;

    // WhatsApp flotante
    const waFloat = qs('#whatsapp-float');
    if (waFloat) {
      const url = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;
      waFloat.innerHTML = `
        <span class="whatsapp-tooltip" aria-hidden="true">¡Escribinos!</span>
        <a href="${url}" class="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
        </a>
      `;
      setTimeout(() => { waFloat.style.opacity = '1'; }, 1500);
    }
  }

  /* ════════════════════════════════════════════════════
     INIT
  ════════════════════════════════════════════════════ */
  function init() {
    injectSEO();
    buildNavbar();
    buildHero();

    requestAnimationFrame(() => {
      buildStats();
      buildMosaico();
      buildPersonalizacion();
      buildParallaxBanner('parallax-banner-1', SITE_CONFIG.parallaxBanner1);
      buildBrandStrip();
      buildProductos();
      buildGallery();
      buildProceso();
      buildParallaxBanner('parallax-banner-2', SITE_CONFIG.parallaxBanner2);
      buildFAQ();
      buildContacto();
      buildCTAFinal();
      buildFooter();

      document.dispatchEvent(new CustomEvent('configInjected'));
    });
  }

  return { init };

})();