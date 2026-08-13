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
                <span className="eyebrow-light">Mission</span>
                <ul className="mt-8 space-y-6">
                  {mission.map(([t, s], i) => (
                    <li key={t} className="flex gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-signal-500/50 text-[11px] font-semibold text-signal-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block font-display text-[17px] font-semibold leading-tight">{t}</span>
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
              { icon: 'clock', t: 'Fast responses', s: 'Technical queries answered by an engineer, usually on the same working day.' },
              { icon: 'target', t: 'Right-sized systems', s: 'We recommend smaller systems when supported by analysis.' },
              { icon: 'compliance', t: 'Full documentation', s: 'Every project handed over with traceable certification and test records.' },
              { icon: 'wrench', t: 'Accountability', s: 'The same organisation designs, installs, commissions and services.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="h-full bg-white p-7">
                  <Icon name={c.icon} className="h-7 w-7 text-signal-600" />
                  <p className="mt-5 font-display text-[17px] font-semibold text-navy-900">{c.t}</p>
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
