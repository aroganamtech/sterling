import { Link } from 'react-router-dom';
import Icon from './Icon';
import SmokeCanvas from './SmokeCanvas';
import fireMid from '../assets/hero/fire-1400.jpg';

export function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11.5px] uppercase tracking-[0.14em] text-steel-500">
      <Link to="/" className="transition-colors hover:text-signal-600">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          <Icon name="chevronRight" className="h-3 w-3 text-steel-400" strokeWidth={2} />
          {item.to && i < items.length - 1 ? (
            <Link to={item.to} className="transition-colors hover:text-signal-600">
              {item.label}
            </Link>
          ) : (
            <span className="text-signal-600">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default function PageHero({
  eyebrow,
  title,
  lede,
  breadcrumbs = [],
  actions,
  meta,
  compact = false,
  aside,
  children,
}) {
  const content = (
    <>
      {breadcrumbs.length ? <Breadcrumbs items={breadcrumbs} /> : null}
      <div className="mt-7 max-w-4xl">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1
          className={`mt-5 font-display uppercase leading-[1.03] text-navy-900 ${
            compact ? 'text-[clamp(2rem,4.4vw,3.4rem)]' : 'text-[clamp(2.3rem,5.4vw,4.2rem)]'
          } font-semibold`}
        >
          {title}
        </h1>
        {lede ? <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-steel-600">{lede}</p> : null}
        {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
      {meta ? (
        <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="bg-white px-6 py-5">
              <p className="text-[10.5px] font-semibold uppercase tracking-widest2 text-steel-500">{m.label}</p>
              <p className="mt-2 font-display text-[19px] font-semibold text-navy-900">{m.value}</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(46% 70% at 88% 12%, rgba(200,16,46,.05), transparent 62%), linear-gradient(180deg, rgba(247,248,250,1) 0%, rgba(255,255,255,1) 60%)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-steel-200" />

      <div className={`shell relative ${compact ? 'py-14 md:py-16' : 'py-16 md:py-24'}`}>
        {aside ? (
          /* The left column keeps its original width and line breaks exactly.
             On xl+ the aside is lifted out of flow into the empty band to the
             right of the max-w-4xl text; below xl there isn't reliably enough
             room beside a full-width heading (1024-1279px measured the two
             colliding), so it stacks underneath instead, same as on mobile. */
          <div className="relative">
            {content}
            <div className="mt-10 xl:absolute xl:right-0 xl:top-1/2 xl:mt-0 xl:w-[380px] xl:-translate-y-1/2">
              {aside}
            </div>
          </div>
        ) : (
          content
        )}
        {children}
      </div>
    </section>
  );
}

export function CTASection({
  title = 'Discuss your project with our engineering team',
  text = 'Share the fire strategy, the architectural intent or just the constraint you are stuck on. We will tell you what is achievable before anyone commits to a specification.',
  primary = { label: 'Request Consultation', to: '/contact' },
  secondary = { label: 'Explore Solutions', to: '/solutions' },
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center opacity-[0.14]"
        style={{ backgroundImage: `url(${fireMid})`, filter: 'grayscale(1) contrast(1.1) brightness(0.6)' }}
      />
      <SmokeCanvas className="absolute inset-0 h-full w-full opacity-[0.22]" density={0.5} speed={0.6} intensity={0.6} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
      <div className="shell relative flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center lg:py-20">
        <div className="max-w-2xl">
          <h2 className="h2 text-white">{title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-navy-200">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to={primary.to} className="btn-primary">
            {primary.label}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          {secondary ? (
            <Link to={secondary.to} className="btn-ghost-dark">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
