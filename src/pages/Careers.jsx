import { Link } from 'react-router-dom';
import PageHero, { CTASection } from '../components/PageHero';
import Section, { SectionHead } from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { vacancies } from '../data/resources';
import { contactChannels } from '../data/company';

const benefits = [
  { icon: 'cfd', title: 'Technically serious work', text: 'Complex buildings, real analysis and engineering decisions that carry weight.' },
  { icon: 'users', title: 'Small teams, wide scope', text: 'Engineers here see a project from concept through commissioning, not one slice of it.' },
  { icon: 'globe', title: 'Regional exposure', text: 'Projects across Asia-Pacific and the Middle East, with travel where the work requires it.' },
  { icon: 'spark', title: 'Continuous development', text: 'Support for professional membership, code training and modelling software certification.' },
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Engineer work that matters"
        lede="We are a specialist practice. That means smaller teams, wider responsibility and engineering decisions that genuinely affect whether people get out of a building safely."
        breadcrumbs={[{ label: 'Careers' }]}
        actions={
          <a href={`mailto:${contactChannels.careers}`} className="btn-primary">
            Send your CV
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        }
      />

      <Section tone="light">
        <div className="shell">
          <SectionHead
            eyebrow="Why here"
            title="What working here is like"
            lede="Honest version: the projects are demanding, the deadlines are real and the technical bar is high. In return you get scope, ownership and work you can point at."
          />
          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="h-full bg-white p-7">
                  <span className="flex h-11 w-11 items-center justify-center bg-navy-900 text-signal-400">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-[17px] font-semibold uppercase leading-tight text-navy-900">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="shell">
          <SectionHead
            eyebrow="Open roles"
            title="Where we are hiring"
            lede="Roles across engineering, delivery and service in Singapore and India."
          />

          <div className="mt-12 space-y-px bg-steel-200">
            {vacancies.map((v, i) => (
              <Reveal key={v.role} delay={(i % 5) * 55}>
                <article className="grid gap-6 bg-white p-7 md:grid-cols-[1.1fr_1.6fr_auto] md:items-center md:gap-10 md:p-8">
                  <div>
                    <h3 className="font-display text-[20px] font-semibold uppercase leading-tight text-navy-900">
                      {v.role}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="chip">
                        <Icon name="pin" className="h-3 w-3" />
                        {v.location}
                      </span>
                      <span className="chip">{v.type}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-relaxed text-steel-600">{v.summary}</p>
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                      {v.requirements.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-[12.5px] text-steel-500">
                          <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-signal-600" strokeWidth={2} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href={`mailto:${contactChannels.careers}?subject=Application — ${v.role}`} className="btn-navy !py-3">
                    Apply
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-steel-200 bg-white p-8 md:flex-row md:items-center">
              <div>
                <h3 className="h3 text-navy-900">Nothing matching your discipline?</h3>
                <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-steel-600">
                  We hire good engineers when we meet them, whether or not a role is open. Send a CV and a short note
                  about the work you want to be doing.
                </p>
              </div>
              <a href={`mailto:${contactChannels.careers}`} className="btn-primary shrink-0">
                {contactChannels.careers}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Prefer to talk before applying?"
        text="Ask about the work, the team or how a project actually runs here. We are happy to have that conversation first."
        primary={{ label: 'Contact us', to: '/contact' }}
        secondary={{ label: 'About the practice', to: '/about' }}
      />
    </>
  );
}
