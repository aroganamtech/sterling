import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../../components/Seo';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { getService, services } from '../../data/services';
import { illustration } from '../../lib/productImages';

function MediaPanel({ image, label, icon }) {
  const src = illustration(image);
  return (
    <figure className="relative overflow-hidden border border-steel-200 bg-navy-950 shadow-card">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      {src ? (
        <img
          src={src}
          alt={`${label} — technical illustration`}
          loading="lazy"
          decoding="async"
          className="relative aspect-[4/3] w-full object-contain p-6"
        />
      ) : (
        <div className="relative aspect-[4/3] w-full" />
      )}
      <figcaption className="relative flex items-center gap-3 border-t border-white/10 px-6 py-4">
        <Icon name={icon} className="h-5 w-5 text-signal-400" />
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-navy-300">{label}</span>
      </figcaption>
    </figure>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Seo
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
      />

      <PageHero
        eyebrow="Services"
        title={service.heading}
        lede={service.tagline}
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost">
              All services
            </Link>
          </>
        }
      />

      {/* intro — content left, image right */}
      <Section tone="light">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <SectionHead eyebrow={service.title} title={service.tagline} />
            <div className="mt-7 space-y-4 text-[16px] leading-relaxed text-steel-600">
              {service.intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <MediaPanel
              image={service.blocks[0]?.image}
              label={service.menuBlurb}
              icon={service.icon}
            />
          </Reveal>
        </div>
      </Section>

      {/* scope cards */}
      {service.scope ? (
        <Section tone="tint">
          <div className="shell">
            <SectionHead eyebrow="Scope" title={service.scopeTitle} />
            <div className="mt-12 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
              {service.scope.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 80}>
                  <div className="h-full bg-white p-7">
                    <span className="font-display text-[13px] font-semibold text-signal-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-4 font-display text-[18px] font-semibold leading-tight text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {/* alternating detail blocks — content left, image right */}
      {service.blocks.map((block, i) => (
        <Section key={block.title} tone={i % 2 ? 'tint' : 'light'}>
          <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className={i % 2 ? 'lg:order-2' : ''}>
              <h2 className="h2 text-navy-900">{block.title}</h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-steel-600">{block.text}</p>
            </div>
            <Reveal delay={120} className={i % 2 ? 'lg:order-1' : ''}>
              <MediaPanel image={block.image} label={block.title} icon={service.icon} />
            </Reveal>
          </div>
        </Section>
      ))}

      {/* closing statement */}
      <section className="relative isolate overflow-hidden bg-steel-100 py-16">
        <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-40" />
        <div className="shell relative border-l-2 border-signal-600 pl-6">
          <p className="max-w-3xl font-display text-[clamp(1.3rem,2.4vw,1.9rem)] font-semibold leading-snug text-navy-900">
            {service.closing}
          </p>
        </div>
      </section>

      {/* other services */}
      <Section tone="light">
        <div className="shell">
          <SectionHead eyebrow="Other services" title="Support across the system lifecycle" />
          <div className="mt-12 grid gap-px bg-steel-200 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-white p-7 transition-colors hover:bg-navy-950"
              >
                <Icon name={s.icon} className="h-7 w-7 text-navy-700 transition-colors group-hover:text-signal-400" />
                <h3 className="mt-5 font-display text-[18px] font-semibold text-navy-900 transition-colors group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500 transition-colors group-hover:text-navy-300">
                  {s.menuBlurb}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title={`Need ${service.title.toLowerCase()} on your project?`}
        text="Tell us the building, the stage of the project and what has been approved so far. We will come back with an engineering view."
        secondary={{ label: 'All services', to: '/services' }}
      />
    </>
  );
}
