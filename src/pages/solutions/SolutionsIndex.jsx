import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import SolutionFinder from '../../components/SolutionFinder';
import { solutions } from '../../data/solutions';

export default function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Engineered smoke management systems"
        lede="Four system families that combine into one life safety strategy. Each is engineered from the design fire and the building — never selected from a catalogue."
        breadcrumbs={[{ label: 'Solutions' }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/engineering" className="btn-ghost">
              Engineering capability
            </Link>
          </>
        }
      />

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="System families"
            title="What we design, supply and commission"
            lede="Every system below is delivered with the analysis that justifies it, the certification that proves it and the maintenance regime that keeps it compliant."
          />

          <div className="mt-14 space-y-px bg-steel-200">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 60}>
                <Link
                  to={`/solutions/${s.slug}`}
                  className="group grid gap-6 bg-white p-7 transition-colors hover:bg-navy-950 md:grid-cols-[auto_1.1fr_1.4fr_auto] md:items-center md:gap-8 md:p-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center bg-navy-50 text-navy-800 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>

                  <span>
                    <span className="block font-display text-[21px] font-semibold uppercase leading-tight text-navy-900 transition-colors group-hover:text-white">
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
                    View
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="shell">
          <SectionHead
            eyebrow="Solution finder"
            title="Not sure which systems apply?"
            lede="Select your building type to see the systems typically required and the standards that usually govern them."
            align="center"
          />
          <div className="mt-14">
            <SolutionFinder />
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
