import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import ComplianceMatrix from '../../components/ComplianceMatrix';
import { industries } from '../../data/industries';

export default function IndustriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors we serve"
        lede="Fifteen building and infrastructure sectors. Each has its own governing code, risk profile and delivery constraints — and each changes how a smoke control strategy is engineered."
        breadcrumbs={[{ label: 'Industries' }]}
        actions={
          <Link to="/contact" className="btn-primary">
            Discuss your sector
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        }
      />

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Sector expertise"
            title="Where we work"
            lede="Select a sector to see the typical challenges, the systems we recommend and the standards that usually govern."
          />
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 70}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-navy-950"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-navy-50 text-navy-800 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                    <Icon name={ind.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-[19px] font-semibold leading-tight text-navy-900 transition-colors group-hover:text-white">
                    {ind.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500 transition-colors group-hover:text-navy-300">
                    {ind.overview}
                  </p>
                  <span className="mt-6 flex flex-wrap gap-1.5">
                    {ind.standards.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="border border-steel-200 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-steel-500 transition-colors group-hover:border-white/20 group-hover:text-navy-300"
                      >
                        {s}
                      </span>
                    ))}
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
            eyebrow="Compliance"
            title="Which standards apply to your building type"
            lede="An indicative view of the code families most commonly governing each sector. The authority having jurisdiction always sets the final basis of design."
          />
          <Reveal delay={120}>
            <div className="mt-12">
              <ComplianceMatrix />
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
