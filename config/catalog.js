/**
 * ANTONI SPORT — CATALOG
 * Productos destacados organizados por categoría.
 * Las imágenes siguen el patrón de IMG constantes del site-config.
 */

const ANTONI_CATALOG = {

  meta: {
    eyebrow:  'Productos Destacados',
    title:    'Productos',
    titleEm:  'Destacados',
    subtitle: 'Selección de nuestras prendas más vendidas. Todas personalizables.',
  },

  featured: ['casaca-nacional', 'polo-corporativo', 'campera-tactel', 'top-fem'],

  categories: [

    /* ── EQUIPACIÓN COMPLETA ── */
    {
      id:   'completa',
      name: 'Equipación Completa',
      products: [
        {
          id:    'casaca-nacional',
          name:  'Casaca Nacional 2026',
          sub:   'Sublimado · Tela Técnica Premium',
          price: 'Gs. 185.000',
          img:   'assets/img/equipo1.jpeg',
          tag:   'Nuevo',
          tagBg: '',
        },
        {
          id:    'equipacion-completa-pro',
          name:  'Equipación Completa Pro',
          sub:   'Camiseta + Short + Medias',
          price: 'Gs. 280.000',
          img:   'assets/img/equipo2.jpeg',
          tag:   'Más Vendido',
          tagBg: '',
        },
      ],
    },

    /* ── CAMISETAS ── */
    {
      id:   'camisetas',
      name: 'Camisetas',
      products: [
        {
          id:    'camiseta-club-elite',
          name:  'Camiseta Club Elite',
          sub:   'Sublimado Full · Escudo Bordado',
          price: 'Gs. 145.000',
          img:   'assets/img/equipo3.jpeg',
          tag:   null,
          tagBg: '',
        },
        {
          id:    'top-fem',
          name:  'Top Fem Verde Musgo',
          sub:   'Deportivo · Corte Ajustado',
          price: 'Gs. 120.000',
          img:   'assets/img/equipo2.jpeg',
          tag:   'Femenino',
          tagBg: '#4A7C59',
        },
      ],
    },

    /* ── EMPRESARIAL ── */
    {
      id:   'empresarial',
      name: 'Empresarial',
      products: [
        {
          id:    'polo-corporativo',
          name:  'Polo Corporativo Slim',
          sub:   'Bordado · Varios Colores',
          price: 'Gs. 98.000',
          img:   'assets/img/equipo3.jpeg',
          tag:   'Empresarial',
          tagBg: '#333333',
        },
        {
          id:    'remera-institucional',
          name:  'Remera Institucional',
          sub:   'Serigrafía o Sublimado',
          price: 'Gs. 75.000',
          img:   'assets/img/equipo4.jpeg',
          tag:   null,
          tagBg: '',
        },
      ],
    },

    /* ── CAMPERAS ── */
    {
      id:   'camperas',
      name: 'Camperas',
      products: [
        {
          id:    'campera-tactel',
          name:  'Campera Rompe Viento Tactel',
          sub:   'Forro Polar · Muñeca Engomada',
          price: 'Gs. 240.000',
          img:   'assets/img/equipo1.jpeg',
          tag:   'Tácticas',
          tagBg: '#2196F3',
        },
        {
          id:    'calza-corta',
          name:  'Calza Corta Negra',
          sub:   'Línea Stock · Entrega Inmediata',
          price: 'Gs. 75.000',
          img:   'assets/img/equipo4.jpeg',
          tag:   'Stock',
          tagBg: '',
        },
      ],
    },

  ],

};