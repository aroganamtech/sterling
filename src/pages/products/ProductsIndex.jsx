import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/Icon';
import Seo from '../../components/Seo';
import PageHero from '../../components/PageHero';
import SmokeCanvas from '../../components/SmokeCanvas';
import Reveal, { RevealGroup } from '../../components/Reveal';
import Section, { SectionHead } from '../../components/Section';
import CategoryAccordion from '../../components/products/CategoryAccordion';
import ProductCard from '../../components/products/ProductCard';
import AIAssistantModal from '../../components/products/AIAssistantModal';
import BrochureButton from '../../components/products/BrochureButton';
import { categoriesWithProducts, products } from '../../data/products';
import fireMid from '../../assets/hero/fire-1400.jpg';

/* ---------------------------------------------------------------------------
   Products — index + Natural / Smoke / Mechanical Ventilation catalogue.

   Restyled to the exact same design system as the rest of the site (navy +
   signal red + white, square corners, hairline gap-px grids, Section /
   SectionHead / Reveal) in place of the previous orange/black sub-brand.
   Header, footer, routing, product data and AI Assistant / brochure logic
   are unchanged — this is presentation only.
   --------------------------------------------------------------------------- */

const FILTERS = [{ id: 'all', name: 'All products' }];

export default function ProductsIndex() {
  const [assistant, setAssistant] = useState(false);
  const [filter, setFilter] = useState('all');
  const categories = useMemo(() => categoriesWithProducts(), []);
  const filters = [...FILTERS, ...categories.map((c) => ({ id: c.id, name: c.name }))];
  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ventilation Products',
    description:
      'Natural, smoke and mechanical ventilation products engineered and certified by Sterling Ventilation Asia Pacific Pte Ltd.',
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
        title="Products | Natural, Smoke & Mechanical Ventilation | Sterling Ventilation"
        description="Sterling Ventilation's engineered product range — natural ventilation, certified smoke ventilation to EN 12101, and mechanical ventilation equipment for buildings and infrastructure."
        keywords="ventilation products, smoke curtain, smoke ventilator, window actuator, jet fan, EN 12101, smoke control equipment"
        jsonLd={jsonLd}
      />

      {/* ------------------------------- hero ------------------------------- */}
      <PageHero
        eyebrow="Product range"
        title={
          <>
            Engineered
            <span className="block text-signal-400">ventilation products</span>
          </>
        }
        lede="Three families of equipment — natural, smoke and mechanical ventilation — engineered, certified and delivered as part of a complete life safety strategy rather than as line items on a schedule."
        breadcrumbs={[{ label: 'Products' }]}
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
        <Reveal delay={320} className="mt-16 flex flex-wrap gap-px border border-white/10 bg-white/10">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group min-w-[240px] flex-1 bg-navy-950/80 px-6 py-6 transition-colors hover:bg-navy-900"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-white/15 text-signal-400 transition-colors group-hover:border-signal-500 group-hover:bg-signal-600 group-hover:text-white">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[16px] font-semibold uppercase leading-tight text-white">
                    {c.name}
                  </p>
                  <p className="mt-0.5 text-[11.5px] uppercase tracking-[0.1em] text-navy-300">
                    {c.items.length} products
                  </p>
                </div>
              </div>
            </a>
          ))}
        </Reveal>
      </PageHero>

      {/* ---------------------------- accordion ---------------------------- */}
      <Section id="categories" tone="tint">
        <div className="shell">
          <SectionHead
            eyebrow="Browse by category"
            title="Three families, one engineering standard"
            lede="Expand a category to see the range. Every product page carries full specifications, applications, certification and a downloadable brochure."
          />
          <div className="mt-14" id={categories[0]?.id}>
            <CategoryAccordion categories={categories} defaultOpen={categories[0]?.id} />
          </div>
          <div className="sr-only">
            {categories.map((c) => (
              <span key={c.id} id={c.id} />
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------ grid ------------------------------- */}
      <Section tone="light">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Full catalogue" title="Every product at a glance" />
            <Reveal delay={120} className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`border px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all ${
                    filter === f.id
                      ? 'border-signal-600 bg-signal-600 text-white'
                      : 'border-steel-200 text-steel-600 hover:border-navy-300 hover:text-navy-900'
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </Reveal>
          </div>

          <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ----------------------------- support ----------------------------- */}
      <Section tone="tint">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <SectionHead
            eyebrow="Specification support"
            title="Products are the easy part"
            lede="Selecting the right equipment is a consequence of the engineering that comes before it — the design fire, the reservoir, the extract rate, the control philosophy. We do that work first, then specify."
          />
          <RevealGroup className="grid gap-px bg-steel-200 sm:grid-cols-2" stagger={0.08}>
            {[
              { icon: 'cfd', t: 'CFD verification', s: 'Scenario modelling before any equipment is committed.', to: '/engineering/smoke-modelling-cfd' },
              { icon: 'bim', t: 'BIM content', s: 'Native Revit families with performance parameters.', to: '/engineering/bim-revit' },
              { icon: 'compliance', t: 'Compliance mapping', s: 'EN, NFPA, BS and SCDF reconciled into one basis.', to: '/engineering/compliance-consulting' },
              { icon: 'wrench', t: 'Lifetime service', s: 'Statutory testing and condition monitoring.', to: '/solutions' },
            ].map((c) => (
              <Link key={c.t} to={c.to} className="group flex h-full flex-col bg-white p-7 transition-colors hover:bg-steel-50">
                <Icon name={c.icon} className="h-7 w-7 text-navy-700 transition-colors group-hover:text-signal-600" />
                <p className="mt-5 font-display text-[17px] font-semibold uppercase text-navy-900">{c.t}</p>
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
      <section className="relative isolate overflow-hidden bg-navy-900 py-20">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center opacity-[0.22]"
          style={{ backgroundImage: `url(${fireMid})`, filter: 'saturate(0.7)' }}
        />
        <SmokeCanvas className="absolute inset-0 h-full w-full opacity-40" density={0.5} speed={0.6} intensity={0.6} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-transparent" />
        <div className="shell relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal className="max-w-2xl">
            <span className="eyebrow-light">Next step</span>
            <h2 className="h2 text-cine mt-5 text-white">Not sure which product you need?</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-navy-200">
              Ask the assistant for a first pass, or send the building and the fire strategy to our engineers for a
              specification-grade answer.
            </p>
          </Reveal>
          <Reveal delay={140} className="flex flex-wrap gap-3">
            <button type="button" onClick={() => setAssistant(true)} className="btn-navy">
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
