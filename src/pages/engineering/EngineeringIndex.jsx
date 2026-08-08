import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import CFDCompare from '../../components/CFDCompare';
import ProcessFlow from '../../components/ProcessFlow';
import { engineeringServices, serviceCapabilities } from '../../data/engineering';

export default function EngineeringIndex() {
  return (
    <>
      <PageHero
        eyebrow="Engineering"
        title="The analysis behind every system"
        lede="This is what separates a smoke control engineer from a smoke control supplier: the modelling, the calculation and the coordination that prove a strategy works before anyone installs it."
        breadcrumbs={[{ label: 'Engineering' }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Discuss a project
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/engineering/smoke-modelling-cfd" className="btn-ghost">
              CFD modelling
            </Link>
          </>
        }
      />

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Capability"
            title="Six disciplines, one engineering position"
            lede="We keep all six in-house so the model, the drawings, the submission and the commissioning evidence tell the same story."
          />

          <div className="mt-14 grid gap-px bg-steel-200 md:grid-cols-2 lg:grid-cols-3">
            {engineeringServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link
                  to={`/engineering/${s.slug}`}
                  className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-navy-950"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-navy-50 text-navy-800 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-[19px] font-semibold leading-tight text-navy-900 transition-colors group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500 transition-colors group-hover:text-navy-300">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.13em] text-signal-600 transition-colors group-hover:text-signal-400">
                    Explore
                    <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <div className="shell relative grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-16">
          <div>
            <SectionHead
              light
              eyebrow="Smoke modelling"
              title="See the difference the engineering makes"
              lede="Drag the divider. The left side is what an unmanaged fire does to a large volume. The right is the same fire with an engineered reservoir, curtain and extraction strategy."
            />
            <Reveal delay={140}>
              <Link to="/engineering/smoke-modelling-cfd" className="link-arrow mt-8 !text-signal-400 hover:!text-white">
                How we model
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <CFDCompare />
          </Reveal>
        </div>
      </section>

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Full service list"
            title="What we can take on"
            align="center"
            lede="Engaged as a full turnkey partner or for a single discipline within someone else's delivery team."
          />
          <Reveal delay={120}>
            <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-5">
              {serviceCapabilities.map((c) => (
                <div key={c} className="flex items-center gap-3 bg-white px-5 py-6">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-signal-600" strokeWidth={2} />
                  <span className="text-[14px] font-medium text-navy-800">{c}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
        <div className="shell relative">
          <SectionHead
            light
            eyebrow="Process"
            title="How a project runs"
            lede="Ten stages, each producing a deliverable the next one depends on."
          />
          <div className="mt-16">
            <ProcessFlow />
          </div>
        </div>
      </section>

      <CTASection
        title="Need an engineering opinion before you commit?"
        text="A short conversation at concept stage regularly saves more than the whole engineering fee later. We are happy to have it."
        secondary={{ label: 'View solutions', to: '/solutions' }}
      />
    </>
  );
}
