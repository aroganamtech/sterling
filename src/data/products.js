/* ---------------------------------------------------------------------------
   PRODUCTS — single source of truth for the Products module.

   Adding a product here automatically creates:
     · its entry in the /products category accordion
     · its landing page at /products/<slug>
     · its cards in "Related products" wherever it is referenced
     · its SEO metadata

   Image files live in  src/assets/products/<slug>-<view>.svg  and are resolved
   at build time by the glob in  src/lib/productImages.js
   --------------------------------------------------------------------------- */

export const productCategories = [
  {
    id: 'smoke-containment',
    name: 'Smoke Containment',
    icon: 'curtain',
    tagline: 'Controlling the movement and spread of smoke',
    subtitle: 'Containing Smoke Where It Matters',
    blurb:
      'Smoke curtains that form smoke reservoirs, restrict smoke migration and support the effective operation of smoke exhaust systems.',
    intro: [
      'Smoke curtains are an important component of smoke containment, helping to control the movement and spread of smoke within a building. They can be used to form smoke reservoirs, restrict smoke migration and support the effective operation of smoke exhaust systems.',
      'Our systems are designed around the specific building geometry and smoke control strategy, with consideration given to curtain deployment, smoke layer height, reservoir dimensions, exhaust airflow, replacement air and system activation.',
    ],
    capabilities: [
      'Fixed and automatic smoke curtains',
      'Smoke reservoir formation',
      'Smoke compartmentation',
      'Atrium and large open-space smoke control',
      'Escalator and void smoke containment',
      'Integration with natural and mechanical smoke exhaust systems',
      'Fire alarm and building management system (BMS) interfaces',
    ],
    keyBenefits: [
      'Effective smoke containment',
      'Smoke reservoir formation',
      'Supports smoke extraction',
      'Flexible application',
      'Automatic deployment',
    ],
    image: 'smoke-curtain-section',
    accent: 'ember',
  },
  {
    id: 'natural-ventilation',
    name: 'Natural Ventilation',
    icon: 'vent',
    tagline: 'Wind pressure and temperature difference, put to work',
    subtitle: 'Enhancing Indoor Air Quality Through Natural Airflow',
    blurb:
      'Automated window actuators, natural ventilation louvres, roof ventilators and intelligent control systems that introduce fresh outdoor air and remove stale or warm air.',
    intro: [
      'Sterling provides natural ventilation solutions that utilise wind pressure and temperature differences to introduce fresh outdoor air and remove stale or warm air from occupied spaces.',
      'Our solutions include automated window actuators, natural ventilation louvres, roof ventilators and intelligent control systems. Where appropriate, sensors can be integrated to automatically control ventilation openings based on indoor and outdoor conditions.',
      'Properly designed and controlled natural ventilation can support good indoor air quality, thermal comfort and occupant well-being, while reducing the reliance on mechanical ventilation.',
      'Our systems are designed with consideration of the building layout, ventilation requirements, environmental conditions, control strategy and applicable Singapore codes, standards and regulatory requirements.',
    ],
    capabilities: [
      'Automated window actuators',
      'Natural ventilation louvres',
      'Roof ventilators',
      'Intelligent control systems',
      'Sensor-driven opening control',
    ],
    keyBenefits: [
      'Enhanced life safety',
      'Effective air replacement',
      'Reliable system operation',
      'Regulatory compliance',
    ],
    image: 'louvred-roof-ventilator-section',
    accent: 'ember',
  },
  {
    id: 'smoke-ventilation',
    name: 'Smoke Ventilation',
    icon: 'vent',
    tagline: 'Natural and mechanical smoke ventilation',
    subtitle: 'Protecting Occupants Through Effective Smoke Management',
    blurb:
      'Natural and mechanical smoke ventilation systems developed to support the building fire safety strategy and meet applicable Singapore regulatory requirements.',
    intro: [
      'Sterling’s experienced ventilation engineers provide the design and installation of natural and mechanical smoke ventilation systems for a wide range of building applications. Our solutions are developed to support the building’s fire safety strategy, improve smoke management and meet applicable Singapore regulatory requirements.',
      'Our smoke ventilation systems are engineered to provide reliable operation during fire conditions, with consideration given to smoke movement, ventilation openings, airflow, system activation, controls, fire-rated construction and integration with other fire protection systems.',
    ],
    capabilities: [
      'Natural smoke ventilators',
      'Automatic opening vents (AOVs)',
      'Mechanical smoke ventilation',
      'Ventilation openings and louvres',
      'Smoke control panels and interfaces',
    ],
    keyBenefits: [
      'Enhanced life safety',
      'Effective smoke clearance',
      'Reliable system operation',
      'Regulatory compliance',
    ],
    image: 'smoke-ventilator-section',
    accent: 'ember',
  },
  {
    id: 'smoke-extraction',
    name: 'Mechanical Smoke Extraction Systems',
    icon: 'extract',
    tagline: 'Engineered smoke control for reliable performance',
    subtitle: 'Engineered Smoke Control for Reliable Performance',
    blurb:
      'Dedicated fans, ductwork, dampers and air supply arrangements that extract smoke from designated areas and provide replacement air where required.',
    intro: [
      'Sterling designs and provides mechanical smoke extraction systems to manage smoke movement and support safe evacuation and fire-fighting operations.',
      'Mechanical smoke control systems use dedicated fans, ductwork, dampers and air supply arrangements to extract smoke from designated areas and provide replacement air where required. Systems can be applied to corridors, lobbies, staircases, smoke shafts, car parks and other areas in accordance with the building’s fire safety strategy.',
      'Each system is engineered based on the building configuration, smoke control objectives, required airflow, fire strategy and applicable Singapore Fire Code and relevant standards.',
    ],
    capabilities: [
      'Dedicated smoke extraction fans',
      'Smoke control ductwork',
      'Smoke control dampers',
      'Replacement air arrangements',
      'Corridor, lobby, staircase and car park systems',
    ],
    keyBenefits: [
      'Effective smoke extraction',
      'Controlled airflow',
      'Multi-level applications',
      'Integrated operation',
      'Automatic and manual control',
      'Reliable fire performance',
    ],
    image: 'smoke-extract-fan-section',
    accent: 'ember',
  },
];

