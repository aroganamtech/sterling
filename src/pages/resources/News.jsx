import { useState } from 'react';
import PageHero, { CTASection } from '../../components/PageHero';
import Section from '../../components/Section';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { news } from '../../data/resources';

const categories = ['All', ...Array.from(new Set(news.map((n) => n.category)))];

const fmt = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function News() {
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? news : news.filter((n) => n.category === filter);
  const [lead, ...rest] = list;

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="News & articles"
        lede="Code updates, engineering insight and lessons from projects across the region — written by the engineers who worked on them."
        breadcrumbs={[{ label: 'Resources', to: '/resources' }, { label: 'News & Articles' }]}
      />

      <Section tone="light">
        <div className="shell">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`border px-4 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] transition-all ${
                  filter === c
                    ? 'border-signal-600 bg-signal-600 text-white'
                    : 'border-steel-200 text-navy-800 hover:border-navy-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {lead ? (
            <Reveal>
              <article className="mt-12 grid gap-px border border-steel-200 bg-steel-200 lg:grid-cols-[1.2fr_1fr]">
                <div className="relative isolate min-h-[240px] overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
                  <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-signal-600/30 blur-3xl" />
                  <span className="absolute bottom-6 left-7 text-[10.5px] font-bold uppercase tracking-widest2 text-white/80">
                    Featured
                  </span>
                </div>
                <div className="flex flex-col justify-center bg-white p-8 md:p-10">
                  <span className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-600">
                    {lead.category}
                  </span>
                  <h2 className="h2 mt-4 text-navy-900">{lead.title}</h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-steel-600">{lead.excerpt}</p>
                  <div className="mt-7 flex items-center justify-between border-t border-steel-200 pt-5">
                    <time className="text-[12.5px] text-steel-400">{fmt(lead.date)}</time>
                    <button type="button" className="link-arrow">
                      Read article
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ) : null}

          <div className="mt-8 grid gap-px bg-steel-200 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((n, i) => (
              <Reveal key={n.slug} delay={(i % 3) * 70}>
                <article className="group flex h-full flex-col bg-white p-7">
                  <span className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-600">
                    {n.category}
                  </span>
                  <h3 className="mt-4 font-display text-[19px] font-semibold leading-tight text-navy-900 transition-colors group-hover:text-signal-700">
                    {n.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-steel-500">{n.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-steel-200 pt-5">
                    <time className="text-[12px] text-steel-400">{fmt(n.date)}</time>
                    <Icon name="arrow" className="h-4 w-4 text-steel-400 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <p className="mt-10 border-l-2 border-signal-600 bg-navy-50 px-6 py-5 text-[13.5px] leading-relaxed text-steel-600">
              Article bodies are not yet written — connect this listing to your CMS or add individual article routes
              when the content is ready. {/* TODO */}
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Want these in your inbox?"
        text="We publish code updates and engineering notes a few times a quarter. No product marketing."
        secondary={{ label: 'Contact us', to: '/contact' }}
      />
    </>
  );
}
