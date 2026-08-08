import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';

const mission = [
  ['Deliver innovative smoke control solutions', 'Bring analysis-led engineering to problems the standard product catalogue cannot answer.'],
  ['Improve life safety', 'Measure every design decision against occupant tenability and firefighter access.'],
  ['Maintain engineering excellence', 'Produce calculations, models and documentation that stand up to any technical review.'],
  ['Support sustainable buildings', 'Right-size plant and use demand control so life safety does not cost unnecessary energy.'],
  ['Ensure international compliance', 'Reconcile EN, NFPA, BS and local codes into one governing, defensible basis of design.'],
];

export default function VisionMission() {
  return (
    <>
      <PageHero
        eyebrow="Vision & Mission"
        title="What we are building towards"
        lede="A clear statement of intent for a business whose output is measured in outcomes that ideally never happen."
        breadcrumbs={[{ label: 'About Us', to: '/about' }, { label: 'Vision & Mission' }]}
      />

      <Section tone="light">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col border border-steel-200 p-9 md:p-11">
              <span className="eyebrow">Vision</span>
              <p className="mt-8 font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold uppercase leading-[1.15] text-navy-900">
                To become Asia-Pacific’s trusted engineering partner for life safety smoke management systems.
              </p>
              <p className="mt-8 text-[15.5px] leading-relaxed text-steel-600">
                Trusted is a deliberate word. It is earned by being the specialist a consultant calls before the design
                is fixed, by producing analysis that authorities accept without argument, and by still answering the
                phone eight years after handover when the annual test throws up a fault.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative isolate flex h-full flex-col overflow-hidden bg-navy-950 p-9 text-white md:p-11">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
              <div className="relative">
                <span className="eyebrow-light">Mission</span>
                <ul className="mt-8 space-y-6">
                  {mission.map(([t, s], i) => (
                    <li key={t} className="flex gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-signal-500/50 text-[11px] font-semibold text-signal-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block font-display text-[17px] font-semibold uppercase leading-tight">{t}</span>
                        <span className="mt-1.5 block text-[13.5px] leading-relaxed text-navy-300">{s}</span>
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
          <SectionHead
            eyebrow="What it means in practice"
            title="Commitments we can be held to"
            align="center"
          />
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'clock', t: 'Respond fast', s: 'Technical queries answered by an engineer, usually the same working day.' },
              { icon: 'target', t: 'Right-size', s: 'We will recommend a smaller system when the analysis supports it.' },
              { icon: 'compliance', t: 'Document fully', s: 'Every project handed over with traceable certification and test records.' },
              { icon: 'wrench', t: 'Stay accountable', s: 'The same organisation designs, installs, commissions and services.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="h-full bg-white p-7">
                  <Icon name={c.icon} className="h-7 w-7 text-signal-600" />
                  <p className="mt-5 font-display text-[17px] font-semibold uppercase text-navy-900">{c.t}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-steel-500">{c.s}</p>
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