const CERT = {
  ce: { code: 'CE Marking', body: 'EU Construction Products Regulation', note: 'Declaration of Performance issued per product configuration.' },
  en1: { code: 'EN 12101-1', body: 'Smoke barriers', note: 'Third-party tested classification for smoke curtain assemblies.' },
  en2: { code: 'EN 12101-2', body: 'Natural smoke & heat exhaust ventilators', note: 'Aerodynamic free area established by certified Cv testing.' },
  en3: { code: 'EN 12101-3', body: 'Powered smoke & heat exhaust ventilators', note: 'F300 / F400 high-temperature classification.' },
  en6: { code: 'EN 12101-6', body: 'Pressure differential systems', note: 'System performance verified against differential and velocity criteria.' },
  en8: { code: 'EN 12101-8', body: 'Smoke control dampers', note: 'Fire and smoke leakage classification to EN 1366-10.' },
  en9: { code: 'EN 12101-9', body: 'Smoke control panels', note: 'Control and indicating equipment for smoke control systems.' },
  en13: { code: 'EN 13141', body: 'Ventilation performance testing', note: 'Airflow and pressure performance verified to the relevant part.' },
  amca: { code: 'AMCA 210 / 300', body: 'Air Movement and Control Association', note: 'Airflow and sound performance tested to AMCA methodology.' },
  iso: { code: 'ISO 9001', body: 'Quality management', note: 'Manufacturing under a certified quality management system.' },
  eurovent: { code: 'Eurovent', body: 'Certified performance', note: 'Independently verified catalogue performance data.' },
  nfpa92: { code: 'NFPA 92', body: 'Smoke control systems', note: 'Design methodology accepted on international projects.' },
  nfpa204: { code: 'NFPA 204', body: 'Smoke and heat venting', note: 'Vent area and reservoir methodology.' },
  nfpa130: { code: 'NFPA 130', body: 'Fixed guideway transit', note: 'Emergency ventilation performance basis.' },
  scdf: { code: 'SCDF Fire Code', body: 'Singapore Civil Defence Force', note: 'Local approval route for Singapore projects.' },
  ip: { code: 'IP 55 / IP 66', body: 'IEC 60529 ingress protection', note: 'Enclosure rating selected for the installed environment.' },
  atex: { code: 'ATEX / IECEx', body: 'Explosive atmospheres', note: 'Available for classified hazardous zones on request.' },
};

