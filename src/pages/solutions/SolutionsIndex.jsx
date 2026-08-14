import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { solutions } from '../../data/solutions';
import { services } from '../../data/services';
import { productCategories, productsByCategory } from '../../data/products';

/* Product categories most closely associated with each solution family. */
const SOLUTION_PRODUCTS = {
  'smoke-curtains': ['smoke-containment'],
  'natural-ventilation': ['natural-ventilation'],
  'smoke-ventilation': ['smoke-ventilation'],
  'mechanical-ventilation': ['smoke-extraction'],
  'engineering-system-integration': [],
  'testing-lifecycle-support': [],
};

/* Tracks which solution section is currently in view so the quick-nav list
   above can give it a subtle active-state indication as the visitor scrolls. */
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

export default function SolutionsIndex() {
  const activeSlug = useActiveSection(solutions.map((s) => s.slug));

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Engineered smoke management systems"
        lede="Six solution families that combine into one smoke control strategy, each engineered from the building configuration, the fire strategy and the applicable Singapore requirements."
        breadcrumbs={[{ label: 'Solutions' }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost">
              Our services
            </Link>
          </>
        }
      />

      {/* ---------------------- same-page section navigation ----------------------
          All six solution families now live as sections on this one page (previously
          /solutions/:slug were separate routes) — clicking one of these smooth-scrolls
          to its section instead of navigating anywhere. The old URLs still work:
          App.jsx now redirects them to the matching anchor here. */}
      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="System families"
            title="What we design, supply and commission"
            lede="Every solution below is delivered with the engineering that justifies it, the certification that supports it and the testing and maintenance that keep it performing."
          />

          <div className="mt-14 space-y-px bg-steel-200">
            {solutions.map((s, i) => {
              const active = activeSlug === s.slug;
              return (
                <Reveal key={s.slug} delay={(i % 4) * 60}>
                  <a
                    href={`#${s.slug}`}
                    aria-current={active}
                    className={`group grid gap-6 bg-white p-7 transition-colors hover:bg-navy-950 md:grid-cols-[auto_1.1fr_1.4fr_auto] md:items-center md:gap-8 md:p-8 ${
                      active ? 'bg-navy-50' : ''
                    }`}
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center text-navy-800 transition-colors group-hover:bg-signal-600 group-hover:text-white ${
                        active ? 'bg-signal-600 text-white' : 'bg-navy-50'
                      }`}
                    >
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>

                    <span>
                      <span
                        className={`block font-display text-[21px] font-semibold leading-tight transition-colors group-hover:text-white ${
                          active ? 'text-signal-700' : 'text-navy-900'
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="mt-1.5 block text-[12.5px] uppercase tracking-[0.12em] text-signal-600">
                        {s.menuBlurb}
                      </span>
                    </span>

                    <span className="text-[14px] leading-relaxed text-steel-500 transition-colors group-hover:text-navy-300">
                      {s.summary}
                    </span>

                    <span className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.13em] text-navy-800 transition-colors group-hover:text-signal-400">
                      View section
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ---------------------- full solution content, one section per family ---------------------- */}
      {solutions.map((solution) => {
        const related = solution.related.map((slug) => solutions.find((s) => s.slug === slug)).filter(Boolean);
        const linkedCategories = (SOLUTION_PRODUCTS[solution.slug] || [])
          .map((id) => productCategories.find((c) => c.id === id))
          .filter(Boolean);

        return (
          <Fragment key={solution.slug}>
            {/* overview */}
            <Section id={solution.slug} tone="light" className="scroll-mt-[100px]">
              <div className="shell grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
                <div>
                  <SectionHead eyebrow={solution.title} title={solution.tagline} />
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
                      <Link to="/resources#standards" className="link-arrow mt-6">
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
                        <h3 className="mt-4 font-display text-[18px] font-semibold leading-tight text-navy-900">
                          {b.title}
                        </h3>
                        <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500">{b.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Section>

            {/* services + products */}
            <section className="relative overflow-hidden bg-steel-100 py-20 md:py-24">
              <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-40" />
              <div className="shell relative grid gap-14 lg:grid-cols-2 lg:gap-20">
                <div>
                  <span className="eyebrow">Related services</span>
                  <h2 className="h2 mt-5 text-navy-900">Delivered with the engineering behind it</h2>
                  <p className="mt-5 text-[15.5px] leading-relaxed text-steel-600">
                    This system is never supplied in isolation. Design, installation, testing, commissioning, service
                    and maintenance are delivered by the same organisation.
                  </p>
                  <ul className="mt-9 space-y-px bg-steel-200">
                    {services.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={`/services#${r.slug}`}
                          className="flex items-center justify-between gap-4 bg-white px-5 py-4 text-[14.5px] text-navy-800 transition-colors hover:bg-signal-600 hover:text-white"
                        >
                          {r.title}
                          <Icon name="arrow" className="h-4 w-4 text-signal-600 group-hover:text-white" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="eyebrow">Products</span>
                  <h2 className="h2 mt-5 text-navy-900">
                    {linkedCategories.length ? 'Equipment used in this system' : 'Across the whole equipment range'}
                  </h2>
                  {linkedCategories.length ? (
                    <div className="mt-9 space-y-8">
                      {linkedCategories.map((cat) => (
                        <div key={cat.id}>
                          <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-600">{cat.name}</p>
                          <div className="mt-3 grid gap-px bg-steel-200 sm:grid-cols-2">
                            {productsByCategory(cat.id).map((p) => (
                              <Link
                                key={p.slug}
                                to={`/products/${p.slug}`}
                                className="group flex items-center justify-between gap-4 bg-white px-5 py-4 transition-colors hover:bg-signal-600"
                              >
                                <span className="text-[14px] text-navy-800 transition-colors group-hover:text-white">
                                  {p.name}
                                </span>
                                <span className="text-[10.5px] uppercase tracking-[0.12em] text-steel-500 group-hover:text-white/80">
                                  {p.model}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="mt-5 text-[15.5px] leading-relaxed text-steel-600">
                        This part of our scope applies across every system we deliver, whatever equipment it is built
                        from.
                      </p>
                      <Link to="/products" className="link-arrow mt-7">
                        Browse the product range
                        <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </section>

            {/* other solutions */}
            <Section tone="tint">
              <div className="shell">
                <SectionHead eyebrow="Related systems" title="Works alongside" />
                <div className="mt-12 grid gap-px bg-steel-200 md:grid-cols-3">
                  {related.map((r) => (
                    <a
                      key={r.slug}
                      href={`#${r.slug}`}
                      className="group bg-white p-7 transition-colors hover:bg-navy-950"
                    >
                      <Icon name={r.icon} className="h-7 w-7 text-navy-700 transition-colors group-hover:text-signal-400" />
                      <h3 className="mt-5 font-display text-[18px] font-semibold text-navy-900 transition-colors group-hover:text-white">
                        {r.title}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500 transition-colors group-hover:text-navy-300">
                        {r.menuBlurb}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </Section>
          </Fragment>
        );
      })}

      <CTASection />
    </>
  );
}
