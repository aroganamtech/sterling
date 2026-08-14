import { useEffect, useState } from 'react';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import Accordion from '../../components/Accordion';
import ComplianceMatrix from '../../components/ComplianceMatrix';
import { downloads, faqs, library, standardFamilies } from '../../data/resources';

/* Same-page section navigation. Design Standards, Technical Library, Downloads
   and FAQ now all live on this one page (previously /resources/standards,
   /resources/library, /resources/downloads and /resources/faq were separate
   routes) — clicking one of these cards smooth-scrolls to its section rather
   than navigating anywhere. The old URLs still work: App.jsx now redirects
   them to the matching anchor here. */
const hubs = [
  {
    id: 'standards',
    icon: 'compliance',
    title: 'Design Standards',
    text: 'The standards families referenced on smoke control projects, and when each one governs.',
    count: `${standardFamilies.length} families`,
  },
  {
    id: 'library',
    icon: 'drawing',
    title: 'Technical Library',
    text: 'Technical guides, installation and maintenance documents for design teams.',
    count: `${library.reduce((n, g) => n + g.items.length, 0)} documents`,
  },
  {
    id: 'downloads',
    icon: 'download',
    title: 'Downloads',
    text: 'Company profile, product brochures, datasheets and certificates.',
    count: `${downloads.length} files`,
  },
  {
    id: 'faq',
    icon: 'cfd',
    title: 'FAQ',
    text: 'Smoke control basics, system selection, testing regimes, compliance and maintenance.',
    count: `${faqs.reduce((n, g) => n + g.items.length, 0)} questions`,
  },
];

/* Tracks which resource section is currently in view so the hub cards above
   can give it a subtle active-state indication as the visitor scrolls. */
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

