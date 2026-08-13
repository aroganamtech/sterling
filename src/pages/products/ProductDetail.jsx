import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/Icon';
import Seo from '../../components/Seo';
import Reveal, { RevealGroup } from '../../components/Reveal';
import Section, { SectionHead } from '../../components/Section';
import DetailGallery from '../../components/products/detail/DetailGallery';
import AIAssistantModal from '../../components/products/AIAssistantModal';
import BrochureButton from '../../components/products/BrochureButton';
import { DetailRelated } from '../../components/products/detail/DetailPanels';
import { galleryFor } from '../../lib/productImages';
import { getCategory, getProduct, primaryCategoryId, relatedProducts } from '../../data/products';

/* ---------------------------------------------------------------------------
   Product Detail — deliberately minimal, single template shared by every
   product route (/products/:slug), so this file is the one place that
   controls the structure for all products.

   Structure is limited to exactly:
     Hero (image, name, short intro)
     Overview (short description)
     Related products

   No technical specifications, key features, certifications, benefits,
   applications, "how it works" or extra CTA sections. Header, footer,
   routing and product data are untouched.
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
            category: getCategory(primaryCategoryId(product))?.name,
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

  const category = getCategory(primaryCategoryId(product));
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
          style={{ background: 'radial-gradient(circle, rgba(5,5,5,.07), transparent 68%)' }}
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

      {/* ---------------------------- overview -------------------------------- */}
      <Section tone="light">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          <SectionHead eyebrow="Overview" title="Product overview" />
          <RevealGroup className="space-y-5" stagger={0.1}>
            {product.long.map((para) => (
              <p key={para.slice(0, 32)} className="text-[16px] leading-relaxed text-steel-600">
                {para}
              </p>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ----------------------------- related ------------------------------ */}
      <Section tone="tint">
        <div className="shell">
          <DetailRelated items={related} />
        </div>
      </Section>

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
