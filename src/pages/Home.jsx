import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import HeroSection from '../components/hero/HeroSection';
import Section, { SectionHead } from '../components/Section';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import SystemDiagram from '../components/SystemDiagram';
import CFDCompare from '../components/CFDCompare';
import { CTASection } from '../components/PageHero';
import ProductCategoryCard from '../components/ProductCategoryCard';

import { company, metrics } from '../data/company';
import { solutions } from '../data/solutions';
import { services } from '../data/services';
import { productCategories, productsByCategory } from '../data/products';

const heroSectors = ['Airports', 'High-Rise Towers', 'Shopping Malls', 'Industrial Plants', 'Metro Systems', 'Car Parks'];

/* Values and commitments as stated in the approved content document. */
const values = [
  { icon: 'spark', title: 'Innovation', text: 'We don’t settle for familiar solutions. We explore better ones, test them, and recommend only what we know works.' },
  { icon: 'shield', title: 'Integrity', text: 'We tell our clients what the analysis shows, including when the answer is commercially inconvenient.' },
  { icon: 'gauge', title: 'Engineering excellence', text: 'Calculations, drawings, and reports that stand up to scrutiny from any reviewing authority.' },
  { icon: 'check', title: 'Quality', text: 'Certified equipment. Controlled documentation. Verified installation. Every time.' },
  { icon: 'users', title: 'Customer commitment', text: 'We stay with the project through commissioning, handover, and the years of testing and maintenance that follow.' },
  { icon: 'clock', title: 'Fast responses', text: 'Technical queries answered by an engineer, usually on the same working day.' },
  { icon: 'target', title: 'Right-sized systems', text: 'We recommend smaller systems when supported by analysis.' },
  { icon: 'wrench', title: 'Accountability', text: 'The same organisation designs, installs, commissions and services.' },
];

const standardsBadges = ['EN 12101-1', 'EN 12101-2', 'EN 12101-3', 'EN 12101-8', 'EN 13501-1', 'Singapore Fire Code'];

