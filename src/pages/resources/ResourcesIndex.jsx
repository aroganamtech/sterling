import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { downloads, faqs, news, standardFamilies } from '../../data/resources';

const hubs = [
  {
    to: '/resources/standards',
    icon: 'compliance',
    title: 'Design Standards',
    text: 'EN, NFPA, BS, ASHRAE, IBC and SCDF — what each family covers and when it governs.',
    count: `${standardFamilies.length} families`,
  },
  {
    to: '/resources/library',
    icon: 'drawing',
    title: 'Technical Library',
    text: 'White papers, technical guides, case studies, installation and maintenance documents.',
    count: '12 documents',
  },
  {
    to: '/resources/downloads',
    icon: 'download',
    title: 'Downloads',
    text: 'Company profile, product catalogues, datasheets, certificates and BIM objects.',
    count: `${downloads.length} files`,
  },
  {
    to: '/resources/faq',
    icon: 'cfd',
    title: 'FAQ',
    text: 'Smoke control basics, system selection, testing regimes, compliance and maintenance.',
    count: `${faqs.reduce((n, g) => n + g.items.length, 0)} questions`,
  },
  {
    to: '/resources/news',
    icon: 'spark',
    title: 'News & Articles',
    text: 'Code updates, engineering insight and lessons from projects across the region.',
    count: `${news.length} articles`,
  },
];

export default function ResourcesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Technical resource hub"
        lede="Standards references, engineering literature and downloads for fire consultants, architects, MEP engineers and contractors."
        breadcrumbs={[{ label: 'Resources' }]}
      />

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Browse"
            title="What you are looking for"
            lede="Everything here is written for design teams — not marketing collateral with a technical veneer."
          />
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {hubs.map((h, i) => (
              <Reveal key={h.to} delay={(i % 3) * 80}>
                <Link to={h.to} className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-navy-950">
                  <span className="flex h-12 w-12 items-center justify-center bg-navy-50 text-navy-800 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                    <Icon name={h.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-[20px] font-semibold uppercase text-navy-900 transition-colors group-hover:text-white">
                    {h.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500 transition-colors group-hover:text-navy-300">
                    {h.text}
                  </p>
                  <span className="mt-6 flex items-center justify-between text-[11.5px] font-semibold uppercase tracking-[0.13em] text-signal-600 group-hover:text-signal-400">
                    {h.count}
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Latest" title="Recent articles" />
            <Link to="/resources/news" className="btn-outline">
              All articles
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-px bg-steel-200 md:grid-cols-3">
            {news.slice(0, 3).map((n) => (
              <article key={n.slug} className="flex h-full flex-col bg-white p-7">
                <span className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-600">{n.category}</span>
                <h3 className="mt-4 font-display text-[19px] font-semibold uppercase leading-tight text-navy-900">
                  {n.title}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500">{n.excerpt}</p>
                <time className="mt-6 text-[12px] text-steel-400">
                  {new Date(n.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Cannot find the document you need?"
        text="Tell us what you are specifying and we will send the relevant datasheets, certificates and calculation notes directly."
        secondary={{ label: 'Downloads', to: '/resources/downloads' }}
      />
    </>
  );
}
