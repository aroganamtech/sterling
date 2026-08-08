import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Counter from '../../components/Counter';
import Icon from '../../components/Icon';
import { company, metrics } from '../../data/company';
import logoFull from '../../assets/logo-full.png';

const values = [
  { icon: 'spark', title: 'Innovation', text: 'We look for the better solution, not the familiar one — and we test it before we recommend it.' },
  { icon: 'shield', title: 'Integrity', text: 'We tell clients what the analysis says, including when it is inconvenient for us commercially.' },
  { icon: 'fire', title: 'Safety', text: 'Life safety is the acceptance criterion. Everything else is a constraint to work within.' },
  { icon: 'gauge', title: 'Engineering excellence', text: 'Calculations, drawings and reports that hold up to scrutiny from any reviewing authority.' },
  { icon: 'check', title: 'Quality', text: 'Certified equipment, controlled documentation and verified installation — every time.' },
  { icon: 'users', title: 'Customer commitment', text: 'We stay on the project through commissioning, handover and the years of testing that follow.' },
];

const differentiators = [
  ['Specialists, not generalists', 'Smoke control is all we do. That focus is why consultants call us when a scheme is unusual.'],
  ['Analysis before specification', 'CFD, calculation and scenario testing come before any equipment is proposed.'],
  ['Whole-life accountability', 'The team that designs the system commissions it and services it.'],
  ['Regional delivery, one standard', 'The same engineering discipline applies in every territory we work in.'],
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Engineering excellence in smoke management"
        lede={`${company.legalName} is a specialist engineering company delivering advanced smoke control and ventilation solutions for commercial, industrial, infrastructure and high-rise developments across the Asia-Pacific region.`}
        breadcrumbs={[{ label: 'About Us' }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Talk to our engineers
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="btn-ghost">
              See our work
            </Link>
          </>
        }
      />

      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="Company overview" title="A practice built around one discipline" />
            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-steel-600">
              <p>
                Sterling Ventilation Asia Pacific Pte Ltd exists because smoke control sits awkwardly between
                disciplines. It is not quite HVAC, not quite fire protection, and not quite structural — yet it depends
                on all three, and it is usually the last package to be resolved on a project.
              </p>
              <p>
                Our expertise combines engineering design, smoke modelling, intelligent automation and life safety
                systems to create reliable solutions that protect occupants and support emergency response during fire
                incidents. We work as the specialist alongside the appointed fire engineer, the MEP consultant and the
                main contractor — bringing the analysis, the certified equipment and the delivery capability into one
                accountable package.
              </p>
              <p>
                That means we are involved earlier than a supplier and stay longer than a contractor: from the concept
                appraisal that establishes whether a strategy is achievable, through CFD verification and authority
                submission, to the integrated systems test at handover and the statutory testing regime that follows for
                the life of the building.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2">
              {differentiators.map(([t, s]) => (
                <Reveal key={t} className="bg-white p-6">
                  <p className="font-display text-[16px] font-semibold text-navy-900">{t}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-steel-500">{s}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="sticky top-32">
              <div className="border border-steel-200 bg-white p-8">
                <img src={logoFull} alt={`${company.legalName} logo`} className="mx-auto w-full max-w-[300px]" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-px bg-steel-200">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-white px-5 py-6">
                    <p className="font-display text-[28px] font-semibold leading-none text-navy-900">
                      <Counter value={m.value} suffix={m.suffix} />
                    </p>
                    <p className="mt-2 text-[11.5px] uppercase tracking-[0.12em] text-steel-500">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint">
        <div className="shell">
          <SectionHead
            eyebrow="Our values"
            title="How we work"
            align="center"
            lede="Six commitments that decide how we behave when a project gets difficult."
          />
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <div className="h-full bg-white p-8">
                  <span className="flex h-12 w-12 items-center justify-center bg-navy-900 text-signal-400">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="h3 mt-6 text-navy-900">{v.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-steel-500">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4 border-t border-steel-200 pt-10 text-center">
              <p className="font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold tracking-wide text-navy-900">
                {company.promise.split('.')[0]}.
                <span className="text-signal-600">{company.promise.split('.')[1]}.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="light" padded={false}>
        <div className="shell grid gap-px border-y border-steel-200 bg-steel-200 py-0 sm:grid-cols-3">
          {[
            { to: '/about/vision-mission', label: 'Vision & Mission', text: 'What we are building towards' },
            { to: '/about/leadership', label: 'Leadership', text: 'The people accountable for delivery' },
            { to: '/about/global-presence', label: 'Global Presence', text: 'Where we operate' },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="group bg-white px-7 py-10 transition-colors hover:bg-navy-50">
              <p className="font-display text-[19px] font-semibold text-navy-900">{l.label}</p>
              <p className="mt-2 text-[13.5px] text-steel-500">{l.text}</p>
              <span className="link-arrow mt-5">
                Read more
                <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
