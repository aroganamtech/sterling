import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import Section, { SectionHead } from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { contactChannels, offices } from '../data/company';
import { enquiryRouting, projectTypes } from '../data/resources';

const countries = [
  'Singapore',
  'Malaysia',
  'Indonesia',
  'India',
  'Thailand',
  'Vietnam',
  'Philippines',
  'Australia',
  'United Arab Emirates',
  'Saudi Arabia',
  'Sri Lanka',
  'Other',
];

const empty = {
  name: '',
  company: '',
  designation: '',
  email: '',
  phone: '',
  projectType: '',
  country: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const routing = useMemo(() => {
    if (!form.projectType) return null;
    return enquiryRouting[form.projectType] || { team: 'Engineering & Commercial', channel: 'general' };
  }, [form.projectType]);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((x) => ({ ...x, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please tell us your name';
    if (!form.email.trim()) e.email = 'We need an email to reply to';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = 'That email does not look right';
    if (!form.projectType) e.projectType = 'Select a project type so we route this correctly';
    if (!form.message.trim() || form.message.trim().length < 12) e.message = 'A sentence or two about the project helps';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    /* TODO — connect to your backend, CRM or form service (e.g. POST /api/enquiry).
       The payload below is ready to send as-is. */
    // eslint-disable-next-line no-console
    console.log('Enquiry payload', { ...form, routedTo: routing });
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our engineers"
        lede="Technical enquiries reach an engineer, not a call centre. Tell us the building, the strategy or the constraint and we will come back with an engineering view."
        breadcrumbs={[{ label: 'Contact' }]}
        compact
      />

      <Section tone="light">
        <div className="shell grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          {/* form */}
          <div>
            <SectionHead
              eyebrow="Enquiry"
              title="Send us the project"
              lede="Select a project type and your enquiry is routed straight to the right team."
            />

            {sent ? (
              <div className="mt-10 border border-steel-200 bg-navy-50 p-10 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center bg-signal-600 text-white">
                  <Icon name="check" className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="h3 mt-6 text-navy-900">Enquiry ready to send</h3>
                <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-steel-600">
                  Routed to <span className="font-semibold text-navy-900">{routing?.team}</span>. Connect the form to
                  your backend or CRM and this becomes a live submission.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(empty);
                    setSent(false);
                  }}
                  className="btn-outline mt-8"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="name">
                      Name *
                    </label>
                    <input id="name" className="field" value={form.name} onChange={set('name')} placeholder="Full name" />
                    {errors.name ? <p className="mt-1.5 text-[12px] text-signal-600">{errors.name}</p> : null}
                  </div>
                  <div>
                    <label className="label" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      className="field"
                      value={form.company}
                      onChange={set('company')}
                      placeholder="Organisation"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="designation">
                      Designation
                    </label>
                    <input
                      id="designation"
                      className="field"
                      value={form.designation}
                      onChange={set('designation')}
                      placeholder="e.g. MEP Consultant"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="field"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="name@company.com"
                    />
                    {errors.email ? <p className="mt-1.5 text-[12px] text-signal-600">{errors.email}</p> : null}
                  </div>
                  <div>
                    <label className="label" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      className="field"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder="Include country code"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="country">
                      Country
                    </label>
                    <select id="country" className="field" value={form.country} onChange={set('country')}>
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label" htmlFor="projectType">
                    Project type *
                  </label>
                  <select id="projectType" className="field" value={form.projectType} onChange={set('projectType')}>
                    <option value="">Select project type</option>
                    {projectTypes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  {errors.projectType ? (
                    <p className="mt-1.5 text-[12px] text-signal-600">{errors.projectType}</p>
                  ) : null}
                  {routing ? (
                    <p
                      className="mt-3 flex items-center gap-2.5 border-l-2 border-signal-600 bg-navy-50 px-4 py-3 text-[13px] text-steel-600"
                      style={{ animation: 'floatUp .4s cubic-bezier(.22,1,.36,1) both' }}
                    >
                      <Icon name="target" className="h-4 w-4 shrink-0 text-signal-600" />
                      Routing to <span className="font-semibold text-navy-900">{routing.team}</span> ·{' '}
                      <a
                        href={`mailto:${contactChannels[routing.channel]}`}
                        className="underline underline-offset-4 hover:text-navy-900"
                      >
                        {contactChannels[routing.channel]}
                      </a>
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="label" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="field resize-y"
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Building type, approximate size, stage of design, the constraint you are working around…"
                  />
                  {errors.message ? <p className="mt-1.5 text-[12px] text-signal-600">{errors.message}</p> : null}
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <button type="submit" className="btn-primary">
                    Send enquiry
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                  <p className="text-[12.5px] text-steel-400">We reply to technical enquiries within one working day.</p>
                </div>
              </form>
            )}
          </div>

          {/* offices */}
          <Reveal delay={120}>
            <div className="space-y-px bg-steel-200 lg:sticky lg:top-32">
              {offices.map((o) => (
                <div key={o.id} className="bg-white p-7">
                  <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-600">{o.country}</p>
                  <h3 className="mt-2 font-display text-[19px] font-semibold uppercase text-navy-900">{o.label}</h3>
                  <p className="mt-1.5 text-[13px] text-steel-500">{o.role}</p>
                  <address className="mt-5 space-y-1 text-[14px] not-italic leading-relaxed text-steel-600">
                    {o.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                  <div className="mt-4 space-y-2 text-[14px]">
                    <a
                      href={`tel:${o.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2.5 text-navy-900 hover:text-signal-600"
                    >
                      <Icon name="phone" className="h-4 w-4 text-steel-400" />
                      {o.phone}
                    </a>
                    <a
                      href={`mailto:${o.email}`}
                      className="flex items-center gap-2.5 break-all text-navy-900 hover:text-signal-600"
                    >
                      <Icon name="mail" className="h-4 w-4 shrink-0 text-steel-400" />
                      {o.email}
                    </a>
                  </div>
                </div>
              ))}

              <div className="bg-navy-950 p-7 text-white">
                <span className="eyebrow-light">Direct channels</span>
                <ul className="mt-5 space-y-3 text-[14px]">
                  {[
                    ['General enquiries', contactChannels.general],
                    ['Engineering & modelling', contactChannels.engineering],
                    ['Service & maintenance', contactChannels.service],
                    ['Careers', contactChannels.careers],
                  ].map(([label, email]) => (
                    <li key={email} className="flex flex-col border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <span className="text-[11px] uppercase tracking-[0.14em] text-navy-400">{label}</span>
                      <a href={`mailto:${email}`} className="mt-1 break-all text-navy-100 hover:text-white">
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint" padded={false}>
        <div className="grid md:grid-cols-2">
          {offices.map((o) => (
            <iframe
              key={o.id}
              title={`${o.label} location`}
              src={o.map}
              className="h-[340px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
