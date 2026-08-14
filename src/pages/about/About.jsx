import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Counter from '../../components/Counter';
import Icon from '../../components/Icon';
import { company, metrics, offices } from '../../data/company';
import logoFull from '../../assets/logo-full.png';

const values = [
  { icon: 'spark', title: 'Innovation', text: 'We don’t settle for familiar solutions. We explore better ones, test them, and recommend only what we know works.' },
  { icon: 'shield', title: 'Integrity', text: 'We tell our clients what the analysis shows, including when the answer is commercially inconvenient.' },
  { icon: 'gauge', title: 'Engineering excellence', text: 'Calculations, drawings, and reports that stand up to scrutiny from any reviewing authority.' },
  { icon: 'check', title: 'Quality', text: 'Certified equipment. Controlled documentation. Verified installation. Every time.' },
  { icon: 'users', title: 'Customer commitment', text: 'We stay with the project through commissioning, handover, and the years of testing and maintenance that follow.' },
];

/* Commitments as stated in the approved content document — formerly Vision.jsx. */
const commitments = [
  { icon: 'clock', title: 'Fast responses', text: 'Technical queries answered by an engineer, usually on the same working day.' },
  { icon: 'target', title: 'Right-sized systems', text: 'We recommend smaller systems when supported by analysis.' },
  { icon: 'compliance', title: 'Full documentation', text: 'Every project handed over with traceable certification and test records.' },
  { icon: 'wrench', title: 'Accountability', text: 'The same organisation designs, installs, commissions and services.' },
];

/* TODO — a photograph for NK Karthikeyan was not supplied; the initials mark below is a
   placeholder until one is provided. Add further leadership profiles here as the team grows.
   Formerly Leadership.jsx. */
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

/* Same-page section navigation. All 4 About Us sections now live on this one
   page (previously /about/vision, /about/leadership and /about/global-coverage
   were separate routes) — clicking one of these smooth-scrolls to its section
   via the browser's native anchor behaviour (the site already sets
   `scroll-behavior: smooth` globally) rather than navigating anywhere. The old
   URLs still work: App.jsx now redirects them to the matching anchor here. */
const sectionNav = [
  { id: 'company-overview', label: 'Company Overview', text: 'A practice built around one discipline' },
  { id: 'vision-mission', label: 'Our Vision & Mission', text: 'What we are building towards' },
  { id: 'leadership', label: 'Leadership', text: 'The engineer accountable for delivery' },
  { id: 'global-coverage', label: 'Global Coverage', text: 'Where we operate' },
];

/* Tracks which section is currently in view so the nav row above can give it a
   subtle active-state indication as the visitor scrolls. */
function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-140px 0px -65% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')]);

  return activeId;
}

export default function About() {
  const activeSection = useActiveSection(sectionNav.map((s) => s.id));
  const office = offices[0];

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

      {/* ---------------------- same-page section navigation ---------------------- */}
      <Section tone="light" padded={false}>
        <div className="shell grid gap-px border-y border-steel-200 bg-steel-200 py-0 sm:grid-cols-2 lg:grid-cols-4">
          {sectionNav.map((s) => {
            const active = activeSection === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active}
                className={`group bg-white px-7 py-10 transition-colors hover:bg-navy-50 ${
                  active ? 'bg-navy-50' : ''
                }`}
              >
                <p
                  className={`font-display text-[19px] font-semibold transition-colors ${
                    active ? 'text-signal-600' : 'text-navy-900'
                  }`}
                >
                  {s.label}
                </p>
                <p className="mt-2 text-[13.5px] text-steel-500">{s.text}</p>
                <span className="link-arrow mt-5">
                  View section
                  <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </Section>

      {/* ============================ Company Overview ============================ */}
      <Section id="company-overview" tone="light" className="scroll-mt-[100px]">
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

      {/* ============================ Our Vision & Mission ============================ */}
      <Section id="vision-mission" tone="light" className="scroll-mt-[100px]">
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

      {/* ================================ Leadership ================================ */}
      <Section id="leadership" tone="light" className="scroll-mt-[100px]">
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

      {/* ============================== Global Coverage ============================== */}
      <Section id="global-coverage" tone="light" className="scroll-mt-[100px]">
        <div className="shell">
          <SectionHead
            eyebrow="Global Coverage"
            title="Where we operate"
            lede="Operating from Singapore, we are authorised by our manufacturing partners to market and distribute their ventilation products across Asia and Australia. This gives us the capability to support projects across the region while maintaining a strong engineering and technical base in Singapore."
          />
          <Reveal delay={100}>
            <p className="mt-8 max-w-3xl text-[16px] leading-relaxed text-steel-600">
              Our combination of internationally established products, local manufacturing, engineering capability,
              and regional distribution enables us to provide reliable, application-specific smoke control and
              ventilation solutions across Asia and Australia.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint">
        <div className="shell">
          <SectionHead eyebrow="Office" title="Talk to our engineers" />
          <div className="mt-12 grid gap-8 lg:mx-auto lg:max-w-xl">
            <Reveal>
              <div className="flex h-full flex-col border border-steel-200 bg-white">
                <div className="border-b border-steel-200 px-8 py-7">
                  <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-600">{office.country}</p>
                  <h3 className="h3 mt-2 text-navy-900">{office.label}</h3>
                  <p className="mt-2 text-[13.5px] text-steel-500">{office.role}</p>
                </div>
                <div className="px-8 py-7">
                  <p className="label">Address</p>
                  <address className="space-y-1 text-[14px] not-italic leading-relaxed text-steel-600">
                    {office.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </div>
                <div className="h-56 w-full border-t border-steel-200 grayscale">
                  <iframe
                    title={`${office.label} map`}
                    src={office.map}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CTASection
        title="Working elsewhere in Asia or Australia?"
        text="Our distribution territory covers Asia and Australia. Tell us where the project is and we will tell you how we would support it."
        secondary={{ label: 'Contact us', to: '/contact' }}
      />
    </>
  );
}
