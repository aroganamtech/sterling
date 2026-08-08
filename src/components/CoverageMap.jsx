import { useState } from 'react';
import { presence } from '../data/company';
import { useInView } from './Reveal';

const W = 1000;
const H = 560;

// re-frame the Asia-Pacific window from the source coordinates
const px = (x) => ((x - 50) / 36) * W;
const py = (y) => ((y - 38) / 46) * H;

const hub = presence[0];

export default function CoverageMap() {
  const [active, setActive] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative overflow-hidden border border-white/10 bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <svg viewBox={`0 0 ${W} ${H}`} className="relative w-full" role="img" aria-label="Regional coverage map">
        <defs>
          <radialGradient id="cov-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#c8102e" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#c8102e" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={px(hub.x)} cy={py(hub.y)} r="230" fill="url(#cov-glow)" />

        {/* graticule */}
        <g stroke="#5d7cae" strokeOpacity="0.16" strokeWidth="1">
          {Array.from({ length: 9 }, (_, i) => (
            <path key={`h${i}`} d={`M0 ${(i + 1) * (H / 10)} H${W}`} />
          ))}
          {Array.from({ length: 13 }, (_, i) => (
            <path key={`v${i}`} d={`M${(i + 1) * (W / 14)} 0 V${H}`} />
          ))}
        </g>

        {/* connection arcs from the hub */}
        <g fill="none" stroke="#e2405d" strokeWidth="1.2" strokeOpacity="0.5">
          {presence.slice(1).map((p, i) => {
            const x1 = px(hub.x);
            const y1 = py(hub.y);
            const x2 = px(p.x);
            const y2 = py(p.y);
            const mx = (x1 + x2) / 2;
            const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.28 - 30;
            return (
              <path
                key={p.region}
                d={`M${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                strokeDasharray="1000"
                strokeDashoffset={inView ? 0 : 1000}
                opacity={active && active !== p.region ? 0.18 : 0.55}
                style={{ transition: `stroke-dashoffset 1.6s ease ${i * 130}ms, opacity .3s ease` }}
              />
            );
          })}
        </g>

        {/* markers */}
        {presence.map((p, i) => {
          const isHub = p.region === hub.region;
          const on = active === p.region;
          return (
            <g
              key={p.region}
              transform={`translate(${px(p.x)} ${py(p.y)})`}
              onMouseEnter={() => setActive(p.region)}
              onMouseLeave={() => setActive(null)}
              className="cursor-pointer"
              style={{ opacity: inView ? 1 : 0, transition: `opacity .5s ease ${i * 90}ms` }}
            >
              {isHub ? (
                <>
                  <circle r="18" fill="none" stroke="#c8102e" strokeWidth="1.2" opacity="0.7">
                    <animate attributeName="r" values="10;30" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.75;0" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                  <circle r="8" fill="#c8102e" />
                  <circle r="3.4" fill="#fff" />
                </>
              ) : (
                <>
                  <circle r={on ? 11 : 8} fill="#111d38" stroke="#93a9cd" strokeWidth="1.3" />
                  <circle r="3" fill={on ? '#f07084' : '#5d7cae'} />
                </>
              )}
              <text
                y={isHub ? 34 : 28}
                textAnchor="middle"
                fontSize="15"
                fontWeight="600"
                letterSpacing="0.05em"
                fill={on || isHub ? '#ffffff' : '#93a9cd'}
              >
                {p.region}
              </text>
              {on ? (
                <text y={isHub ? 54 : 48} textAnchor="middle" fontSize="13" fill="#f07084">
                  {p.status}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>

      <div className="relative flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 px-6 py-4 text-[12px] text-navy-300">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-signal-600" /> Head office
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full border border-steel-400 bg-navy-900" /> Projects, service &
          partner network
        </span>
        <span className="ml-auto hidden text-navy-500 sm:block">Hover a territory for detail</span>
      </div>
    </div>
  );
}
