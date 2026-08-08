import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Accordion from '../../components/Accordion';
import Reveal from '../../components/Reveal';
import { faqs } from '../../data/resources';

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Frequently asked questions"
        lede="The questions consultants, contractors and building owners ask us most often — answered plainly."
        breadcrumbs={[{ label: 'Resources', to: '/resources' }, { label: 'FAQ' }]}
      />

      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-20">
          <Reveal>
            <nav className="sticky top-32 space-y-1">
              <p className="label">Jump to</p>
              {faqs.map((g) => (
                <a
                  key={g.group}
                  href={`#${g.group.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                  className="block border-l-2 border-steel-200 py-2 pl-4 text-[14px] text-steel-600 transition-colors hover:border-signal-600 hover:text-navy-900"
                >
                  {g.group}
                </a>
              ))}
            </nav>
          </Reveal>

          <div className="space-y-16">
            {faqs.map((g) => (
              <div key={g.group} id={g.group.toLowerCase().replace(/[^a-z]+/g, '-')} className="scroll-mt-40">
                <SectionHead eyebrow="FAQ" title={g.group} />
                <div className="mt-8">
                  <Accordion items={g.items} defaultOpen={0} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Still have a question?"
        text="Technical enquiries go straight to an engineer. Ask us anything about smoke control — we will give you a straight answer, whether or not it leads to work for us."
        secondary={{ label: 'Technical library', to: '/resources/library' }}
      />
    </>
  );
}
