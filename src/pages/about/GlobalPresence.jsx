import PageHero, { CTASection } from '../../components/PageHero';
import Section, { SectionHead } from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import CoverageMap from '../../components/CoverageMap';
import { offices, presence } from '../../data/company';

export default function GlobalPresence() {
  return (
    <>
      <PageHero
        eyebrow="Global presence"
        title="Where we operate"
        lede="A Singapore headquarters for commercial and engineering leadership, an engineering and operations centre in India, and project delivery across Asia-Pacific and the Middle East."
        breadcrumbs={[{ label: 'About Us', to: '/about' }, { label: 'Global Presence' }]}
      />

      <section className="bg-navy-950 py-20 md:py-24">
        <div className="shell">
          <CoverageMap />
        </div>
      </section>

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Territories"
            title="Regional coverage"
            lede="Direct delivery in our core markets, supported by a partner network elsewhere in the region."
          />
          <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-5">
            {presence.map((p, i) => (
              <Reveal key={p.region} delay={(i % 5) * 60}>
                <div className="h-full bg-white px-6 py-7">
                  <Icon name="pin" className="h-5 w-5 text-signal-600" />
                  <p className="mt-4 font-display text-[16px] font-semibold text-navy-900">{p.region}</p>
                  <p className="mt-1.5 text-[12.5px] text-steel-500">{p.status}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="shell">
          <SectionHead eyebrow="Offices" title="Talk to the right office" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {offices.map((o, i) => (
              <Reveal key={o.id} delay={i * 110}>
                <div className="flex h-full flex-col border border-steel-200 bg-white">
                  <div className="border-b border-steel-200 px-8 py-7">
                    <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-600">{o.country}</p>
                    <h3 className="h3 mt-2 text-navy-900">{o.label}</h3>
                    <p className="mt-2 text-[13.5px] text-steel-500">{o.role}</p>
                  </div>
                  <div className="grid flex-1 gap-6 px-8 py-7 sm:grid-cols-2">
                    <div>
                      <p className="label">Address</p>
                      <address className="space-y-1 text-[14px] not-italic leading-relaxed text-steel-600">
                        {o.lines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </address>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="label">Phone</p>
                        <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="text-[14px] text-navy-900 hover:text-signal-600">
                          {o.phone}
                        </a>
                      </div>
                      <div>
                        <p className="label">Email</p>
                        <a href={`mailto:${o.email}`} className="break-all text-[14px] text-navy-900 hover:text-signal-600">
                          {o.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="h-56 w-full border-t border-steel-200 grayscale">
                    <iframe
                      title={`${o.label} map`}
                      src={o.map}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Working outside our core markets?"
        text="We support projects across the wider region through our partner network. Tell us where the project is and we will tell you how we would deliver it."
        secondary={{ label: 'Contact us', to: '/contact' }}
      />
    </>
  );
}
