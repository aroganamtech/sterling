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
    id: 'natural-ventilation',
    name: 'Smoke Ventilator',
    icon: 'vent',
    tagline: 'Buoyancy and wind-driven ventilation',
    blurb:
      'Roof, ridge and facade ventilators plus the actuators that drive them — daily comfort ventilation and heat relief without fan energy.',
    accent: 'ember',
  },
  {
    id: 'mechanical-ventilation',
    name: 'Mechanical Ventilation',
    icon: 'extract',
    tagline: 'Powered air movement and extraction',
    blurb:
      'Adjustable-pitch axial flow fans for general ventilation, process extraction and heat relief, selected from certified curves at the real system resistance.',
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
  /* ======================= NATURAL VENTILATION ======================= */
  {
    slug: 'louvred-roof-ventilator',
    name: 'Sterling Ostro',
    category: 'natural-ventilation',
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
    name: 'Sterling Elite',
    category: 'natural-ventilation',
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
    name: 'Sterling Access',
    category: 'natural-ventilation',
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
    name: 'Sterling LAM',
    category: 'natural-ventilation',
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
    name: 'Sterling Blade',
    category: 'natural-ventilation',
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
    // PLACEHOLDER — added at client request, no verified specs/photos supplied yet.
    // Structure and copy cloned from 'window-actuator'. Replace before publishing.
    slug: 'sterling-velo',
    name: 'Sterling Velo',
    category: 'natural-ventilation',
    model: 'SV-VELO',
    shape: 'actuator',
    tagline: 'Louvre window actuation for controlled natural ventilation',
    short:
      'PLACEHOLDER SPEC — replace with verified data. Motorised louvre window drive for daily comfort ventilation, sized and controlled to match the opening.',
    long: [
      'PLACEHOLDER — this page was created from a reference name and product type only. Confirm real performance data, certifications and photography before publishing.',
      'Intended as a louvre-window drive covering the same mixed-mode comfort and life-safety duty as the rest of the Sterling actuator range.',
    ],
    quickStats: [
      ['Stroke', 'TBC'],
      ['Thrust / pull', 'TBC'],
      ['Supply', '24 V DC'],
      ['Protection', 'IP 55 (TBC)'],
    ],
    features: [
      { icon: 'target', title: 'Adjustable stroke', text: 'Placeholder — confirm actual travel range.' },
      { icon: 'gauge', title: 'Position feedback', text: 'Placeholder — confirm actual signal type.' },
      { icon: 'fire', title: 'Fire override', text: 'Placeholder — confirm fire-mode behaviour.' },
    ],
    specs: [
      {
        group: 'Electrical',
        rows: [
          ['Supply voltage', '24 V DC (TBC)'],
          ['Control', 'TBC'],
        ],
      },
    ],
    applications: ['Louvre windows', 'Facade ventilation'],
    benefits: [{ title: 'Mixed-mode operation', text: 'Placeholder benefit text — confirm before publishing.' }],
    certifications: [CERT.ce],
    related: ['window-actuator', 'sterling-centro', 'sterling-kas-s6a'],
    seo: {
      title: 'Sterling Velo | Louvre Window Actuator | Sterling Ventilation (Draft)',
      description: 'Placeholder listing — content pending verification.',
      keywords: 'sterling velo, louvre window actuator',
    },
  },
  {
    // PLACEHOLDER — added at client request, no verified specs/photos supplied yet.
    // Structure and copy cloned from 'window-actuator'. Replace before publishing.
    slug: 'sterling-centro',
    name: 'Sterling Centro',
    category: 'natural-ventilation',
    model: 'SV-CENTRO',
    shape: 'actuator',
    tagline: 'Central pivot window actuation',
    short:
      'PLACEHOLDER SPEC — replace with verified data. Motorised drive for central pivot windows used in natural ventilation schemes.',
    long: [
      'PLACEHOLDER — this page was created from a reference name and product type only. Confirm real performance data, certifications and photography before publishing.',
      'Intended for centre-pivot sashes where a balanced, synchronised drive is needed to keep the window square through its travel.',
    ],
    quickStats: [
      ['Stroke', 'TBC'],
      ['Thrust / pull', 'TBC'],
      ['Supply', '24 V DC'],
      ['Protection', 'IP 55 (TBC)'],
    ],
    features: [
      { icon: 'layers', title: 'Synchronised drives', text: 'Placeholder — confirm actual sync arrangement.' },
      { icon: 'gauge', title: 'Position feedback', text: 'Placeholder — confirm actual signal type.' },
      { icon: 'fire', title: 'Fire override', text: 'Placeholder — confirm fire-mode behaviour.' },
    ],
    specs: [
      {
        group: 'Electrical',
        rows: [
          ['Supply voltage', '24 V DC (TBC)'],
          ['Control', 'TBC'],
        ],
      },
    ],
    applications: ['Central pivot windows', 'Atrium high-level ventilation'],
    benefits: [{ title: 'Balanced actuation', text: 'Placeholder benefit text — confirm before publishing.' }],
    certifications: [CERT.ce],
    related: ['window-actuator', 'sterling-velo', 'sterling-kas-s6a'],
    seo: {
      title: 'Sterling Centro | Central Pivot Window Actuator | Sterling Ventilation (Draft)',
      description: 'Placeholder listing — content pending verification.',
      keywords: 'sterling centro, central pivot window actuator',
    },
  },
  {
    // PLACEHOLDER — added at client request, no verified specs/photos supplied yet.
    // Structure and copy cloned from 'window-actuator'. Replace before publishing.
    slug: 'sterling-kas-s6a',
    name: 'Sterling KAS S6A',
    category: 'natural-ventilation',
    model: 'KAS S6A',
    shape: 'actuator',
    tagline: 'Pivot AOV window actuation',
    short:
      'PLACEHOLDER SPEC — replace with verified data. Automatic opening vent (AOV) drive for pivot windows, serving both comfort ventilation and smoke vent duty.',
    long: [
      'PLACEHOLDER — this page was created from a reference name and product type only. Confirm real performance data, certifications and photography before publishing.',
      'Positioned as an AOV-duty pivot window actuator — daily ventilation with a fire-alarm-driven override to the vent position.',
    ],
    quickStats: [
      ['Stroke', 'TBC'],
      ['Thrust / pull', 'TBC'],
      ['Supply', '24 V DC'],
      ['Protection', 'IP 55 (TBC)'],
    ],
    features: [
      { icon: 'fire', title: 'Fire override', text: 'Placeholder — confirm AOV fire-mode behaviour.' },
      { icon: 'gauge', title: 'Position feedback', text: 'Placeholder — confirm actual signal type.' },
      { icon: 'shield', title: 'Obstruction detection', text: 'Placeholder — confirm before publishing.' },
    ],
    specs: [
      {
        group: 'Electrical',
        rows: [
          ['Supply voltage', '24 V DC (TBC)'],
          ['Control', 'TBC'],
        ],
      },
    ],
    applications: ['Pivot AOV windows', 'Stairwell smoke vents (AOV)'],
    benefits: [{ title: 'Dual comfort / life-safety duty', text: 'Placeholder benefit text — confirm before publishing.' }],
    certifications: [CERT.ce, CERT.en2],
    related: ['window-actuator', 'sterling-velo', 'sterling-centro'],
    seo: {
      title: 'Sterling KAS S6A | Pivot AOV Window Actuator | Sterling Ventilation (Draft)',
      description: 'Placeholder listing — content pending verification.',
      keywords: 'sterling kas s6a, pivot AOV window actuator',
    },
  },
  {
    // PLACEHOLDER — added at client request, no verified specs/photos supplied yet.
    // Structure and copy cloned from 'smoke-control-panel'. Replace before publishing.
    slug: 'sterling-500-cb',
    name: 'Sterling 500-CB',
    category: 'natural-ventilation',
    model: '500-CB',
    shape: 'panel',
    tagline: 'Multi-zone control panel',
    short:
      'PLACEHOLDER SPEC — replace with verified data. Multi-zone control and indicating panel for larger installations spanning several zones.',
    long: [
      'PLACEHOLDER — this page was created from a reference name and product type only. Confirm real performance data, certifications and photography before publishing.',
      'Positioned as the multi-zone counterpart to the Sterling 400 Series single-zone panel, for larger networked installations.',
    ],
    quickStats: [
      ['Zones', 'Multi-zone (TBC)'],
      ['Standby', 'TBC'],
      ['Interfaces', 'TBC'],
      ['Standards', 'TBC'],
    ],
    features: [
      { icon: 'control', title: 'Multi-zone sequencing', text: 'Placeholder — confirm actual zone capacity.' },
      { icon: 'shield', title: 'Monitored circuits', text: 'Placeholder — confirm before publishing.' },
      { icon: 'layers', title: 'BMS integration', text: 'Placeholder — confirm actual interfaces.' },
    ],
    specs: [
      {
        group: 'System',
        rows: [
          ['Zones', 'TBC'],
          ['Interfaces', 'TBC'],
        ],
      },
    ],
    applications: ['Multi-zone commercial developments', 'Networked panel installations'],
    benefits: [{ title: 'Scales across zones', text: 'Placeholder benefit text — confirm before publishing.' }],
    certifications: [CERT.ce],
    related: ['smoke-control-panel', 'smoke-control-damper'],
    seo: {
      title: 'Sterling 500-CB | Multi Zone Control Panel | Sterling Ventilation (Draft)',
      description: 'Placeholder listing — content pending verification.',
      keywords: 'sterling 500-cb, multi zone control panel',
    },
  },

  {
    slug: 'smoke-control-damper',
    name: 'Sterling SCD LDN',
    category: 'natural-ventilation',
    model: 'SV-SCD',
    shape: 'damper',
    tagline: 'Zonal control of where smoke is extracted from',
    short:
      'Motorised smoke control dampers that open the fire zone to the extract system and hold every other zone closed, classified to EN 12101-8.',
    long: [
      'In a multi-zone extraction system the dampers decide where the air comes from. Extracting from the wrong zone wastes the whole installed capacity, so damper classification, leakage and actuation time are as critical as the fan duty.',
      'The SV-SCD is classified for both fire resistance and smoke leakage, with actuators rated to drive the blade at elevated temperature. Multi-section assemblies cover large duct and shaft openings from a single control signal.',
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
      title: 'Smoke Control Damper | EN 12101-8 | Sterling Ventilation',
      description:
        'SV-SCD motorised smoke control dampers classified EIS 120 to EN 12101-8 and EN 1366-10, with monitored actuation and multi-section shaft assemblies.',
      keywords: 'smoke control damper, EN 12101-8, EN 1366-10, motorised fire damper, smoke damper, extract zoning',
    },
  },
  {
    slug: 'smoke-control-panel',
    name: 'Sterling 400 Series',
    category: 'natural-ventilation',
    model: 'SV-SCP',
    shape: 'panel',
    tagline: 'The logic layer that makes the system a system',
    short:
      'PLC-based smoke control and indicating panels that execute the cause-and-effect matrix, monitor every field device and present clear firefighter override.',
    long: [
      'Every component of a smoke control installation depends on the panel that operates it. It has to decide which zone extracts, which curtains descend and which dampers open — in seconds, on backed-up power, with a clear manual override for the fire service.',
      'The SV-SCP is built to EN 12101-9 and EN 12101-10 with monitored outputs, integral battery support and a graphical zone mimic. IoT telemetry turns weekly statutory testing into an automatic logged record instead of a clipboard exercise.',
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
      { icon: 'spark', title: 'IoT monitoring', text: 'Automatic weekly self-test with remote logging and fault alerting.' },
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
          ['Self test', 'Automatic weekly cycle with event log'],
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
      { title: 'Audit-ready records', text: 'Automatic logging of every test, fault and manual intervention.' },
      { title: 'Serviceable for decades', text: 'Standard industrial PLC hardware with long-term parts availability.' },
    ],
    certifications: [CERT.en9, CERT.ce, CERT.ip, CERT.scdf],
    related: ['smoke-control-damper'],
    seo: {
      title: 'Smoke Control Panel | EN 12101-9 PLC Control | Sterling Ventilation',
      description:
        'SV-SCP PLC smoke control and indicating panels to EN 12101-9 and EN 12101-10, with monitored outputs, firefighter override, BMS integration and IoT self-test logging.',
      keywords: 'smoke control panel, EN 12101-9, fire smoke control system, PLC smoke panel, firefighter override panel',
    },
  },

  /* ====================== MECHANICAL VENTILATION ====================== */
  {
    slug: 'axial-flow-fan',
    name: 'Axial Flow Fan',
    category: 'mechanical-ventilation',
    model: 'SV-AXL',
    shape: 'axial',
    tagline: 'High volume, low pressure, precisely selected',
    short:
      'Adjustable-pitch axial flow fans for general ventilation, process extraction and heat relief, selected from certified curves at the real system resistance.',
    long: [
      'Axial fans move large volumes efficiently where system resistance is moderate — which describes most general building and industrial ventilation. The efficiency you actually achieve depends almost entirely on whether the fan was selected at the correct duty point.',
      'The SV-AXL range uses adjustable-pitch aerofoil impellers so the installed fan can be trimmed to the measured system resistance at commissioning, rather than throttled with a damper for the rest of its life.',
    ],
    quickStats: [
      ['Airflow', '0.5 – 45 m³/s'],
      ['Static pressure', 'To 1200 Pa'],
      ['Impeller', '315 – 1800 mm'],
      ['Efficiency', 'IE3 / IE4 motors'],
    ],
    features: [
      { icon: 'gauge', title: 'Adjustable pitch', text: 'Blade angle trimmed at commissioning to hit the measured duty exactly.' },
      { icon: 'spark', title: 'Aerofoil impeller', text: 'Cast aluminium aerofoil blades for high efficiency and low noise.' },
      { icon: 'control', title: 'Variable speed ready', text: 'Inverter-duty motors with insulated bearings as standard above 15 kW.' },
      { icon: 'layers', title: 'Mounting options', text: 'In-line, wall, roof cowl, bifurcated and short-cased arrangements.' },
      { icon: 'globe', title: 'Environmental options', text: 'Epoxy coating, stainless hardware and ATEX construction available.' },
      { icon: 'wrench', title: 'Serviceable', text: 'Split casing and slide-out motor assemblies for in-situ maintenance.' },
    ],
    specs: [
      {
        group: 'Aerodynamic',
        rows: [
          ['Impeller diameter', '315 – 1800 mm'],
          ['Airflow range', '0.5 – 45 m³/s'],
          ['Static pressure', 'Up to 1200 Pa'],
          ['Blade material', 'Cast aluminium aerofoil'],
          ['Blade pitch', 'Adjustable at standstill'],
          ['Test standard', 'AMCA 210 / ISO 5801'],
        ],
      },
      {
        group: 'Mechanical & electrical',
        rows: [
          ['Casing', 'Galvanised or epoxy coated steel'],
          ['Motor', 'IE3 / IE4, 380–415 V 3 ph 50 Hz'],
          ['Bearings', 'L10 100,000 hour design life'],
          ['Protection', 'IP 55 standard, IP 66 optional'],
          ['Options', 'Guards, silencers, anti-vibration mounts'],
          ['Sound data', 'Certified octave band, inlet and outlet'],
        ],
      },
    ],
    applications: [
      'General building ventilation',
      'Industrial process extraction',
      'Warehouse heat relief',
      'Plant room and generator ventilation',
      'Kitchen and laundry extract',
      'Agricultural and livestock buildings',
    ],
    benefits: [
      { title: 'Lower running cost', text: 'Correct duty selection avoids the throttling losses that dominate fan energy.' },
      { title: 'Quieter installation', text: 'Aerofoil blades and certified sound data support acoustic compliance.' },
      { title: 'Adaptable after handover', text: 'Pitch adjustment absorbs changes in system resistance over time.' },
      { title: 'Long bearing life', text: '100,000 hour bearing design life reduces intervention frequency.' },
    ],
    certifications: [CERT.amca, CERT.ce, CERT.eurovent, CERT.iso],
    related: ['smoke-control-damper', 'smoke-control-panel'],
    seo: {
      title: 'Axial Flow Fan | Adjustable Pitch Industrial Fans | Sterling Ventilation',
      description:
        'SV-AXL adjustable pitch axial flow fans, 0.5–45 m³/s to 1200 Pa, AMCA certified performance, IE3/IE4 motors and inverter-ready construction.',
      keywords: 'axial flow fan, industrial fan, adjustable pitch fan, AMCA certified fan, ventilation fan Singapore',
    },
  },
];

/* --------------------------------- helpers -------------------------------- */

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const getCategory = (id) => productCategories.find((c) => c.id === id);

export const productsByCategory = (id) => products.filter((p) => p.category === id);

export const categoriesWithProducts = () =>
  productCategories.map((c) => ({ ...c, items: productsByCategory(c.id) }));

export const relatedProducts = (product) =>
  (product?.related || []).map(getProduct).filter(Boolean);
