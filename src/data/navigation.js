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
        items: solutions.slice(0, 2).map((s) => ({
          label: s.title,
          to: `/solutions/${s.slug}`,
          blurb: s.menuBlurb,
        })),
      },
      {
        title: 'Extraction & Pressurisation',
        items: solutions.slice(2).map((s) => ({
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
  {
    label: 'Services',
    to: '/services',
    description: 'Full lifecycle support — installation, maintenance and technical services for every system we deliver.',
    columns: [
      {
        title: 'Delivery',
        items: [
          { label: 'Installation Services', to: '/services/installation', blurb: 'Certified installation to approved shop drawings' },
          { label: 'System Design & Engineering', to: '/services/system-design-engineering', blurb: 'Sizing, coordination and specification' },
          { label: 'Commissioning', to: '/services/commissioning', blurb: 'Witnessed integrated systems testing' },
          { label: 'Retrofit & Upgrades', to: '/services/retrofit-upgrades', blurb: 'Modernising legacy smoke control systems' },
        ],
      },
      {
        title: 'Support',
        items: [
          { label: 'Maintenance & AMC', to: '/services/maintenance', blurb: 'Scheduled statutory testing and servicing' },
          { label: 'Inspection & Testing', to: '/services/inspection-testing', blurb: 'Periodic compliance verification' },
          { label: 'Technical Consultation', to: '/services/technical-consultation', blurb: 'Specialist advice at any project stage' },
          { label: 'Emergency Support', to: '/services/emergency-support', blurb: 'Rapid response when systems need attention' },
        ],
      },
    ],
  },
  // Hidden from navbar per request — routes still work, just not linked here.
  // { label: 'Industries', to: '/industries' },
  // { label: 'Projects', to: '/projects' },
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
  // { label: 'Careers', to: '/careers', compact: true },
  { label: 'Contact', to: '/contact' },
];
