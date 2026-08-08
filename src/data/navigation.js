import { solutions } from './solutions';
import { engineeringServices } from './engineering';
import { productCategories, productsByCategory } from './products';

export const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    description: 'A specialist smoke control engineering practice built around life safety.',
    columns: [
      {
        title: 'The Company',
        items: [
          { label: 'Company', to: '/about', blurb: 'Who we are and how we work' },
          { label: 'Vision & Mission', to: '/about/vision-mission', blurb: 'What we are building towards' },
          { label: 'Leadership', to: '/about/leadership', blurb: 'The people accountable for delivery' },
          { label: 'Global Presence', to: '/about/global-presence', blurb: 'Where we operate' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    to: '/solutions',
    description: 'Engineered smoke management systems, designed as one integrated life safety strategy.',
    columns: [
      {
        title: 'Containment & Ventilation',
        items: solutions.slice(0, 4).map((s) => ({
          label: s.title,
          to: `/solutions/${s.slug}`,
          blurb: s.menuBlurb,
        })),
      },
      {
        title: 'Infrastructure & Control',
        items: solutions.slice(4).map((s) => ({
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
    description: 'The engineered equipment range — natural, smoke and mechanical ventilation.',
    columns: productCategories.map((c) => ({
      title: c.name,
      items: productsByCategory(c.id)
        .slice(0, 6)
        .map((p) => ({ label: p.name, to: `/products/${p.slug}`, blurb: p.model })),
    })),
  },
  {
    label: 'Engineering',
    to: '/engineering',
    description: 'The analysis, modelling and coordination behind every system we deliver.',
    columns: [
      {
        title: 'Design & Analysis',
        items: engineeringServices.slice(0, 3).map((s) => ({
          label: s.title,
          to: `/engineering/${s.slug}`,
          blurb: s.menuBlurb,
        })),
      },
      {
        title: 'Delivery & Compliance',
        items: engineeringServices.slice(3).map((s) => ({
          label: s.title,
          to: `/engineering/${s.slug}`,
          blurb: s.menuBlurb,
        })),
      },
    ],
  },
  { label: 'Industries', to: '/industries' },
  { label: 'Projects', to: '/projects' },
  {
    label: 'Resources',
    to: '/resources',
    description: 'Standards, technical literature and downloads for design teams.',
    columns: [
      {
        title: 'Technical',
        items: [
          { label: 'Design Standards', to: '/resources/standards', blurb: 'EN, NFPA, BS, ASHRAE, IBC, SCDF' },
          { label: 'Technical Library', to: '/resources/library', blurb: 'White papers, guides, case studies' },
        ],
      },
      {
        title: 'Support',
        items: [
          { label: 'Downloads', to: '/resources/downloads', blurb: 'Profiles, datasheets, certificates' },
          { label: 'FAQ', to: '/resources/faq', blurb: 'Selection, testing and maintenance' },
          { label: 'News & Articles', to: '/resources/news', blurb: 'Code updates and insight' },
        ],
      },
    ],
  },
  { label: 'Careers', to: '/careers', compact: true },
  { label: 'Contact', to: '/contact' },
];