export default function Home() {
  const [sector, setSector] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSector((s) => (s + 1) % heroSectors.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <HeroSection>
        <Reveal>
          <span className="eyebrow">{company.strapline}</span>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-5 font-display text-[clamp(1.85rem,3.8vw,3.4rem)] font-semibold leading-[1.04] text-navy-900">
            Protecting lives
            <span className="block text-steel-500">through intelligent</span>
            <span className="block">
              smoke <span className="text-signal-600">management</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 max-w-[33rem] text-[15px] leading-relaxed text-steel-600 md:text-[16px]">
            A Singapore-based specialist in engineered smoke control and ventilation solutions — end to end, from
            design and engineering through supply, installation, testing, commissioning, service and maintenance.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary lg:!px-5 2xl:!px-7">
              Request Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/solutions" className="btn-ghost lg:!px-5 2xl:!px-7">
              Explore Solutions
            </Link>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-8 hidden flex-wrap items-center gap-x-4 gap-y-2 border-t border-steel-200 pt-5 text-[12px] uppercase tracking-[0.16em] text-steel-500 [@media(min-width:640px)_and_(min-height:840px)]:flex">
            <span>Engineered for</span>
            <span className="relative inline-flex h-6 min-w-[190px] items-center overflow-hidden">
              {heroSectors.map((s, i) => (
                <span
                  key={s}
                  className="absolute left-0 font-semibold text-signal-600 transition-all duration-500"
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
      </HeroSection>

      {/* ================= METRICS ================= */}
      <section className="relative z-10 border-b border-steel-200 bg-white">
        <div className="shell flex justify-center">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 90} className="px-2 py-8 text-center lg:px-8">
              <p className="font-display text-[clamp(2.2rem,3.6vw,3rem)] font-semibold leading-none text-navy-900">
                <Counter value={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-3 text-[12.5px] uppercase tracking-[0.13em] text-steel-500">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Company overview"
              title="Engineering beyond products"
              lede={`${company.legalName} is a Singapore-based specialist in engineered smoke control and ventilation solutions, established in 2026 to provide reliable, integrated and performance-driven solutions for modern buildings.`}
            />
            <Reveal delay={120}>
              <div className="mt-6 max-w-xl space-y-4 text-[16px] leading-relaxed text-steel-600">
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
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2">
                {[
                  ['Vent Engineering, UK', 'Exclusive Singapore distributor covering Asia and Australia'],
                  ['Prime Curtain', 'Manufactured and tested in Singapore to EN 12101-1'],
                  ['One accountable party', 'Design, supply, install, commission, service, maintain'],
                  ['Engineering-led', 'Calculations and analysis before specification'],
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
                About the company
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="relative isolate overflow-hidden bg-navy-950 p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]" />
              <div className="relative">
                <span className="eyebrow-light">Design intent</span>
                <p className="mt-6 font-display text-[clamp(1.6rem,2.4vw,2.1rem)] font-semibold leading-tight text-white">
                  “{company.positioning}”
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-navy-200">
                  We believe the best solution is not always the most familiar or the largest, but the one that is
                  technically justified, properly tested, and fit for purpose.
                </p>
                <div className="mt-10 grid grid-cols-3 gap-px bg-white/10">
                  {[
                    ['Design', 'Engineered'],
                    ['Supply', 'Certified'],
                    ['Service', 'Lifecycle'],
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

      {/* ================= SOLUTIONS ================= */}
      <Section tone="tint">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Solutions"
              title="Systems we engineer"
              lede="Six solution families that combine into one integrated smoke control strategy."
            />
            <Reveal delay={120}>
              <Link to="/solutions" className="btn-outline">
                All solutions
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link
                  to={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col bg-white p-7 transition-all duration-300 hover:bg-navy-950"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-navy-50 text-navy-800 transition-colors duration-300 group-hover:bg-signal-600 group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-[19px] font-semibold leading-tight text-navy-900 transition-colors group-hover:text-white">
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
      <section className="relative isolate overflow-hidden bg-steel-100 py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-40" />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(200,16,46,.22), transparent 68%)' }}
        />
        <div className="shell relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="eyebrow">Product range</span>
              <h2 className="h2 mt-5 max-w-2xl text-navy-900">
                The equipment behind the <span className="text-signal-600">systems</span>
              </h2>
              <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-steel-600">
                Smoke containment, natural ventilation, smoke ventilation and mechanical smoke extraction — with full
                specifications and technical support on every product page.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/products" className="btn-primary">
                Browse products
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-wrap gap-px border border-steel-200 bg-steel-200">
            {productCategories.map((c, i) => (
              <Reveal key={c.id} delay={i * 90} className="min-w-[260px] flex-1">
                <ProductCategoryCard category={c} items={productsByCategory(c.id)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SYSTEM ARCHITECTURE ================= */}
      <section className="relative isolate overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-40" />
        <div className="shell relative">
          <SectionHead
            eyebrow="How it works together"
            title="One system, engineered as a whole"
            lede="Detection, containment, ventilation, extraction and control act on a single activation sequence. Select a component to see the part it plays."
          />
          <div className="mt-14">
            <SystemDiagram />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <Section tone="light">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="Services"
                title="Analysis before specification"
                lede="Every building behaves differently. Our engineers assess the factors affecting ventilation and smoke movement, and use appropriate calculations, modelling and analysis tools to evaluate system performance."
              />
              <Reveal delay={120}>
                <ul className="mt-9 grid gap-y-3 sm:grid-cols-2">
                  {[
                    'System selection',
                    'Airflow calculations',
                    'Equipment sizing',
                    'System layouts',
                    'Control strategies',
                    'Technical documentation',
                    'QP submission support',
                    'Coordination with other services',
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[14.5px] text-navy-800">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" strokeWidth={2} />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/services" className="btn-navy">
                    All services
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <Link to="/services/system-design" className="btn-outline">
                    System design
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

          <div className="mt-20 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 4) * 80}>
                <Link
                  to={`/services/${e.slug}`}
                  className="group flex h-full flex-col gap-5 bg-white p-7 transition-colors hover:bg-navy-50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-steel-200 text-navy-700 transition-colors group-hover:border-signal-600 group-hover:text-signal-600">
                    <Icon name={e.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-[17px] font-semibold text-navy-900">{e.title}</span>
                    <span className="mt-2 block text-[13.5px] leading-relaxed text-steel-500">{e.summary}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= VALUES ================= */}
      <Section tone="steel">
        <div className="shell">
          <SectionHead
            eyebrow="Why Sterling"
            title="How we work"
            lede="Our values, and the commitments that follow from them."
            align="center"
          />
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 70}>
                <div className="group h-full bg-white p-7">
                  <span className="flex h-11 w-11 items-center justify-center bg-navy-900 text-signal-400 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-[16.5px] font-semibold leading-tight text-navy-900">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= STANDARDS ================= */}
      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Codes and standards"
            title="Designed to the governing requirement"
            lede="Singapore’s Fire Code establishes minimum fire-safety requirements and requires the applicable current referenced codes and standards to be used. We identify which requirement governs and engineer to that."
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
            <Link to="/resources/standards" className="link-arrow mt-10">
              Full standards reference
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Let’s build safer buildings together"
        text="Tell us about the building, the fire strategy or the constraint you are working around. We will come back with an engineering view, not a price list."
        primary={{ label: 'Request Engineering Consultation', to: '/contact' }}
        secondary={{ label: 'Explore Solutions', to: '/solutions' }}
      />
    </>
  );
}
