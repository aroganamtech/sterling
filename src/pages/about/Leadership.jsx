import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';

/* TODO — replace placeholder names, photographs and biographies before publishing. */
const leaders = [
  {
    name: '[Name]',
    role: 'Managing Director',
    initials: 'MD',
    focus: 'Strategy, client relationships and regional growth',
    bio: 'Accountable for the overall direction of the business and for the standard of engineering the company puts its name to.',
  },
  {
    name: '[Name]',
    role: 'Technical Director',
    initials: 'TD',
    focus: 'Fire engineering, performance-based design, authority liaison',
    bio: 'Leads the engineering position on complex schemes and owns the technical relationship with fire consultants and authorities.',
  },
  {
    name: '[Name]',
    role: 'Head of Engineering',
    initials: 'HE',
    focus: 'System design, CFD modelling and technical submissions',
    bio: 'Runs the design office and is responsible for the analysis behind every system the company proposes.',
  },
  {
    name: '[Name]',
    role: 'Projects Director',
    initials: 'PD',
    focus: 'Delivery, installation supervision and commissioning',
    bio: 'Owns programme, site delivery and the integrated systems testing that closes out every project.',
  },
  {
    name: '[Name]',
    role: 'Service & Maintenance Manager',
    initials: 'SM',
    focus: 'Statutory testing, servicing and condition monitoring',
    bio: 'Responsible for the after-sales organisation and for keeping installed systems compliant across their life.',
  },
  {
    name: '[Name]',
    role: 'Commercial Manager',
    initials: 'CM',
    focus: 'Proposals, procurement and contract management',
    bio: 'Manages the commercial interface with contractors and developers from tender through final account.',
  },
];

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people accountable for delivery"
        lede="A leadership team drawn from fire engineering, building services and project delivery — each accountable for a defined part of the client's outcome."
        breadcrumbs={[{ label: 'About Us', to: '/about' }, { label: 'Leadership' }]}
      />

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Leadership team"
            title="Engineering leadership, not sales leadership"
            lede="Every senior role in the business carries technical accountability. That is deliberate — it is what keeps the engineering position honest when commercial pressure arrives."
          />

          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l, i) => (
              <Reveal key={l.role} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col bg-white p-8">
                  <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden bg-navy-950">
                    <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
                    <span className="relative font-display text-[26px] font-semibold tracking-widest text-signal-400">
                      {l.initials}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-[21px] font-semibold text-navy-900">{l.name}</h3>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-signal-600">{l.role}</p>
                  <p className="mt-5 flex-1 text-[14px] leading-relaxed text-steel-600">{l.bio}</p>
                  <p className="mt-6 border-t border-steel-200 pt-5 text-[12.5px] text-steel-500">
                    <span className="font-semibold text-navy-800">Focus · </span>
                    {l.focus}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 flex items-start gap-4 border border-steel-200 bg-navy-50 p-6">
              <Icon name="users" className="mt-0.5 h-5 w-5 shrink-0 text-navy-700" />
              <p className="text-[14px] leading-relaxed text-steel-600">
                Behind the leadership team sits a multidisciplinary group of mechanical, fire, CFD, BIM, project and
                service engineers across Singapore and India.{' '}
                <a href="/careers" className="font-semibold text-signal-700 underline underline-offset-4">
                  We are hiring
                </a>
                .
              </p>
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