function StandardsSection() {
  const [active, setActive] = useState(standardFamilies[0].code);
  const family = standardFamilies.find((f) => f.code === active);

  return (
    <>
      <Section id="standards" tone="light" className="scroll-mt-[100px]">
        <div className="shell">
          <SectionHead
            eyebrow="Standards reference"
            title="Which code says what"
            lede="Most Asia-Pacific projects reference more than one family at once. The engineering task is identifying which requirement governs — then designing to that, not to all of them."
          />

          <div className="mt-12 flex flex-wrap gap-2">
            {standardFamilies.map((f) => (
              <button
                key={f.code}
                type="button"
                onClick={() => setActive(f.code)}
                className={`border px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.13em] transition-all ${
                  active === f.code
                    ? 'border-signal-600 bg-signal-600 text-white'
                    : 'border-steel-200 text-navy-800 hover:border-navy-800'
                }`}
              >
                {f.code}
              </button>
            ))}
          </div>

          {family ? (
            <div key={family.code} className="mt-10 grid gap-10 border border-steel-200 p-8 md:p-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
              <div style={{ animation: 'floatUp .5s cubic-bezier(.22,1,.36,1) both' }}>
                <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-600">{family.body}</p>
                <h3 className="h2 mt-4 text-navy-900">{family.name}</h3>
                <p className="mt-5 text-[15.5px] leading-relaxed text-steel-600">{family.summary}</p>
              </div>
              <div>
                <p className="label">Key documents</p>
                <ul className="mt-4 divide-y divide-steel-200 border-y border-steel-200">
                  {family.parts.map(([code, title], i) => (
                    <li
                      key={code}
                      className="flex flex-wrap items-baseline gap-x-5 gap-y-1 py-3.5"
                      style={{ animation: `floatUp .45s cubic-bezier(.22,1,.36,1) ${i * 45}ms both` }}
                    >
                      <span className="min-w-[140px] font-display text-[15px] font-semibold text-navy-900">
                        {code}
                      </span>
                      <span className="text-[14px] text-steel-600">{title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </Section>

      <Section tone="tint">
        <div className="shell">
          <SectionHead
            eyebrow="Compliance matrix"
            title="Which standards apply to which building type"
            lede="An indicative mapping to start the conversation. The authority having jurisdiction always sets the governing basis of design."
          />
          <Reveal delay={120}>
            <div className="mt-12">
              <ComplianceMatrix />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function TechnicalLibrarySection() {
  return (
    <Section id="library" tone="light" className="scroll-mt-[100px]">
      <div className="shell space-y-16">
        {library.map((group, gi) => (
          <div key={group.category}>
            <SectionHead eyebrow={`0${gi + 1}`} title={group.category} />
            <div className="mt-10 grid gap-px bg-steel-200 md:grid-cols-3">
              {group.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <article className="group flex h-full flex-col bg-white p-7">
                    <Icon name="drawing" className="h-7 w-7 text-navy-700 transition-colors group-hover:text-signal-600" />
                    <h3 className="mt-6 font-display text-[18px] font-semibold leading-tight text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500">{item.note}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-steel-200 pt-5">
                      <span className="text-[11.5px] uppercase tracking-[0.12em] text-steel-500">{item.meta}</span>
                      <button type="button" className="link-arrow">
                        Request
                        <Icon name="arrow" className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal>
          <p className="border-l-2 border-signal-600 bg-navy-50 px-6 py-5 text-[13.5px] leading-relaxed text-steel-600">
            Documents are issued on request so we can confirm the correct revision for your project. Connect the{' '}
            <span className="font-semibold text-navy-900">Request</span> buttons to your document management or CRM
            system when the site goes live. {/* TODO */}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function DownloadsSection() {
  return (
    <Section id="downloads" tone="tint" className="scroll-mt-[100px]">
      <div className="shell">
        <SectionHead
          eyebrow="Document centre"
          title="Specification and coordination files"
          lede="Files marked as certificates are issued against a specific product configuration — always confirm the revision against your project specification."
        />

        <div className="mt-12 space-y-px bg-steel-200">
          {downloads.map((d, i) => (
            <Reveal key={d.title} delay={(i % 5) * 55}>
              <div className="group grid gap-4 bg-white p-6 transition-colors hover:bg-navy-50 md:grid-cols-[auto_1.2fr_1.6fr_auto_auto] md:items-center md:gap-8">
                <span className="flex h-12 w-12 items-center justify-center bg-navy-900 text-signal-400 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                  <Icon name="download" className="h-5 w-5" />
                </span>
                <span className="font-display text-[17px] font-semibold leading-tight text-navy-900">{d.title}</span>
                <span className="text-[13.5px] leading-relaxed text-steel-500">{d.desc}</span>
                <span className="flex gap-2">
                  <span className="chip">{d.type}</span>
                  <span className="chip !border-transparent !bg-navy-50">{d.size}</span>
                </span>
                <button type="button" className="btn-outline !py-3">
                  Download
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-10 border-l-2 border-signal-600 bg-navy-50 px-6 py-5 text-[13.5px] leading-relaxed text-steel-600">
            Wire each Download button to the real asset (or to a gated form) before launch. File names, sizes and
            descriptions are placeholders. {/* TODO */}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section id="faq" tone="light" className="scroll-mt-[100px]">
      <div className="shell">
        <SectionHead
          eyebrow="Resources"
          title="Frequently asked questions"
          lede="The questions consultants, contractors and building owners ask us most often — answered plainly."
        />
      </div>
      <div className="shell mt-14 grid gap-14 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-20">
        <Reveal>
          <nav className="sticky top-32 space-y-1">
            <p className="label">Jump to</p>
            {faqs.map((g) => (
              <a
                key={g.group}
                href={`#${g.group.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                className="block border-l-2 border-steel-200 py-2 pl-4 text-[14px] text-steel-600 transition-colors hover:border-signal-600 hover:text-navy-900"
              >
                {g.group}
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="space-y-16">
          {faqs.map((g) => (
            <div key={g.group} id={g.group.toLowerCase().replace(/[^a-z]+/g, '-')} className="scroll-mt-40">
              <SectionHead eyebrow="FAQ" title={g.group} />
              <div className="mt-8">
                <Accordion items={g.items} defaultOpen={0} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default function ResourcesIndex() {
  const activeId = useActiveSection(hubs.map((h) => h.id));

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
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((h, i) => {
              const active = activeId === h.id;
              return (
                <Reveal key={h.id} delay={(i % 3) * 80}>
                  <a
                    href={`#${h.id}`}
                    aria-current={active}
                    className={`group flex h-full flex-col bg-white p-8 transition-colors hover:bg-navy-950 ${
                      active ? 'bg-navy-50' : ''
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center text-navy-800 transition-colors group-hover:bg-signal-600 group-hover:text-white ${
                        active ? 'bg-signal-600 text-white' : 'bg-navy-50'
                      }`}
                    >
                      <Icon name={h.icon} className="h-6 w-6" />
                    </span>
                    <h3
                      className={`mt-6 font-display text-[20px] font-semibold transition-colors group-hover:text-white ${
                        active ? 'text-signal-700' : 'text-navy-900'
                      }`}
                    >
                      {h.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500 transition-colors group-hover:text-navy-300">
                      {h.text}
                    </p>
                    <span className="mt-6 flex items-center justify-between text-[11.5px] font-semibold uppercase tracking-[0.13em] text-signal-600 group-hover:text-signal-400">
                      {h.count}
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <StandardsSection />
      <TechnicalLibrarySection />
      <DownloadsSection />
      <FaqSection />

      <CTASection
        title="Cannot find the document you need?"
        text="Tell us what you are specifying and we will send the relevant datasheets, certificates and calculation notes directly."
        secondary={{ label: 'Downloads', to: '/resources/downloads' }}
      />
    </>
  );
}
