import { useState } from 'react';
import { complianceMatrix } from '../data/resources';

const tone = {
  3: 'bg-signal-600 text-white',
  2: 'bg-navy-700 text-white',
  1: 'bg-navy-200 text-navy-800',
  0: 'bg-steel-100 text-steel-400',
};

const short = { 3: 'Primary', 2: 'Common', 1: 'Partial', 0: '—' };

export default function ComplianceMatrix({ light = false }) {
  const [hover, setHover] = useState(null);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr>
              <th
                className={`sticky left-0 z-10 border-b px-4 py-4 text-[10.5px] font-bold uppercase tracking-widest2 ${
                  light ? 'border-white/15 bg-navy-950 text-navy-300' : 'border-steel-200 bg-white text-steel-400'
                }`}
              >
                Building type
              </th>
              {complianceMatrix.columns.map((c, ci) => (
                <th
                  key={c}
                  className={`border-b px-3 py-4 text-center text-[10.5px] font-bold uppercase tracking-[0.1em] transition-colors ${
                    light ? 'border-white/15' : 'border-steel-200'
                  } ${
                    hover?.c === ci
                      ? 'text-signal-500'
                      : light
                        ? 'text-navy-300'
                        : 'text-steel-500'
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {complianceMatrix.rows.map((row, ri) => (
              <tr key={row.type} className={hover?.r === ri ? (light ? 'bg-white/[0.04]' : 'bg-navy-50/70') : ''}>
                <th
                  scope="row"
                  className={`sticky left-0 z-10 border-b px-4 py-3 text-[13.5px] font-semibold ${
                    light
                      ? 'border-white/10 bg-navy-950 text-white'
                      : 'border-steel-100 bg-white text-navy-900'
                  }`}
                >
                  {row.type}
                </th>
                {row.values.map((v, ci) => (
                  <td
                    key={ci}
                    onMouseEnter={() => setHover({ r: ri, c: ci })}
                    onMouseLeave={() => setHover(null)}
                    className={`border-b px-3 py-3 text-center ${light ? 'border-white/10' : 'border-steel-100'}`}
                  >
                    <span
                      className={`inline-flex min-w-[74px] items-center justify-center px-2.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] transition-transform ${tone[v]} ${
                        hover?.r === ri && hover?.c === ci ? 'scale-105' : ''
                      }`}
                    >
                      {short[v]}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        {complianceMatrix.legend.map((l) => (
          <span key={l.level} className="flex items-center gap-2.5">
            <span className={`h-3 w-6 ${tone[l.level]}`} />
            <span className={`text-[12px] ${light ? 'text-navy-300' : 'text-steel-500'}`}>{l.label}</span>
          </span>
        ))}
      </div>
      <p className={`mt-4 text-[12px] ${light ? 'text-navy-400' : 'text-steel-400'}`}>
        Indicative only. The governing basis of design is set by the authority having jurisdiction and the
        project fire strategy.
      </p>
    </div>
  );
}
