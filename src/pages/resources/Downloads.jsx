import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { downloads } from '../../data/resources';

export default function Downloads() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Downloads"
        lede="Company profile, product catalogues, datasheets, certification and BIM content — everything a design team needs to specify and coordinate our systems."
        breadcrumbs={[{ label: 'Resources', to: '/resources' }, { label: 'Downloads' }]}
      />

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Document centre"
            title="Specification and coordination files"
            lede="Files marked as certificates are issued against a specific product configuration — always confirm the revision against your project specification."
          />

          <div className="mt-12 space-y-px bg-steel-200">
            {downloads.map((d, i) => (
              <Reveal key={d.title} delay={(i % 5) * 55}>
                <div className="group grid gap-4 bg-white p-6 transition-colors hover:bg-navy-50 md:grid-cols-[auto_1.2fr_1.6fr_auto_auto] md:items-center md:gap-8">
                  <span className="flex h-12 w-12 items-center justify-center bg-navy-900 text-signal-400 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                    <Icon name="download" className="h-5 w-5" />
                  </span>
                  <span className="font-display text-[17px] font-semibold uppercase leading-tight text-navy-900">
                    {d.title}
                  </span>
                  <span className="text-[13.5px] leading-relaxed text-steel-500">{d.desc}</span>
                  <span className="flex gap-2">
                    <span className="chip">{d.type}</span>
                    <span className="chip !border-transparent !bg-navy-50">{d.size}</span>
                  </span>
                  <button type="button" className="btn-outline !py-3">
                    Download
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <p className="mt-10 border-l-2 border-signal-600 bg-navy-50 px-6 py-5 text-[13.5px] leading-relaxed text-steel-600">
              Wire each Download button to the real asset (or to a gated form) before launch. File names, sizes and
              descriptions are placeholders. {/* TODO */}
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Need certification for a submission?"
        text="We can issue project-specific certification packs mapped to the exact equipment configuration you are installing."
        secondary={{ label: 'Compliance consulting', to: '/engineering/compliance-consulting' }}
      />
    </>
  );
}