export const products = [
  /* ========================= SMOKE CONTAINMENT ========================= */
  {
    slug: 'smoke-curtain',
    name: 'Prime Curtain',
    categories: ['smoke-containment'],
    model: 'PRIME DH120',
    shape: 'curtain',
    tagline: 'Engineered smoke containment, manufactured and tested in Singapore',
    short:
      'Sterling’s own smoke curtain system for smoke containment, channelling and reservoir formation — manufactured and tested in Singapore to comply with EN 12101-1.',
    long: [
      'We provide engineered smoke curtain solutions for smoke containment, channelling, and smoke reservoir formation. The Prime Curtain is manufactured and tested in Singapore and is designed around project-specific requirements and applicable standards.',
      'Smoke curtains are engineered to provide effective smoke control without unnecessarily compromising the building’s means of escape. Where required, automatically deployed curtains are designed to achieve the required smoke-tightness and effective depth in accordance with the applicable requirements.',
      'Smoke curtains are an important component of smoke containment, helping to control the movement and spread of smoke within a building. They can be used to form smoke reservoirs, restrict smoke migration and support the effective operation of smoke exhaust systems. Systems are designed around the specific building geometry and smoke control strategy, with consideration given to curtain deployment, smoke layer height, reservoir dimensions, exhaust airflow, replacement air and system activation.',
    ],
    quickStats: [
      ['Classification', 'DH120 to EN 12101-1'],
      ['Fabric', 'Fibreglass, 0.4 mm'],
      ['Drop', 'Part or full drop'],
      ['Fail-safe', 'Gravity descent'],
    ],
    features: [
      { icon: 'shield', title: 'Certified classification', text: 'DH120, complying with EN 12101-1 for smoke barrier assemblies.' },
      { icon: 'layers', title: 'Durable fabric', text: 'Fibreglass, double-coated with polyurethane polymer, 0.4 mm thickness.' },
      { icon: 'gauge', title: 'Controlled descent', text: 'Part-drop and full-drop configurations with controlled descent speed.' },
      { icon: 'fire', title: 'Fail-safe operation', text: 'Gravity descent on power loss; powered to hold in the raised position.' },
      { icon: 'control', title: 'Fire alarm interface', text: 'Fire alarm interface with battery back-up control.' },
      { icon: 'wrench', title: 'Made in Singapore', text: 'Manufactured and tested locally, with engineering support close to the project.' },
    ],
    specs: [
      {
        group: 'Classification',
        rows: [
          ['Typical classification', 'DH120, complying with EN 12101-1'],
          ['Fabric', 'Fibreglass, double-coated with polyurethane polymer, 0.4 mm thickness'],
        ],
      },
      {
        group: 'Operation',
        rows: [
          ['Drop', 'Part-drop and full-drop, with controlled descent speed'],
          ['Fail-safe', 'Gravity descent on power loss; powered to hold in position'],
          ['Interfaces', 'Fire alarm interface with battery back-up control'],
        ],
      },
    ],
    applications: [
      'Shopping malls and retail atria',
      'Airport terminals and concourses',
      'Hospitals and healthcare',
      'Metro and rail stations',
      'Office and mixed-use towers',
      'Warehouses and logistics hubs',
      'Hotels and convention centres',
    ],
    benefits: [
      { title: 'Effective smoke containment', text: 'Controls the movement and spread of smoke within a building.' },
      { title: 'Smoke reservoir formation', text: 'Forms smoke reservoirs and restricts smoke migration across openings and voids.' },
      { title: 'Supports smoke extraction', text: 'Works with natural and mechanical smoke exhaust systems for effective removal.' },
      { title: 'Flexible application', text: 'Designed around the specific building geometry and smoke control strategy.' },
      { title: 'Automatic deployment', text: 'Fire alarm and BMS interfaces trigger deployment when required.' },
    ],
    certifications: [CERT.en1, CERT.ce],
    related: ['smoke-control-panel', 'smoke-control-damper'],
    seo: {
      title: 'Prime Curtain | Smoke Curtain | Sterling Ventilation',
      description:
        'Prime Curtain smoke curtain system, manufactured and tested in Singapore to DH120 classification under EN 12101-1, for smoke containment, channelling and reservoir formation.',
      keywords: 'smoke curtain, Prime Curtain, EN 12101-1, smoke containment, smoke reservoir, DH120, Sterling Ventilation Singapore',
    },
  },

  {
    slug: 'curtain-control-panel',
    name: 'Curtain Control Panel',
    categories: ['smoke-containment'],
    model: 'SV-CCP',
    shape: 'panel',
    tagline: 'Deployment control for smoke curtain systems',
    short:
      'Control and indicating panel for smoke curtain systems, managing deployment, fail-safe descent and the fire alarm interface with battery back-up.',
    long: [
      'A smoke curtain only contributes to the strategy if it deploys to the right depth, at the right moment, on the right signal. The curtain control panel holds that logic: it takes the fire alarm input, drives the curtains to their designed position and maintains power to hold them in the raised position under normal conditions.',
      'Curtains are engineered to fail safe — gravity to descend and power to hold — so the panel is supported by battery back-up and monitored so that loss of supply results in the designed deployment rather than an undetected fault.',
      'Panel configuration follows the smoke control strategy for the project, including curtain deployment, part-drop and full-drop positions, activation sequences and interfaces with the fire alarm system and building management system.',
    ],
    quickStats: [
      ['Duty', 'Smoke curtain deployment control'],
      ['Fail-safe', 'Gravity to descend, power to hold'],
      ['Back-up', 'Battery back-up control'],
      ['Interfaces', 'Fire alarm and BMS'],
    ],
    features: [
      { icon: 'control', title: 'Deployment logic', text: 'Drives part-drop and full-drop positions with controlled descent speed.' },
      { icon: 'fire', title: 'Fire alarm interface', text: 'Deploys on the agreed cause-and-effect from the fire alarm system.' },
      { icon: 'shield', title: 'Fail-safe by design', text: 'Gravity descent on power loss, with power required to hold the curtain up.' },
      { icon: 'gauge', title: 'Battery back-up', text: 'Standby supply keeps the control function available when mains power is lost.' },
      { icon: 'layers', title: 'BMS integration', text: 'Interfaced with the building management system where the design requires it.' },
      { icon: 'wrench', title: 'Testable in service', text: 'Supports the periodic testing and functional verification regime.' },
    ],
    specs: [
      {
        group: 'Operation',
        rows: [
          ['Drop', 'Part drop and full drop with controlled speed'],
          ['Fail-safe', 'Gravity to descend, power to hold'],
          ['Interfaces', 'Fire alarm and battery back-up control'],
        ],
      },
      {
        group: 'System',
        rows: [
          ['Duty', 'Smoke curtain deployment control'],
          ['Integration', 'Fire alarm system and BMS'],
          ['Configuration', 'Set from the project smoke control strategy'],
        ],
      },
    ],
    applications: [
      'Atrium and large open-space smoke control',
      'Escalator and void smoke containment',
      'Smoke reservoir formation',
      'Smoke compartmentation',
      'Retail, transport and mixed-use developments',
    ],
    benefits: [
      { title: 'Effective smoke containment', text: 'Deploys the curtains that control the movement and spread of smoke.' },
      { title: 'Smoke reservoir formation', text: 'Drives curtains to the depth the reservoir design requires.' },
      { title: 'Supports smoke extraction', text: 'Sequenced so containment and exhaust operate together.' },
      { title: 'Automatic deployment', text: 'Fire alarm interface with battery back-up control.' },
      { title: 'Flexible application', text: 'Configured around the building geometry and smoke control strategy.' },
    ],
    certifications: [CERT.ce],
    related: ['smoke-curtain', 'smoke-control-panel'],
    seo: {
      title: 'Curtain Control Panel | Smoke Curtain Deployment Control | Sterling Ventilation',
      description:
        'Control and indicating panel for smoke curtain systems — part-drop and full-drop deployment, gravity fail-safe descent, fire alarm interface and battery back-up control.',
      keywords: 'curtain control panel, smoke curtain control, smoke curtain deployment, fire alarm interface, Sterling Ventilation Singapore',
    },
  },

  /* ======================= NATURAL VENTILATION ======================= */
  {
    slug: 'louvred-roof-ventilator',
    name: 'Ventec Ostro',
    categories: ['natural-ventilation', 'smoke-ventilation'],
    model: 'SV-LRV',
    shape: 'louvre',
    tagline: 'Weather-tight louvred ventilation with certified aerodynamic free area',
    short:
      'A roof-mounted louvred ventilator that delivers high aerodynamic free area for daily ventilation and heat relief, with weather louvres that stay closed against driving rain.',
    long: [
      'The SV-LRV is a continuously rated louvred roof ventilator built for large-volume industrial and commercial buildings. Aluminium blades rotate through a full 90° on a common linkage, so the unit moves from fully weathered to fully open without any part of the mechanism sitting in the airstream.',
      'Performance is stated as certified aerodynamic free area rather than geometric opening, which is the figure a ventilation calculation actually needs. Every size in the range has been tested for aerodynamic coefficient, wind load, water penetration and cycling reliability.',
    ],
    quickStats: [
      ['Aerodynamic area', 'Up to 4.2 m² per unit'],
      ['Blade rotation', '90° full open'],
      ['Actuation', '24 V DC / 230 V AC'],
      ['Wind load', 'WL 1500'],
    ],
    features: [
      { icon: 'shield', title: 'Weather integrity', text: 'Blade profile and end-seal geometry tested against driving rain at tropical wind speeds.' },
      { icon: 'gauge', title: 'Certified free area', text: 'Aerodynamic coefficient established by test — no nominal geometric area claims.' },
      { icon: 'layers', title: 'Thermally broken frame', text: 'Optional thermal break limits condensation risk on air-conditioned buildings.' },
      { icon: 'wrench', title: 'Serviceable linkage', text: 'External linkage and actuator accessible from the roof without dismantling the unit.' },
      { icon: 'globe', title: 'Coastal specification', text: 'Marine-grade anodising or polyester powder coat for corrosive coastal exposure.' },
      { icon: 'control', title: 'Dual duty', text: 'Comfort ventilation by BMS with automatic override to full open on fire signal.' },
    ],
    specs: [
      {
        group: 'Construction',
        rows: [
          ['Frame', 'Extruded aluminium alloy 6063 T6'],
          ['Blades', 'Double-skin aluminium, rotating on stainless spindles'],
          ['Finish', 'Mill, anodised or polyester powder coated to RAL'],
          ['Insect / bird mesh', 'Aluminium or stainless, optional'],
          ['Kerb', 'Insulated aluminium upstand, project height'],
        ],
      },
      {
        group: 'Performance',
        rows: [
          ['Nominal sizes', '1000 × 1000 mm to 3000 × 2500 mm'],
          ['Aerodynamic free area', '0.42 – 4.20 m² (size dependent)'],
          ['Wind load class', 'WL 1500'],
          ['Low temperature class', 'T(-15)'],
          ['Reliability class', 'Re 1000 (10,000 cycles optional)'],
          ['Actuator', '24 V DC linear or chain, 230 V AC optional'],
        ],
      },
    ],
    applications: [
      'Manufacturing and process buildings',
      'Warehouses and distribution centres',
      'Sports and exhibition halls',
      'Workshops and maintenance hangars',
      'Atria and covered courtyards',
      'Plant rooms and switchrooms',
    ],
    benefits: [
      { title: 'Zero-energy ventilation', text: 'Buoyancy and wind do the work — no fan power for the majority of operating hours.' },
      { title: 'Lower internal temperatures', text: 'Continuous high-level relief reduces heat build-up under the roof deck.' },
      { title: 'Simple compliance evidence', text: 'Certified aerodynamic data drops straight into the ventilation calculation.' },
      { title: 'Low lifecycle cost', text: 'Few moving parts, external service access and no ductwork to maintain.' },
    ],
    certifications: [CERT.en2, CERT.ce, CERT.en13, CERT.iso],
    related: ['ridge-ventilator', 'window-actuator', 'facade-louvre-ventilator'],
    seo: {
      title: 'Louvred Roof Ventilator | Natural Ventilation | Sterling Ventilation',
      description:
        'SV-LRV louvred roof ventilator with certified aerodynamic free area to EN 12101-2. Weather-tight 90° blade rotation for industrial and commercial natural ventilation.',
      keywords: 'louvred roof ventilator, natural ventilation, aerodynamic free area, EN 12101-2, roof ventilator Singapore',
    },
  },
  {
    slug: 'window-actuator',
    name: 'Ventec Elite',
    categories: ['natural-ventilation', 'smoke-ventilation'],
    model: 'SV-WA',
    shape: 'actuator',
    tagline: 'Chain and spindle actuators for controlled natural ventilation',
    short:
      'Precision 24 V chain and spindle actuators that open facade and roof windows for daily ventilation and drive them to the fire position on alarm.',
    long: [
      'Actuators are the part of a natural ventilation scheme that decides whether it is genuinely usable. The SV-WA range covers chain actuators for lighter facade windows through to synchronised spindle drives for large roof lights, all with position feedback and adjustable stroke.',
      'Every actuator is rated for both comfort duty — thousands of small daily movements — and the single full-stroke operation that matters in a fire. Synchronised control keeps multi-drive windows square through the whole travel.',
    ],
    quickStats: [
      ['Stroke', '150 – 1000 mm'],
      ['Thrust / pull', 'Up to 1200 N'],
      ['Supply', '24 V DC'],
      ['Protection', 'IP 55 (IP 66 optional)'],
    ],
    features: [
      { icon: 'target', title: 'Adjustable stroke', text: 'Field-settable travel so one actuator type covers a range of window sizes.' },
      { icon: 'layers', title: 'Synchronised drives', text: 'Two, three or four actuators run in lockstep to keep large sashes square.' },
      { icon: 'gauge', title: 'Position feedback', text: 'Continuous position signal for BMS graphics and fault detection.' },
      { icon: 'shield', title: 'Obstruction detection', text: 'Load monitoring stops and reverses the drive if the sash meets resistance.' },
      { icon: 'fire', title: 'Fire override', text: 'Alarm input drives the actuator to the fire position regardless of BMS state.' },
      { icon: 'wrench', title: 'Concealed mounting', text: 'Slim chain profile and concealed spindle options preserve the facade appearance.' },
    ],
    specs: [
      {
        group: 'Electrical',
        rows: [
          ['Supply voltage', '24 V DC ±15%'],
          ['Current draw', '0.9 – 2.4 A (model dependent)'],
          ['Duty cycle', '30% (comfort), 100% single operation (fire)'],
          ['Control', '2-wire polarity reversal or BUS'],
          ['Feedback', '0–10 V position, volt-free end-of-travel'],
        ],
      },
      {
        group: 'Mechanical',
        rows: [
          ['Types', 'Chain, twin-chain, linear spindle, rack'],
          ['Stroke range', '150 / 300 / 500 / 750 / 1000 mm'],
          ['Thrust and pull', '300 N to 1200 N'],
          ['Opening speed', '6 – 18 mm/s'],
          ['Ingress protection', 'IP 55 standard, IP 66 optional'],
          ['Housing', 'Extruded aluminium, RAL matched'],
        ],
      },
    ],
    applications: [
      'Facade and clerestory windows',
      'Roof lights and lantern lights',
      'Atrium high-level ventilation',
      'Stairwell smoke vents (AOV)',
      'Schools and university buildings',
      'Mixed-mode office buildings',
    ],
    benefits: [
      { title: 'Mixed-mode operation', text: 'One device serves daily comfort ventilation and the life safety function.' },
      { title: 'Precise control', text: 'Modulating position control tunes free area to conditions instead of open/closed.' },
      { title: 'Quiet in occupied space', text: 'Low-noise gearing suitable for classrooms, offices and hotel rooms.' },
      { title: 'Long service life', text: 'Rated cycle life well beyond typical comfort ventilation duty.' },
    ],
    certifications: [CERT.ce, CERT.en2, CERT.ip, CERT.iso],
    related: ['louvred-roof-ventilator', 'dome-roof-ventilator', 'smoke-control-panel'],
    seo: {
      title: 'Window Actuator | Chain & Spindle Actuators | Sterling Ventilation',
      description:
        'SV-WA 24 V chain and spindle window actuators for natural ventilation and automatic opening vents. Synchronised drives, position feedback, fire override.',
      keywords: 'window actuator, chain actuator, spindle actuator, AOV actuator, natural ventilation control, 24V actuator',
    },
  },
  {
    slug: 'dome-roof-ventilator',
    name: 'Ventec Access',
    categories: ['natural-ventilation', 'smoke-ventilation'],
    model: 'SV-DRV',
    shape: 'dome',
    tagline: 'Daylight and ventilation from a single roof opening',
    short:
      'Polycarbonate dome ventilators that combine natural daylight with controlled ventilation and, where specified, certified smoke and heat exhaust.',
    long: [
      'A dome ventilator earns its place twice: it lights the space below during the day and provides high-level ventilation whenever it is needed. The SV-DRV uses a multi-wall polycarbonate dome on an insulated kerb, with an electric or pneumatic opening mechanism sized to hold the dome open against wind uplift.',
      'The same unit can be supplied in a certified smoke and heat exhaust configuration where the fire strategy requires it, which keeps the roof build-up consistent across comfort and life safety openings.',
    ],
    quickStats: [
      ['Dome', '2, 3 or 5-wall polycarbonate'],
      ['Light transmission', 'Up to 78%'],
      ['Opening angle', '140° single flap'],
      ['Kerb', 'Insulated, project height'],
    ],
    features: [
      { icon: 'spark', title: 'Daylight plus ventilation', text: 'One roof penetration serves both duties, reducing detailing and leak risk.' },
      { icon: 'shield', title: 'Uplift resistant', text: 'Gas strut and mechanism sized to hold position under design wind uplift.' },
      { icon: 'layers', title: 'Thermal performance', text: 'Multi-wall glazing and thermally broken kerb limit heat gain and condensation.' },
      { icon: 'fire', title: 'SHEVS variant', text: 'Certified smoke and heat exhaust version available on the same kerb detail.' },
      { icon: 'control', title: 'Flexible actuation', text: 'Electric 24 V, pneumatic CO2 cartridge or manual winder options.' },
      { icon: 'wrench', title: 'Fast installation', text: 'Factory-assembled kerb and dome reduce time on the roof.' },
    ],
    specs: [
      {
        group: 'Construction',
        rows: [
          ['Dome material', 'UV-stabilised polycarbonate, 2/3/5-wall'],
          ['Dome finish', 'Clear, opal or solar-tinted'],
          ['Frame', 'Aluminium with structural thermal break'],
          ['Kerb', 'Insulated GRP or aluminium, 150–500 mm'],
          ['Fixings', 'Stainless steel throughout'],
        ],
      },
      {
        group: 'Performance',
        rows: [
          ['Nominal sizes', '900 × 900 mm to 2500 × 1500 mm'],
          ['Light transmission', '46 – 78% (glazing dependent)'],
          ['U-value', 'From 1.4 W/m²K'],
          ['Opening angle', 'Up to 140°'],
          ['SHEVS classification', 'EN 12101-2 (optional variant)'],
          ['Actuation', '24 V DC electric or pneumatic CO2'],
        ],
      },
    ],
    applications: [
      'Warehouses and light industrial roofs',
      'Retail and supermarket roofs',
      'Stairwell and lobby smoke vents',
      'Workshops and depots',
      'Schools and sports halls',
      'Atrium roof lights',
    ],
    benefits: [
      { title: 'Lower lighting load', text: 'Daylight reduces artificial lighting demand across the working day.' },
      { title: 'Simplified roof detail', text: 'One penetration and one kerb type across ventilation and daylight openings.' },
      { title: 'Optional life safety duty', text: 'Upgrade to certified SHEVS without changing the roof build-up.' },
      { title: 'Low maintenance', text: 'Sealed mechanism and stainless fixings suited to long service intervals.' },
    ],
    certifications: [CERT.en2, CERT.ce, CERT.iso, CERT.nfpa204],
    related: ['louvred-roof-ventilator', 'window-actuator'],
    seo: {
      title: 'Dome Roof Ventilator | Daylight & Natural Ventilation | Sterling Ventilation',
      description:
        'SV-DRV polycarbonate dome roof ventilator combining daylight and natural ventilation, with an optional EN 12101-2 certified smoke and heat exhaust variant.',
      keywords: 'dome roof ventilator, rooflight ventilator, polycarbonate dome, natural ventilation, SHEVS dome',
    },
  },
  {
    slug: 'ridge-ventilator',
    name: 'Ventec LAM',
    categories: ['natural-ventilation', 'smoke-ventilation'],
    model: 'SV-RV',
    shape: 'ridge',
    tagline: 'Continuous high-level relief along the building ridge',
    short:
      'Continuous ridge ventilators that exhaust hot air and process heat along the full length of the building at the highest point of the roof.',
    long: [
      'For tall industrial buildings the ridge is where the hot air collects, and a continuous ridge ventilator is the most efficient place to release it. The SV-RV is supplied in modular lengths that assemble into a continuous run, with internal baffles that stop rain ingress without throttling the airflow.',
      'Throat width, baffle configuration and damper arrangement are selected from the building heat load, so the installed run delivers the discharge the ventilation calculation assumes.',
    ],
    quickStats: [
      ['Module length', '1.5 m / 3.0 m'],
      ['Throat widths', '450 – 1500 mm'],
      ['Configuration', 'Open, damped or glazed'],
      ['Runs', 'Continuous, unlimited length'],
    ],
    features: [
      { icon: 'layers', title: 'Modular assembly', text: 'Standard modules join into a weather-tight continuous run of any length.' },
      { icon: 'shield', title: 'Rain baffles', text: 'Internal baffle geometry blocks driven rain without restricting discharge.' },
      { icon: 'gauge', title: 'Selectable throat', text: 'Throat width matched to the calculated discharge requirement.' },
      { icon: 'control', title: 'Damper option', text: 'Motorised or manual dampers for winter closure and fire-mode control.' },
      { icon: 'spark', title: 'Glazed option', text: 'Integrated glazing turns the ridge into a continuous daylight strip.' },
      { icon: 'globe', title: 'Corrosion options', text: 'Aluminium, galvanised or stainless construction for aggressive processes.' },
    ],
    specs: [
      {
        group: 'Construction',
        rows: [
          ['Frame', 'Aluminium or galvanised steel'],
          ['Cladding', 'Matched to roof sheet profile'],
          ['Baffles', 'Aluminium, removable for cleaning'],
          ['Module length', '1500 mm / 3000 mm'],
          ['End caps', 'Factory formed, weather sealed'],
        ],
      },
      {
        group: 'Performance',
        rows: [
          ['Throat width', '450 / 600 / 900 / 1200 / 1500 mm'],
          ['Discharge coefficient', 'Certified per configuration'],
          ['Wind load class', 'WL 1500'],
          ['Damper actuation', 'Manual, 24 V DC or 230 V AC'],
          ['Fire mode', 'Full open on alarm (damped versions)'],
        ],
      },
    ],
    applications: [
      'Foundries and heat-process buildings',
      'Manufacturing halls',
      'Livestock and agricultural buildings',
      'Warehouses and cold-chain depots',
      'Workshops and fabrication shops',
      'Power generation buildings',
    ],
    benefits: [
      { title: 'Continuous relief', text: 'Heat is released along the whole ridge rather than at isolated points.' },
      { title: 'Improved working conditions', text: 'Measurable reduction in internal temperatures at the working plane.' },
      { title: 'No running cost', text: 'Stack effect drives the flow — no fan energy for daily heat relief.' },
      { title: 'Fits the roof line', text: 'Cladding-matched profile keeps the elevation clean.' },
    ],
    certifications: [CERT.en2, CERT.ce, CERT.iso, CERT.nfpa204],
    related: ['louvred-roof-ventilator', 'dome-roof-ventilator', 'axial-flow-fan'],
    seo: {
      title: 'Ridge Ventilator | Continuous Natural Ventilation | Sterling Ventilation',
      description:
        'SV-RV continuous ridge ventilators for industrial heat relief. Modular weather-tight runs with selectable throat width, damper and glazed options.',
      keywords: 'ridge ventilator, continuous ridge vent, industrial heat relief, natural ventilation, stack ventilation',
    },
  },
  {
    slug: 'facade-louvre-ventilator',
    name: 'Ventec Blade',
    categories: ['smoke-ventilation'],
    model: 'SV-FLV',
    shape: 'facade',
    tagline: 'Architectural inlet louvres engineered for real free area',
    short:
      'Weather louvres and motorised facade ventilators that provide the low-level inlet air a natural or mechanical ventilation strategy depends on.',
    long: [
      'Inlet air is the half of a ventilation strategy that gets forgotten. Without adequate low-level inlet, extract capacity is wasted and smoke systems under-perform. The SV-FLV range provides architectural weather louvres and motorised facade ventilators with tested free area and rain-defence class.',
      'Blade profiles are selected against the exposure: single-bank drainable blades for sheltered elevations, double-bank storm-resistant profiles where wind-driven rain is a genuine risk.',
    ],
    quickStats: [
      ['Free area', 'Up to 62%'],
      ['Rain defence', 'Class A at 3 m/s'],
      ['Blade banks', 'Single or double'],
      ['Operation', 'Fixed or motorised'],
    ],
    features: [
      { icon: 'gauge', title: 'Tested free area', text: 'Aerodynamic performance measured, not derived from blade geometry.' },
      { icon: 'shield', title: 'Rain defence class', text: 'Class A performance available at facade velocities up to 3 m/s.' },
      { icon: 'layers', title: 'Architectural profiles', text: 'Blade pitch and sightline options that suit the facade design intent.' },
      { icon: 'control', title: 'Motorised variant', text: 'Insulated blades that close tight for envelope performance out of hours.' },
      { icon: 'globe', title: 'Marine finishes', text: 'Anodised and marine-grade coatings for coastal and offshore exposure.' },
      { icon: 'fire', title: 'Smoke inlet duty', text: 'Configurable as certified make-up air inlet for smoke control systems.' },
    ],
    specs: [
      {
        group: 'Construction',
        rows: [
          ['Frame and blades', 'Extruded aluminium 6063 T6'],
          ['Blade banks', 'Single, double or storm-resistant'],
          ['Insulated blades', 'Available on motorised variants'],
          ['Mesh', 'Bird or insect, aluminium or stainless'],
          ['Finish', 'Anodised or polyester powder coat to RAL'],
        ],
      },
      {
        group: 'Performance',
        rows: [
          ['Free area', '38 – 62% (profile dependent)'],
          ['Rain defence', 'Class A / B / C to EN 13030'],
          ['Pressure drop', 'Certified curves per profile'],
          ['Air leakage (closed)', 'Class 3 on insulated motorised units'],
          ['Actuation', '24 V DC or 230 V AC, spring return optional'],
        ],
      },
    ],
    applications: [
      'Low-level make-up air inlets',
      'Plant room and generator rooms',
      'Basement and car park inlets',
      'Data centre free-cooling intakes',
      'Facade screening to plant',
      'Substations and switchrooms',
    ],
    benefits: [
      { title: 'Extraction works as designed', text: 'Correct inlet provision prevents starved fans and plug-holing.' },
      { title: 'Weather protection', text: 'Tested rain-defence keeps water out of plant and basement spaces.' },
      { title: 'Envelope performance', text: 'Insulated motorised blades close tight when ventilation is not required.' },
      { title: 'Clean elevations', text: 'Consistent sightlines across ventilation, screening and intake louvres.' },
    ],
    certifications: [CERT.ce, CERT.en13, CERT.iso, CERT.en2],
    related: ['louvred-roof-ventilator', 'smoke-control-damper', 'axial-flow-fan'],
    seo: {
      title: 'Facade Louvre Ventilator | Weather Louvres | Sterling Ventilation',
      description:
        'SV-FLV architectural weather louvres and motorised facade ventilators with tested free area and Class A rain defence for inlet air and make-up air duty.',
      keywords: 'facade louvre, weather louvre, make-up air inlet, ventilation louvre, rain defence louvre',
    },
  },
  {
    slug: 'sterling-velo',
    name: 'Ventec Velo',
    categories: ['natural-ventilation', 'smoke-ventilation'],
    model: 'VELO',
    shape: 'actuator',
    tagline: 'Louvre window actuation for natural and smoke ventilation',
    short:
      'Motorised louvre window drive from the Ventec range, used for daily natural ventilation and, where the design requires it, for smoke ventilation duty.',
    long: [
      'Ventec Velo drives louvre windows used as natural ventilation openings. Opening area, control strategy and interfaces are set by the ventilation design rather than by the actuator alone, so the unit is selected against the opening it has to move and the duty it has to serve.',
      'Where the same opening also forms part of the smoke ventilation strategy, the drive is interfaced to the smoke control panel so the window is driven to its designed position on activation, in accordance with the building fire strategy and applicable Singapore requirements.',
    ],
    quickStats: [
      ['Range', 'Ventec'],
      ['Duty', 'Natural and smoke ventilation'],
      ['Opening type', 'Louvre windows'],
      ['Interfaces', 'Control system / smoke control panel'],
    ],
    features: [
      { icon: 'vent', title: 'Louvre window drive', text: 'Drives louvre ventilation openings to the position the design requires.' },
      { icon: 'control', title: 'Control system interface', text: 'Operates from the ventilation control system or the smoke control panel.' },
      { icon: 'fire', title: 'Smoke ventilation duty', text: 'Driven to the designed position on activation where the opening serves the smoke strategy.' },
      { icon: 'target', title: 'Selected to the opening', text: 'Specified against the actual window geometry, weight and required travel.' },
    ],
    specs: [
      {
        group: 'Selection',
        rows: [
          ['Opening type', 'Louvre windows'],
          ['Duty', 'Natural ventilation; smoke ventilation where designed'],
          ['Control', 'Ventilation control system or smoke control panel interface'],
          ['Performance data', 'Confirmed at selection against the project opening schedule'],
        ],
      },
    ],
    applications: ['Louvre windows', 'Facade ventilation openings', 'Atrium and high-level ventilation'],
    benefits: [
      { title: 'Enhanced life safety', text: 'Supports the smoke ventilation strategy where the opening forms part of it.' },
      { title: 'Effective air replacement', text: 'Provides controlled ventilation openings for fresh air supply and air movement.' },
      { title: 'Reliable system operation', text: 'Driven and monitored from the ventilation or smoke control system.' },
      { title: 'Regulatory compliance', text: 'Applied in line with applicable Singapore codes, standards and requirements.' },
    ],
    certifications: [CERT.ce],
    related: ['window-actuator', 'sterling-kas-s6a', 'smoke-control-panel'],
    seo: {
      title: 'Ventec Velo | Louvre Window Actuator | Sterling Ventilation',
      description:
        'Ventec Velo louvre window actuator for natural ventilation and smoke ventilation openings, interfaced to the ventilation control system or smoke control panel.',
      keywords: 'Ventec Velo, louvre window actuator, natural ventilation, smoke ventilation, Sterling Ventilation Singapore',
    },
  },
  {
    slug: 'sterling-kas-s6a',
    name: 'Ventec KAS S6A',
    categories: ['smoke-ventilation'],
    model: 'KAS S6A',
    shape: 'actuator',
    tagline: 'Pivot AOV actuation for smoke ventilation openings',
    short:
      'Automatic opening vent (AOV) drive from the Ventec range for pivot windows and vents forming part of the smoke ventilation strategy.',
    long: [
      'Ventec KAS S6A operates pivot windows and vents used as automatic opening vents. The unit is selected against the vent it has to drive and the position that vent must reach when the system operates.',
      'Openings are engineered to provide reliable operation during fire conditions, with consideration given to smoke movement, ventilation openings, airflow, system activation, controls, fire-rated construction and integration with other fire protection systems.',
    ],
    quickStats: [
      ['Range', 'Ventec'],
      ['Duty', 'Automatic opening vent (AOV)'],
      ['Opening type', 'Pivot windows and vents'],
      ['Interfaces', 'Smoke control panel'],
    ],
    features: [
      { icon: 'fire', title: 'AOV duty', text: 'Drives the vent to its designed smoke ventilation position on activation.' },
      { icon: 'control', title: 'Panel controlled', text: 'Operated and monitored from the smoke control panel.' },
      { icon: 'vent', title: 'Pivot vent drive', text: 'Suited to pivot windows and vents used as smoke ventilation openings.' },
      { icon: 'target', title: 'Selected to the vent', text: 'Specified against the actual vent geometry, weight and required travel.' },
    ],
    specs: [
      {
        group: 'Selection',
        rows: [
          ['Opening type', 'Pivot windows and vents'],
          ['Duty', 'Automatic opening vent, smoke ventilation'],
          ['Control', 'Smoke control panel interface'],
          ['Performance data', 'Confirmed at selection against the project vent schedule'],
        ],
      },
    ],
    applications: ['Pivot AOV windows', 'Stairwell smoke vents', 'Lobby and corridor vents'],
    benefits: [
      { title: 'Enhanced life safety', text: 'Opens the designed smoke ventilation area when the system operates.' },
      { title: 'Effective smoke clearance', text: 'Provides the ventilation opening the smoke strategy relies on.' },
      { title: 'Reliable system operation', text: 'Engineered for reliable operation during fire conditions.' },
      { title: 'Regulatory compliance', text: 'Applied in line with applicable Singapore fire safety requirements.' },
    ],
    certifications: [CERT.ce, CERT.en2],
    related: ['window-actuator', 'sterling-velo', 'smoke-control-panel'],
    seo: {
      title: 'Ventec KAS S6A | Pivot AOV Actuator | Sterling Ventilation',
      description:
        'Ventec KAS S6A automatic opening vent actuator for pivot windows and smoke ventilation openings, controlled from the smoke control panel.',
      keywords: 'Ventec KAS S6A, AOV actuator, automatic opening vent, smoke ventilation, Sterling Ventilation Singapore',
    },
  },
  {
    slug: 'sterling-500-cb',
    name: 'Ventec 500cp',
    categories: ['smoke-ventilation'],
    model: '500cp',
    shape: 'panel',
    tagline: 'Multi-zone control for smoke ventilation systems',
    short:
      'Multi-zone control and indicating panel from the Ventec range, sequencing smoke ventilation openings, actuators and interfaces across several zones.',
    long: [
      'Ventec 500cp is the multi-zone control panel in the Ventec range. It sequences smoke ventilation openings, actuators, vents and associated devices across a number of zones, and presents system status and manual control to the operator.',
      'Panel configuration follows the control philosophy for the project — activation sequences, zone allocation and interfaces with fire alarm systems, control panels, BMS, electrical systems and other building services are coordinated as part of the wider smoke control design.',
    ],
    quickStats: [
      ['Range', 'Ventec'],
      ['Duty', 'Multi-zone smoke ventilation control'],
      ['Operation', 'Automatic and manual'],
      ['Interfaces', 'Fire alarm, BMS, field devices'],
    ],
    features: [
      { icon: 'control', title: 'Multi-zone sequencing', text: 'Sequences openings, actuators and vents across several zones.' },
      { icon: 'fire', title: 'Fire alarm interface', text: 'Activates on the agreed cause-and-effect from the fire alarm system.' },
      { icon: 'layers', title: 'Building services integration', text: 'Coordinated with control panels, BMS and electrical systems.' },
      { icon: 'gauge', title: 'Status and manual control', text: 'System status indication with authorised manual intervention.' },
    ],
    specs: [
      {
        group: 'System',
        rows: [
          ['Duty', 'Multi-zone smoke ventilation control'],
          ['Operation', 'Automatic activation with manual override'],
          ['Interfaces', 'Fire alarm, BMS, electrical and field devices'],
          ['Configuration', 'Set from the project control philosophy'],
        ],
      },
    ],
    applications: ['Multi-zone smoke ventilation systems', 'Stair and lobby vent systems', 'Networked panel installations'],
    benefits: [
      { title: 'Enhanced life safety', text: 'Drives the smoke ventilation system to its designed fire position.' },
      { title: 'Effective smoke clearance', text: 'Zone sequencing opens the vents the strategy depends on.' },
      { title: 'Reliable system operation', text: 'Automatic activation with authorised manual intervention.' },
      { title: 'Regulatory compliance', text: 'Configured to the approved control philosophy and applicable requirements.' },
    ],
    certifications: [CERT.ce],
    related: ['smoke-control-panel', 'sterling-kas-s6a'],
    seo: {
      title: 'Ventec 500cp | Multi-Zone Smoke Ventilation Control Panel | Sterling Ventilation',
      description:
        'Ventec 500cp multi-zone control and indicating panel for smoke ventilation systems, sequencing vents and actuators with fire alarm and BMS interfaces.',
      keywords: 'Ventec 500cp, smoke ventilation control panel, multi zone control panel, AOV control panel Singapore',
    },
  },

  {
    slug: 'smoke-control-damper',
    name: 'Smoke Damper SCD LD',
    categories: ['smoke-extraction'],
    model: 'SCD LD',
    shape: 'damper',
    tagline: 'Zonal control of where smoke is extracted from',
    short:
      'Motorised smoke control dampers that open the fire zone to the extract system and hold every other zone closed, classified to EN 12101-8.',
    long: [
      'In a multi-zone extraction system the dampers decide where the air comes from. Extracting from the wrong zone wastes the whole installed capacity, so damper classification, leakage and actuation time are as critical as the fan duty.',
      'The SCD LD is classified for both fire resistance and smoke leakage, with actuators rated to drive the blade at elevated temperature. Multi-section assemblies cover large duct and shaft openings from a single control signal.',
    ],
    quickStats: [
      ['Classification', 'EIS 120 (ve ho i↔o)'],
      ['Leakage', 'Class 2 / S'],
      ['Actuation', '< 60 s full stroke'],
      ['Sizes', 'To 2000 × 1500 mm per section'],
    ],
    features: [
      { icon: 'fire', title: 'Fire and smoke rated', text: 'Classified to EN 1366-10 for integrity, insulation and smoke leakage.' },
      { icon: 'gauge', title: 'Low leakage', text: 'Blade and jamb seals hold Class 2 leakage in the closed position.' },
      { icon: 'control', title: 'Monitored actuation', text: 'End-of-travel feedback proves damper position to the control panel.' },
      { icon: 'layers', title: 'Multi-section', text: 'Assemblies built up to cover full shaft and duct openings.' },
      { icon: 'shield', title: 'High-temperature drive', text: 'Actuators rated to operate at the fire-mode air temperature.' },
      { icon: 'wrench', title: 'Access designed in', text: 'Inspection panels and removable linkage for statutory testing.' },
    ],
    specs: [
      {
        group: 'Classification',
        rows: [
          ['Fire classification', 'EIS 120 (ve ho i↔o) S'],
          ['Test standard', 'EN 1366-2 / EN 1366-10'],
          ['Product standard', 'EN 12101-8'],
          ['Leakage class', 'Class 2 (closed), Class C casing'],
          ['Cycle rating', '20,000 cycles'],
        ],
      },
      {
        group: 'Construction',
        rows: [
          ['Casing', 'Galvanised steel, stainless optional'],
          ['Blades', 'Multi-leaf, opposed or parallel action'],
          ['Seals', 'Intumescent and silicone edge seals'],
          ['Sizes', '200 × 200 mm to 2000 × 1500 mm per section'],
          ['Actuator', '24 V / 230 V spring return or motorised'],
          ['Position feedback', 'Volt-free open and closed contacts'],
        ],
      },
    ],
    applications: [
      'Basement car park extract zones',
      'Multi-storey shaft extract systems',
      'Atrium and mall reservoir zoning',
      'Hotel and residential corridor systems',
      'Make-up air path control',
      'Plant room isolation',
    ],
    benefits: [
      { title: 'Full capacity where it counts', text: 'Zoning directs the whole extract rate at the fire zone.' },
      { title: 'Compartmentation maintained', text: 'Rated closed dampers preserve the compartment line through ductwork.' },
      { title: 'Proven position', text: 'Monitored feedback removes any doubt at commissioning and in service.' },
      { title: 'Testable in service', text: 'Access and cycle rating designed around the statutory testing regime.' },
    ],
    certifications: [CERT.en8, CERT.ce, CERT.iso, CERT.scdf],
    related: ['smoke-control-panel'],
    seo: {
      title: 'Smoke Damper SCD LD | EN 12101-8 | Sterling Ventilation',
      description:
        'Smoke Damper SCD LD motorised smoke control dampers classified EIS 120 to EN 12101-8 and EN 1366-10, with monitored actuation and multi-section shaft assemblies.',
      keywords: 'Smoke Damper SCD LD, smoke control damper, EN 12101-8, EN 1366-10, motorised smoke damper, extract zoning',
    },
  },
  {
    slug: 'smoke-control-panel',
    name: 'Ventec 400cp',
    categories: ['natural-ventilation', 'smoke-ventilation'],
    model: '400cp',
    shape: 'panel',
    tagline: 'The logic layer that makes the system a system',
    short:
      'PLC-based smoke control and indicating panels that execute the cause-and-effect matrix, monitor every field device and present clear firefighter override.',
    long: [
      'Every component of a smoke control installation depends on the panel that operates it. It has to decide which zone extracts, which curtains descend and which dampers open — in seconds, on backed-up power, with a clear manual override for the fire service.',
      'The Ventec 400cp is built to EN 12101-9 and EN 12101-10 with monitored outputs, integral battery support and a zone mimic display. It sequences natural ventilation openings for daily duty and drives them to their designed fire position on activation.',
    ],
    quickStats: [
      ['Standards', 'EN 12101-9 / -10'],
      ['Zones', '1 – 64 per panel'],
      ['Standby', '24 / 72 hours'],
      ['Interfaces', 'BACnet, Modbus, volt-free'],
    ],
    features: [
      { icon: 'control', title: 'Cause and effect engine', text: 'Deterministic, testable sequencing agreed with the fire engineer.' },
      { icon: 'shield', title: 'Monitored circuits', text: 'Open and short circuit detection on every field device connection.' },
      { icon: 'fire', title: 'Firefighter override', text: 'Clearly labelled manual control at the fire command point.' },
      { icon: 'gauge', title: 'Graphical mimic', text: 'Zone status, device faults and system mode on a single display.' },
      { icon: 'layers', title: 'BMS integration', text: 'BACnet/IP and Modbus for comfort-mode control and reporting.' },
      { icon: 'wrench', title: 'Testable in service', text: 'Supports the periodic testing and functional verification regime.' },
    ],
    specs: [
      {
        group: 'Electrical',
        rows: [
          ['Supply', '230 V AC, essential circuit'],
          ['Battery standby', '24 h or 72 h per code requirement'],
          ['Output monitoring', 'Open / short circuit per zone'],
          ['Enclosure', 'IP 55 painted steel, RAL 7035'],
          ['Cabling', 'Fire-rated, circuit-integrity classified'],
        ],
      },
      {
        group: 'System',
        rows: [
          ['Standards', 'EN 12101-9 (control), EN 12101-10 (power)'],
          ['Zones', '1 to 64 per panel, networkable'],
          ['Inputs', 'Fire alarm volt-free, detector, manual call'],
          ['Interfaces', 'BACnet/IP, Modbus RTU/TCP, volt-free'],
          ['Display', '7" or 10" graphical mimic'],
          ['Testing', 'Functional verification and event log'],
        ],
      },
    ],
    applications: [
      'Multi-zone commercial developments',
      'Shopping centres and mixed-use',
      'Hospitals and healthcare campuses',
      'Transport infrastructure',
      'Data centres and critical facilities',
      'Retrofit and system upgrades',
    ],
    benefits: [
      { title: 'One version of the truth', text: 'A single cause-and-effect shared by fire alarm, smoke control and BMS.' },
      { title: 'Faster commissioning', text: 'Simulated device testing shortens the integrated systems test.' },
      { title: 'Audit-ready records', text: 'Logging of tests, faults and manual interventions to support handover documentation.' },
      { title: 'Serviceable for decades', text: 'Standard industrial PLC hardware with long-term parts availability.' },
    ],
    certifications: [CERT.en9, CERT.ce, CERT.ip, CERT.scdf],
    related: ['smoke-control-damper'],
    seo: {
      title: 'Ventec 400cp | Smoke Control Panel | Sterling Ventilation',
      description:
        'Ventec 400cp smoke control and indicating panel to EN 12101-9 and EN 12101-10, with monitored outputs, firefighter override and BMS integration, for natural and smoke ventilation systems.',
      keywords: 'Ventec 400cp, smoke control panel, EN 12101-9, natural ventilation control panel, AOV control panel',
    },
  },
  {
    slug: 'smoke-extract-fan',
    name: 'Smoke Extraction Fan',
    categories: ['smoke-extraction'],
    model: 'SV-SEF',
    shape: 'fan',
    tagline: 'Dedicated extraction for mechanical smoke control systems',
    short:
      'Dedicated smoke extraction fans that remove smoke from designated areas as part of a mechanical smoke control system, sized from the building configuration and required airflow.',
    long: [
      'Mechanical smoke control systems use dedicated fans, ductwork, dampers and air supply arrangements to extract smoke from designated areas and provide replacement air where required. The fan is selected as part of that system rather than in isolation — extract rate, duct resistance and replacement air provision are resolved together.',
      'Systems can be applied to corridors, lobbies, staircases, smoke shafts, car parks and other areas in accordance with the building’s fire safety strategy. Each installation is engineered from the building configuration, smoke control objectives, required airflow, fire strategy and the applicable Singapore Fire Code and relevant standards.',
    ],
    quickStats: [
      ['Duty', 'Mechanical smoke extraction'],
      ['Certification', 'EN 12101-3'],
      ['Operation', 'Automatic and manual'],
      ['Control', 'Fire-rated cabling, battery back-up'],
    ],
    features: [
      { icon: 'extract', title: 'Dedicated smoke duty', text: 'Selected for smoke extraction rather than adapted from a comfort ventilation fan.' },
      { icon: 'fire', title: 'Certified to EN 12101-3', text: 'Powered smoke and heat exhaust ventilator certification for fire-mode operation.' },
      { icon: 'control', title: 'Resilient control', text: 'Fire-rated cabling with battery back-up so the fan runs when it is needed.' },
      { icon: 'layers', title: 'Part of a system', text: 'Coordinated with ductwork, dampers and replacement air arrangements.' },
      { icon: 'target', title: 'Sized from the design', text: 'Airflow derived from the building configuration and smoke control objectives.' },
      { icon: 'gauge', title: 'Verified performance', text: 'Substantiated by engineering calculation and, where required, CFD.' },
    ],
    specs: [
      {
        group: 'Certification',
        rows: [
          ['Fan certification', 'EN 12101-3'],
          ['Damper certification', 'EN 12101-8 (associated dampers)'],
          ['Duct classification', '1.2 mm thick, fire resistant'],
        ],
      },
      {
        group: 'Control & verification',
        rows: [
          ['Control', 'Fire-rated cabling and battery back-up'],
          ['Operation', 'Automatic activation with manual control'],
          ['Verification', 'Engineering calculation / CFD'],
        ],
      },
    ],
    applications: [
      'Corridors and lobbies',
      'Staircases and smoke shafts',
      'Car parks',
      'Atria and large-volume spaces',
      'Basement and enclosed areas',
    ],
    benefits: [
      { title: 'Effective smoke extraction', text: 'Removes smoke from designated areas to support evacuation and fire-fighting.' },
      { title: 'Controlled airflow', text: 'Extract rate and replacement air engineered as a balanced system.' },
      { title: 'Multi-level applications', text: 'Applied across corridors, lobbies, staircases, shafts and car parks.' },
      { title: 'Integrated operation', text: 'Sequenced with dampers, controls and other fire protection systems.' },
      { title: 'Automatic and manual control', text: 'Activated automatically, with authorised manual intervention available.' },
      { title: 'Reliable fire performance', text: 'Certified for fire-mode duty with resilient power and control.' },
    ],
    certifications: [CERT.en3, CERT.ce, CERT.scdf],
    related: ['smoke-control-damper', 'smoke-control-panel'],
    seo: {
      title: 'Smoke Extraction Fan | EN 12101-3 | Sterling Ventilation',
      description:
        'Dedicated smoke extraction fans certified to EN 12101-3 for mechanical smoke control systems in corridors, lobbies, staircases, smoke shafts and car parks.',
      keywords: 'smoke extraction fan, EN 12101-3, mechanical smoke extraction, car park smoke extract, Singapore Fire Code',
    },
  },
];

/* --------------------------------- helpers -------------------------------- */

/** Every category a product belongs to. Products may sit in more than one. */
export const categoriesOf = (product) => product?.categories || [];

/** The category used for breadcrumbs, SEO and the product hero label. */
export const primaryCategoryId = (product) => categoriesOf(product)[0];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const getCategory = (id) => productCategories.find((c) => c.id === id);

export const productsByCategory = (id) => products.filter((p) => categoriesOf(p).includes(id));

export const categoriesWithProducts = () =>
  productCategories.map((c) => ({ ...c, items: productsByCategory(c.id) }));

export const relatedProducts = (product) =>
  (product?.related || []).map(getProduct).filter(Boolean);
