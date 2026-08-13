import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { library } from '../../data/resources';

export default function TechnicalLibrary() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Technical library"
        lede="Engineering literature written for design teams: technical guides, design and compliance notes, and the installation and maintenance documents that follow a system into service."
        breadcrumbs={[{ label: 'Resources', to: '/resources' }, { label: 'Technical Library' }]}
      />

      <Section tone="light">
        <div className="shell space-y-16">
          {library.map((group, gi) => (
            <div key={group.category}>
              <SectionHead eyebrow={`0${gi + 1}`} title={group.category} />
              <div className="mt-10 grid gap-px bg-steel-200 md:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 70}>
                    <article className="group flex h-full flex-col bg-white p-7">
                      <Icon name="drawing" className="h-7 w-7 text-navy-700 transition-colors group-hover:text-signal-600" />
                      <h3 className="mt-6 font-display text-[18px] font-semibold leading-tight text-navy-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500">{item.note}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-steel-200 pt-5">
                        <span className="text-[11.5px] uppercase tracking-[0.12em] text-steel-500">{item.meta}</span>
                        <button type="button" className="link-arrow">
                          Request
                          <Icon name="arrow" className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          <Reveal>
            <p className="border-l-2 border-signal-600 bg-navy-50 px-6 py-5 text-[13.5px] leading-relaxed text-steel-600">
              Documents are issued on request so we can confirm the correct revision for your project. Connect the{' '}
              <span className="font-semibold text-navy-900">Request</span> buttons to your document management or CRM
              system when the site goes live. {/* TODO */}
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Looking for something specific?"
        text="Tell us what you are designing and we will send the relevant technical notes, calculations and certification."
        secondary={{ label: 'Downloads', to: '/resources/downloads' }}
      />
    </>
  );
}
