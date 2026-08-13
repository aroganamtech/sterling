import Seo from '../../components/Seo';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';

/* Commitments as stated in the approved content document. */
const commitments = [
  {
    icon: 'clock',
    title: 'Fast responses',
    text: 'Technical queries answered by an engineer, usually on the same working day.',
  },
  {
    icon: 'target',
    title: 'Right-sized systems',
    text: 'We recommend smaller systems when supported by analysis.',
  },
  {
    icon: 'compliance',
    title: 'Full documentation',
    text: 'Every project handed over with traceable certification and test records.',
  },
  {
    icon: 'wrench',
    title: 'Accountability',
    text: 'The same organisation designs, installs, commissions and services.',
  },
];

export default function Vision() {
  return (
    <>
      <Seo
        title="Our Vision | Sterling Ventilation Asia Pacific"
        description="Sterling Ventilation aims to be the trusted engineering partner for smoke control and ventilation — recognised for sound engineering, honest advice and solutions that perform when they matter most."
        keywords="smoke control engineering vision, ventilation engineering partner Singapore"
      />

      <PageHero
        eyebrow="Our Vision"
        title="What we are building towards"
        lede="To be the trusted engineering partner for smoke control and ventilation, recognised for sound engineering, honest advice, and solutions that perform when they matter most."
        breadcrumbs={[{ label: 'About Us', to: '/about' }, { label: 'Our Vision' }]}
      />

      <Section tone="light">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col border border-steel-200 p-9 md:p-11">
              <span className="eyebrow">Our Vision</span>
              <p className="mt-8 font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold leading-[1.15] text-navy-900">
                To be the trusted engineering partner for smoke control and ventilation, recognised for sound
                engineering, honest advice, and solutions that perform when they matter most.
              </p>
              <p className="mt-8 text-[15.5px] leading-relaxed text-steel-600">
                We aim to raise the standard of smoke control engineering by combining rigorous analysis, practical
                design, quality execution, and long-term accountability. We believe the best solution is not always
                the most familiar or the largest, but the one that is technically justified, properly tested, and fit
                for purpose.
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-steel-600">
                As we grow, our goal is to build lasting relationships with clients, consultants, contractors, and
                building owners by consistently delivering solutions they can rely on — from initial design through
                commissioning, handover, testing, and ongoing service.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative isolate flex h-full flex-col overflow-hidden bg-navy-950 p-9 text-white md:p-11">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
              <div className="relative">
                <span className="eyebrow-light">What it means in practice</span>
                <ul className="mt-8 space-y-6">
                  {commitments.map((c, i) => (
                    <li key={c.title} className="flex gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-signal-500/50 text-[11px] font-semibold text-signal-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block font-display text-[17px] font-semibold leading-tight">{c.title}</span>
                        <span className="mt-1.5 block text-[13.5px] leading-relaxed text-navy-300">{c.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint">
        <div className="shell">
          <SectionHead eyebrow="Commitments" title="What you can hold us to" align="center" />
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="h-full bg-white p-7">
                  <Icon name={c.icon} className="h-7 w-7 text-signal-600" />
                  <p className="mt-5 font-display text-[17px] font-semibold text-navy-900">{c.title}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-steel-500">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
