import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { industries } from '../data/industries';
import { getSolution } from '../data/solutions';

export default function SolutionFinder() {
  const [active, setActive] = useState(industries[6].slug); // Shopping Malls
  const industry = industries.find((i) => i.slug === active) || industries[0];

  return (
    <div className="grid gap-px border border-steel-200 bg-steel-200 lg:grid-cols-[minmax(0,300px)_1fr]">
      {/* selector */}
      <div className="bg-white">
        <div className="border-b border-steel-200 px-6 py-5">
          <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-steel-400">Step 1</p>
          <p className="mt-1.5 font-display text-[18px] font-semibold text-navy-900">Select building type</p>
        </div>
        <div className="max-h-[430px] overflow-y-auto">
          {industries.map((i) => {
            const on = i.slug === active;
            return (
              <button
                key={i.slug}
                type="button"
                onClick={() => setActive(i.slug)}
                className={`flex w-full items-center gap-3 border-l-[3px] px-6 py-3 text-left text-[14px] transition-all ${
                  on
                    ? 'border-signal-600 bg-navy-50 font-semibold text-navy-900'
                    : 'border-transparent text-steel-600 hover:border-steel-300 hover:bg-steel-50'
                }`}
              >
                <Icon name={i.icon} className={`h-[18px] w-[18px] ${on ? 'text-signal-600' : 'text-steel-400'}`} />
                {i.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* result */}
      <div className="bg-white p-7 md:p-9">
        <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-steel-400">Step 2 · Recommended systems</p>
        <h3 className="h3 mt-3 text-navy-900">{industry.title}</h3>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel-600">{industry.overview}</p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {industry.solutions.map((slug, idx) => {
            const s = getSolution(slug);
            if (!s) return null;
            return (
              <Link
                key={slug}
                to={`/solutions/${s.slug}`}
                className="group flex items-start gap-4 border border-steel-200 p-4 transition-all hover:-translate-y-0.5 hover:border-navy-300 hover:shadow-card"
                style={{ animation: `floatUp .5s cubic-bezier(.22,1,.36,1) ${idx * 70}ms both` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy-900 text-signal-400 transition-colors group-hover:bg-signal-600 group-hover:text-white">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[14.5px] font-semibold text-navy-900">{s.title}</span>
                  <span className="mt-0.5 block text-[12.5px] leading-snug text-steel-500">{s.menuBlurb}</span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-steel-200 pt-6">
          <span className="text-[10.5px] font-bold uppercase tracking-widest2 text-steel-400">Typical basis</span>
          {industry.standards.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={`/industries/${industry.slug}`} className="btn-outline !py-3">
            Industry detail
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-primary !py-3">
            Discuss this building type
          </Link>
        </div>
      </div>
    </div>
  );
}
