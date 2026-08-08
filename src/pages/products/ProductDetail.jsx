import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/Icon';
import Seo from '../../components/Seo';
import SmokeCanvas from '../../components/SmokeCanvas';
import Reveal, { RevealGroup } from '../../components/Reveal';
import Section, { SectionHead } from '../../components/Section';
import DetailGallery from '../../components/products/detail/DetailGallery';
import AIAssistantModal from '../../components/products/AIAssistantModal';
import BrochureButton from '../../components/products/BrochureButton';
import {
  DetailApplications,
  DetailBenefits,
  DetailCertifications,
  DetailFeatures,
  DetailRelated,
  SpecAccordion,
} from '../../components/products/detail/DetailPanels';
import { galleryFor } from '../../lib/productImages';
import { getCategory, getProduct, relatedProducts } from '../../data/products';
import fireMid from '../../assets/hero/fire-1400.jpg';

/* ---------------------------------------------------------------------------
   Product Detail — redesigned to continue the landing page's visual language
   (white / soft grey, navy + signal red, subtle engineering grid) instead of
   the dark ember catalogue theme used on /products. Header, footer, routing,
   product data and the AI Assistant / brochure logic are untouched; only this
   page's presentation changes, via the new components in
   src/components/products/detail/.
   --------------------------------------------------------------------------- */

