import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Counter from '../../components/Counter';
import Icon from '../../components/Icon';
import { company, metrics } from '../../data/company';
import logoFull from '../../assets/logo-full.png';

const values = [
  { icon: 'spark', title: 'Innovation', text: 'We don’t settle for familiar solutions. We explore better ones, test them, and recommend only what we know works.' },
  { icon: 'shield', title: 'Integrity', text: 'We tell our clients what the analysis shows, including when the answer is commercially inconvenient.' },
  { icon: 'gauge', title: 'Engineering excellence', text: 'Calculations, drawings, and reports that stand up to scrutiny from any reviewing authority.' },
  { icon: 'check', title: 'Quality', text: 'Certified equipment. Controlled documentation. Verified installation. Every time.' },
  { icon: 'users', title: 'Customer commitment', text: 'We stay with the project through commissioning, handover, and the years of testing and maintenance that follow.' },
];

const differentiators = [
  ['Fast responses', 'Technical queries answered by an engineer, usually on the same working day.'],
  ['Right-sized systems', 'We recommend smaller systems when supported by analysis.'],
  ['Full documentation', 'Every project handed over with traceable certification and test records.'],
  ['Accountability', 'The same organisation designs, installs, commissions and services.'],
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Engineering excellence in smoke management"
        lede={`${company.legalName} is a Singapore-based specialist in engineered smoke control and ventilation solutions, established in 2026 to provide reliable, integrated and performance-driven solutions for modern buildings.`}
        breadcrumbs={[{ label: 'About Us' }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Talk to our engineers
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/solutions" className="btn-ghost">
              Explore Solutions
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
                Sterling Ventilation Asia Pacific Pte Ltd is a Singapore-based specialist in engineered smoke control
                and ventilation solutions, established in 2026 to provide reliable, integrated, and
                performance-driven solutions for modern buildings.
              </p>
              <p>
                We provide end-to-end smoke control services, from design and engineering to supply, installation,
                testing, commissioning, system communication, service, and maintenance. Our solutions include smoke
                curtains, natural smoke ventilation, smoke ventilation, and mechanical smoke extraction systems.
              </p>
              <p>
                We work closely with building owners, developers, consultants, architects, main contractors, M&amp;E
                contractors, and facility management teams to develop solutions that address the specific
                requirements of each project.
              </p>
              <p>
                We are the exclusive distributor in Singapore covering Asia and Australia for Vent Engineering, UK, a
                specialist manufacturer of ventilation products with a long-standing history in the industry since
                1988, including certified ventilation solutions.
              </p>
              <p>
                In addition, we manufacture and test our Prime Curtain smoke curtain system in Singapore, designed and
                tested to comply with the requirements of EN 12101-1.
              </p>
              <p>
                This combination of established international products and locally engineered and tested solutions
                allows us to provide our clients with reliable, compliant, and application-specific smoke control
                solutions.
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
              <div className={`mt-6 grid gap-px bg-steel-200 ${metrics.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
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
            lede="Five values that decide how we behave when a project gets difficult."
          />
          <div className="mt-14 flex flex-wrap justify-center bg-white">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 3) * 80}
                className="-ml-px -mt-px w-full border border-steel-200 sm:w-1/2 lg:w-1/3"
              >
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
            { to: '/about/vision', label: 'Our Vision', text: 'What we are building towards' },
            { to: '/about/leadership', label: 'Leadership', text: 'The engineer accountable for delivery' },
            { to: '/about/global-coverage', label: 'Global Coverage', text: 'Where we operate' },
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
