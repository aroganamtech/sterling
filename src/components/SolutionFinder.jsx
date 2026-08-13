import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { getSolution } from '../data/solutions';

/* Building types and the Sterling solution families typically involved.
   Indicative only — the systems actually required are set by the building's
   fire safety strategy and the applicable Singapore requirements. */
const buildingTypes = [
  {
    id: 'retail',
    title: 'Shopping Malls & Retail',
    icon: 'retail',
    solutions: ['smoke-curtains', 'smoke-ventilation', 'engineering-system-integration', 'testing-lifecycle-support'],
  },
  {
    id: 'office',
    title: 'Offices & Mixed-Use',
    icon: 'office',
    solutions: ['smoke-ventilation', 'mechanical-ventilation', 'engineering-system-integration', 'testing-lifecycle-support'],
  },
  {
    id: 'airport',
    title: 'Airports & Transport',
    icon: 'plane',
    solutions: ['smoke-curtains', 'smoke-ventilation', 'engineering-system-integration', 'testing-lifecycle-support'],
  },
  {
    id: 'metro',
    title: 'Metro & Rail',
    icon: 'metro',
    solutions: ['smoke-ventilation', 'mechanical-ventilation', 'engineering-system-integration', 'testing-lifecycle-support'],
  },
  {
    id: 'healthcare',
    title: 'Hospitals & Healthcare',
    icon: 'health',
    solutions: ['smoke-curtains', 'smoke-ventilation', 'mechanical-ventilation', 'testing-lifecycle-support'],
  },
  {
    id: 'hotel',
    title: 'Hotels & Hospitality',
    icon: 'hotel',
    solutions: ['smoke-ventilation', 'mechanical-ventilation', 'engineering-system-integration', 'testing-lifecycle-support'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    icon: 'factory',
    solutions: ['natural-ventilation', 'smoke-ventilation', 'mechanical-ventilation', 'testing-lifecycle-support'],
  },
  {
    id: 'warehouse',
    title: 'Warehouses & Logistics',
    icon: 'box',
    solutions: ['natural-ventilation', 'smoke-ventilation', 'engineering-system-integration', 'testing-lifecycle-support'],
  },
  {
    id: 'carpark',
    title: 'Car Parks',
    icon: 'car',
    solutions: ['mechanical-ventilation', 'smoke-ventilation', 'engineering-system-integration', 'testing-lifecycle-support'],
  },
  {
    id: 'datacentre',
    title: 'Data Centres',
    icon: 'data',
    solutions: ['mechanical-ventilation', 'smoke-ventilation', 'engineering-system-integration', 'testing-lifecycle-support'],
  },
];

export default function SolutionFinder() {
  const [active, setActive] = useState(buildingTypes[0].id);
  const building = buildingTypes.find((b) => b.id === active) || buildingTypes[0];

  return (
    <div className="grid gap-px border border-steel-200 bg-steel-200 lg:grid-cols-[minmax(0,300px)_1fr]">
      {/* selector */}
      <div className="bg-white">
        <div className="border-b border-steel-200 px-6 py-5">
          <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-steel-400">Step 1</p>
          <p className="mt-1.5 font-display text-[18px] font-semibold text-navy-900">Select building type</p>
        </div>
        <div className="max-h-[430px] overflow-y-auto">
          {buildingTypes.map((b) => {
            const on = b.id === active;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setActive(b.id)}
                className={`flex w-full items-center gap-3 border-l-[3px] px-6 py-3 text-left text-[14px] transition-all ${
                  on
                    ? 'border-signal-600 bg-navy-50 font-semibold text-navy-900'
                    : 'border-transparent text-steel-600 hover:border-steel-300 hover:bg-steel-50'
                }`}
              >
                <Icon name={b.icon} className={`h-[18px] w-[18px] ${on ? 'text-signal-600' : 'text-steel-400'}`} />
                {b.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* result */}
      <div className="bg-white p-7 md:p-9">
        <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-steel-400">Step 2 · Typical solutions</p>
        <h3 className="h3 mt-3 text-navy-900">{building.title}</h3>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel-600">
          The Sterling solution families most often involved in this building type. The systems actually required are
          set by the building’s fire safety strategy, configuration and the applicable Singapore requirements.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {building.solutions.map((slug, idx) => {
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

        <div className="mt-7 flex flex-wrap gap-3 border-t border-steel-200 pt-6">
          <Link to="/solutions" className="btn-outline !py-3">
            All solutions
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
