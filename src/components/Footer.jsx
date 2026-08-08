import { Link } from 'react-router-dom';
import Icon from './Icon';
import { company, contactChannels, offices } from '../data/company';
import { solutions } from '../data/solutions';
import { engineeringServices } from '../data/engineering';
import { productCategories, products } from '../data/products';
import logoLight from '../assets/logo-mark-light.png';

const columns = [
  {
    title: 'Solutions',
    links: solutions.map((s) => ({ label: s.title, to: `/solutions/${s.slug}` })),
  },
  {
    title: 'Products',
    links: [
      ...productCategories.map((c) => ({ label: c.name, to: `/products#${c.id}` })),
      ...products
        .filter((p) => ['smoke-control-panel', 'smoke-control-damper', 'window-actuator', 'axial-flow-fan'].includes(p.slug))
        .map((p) => ({ label: p.name, to: `/products/${p.slug}` })),
      { label: 'All products', to: '/products' },
    ],
  },
  {
    title: 'Engineering',
    links: engineeringServices.map((s) => ({ label: s.title, to: `/engineering/${s.slug}` })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Vision & Mission', to: '/about/vision-mission' },
      { label: 'Leadership', to: '/about/leadership' },
      { label: 'Global Presence', to: '/about/global-presence' },
      { label: 'Industries', to: '/industries' },
      { label: 'Projects', to: '/projects' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Design Standards', to: '/resources/standards' },
      { label: 'Technical Library', to: '/resources/library' },
      { label: 'Downloads', to: '/resources/downloads' },
      { label: 'FAQ', to: '/resources/faq' },
      { label: 'News & Articles', to: '/resources/news' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(200,16,46,.55), transparent 70%)' }}
      />

      <div className="relative">
        {/* main */}
        <div className="shell grid gap-12 py-16 lg:grid-cols-[1.15fr_2.6fr]">
          <div>
            <div className="flex items-center gap-3.5">
              <img src={logoLight} alt="" className="h-12 w-auto" />
              <span className="leading-none">
                <span className="block font-display text-[22px] font-semibold tracking-[0.13em] text-white">
                  Sterling
                </span>
                <span className="block font-display text-[13px] font-medium tracking-[0.24em] text-signal-400">
                  Ventilation
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-navy-300">
              {company.legalName} engineers life safety smoke management systems for buildings and critical
              infrastructure across the Asia-Pacific region.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {company.values.map((v) => (
                <span
                  key={v}
                  className="border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-300"
                >
                  {v}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="mt-7 inline-flex h-10 w-10 items-center justify-center border border-white/15 text-navy-300 transition hover:border-signal-500 hover:text-white"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" className="h-4.5 w-4.5" />
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-[10.5px] font-bold uppercase tracking-widest2 text-white">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link
                        to={l.to}
                        className="text-[13.5px] text-navy-300 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* offices */}
        <div className="border-t border-white/10">
          <div className="shell grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <div key={o.id}>
                <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-400">{o.label}</p>
                <address className="mt-3 space-y-1 text-[13.5px] not-italic leading-relaxed text-navy-300">
                  {o.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <div className="mt-3 space-y-1 text-[13.5px]">
                  <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="block text-navy-200 hover:text-white">
                    {o.phone}
                  </a>
                  <a href={`mailto:${o.email}`} className="block text-navy-200 hover:text-white">
                    {o.email}
                  </a>
                </div>
              </div>
            ))}
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-400">Direct Channels</p>
              <ul className="mt-3 space-y-2 text-[13.5px] text-navy-300">
                <li>
                  Engineering ·{' '}
                  <a href={`mailto:${contactChannels.engineering}`} className="hover:text-white">
                    {contactChannels.engineering}
                  </a>
                </li>
                <li>
                  Service ·{' '}
                  <a href={`mailto:${contactChannels.service}`} className="hover:text-white">
                    {contactChannels.service}
                  </a>
                </li>
                <li>
                  Careers ·{' '}
                  <a href={`mailto:${contactChannels.careers}`} className="hover:text-white">
                    {contactChannels.careers}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-[12px] text-navy-400 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {company.legalName}. All rights reserved.
            </p>
            <p className="font-semibold uppercase tracking-[0.18em]">
              {company.promise.split('.')[0]}.<span className="text-signal-500"> {company.promise.split('.')[1]}.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
