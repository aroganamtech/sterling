export const industries = [
  {
    slug: 'commercial-buildings',
    title: 'Commercial Buildings',
    icon: 'office',
    blurb: 'Offices, mixed-use and multi-tenant developments.',
    overview:
      'Commercial developments combine open-plan floorplates, connecting atria and shared cores. The smoke strategy has to protect a single escape core used by hundreds of occupants while leaving the architectural volume intact.',
    challenges: [
      'Atria and interconnected floors defeating compartmentation',
      'Single-core escape routes requiring pressurisation',
      'Tenant fit-out changes invalidating the original strategy',
      'Coordination of plant space in commercially valuable floor area',
    ],
    solutions: ['smoke-curtains', 'staircase-pressurization', 'smoke-extraction-systems'],
    standards: ['EN 12101', 'NFPA 92', 'BS 9999', 'Local Fire Code'],
  },
  {
    slug: 'airports',
    title: 'Airports',
    icon: 'plane',
    blurb: 'Terminals, piers, concourses and baggage halls.',
    overview:
      'Terminal buildings are very large, very tall and rarely conventional. Long-span roofs, mezzanines and landside/airside separation all shape how smoke moves and how it must be contained.',
    challenges: [
      'Very large undivided volumes with long travel distances',
      'Mixed occupancy: retail, check-in, baggage and lounges',
      'Phased operation — construction while the terminal is live',
      'Extremely high consequence of an unplanned shutdown',
    ],
    solutions: ['smoke-curtains', 'smoke-extraction-systems', 'smoke-ventilators'],
    standards: ['NFPA 92', 'EN 12101', 'IBC', 'Local Aviation Authority'],
  },
  {
    slug: 'hospitals',
    title: 'Hospitals',
    icon: 'health',
    blurb: 'Acute care, day surgery and diagnostic facilities.',
    overview:
      'Healthcare buildings evacuate horizontally and progressively. The strategy must protect defend-in-place areas and keep clinical operations running while a fire is dealt with in an adjacent compartment.',
    challenges: [
      'Non-ambulant occupants and progressive horizontal evacuation',
      'Continuity of critical services during an incident',
      'Pressure regime interaction with clinical HVAC and isolation rooms',
      'Infection control constraints on ductwork and access',
    ],
    solutions: ['smoke-curtains', 'staircase-pressurization', 'smoke-extraction-systems'],
    standards: ['EN 12101', 'NFPA 99', 'NFPA 92', 'Local Health Authority'],
  },
  {
    slug: 'hotels',
    title: 'Hotels',
    icon: 'hotel',
    blurb: 'Towers, resorts, podiums and banquet facilities.',
    overview:
      'Sleeping accommodation raises the bar on escape route protection. Guests are unfamiliar with the building and may be asleep, so protected stairs and lobbies carry the strategy.',
    challenges: [
      'Sleeping risk with unfamiliar occupants',
      'Large atrium lobbies and connected podium retail',
      'Banquet and ballroom volumes with high occupancy',
      'Aesthetic constraints on visible equipment',
    ],
    solutions: ['staircase-pressurization', 'smoke-curtains', 'smoke-extraction-systems'],
    standards: ['EN 12101', 'NFPA 92', 'BS 9999', 'Local Fire Code'],
  },
  {
    slug: 'metro-rail',
    title: 'Metro Rail',
    icon: 'metro',
    blurb: 'Underground stations, running tunnels and depots.',
    overview:
      'Underground rail is governed by NFPA 130 and the requirement to keep an evacuation path tenable while smoke is driven away from the escaping crowd. Station, tunnel and platform systems must act as one.',
    challenges: [
      'Deep stations with long, congested escape routes',
      'Train-borne fires in running tunnels',
      'Piston effect and interaction with ambient ventilation',
      'Integration with SCADA and operational control',
    ],
    solutions: ['smoke-extraction-systems', 'staircase-pressurization'],
    standards: ['NFPA 130', 'EN 12101-3', 'Local Rail Authority'],
  },
  {
    slug: 'railway-stations',
    title: 'Railway Stations',
    icon: 'rail',
    blurb: 'Interchanges, concourses and covered platforms.',
    overview:
      'Surface and covered stations mix very high transient occupancy with retail and back-of-house risk under large canopy roofs, often with heritage or structural constraints.',
    challenges: [
      'Peak-hour crowd densities affecting egress time',
      'Semi-open volumes influenced by wind',
      'Retail fire load within the circulation space',
      'Working within operational railway constraints',
    ],
    solutions: ['smoke-ventilators', 'smoke-curtains', 'smoke-extraction-systems'],
    standards: ['NFPA 130', 'EN 12101', 'BS 7346'],
  },
  {
    slug: 'shopping-malls',
    title: 'Shopping Malls',
    icon: 'retail',
    blurb: 'Malls, atria, department stores and F&B clusters.',
    overview:
      'Malls are the classic reservoir-and-extraction case: a tall atrium, shop-front openings on every level and a fire load that changes with every tenancy.',
    challenges: [
      'Multi-level atria connecting all trading floors',
      'Shop front spill plumes and channelling requirements',
      'Tenant churn changing the fire load and layout',
      'F&B concentrations with elevated risk',
    ],
    solutions: ['smoke-curtains', 'smoke-extraction-systems', 'smoke-ventilators'],
    standards: ['EN 12101', 'NFPA 92', 'BS 7346-4', 'Local Fire Code'],
  },
  {
    slug: 'data-centres',
    title: 'Data Centres',
    icon: 'data',
    blurb: 'Colocation, hyperscale and enterprise facilities.',
    overview:
      'In a data centre the fire risk is small but the consequence is severe. Smoke control has to work with — not against — a very high-volume cooling regime and extremely sensitive early detection.',
    challenges: [
      'Interaction between cooling airflow and smoke detection',
      'Aspirating detection sensitivity in high air-change environments',
      'Zoned response that avoids unnecessary shutdown',
      'Containment aisles altering smoke movement',
    ],
    solutions: ['smoke-extraction-systems', 'staircase-pressurization'],
    standards: ['NFPA 75', 'NFPA 92', 'EN 12101', 'Uptime Institute guidance'],
  },
  {
    slug: 'warehouses',
    title: 'Warehouses',
    icon: 'box',
    blurb: 'Distribution centres, cold stores and logistics hubs.',
    overview:
      'High-bay storage produces fast-growing fires with large convective heat release. Roof ventilation and reservoir screening protect the structure and support sprinkler performance.',
    challenges: [
      'High-bay racking and rapid vertical fire spread',
      'Very large undivided floor plates',
      'Interaction between ventilation and sprinkler operation',
      'Insurer requirements beyond code minimum',
    ],
    solutions: ['smoke-ventilators', 'smoke-curtains'],
    standards: ['EN 12101-2', 'NFPA 204', 'FM Global', 'Local Fire Code'],
  },
  {
    slug: 'industrial-plants',
    title: 'Industrial Plants',
    icon: 'factory',
    blurb: 'Manufacturing, assembly and process facilities.',
    overview:
      'Process buildings carry continuous heat, dust and chemical exposure alongside the fire risk, so ventilation equipment has to be specified for the environment as well as the fire case.',
    challenges: [
      'Continuous process heat and contaminant loads',
      'Corrosive or dust-laden atmospheres',
      'Production continuity constraints on shutdown',
      'Zoned hazardous areas requiring rated equipment',
    ],
    solutions: ['smoke-ventilators', 'smoke-extraction-systems'],
    standards: ['EN 12101-2', 'NFPA 204', 'ATEX where applicable'],
  },
  {
    slug: 'oil-and-gas',
    title: 'Oil & Gas',
    icon: 'oil',
    blurb: 'Refineries, terminals and support buildings.',
    overview:
      'Hydrocarbon facilities demand hazardous-area-rated equipment, conservative design margins and full traceability of certification across every installed asset.',
    challenges: [
      'Classified hazardous zones requiring rated equipment',
      'High-consequence escalation scenarios',
      'Severe corrosion and offshore exposure',
      'Rigorous documentation and traceability regimes',
    ],
    solutions: ['smoke-extraction-systems'],
    standards: ['NFPA 30', 'IEC 60079 / ATEX', 'EN 12101', 'Client standards'],
  },
  {
    slug: 'educational-institutions',
    title: 'Educational Institutions',
    icon: 'school',
    blurb: 'Universities, schools and research campuses.',
    overview:
      'Campus buildings mix lecture halls, laboratories, libraries and residences, each with a different risk profile but usually sharing circulation and cores.',
    challenges: [
      'High occupant density in lecture and assembly spaces',
      'Laboratory risks alongside general teaching areas',
      'Large atria in modern learning-commons buildings',
      'Phased works around academic terms',
    ],
    solutions: ['smoke-curtains', 'smoke-extraction-systems', 'staircase-pressurization', 'smoke-ventilators'],
    standards: ['EN 12101', 'NFPA 101', 'Local Fire Code'],
  },
  {
    slug: 'government-buildings',
    title: 'Government Buildings',
    icon: 'gov',
    blurb: 'Civic, defence and public administration facilities.',
    overview:
      'Public buildings combine civic architecture with security requirements and long asset lives, so systems are judged as much on maintainability and documentation as on performance.',
    challenges: [
      'Heritage and architectural preservation constraints',
      'Security requirements limiting openings and access',
      'Very long asset life and maintenance expectations',
      'Public procurement documentation standards',
    ],
    solutions: ['smoke-curtains', 'staircase-pressurization', 'smoke-extraction-systems'],
    standards: ['EN 12101', 'NFPA 92', 'National Building Code'],
  },
  {
    slug: 'convention-centres',
    title: 'Convention Centres',
    icon: 'expo',
    blurb: 'Exhibition halls, arenas and conference venues.',
    overview:
      'Exhibition volumes change use weekly. The smoke strategy must remain valid across a wide range of layouts, stand build-ups and occupancy figures.',
    challenges: [
      'Fire load that changes with every event',
      'Very high peak occupancy in a single volume',
      'Temporary structures and stand builds',
      'Movable partitioning altering compartment lines',
    ],
    solutions: ['smoke-ventilators', 'smoke-extraction-systems', 'smoke-curtains'],
    standards: ['EN 12101', 'NFPA 92', 'NFPA 101'],
  },
  {
    slug: 'power-plants',
    title: 'Power Plants',
    icon: 'power',
    blurb: 'Generation, substations and energy infrastructure.',
    overview:
      'Generation and transmission assets carry concentrated electrical and fuel risk in buildings that must stay available. Ventilation supports both cooling duty and incident response.',
    challenges: [
      'Cable tunnels and galleries with high fire loading',
      'Transformer and turbine hall fire scenarios',
      'Continuous availability requirements',
      'Combined cooling and smoke control duty',
    ],
    solutions: ['smoke-extraction-systems'],
    standards: ['NFPA 850', 'EN 12101', 'IEC standards'],
  },
];

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);
