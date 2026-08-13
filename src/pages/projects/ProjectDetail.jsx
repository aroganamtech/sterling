import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { getProject, projects } from '../../data/projects';

function GalleryTile({ label, accent, i }) {
  return (
    <div className={`relative isolate aspect-[4/3] overflow-hidden bg-gradient-to-br ${accent}`}>
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${25 + i * 18}% ${30 + i * 12}%, rgba(200,16,46,.45), transparent 62%)`,
        }}
      />
      <span className="absolute bottom-4 left-4 text-[10.5px] font-bold uppercase tracking-widest2 text-white/75">
        {label}
      </span>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/projects" replace />;

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={project.sector}
        title={project.title}
        lede={project.overview}
        breadcrumbs={[{ label: 'Projects', to: '/projects' }, { label: project.title }]}
        meta={[
          { label: 'Client', value: project.client },
          { label: 'Location', value: project.location },
          { label: 'Sector', value: project.sector },
          { label: 'Completed', value: project.year },
        ]}
      />

      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div className="space-y-14">
            <div>
              <SectionHead eyebrow="Scope of work" title="What we were engaged to deliver" />
              <ul className="mt-8 grid gap-px bg-steel-200 sm:grid-cols-2">
                {project.scope.map((s) => (
                  <li key={s} className="flex items-start gap-3 bg-white px-5 py-4">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" strokeWidth={2} />
                    <span className="text-[14px] leading-snug text-navy-800">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHead eyebrow="Engineering challenges" title="What made it difficult" />
              <ul className="mt-8 space-y-px bg-steel-200">
                {project.challenges.map((c, i) => (
                  <Reveal key={c} delay={i * 70}>
                    <li className="flex items-start gap-4 bg-white px-6 py-5">
                      <span className="font-display text-[13px] font-semibold text-signal-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[15px] leading-relaxed text-navy-800">{c}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div>
              <SectionHead eyebrow="Solutions delivered" title="How we resolved it" />
              <ul className="mt-8 space-y-4">
                {project.delivered.map((d) => (
                  <li key={d} className="flex items-start gap-4 border-l-2 border-signal-600 bg-navy-50 px-6 py-5">
                    <span className="text-[15px] leading-relaxed text-navy-800">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHead eyebrow="Project gallery" title="On site" />
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['Installation', 'Plant room', 'Commissioning'].map((label, i) => (
                  <GalleryTile key={label} label={label} accent={project.accent} i={i} />
                ))}
              </div>
              <p className="mt-4 text-[12.5px] text-steel-400">
                Placeholder tiles — replace with project photography. {/* TODO */}
              </p>
            </div>
          </div>

          <Reveal delay={120}>
            <div className="sticky top-32 space-y-px bg-steel-200">
              <div className="bg-navy-950 p-7 text-white">
                <span className="eyebrow-light">Key figures</span>
                <dl className="mt-6 space-y-4">
                  {project.stats.map(([k, v]) => (
                    <div key={k} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-navy-400">{k}</dt>
                      <dd className="mt-1.5 font-display text-[22px] font-semibold text-white">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="bg-white p-7">
                <p className="label">Systems installed</p>
                <ul className="mt-3 space-y-2">
                  {project.systems.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-[14px] text-navy-800">
                      <Icon name="chevronRight" className="mt-1 h-3.5 w-3.5 shrink-0 text-signal-600" strokeWidth={2} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-7">
                <p className="label">Standards followed</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.standards.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-signal-600 p-7 text-white">
                <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-white/80">Outcome</p>
                <p className="mt-3 text-[15px] leading-relaxed">{project.outcome}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="More work" title="Related projects" />
            <Link to="/projects" className="btn-outline">
              All projects
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-steel-200 bg-white transition-all hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className={`relative isolate h-36 bg-gradient-to-br ${p.accent}`}>
                  <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
                  <span className="absolute bottom-3 left-5 text-[10.5px] font-bold uppercase tracking-widest2 text-white/80">
                    {p.sector}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[17px] font-semibold leading-tight text-navy-900 group-hover:text-signal-700">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-steel-500">{p.overview}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
