import Seo from '../../components/Seo';
import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import { offices } from '../../data/company';

export default function GlobalCoverage() {
  const office = offices[0];

  return (
    <>
      <Seo
        title="Global Coverage | Asia & Australia | Sterling Ventilation"
        description="Operating from Singapore, Sterling Ventilation is authorised by its manufacturing partners to market and distribute their ventilation products across Asia and Australia."
        keywords="smoke control Singapore, ventilation distribution Asia, ventilation distribution Australia"
      />

      <PageHero
        eyebrow="Global Coverage"
        title="Where we operate"
        lede="Operating from Singapore, we are authorised by our manufacturing partners to market and distribute their ventilation products across Asia and Australia. This gives us the capability to support projects across the region while maintaining a strong engineering and technical base in Singapore."
        breadcrumbs={[{ label: 'About Us', to: '/about' }, { label: 'Global Coverage' }]}
      />

      <Section tone="light">
        <div className="shell">
          <Reveal>
            <p className="max-w-3xl text-[16px] leading-relaxed text-steel-600">
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