function Breadcrumbs({ category, product }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-[11.5px] uppercase tracking-[0.14em] text-steel-500"
    >
      <Link to="/" className="transition-colors hover:text-navy-900">
        Home
      </Link>
      <Icon name="chevronRight" className="h-3 w-3 text-steel-300" strokeWidth={2} />
      <Link to="/products" className="transition-colors hover:text-navy-900">
        Products
      </Link>
      <Icon name="chevronRight" className="h-3 w-3 text-steel-300" strokeWidth={2} />
      <Link to={`/products#${category.id}`} className="transition-colors hover:text-navy-900">
        {category.name}
      </Link>
      <Icon name="chevronRight" className="h-3 w-3 text-steel-300" strokeWidth={2} />
      <span className="font-semibold text-signal-600">{product.name}</span>
    </nav>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const [assistant, setAssistant] = useState(false);

  const images = useMemo(() => (product ? galleryFor(product.slug, product.name) : []), [product]);
  const jsonLd = useMemo(
    () =>
      product
        ? {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            sku: product.model,
            description: product.short,
            category: getCategory(product.category)?.name,
            brand: { '@type': 'Brand', name: 'Sterling Ventilation' },
            manufacturer: {
              '@type': 'Organization',
              name: 'Sterling Ventilation Asia Pacific Pte Ltd',
            },
            additionalProperty: product.quickStats.map(([name, value]) => ({
              '@type': 'PropertyValue',
              name,
              value,
            })),
          }
        : null,
    [product]
  );

  if (!product) return <Navigate to="/products" replace />;

  const category = getCategory(product.category);
  const related = relatedProducts(product);

  return (
    <div className="bg-white">
      <Seo
        title={product.seo.title}
        description={product.seo.description}
        keywords={product.seo.keywords}
        image={images[0]?.src}
        type="product"
        jsonLd={jsonLd}
      />

      {/* ------------------------------- hero -------------------------------- */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-40" />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-60 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(58,91,145,.10), transparent 68%)' }}
        />

        <div className="shell relative py-12 md:py-16">
          <Reveal>
            <Breadcrumbs category={category} product={product} />
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16">
            <Reveal>
              <DetailGallery images={images} name={product.name} model={product.model} />
            </Reveal>

            <div>
              <Reveal>
                <span className="eyebrow">{category.name}</span>
              </Reveal>

              <Reveal delay={70}>
                <h1 className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-[1.03] text-navy-900">
                  {product.name}
                </h1>
              </Reveal>

              <Reveal delay={130}>
                <p className="mt-4 text-[15px] font-semibold uppercase tracking-[0.1em] text-signal-600">
                  {product.tagline}
                </p>
              </Reveal>

              <Reveal delay={190}>
                <p className="lede mt-6">{product.short}</p>
              </Reveal>

              <Reveal delay={250}>
                <dl className="mt-9 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2">
                  {product.quickStats.map(([k, v]) => (
                    <div key={k} className="bg-white px-5 py-4">
                      <dt className="text-[10.5px] font-semibold uppercase tracking-widest2 text-steel-500">{k}</dt>
                      <dd className="mt-1.5 font-display text-[17px] font-semibold text-navy-900">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={310}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Request Quotation
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <BrochureButton product={product} className="btn-navy" />
                </div>
              </Reveal>

              <Reveal delay={360}>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <button type="button" onClick={() => setAssistant(true)} className="link-arrow">
                    <Icon name="spark" className="h-3.5 w-3.5" />
                    Ask an engineer
                  </button>
                  <span className="h-4 w-px bg-steel-200" />
                  <Link to="/resources/downloads" className="link-arrow">
                    Technical datasheet
                    <Icon name="download" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- description --------------------------- */}
      <Section tone="light">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          <SectionHead eyebrow="Overview" title="What it does" />
          <RevealGroup className="space-y-5" stagger={0.1}>
            {product.long.map((para) => (
              <p key={para.slice(0, 32)} className="text-[16px] leading-relaxed text-steel-600">
                {para}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-3">
              {product.certifications.map((c) => (
                <span key={c.code} className="chip">
                  <Icon name="check" className="h-3 w-3 text-signal-600" strokeWidth={2.4} />
                  {c.code}
                </span>
              ))}
            </div>
          </RevealGroup>
        </div>
      </Section>

      {/* ------------------------------ features ---------------------------- */}
      <Section tone="tint">
        <div className="shell">
          <SectionHead
            eyebrow="Features"
            title="Engineered detail"
            lede="The design decisions that separate this product from a nominally similar item on a schedule."
          />
          <div className="mt-14">
            <DetailFeatures features={product.features} />
          </div>
        </div>
      </Section>

      {/* --------------------- specifications + applications ---------------- */}
      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="Technical specifications" title="Performance data" />
            <div className="mt-10">
              <SpecAccordion groups={product.specs} />
            </div>
            <Reveal delay={100}>
              <p className="mt-5 text-[12.5px] leading-relaxed text-steel-400">
                Data is indicative of the standard range. Project-specific selection, calculations and certification are
                issued with the technical submission.
              </p>
            </Reveal>
          </div>

          <div>
            <SectionHead eyebrow="Applications" title="Where it is used" />
            <div className="mt-10">
              <DetailApplications applications={product.applications} />
            </div>
            <Reveal delay={140} className="mt-8">
              <Link to="/industries" className="btn-outline w-full">
                Explore industries
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ------------------------------ benefits ---------------------------- */}
      <Section tone="steel">
        <div className="shell">
          <SectionHead
            eyebrow="Benefits"
            title="What you get out of it"
            lede="The outcomes this product is engineered to produce, and the criteria we verify at commissioning."
          />
          <div className="mt-14">
            <DetailBenefits benefits={product.benefits} />
          </div>
        </div>
      </Section>

      {/* --------------------------- certifications ------------------------- */}
      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Certifications"
            title="Tested, classified, traceable"
            lede="Every unit is supplied with certification traceable to the specific configuration installed on your project."
          />
          <div className="mt-14">
            <DetailCertifications certifications={product.certifications} />
          </div>
          <Reveal delay={140} className="mt-10">
            <Link to="/resources/standards" className="link-arrow">
              Full standards reference
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ----------------------------- related ------------------------------ */}
      <Section tone="tint">
        <div className="shell">
          <DetailRelated items={related} />
        </div>
      </Section>

      {/* ------------------------------- CTA -------------------------------- */}
      <section className="relative isolate overflow-hidden border-t border-navy-800/60 bg-navy-900 py-20">
        <div
          className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center opacity-[0.22]"
          style={{ backgroundImage: `url(${fireMid})`, filter: 'saturate(0.7)' }}
        />
        <SmokeCanvas className="absolute inset-0 h-full w-full opacity-40" density={0.5} speed={0.6} intensity={0.6} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-transparent" />
        <div className="shell relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow-light">Contact</span>
            <h2 className="h2 text-cine mt-5 text-white">Specifying the {product.name.toLowerCase()}?</h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-navy-200">
              Send us the drawings, the fire strategy or just the constraint you are working around. Technical
              enquiries are answered by an engineer, usually within one working day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request consultation
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <button type="button" onClick={() => setAssistant(true)} className="btn-navy">
                <Icon name="spark" className="h-4 w-4" />
                Ask the AI Assistant
              </button>
              <BrochureButton product={product} className="btn-ghost" />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="border border-white/10 bg-navy-950/70 p-7 backdrop-blur">
              <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-400">At a glance</p>
              <dl className="mt-5 space-y-3.5">
                <div className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-3.5">
                  <dt className="text-[12.5px] uppercase tracking-[0.1em] text-navy-400">Model</dt>
                  <dd className="font-display text-[16px] font-semibold text-white">{product.model}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-3.5">
                  <dt className="text-[12.5px] uppercase tracking-[0.1em] text-navy-400">Category</dt>
                  <dd className="text-right text-[14px] text-white">{category.name}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-3.5">
                  <dt className="text-[12.5px] uppercase tracking-[0.1em] text-navy-400">Certification</dt>
                  <dd className="text-right text-[14px] text-white">{product.certifications[0]?.code}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-[12.5px] uppercase tracking-[0.1em] text-navy-400">Lead time</dt>
                  <dd className="text-right text-[14px] text-white">On application</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* floating assistant */}
      <motion.button
        type="button"
        onClick={() => setAssistant(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open AI engineering assistant"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center bg-signal-600 text-white shadow-[0_16px_40px_-12px_rgba(200,16,46,.6)]"
      >
        <Icon name="spark" className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping bg-signal-600/40" />
      </motion.button>

      <AIAssistantModal open={assistant} onClose={() => setAssistant(false)} product={product} />
    </div>
  );
}
