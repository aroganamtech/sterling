/* -------------------------------------------------------------------------
   PROJECTS
   The entries below are REPRESENTATIVE reference formats, written so the page
   structure and layout can be reviewed. Replace client names, locations and
   figures with verified project records — and obtain client consent — before
   publishing.  // TODO
   ------------------------------------------------------------------------- */

export const projects = [
  {
    slug: 'international-airport-terminal',
    title: 'International Airport Terminal Expansion',
    sector: 'Airports',
    industry: 'airports',
    client: '[Client name]',
    location: 'Singapore',
    year: '2024',
    accent: 'from-navy-900 via-navy-800 to-navy-700',
    overview:
      'Smoke control engineering for a new departures pier and retail concourse with a 26 m high long-span roof and a fully open connection to the existing terminal.',
    scope: [
      'Reservoir strategy and automatic smoke curtain design',
      'Mechanical extraction to the retail concourse',
      'Natural ventilation to the long-span roof zone',
      'Integrated smoke control panel and cause-and-effect',
    ],
    challenges: [
      'Undivided volume exceeding conventional reservoir guidance',
      'Live terminal operations throughout construction',
      'Coordination with an existing legacy smoke control system',
    ],
    delivered: [
      'CFD-verified reservoir layout reducing installed extract capacity',
      'Phased installation plan aligned to night-time possessions',
      'Single unified cause-and-effect across new and existing zones',
    ],
    systems: ['Automatic smoke curtains', 'F300 extraction fans', 'Natural roof ventilators', 'PLC smoke control system'],
    standards: ['NFPA 92', 'EN 12101-1/2/3', 'SCDF Fire Code'],
    outcome: 'Authority acceptance achieved at first submission with no adverse comments on the smoke control package.',
    stats: [
      ['Volume served', '180,000 m³'],
      ['Extract capacity', '520 m³/s'],
      ['Curtain length', '410 m'],
    ],
  },
  {
    slug: 'metro-interchange-station',
    title: 'Underground Metro Interchange Station',
    sector: 'Metro Rail',
    industry: 'metro-rail',
    client: '[Rail authority]',
    location: 'Asia-Pacific',
    year: '2024',
    accent: 'from-navy-950 via-navy-900 to-navy-800',
    overview:
      'Tunnel and station ventilation engineering support for a four-level deep interchange serving two lines, including emergency ventilation scenario development.',
    scope: [
      'Under-platform exhaust and over-track exhaust review',
      'Tunnel ventilation fan selection and duty verification',
      'Emergency ventilation scenario matrix',
      'Integration with station SCADA',
    ],
    challenges: [
      'Deep station with extended vertical evacuation routes',
      'Train fire scenarios at multiple positions in the tunnel',
      'Piston effect interaction between two intersecting lines',
    ],
    delivered: [
      'Critical velocity verified for all defined fire positions',
      'Backlayering controlled on the evacuation route in every scenario',
      'Ventilation response fully integrated into the station control matrix',
    ],
    systems: ['Reversible tunnel fans', 'Under-platform exhaust', 'Smoke dampers', 'TVCS control integration'],
    standards: ['NFPA 130', 'EN 12101-3'],
    outcome: 'Emergency ventilation strategy accepted with quantified tenability margins on every evacuation route.',
    stats: [
      ['Station depth', '32 m'],
      ['Fire scenarios modelled', '46'],
      ['Fan rating', '250°C / 2h reversible'],
    ],
  },
  {
    slug: 'regional-shopping-centre',
    title: 'Regional Shopping Centre',
    sector: 'Shopping Malls',
    industry: 'shopping-malls',
    client: '[Developer]',
    location: 'Malaysia',
    year: '2023',
    accent: 'from-signal-800 via-navy-900 to-navy-800',
    overview:
      'Full smoke management design and installation for a five-level retail mall with a central atrium, cinema box and basement car park.',
    scope: [
      'Atrium reservoir and shop-front channelling screens',
      'Mechanical smoke extraction to all trading levels',
      'Basement car park impulse ventilation',
      'Central smoke control and monitoring system',
    ],
    challenges: [
      'Spill plume from shop fronts on four levels into a single atrium',
      'Tenant fit-out variability after handover',
      'Limited plant space on the roof',
    ],
    delivered: [
      'Channelling screens reducing required atrium extract by a significant margin',
      'Fit-out design guide issued to protect the strategy through tenant changes',
      'Compact roof plant layout achieved through fan re-selection',
    ],
    systems: ['Static channelling screens', 'Automatic smoke curtains', 'F400 extract fans', 'Jet fan car park system'],
    standards: ['BS 7346-4', 'EN 12101', 'NFPA 92'],
    outcome: 'Delivered on programme with integrated systems testing completed ahead of tenant handover.',
    stats: [
      ['Retail area', '95,000 m²'],
      ['Atrium height', '24 m'],
      ['Jet fans installed', '128'],
    ],
  },
  {
    slug: 'grade-a-commercial-tower',
    title: 'Grade A Commercial Tower',
    sector: 'Commercial Buildings',
    industry: 'commercial-buildings',
    client: '[Developer]',
    location: 'Singapore',
    year: '2023',
    accent: 'from-navy-800 via-navy-700 to-steel-600',
    overview:
      'Staircase and firefighting shaft pressurisation for a 48-storey commercial tower with a linked podium and sky lobby.',
    scope: [
      'Stair and lobby pressurisation design',
      'Firefighting shaft pressurisation',
      'Leakage assessment and relief strategy',
      'Commissioning and witnessed testing',
    ],
    challenges: [
      'Tall single-shaft height producing stack pressure variation',
      'Door opening force compliance at the lowest levels',
      'Sky lobby transfer floor interrupting the shaft',
    ],
    delivered: [
      'Multi-injection design with modulated relief across the full height',
      'Door forces within limits at every level under all test cases',
      'Documented differential and velocity readings for every door set',
    ],
    systems: ['Pressurisation fans', 'Motorised relief dampers', 'Pressure sensing and modulation', 'Control panels'],
    standards: ['EN 12101-6', 'SCDF Fire Code', 'NFPA 92'],
    outcome: 'All stair and shaft pressure tests passed at first witness, with full commissioning records issued at handover.',
    stats: [
      ['Storeys', '48'],
      ['Pressurised shafts', '6'],
      ['Design differential', '50 Pa'],
    ],
  },
  {
    slug: 'tertiary-hospital-block',
    title: 'Tertiary Hospital Block',
    sector: 'Hospitals',
    industry: 'hospitals',
    client: '[Health authority]',
    location: 'India',
    year: '2023',
    accent: 'from-navy-800 via-navy-800 to-navy-600',
    overview:
      'Smoke containment and extraction for a new inpatient block with progressive horizontal evacuation and a full-height clinical atrium.',
    scope: [
      'Sub-compartment smoke curtain design',
      'Atrium extraction and make-up air',
      'Pressurisation to escape stairs',
      'Interface with clinical HVAC control',
    ],
    challenges: [
      'Non-ambulant patients requiring defend-in-place areas',
      'Pressure interaction with isolation and operating suites',
      'Infection control restrictions on access panels',
    ],
    delivered: [
      'Curtain zoning aligned to clinical sub-compartments',
      'Pressure regime coordinated with the clinical HVAC strategy',
      'Access strategy agreed with the infection control team',
    ],
    systems: ['Automatic smoke curtains', 'Atrium extract fans', 'Stair pressurisation', 'BMS-integrated control'],
    standards: ['NFPA 92', 'NFPA 99', 'EN 12101', 'National Building Code'],
    outcome: 'Defend-in-place tenability demonstrated by CFD for all defined ward fire scenarios.',
    stats: [
      ['Beds served', '640'],
      ['Sub-compartments', '38'],
      ['Curtain drops', '76'],
    ],
  },
  {
    slug: 'hyperscale-data-centre',
    title: 'Hyperscale Data Centre',
    sector: 'Data Centres',
    industry: 'data-centres',
    client: '[Operator]',
    location: 'Asia-Pacific',
    year: '2024',
    accent: 'from-navy-950 via-navy-800 to-signal-900',
    overview:
      'Smoke clearance and control system design for a multi-hall colocation facility with hot-aisle containment and aspirating detection.',
    scope: [
      'Post-incident smoke clearance design per data hall',
      'Detection and ventilation interaction assessment',
      'Zoned control and orderly shutdown sequencing',
      'Electrical and battery room ventilation review',
    ],
    challenges: [
      'Very high air change rates diluting smoke at detectors',
      'Containment aisles altering smoke transport',
      'Requirement to avoid whole-facility shutdown',
    ],
    delivered: [
      'CFD-informed detector placement validated against cooling airflow',
      'Hall-level zoning limiting response to the affected hall only',
      'Clearance times verified for each hall configuration',
    ],
    systems: ['Smoke clearance fans', 'Motorised dampers', 'PLC control with BMS integration', 'IoT monitoring'],
    standards: ['NFPA 75', 'NFPA 92', 'EN 12101'],
    outcome: 'Zoned response strategy accepted, avoiding facility-wide shutdown on a single hall incident.',
    stats: [
      ['Data halls', '8'],
      ['IT load', '48 MW'],
      ['Clearance target', '< 20 min'],
    ],
  },
  {
    slug: 'automotive-manufacturing-plant',
    title: 'Automotive Manufacturing Plant',
    sector: 'Industrial Plants',
    industry: 'industrial-plants',
    client: '[Manufacturer]',
    location: 'India',
    year: '2022',
    accent: 'from-steel-700 via-navy-800 to-navy-900',
    overview:
      'Combined heat relief and smoke ventilation for a body shop and paint line building with continuous process heat.',
    scope: [
      'Natural ridge ventilation for daily heat relief',
      'Smoke and heat exhaust ventilation design',
      'Reservoir screening over the production line',
      'Make-up air louvre and door strategy',
    ],
    challenges: [
      'High continuous process heat load',
      'Paint line requiring controlled airflow conditions',
      'Insurer requirements exceeding code minimum',
    ],
    delivered: [
      'Dual-duty ventilation serving both comfort and fire cases',
      'Screening layout agreed with the insurer and fire engineer',
      'Make-up air provided without disturbing the paint process',
    ],
    systems: ['Ridge ventilators', 'Powered roof extract', 'Smoke reservoir screens', 'Control panel'],
    standards: ['EN 12101-2', 'NFPA 204', 'FM Global'],
    outcome: 'Internal working temperatures reduced measurably while satisfying the insurer’s smoke venting requirement.',
    stats: [
      ['Floor area', '42,000 m²'],
      ['Ridge vent length', '310 m'],
      ['Reservoirs', '14'],
    ],
  },
  {
    slug: 'logistics-distribution-hub',
    title: 'Logistics Distribution Hub',
    sector: 'Warehouses',
    industry: 'warehouses',
    client: '[Operator]',
    location: 'Malaysia',
    year: '2022',
    accent: 'from-navy-700 via-steel-700 to-navy-900',
    overview:
      'Roof smoke and heat exhaust ventilation with reservoir screening for a high-bay automated distribution centre.',
    scope: [
      'SHEVS design to the high-bay storage area',
      'Reservoir screen layout and depth',
      'Inlet air provision through dock doors and louvres',
      'Ventilator control and testing regime',
    ],
    challenges: [
      'High-bay racking with rapid fire growth potential',
      'Very large undivided floor plate',
      'Automated storage restricting access for maintenance',
    ],
    delivered: [
      'Aerodynamic free area verified against certified Cv data',
      'Screen layout coordinated with the racking design',
      'Testing regime designed around automated system access windows',
    ],
    systems: ['Roof smoke ventilators', 'Reservoir screens', 'Inlet louvres', 'Ventilator control panel'],
    standards: ['EN 12101-2', 'NFPA 204', 'Local Fire Code'],
    outcome: 'Smoke venting provision approved with a maintenance regime compatible with continuous operations.',
    stats: [
      ['Floor area', '68,000 m²'],
      ['Clear height', '34 m'],
      ['Ventilators', '212'],
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
