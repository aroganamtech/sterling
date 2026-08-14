import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { services } from '../../data/services';
import { illustration } from '../../lib/productImages';

/* Same-page section navigation. All four services now live on this one page
   (previously /services/:slug were separate routes) — clicking one of these
   smooth-scrolls to its section via the browser's native anchor behaviour
   (the site already sets `scroll-behavior: smooth` globally) rather than
   navigating anywhere. The old URLs still work: App.jsx now redirects them
   to the matching anchor here. */
const sectionNav = services.map((s) => ({ id: s.slug, label: s.title, text: s.menuBlurb }));

/* Tracks which service section is currently in view so the nav row above can
   give it a subtle active-state indication as the visitor scrolls. */
function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-140px 0px -65% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')]);

  return activeId;
}

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

export default function ServicesIndex() {
  const activeSlug = useActiveSection(sectionNav.map((s) => s.id));

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

      {/* ---------------------- same-page section navigation ---------------------- */}
      <Section tone="light" padded={false}>
        <div className="shell grid gap-px border-y border-steel-200 bg-steel-200 py-0 sm:grid-cols-2 lg:grid-cols-4">
          {sectionNav.map((s) => {
            const active = activeSlug === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active}
                className={`group bg-white px-7 py-10 transition-colors hover:bg-navy-50 ${
                  active ? 'bg-navy-50' : ''
                }`}
              >
                <p
                  className={`font-display text-[19px] font-semibold transition-colors ${
                    active ? 'text-signal-600' : 'text-navy-900'
                  }`}
                >
                  {s.label}
                </p>
                <p className="mt-2 text-[13.5px] text-steel-500">{s.text}</p>
                <span className="link-arrow mt-5">
                  View section
                  <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </Section>

      {services.map((service, i) => {
        const src = illustration(service.blocks[0]?.image);
        const flip = i % 2 === 1;
        return (
          <Fragment key={service.slug}>
            {/* summary — content left, image right */}
            <Section id={service.slug} tone={i % 2 ? 'tint' : 'light'} className="scroll-mt-[100px]">
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

            {/* scope cards */}
            {service.scope ? (
              <Section tone={i % 2 ? 'light' : 'tint'}>
                <div className="shell">
                  <SectionHead eyebrow="Scope" title={service.scopeTitle} />
                  <div className="mt-12 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
                    {service.scope.map((item, si) => (
                      <Reveal key={item.title} delay={(si % 3) * 80}>
                        <div className="h-full bg-white p-7">
                          <span className="font-display text-[13px] font-semibold text-signal-600">
                            {String(si + 1).padStart(2, '0')}
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
            {service.blocks.map((block, bi) => (
              <Section key={block.title} tone={(i + bi + 1) % 2 ? 'tint' : 'light'}>
                <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className={bi % 2 ? 'lg:order-2' : ''}>
                    <h2 className="h2 text-navy-900">{block.title}</h2>
                    <p className="mt-5 text-[15.5px] leading-relaxed text-steel-600">{block.text}</p>
                  </div>
                  <Reveal delay={120} className={bi % 2 ? 'lg:order-1' : ''}>
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
          </Fragment>
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
