import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { getIndustry, industries } from '../../data/industries';
import { getSolution } from '../../data/solutions';
import { projects } from '../../data/projects';

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = getIndustry(slug);
  if (!industry) return <Navigate to="/industries" replace />;

  const featured = projects.filter((p) => p.industry === industry.slug);
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={industry.title}
        lede={industry.overview}
        breadcrumbs={[{ label: 'Industries', to: '/industries' }, { label: industry.title }]}
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Discuss a {industry.title.toLowerCase()} project
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="btn-ghost">
              Related projects
            </Link>
          </>
        }
      />

      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Key challenges"
              title="What makes this sector different"
              lede="The conditions that shape how a smoke control strategy has to be engineered here."
            />
            <ul className="mt-10 space-y-px bg-steel-200">
              {industry.challenges.map((c, i) => (
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
            <SectionHead
              eyebrow="Recommended solutions"
              title="Systems we typically deploy"
              lede="The combination that most often forms the basis of the strategy in this sector."
            />
            <div className="mt-10 grid gap-px bg-steel-200">
              {industry.solutions.map((s, i) => {
                const sol = getSolution(s);
                if (!sol) return null;
                return (
                  <Reveal key={s} delay={i * 70}>
                    <Link
                      to={`/solutions/${sol.slug}`}
                      className="group flex items-center gap-5 bg-white px-6 py-5 transition-colors hover:bg-navy-50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy-900 text-signal-400 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                        <Icon name={sol.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[17px] font-semibold text-navy-900">
                          {sol.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] text-steel-500">{sol.menuBlurb}</span>
                      </span>
                      <Icon name="arrow" className="h-4 w-4 shrink-0 text-steel-400 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={200}>
              <div className="mt-10 border border-steel-200 bg-navy-50 p-6">
                <p className="label">Relevant standards</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {industry.standards.map((s) => (
                    <span key={s} className="chip !bg-white">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {featured.length ? (
        <Section tone="tint">
          <div className="shell">
            <SectionHead eyebrow="Featured projects" title={`${industry.title} we have delivered`} />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-steel-200 bg-white transition-all hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className={`relative isolate h-40 bg-gradient-to-br ${p.accent}`}>
                    <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
                    <span className="absolute bottom-4 left-5 text-[10.5px] font-bold uppercase tracking-widest2 text-white/80">
                      {p.location} · {p.year}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[18px] font-semibold leading-tight text-navy-900 group-hover:text-signal-700">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500">{p.overview}</p>
                    <span className="link-arrow mt-5">
                      Case study
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <Section tone="light">
        <div className="shell">
          <SectionHead eyebrow="Other sectors" title="Explore more industries" />
          <div className="mt-12 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to={`/industries/${o.slug}`} className="group flex items-center gap-4 bg-white p-6 transition-colors hover:bg-navy-50">
                <Icon name={o.icon} className="h-6 w-6 shrink-0 text-navy-700 group-hover:text-signal-600" />
                <span>
                  <span className="block font-display text-[16px] font-semibold text-navy-900">{o.title}</span>
                  <span className="mt-0.5 block text-[12.5px] text-steel-500">{o.blurb}</span>
                </span>
              </Link>
            ))}
          </div>
          <Link to="/industries" className="link-arrow mt-10">
            All industries
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
