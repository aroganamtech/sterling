import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SmokeCanvas from '../components/SmokeCanvas';
import CinematicHero from '../components/hero/CinematicHero';
import Section, { SectionHead } from '../components/Section';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import ProcessFlow from '../components/ProcessFlow';
import SolutionFinder from '../components/SolutionFinder';
import ComplianceMatrix from '../components/ComplianceMatrix';
import SystemDiagram from '../components/SystemDiagram';
import CFDCompare from '../components/CFDCompare';
import CoverageMap from '../components/CoverageMap';
import { CTASection } from '../components/PageHero';
import ProductCategoryCard from '../components/ProductCategoryCard';

import { company, metrics } from '../data/company';
import { solutions } from '../data/solutions';
import { engineeringServices, serviceCapabilities } from '../data/engineering';
import { industries } from '../data/industries';
import { projects } from '../data/projects';
import { productCategories, productsByCategory } from '../data/products';

const heroSectors = ['Airports', 'High-Rise Towers', 'Shopping Malls', 'Industrial Plants', 'Metro Systems', 'Data Centres'];

const whySterling = [
  { icon: 'gauge', title: 'Engineering expertise', text: 'Specialists in smoke control alone — not a general contractor with a product catalogue.' },
  { icon: 'globe', title: 'International standards', text: 'EN, NFPA, BS, ASHRAE, IBC and local codes applied to the governing requirement.' },
  { icon: 'target', title: 'Customised design', text: 'Every system sized from the design fire and the building, never from a template.' },
  { icon: 'shield', title: 'Certified products', text: 'Third-party certified equipment with traceable test evidence for every asset.' },
  { icon: 'clock', title: 'Fast technical support', text: 'Engineers answer technical queries — usually the same working day.' },
  { icon: 'layers', title: 'Complete turnkey delivery', text: 'Design, supply, installation, commissioning and documentation in one accountable package.' },
  { icon: 'wrench', title: 'Reliable after sales service', text: 'Regional service capability with genuine spares and trained engineers.' },
  { icon: 'users', title: 'Long-term maintenance', text: 'Statutory testing regimes and condition monitoring across the asset life.' },
];

const standardsBadges = ['EN 12101', 'BS 7346', 'NFPA 92', 'NFPA 204', 'NFPA 130', 'ASHRAE', 'IBC 909', 'SCDF Fire Code'];

