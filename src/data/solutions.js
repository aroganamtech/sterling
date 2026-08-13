/* ---------------------------------------------------------------------------
   SOLUTIONS — the six solution families described in the approved content.

   Copy, technical summaries and standards below are taken from the approved
   Sterling Ventilation website content document. Where the document instructed
   that an existing technical summary should "remain" (Natural Ventilation) or
   "follow natural ventilation" (Smoke Ventilation), the previously published
   summary has been retained rather than replaced.
   --------------------------------------------------------------------------- */

export const solutions = [
  {
    slug: 'smoke-curtains',
    title: 'Smoke Curtains',
    icon: 'curtain',
    menuBlurb: 'Containment, channelling and smoke reservoir formation',
    tagline: 'Engineered smoke containment, including the Prime Curtain made and tested in Singapore',
    summary:
      'Engineered smoke curtain solutions for smoke containment, channelling and smoke reservoir formation, designed around project-specific requirements and applicable standards.',
    overview: [
      'We provide engineered smoke curtain solutions for smoke containment, channelling, and smoke reservoir formation. Our solutions include the Prime Curtain, manufactured and tested in Singapore, and are designed around project-specific requirements and applicable standards.',
      'Smoke curtains are engineered to provide effective smoke control without unnecessarily compromising the building’s means of escape. Where required, automatically deployed curtains are designed to achieve the required smoke-tightness and effective depth in accordance with the applicable requirements.',
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
      { title: 'Effective smoke containment', text: 'Controls the movement and spread of smoke within the building.' },
      { title: 'Smoke reservoir formation', text: 'Forms reservoirs and restricts smoke migration across openings and voids.' },
      { title: 'Supports smoke extraction', text: 'Channels smoke so natural and mechanical exhaust systems work effectively.' },
      { title: 'Escape routes kept usable', text: 'Smoke control achieved without unnecessarily compromising the means of escape.' },
      { title: 'Flexible application', text: 'Designed around the specific building geometry and smoke control strategy.' },
      { title: 'Automatic deployment', text: 'Fire alarm interface with battery back-up control deploys the curtain when required.' },
    ],
    options: [
      'Fixed and automatic smoke curtains',
      'Smoke reservoir formation',
      'Smoke compartmentation',
      'Atrium and large open-space smoke control',
      'Escalator and void smoke containment',
      'Integration with natural and mechanical smoke exhaust',
      'Fire alarm and BMS interfaces',
    ],
    specs: [
      ['Typical classification', 'DH120 to EN 12101-1 and EN 13501-1'],
      ['Fabric', 'Fibreglass, double-coated polyurethane polymer, 0.4 mm'],
      ['Drop', 'Part drop and full drop with controlled speed'],
      ['Fail-safe', 'Gravity to descend, power to hold'],
      ['Interfaces', 'Fire alarm and battery back-up control'],
    ],
    standards: ['EN 12101-1', 'EN 13501-1', 'Singapore Fire Code'],
    related: ['smoke-ventilation', 'engineering-system-integration'],
  },

  {
    slug: 'natural-ventilation',
    title: 'Natural Ventilation',
    icon: 'vent',
    menuBlurb: 'Wind and buoyancy-driven ventilation for air quality and comfort',
    tagline: 'Passive ventilation engineered to the building, not to a catalogue',
    summary:
      'Natural ventilation solutions that use natural airflow, wind pressure and temperature differences to improve indoor air quality, thermal comfort and the overall building environment.',
    overview: [
      'We design and provide natural ventilation solutions that utilise natural airflow, wind pressure, and temperature differences to improve indoor air quality, thermal comfort, and the overall building environment.',
      'Our solutions include natural ventilation openings, louvres, ventilators, air intake and discharge arrangements, and other passive ventilation elements. Each system is developed according to the building configuration, airflow requirements, architectural considerations, and applicable Singapore requirements.',
    ],
    applications: [
      'Industrial and manufacturing plants',
      'Warehouses and distribution centres',
      'Shopping centres and atria',
      'Stairwells and lobbies',
      'Sports and exhibition halls',
      'Car parks with natural strategies',
    ],
    benefits: [
      { title: 'Better indoor air quality', text: 'Introduces fresh outdoor air and removes stale or warm air from occupied spaces.' },
      { title: 'Thermal comfort', text: 'Uses wind pressure and temperature difference to moderate internal conditions.' },
      { title: 'Lower reliance on plant', text: 'Reduces dependence on mechanical ventilation where the building allows it.' },
      { title: 'Architecturally led', text: 'Openings, louvres and ventilators developed around the building configuration.' },
      { title: 'Controllable', text: 'Sensors and control systems can modulate openings to indoor and outdoor conditions.' },
      { title: 'Regulatory compliance', text: 'Designed against applicable Singapore codes, standards and requirements.' },
    ],
    options: [
      'Natural ventilation openings',
      'Ventilation louvres',
      'Roof and ridge ventilators',
      'Automated window actuators',
      'Air intake and discharge arrangements',
      'Sensor-driven control systems',
    ],
    specs: [
      ['Standard', 'EN 12101-2 (SHEVS)'],
      ['Reliability class', 'Re 1000 / Re 50+1000'],
      ['Wind load', 'WL 1500'],
      ['Low temperature', 'T(-15)'],
      ['Heat exposure', 'B300 (30 min)'],
    ],
    standards: ['EN 12101-2', 'Singapore Fire Code'],
    related: ['smoke-ventilation', 'engineering-system-integration'],
  },

  {
    slug: 'smoke-ventilation',
    title: 'Smoke Ventilation',
    icon: 'vent',
    menuBlurb: 'Natural and mechanical smoke ventilation and smoke control',
    tagline: 'Smoke ventilation engineered to support safe evacuation and fire-fighting',
    summary:
      'Smoke ventilation and smoke control systems designed to support safe evacuation and effective fire-fighting operations during a fire.',
    overview: [
      'We design and provide smoke ventilation and smoke control systems to support safe evacuation and effective fire-fighting operations during a fire.',
      'Our solutions include natural smoke ventilators, mechanical smoke exhaust systems, smoke extraction fans, replacement air systems, smoke control ductwork, smoke reservoirs, smoke shafts, and associated control systems. Each system is designed in accordance with the building’s fire strategy, configuration, smoke control objectives, and applicable Singapore fire safety requirements.',
      'Systems are engineered for reliable operation during fire conditions, with consideration given to smoke movement, system activation, airflow requirements, discharge arrangements, fire-rated construction, emergency power supply, controls, and integration with other fire protection systems.',
    ],
    applications: [
      'Atria and large-volume retail',
      'Airport terminals and concourses',
      'Industrial and manufacturing plants',
      'Warehouses and distribution centres',
      'Stairwells, lobbies and smoke shafts',
      'Metro platforms and concourses',
    ],
    benefits: [
      { title: 'Enhanced life safety', text: 'Supports safe evacuation by managing smoke during a fire.' },
      { title: 'Effective smoke clearance', text: 'Natural and mechanical exhaust routes smoke away from occupied areas.' },
      { title: 'Reliable system operation', text: 'Engineered for reliable operation under fire conditions and emergency power.' },
      { title: 'Fire-fighting support', text: 'Improves conditions for fire service access and operations.' },
      { title: 'Integrated activation', text: 'Coordinated with detection, controls and other fire protection systems.' },
      { title: 'Regulatory compliance', text: 'Designed to the building fire strategy and applicable Singapore requirements.' },
    ],
    options: [
      'Natural smoke ventilators',
      'Mechanical smoke exhaust systems',
      'Smoke extraction fans',
      'Replacement air systems',
      'Smoke control ductwork',
      'Smoke reservoirs and smoke shafts',
      'Associated control systems',
    ],
    specs: [
      ['Standard', 'EN 12101-2 (SHEVS)'],
      ['Reliability class', 'Re 1000 / Re 50+1000'],
      ['Wind load', 'WL 1500'],
      ['Low temperature', 'T(-15)'],
      ['Heat exposure', 'B300 (30 min)'],
    ],
    standards: ['EN 12101-2', 'Singapore Fire Code'],
    related: ['smoke-curtains', 'mechanical-ventilation'],
  },

  {
    slug: 'mechanical-ventilation',
    title: 'Mechanical Ventilation',
    icon: 'extract',
    menuBlurb: 'Controlled airflow, fresh air supply and air extraction',
    tagline: 'Powered ventilation engineered for performance, energy and space',
    summary:
      'Mechanical ventilation systems delivering controlled airflow, fresh air supply, air extraction and environmental control across a wide range of building applications.',
    overview: [
      'We design and provide mechanical ventilation systems to deliver controlled airflow, fresh air supply, air extraction, and environmental control across a wide range of building applications.',
      'Our solutions include supply and exhaust fans, mechanical air intake and discharge systems, ventilation ductwork, grilles, louvres, controls, and associated equipment. Systems are engineered to achieve the required airflow performance while considering energy efficiency, noise, space constraints, operational requirements, and applicable Singapore standards and regulations.',
    ],
    applications: [
      'Basement and enclosed car parks',
      'Commercial and mixed-use buildings',
      'Industrial process buildings',
      'Data centres and critical facilities',
      'Back-of-house and plant areas',
      'Hospitals and laboratories',
    ],
    benefits: [
      { title: 'Controlled airflow', text: 'Supply, extract and environmental control sized to the required performance.' },
      { title: 'Energy considered', text: 'Systems engineered with energy efficiency in mind, not oversized by default.' },
      { title: 'Noise and space aware', text: 'Selection accounts for acoustic limits and the space actually available.' },
      { title: 'Certified equipment', text: 'Fans and dampers selected against EN 12101-3 and EN 12101-8 where applicable.' },
      { title: 'Resilient controls', text: 'Fire-rated cabling and battery back-up where the duty requires it.' },
      { title: 'Verified performance', text: 'Design substantiated by engineering calculation and, where required, CFD.' },
    ],
    options: [
      'Supply and exhaust fans',
      'Mechanical air intake and discharge systems',
      'Ventilation ductwork',
      'Grilles and louvres',
      'Controls and associated equipment',
    ],
    specs: [
      ['Fan certification', 'EN 12101-3'],
      ['Damper certification', 'EN 12101-8'],
      ['Duct classification', '1.2 mm thick, fire resistant'],
      ['Control', 'Fire-rated cabling and battery back-up'],
      ['Verification', 'Engineering calculation / CFD'],
    ],
    standards: ['EN 12101-3', 'EN 12101-8', 'Singapore Fire Code'],
    related: ['smoke-ventilation', 'engineering-system-integration'],
  },

  {
    slug: 'engineering-system-integration',
    title: 'Engineering & System Integration',
    icon: 'drawing',
    menuBlurb: 'Calculations, drawings, controls and QP submission support',
    tagline: 'The engineering behind the system, not just the equipment in it',
    summary:
      'Design calculations, smoke control analysis, system layouts, schematics, technical drawings, specifications, equipment selection and control philosophy.',
    overview: [
      'We provide the engineering behind the system — design calculations, smoke control analysis, system layouts, schematics, technical drawings, specifications, equipment selection, and control philosophy.',
      'We coordinate smoke control systems with fire alarm systems, control panels, BMS, electrical systems, mechanical ventilation, and other building services to deliver an integrated solution. Our designs are developed to support Qualified Person (QP) submissions and regulatory review, where applicable. Singapore’s Fire Code establishes minimum fire-safety requirements and requires the applicable current referenced codes and standards to be used.',
    ],
    applications: [
      'New build design and coordination',
      'Retrofit and change-of-use projects',
      'Performance-based smoke control design',
      'Authority submissions and technical review',
      'Multi-services coordination',
      'Control philosophy development',
    ],
    benefits: [
      {
        title: 'Engineering & design',
        text: 'Design calculations, drawings, specifications, equipment selection and control system design.',
      },
      {
        title: 'Smoke control integration',
        text: 'Coordination of smoke control with fire alarms, control panels, BMS, electrical systems, ventilation and other building services.',
      },
      {
        title: 'System performance & reliability',
        text: 'Systems designed to manage airflow, smoke movement, system operation and emergency conditions effectively.',
      },
      {
        title: 'Regulatory & QP support',
        text: 'Technical documents prepared to support QP submissions, authority consultations and regulatory reviews.',
      },
      {
        title: 'Code & standards compliance',
        text: 'Systems designed in line with Singapore’s Fire Code and applicable fire safety codes and standards.',
      },
    ],
    options: [
      'Design calculations',
      'Smoke control analysis',
      'System layouts and schematics',
      'Technical drawings and specifications',
      'Equipment selection',
      'Control philosophy',
    ],
    specs: [
      ['Design output', 'Calculations, drawings, specifications'],
      ['Integration', 'Fire alarm, panels, BMS, electrical, ventilation'],
      ['Submission support', 'QP submissions and authority review'],
      ['Code basis', 'Singapore Fire Code and referenced standards'],
    ],
    standards: ['Singapore Fire Code'],
    related: ['testing-lifecycle-support', 'mechanical-ventilation'],
  },

  {
    slug: 'testing-lifecycle-support',
    title: 'Testing & Lifecycle Support',
    icon: 'wrench',
    menuBlurb: 'Commissioning, handover documentation, service and maintenance',
    tagline: 'Our involvement continues beyond installation',
    summary:
      'Testing, commissioning, functional verification, handover documentation, periodic testing, service and maintenance that support continued system performance.',
    overview: [
      'Our involvement continues beyond installation. We provide testing, commissioning, functional verification, handover documentation, periodic testing, service, and maintenance to support the continued performance of the smoke control system.',
      'Testing verifies that the installed system operates as designed, including equipment operation, controls, system interfaces, activation sequences, and relevant performance requirements. We also provide ongoing maintenance and testing support to help building owners maintain their fire protection systems in accordance with applicable requirements.',
    ],
    applications: [
      'Commissioning and witnessed testing',
      'Project handover',
      'Periodic statutory testing',
      'Planned preventive maintenance',
      'Fault diagnosis and rectification',
      'Facility management support',
    ],
    benefits: [
      {
        title: 'Testing & commissioning',
        text: 'Smoke control systems tested and commissioned to verify that equipment, controls, interfaces and activation sequences operate as designed.',
      },
      {
        title: 'Handover & documentation',
        text: 'Functional verification, test records, commissioning reports and handover documentation for the completed system.',
      },
      {
        title: 'Service & maintenance',
        text: 'Periodic testing, servicing and maintenance to support reliable system performance and ongoing compliance with applicable requirements.',
      },
    ],
    options: [
      'Testing and commissioning',
      'Functional verification',
      'Handover documentation',
      'Periodic testing',
      'Service and maintenance',
    ],
    specs: [
      ['Commissioning', 'Equipment, controls, interfaces, activation sequences'],
      ['Handover', 'Test records and commissioning reports'],
      ['Ongoing', 'Periodic testing, servicing and maintenance'],
    ],
    standards: ['Singapore Fire Code'],
    related: ['engineering-system-integration', 'smoke-curtains'],
  },
];

export const getSolution = (slug) => solutions.find((s) => s.slug === slug);
