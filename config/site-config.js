/**
 * ANTONI SPORT — SITE CONFIG
 * Catálogo de productos en catalog.js
 * Imágenes: definidas como constantes al inicio para fácil reemplazo.
 */

/* ══════════════════════════════════════════════
   CONSTANTES DE IMÁGENES — reemplazar rutas aquí
   ══════════════════════════════════════════════ */
const IMG = {
  /* Hero slides */
  hero1:        'assets/img/hero.png',
  hero2:        'assets/img/hero2.jfif',
  hero3:        'assets/img/hero3.jpeg',      // ← asignar

  /* Logo */
  logo:         'assets/img/logo.png',

  /* Bento / Mosaico */
  bentoCompleta:    'assets/img/franco2.jpeg',
  bentoCamisetas:   'assets/img/bento3.jpeg',
  bentoEmpresarial: 'assets/img/bento2.jpeg',
  bentoCampera:     'assets/img/bento5.png',

  /* Personalización */
  customMain:   'assets/img/image.png',
  customFloat:  'assets/img/franco3.jpeg',

  /* Parallax / Banner */
  parallax1:    'assets/img/hero.png',  // ← asignar
  parallax2:    'assets/img/parallax.jpeg',  // ← asignar

  /* Galería */
  gallery1:     'assets/img/equipo1.jpeg',   // ← asignar
  gallery2:     'assets/img/equipo2.jpeg',   // ← asignar
  gallery3:     'assets/img/equipo3.jpeg',   // ← asignar
  gallery4:     'assets/img/equipo4.jpeg',   // ← asignar
  gallery5:     'assets/img/equipo2.jpeg',   // ← asignar

  /* OG */
  og:           'assets/img/og-antoni.jpg',   // ← asignar
};

/* ══════════════════════════════════════════════
   SITE CONFIG
   ══════════════════════════════════════════════ */