export default function Home() {
  const [sector, setSector] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSector((s) => (s + 1) % heroSectors.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <CinematicHero>
        <div className="py-20 md:py-28">
            <div className="max-w-4xl">
              <Reveal>
                <span className="eyebrow-light">{company.strapline}</span>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="text-cine mt-6 font-display text-[clamp(2.6rem,6.6vw,5.4rem)] font-semibold uppercase leading-[0.98] text-white">
                  Protecting lives
                  <span className="block text-white/70">through intelligent</span>
                  <span className="block">
                    smoke <span className="text-cine-warm text-ember-500">management</span>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-navy-200 md:text-[18px]">
                  We deliver advanced smoke control engineering that safeguards occupants, supports firefighting
                  operations and satisfies global fire safety standards — from concept and CFD through installation,
                  commissioning and lifetime maintenance.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Request Consultation
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <Link to="/solutions" className="btn-ghost">
                    Explore Solutions
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={340}>
                <div className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-[12px] uppercase tracking-[0.16em] text-navy-400">
                  <span>Engineered for</span>
                  <span className="relative inline-flex h-6 min-w-[190px] items-center overflow-hidden">
                    {heroSectors.map((s, i) => (
                      <span
                        key={s}
                        className="absolute left-0 font-semibold text-signal-400 transition-all duration-500"
                        style={{
                          opacity: i === sector ? 1 : 0,
                          transform: `translateY(${(i - sector) * 100}%)`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </span>
                </div>
              </Reveal>
            </div>
        </div>
      </CinematicHero>

      {/* ================= METRICS ================= */}
      <section className="relative z-10 border-b border-steel-200 bg-white">
        <div className="shell grid divide-y divide-steel-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 90} className="px-2 py-8 lg:px-8">
              <p className="font-display text-[clamp(2.2rem,3.6vw,3rem)] font-semibold leading-none text-navy-900">
                <Counter value={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-3 text-[12.5px] uppercase tracking-[0.13em] text-steel-500">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= ENGINEERING BEYOND PRODUCTS ================= */}
      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Our position"
              title="Engineering beyond products"
              lede={`${company.legalName} delivers complete smoke management solutions — from concept and engineering through installation, commissioning and long-term maintenance.`}
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-steel-600">
                We do not simply supply equipment. We engineer integrated life safety systems for complex buildings and
                critical infrastructure, working alongside fire consultants, architects, MEP engineers and contractors
                from the first concept sketch to the final witnessed test.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2">
                {[
                  ['One accountable party', 'Design, supply, install, commission, maintain'],
                  ['Analysis-led', 'CFD and calculation before specification'],
                  ['Code fluent', 'EN, NFPA, BS and local authority practice'],
                  ['Built to be maintained', 'Access and testing designed in from day one'],
                ].map(([t, s]) => (
                  <div key={t} className="bg-white px-6 py-5">
                    <p className="text-[14px] font-semibold text-navy-900">{t}</p>
                    <p className="mt-1 text-[13px] text-steel-500">{s}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={280}>
              <Link to="/about" className="link-arrow mt-9">
                About the practice
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="relative isolate overflow-hidden bg-navy-950 p-8 md:p-10">
              <SmokeCanvas className="absolute inset-0 h-full w-full opacity-60" density={0.55} speed={0.7} intensity={0.85} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
              <div className="relative">
                <span className="eyebrow-light">Design intent</span>
                <p className="mt-6 font-display text-[clamp(1.6rem,2.4vw,2.1rem)] font-semibold uppercase leading-tight text-white">
                  “{company.positioning}”
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-navy-200">
                  Smoke, not flame, is what harms people in a building fire. Every decision we make — reservoir depth,
                  extract rate, curtain drop, damper sequence — is measured against a single question: does this keep
                  the escape route usable for long enough?
                </p>
                <div className="mt-10 grid grid-cols-3 gap-px bg-white/10">
                  {[
                    ['Design', 'CFD verified'],
                    ['Supply', 'Certified'],
                    ['Service', 'Lifetime'],
                  ].map(([a, b]) => (
                    <div key={a} className="bg-navy-950/70 px-3 py-4 text-center">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-signal-400">{a}</p>
                      <p className="mt-1.5 text-[13px] text-navy-200">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================= CORE SOLUTIONS ================= */}
      <Section tone="tint">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Core solutions"
              title="Systems we engineer"
              lede="Eight system families, designed to work as one integrated smoke management strategy."
            />
            <Reveal delay={120}>
              <Link to="/solutions" className="btn-outline">
                All solutions
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <Link
                  to={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col bg-white p-7 transition-all duration-300 hover:bg-navy-950"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-navy-50 text-navy-800 transition-colors duration-300 group-hover:bg-signal-600 group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-[19px] font-semibold uppercase leading-tight text-navy-900 transition-colors group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500 transition-colors group-hover:text-navy-300">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.13em] text-signal-600 transition-colors group-hover:text-signal-400">
                    Explore
                    <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= PRODUCTS BAND ================= */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(200,16,46,.35), transparent 68%)' }}
        />
        <div className="shell relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="eyebrow-light">Product range</span>
              <h2 className="h2 mt-5 max-w-2xl text-white">
                The equipment behind the <span className="text-signal-500">systems</span>
              </h2>
              <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-navy-200">
                Certified natural, smoke and mechanical ventilation products — with full specifications, brochures and
                an engineering assistant on every product page.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/products" className="btn-primary">
                Browse products
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {productCategories.map((c, i) => (
              <Reveal key={c.id} delay={i * 90}>
                <ProductCategoryCard category={c} items={productsByCategory(c.id)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SYSTEM ARCHITECTURE ================= */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <div className="shell relative">
          <SectionHead
            light
            eyebrow="How it works together"
            title="One system, engineered as a whole"
            lede="Detection, containment, ventilation, extraction and pressurisation act on a single cause-and-effect matrix. Select a component to see the part it plays."
          />
          <div className="mt-14">
            <SystemDiagram />
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING SERVICES + CFD ================= */}
      <Section tone="light">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="Engineering services"
                title="Proof before procurement"
                lede="The analysis that turns a fire strategy into a buildable, approvable and economical smoke control system."
              />
              <Reveal delay={120}>
                <ul className="mt-9 grid gap-y-3 sm:grid-cols-2">
                  {serviceCapabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[14.5px] text-navy-800">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" strokeWidth={2} />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/engineering" className="btn-navy">
                    Engineering capability
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <Link to="/engineering/smoke-modelling-cfd" className="btn-outline">
                    CFD modelling
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="rounded-none bg-navy-950 p-5 md:p-6">
                <CFDCompare />
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px border border-steel-200 bg-steel-200 md:grid-cols-2 lg:grid-cols-3">
            {engineeringServices.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 3) * 80}>
                <Link to={`/engineering/${e.slug}`} className="group flex h-full items-start gap-5 bg-white p-7 transition-colors hover:bg-navy-50">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-steel-200 text-navy-700 transition-colors group-hover:border-signal-600 group-hover:text-signal-600">
                    <Icon name={e.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-[17px] font-semibold uppercase text-navy-900">{e.title}</span>
                    <span className="mt-2 block text-[13.5px] leading-relaxed text-steel-500">{e.menuBlurb}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= SOLUTION FINDER ================= */}
      <Section tone="tint">
        <div className="shell">
          <SectionHead
            eyebrow="Solution finder"
            title="Which systems does your building need?"
            lede="Select a building type to see the smoke management systems typically required and the standards that usually govern them."
            align="center"
          />
          <div className="mt-14">
            <SolutionFinder />
          </div>
        </div>
      </Section>

      {/* ================= INDUSTRIES ================= */}
      <Section tone="light">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Industries"
              title="Sectors we serve"
              lede="Fifteen building and infrastructure sectors, each with its own code basis, risk profile and delivery constraints."
            />
            <Reveal delay={120}>
              <Link to="/industries" className="btn-outline">
                All industries
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 5) * 60}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="group flex h-full flex-col justify-between gap-6 bg-white p-6 transition-all hover:bg-navy-900"
                >
                  <Icon
                    name={ind.icon}
                    className="h-7 w-7 text-navy-700 transition-colors group-hover:text-signal-400"
                  />
                  <span>
                    <span className="block font-display text-[15.5px] font-semibold uppercase leading-tight text-navy-900 transition-colors group-hover:text-white">
                      {ind.title}
                    </span>
                    <span className="mt-1.5 block text-[12.5px] leading-snug text-steel-500 transition-colors group-hover:text-navy-300">
                      {ind.blurb}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= WHY STERLING ================= */}
      <Section tone="steel">
        <div className="shell">
          <SectionHead
            eyebrow="Why Sterling"
            title="What clients rely on us for"
            lede="Consultants and contractors bring us in when the smoke strategy has to be right the first time."
            align="center"
          />
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {whySterling.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 70}>
                <div className="group h-full bg-white p-7">
                  <span className="flex h-11 w-11 items-center justify-center bg-navy-900 text-signal-400 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-[16.5px] font-semibold uppercase leading-tight text-navy-900">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= PROCESS ================= */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-20 md:py-28">
        <SmokeCanvas className="absolute inset-0 h-full w-full opacity-30" density={0.5} speed={0.6} intensity={0.6} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/85 to-navy-900" />
        <div className="shell relative">
          <SectionHead
            light
            eyebrow="Our engineering process"
            title="From first conversation to lifetime service"
            lede="Ten stages, one accountable team. Each stage produces a deliverable the next one depends on."
          />
          <div className="mt-16">
            <ProcessFlow />
          </div>
        </div>
      </section>

      {/* ================= STANDARDS ================= */}
      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="International standards"
            title="Designed to the governing code"
            lede="Projects across the region routinely reference more than one code family. We identify which requirement governs, and engineer to that — without over-specifying to satisfy all of them at once."
          />
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {standardsBadges.map((s) => (
                <span
                  key={s}
                  className="border border-steel-200 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-navy-800 transition-colors hover:border-signal-600 hover:text-signal-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-14">
              <p className="mb-6 text-[10.5px] font-bold uppercase tracking-widest2 text-steel-400">
                Interactive compliance matrix
              </p>
              <ComplianceMatrix />
            </div>
          </Reveal>

          <Reveal delay={220}>
            <Link to="/resources/standards" className="link-arrow mt-10">
              Full standards reference
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ================= PROJECTS ================= */}
      <Section tone="tint">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Latest projects"
              title="Delivered under real constraints"
              lede="Live terminals, operating railways, occupied malls and continuous-process plants."
            />
            <Reveal delay={120}>
              <Link to="/projects" className="btn-outline">
                All projects
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-steel-200 bg-white transition-all hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className={`relative isolate h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                    <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
                    <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-signal-600/25 blur-2xl" />
                    <span className="absolute bottom-4 left-5 text-[10.5px] font-bold uppercase tracking-widest2 text-white/80">
                      {p.sector}
                    </span>
                    <span className="absolute right-5 top-4 text-[11px] font-semibold text-white/60">{p.year}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[18px] font-semibold uppercase leading-tight text-navy-900 group-hover:text-signal-700">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] uppercase tracking-[0.13em] text-steel-400">{p.location}</p>
                    <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-steel-500">{p.overview}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.13em] text-navy-800 group-hover:text-signal-600">
                      Case study
                      <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= COVERAGE ================= */}
      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:gap-16">
            <div>
              <SectionHead
                light
                eyebrow="Global presence"
                title="Engineered here, delivered across the region"
                lede="A Singapore headquarters, an engineering centre in India and project delivery across Asia-Pacific and the Middle East."
              />
              <Reveal delay={140}>
                <Link to="/about/global-presence" className="link-arrow mt-8 !text-signal-400 hover:!text-white">
                  Where we operate
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <CoverageMap />
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s build safer buildings together"
        text="Tell us about the building, the fire strategy or the constraint you are working around. We will come back with an engineering view, not a price list."
        primary={{ label: 'Request Engineering Consultation', to: '/contact' }}
        secondary={{ label: 'Download Company Profile', to: '/resources/downloads' }}
      />
    </>
  );
}
