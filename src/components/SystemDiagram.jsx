
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useInView } from './Reveal';

const nodes = [
  {
    id: 'detection',
    x: 300,
    y: 108,
    label: 'Detection',
    solution: null,
    text: 'Smoke and heat detection identifies the fire zone and hands the alarm signal to the cause-and-effect matrix within seconds.',
  },
  {
    id: 'curtain',
    x: 430,
    y: 148,
    label: 'Smoke Curtains',
    solution: 'smoke-curtains',
    text: 'Curtains descend to form the reservoir, closing the atrium void and holding the smoke layer where it can be extracted.',
  },
  {
    id: 'ventilator',
    x: 610,
    y: 74,
    label: 'Roof Ventilators',
    solution: 'smoke-ventilators',
    text: 'Natural ventilators open on the same signal, releasing buoyant hot gases through the tested aerodynamic free area.',
  },
  {
    id: 'extract',
    x: 782,
    y: 96,
    label: 'Extract Plant',
    solution: 'smoke-extraction-systems',
    text: 'F300 / F400 rated fans draw from the reservoir at the design extract rate, balanced against the make-up air provision.',
  },
  {
    id: 'makeup',
    x: 700,
    y: 300,
    label: 'Make-up Air',
    solution: 'smoke-extraction-systems',
    text: 'Low-level inlet air replaces the extracted volume at a controlled velocity, preventing plug-holing of the smoke layer.',
  },
  {
    id: 'pressurisation',
    x: 128,
    y: 168,
    label: 'Stair Pressurisation',
    solution: 'staircase-pressurization',
    text: 'The protected shaft is held at positive pressure so smoke cannot enter the escape route, with relief modulating door forces.',
  },
  {
    id: 'jetfan',
    x: 360,
    y: 392,
    label: 'Car Park Ventilation',
    solution: null,
    text: 'Impulse fans direct smoke away from escape routes toward the extract shaft, zoned to the level of the incident.',
  },
  {
    id: 'panel',
    x: 880,
    y: 300,
    label: 'Control & Automation',
    solution: null,
    text: 'The PLC smoke control panel executes the cause-and-effect sequence, monitors every device and presents firefighter override.',
  },
];

const links = [
  ['panel', 'detection'],
  ['panel', 'curtain'],
  ['panel', 'ventilator'],
  ['panel', 'extract'],
  ['panel', 'makeup'],
  ['panel', 'pressurisation'],
  ['panel', 'jetfan'],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function SystemDiagram() {
  const [active, setActive] = useState('curtain');
  const [ref, inView] = useInView({ threshold: 0.15 });
  const current = byId[active];

  return (
    <div ref={ref} className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
      <div className="relative overflow-hidden border border-white/10 bg-navy-950">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
        <svg viewBox="0 0 960 460" className="relative w-full" role="img" aria-label="Smoke control system architecture">
          <defs>
            <linearGradient id="sd-smoke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e2405d" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#e2405d" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sd-struct" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5d7cae" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#5d7cae" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* building envelope */}
          <g stroke="url(#sd-struct)" fill="none" strokeWidth="1.4">
            <path d="M60 60 h800 v290 h-800 z" />
            <path d="M60 350 h800 v76 h-800 z" />
            <path d="M60 200 h240 M470 200 h390" />
            <path d="M300 60 v290" strokeDasharray="4 6" opacity="0.7" />
            <path d="M60 128 h240" />
          </g>

          {/* smoke layer under the roof */}
          <path d="M310 66 h540 v56 c-120 26 -300 22 -420 8 -60 -8 -95 -26 -120 -30 z" fill="url(#sd-smoke)">
            <animate attributeName="opacity" values="0.65;1;0.65" dur="6s" repeatCount="indefinite" />
          </path>

          {/* fire source */}
          <g transform="translate(520 330)">
            <path
              d="M0 0 c-10 -16 4 -24 2 -38 8 8 20 14 20 26 0 8 -6 12 -12 12"
              fill="#e2405d"
              opacity="0.85"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1 1;1.08 1.12;1 1"
                dur="1.8s"
                repeatCount="indefinite"
                additive="sum"
              />
            </path>
          </g>
          {/* plume */}
          <path
            d="M524 322 C518 262 540 210 548 130"
            stroke="#e2405d"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="5 9"
            opacity="0.6"
          >
            <animate attributeName="stroke-dashoffset" values="0;-56" dur="2.4s" repeatCount="indefinite" />
          </path>

          {/* stair shaft */}
          <g stroke="#93a9cd" fill="none" strokeWidth="1.2" opacity="0.65">
            <path d="M96 340 v-8 h26 v-16 h26 v-16 h26 v-16" />
            <path d="M96 268 v-8 h26 v-16 h26 v-16 h26 v-16" />
          </g>

          {/* control links */}
          <g fill="none" stroke="#c8102e" strokeWidth="1.1" opacity="0.55">
            {links.map(([a, b]) => {
              const A = byId[a];
              const B = byId[b];
              const mx = (A.x + B.x) / 2;
              return (
                <path
                  key={`${a}-${b}`}
                  d={`M${A.x} ${A.y} C ${mx} ${A.y}, ${mx} ${B.y}, ${B.x} ${B.y}`}
                  strokeDasharray="3 7"
                  opacity={active === b ? 0.95 : 0.32}
                >
                  {inView ? (
                    <animate attributeName="stroke-dashoffset" values="0;-40" dur="2.2s" repeatCount="indefinite" />
                  ) : null}
                </path>
              );
            })}
          </g>

          {/* nodes */}
          {nodes.map((n, i) => {
            const on = n.id === active;
            return (
              <g
                key={n.id}
                transform={`translate(${n.x} ${n.y})`}
                onMouseEnter={() => setActive(n.id)}
                onClick={() => setActive(n.id)}
                className="cursor-pointer"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: `opacity .5s ease ${i * 90}ms`,
                }}
              >
                {on ? <circle r="22" fill="#c8102e" opacity="0.16" /> : null}
                <circle r="13" fill={on ? '#c8102e' : '#111d38'} stroke={on ? '#f07084' : '#5d7cae'} strokeWidth="1.4" />
                <circle r="4" fill={on ? '#fff' : '#93a9cd'} />
                <text
                  x="0"
                  y="-24"
                  textAnchor="middle"
                  fontSize="11.5"
                  fontWeight="600"
                  letterSpacing="0.06em"
                  fill={on ? '#ffffff' : '#93a9cd'}
                  style={{ textTransform: 'uppercase' }}
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex flex-col justify-center border border-white/10 bg-white/[0.03] p-7 md:p-8">
        <span className="eyebrow-light">Interactive</span>
        <h3 className="h3 mt-4 text-white">{current.label}</h3>
        <p className="mt-4 text-[15px] leading-relaxed text-navy-200">{current.text}</p>
        {current.solution ? (
          <Link to={`/solutions/${current.solution}`} className="link-arrow mt-7 !text-signal-400 hover:!text-white">
            View system
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-1.5 border-t border-white/10 pt-6">
          {nodes.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setActive(n.id)}
              className={`px-2.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] transition ${
                n.id === active
                  ? 'bg-signal-600 text-white'
                  : 'bg-white/5 text-navy-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
