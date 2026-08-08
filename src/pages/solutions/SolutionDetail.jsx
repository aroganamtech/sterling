import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { getSolution, solutions } from '../../data/solutions';
import { industries } from '../../data/industries';
import { serviceCapabilities } from '../../data/engineering';

const relatedServices = [
  { label: 'Smoke Modelling (CFD)', to: '/engineering/smoke-modelling-cfd' },
  { label: 'Fire Engineering Support', to: '/engineering/fire-engineering-support' },
  { label: 'BIM & Revit Coordination', to: '/engineering/bim-revit' },
  { label: 'Shop Drawings', to: '/engineering/shop-drawings' },
  { label: 'Compliance Consulting', to: '/engineering/compliance-consulting' },
];

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = getSolution(slug);
  if (!solution) return <Navigate to="/solutions" replace />;

  const related = solution.related.map(getSolution).filter(Boolean);
  const servingIndustries = industries.filter((i) => i.solutions.includes(solution.slug)).slice(0, 8);

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={solution.title}
        lede={solution.tagline}
        breadcrumbs={[{ label: 'Solutions', to: '/solutions' }, { label: solution.title }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/resources/downloads" className="btn-ghost">
              Download datasheet
            </Link>
          </>
        }
        meta={solution.specs.slice(0, 4).map(([label, value]) => ({ label, value }))}
      />

      {/* overview */}
      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="Engineering overview" title="How this system earns its place" />
            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-steel-600">
              {solution.overview.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <div className="mt-12">
              <p className="label">Configuration options</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {solution.options.map((o) => (
                  <span key={o} className="chip !normal-case !tracking-normal !text-[12.5px] !text-steel-600">
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Reveal delay={120}>
            <div className="sticky top-32 space-y-px bg-steel-200">
              <div className="bg-navy-950 p-7 text-white">
                <span className="eyebrow-light">Technical summary</span>
                <dl className="mt-6 space-y-4">
                  {solution.specs.map(([k, v]) => (
                    <div key={k} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-navy-400">{k}</dt>
                      <dd className="mt-1.5 text-[14.5px] text-white">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="bg-white p-7">
                <p className="label">Typical standards</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {solution.standards.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                <Link to="/resources/standards" className="link-arrow mt-6">
                  Standards reference
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* applications */}
      <Section tone="tint">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHead
            eyebrow="Applications"
            title="Where it is used"
            lede="Building types where this system is typically part of the smoke control strategy."
          />
          <Reveal delay={100}>
            <div className="grid gap-px bg-steel-200 sm:grid-cols-2">
              {solution.applications.map((a) => (
                <div key={a} className="flex items-center gap-3 bg-white px-6 py-5">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-signal-600" strokeWidth={2} />
                  <span className="text-[14.5px] text-navy-800">{a}</span>
                </div>
              ))}
              {solution.applications.length % 2 ? <div className="hidden bg-white sm:block" /> : null}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* benefits */}
      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Engineering benefits"
            title="What it delivers"
            lede="The outcomes this system is engineered to produce — and the criteria we verify at commissioning."
          />
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {solution.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <div className="h-full bg-white p-7">
                  <span className="font-display text-[13px] font-semibold text-signal-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-[18px] font-semibold uppercase leading-tight text-navy-900">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* services + industries */}
      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <div className="shell relative grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow-light">Related services</span>
            <h2 className="h2 mt-5 text-white">Delivered with the engineering behind it</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-navy-200">
              This system is never supplied in isolation. Every installation is backed by the analysis, drawings and
              commissioning evidence that make it defensible.
            </p>
            <ul className="mt-9 space-y-px bg-white/10">
              {relatedServices.map((r) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    className="flex items-center justify-between gap-4 bg-navy-950 px-5 py-4 text-[14.5px] text-navy-200 transition-colors hover:bg-navy-900 hover:text-white"
                  >
                    {r.label}
                    <Icon name="arrow" className="h-4 w-4 text-signal-500" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {serviceCapabilities.slice(6).map((c) => (
                <span
                  key={c}
                  className="border border-white/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-navy-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow-light">Industries</span>
            <h2 className="h2 mt-5 text-white">Sectors that use this system</h2>
            <div className="mt-9 grid gap-px bg-white/10 sm:grid-cols-2">
              {servingIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="group flex items-center gap-4 bg-navy-950 px-5 py-5 transition-colors hover:bg-navy-900"
                >
                  <Icon name={ind.icon} className="h-5 w-5 shrink-0 text-signal-400" />
                  <span className="text-[14px] text-navy-200 transition-colors group-hover:text-white">{ind.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* other solutions */}
      <Section tone="tint">
        <div className="shell">
          <SectionHead eyebrow="Related systems" title="Works alongside" />
          <div className="mt-12 grid gap-px bg-steel-200 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/solutions/${r.slug}`} className="group bg-white p-7 transition-colors hover:bg-navy-950">
                <Icon name={r.icon} className="h-7 w-7 text-navy-700 transition-colors group-hover:text-signal-400" />
                <h3 className="mt-5 font-display text-[18px] font-semibold uppercase text-navy-900 transition-colors group-hover:text-white">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500 transition-colors group-hover:text-navy-300">
                  {r.menuBlurb}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {solutions
              .filter((s) => s.slug !== solution.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="border border-steel-200 bg-white px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-navy-800 transition-colors hover:border-signal-600 hover:text-signal-700"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </Section>

      <CTASection
        title={`Specifying ${solution.title.toLowerCase()}?`}
        text="Send us the fire strategy, the ceiling plan or just the constraint. We will tell you what is achievable and what it will take to get there."
        secondary={{ label: 'All solutions', to: '/solutions' }}
      />
    </>
  );
}
