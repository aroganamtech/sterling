import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../../Icon';
import Reveal, { RevealGroup } from '../../Reveal';
import { SectionHead } from '../../Section';
import { coverFor } from '../../../lib/productImages';

/* ---------------------------------------------------------------------------
   Product Detail panels — built strictly from the site's existing design
   system: navy / signal / steel colors, square corners, hairline gap-px
   grids (the same pattern as "Core solutions" / "Why Sterling" / "Engineering
   beyond products" on the Home page), and the shared Reveal/RevealGroup
   scroll animation. No new card style, radius, or component is introduced —
   this only reskins the dark ember/ink version that used to live here, so
   the catalogue/index page is unaffected.
   --------------------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------ spec accordion ----------------------------- */

export function SpecAccordion({ groups = [] }) {
  const [open, setOpen] = useState(0);
  if (!groups.length) return null;

  return (
    <div className="divide-y divide-steel-200 border-y border-steel-200">
      {groups.map((g, gi) => {
        const isOpen = open === gi;
        return (
          <div key={g.group}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : gi)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-5 py-6 text-left transition-colors hover:bg-steel-50"
            >
              <span className="font-display text-[13px] font-semibold text-signal-600">
                {String(gi + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">
                <span className="block font-display text-[17px] font-semibold tracking-tight text-navy-900">
                  {g.group}
                </span>
                <span className="mt-0.5 block text-[12px] text-steel-500">{g.rows.length} parameters</span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors ${
                  isOpen ? 'border-signal-500 text-signal-600' : 'border-steel-200 text-steel-400'
                }`}
              >
                <Icon name="close" className="h-3.5 w-3.5 rotate-45" strokeWidth={1.8} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: EASE }}
                  className="overflow-hidden"
                >
                  <dl className="divide-y divide-steel-100 border-t border-steel-100 pb-6">
                    {g.rows.map(([k, v]) => (
                      <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-8">
                        <dt className="text-[13px] uppercase tracking-[0.08em] text-steel-500">{k}</dt>
                        <dd className="text-[14.5px] font-medium text-navy-900">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------- feature cards ------------------------------ */

export function DetailFeatures({ features = [] }) {
  return (
    <RevealGroup className="grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
      {features.map((f, i) => (
        <article key={f.title} className="group relative h-full bg-white p-7">
          <span className="absolute right-6 top-6 font-display text-[13px] font-semibold text-steel-500 transition-colors group-hover:text-signal-600">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="flex h-12 w-12 items-center justify-center bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-signal-600 group-hover:text-white">
            <Icon name={f.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-6 font-display text-[18px] font-semibold leading-tight text-navy-900">
            {f.title}
          </h3>
          <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500">{f.text}</p>
        </article>
      ))}
    </RevealGroup>
  );
}

/* ------------------------------- applications -------------------------------- */

const SECTOR_ICON_RULES = [
  [/warehouse|distribution|storage|logistic/i, 'box'],
  [/airport|aviation|terminal/i, 'plane'],
  [/factory|manufactur|process|industrial|workshop/i, 'factory'],
  [/mall|retail|shopping/i, 'retail'],
  [/data\s*centre|data\s*center/i, 'data'],
  [/power\s*plant|energy|utility|substation/i, 'power'],
  [/hospital|health|medical|clinic/i, 'health'],
  [/metro|underground/i, 'metro'],
  [/rail|railway|transit/i, 'rail'],
  [/car\s*park|carpark|parking/i, 'car'],
  [/office/i, 'office'],
  [/school|university|education|campus/i, 'school'],
  [/hotel|hospitality/i, 'hotel'],
  [/tunnel/i, 'tunnel'],
  [/stair|escape/i, 'stairs'],
  [/plant\s*room|switchroom/i, 'plant'],
  [/oil|gas|refinery/i, 'oil'],
  [/government|civic|public/i, 'gov'],
  [/exhibition|sport|hall|hangar/i, 'expo'],
];

function iconForSector(label) {
  const hit = SECTOR_ICON_RULES.find(([re]) => re.test(label));
  return hit ? hit[1] : 'target';
}

export function DetailApplications({ applications = [] }) {
  return (
    <RevealGroup className="grid gap-px bg-steel-200 sm:grid-cols-2" stagger={0.06}>
      {applications.map((a) => (
        <div key={a} className="group flex items-center gap-4 bg-white px-6 py-5 transition-colors hover:bg-steel-50">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-signal-600 group-hover:text-white">
            <Icon name={iconForSector(a)} className="h-4 w-4" />
          </span>
          <span className="text-[14px] text-navy-800">{a}</span>
        </div>
      ))}
    </RevealGroup>
  );
}

/* ---------------------------------- benefits --------------------------------- */

export function DetailBenefits({ benefits = [] }) {
  return (
    <RevealGroup className="grid gap-px bg-steel-200 sm:grid-cols-2" stagger={0.08}>
      {benefits.map((b, i) => (
        <div key={b.title} className="group h-full bg-white p-7">
          <div className="flex items-start gap-5">
            <span className="font-display text-[28px] font-semibold leading-none text-signal-600">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-display text-[18px] font-semibold leading-tight text-navy-900">
                {b.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-steel-500">{b.text}</p>
            </div>
          </div>
        </div>
      ))}
    </RevealGroup>
  );
}

/* ------------------------------- certifications ------------------------------- */

export function DetailCertifications({ certifications = [] }) {
  return (
    <RevealGroup className="grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
      {certifications.map((c) => (
        <div key={c.code} className="group h-full bg-white p-6">
          <span className="flex h-11 w-11 items-center justify-center border border-navy-200 text-navy-700 transition-colors group-hover:bg-signal-600 group-hover:border-signal-600 group-hover:text-white">
            <Icon name="shield" className="h-5 w-5" />
          </span>
          <p className="mt-5 font-display text-[16px] font-semibold text-navy-900">{c.code}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-signal-600">{c.body}</p>
          <p className="mt-3 text-[12.5px] leading-relaxed text-steel-500">{c.note}</p>
        </div>
      ))}
    </RevealGroup>
  );
}

/* ----------------------------- related products ------------------------------ */

export function DetailRelated({ items = [] }) {
  if (!items.length) return null;
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="Also consider" title="Related products" />
        <Reveal delay={120}>
          <Link to="/products" className="btn-outline">
            Full range
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.09}>
        {items.map((p) => {
          const cover = coverFor(p.slug);
          return (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden border border-steel-200 bg-white transition-all hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative isolate h-44 overflow-hidden border-b border-steel-200 bg-steel-50">
                <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60" />
                {cover ? (
                  <img
                    src={cover}
                    alt={`${p.name} technical illustration`}
                    loading="lazy"
                    decoding="async"
                    className="relative h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                ) : null}
                <span className="absolute left-4 top-4 bg-signal-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  {p.model}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[18px] font-semibold leading-tight text-navy-900 group-hover:text-signal-700">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-[12px] uppercase tracking-[0.1em] text-steel-500">{p.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.13em] text-navy-800 group-hover:text-signal-600">
                  View product
                  <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </RevealGroup>
    </div>
  );
}
