import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { services } from '../../data/services';
import { illustration } from '../../lib/productImages';

export default function ServicesIndex() {
  return (
    <>
      <Seo
        title="Services | System Design, Installation, Maintenance & Training | Sterling Ventilation"
        description="Sterling Ventilation provides engineering design, installation, maintenance and training for engineered smoke control and ventilation systems in Singapore."
        keywords="smoke control services, system design, installation, maintenance, training, Singapore"
      />

      <PageHero
        eyebrow="Services"
        title="End-to-end smoke control services"
        lede="Design and engineering through to supply, installation, testing, commissioning, service and maintenance — delivered by the same organisation that engineered the system."
        breadcrumbs={[{ label: 'Services' }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/solutions" className="btn-ghost">
              Explore Solutions
            </Link>
          </>
        }
      />

      {services.map((service, i) => {
        const src = illustration(service.blocks[0]?.image);
        const flip = i % 2 === 1;
        return (
          <Section key={service.slug} tone={i % 2 ? 'tint' : 'light'}>
            <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={flip ? 'lg:order-2' : ''}>
                <SectionHead
                  eyebrow={`0${i + 1} · ${service.title}`}
                  title={service.heading}
                  lede={service.tagline}
                />
                <div className="mt-7 space-y-4 text-[15.5px] leading-relaxed text-steel-600">
                  {service.intro.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>

                <ul className="mt-8 grid gap-y-2.5 sm:grid-cols-2">
                  {(service.scope || service.blocks).slice(0, 6).map((b) => (
                    <li key={b.title} className="flex items-start gap-3 text-[14px] text-navy-800">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" strokeWidth={2} />
                      {b.title}
                    </li>
                  ))}
                </ul>

                <Link to={`/services/${service.slug}`} className="link-arrow mt-9">
                  {service.title} in detail
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>

              <Reveal delay={120} className={flip ? 'lg:order-1' : ''}>
                <figure className="relative overflow-hidden border border-steel-200 bg-navy-950 shadow-card">
                  <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
                  {src ? (
                    <img
                      src={src}
                      alt={`${service.title} — technical illustration`}
                      loading="lazy"
                      decoding="async"
                      className="relative aspect-[4/3] w-full object-contain p-6"
                    />
                  ) : (
                    <div className="relative aspect-[4/3] w-full" />
                  )}
                  <figcaption className="relative flex items-center gap-3 border-t border-white/10 px-6 py-4">
                    <Icon name={service.icon} className="h-5 w-5 text-signal-400" />
                    <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-navy-300">
                      {service.menuBlurb}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <CTASection
        title="Need the whole scope under one accountability?"
        text="The same organisation designs, installs, commissions and services the system. Tell us the project stage and we will tell you where we can pick it up."
        secondary={{ label: 'Explore Solutions', to: '/solutions' }}
      />
    </>
  );
}
