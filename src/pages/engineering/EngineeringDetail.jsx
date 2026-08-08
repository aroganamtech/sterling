import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import CFDCompare from '../../components/CFDCompare';
import { engineeringServices, getEngineering } from '../../data/engineering';

export default function EngineeringDetail() {
  const { slug } = useParams();
  const service = getEngineering(slug);
  if (!service) return <Navigate to="/engineering" replace />;

  const others = engineeringServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Engineering"
        title={service.title}
        lede={service.tagline}
        breadcrumbs={[{ label: 'Engineering', to: '/engineering' }, { label: service.title }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request this service
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="btn-ghost">
              See it applied
            </Link>
          </>
        }
      />

      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="Overview" title={service.summary} />
            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-steel-600">
              {service.overview.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <div className="mt-12">
              <p className="label">What you receive</p>
              <ul className="mt-5 grid gap-px bg-steel-200 sm:grid-cols-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 bg-white px-5 py-4">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" strokeWidth={2} />
                    <span className="text-[14px] leading-snug text-navy-800">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Reveal delay={120}>
            <div className="sticky top-32 space-y-px bg-steel-200">
              <div className="bg-navy-950 p-7 text-white">
                <span className="eyebrow-light">Tools & methods</span>
                <ul className="mt-6 space-y-3">
                  {service.tools.map((t) => (
                    <li key={t} className="flex items-center gap-3 border-b border-white/10 pb-3 text-[14px] text-navy-200 last:border-0 last:pb-0">
                      <Icon name="chevronRight" className="h-3.5 w-3.5 text-signal-500" strokeWidth={2} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-7">
                <p className="label">Outcomes</p>
                <ul className="mt-4 space-y-5">
                  {service.outcomes.map((o) => (
                    <li key={o.title}>
                      <p className="text-[14.5px] font-semibold text-navy-900">{o.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-steel-500">{o.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {service.slug === 'smoke-modelling-cfd' || service.slug === 'performance-based-design' ? (
        <section className="relative overflow-hidden bg-navy-950 py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
          <div className="shell relative">
            <SectionHead
              light
              eyebrow="Illustration"
              title="Unmanaged versus engineered"
              lede="The same design fire in the same volume, with and without an engineered smoke control strategy."
            />
            <div className="mt-12">
              <CFDCompare />
            </div>
          </div>
        </section>
      ) : null}

      <Section tone="tint">
        <div className="shell">
          <SectionHead eyebrow="Also in engineering" title="Related disciplines" />
          <div className="mt-12 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <Link key={o.slug} to={`/engineering/${o.slug}`} className="group h-full bg-white p-6 transition-colors hover:bg-navy-950">
                <Icon name={o.icon} className="h-6 w-6 text-navy-700 transition-colors group-hover:text-signal-400" />
                <p className="mt-5 font-display text-[16px] font-semibold leading-tight text-navy-900 transition-colors group-hover:text-white">
                  {o.title}
                </p>
                <p className="mt-2 text-[12.5px] leading-snug text-steel-500 transition-colors group-hover:text-navy-300">
                  {o.menuBlurb}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title={`Need ${service.title.toLowerCase()} on a live project?`}
        text="We can be engaged for a single discipline within your delivery team, or as the turnkey smoke control partner."
        secondary={{ label: 'Engineering capability', to: '/engineering' }}
      />
    </>
  );
}
