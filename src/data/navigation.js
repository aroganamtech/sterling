import { solutions } from './solutions';
import { services } from './services';
import { productCategories, productsByCategory } from './products';

export const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    description:
      'A Singapore-based specialist in engineered smoke control and ventilation solutions for modern buildings.',
    columns: [
      {
        title: 'The Company',
        items: [
          { label: 'Company Overview', to: '/about', blurb: 'Who we are and how we work' },
          { label: 'Our Vision', to: '/about/vision', blurb: 'What we are building towards' },
          { label: 'Leadership', to: '/about/leadership', blurb: 'The engineer accountable for delivery' },
          { label: 'Global Coverage', to: '/about/global-coverage', blurb: 'Where we operate' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    to: '/solutions',
    description: 'Six solution families, engineered as one integrated smoke control strategy.',
    columns: [
      {
        title: 'Containment & Ventilation',
        items: solutions.slice(0, 3).map((s) => ({
          label: s.title,
          to: `/solutions/${s.slug}`,
          blurb: s.menuBlurb,
        })),
      },
      {
        title: 'Engineering & Support',
        items: solutions.slice(3).map((s) => ({
          label: s.title,
          to: `/solutions/${s.slug}`,
          blurb: s.menuBlurb,
        })),
      },
    ],
  },
  {
    label: 'Products',
    to: '/products',
    description: 'Smoke containment, natural ventilation, smoke ventilation and mechanical smoke extraction.',
    columns: productCategories.map((c) => ({
      title: c.name,
      items: productsByCategory(c.id)
        .slice(0, 6)
        .map((p) => ({ label: p.name, to: `/products/${p.slug}`, blurb: p.model })),
    })),
  },
  {
    label: 'Services',
    to: '/services',
    description: 'Design, installation, maintenance and training across the life of the system.',
    columns: [
      {
        title: 'Delivery',
        items: services.slice(0, 2).map((s) => ({
          label: s.title,
          to: `/services/${s.slug}`,
          blurb: s.menuBlurb,
        })),
      },
      {
        title: 'Support',
        items: services.slice(2).map((s) => ({
          label: s.title,
          to: `/services/${s.slug}`,
          blurb: s.menuBlurb,
        })),
      },
    ],
  },
  {
    label: 'Resources',
    to: '/resources',
    description: 'Standards, technical literature and downloads for design teams.',
    columns: [
      {
        title: 'Technical',
        items: [
          { label: 'Design Standards', to: '/resources/standards', blurb: 'EN 12101 series and the Singapore Fire Code' },
          { label: 'Technical Library', to: '/resources/library', blurb: 'Guides and technical notes' },
        ],
      },
      {
        title: 'Support',
        items: [
          { label: 'Downloads', to: '/resources/downloads', blurb: 'Brochures and datasheets' },
          { label: 'FAQ', to: '/resources/faq', blurb: 'Selection, testing and maintenance' },
        ],
      },
    ],
  },
  { label: 'Contact', to: '/contact' },
];
