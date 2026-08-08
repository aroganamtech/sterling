import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import CoverageMap from '../../components/CoverageMap';
import { projects } from '../../data/projects';

const sectors = ['All', ...Array.from(new Set(projects.map((p) => p.sector)))];

export default function ProjectsIndex() {
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? projects : projects.filter((p) => p.sector === filter);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Delivered under real constraints"
        lede="Live terminals, operating railways, occupied malls and continuous-process plants. Each case study sets out the engineering challenge, what we delivered and how it was proven."
        breadcrumbs={[{ label: 'Projects' }]}
        actions={
          <Link to="/contact" className="btn-primary">
            Discuss your project
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        }
      />

      <Section tone="light">
        <div className="shell">
          <div className="flex flex-wrap items-center gap-2">
            {sectors.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setFilter(s)}
                className={`border px-4 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] transition-all ${
                  filter === s
                    ? 'border-signal-600 bg-signal-600 text-white'
                    : 'border-steel-200 text-navy-800 hover:border-navy-800'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-steel-200 bg-white transition-all hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className={`relative isolate h-48 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                    <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
                    <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-signal-600/25 blur-2xl" />
                    <span className="absolute right-5 top-4 text-[11px] font-semibold text-white/60">{p.year}</span>
                    <span className="absolute bottom-4 left-5 text-[10.5px] font-bold uppercase tracking-widest2 text-white/80">
                      {p.sector}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-[19px] font-semibold uppercase leading-tight text-navy-900 group-hover:text-signal-700">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] uppercase tracking-[0.13em] text-steel-400">{p.location}</p>
                    <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-steel-500">{p.overview}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.systems.slice(0, 2).map((s) => (
                        <span key={s} className="border border-steel-200 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-steel-500">
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="link-arrow mt-6">
                      Case study
                      <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <p className="mt-12 border-l-2 border-signal-600 bg-navy-50 px-6 py-5 text-[13.5px] leading-relaxed text-steel-600">
              Client names and figures shown are representative reference formats pending publication approval. Full
              verified references are available on request under confidentiality.
            </p>
          </Reveal>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-24">
        <div className="shell">
          <SectionHead
            light
            eyebrow="Project map"
            title="Installations across the region"
            lede="Delivered from Singapore and our India engineering centre, across Asia-Pacific and the Middle East."
          />
          <div className="mt-12">
            <CoverageMap />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