const SITE_CONFIG = {

  brand: {
    name:             'Antoni Sport',
    tagline:          'El lugar donde la calidad y la dedicación se encuentran para alcanzar tus objetivos.',
    shortTagline:     'Confección 100% Nacional',
    description:      'Confección deportiva y empresarial 100% paraguaya. Diseños a medida, calidad profesional, entrega en todo el país.',
    city:             'Pdte. Franco',
    neighborhood:     'Bo. Maria Auxiliadora',
    country:          'Paraguay',
    address:          'Bo. Maria Auxiliadora — Pdte. Franco, Paraguay',
    whatsapp:         '5950983038787',
    whatsappMessage:  '¡Hola Antoni Sport! Quiero consultar sobre pedidos personalizados.',
    instagram:        'https://instagram.com/antonisportt',
    facebook:         '',
    scheduleWeekdays: 'Lunes a Sábado',
    scheduleHours:    '08:00–12:00 y 13:00–17:00',
    deliveryDays:     '~10 días hábiles',
  },

  seo: {
    title:       'Antoni Sport | Confección Deportiva 100% Nacional — Paraguay',
    description: 'Camisetas deportivas y uniformes empresariales personalizados. Sublimado total, escudos bordados, tallas para todas las edades. Envíos a todo Paraguay.',
    keywords:    'camisetas deportivas paraguay, uniformes empresariales, sublimado deportivo, indumentaria personalizada, ciudad del este, pdte franco',
    ogImage:     IMG.og,
  },

  /* ── Tema visual (solo blanco/negro/acento rojo) ── */
  theme: {
    black:           '#080808',
    white:           '#FFFFFF',
    cream:           '#F4F4F4',
    accent:          '#B22222',
    accentHover:     '#D42828',
    gold:            '#A1A1A1',
    textDark:        '#0A0A0A',
    textMuted:       '#888888',
  },

  /* ── Navbar ── */
  navbar: {
    logo:  IMG.logo,
    links: [
      { label: 'Colecciones',     href: '#mosaico' },
      { label: 'Personalización', href: '#personalizacion' },
      { label: 'Productos',       href: '#productos' },
      { label: 'Nosotros',        href: '#stats' },
      { label: 'Contacto',        href: '#contacto' },
    ],
    ctaLabel: 'Pedir Diseño',
    ctaHref:  '#personalizacion',
  },

  /* ── Hero Slider ── */
  hero: {
    autoplayInterval: 5500,
    eyebrow: 'Confección 100% Nacional · Pdte. Franco, Paraguay',
    slides: [
      {
        bg:      IMG.hero1,
        title:   'Confeccionamos\ntu identidad,\nvestimos tu éxito.',
        titleEm: 'tu identidad,',
        sub:     'Antoni Sport — Indumentaria Deportiva & Empresarial · Paraguay',
        primaryCTA:   { label: 'Ver Colecciones', href: '#mosaico' },
        secondaryCTA: { label: 'Crear mi Diseño',  href: '#personalizacion' },
      },
      {
        bg:      IMG.hero2,
        title:   'Cada prenda,\nuna historia\nde esfuerzo.',
        titleEm: 'una historia',
        sub:     'Sublimado total · Escudos bordados · Tela técnica premium',
        primaryCTA:   { label: 'Ver Colecciones', href: '#mosaico' },
        secondaryCTA: { label: 'Cotizar Ahora',   href: '#personalizacion' },
      },
      {
        bg:      IMG.hero3,
        title:   'Tu equipo,\ntu escudo,\ntu victoria.',
        titleEm: 'tu escudo,',
        sub:     'Pedidos listos en ~10 días hábiles · Envíos a todo el país',
        primaryCTA:   { label: 'Pedir Equipación', href: '#mosaico' },
        secondaryCTA: { label: 'Diseño Custom',    href: '#personalizacion' },
      },
    ],
  },

  /* ── Stats ── */
  stats: [
    { num: '+30.000', label: 'Prendas Confeccionadas' },
    { num: '20',      label: 'Años de Experiencia' },
    { num: '+80',     label: 'Clubes Equipados' },
    { num: '100%',    label: 'Producción Nacional' },
  ],

  /* ── Bento / Mosaico ── */
  mosaico: {
    eyebrow: '✦ Colecciones 2026',
    title:   'El Universo',
    titleEm: 'Antoni',
    items: [
      {
        id:     'completa',
        bg:     IMG.bentoCompleta,
        cat:    'Equipación Deportiva',
        title:  'Indumentaria\nCompleta',
        desc:   'Camiseta + Short + Medias Profesionales.\nSublimado total, diseños exclusivos.',
        cta:    'Ver Colección',
        badge:  'Más Vendido',
        badgeBg: '',
      },
      {
        id:     'camisetas',
        bg:     IMG.bentoCamisetas,
        cat:    'Camisetas Deportivas',
        title:  'Solo\nCamisetas',
        desc:   'Tu escudo, tu identidad.\nPersonalización total.',
        cta:    'Explorar',
        badge:  null,
        badgeBg: '',
      },
      {
        id:     'empresarial',
        bg:     IMG.bentoEmpresarial,
        cat:    'Institucional',
        title:  'Uniformes\nEmpresariales',
        desc:   'Polos, remeras y más para tu empresa.\nImagen profesional garantizada.',
        cta:    'Cotizar',
        badge:  null,
        badgeBg: '',
      },
      {
        id:     'campera',
        bg:     IMG.bentoCampera,
        bgPos:  'center 35%',
        cat:    'Combate el Clima',
        title:  'Camperas\nRompe Viento',
        desc:   'Tela Tactel de alta resistencia, muñeca engomada y forro polar.',
        cta:    'Abrígate Aquí',
        badge:  'Tácticas',
        badgeBg: '#2196F3',
      },
    ],
  },

  /* ── Personalización (Split) ── */
  personalizacion: {
    eyebrow:    'Custom Experience',
    title:      'Tu Diseño,\nNuestra\nConfección.',
    titleEm:    'Nuestra',
    body:       'Desde el primer boceto hasta la última costura, trabajamos junto a vos para crear prendas únicas. Sublimación digital de alta resolución, tejidos técnicos premium y acabados profesionales que resisten el juego intenso.',
    imgMain:    IMG.customMain,
    imgFloat:   IMG.customFloat,
    ctaLabel:   'Crear Mi Diseño',
    features: [
      { icon: '⚡', title: 'Sublimado Total',   desc: 'Colores que no se borran, diseños que duran.' },
      { icon: '✦',  title: 'Escudos Bordados',  desc: 'Relieve y textura en cada detalle.' },
      { icon: '◈',  title: 'Tela Técnica',      desc: 'Transpirable, liviana, certificada.' },
      { icon: '↯',  title: 'Entrega Rápida',    desc: 'Producción local, ~10 días hábiles.' },
    ],
  },

  /* ── Parallax Banner 1 (entre personalización y productos) ── */
  parallaxBanner1: {
    bg:      IMG.parallax1,
    eyebrow: 'Calidad que se siente',
    title:   'Hecho en Paraguay,\nusado en todo el mundo.',
    sub:     'Cada costura lleva el orgullo de la confección nacional. Materiales técnicos seleccionados para el rendimiento máximo.',
    cta:     { label: 'Ver Colecciones', href: '#mosaico' },
  },

  /* ── Brand Strip ── */
  brandStrip: {
    items: [
      'Sublimado Total',
      'Escudos Bordados',
      'Tela Técnica Premium',
      'Envíos a Todo el País',
      'Tallas para Todas las Edades',
      '10 Días Hábiles',
      'Confección 100% Nacional',
      'Envíos Internacionales',
    ],
  },

  /* ── Parallax Banner 2 (entre galería y FAQ) ── */
  parallaxBanner2: {
    bg:      IMG.parallax2,
    eyebrow: '20 años de experiencia',
    title:   'La dedicación\nes nuestra marca.',
    sub:     'Más de 30.000 prendas confeccionadas, más de 80 clubes equipados. Tu confianza, nuestro motor.',
    cta:     { label: 'Contactanos por WhatsApp', href: '#contacto' },
  },

  /* ── Galería ── */
  gallery: {
    eyebrow: 'Nuestro Trabajo',
    title:   'Prendas que\nhablan por sí solas.',
    images: [
      { src: IMG.gallery1, alt: 'Equipación deportiva completa' },
      { src: IMG.gallery2, alt: 'Camisetas sublimadas personalizadas' },
      { src: IMG.gallery3, alt: 'Uniformes empresariales bordados' },
      { src: IMG.gallery4, alt: 'Detalle de sublimado full color' },
      { src: IMG.gallery5, alt: 'Indumentaria femenina deportiva' },
    ],
  },

  /* ── Proceso / Cómo funciona ── */
  proceso: {
    eyebrow: 'Así Trabajamos',
    title:   'De tu idea\na tu prenda.',
    steps: [
      { num: '01', title: 'Contacto',    desc: 'Escribinos por WhatsApp o completá el formulario con tu idea y cantidad de piezas.' },
      { num: '02', title: 'Diseño',      desc: 'Nuestro equipo crea el boceto digital para tu aprobación sin costo adicional.' },
      { num: '03', title: 'Producción',  desc: 'Con tu visto bueno, comenzamos la confección. ~10 días hábiles en producción.' },
      { num: '04', title: 'Entrega',     desc: 'Enviamos a todo el país. Revisás y confirmás antes de cerrar el pedido.' },
    ],
  },

  /* ── FAQ ── */
  faq: {
    eyebrow: 'Dudas Frecuentes',
    title:   '¿Tenés preguntas?',
    items: [
      { q: '¿Cuánto tarda en estar listo mi pedido?',           a: 'Aproximadamente 10 días hábiles desde la aprobación del diseño. Pedidos urgentes se evalúan caso a caso.' },
      { q: '¿Tienen mínimo de piezas por pedido?',              a: 'Para indumentaria sublimada trabajamos desde 10 unidades. Para uniformes empresariales desde 5 unidades.' },
      { q: '¿Hacen envíos a todo el país?',                     a: 'Sí, enviamos a todo Paraguay. También realizamos envíos internacionales bajo condiciones. Consultanos por tu destino.' },
      { q: '¿Puedo ver el diseño antes de producir?',           a: 'Siempre. Enviamos boceto digital para tu aprobación antes de iniciar la confección, sin cargo adicional.' },
      { q: '¿Qué tallas tienen disponibles?',                   a: 'Confeccionamos desde talla XS infantil hasta tallas especiales para adulto. Trabajamos para todas las edades y contextos.' },
      { q: '¿Cuáles son los métodos de pago?',                  a: 'Transferencia bancaria, efectivo en local (Pdte. Franco) y pagos online. Consultanos por opciones en cuotas para pedidos grandes.' },
      { q: '¿Hacen diseño empresarial con logo de mi empresa?', a: 'Sí. Bordamos o sublimamos tu logo con la más alta calidad. Solo envianos el archivo en alta resolución (AI, SVG o PNG grande).' },
    ],
  },

  /* ── Contacto / Ubicación ── */
  contacto: {
    eyebrow: 'Encontranos',
    title:   'Estamos en\nPdte. Franco.',
    address: 'Bo. Maria Auxiliadora — Pdte. Franco, Paraguay',
    schedule: [
      { day: 'Lunes a Sábado', hours: '08:00 – 12:00' },
      { day: 'Lunes a Sábado', hours: '13:00 – 17:00' },
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.945!2d-54.601!3d-25.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMyJzUyLjgiUyA1NMKwMzYnMDMuNiJX!5e0!3m2!1ses!2spy!4v1700000000000',
    socials: [
      { platform: 'WhatsApp', href: 'https://wa.me/5950983038787', icon: 'wa' },
      { platform: 'Instagram', href: 'https://instagram.com/antonisportt', icon: 'ig' },
    ],
  },

  /* ── CTA Final ── */
  cta: {
    eyebrow:    'Empezá Hoy',
    title:      'Tu equipo merece\nlo mejor.',
    sub:        'Camisetas, uniformes y más. Calidad nacional, entrega en todo Paraguay.',
    btnLabel:   'Hablar por WhatsApp',
    microcopy:  'Respuesta en el día · Diseño sin costo · Envíos a todo el país',
  },

  /* ── Footer ── */
  footer: {
    tagline: 'Confección 100% Nacional · Pdte. Franco, PY',
    cols: [
      {
        title: 'Colecciones',
        links: [
          { label: 'Indumentaria Completa',  href: '#mosaico' },
          { label: 'Solo Camisetas',          href: '#mosaico' },
          { label: 'Uniformes Empresariales', href: '#mosaico' },
          { label: 'Camperas Rompe Viento',   href: '#mosaico' },
          { label: 'Accesorios',              href: '#mosaico' },
        ],
      },
      {
        title: 'Servicios',
        links: [
          { label: 'Diseño Personalizado', href: '#personalizacion' },
          { label: 'Sublimación Digital',  href: '#personalizacion' },
          { label: 'Bordados y Escudos',   href: '#personalizacion' },
          { label: 'Pedidos al por Mayor', href: '#contacto' },
          { label: 'Envíos Internacionales', href: '#contacto' },
        ],
      },
      {
        title: 'Contacto',
        links: [
          { label: 'WhatsApp: +595 983 038-787', href: 'https://wa.me/5950983038787' },
          { label: 'Instagram: @antonisportt',   href: 'https://instagram.com/antonisportt' },
          { label: 'Bo. Maria Auxiliadora',      href: '#contacto' },
          { label: 'Pdte. Franco, Paraguay',     href: '#contacto' },
        ],
      },
    ],
    legal: 'Todos los derechos reservados.',
  },

};