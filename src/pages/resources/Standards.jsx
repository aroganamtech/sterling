import { useState } from 'react';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import ComplianceMatrix from '../../components/ComplianceMatrix';
import { standardFamilies } from '../../data/resources';

export default function Standards() {
  const [active, setActive] = useState(standardFamilies[0].code);
  const family = standardFamilies.find((f) => f.code === active);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Design standards"
        lede="The code families that govern smoke control design across the region — what each one covers, and how they interact on a real project."
        breadcrumbs={[{ label: 'Resources', to: '/resources' }, { label: 'Design Standards' }]}
      />

      <Section tone="light">
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

      <CTASection
        title="Unsure which code governs your project?"
        text="Send us the location, the occupancy and the client standard. We will map the applicable requirements and tell you where they conflict."
        secondary={{ label: 'Compliance consulting', to: '/engineering/compliance-consulting' }}
      />
    </>
  );
}
