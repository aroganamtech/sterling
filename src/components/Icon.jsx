/* Line-icon set. 24x24 grid, stroke based, currentColor. */
const P = {
  // --- solutions -----------------------------------------------------------
  curtain: (
    <>
      <path d="M2 4h20M4 4v9M8 4v11M12 4v9M16 4v11M20 4v9" />
      <path d="M3 17.5c1.6-1.6 3.2-1.6 4.8 0s3.2 1.6 4.8 0 3.2-1.6 4.8 0 2.2 1.4 3.6.6" />
      <path d="M4 21c1.5-1.4 3-1.4 4.5 0s3 1.4 4.5 0 3-1.4 4.5 0 2 1.2 3.3.5" />
    </>
  ),
  vent: (
    <>
      <path d="M2 17l10-5 10 5" />
      <path d="M4 17.8V21h16v-3.2" />
      <path d="M12 12V7" />
      <path d="M7.5 9.5l3-4.5 3 4.5" />
      <path d="M17 4c1.8 1 1.8 3 0 4s-1.8 3 0 4" />
    </>
  ),
  extract: (
    <>
      <circle cx="12" cy="10" r="6" />
      <path d="M12 10c0-3 1.2-4.4 3.4-4.4M12 10c2.6 1.5 3.3 3.2 2.2 5.1M12 10c-2.6 1.5-4.3.9-5.4-1" />
      <circle cx="12" cy="10" r="1.4" />
      <path d="M4 20h16M6 17.5v2.5M18 17.5v2.5" />
    </>
  ),
  stairs: (
    <>
      <path d="M3 21h4v-4h4v-4h4V9h4V5" />
      <path d="M3 21v-2M21 5h-2" />
      <path d="M6 13c0-2 1.5-3 1.5-4.5" />
      <path d="M10 9c0-2 1.5-3 1.5-4.5" />
    </>
  ),
  car: (
    <>
      <path d="M4 16v3M20 16v3" />
      <path d="M3 16h18v-4l-2-4H5L3 12z" />
      <circle cx="7" cy="16" r="1.6" />
      <circle cx="17" cy="16" r="1.6" />
      <path d="M4 5h6M4 8h4" />
    </>
  ),
  tunnel: (
    <>
      <path d="M3 21V13a9 9 0 0118 0v8" />
      <path d="M8 21v-8a4 4 0 018 0v8" />
      <path d="M2 21h20" />
      <path d="M12 17v-2" />
    </>
  ),
  plant: (
    <>
      <path d="M3 21V11l5 3V11l5 3V8l8 5v8z" />
      <path d="M2 21h20" />
      <path d="M6 8c0-2 1.5-2.5 1.5-4.5M10 8c0-2 1.5-2.5 1.5-4.5" />
    </>
  ),
  control: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M7 8h4M7 12h4M7 16h6" />
      <circle cx="16.5" cy="8.5" r="1.6" />
      <path d="M14 12.5h5M14 16h2" />
    </>
  ),
  // --- engineering ---------------------------------------------------------
  cfd: (
    <>
      <rect x="2.5" y="4" width="19" height="14" rx="1.5" />
      <path d="M5.5 14c2-4 4-4 6 0s4 4 6 0" />
      <path d="M5.5 10.5c2-3.5 4-3.5 6 0s4 3.5 6 0" />
      <path d="M9 21h6" />
    </>
  ),
  pbd: (
    <>
      <path d="M4 20V6l8-3 8 3v14" />
      <path d="M2 20h20" />
      <path d="M9 20v-6h6v6" />
      <path d="M12 7.5v3" />
    </>
  ),
  fire: (
    <>
      <path d="M12 3s5 4.2 5 9a5 5 0 01-10 0c0-2 1-3.4 2-4.5 0 1.6.8 2.5 1.8 2.5S13 8.8 12 3z" />
      <path d="M5 21h14" />
    </>
  ),
  bim: (
    <>
      <path d="M12 2.8l8 4.4v9.6l-8 4.4-8-4.4V7.2z" />
      <path d="M4 7.2l8 4.4 8-4.4M12 11.6V21" />
    </>
  ),
  drawing: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 8h18M8 3v18" />
      <path d="M11.5 12h6.5M11.5 12l2-2M11.5 12l2 2" />
      <path d="M11.5 16h6.5" />
    </>
  ),
  compliance: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14.5 3v4.5H19" />
      <path d="M9 13.5l2 2 4-4.5" />
    </>
  ),
  // --- industries ----------------------------------------------------------
  office: (
    <>
      <path d="M4 21V4h10v17M14 9h6v12" />
      <path d="M2 21h20" />
      <path d="M7 8h4M7 12h4M7 16h4M17 13h1M17 17h1" />
    </>
  ),
  plane: (
    <>
      <path d="M2.5 13l19-7-4 8 1.5 6-4-4-4.5 2.5.5-4z" />
      <path d="M3 20h8" />
    </>
  ),
  health: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="1" />
      <path d="M12 9v6M9 12h6" />
      <path d="M8 5V3h8v2" />
    </>
  ),
  hotel: (
    <>
      <path d="M3 21V6h18v15" />
      <path d="M2 21h20" />
      <path d="M7 10h3M14 10h3M7 14h3M14 14h3M10.5 21v-4h3v4" />
    </>
  ),
  metro: (
    <>
      <rect x="5" y="3" width="14" height="13" rx="2.5" />
      <path d="M5 9h14M8.5 12.5h.01M15.5 12.5h.01" />
      <path d="M7.5 16L5.5 21M16.5 16l2 5M4 21h16" />
    </>
  ),
  rail: (
    <>
      <path d="M4 21l4-6M20 21l-4-6" />
      <rect x="6" y="3" width="12" height="12" rx="1.5" />
      <path d="M6 9h12M9.5 12h.01M14.5 12h.01" />
      <path d="M2 21h20" />
    </>
  ),
  retail: (
    <>
      <path d="M3 8l1.5-4h15L21 8" />
      <path d="M4 8v13h16V8" />
      <path d="M3 8c0 1.5 1.2 2.5 2.6 2.5S8.2 9.5 8.2 8c0 1.5 1.2 2.5 2.6 2.5S13.4 9.5 13.4 8c0 1.5 1.2 2.5 2.6 2.5S18.6 9.5 18.6 8" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  data: (
    <>
      <rect x="3" y="3" width="18" height="6" rx="1" />
      <rect x="3" y="11" width="18" height="6" rx="1" />
      <path d="M6.5 6h.01M6.5 14h.01M10 6h4M10 14h4" />
      <path d="M7 21h10" />
    </>
  ),
  box: (
    <>
      <path d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5z" />
      <path d="M3 7.5l9 4.5 9-4.5M12 12v9" />
      <path d="M7.5 5.2l9 4.6" />
    </>
  ),
  factory: (
    <>
      <path d="M2 21h20" />
      <path d="M4 21V9l6 4V9l6 4V5h4v16" />
      <path d="M7 17h2M13 17h2" />
    </>
  ),
  oil: (
    <>
      <path d="M12 3l6 18M12 3L6 21M8.5 12h7" />
      <path d="M2 21h20" />
      <path d="M12 3V1.5" />
    </>
  ),
  school: (
    <>
      <path d="M2.5 8.5L12 4l9.5 4.5L12 13z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M21.5 8.5V14" />
    </>
  ),
  gov: (
    <>
      <path d="M2.5 9.5L12 4l9.5 5.5" />
      <path d="M5 9.5V18M9.5 9.5V18M14.5 9.5V18M19 9.5V18" />
      <path d="M3 18h18M2 21h20" />
    </>
  ),
  expo: (
    <>
      <path d="M2 10l10-6 10 6" />
      <path d="M4 10v11h16V10" />
      <path d="M8 21v-6h8v6" />
      <path d="M2 21h20" />
    </>
  ),
  power: (
    <>
      <path d="M13 2L5 13h6l-1 9 8-11h-6z" />
      <path d="M3 21h6M15 21h6" />
    </>
  ),
  // --- ui ------------------------------------------------------------------
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 20V5M6 11l6-6 6 6" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  phone: (
    <path d="M5 3h4l2 5-2.5 1.5a12 12 0 006 6L16 13l5 2v4a2 2 0 01-2 2A16.5 16.5 0 013 5a2 2 0 012-2z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="M3 6.5l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  download: <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 20h16" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10v-6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 3.9 5.6 3.9 9S14.6 18.4 12 21c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3z" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18a9 9 0 1116 0" />
      <path d="M12 18l4-5" />
      <path d="M4 18h16" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M16.5 5.5a3.2 3.2 0 010 6M18 20c0-2.2-.6-3.9-1.6-5.1" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.5 3.5a5.5 5.5 0 00-6.9 6.9L3 15l6 6 4.6-4.6a5.5 5.5 0 006.9-6.9l-3.4 3.4-2.9-.6-.6-2.9z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2.5l2.2 6.3 6.3 2.2-6.3 2.2L12 19.5l-2.2-6.3L3.5 11l6.3-2.2z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10v7M7.5 7v.01M11.5 17v-4a2.5 2.5 0 015 0v4" />
    </>
  ),
  play: <path d="M7 4.5l12 7.5-12 7.5z" />,
};

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.5, ...rest }) {
  const path = P[name];
  if (!path) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {path}
    </svg>
  );
}

export const iconNames = Object.keys(P);
