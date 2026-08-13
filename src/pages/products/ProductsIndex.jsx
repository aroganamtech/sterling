import { lazy, Suspense, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';
import Seo from '../../components/Seo';
import PageHero from '../../components/PageHero';
import SmokeCanvas from '../../components/SmokeCanvas';
import Reveal, { RevealGroup } from '../../components/Reveal';
import Section, { SectionHead } from '../../components/Section';
import ProductCard from '../../components/products/ProductCard';
import AIAssistantModal from '../../components/products/AIAssistantModal';
import BrochureButton from '../../components/products/BrochureButton';
import { categoriesWithProducts, products } from '../../data/products';
import { illustration } from '../../lib/productImages';
import fireMid from '../../assets/hero/fire-1400.jpg';

/* 3D hero presentation — deferred so the hero copy paints before three.js loads */
const HeroProduct3D = lazy(() => import('../../components/products/HeroProduct3D'));

/* ---------------------------------------------------------------------------
   Products — one section per category, laid out content-left / image-right as
   specified in the approved content document. Each section carries the
   category introduction, capabilities, key benefits and its product cards.

   Products may belong to more than one category (a Ventec actuator serves both
   natural ventilation and smoke ventilation duty), so each section is built
   from productsByCategory() rather than from a single-category field.
   --------------------------------------------------------------------------- */

export default function ProductsIndex() {
  const [assistant, setAssistant] = useState(false);
  const categories = useMemo(() => categoriesWithProducts(), []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ventilation Products',
    description:
      'Smoke containment, natural ventilation, smoke ventilation and mechanical smoke extraction products supplied by Sterling Ventilation Asia Pacific Pte Ltd.',
    hasPart: products.map((p) => ({
      '@type': 'Product',
      name: p.name,
      sku: p.model,
      description: p.short,
      url: `/products/${p.slug}`,
      brand: { '@type': 'Brand', name: 'Sterling Ventilation' },
    })),
  };

  return (
    <div className="bg-white">
      <Seo
        title="Products | Smoke Containment, Ventilation & Extraction | Sterling Ventilation"
        description="Sterling Ventilation's engineered product range — smoke containment, natural ventilation, smoke ventilation and mechanical smoke extraction equipment for buildings across Asia and Australia."
        keywords="ventilation products, smoke curtain, Prime Curtain, smoke ventilator, window actuator, smoke damper, smoke extraction fan, EN 12101"
        jsonLd={jsonLd}
      />

      {/* ------------------------------- hero ------------------------------- */}
      <PageHero
        eyebrow="Product range"
        title={
          <>
            Engineered
            <span className="block text-steel-500">ventilation products</span>
          </>
        }
        lede="Four product families — smoke containment, natural ventilation, smoke ventilation and mechanical smoke extraction — engineered, certified and delivered as part of a complete smoke control strategy rather than as line items on a schedule."
        breadcrumbs={[{ label: 'Products' }]}
        aside={
          <Suspense fallback={<div className="h-[320px] w-full sm:h-[380px] lg:h-[400px]" />}>
            <HeroProduct3D />
          </Suspense>
        }
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request Quotation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <button type="button" onClick={() => setAssistant(true)} className="btn-navy">
              <Icon name="spark" className="h-4 w-4" />
              AI Assistant
            </button>
            <BrochureButton className="btn-outline" />
          </>
        }
      >
        <Reveal delay={320} className="mt-16 flex flex-wrap gap-px border border-steel-200 bg-steel-200">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group min-w-[240px] flex-1 bg-white px-6 py-6 transition-colors hover:bg-steel-50"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-steel-200 text-signal-600 transition-colors group-hover:border-signal-600 group-hover:bg-signal-600 group-hover:text-white">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[16px] font-semibold leading-tight text-navy-900">{c.name}</p>
                  <p className="mt-0.5 text-[11.5px] uppercase tracking-[0.1em] text-steel-500">
                    {c.items.length} products
                  </p>
                </div>
              </div>
            </a>
          ))}
        </Reveal>
      </PageHero>

      {/* --------------------------- categories ---------------------------- */}
      {categories.map((cat, ci) => {
        const src = illustration(cat.image);
        return (
          <Section key={cat.id} id={cat.id} tone={ci % 2 ? 'tint' : 'light'}>
            <div className="shell">
              {/* content left, image right */}
              <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                <div>
                  <SectionHead eyebrow={`0${ci + 1} · ${cat.name}`} title={cat.subtitle} />
                  <div className="mt-7 space-y-4 text-[15.5px] leading-relaxed text-steel-600">
                    {cat.intro.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>

                  {cat.capabilities?.length ? (
                    <div className="mt-8">
                      <p className="label">Sterling provides engineering solutions for</p>
                      <ul className="mt-4 grid gap-y-2.5 sm:grid-cols-2">
                        {cat.capabilities.map((c) => (
                          <li key={c} className="flex items-start gap-3 text-[14px] text-navy-800">
                            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" strokeWidth={2} />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>

                <Reveal delay={120}>
                  <figure className="relative overflow-hidden border border-steel-200 bg-navy-950 shadow-card">
                    <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
                    {src ? (
                      <img
                        src={src}
                        alt={`${cat.name} — technical illustration`}
                        loading="lazy"
                        decoding="async"
                        className="relative aspect-[4/3] w-full object-contain p-6"
                      />
                    ) : (
                      <div className="relative aspect-[4/3] w-full" />
                    )}
                    <figcaption className="relative flex items-center gap-3 border-t border-white/10 px-6 py-4">
                      <Icon name={cat.icon} className="h-5 w-5 text-signal-400" />
                      <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-navy-300">
                        {cat.tagline}
                      </span>
                    </figcaption>
                  </figure>

                  {cat.keyBenefits?.length ? (
                    <div className="mt-6">
                      <p className="label">Key benefits</p>
                      <div className="mt-4 grid gap-px bg-steel-200 sm:grid-cols-2">
                        {cat.keyBenefits.map((b) => (
                          <div key={b} className="flex items-center gap-3 bg-white px-5 py-4">
                            <Icon name="check" className="h-4 w-4 shrink-0 text-signal-600" strokeWidth={2} />
                            <span className="text-[13.5px] font-medium text-navy-800">{b}</span>
                          </div>
                        ))}
                        {cat.keyBenefits.length % 2 ? <div className="hidden bg-white sm:block" /> : null}
                      </div>
                    </div>
                  ) : null}
                </Reveal>
              </div>

              {/* product cards for this category */}
              <div className="mt-14">
                <p className="label">{cat.name} products</p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {cat.items.map((p, i) => (
                    <ProductCard key={p.slug} product={p} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* ----------------------------- support ----------------------------- */}
      <Section tone="steel">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <SectionHead
            eyebrow="Specification support"
            title="Products are the easy part"
            lede="Selecting the right equipment is a consequence of the engineering that comes before it — the building configuration, the smoke control objectives, the required airflow and the control philosophy. We do that work first, then specify."
          />
          <RevealGroup className="grid gap-px bg-steel-200 sm:grid-cols-2" stagger={0.08}>
            {[
              { icon: 'drawing', t: 'System design', s: 'Calculations, layouts, control strategies and technical documentation.', to: '/services/system-design' },
              { icon: 'wrench', t: 'Installation', s: 'Approved designs installed and coordinated on site.', to: '/services/installation' },
              { icon: 'gauge', t: 'Maintenance', s: 'Inspection, functional testing and preventive servicing.', to: '/services/maintenance' },
              { icon: 'users', t: 'Training', s: 'Practical training for building and maintenance teams.', to: '/services/training' },
            ].map((c) => (
              <Link key={c.t} to={c.to} className="group flex h-full flex-col bg-white p-7 transition-colors hover:bg-steel-50">
                <Icon name={c.icon} className="h-7 w-7 text-navy-700 transition-colors group-hover:text-signal-600" />
                <p className="mt-5 font-display text-[17px] font-semibold text-navy-900">{c.t}</p>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-steel-500">{c.s}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-signal-600">
                  Learn more
                  <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* -------------------------------- CTA ------------------------------- */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-20">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center opacity-[0.14]"
          style={{ backgroundImage: `url(${fireMid})`, filter: 'grayscale(1) contrast(1.1) brightness(0.6)' }}
        />
        <SmokeCanvas className="absolute inset-0 h-full w-full opacity-[0.22]" density={0.5} speed={0.6} intensity={0.6} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
        <div className="shell relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal className="max-w-2xl">
            <span className="eyebrow-light">Next step</span>
            <h2 className="h2 mt-5 text-white">Not sure which product you need?</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-navy-200">
              Ask the assistant for a first pass, or send the building and the fire strategy to our engineers for a
              considered answer.
            </p>
          </Reveal>
          <Reveal delay={140} className="flex flex-wrap gap-3">
            <button type="button" onClick={() => setAssistant(true)} className="btn-ghost-dark">
              <Icon name="spark" className="h-4 w-4" />
              Ask the AI Assistant
            </button>
            <Link to="/contact" className="btn-primary">
              Talk to an engineer
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <AIAssistantModal open={assistant} onClose={() => setAssistant(false)} />
    </div>
  );
}
