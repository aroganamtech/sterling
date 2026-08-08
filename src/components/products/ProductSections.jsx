import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import ProductCard from './ProductCard';
import { EASE, fadeUp, inView, stagger } from '../../lib/motion';

/* --------------------------- section scaffolding --------------------------- */

export function PSection({ children, id, className = '', tone = 'light' }) {
  const tones = {
    light: 'bg-white',
    tint: 'bg-navy-50',
    steel: 'bg-steel-50',
    dark: 'bg-navy-900 text-white',
    deep: 'bg-navy-950 text-white',
  };
  return (
    <section id={id} className={`relative ${tones[tone] || tones.light} py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function PHead({ eyebrow, title, lede, light = false, align = 'left' }) {
  const alignCls = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';
  return (
    <motion.div variants={fadeUp} {...inView} className={alignCls}>
      {eyebrow ? <span className={light ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</span> : null}
      <h2 className={`h2 mt-5 ${light ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
      {lede ? (
        <p className={`mt-5 text-[16px] leading-relaxed ${light ? 'text-navy-200' : 'text-steel-500'}`}>{lede}</p>
      ) : null}
    </motion.div>
  );
}

/* ------------------------------ feature cards ------------------------------ */

export function FeatureCards({ features = [] }) {
  return (
    <motion.div
      variants={stagger()}
      {...inView}
      className="grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map((f, i) => (
        <motion.article
          key={f.title}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="group relative h-full bg-ink-950 p-7"
        >
          <span className="absolute right-6 top-6 font-display text-[13px] font-semibold text-ink-700 transition-colors group-hover:text-ember-600">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="flex h-12 w-12 items-center justify-center border border-ink-700 text-ember-500 transition-all duration-300 group-hover:border-ember-500 group-hover:bg-ember-500 group-hover:text-ink-950">
            <Icon name={f.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-6 font-display text-[18px] font-semibold uppercase leading-tight text-white">
            {f.title}
          </h3>
          <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-400">{f.text}</p>
          <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-ember-500 transition-transform duration-400 group-hover:scale-x-100" />
        </motion.article>
      ))}
    </motion.div>
  );
}

/* ------------------------------- applications ------------------------------ */

export function ApplicationsGrid({ applications = [], columns = 'sm:grid-cols-2' }) {
  return (
    <motion.ul variants={stagger(0, 0.06)} {...inView} className={`grid gap-px bg-ink-800 ${columns}`}>
      {applications.map((a) => (
        <motion.li
          key={a}
          variants={fadeUp}
          className="group flex items-center gap-4 bg-ink-950 px-6 py-5 transition-colors hover:bg-ink-900"
        >
          <span className="h-1.5 w-1.5 shrink-0 bg-ember-500 transition-all group-hover:h-2.5 group-hover:w-2.5" />
          <span className="text-[14.5px] text-ink-200">{a}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

/* --------------------------------- benefits -------------------------------- */

export function BenefitsList({ benefits = [] }) {
  return (
    <motion.div variants={stagger()} {...inView} className="grid gap-px bg-steel-200 sm:grid-cols-2">
      {benefits.map((b, i) => (
        <motion.div key={b.title} variants={fadeUp} className="group h-full bg-white p-7">
          <div className="flex items-start gap-5">
            <span className="font-display text-[28px] font-semibold leading-none text-ember-500">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-display text-[18px] font-semibold uppercase leading-tight text-ink-950">
                {b.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">{b.text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ------------------------------ certifications ----------------------------- */

export function CertificationStrip({ certifications = [] }) {
  return (
    <motion.div variants={stagger()} {...inView} className="grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-4">
      {certifications.map((c) => (
        <motion.div key={c.code} variants={fadeUp} className="group h-full bg-ink-950 p-6">
          <span className="flex h-11 w-11 items-center justify-center border border-ember-500/40 text-ember-500 transition-colors group-hover:bg-ember-500 group-hover:text-ink-950">
            <Icon name="shield" className="h-5 w-5" />
          </span>
          <p className="mt-5 font-display text-[17px] font-semibold uppercase text-white">{c.code}</p>
          <p className="mt-1 text-[11.5px] uppercase tracking-[0.1em] text-ember-500/80">{c.body}</p>
          <p className="mt-3 text-[12.5px] leading-relaxed text-ink-400">{c.note}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ----------------------------- related products ---------------------------- */

export function RelatedProducts({ items = [], title = 'Related products' }) {
  if (!items.length) return null;
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <PHead eyebrow="Also consider" title={title} />
        <motion.div variants={fadeUp} {...inView}>
          <Link to="/products" className="btn-ember-outline">
            Full range
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} compact />
        ))}
      </div>
    </div>
  );
}
