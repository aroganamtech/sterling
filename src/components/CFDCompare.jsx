import { useState } from 'react';

function Scene({ mode }) {
  const managed = mode === 'managed';
  const id = managed ? 'm' : 'u';
  return (
    <svg viewBox="0 0 960 480" className="h-full w-full" role="img" aria-label={`${mode} smoke scenario`}>
      <defs>
        <filter id={`turb-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="4" seed={managed ? 7 : 3} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="42" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <linearGradient id={`smoke-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff3b52" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#e0002a" stopOpacity="0.85" />
          <stop offset="75%" stopColor="#8a0b20" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2b0206" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id={`floor-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
      </defs>

      <rect width="960" height="480" fill="#050505" />

      {/* structure */}
      <g stroke="#8c8c8c" strokeOpacity="0.42" fill="none" strokeWidth="1.4">
        <path d="M70 44 h820 v392 h-820 z" />
        <path d="M70 200 h250 M640 200 h250" />
        <path d="M70 320 h250 M640 320 h250" />
        <path d="M320 44 v392 M640 44 v392" strokeDasharray="4 7" strokeOpacity="0.22" />
      </g>

      {/* smoke */}
      <g filter={`url(#turb-${id})`} opacity="0.9">
        {managed ? (
          <>
            <rect x="330" y="52" width="560" height="104" fill={`url(#smoke-${id})`} />
            <ellipse cx="500" cy="150" rx="150" ry="34" fill={`url(#smoke-${id})`} opacity="0.7" />
            <path d="M470 420 C455 330 495 250 510 160 h60 c-10 90 -40 170 -30 260 z" fill={`url(#smoke-${id})`} opacity="0.8" />
          </>
        ) : (
          <>
            <rect x="90" y="52" width="800" height="230" fill={`url(#smoke-${id})`} />
            <ellipse cx="480" cy="300" rx="380" ry="80" fill={`url(#smoke-${id})`} opacity="0.75" />
            <ellipse cx="250" cy="360" rx="200" ry="60" fill={`url(#smoke-${id})`} opacity="0.5" />
            <ellipse cx="760" cy="370" rx="180" ry="55" fill={`url(#smoke-${id})`} opacity="0.45" />
          </>
        )}
      </g>

      {/* smoke curtains + vents on the managed side */}
      {managed ? (
        <g>
          <rect x="322" y="46" width="8" height="112" fill="#c8102e" />
          <rect x="316" y="152" width="20" height="7" fill="#ff3b52" />
          <g stroke="#bfbfbf" strokeWidth="2" fill="none">
            <path d="M700 44 l30 -18 M760 44 l30 -18" />
          </g>
          <text x="742" y="20" fill="#bfbfbf" fontSize="12" textAnchor="middle" letterSpacing="0.08em">
            VENT OPEN
          </text>
          {/* clear layer dimension */}
          <g stroke="#ffffff" strokeWidth="1.3">
            <path d="M380 170 v240 M370 176 h20 M370 404 h20" />
          </g>
          <text x="398" y="296" fill="#ffffff" fontSize="14" fontWeight="600" letterSpacing="0.06em">
            CLEAR LAYER MAINTAINED
          </text>
        </g>
      ) : (
        <g>
          <text x="480" y="420" fill="#ff3b52" fontSize="14" fontWeight="600" textAnchor="middle" letterSpacing="0.08em">
            SMOKE LOGGING AT HEAD HEIGHT
          </text>
          <g stroke="#ff3b52" strokeWidth="1.3" strokeDasharray="6 6">
            <path d="M90 358 h780" />
          </g>
        </g>
      )}

      {/* people for scale */}
      <g fill="#bfbfbf" opacity={managed ? 0.9 : 0.35}>
        {[180, 240, 700, 760, 820].map((x) => (
          <g key={x} transform={`translate(${x} 436)`}>
            <circle cx="0" cy="-26" r="5" />
            <path d="M0 -21 v14 M0 -7 l-6 9 M0 -7 l6 9 M-7 -16 h14" stroke="#bfbfbf" strokeWidth="2.4" fill="none" />
          </g>
        ))}
      </g>

      <rect x="70" y="436" width="820" height="8" fill={`url(#floor-${id})`} />
    </svg>
  );
}

export default function CFDCompare() {
  const [pos, setPos] = useState(52);

  return (
    <div>
      <div className="relative select-none overflow-hidden border border-white/10 bg-navy-950">
        <div className="relative aspect-[2/1] w-full">
          <div className="absolute inset-0">
            <Scene mode="unmanaged" />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <Scene mode="managed" />
          </div>

          {/* labels */}
          <span className="pointer-events-none absolute left-0 top-0 bg-signal-600/90 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white">
            Without engineered smoke control
          </span>
          <span className="pointer-events-none absolute right-0 top-0 bg-white/90 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-navy-900">
            Sterling engineered system
          </span>

          {/* divider */}
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-white/80"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-navy-950/80 text-white backdrop-blur">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <input
            type="range"
            min="4"
            max="96"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Compare unmanaged and engineered smoke scenarios"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
      <p className="mt-4 text-[12.5px] text-navy-400">
        Illustrative comparison. Every project is verified with scenario-specific CFD against the agreed design fires
        and tenability criteria.
      </p>
    </div>
  );
}
