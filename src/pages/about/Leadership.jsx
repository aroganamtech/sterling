import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';

/* TODO — a photograph for NK Karthikeyan was not supplied; the initials mark below is a
   placeholder until one is provided. Add further leadership profiles here as the team grows. */
const founder = {
  name: 'NK Karthikeyan',
  role: 'Managing Director',
  tag: 'Founder | Smoke Control & Fire Protection Engineer',
  initials: 'NK',
  bio: [
    'NK Karthikeyan is a specialist in engineered smoke control systems, with more than 10 years of focused experience in smoke control engineering and experience in the wider fire protection field since 2024.',
    'He holds an M.Sc. in Mechanical Engineering from the National University of Singapore (NUS), Singapore, combining strong academic training with extensive practical experience in the design and delivery of engineered smoke control solutions.',
    'Throughout his career, Karthikeyan has been involved in a wide range of infrastructure and complex building projects, providing engineering input for challenging smoke control applications and system requirements. His experience covers the development and coordination of engineered smoke control solutions, with a focus on practical design, technical analysis, system performance, and project execution.',
    'His approach is straightforward: understand the engineering problem, analyse the available solutions, test assumptions, and recommend what the project actually needs.',
    'At Sterling Ventilation Asia Pacific, he brings this experience to every project with a focus on life safety, engineering integrity, practical solutions, and long-term system performance.',
  ],
};

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The engineer accountable for delivery"
        lede="Sterling Ventilation is led by a specialist smoke control engineer, accountable for every design the company puts its name to."
        breadcrumbs={[{ label: 'About Us', to: '/about' }, { label: 'Leadership' }]}
      />

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Leadership"
            title="Engineering leadership, not sales leadership"
            lede="A technical founder, not a commercial one — which is deliberate. It keeps the engineering position honest when commercial pressure arrives."
          />

          <Reveal delay={80}>
            <div className="mt-14 grid gap-10 border border-steel-200 bg-white p-8 md:p-11 lg:grid-cols-[240px_1fr] lg:gap-14">
              <div>
                <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden bg-navy-950 md:h-full md:min-h-[200px]">
                  <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
                  <span className="relative font-display text-[40px] font-semibold tracking-widest text-signal-400">
                    {founder.initials}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[24px] font-semibold text-navy-900">{founder.name}</h3>
                <p className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-signal-600">
                  {founder.role}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-steel-500">{founder.tag}</p>
              </div>

              <div className="space-y-5 text-[15px] leading-relaxed text-steel-600">
                {founder.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </Section>

      <CTASection
        title="Speak to the engineer, not the switchboard"
        text="Technical enquiries go straight to the engineering team. Tell us the building and the constraint and we will give you a considered answer."
      />
    </>
  );
}
