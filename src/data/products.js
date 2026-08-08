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
    name: 'Natural Ventilation',
    icon: 'vent',
    tagline: 'Buoyancy and wind-driven ventilation',
    blurb:
      'Roof, ridge and facade ventilators plus the actuators that drive them — daily comfort ventilation and heat relief without fan energy.',
    accent: 'ember',
  },
  {
    id: 'smoke-ventilation',
    name: 'Smoke Ventilation',
    icon: 'curtain',
    tagline: 'Life safety smoke and heat control',
    blurb:
      'Certified smoke curtains, ventilators, dampers, fans and control equipment that contain smoke, protect escape routes and support firefighting.',
    accent: 'ember',
  },
  {
    id: 'mechanical-ventilation',
    name: 'Mechanical Ventilation',
    icon: 'extract',
    tagline: 'Powered air movement and extraction',
    blurb:
      'Axial, centrifugal, jet and tunnel fans plus air handling equipment for pollutant control, process ventilation and fire-mode duty.',
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
    name: 'Louvred Roof Ventilator',
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
    name: 'Window Actuator',
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
    name: 'Dome Roof Ventilator',
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
    related: ['louvred-roof-ventilator', 'window-actuator', 'smoke-ventilator'],
    seo: {
      title: 'Dome Roof Ventilator | Daylight & Natural Ventilation | Sterling Ventilation',
      description:
        'SV-DRV polycarbonate dome roof ventilator combining daylight and natural ventilation, with an optional EN 12101-2 certified smoke and heat exhaust variant.',
      keywords: 'dome roof ventilator, rooflight ventilator, polycarbonate dome, natural ventilation, SHEVS dome',
    },
  },
  {
    slug: 'ridge-ventilator',
    name: 'Ridge Ventilator',
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
    name: 'Facade Louvre Ventilator',
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

  /* ======================== SMOKE VENTILATION ======================== */
  {
    slug: 'smoke-curtain',
    name: 'Smoke Curtain',
    category: 'smoke-ventilation',
    model: 'SV-SC',
    shape: 'curtain',
    tagline: 'Automatic smoke containment that disappears into the ceiling',
    short:
      'Automatic and static smoke curtains that form smoke reservoirs, close atrium voids and hold escape routes clear of smoke — concealed until the moment they are needed.',
    long: [
      'A smoke curtain is what makes an extraction strategy achievable. By bounding the smoke layer it keeps hot gases where they can be removed efficiently and holds the clear layer above head height while occupants leave.',
      'The SV-SC uses a glass-fibre fabric with a heat-reflective coating running in a slim aluminium headbox. On alarm the curtain descends under gravity at a controlled speed — no power is required to deploy, so the system fails safe. Multi-panel and perimeter arrangements let a single control group close large or irregular openings.',
    ],
    quickStats: [
      ['Classification', 'D120 / DH120 to EN 12101-1'],
      ['Drop', 'Up to 8 m single panel'],
      ['Deployment', 'Gravity fail-safe'],
      ['Headbox', 'From 165 × 165 mm'],
    ],
    features: [
      { icon: 'fire', title: 'D120 classification', text: 'Tested to EN 12101-1 for 120 minutes at elevated temperature.' },
      { icon: 'shield', title: 'Gravity fail-safe', text: 'Descends under its own weight on power loss, at a controlled rate.' },
      { icon: 'layers', title: 'Concealed headbox', text: 'Slim extrusion sits within the ceiling void — invisible in normal use.' },
      { icon: 'target', title: 'Any geometry', text: 'Straight, curved, perimeter and multi-panel arrangements from one system.' },
      { icon: 'control', title: 'Group control', text: 'Zoned deployment driven by the fire alarm cause-and-effect matrix.' },
      { icon: 'wrench', title: 'Self-testing', text: 'Automatic weekly cycle with logged result and fault reporting.' },
    ],
    specs: [
      {
        group: 'Fabric & assembly',
        rows: [
          ['Fabric', 'Woven glass fibre, heat-reflective coated'],
          ['Classification', 'D120 (smoke) / DH120 (smoke + heat)'],
          ['Headbox', 'Extruded aluminium, 165 × 165 mm minimum'],
          ['Bottom bar', 'Aluminium, 40 mm profile'],
          ['Side guides', 'Optional, for high air-pressure locations'],
          ['Finish', 'Powder coated to RAL or anodised'],
        ],
      },
      {
        group: 'Operation',
        rows: [
          ['Maximum drop', '8 m single panel, unlimited multi-panel'],
          ['Maximum width', '5 m per panel, joined for longer runs'],
          ['Descent speed', 'Controlled, typically 0.1 m/s'],
          ['Motor supply', '24 V DC, UPS backed'],
          ['Standby duration', '30 / 60 minutes to project requirement'],
          ['Interfaces', 'Fire alarm volt-free, BMS monitoring'],
        ],
      },
    ],
    applications: [
      'Shopping mall atria and voids',
      'Airport terminals and concourses',
      'Hotel and office atria',
      'Hospital sub-compartments',
      'Metro and rail stations',
      'Escalator and lift void closure',
    ],
    benefits: [
      { title: 'Longer safe egress time', text: 'Holds the smoke-free layer above head height while occupants evacuate.' },
      { title: 'Smaller extract plant', text: 'Bounded reservoirs make the required extract rate achievable and economical.' },
      { title: 'Architecture preserved', text: 'Open, connected spaces remain possible within a compliant fire strategy.' },
      { title: 'Firefighter visibility', text: 'Maintains tenable conditions for search, rescue and firefighting.' },
    ],
    certifications: [CERT.en1, CERT.ce, CERT.scdf, CERT.nfpa92],
    related: ['smoke-ventilator', 'smoke-control-panel', 'smoke-control-damper'],
    seo: {
      title: 'Smoke Curtain | EN 12101-1 Automatic Smoke Barrier | Sterling Ventilation',
      description:
        'SV-SC automatic and static smoke curtains classified D120 / DH120 to EN 12101-1. Gravity fail-safe descent, concealed headbox, drops to 8 m, perimeter and multi-panel arrangements.',
      keywords: 'smoke curtain, smoke barrier, EN 12101-1, D120 smoke curtain, automatic smoke curtain, atrium smoke containment',
    },
  },
  {
    slug: 'smoke-ventilator',
    name: 'Smoke Ventilator',
    category: 'smoke-ventilation',
    model: 'SV-SHEV',
    shape: 'flap',
    tagline: 'Certified natural smoke and heat exhaust',
    short:
      'Natural smoke and heat exhaust ventilators (SHEVS) selected on tested aerodynamic free area, opening on alarm to release buoyant hot gases from the reservoir.',
    long: [
      'Natural smoke ventilators exhaust hot gases by buoyancy alone. That makes them robust and independent of power at the moment it matters most — but it also means the installed aerodynamic area has to be real, not nominal.',
      'The SV-SHEV range is tested to EN 12101-2 for aerodynamic coefficient, reliability, wind load, low temperature and heat exposure. Double-flap, single-flap and louvred configurations are available on a common insulated kerb, actuated electrically or by pneumatic CO2 cartridge.',
    ],
    quickStats: [
      ['Standard', 'EN 12101-2'],
      ['Heat exposure', 'B300 (30 min)'],
      ['Reliability', 'Re 1000 / Re 50+1000'],
      ['Opening time', '< 60 s to full open'],
    ],
    features: [
      { icon: 'gauge', title: 'Certified Cv', text: 'Aerodynamic coefficient established by independent test at each size.' },
      { icon: 'fire', title: 'B300 heat class', text: 'Verified operation after 30 minutes at 300 °C.' },
      { icon: 'shield', title: 'WL 1500 wind load', text: 'Holds the open position under design wind uplift.' },
      { icon: 'control', title: 'Dual actuation', text: 'Electric 24 V or pneumatic CO2 cartridge with manual release.' },
      { icon: 'layers', title: 'Comfort duty', text: 'Optional intermediate positions for daily ventilation between fire events.' },
      { icon: 'wrench', title: 'Insulated kerb', text: 'Thermally broken kerb limits condensation on conditioned buildings.' },
    ],
    specs: [
      {
        group: 'Classification (EN 12101-2)',
        rows: [
          ['Reliability', 'Re 1000 (Re 50+1000 with comfort duty)'],
          ['Low temperature', 'T(-15)'],
          ['Wind load', 'WL 1500'],
          ['Snow load', 'SL 500 where applicable'],
          ['Heat exposure', 'B300 (30 minutes at 300 °C)'],
        ],
      },
      {
        group: 'Configuration',
        rows: [
          ['Types', 'Single flap, double flap, louvred'],
          ['Nominal sizes', '1000 × 1000 mm to 3000 × 2500 mm'],
          ['Aerodynamic free area', '0.38 – 3.90 m² per unit'],
          ['Cover', 'Insulated aluminium or polycarbonate glazed'],
          ['Actuation', '24 V DC electric or pneumatic CO2'],
          ['Opening angle', '140° double flap'],
        ],
      },
    ],
    applications: [
      'Warehouses and high-bay storage',
      'Industrial and process buildings',
      'Shopping centre roofs and atria',
      'Stairwell and lobby smoke vents',
      'Sports and exhibition halls',
      'Car park natural ventilation',
    ],
    benefits: [
      { title: 'Power independent', text: 'Buoyancy-driven exhaust continues to work without electrical supply.' },
      { title: 'Structural protection', text: 'Releasing hot gases limits heat load on the roof structure.' },
      { title: 'Straightforward compliance', text: 'Certified classification data supports the submission directly.' },
      { title: 'Low maintenance', text: 'Simple mechanism with a short, well-defined statutory test routine.' },
    ],
    certifications: [CERT.en2, CERT.ce, CERT.nfpa204, CERT.scdf],
    related: ['smoke-curtain', 'smoke-extract-fan', 'dome-roof-ventilator'],
    seo: {
      title: 'Smoke Ventilator | EN 12101-2 SHEVS | Sterling Ventilation',
      description:
        'SV-SHEV natural smoke and heat exhaust ventilators certified to EN 12101-2 — B300 heat class, WL 1500 wind load, tested aerodynamic free area to 3.9 m².',
      keywords: 'smoke ventilator, SHEVS, EN 12101-2, natural smoke exhaust, smoke and heat exhaust ventilator, aerodynamic free area',
    },
  },
  {
    slug: 'smoke-control-damper',
    name: 'Smoke Control Damper',
    category: 'smoke-ventilation',
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
    related: ['smoke-extract-fan', 'smoke-control-panel', 'smoke-curtain'],
    seo: {
      title: 'Smoke Control Damper | EN 12101-8 | Sterling Ventilation',
      description:
        'SV-SCD motorised smoke control dampers classified EIS 120 to EN 12101-8 and EN 1366-10, with monitored actuation and multi-section shaft assemblies.',
      keywords: 'smoke control damper, EN 12101-8, EN 1366-10, motorised fire damper, smoke damper, extract zoning',
    },
  },
  {
    slug: 'smoke-extract-fan',
    name: 'Smoke Extract Fan',
    category: 'smoke-ventilation',
    model: 'SV-F400',
    shape: 'axial',
    tagline: 'F300 and F400 rated extraction that keeps running in the fire',
    short:
      'High-temperature axial and box-type smoke extract fans certified to EN 12101-3, rated to move design airflow at 300 °C or 400 °C for two hours.',
    long: [
      'A smoke extract fan has one job that no other fan has: it must keep delivering its duty while hot smoke passes through it. That demands a motor, bearing and impeller specification that is verified by full-scale fire test, not calculated.',
      'The SV-F400 range covers axial, box and roof-mounted units certified to EN 12101-3 at F300 (300 °C / 2 h) and F400 (400 °C / 2 h). Dual-duty variants run at reduced speed for daily ventilation and switch to full fire duty on alarm.',
    ],
    quickStats: [
      ['Certification', 'EN 12101-3 F300 / F400'],
      ['Airflow', 'To 40 m³/s per unit'],
      ['Static pressure', 'To 1600 Pa'],
      ['Dual duty', 'VSD comfort + fire mode'],
    ],
    features: [
      { icon: 'fire', title: 'Fire-tested rating', text: 'F300 or F400 classification established by full-scale test, not calculation.' },
      { icon: 'gauge', title: 'Duty accuracy', text: 'Selection from certified fan curves at the actual system resistance.' },
      { icon: 'control', title: 'Dual-duty operation', text: 'Variable speed for daily ventilation, direct-on-line for fire mode.' },
      { icon: 'shield', title: 'Motor out of airstream', text: 'Optional bifurcated construction isolates the motor from hot gases.' },
      { icon: 'layers', title: 'Multiple orientations', text: 'In-line, roof-mounted, box and wall-mounted arrangements.' },
      { icon: 'wrench', title: 'Maintainable', text: 'Access doors, slide rails and lifting points designed into the casing.' },
    ],
    specs: [
      {
        group: 'Fire performance',
        rows: [
          ['Standard', 'EN 12101-3'],
          ['Classification', 'F300 (300 °C / 2 h) or F400 (400 °C / 2 h)'],
          ['Ambient duty', 'Continuous, 40 °C'],
          ['Motor', 'IE3 premium efficiency, thermistor protected'],
          ['Wiring', 'Fire-rated cable to motor terminals'],
        ],
      },
      {
        group: 'Aerodynamic',
        rows: [
          ['Impeller diameter', '400 – 1600 mm'],
          ['Airflow range', '1.0 – 40 m³/s'],
          ['Static pressure', 'Up to 1600 Pa'],
          ['Blade pitch', 'Adjustable at standstill'],
          ['Sound data', 'Certified octave band levels'],
          ['Casing', 'Galvanised or epoxy coated steel'],
        ],
      },
    ],
    applications: [
      'Basement and enclosed car parks',
      'Atrium and mall smoke extraction',
      'Industrial process buildings',
      'Metro platform and concourse extract',
      'Hotel and residential corridor systems',
      'Data centre smoke clearance',
    ],
    benefits: [
      { title: 'Guaranteed clear layer', text: 'Certified duty at temperature means the design extract rate is genuinely delivered.' },
      { title: 'Energy efficient day to day', text: 'Dual-duty operation avoids running fire-rated plant at full speed continuously.' },
      { title: 'Predictable commissioning', text: 'Certified curves and sound data reduce surprises at witness testing.' },
      { title: 'Long service life', text: 'Heavy-duty bearings and coatings specified for tropical plant rooms.' },
    ],
    certifications: [CERT.en3, CERT.ce, CERT.amca, CERT.scdf],
    related: ['smoke-control-damper', 'car-park-jet-fan', 'smoke-control-panel'],
    seo: {
      title: 'Smoke Extract Fan | EN 12101-3 F300 F400 | Sterling Ventilation',
      description:
        'SV-F400 high-temperature smoke extract fans certified to EN 12101-3 at F300 and F400, airflow to 40 m³/s, dual-duty variable speed operation.',
      keywords: 'smoke extract fan, F400 fan, F300 fan, EN 12101-3, high temperature fan, smoke extraction',
    },
  },
  {
    slug: 'smoke-control-panel',
    name: 'Smoke Control Panel',
    category: 'smoke-ventilation',
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
    related: ['smoke-curtain', 'smoke-control-damper', 'stair-pressurisation-unit'],
    seo: {
      title: 'Smoke Control Panel | EN 12101-9 PLC Control | Sterling Ventilation',
      description:
        'SV-SCP PLC smoke control and indicating panels to EN 12101-9 and EN 12101-10, with monitored outputs, firefighter override, BMS integration and IoT self-test logging.',
      keywords: 'smoke control panel, EN 12101-9, fire smoke control system, PLC smoke panel, firefighter override panel',
    },
  },
  {
    slug: 'stair-pressurisation-unit',
    name: 'Stair Pressurisation Unit',
    category: 'smoke-ventilation',
    model: 'SV-SPU',
    shape: 'pressurisation',
    tagline: 'Positive pressure that keeps the escape route usable',
    short:
      'Packaged pressurisation units with modulating relief that hold escape stairs and firefighting shafts smoke-free without exceeding door opening force limits.',
    long: [
      'Pressurisation has to satisfy two requirements that pull against each other: enough differential to keep smoke out of the shaft, and low enough door force for occupants to actually open the door. Systems that pass the static test and fail the dynamic one are common.',
      'The SV-SPU packages the supply fan, pressure sensing, modulating relief and control into one commissioned unit. Pressure is measured continuously and the fan modulates through the door-opening cycle, so the differential and velocity criteria are met with doors closed, with the design number of doors open, and in the transition between them.',
    ],
    quickStats: [
      ['Differential', '50 Pa nominal, modulated'],
      ['Door force', '≤ 100 N at handle'],
      ['Door velocity', '≥ 0.75 – 2.0 m/s'],
      ['Response', 'Full duty < 60 s'],
    ],
    features: [
      { icon: 'gauge', title: 'Closed-loop control', text: 'Continuous pressure measurement with variable speed modulation.' },
      { icon: 'shield', title: 'Door force compliance', text: 'Relief sized and controlled to hold opening force within code limits.' },
      { icon: 'fire', title: 'Firefighting shafts', text: 'Configurable for firefighting lift lobby and shaft pressurisation.' },
      { icon: 'layers', title: 'Multi-injection', text: 'Distributed injection points for tall shafts with stack pressure variation.' },
      { icon: 'control', title: 'Duty / standby', text: 'Optional standby fan with automatic changeover and alternation.' },
      { icon: 'wrench', title: 'Pre-commissioned', text: 'Factory-set and site-verified with a documented test record.' },
    ],
    specs: [
      {
        group: 'Performance',
        rows: [
          ['Standard', 'EN 12101-6 / EN 12101-13'],
          ['Design differential', '50 Pa (doors closed)'],
          ['Door opening force', '≤ 100 N measured at the handle'],
          ['Door velocity', '0.75 – 2.0 m/s, class dependent'],
          ['Airflow', '2 – 20 m³/s per unit'],
          ['Response time', 'Full duty within 60 seconds'],
        ],
      },
      {
        group: 'Equipment',
        rows: [
          ['Fan', 'Axial or centrifugal, IE3 motor'],
          ['Speed control', 'Variable speed drive, fire-mode bypass'],
          ['Relief', 'Barometric or motorised modulating damper'],
          ['Sensing', 'Differential pressure transmitters per zone'],
          ['Control', 'Integral PLC, interfaced to smoke control panel'],
          ['Enclosure', 'Weatherproof or plant room mounted'],
        ],
      },
    ],
    applications: [
      'High-rise residential and commercial stairs',
      'Firefighting lift lobbies and shafts',
      'Hospital escape stairs',
      'Hotel towers',
      'Basement escape routes',
      'Refuge floors and areas',
    ],
    benefits: [
      { title: 'Escape routes stay clear', text: 'Positive differential keeps smoke out of the protected shaft.' },
      { title: 'Doors remain usable', text: 'Modulating relief prevents the over-pressure that traps occupants.' },
      { title: 'Firefighting bridgehead', text: 'Maintains tenable conditions for fire service operations.' },
      { title: 'Evidence at handover', text: 'Documented differential, velocity and force readings for every door set.' },
    ],
    certifications: [CERT.en6, CERT.ce, CERT.scdf, CERT.nfpa92],
    related: ['smoke-control-panel', 'centrifugal-fan', 'smoke-control-damper'],
    seo: {
      title: 'Stair Pressurisation Unit | EN 12101-6 | Sterling Ventilation',
      description:
        'SV-SPU packaged stair and firefighting shaft pressurisation units to EN 12101-6 with closed-loop modulation, compliant door opening force and documented commissioning.',
      keywords: 'stair pressurisation, EN 12101-6, pressure differential system, firefighting shaft pressurisation, smoke free stairs',
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
    related: ['centrifugal-fan', 'smoke-extract-fan', 'air-handling-unit'],
    seo: {
      title: 'Axial Flow Fan | Adjustable Pitch Industrial Fans | Sterling Ventilation',
      description:
        'SV-AXL adjustable pitch axial flow fans, 0.5–45 m³/s to 1200 Pa, AMCA certified performance, IE3/IE4 motors and inverter-ready construction.',
      keywords: 'axial flow fan, industrial fan, adjustable pitch fan, AMCA certified fan, ventilation fan Singapore',
    },
  },
  {
    slug: 'centrifugal-fan',
    name: 'Centrifugal Fan',
    category: 'mechanical-ventilation',
    model: 'SV-CFG',
    shape: 'centrifugal',
    tagline: 'High pressure duty with backward-curved efficiency',
    short:
      'Backward-curved and plug-fan centrifugal units for ducted systems where static pressure, not volume, is the governing requirement.',
    long: [
      'Where a system carries long duct runs, filtration or coils, an axial fan runs out of pressure long before it runs out of volume. Centrifugal fans take over — and backward-curved impellers give the best efficiency and the most stable curve for building services duty.',
      'The SV-CFG range covers belt and direct-driven scroll fans as well as plug-fan arrays for AHU and pressurisation duty, with EC motor options for close speed control and low part-load power.',
    ],
    quickStats: [
      ['Static pressure', 'To 3500 Pa'],
      ['Airflow', '0.3 – 30 m³/s'],
      ['Impeller', 'Backward-curved aerofoil'],
      ['Drive', 'Belt, direct or EC'],
    ],
    features: [
      { icon: 'gauge', title: 'High static capability', text: 'Stable pressure development for long, filtered or coil-loaded systems.' },
      { icon: 'spark', title: 'Backward-curved efficiency', text: 'Non-overloading characteristic with peak efficiency above 80%.' },
      { icon: 'control', title: 'EC motor option', text: 'Integrated electronic commutation for precise, efficient part-load control.' },
      { icon: 'layers', title: 'Plug-fan arrays', text: 'Multiple smaller fans in parallel for redundancy and turndown.' },
      { icon: 'shield', title: 'Low vibration', text: 'Dynamically balanced to ISO 14694 BV-4 as standard.' },
      { icon: 'wrench', title: 'Access designed in', text: 'Inspection doors, drain points and removable drive guards.' },
    ],
    specs: [
      {
        group: 'Aerodynamic',
        rows: [
          ['Impeller type', 'Backward-curved aerofoil or plug fan'],
          ['Impeller diameter', '250 – 1600 mm'],
          ['Airflow range', '0.3 – 30 m³/s'],
          ['Static pressure', 'Up to 3500 Pa'],
          ['Peak total efficiency', '> 80%'],
          ['Test standard', 'AMCA 210 / ISO 5801'],
        ],
      },
      {
        group: 'Mechanical & electrical',
        rows: [
          ['Housing', 'Galvanised steel scroll or open plug'],
          ['Drive', 'Belt, direct coupled or EC'],
          ['Balance grade', 'ISO 14694 BV-4'],
          ['Motor', 'IE3 / IE4 or integrated EC'],
          ['Bearings', 'L10 100,000 hours'],
          ['Options', 'Inlet guide vanes, flexible connections, AV mounts'],
        ],
      },
    ],
    applications: [
      'Ducted supply and extract systems',
      'Air handling unit fan sections',
      'Stair and lobby pressurisation',
      'Laboratory and fume extract',
      'Kitchen extract with filtration',
      'Industrial dust and fume systems',
    ],
    benefits: [
      { title: 'Efficient at real duty', text: 'Backward-curved impellers hold efficiency across the operating band.' },
      { title: 'Motor protection', text: 'Non-overloading characteristic prevents motor overload if resistance falls.' },
      { title: 'Redundancy option', text: 'Plug-fan arrays keep the system running through a single fan failure.' },
      { title: 'Acoustically manageable', text: 'Lower tonal content than forward-curved alternatives.' },
    ],
    certifications: [CERT.amca, CERT.eurovent, CERT.ce, CERT.iso],
    related: ['axial-flow-fan', 'air-handling-unit', 'stair-pressurisation-unit'],
    seo: {
      title: 'Centrifugal Fan | Backward Curved & Plug Fans | Sterling Ventilation',
      description:
        'SV-CFG backward-curved centrifugal and plug fans to 3500 Pa and 30 m³/s, AMCA and Eurovent certified performance, EC motor and fan array options.',
      keywords: 'centrifugal fan, backward curved fan, plug fan, EC fan, high pressure fan, AHU fan',
    },
  },
  {
    slug: 'car-park-jet-fan',
    name: 'Car Park Jet Fan',
    category: 'mechanical-ventilation',
    model: 'SV-JET',
    shape: 'jet',
    tagline: 'Ductless impulse ventilation that gives you back your headroom',
    short:
      'Unidirectional and reversible impulse fans that replace car park supply and extract ductwork with directed thrust, serving both pollutant control and fire mode.',
    long: [
      'Impulse ventilation removes the ductwork from a car park and replaces it with a designed flow field. The saving is not just cost — it is slab-to-soffit height, structural coordination and a far simpler installation.',
      'The SV-JET range includes low-profile units for tight soffits and reversible units for zoned fire-mode control, all F300 rated so the same fans serve the daily CO/NO₂ duty and the smoke clearance strategy. Placement and thrust are always verified by CFD.',
    ],
    quickStats: [
      ['Fire rating', 'F300 (300 °C / 2 h)'],
      ['Thrust', '25 – 110 N'],
      ['Profile', 'From 260 mm deep'],
      ['Modes', 'Uni-directional / reversible'],
    ],
    features: [
      { icon: 'layers', title: 'Low profile', text: 'Casings from 260 mm deep for car parks with tight structural zones.' },
      { icon: 'fire', title: 'F300 rated', text: 'Certified to continue operating in fire mode at 300 °C for two hours.' },
      { icon: 'control', title: 'Reversible option', text: 'Bi-directional thrust for zoned smoke control strategies.' },
      { icon: 'gauge', title: 'CFD verified layout', text: 'Placement, thrust and stagnation zones proven by simulation before order.' },
      { icon: 'spark', title: 'Demand control', text: 'CO and NO₂ sensor control runs fans only when air quality requires it.' },
      { icon: 'shield', title: 'Two-speed operation', text: 'Quiet low-speed daily duty, full thrust in fire mode.' },
    ],
    specs: [
      {
        group: 'Performance',
        rows: [
          ['Fire classification', 'EN 12101-3 F300 (300 °C / 2 h)'],
          ['Thrust range', '25 – 110 N per unit'],
          ['Airflow', '0.9 – 4.2 m³/s per unit'],
          ['Sound pressure at 3 m', 'From 52 dB(A) at low speed'],
          ['Operation', 'Two speed or variable speed'],
          ['Direction', 'Uni-directional or fully reversible'],
        ],
      },
      {
        group: 'Construction',
        rows: [
          ['Casing', 'Galvanised steel, powder coated'],
          ['Casing depth', '260 – 400 mm'],
          ['Impeller', 'Aluminium, high-temperature rated'],
          ['Motor', 'IE3, thermistor protected'],
          ['Mounting', 'Soffit brackets with anti-vibration isolation'],
          ['Protection', 'IP 55'],
        ],
      },
    ],
    applications: [
      'Basement car parks',
      'Podium and multi-storey car parks',
      'Mixed-use development parking',
      'Hospital and airport parking',
      'Logistics and fleet depots',
      'Retail and hotel parking',
    ],
    benefits: [
      { title: 'Headroom recovered', text: 'Removing ductwork frees slab-to-soffit height across the whole car park.' },
      { title: 'Lower installed cost', text: 'Less ductwork, builders work and installation programme.' },
      { title: 'Energy savings', text: 'Demand-controlled operation cuts fan hours dramatically versus fixed extract.' },
      { title: 'Directed smoke clearance', text: 'Zoned thrust moves smoke away from escape routes and ramps.' },
    ],
    certifications: [CERT.en3, CERT.ce, CERT.scdf, CERT.iso],
    related: ['smoke-extract-fan', 'tunnel-ventilation-fan', 'smoke-control-panel'],
    seo: {
      title: 'Car Park Jet Fan | Impulse Ventilation F300 | Sterling Ventilation',
      description:
        'SV-JET impulse jet fans for basement car park ventilation. F300 rated to EN 12101-3, 25–110 N thrust, low-profile and reversible options, CFD-verified layouts.',
      keywords: 'car park jet fan, impulse ventilation, induction fan, F300 jet fan, basement car park ventilation, ductless car park',
    },
  },
  {
    slug: 'air-handling-unit',
    name: 'Air Handling Unit',
    category: 'mechanical-ventilation',
    model: 'SV-AHU',
    shape: 'ahu',
    tagline: 'Modular air handling built for tropical duty',
    short:
      'Double-skin modular air handling units with high-efficiency plug-fan arrays, deep cooling coils and heat recovery, configured for humid tropical climates.',
    long: [
      'An air handling unit specified for a temperate climate performs poorly in the tropics — coil face velocities, condensate management and casing thermal performance all need different assumptions.',
      'The SV-AHU is a double-skin modular unit built around those conditions: thermally broken frames to prevent surface condensation, deep cooling coils with generous drain arrangements, and plug-fan arrays that stay efficient at part load through the long shoulder seasons.',
    ],
    quickStats: [
      ['Airflow', '0.3 – 30 m³/s'],
      ['Casing', 'Double skin, thermally broken'],
      ['Fans', 'EC plug-fan arrays'],
      ['Recovery', 'Plate, wheel or run-around'],
    ],
    features: [
      { icon: 'layers', title: 'Modular construction', text: 'Sections configured and split for site access and future extension.' },
      { icon: 'shield', title: 'Thermally broken casing', text: 'Eliminates the cold bridging that causes surface condensation in the tropics.' },
      { icon: 'spark', title: 'EC fan arrays', text: 'Multiple EC plug fans for efficiency, turndown and built-in redundancy.' },
      { icon: 'gauge', title: 'Deep coils', text: 'Low face velocity coils with stainless drain trays and dual traps.' },
      { icon: 'control', title: 'Integrated controls', text: 'Factory-fitted control panel with BACnet/Modbus interface.' },
      { icon: 'wrench', title: 'Hygienic access', text: 'Full-height access doors, coated internals and cleanable surfaces.' },
    ],
    specs: [
      {
        group: 'Casing & sections',
        rows: [
          ['Casing', 'Double skin, 50 mm PIR or mineral wool'],
          ['Frame', 'Thermally broken extruded aluminium'],
          ['Casing classification', 'D1 / L1 / T2 / TB2 to EN 1886'],
          ['Sections', 'Filter, coil, fan, recovery, attenuator, mixing'],
          ['Filtration', 'ISO 16890 ePM1 / ePM10 stages'],
        ],
      },
      {
        group: 'Performance',
        rows: [
          ['Airflow range', '0.3 – 30 m³/s'],
          ['External static', 'To 1500 Pa'],
          ['Fan section', 'EC plug fan array, N+1 optional'],
          ['Heat recovery', 'Plate, thermal wheel or run-around coil'],
          ['Coil face velocity', '≤ 2.5 m/s tropical selection'],
          ['Controls', 'Integral panel, BACnet/IP or Modbus'],
        ],
      },
    ],
    applications: [
      'Commercial office buildings',
      'Hotels and hospitality',
      'Hospitals and clinical areas',
      'Laboratories and cleanrooms',
      'Data centre support spaces',
      'Retail and mixed-use developments',
    ],
    benefits: [
      { title: 'Condensation controlled', text: 'Thermally broken casing avoids the dripping panels common in humid climates.' },
      { title: 'Efficient at part load', text: 'EC fan arrays hold efficiency well below design airflow.' },
      { title: 'Built-in redundancy', text: 'Fan array continues to deliver reduced duty through a single failure.' },
      { title: 'Maintainable in place', text: 'Full access sections make filter and coil service straightforward.' },
    ],
    certifications: [CERT.eurovent, CERT.ce, CERT.iso, CERT.amca],
    related: ['centrifugal-fan', 'axial-flow-fan', 'facade-louvre-ventilator'],
    seo: {
      title: 'Air Handling Unit | Modular Double Skin AHU | Sterling Ventilation',
      description:
        'SV-AHU double-skin modular air handling units for tropical duty — EC plug-fan arrays, thermally broken casing, deep coils and integrated heat recovery.',
      keywords: 'air handling unit, AHU, modular AHU, EC plug fan, double skin AHU, tropical air handling unit',
    },
  },
  {
    slug: 'tunnel-ventilation-fan',
    name: 'Tunnel Ventilation Fan',
    category: 'mechanical-ventilation',
    model: 'SV-TVF',
    shape: 'tunnel',
    tagline: 'Reversible high-temperature fans for tunnels and metro systems',
    short:
      'Heavy-duty reversible axial fans for road tunnels, metro running tunnels and underground stations, rated for sustained operation at elevated temperature.',
    long: [
      'Tunnel ventilation is the most demanding smoke control duty there is. The fans have to establish critical velocity to prevent backlayering, reverse direction on command, and keep running while the fire develops — often for hours.',
      'The SV-TVF range covers jet fans for longitudinal systems and large shaft and portal fans for transverse and semi-transverse schemes, rated from 250 °C/2 h to 400 °C/2 h with matched reverse-flow performance and full SCADA integration.',
    ],
    quickStats: [
      ['Rating', '250 °C – 400 °C / 2 h'],
      ['Reversibility', '≥ 90% reverse duty'],
      ['Impeller', 'To 2500 mm'],
      ['Control', 'TVCS / SCADA integrated'],
    ],
    features: [
      { icon: 'fire', title: 'Sustained fire duty', text: 'Rated for continuous operation through the full design fire duration.' },
      { icon: 'control', title: 'True reversibility', text: 'Symmetrical blade profiles retain at least 90% of duty in reverse.' },
      { icon: 'gauge', title: 'Critical velocity', text: 'Selected against backlayering analysis for every defined fire location.' },
      { icon: 'shield', title: 'Seismic and vibration', text: 'Mounting and bracing designed for tunnel dynamic loads.' },
      { icon: 'layers', title: 'Redundancy', text: 'N+1 arrangements for availability during maintenance windows.' },
      { icon: 'spark', title: 'SCADA integration', text: 'Full status, control and alarm reporting into the tunnel control system.' },
    ],
    specs: [
      {
        group: 'Fire & duty',
        rows: [
          ['Temperature rating', '250 °C / 400 °C for 2 hours'],
          ['Standard', 'EN 12101-3, NFPA 130 / 502 basis'],
          ['Reverse performance', '≥ 90% of forward duty'],
          ['Impeller diameter', '630 – 2500 mm'],
          ['Airflow', 'Up to 250 m³/s (shaft fans)'],
          ['Motor rating', 'To 400 kW'],
        ],
      },
      {
        group: 'Construction',
        rows: [
          ['Casing', 'Heavy-gauge steel, epoxy or galvanised'],
          ['Impeller', 'Cast aluminium or steel aerofoil'],
          ['Bearings', 'Heavy duty, condition monitored'],
          ['Silencers', 'Integral inlet and outlet attenuation'],
          ['Mounting', 'Anti-vibration with seismic restraint'],
          ['Monitoring', 'Vibration, temperature and current to SCADA'],
        ],
      },
    ],
    applications: [
      'Road and highway tunnels',
      'Metro running tunnels',
      'Underground stations and concourses',
      'Cross-passage and service tunnels',
      'Utility and cable tunnels',
      'Mine ventilation',
    ],
    benefits: [
      { title: 'Backlayering controlled', text: 'Critical velocity established to hold smoke downstream of the incident.' },
      { title: 'Self-rescue supported', text: 'Tenable conditions maintained on the evacuation side of the fire.' },
      { title: 'Operational flexibility', text: 'Reversible duty allows the strategy to adapt to fire location.' },
      { title: 'High availability', text: 'Condition monitoring and N+1 design protect operational uptime.' },
    ],
    certifications: [CERT.en3, CERT.nfpa130, CERT.ce, CERT.iso],
    related: ['car-park-jet-fan', 'smoke-extract-fan', 'axial-flow-fan'],
    seo: {
      title: 'Tunnel Ventilation Fan | Reversible High Temperature | Sterling Ventilation',
      description:
        'SV-TVF reversible tunnel ventilation fans rated 250–400 °C for 2 hours to EN 12101-3 and NFPA 130/502, impellers to 2500 mm with SCADA integration.',
      keywords: 'tunnel ventilation fan, reversible jet fan, metro ventilation, NFPA 130 fan, critical velocity, tunnel smoke control',
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
