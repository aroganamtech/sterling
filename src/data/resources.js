export const standardFamilies = [
  {
    code: 'EN',
    name: 'European Standards',
    body: 'CEN / European Committee for Standardization',
    summary:
      'The EN 12101 series is the primary product and system standard family for smoke and heat control. It defines both the performance classes for equipment and the design basis for complete systems.',
    parts: [
      ['EN 12101-1', 'Smoke barriers / smoke curtains'],
      ['EN 12101-2', 'Natural smoke and heat exhaust ventilators'],
      ['EN 12101-3', 'Powered smoke and heat exhaust ventilators'],
      ['EN 12101-6', 'Pressure differential systems'],
      ['EN 12101-7', 'Smoke duct sections'],
      ['EN 12101-8', 'Smoke control dampers'],
      ['EN 12101-9', 'Control panels'],
      ['EN 12101-10', 'Power supplies'],
      ['EN 12101-13', 'Pressure differential systems — design and calculation'],
    ],
  },
  {
    code: 'NFPA',
    name: 'National Fire Protection Association',
    body: 'NFPA, United States',
    summary:
      'NFPA documents give the design methodology most commonly referenced on international projects, particularly for atria, transport tunnels and large-volume smoke management.',
    parts: [
      ['NFPA 92', 'Standard for Smoke Control Systems'],
      ['NFPA 204', 'Standard for Smoke and Heat Venting'],
      ['NFPA 130', 'Fixed Guideway Transit and Passenger Rail Systems'],
      ['NFPA 502', 'Road Tunnels, Bridges and Limited Access Highways'],
      ['NFPA 88A', 'Parking Structures'],
      ['NFPA 101', 'Life Safety Code'],
      ['NFPA 75', 'Information Technology Equipment'],
      ['NFPA 850', 'Electric Generating Plants'],
    ],
  },
  {
    code: 'BS',
    name: 'British Standards',
    body: 'BSI, United Kingdom',
    summary:
      'BS documents remain widely used across the region for smoke ventilation design guidance and for the overall fire safety design of buildings.',
    parts: [
      ['BS 7346-4', 'Functional recommendations for smoke and heat exhaust'],
      ['BS 7346-7', 'Code of practice — car park ventilation'],
      ['BS 7346-8', 'Code of practice — smoke control systems'],
      ['BS 9999', 'Fire safety in the design and use of buildings'],
      ['BS 9991', 'Fire safety — residential buildings'],
      ['BS EN 12101-13', 'Pressure differential systems — design'],
    ],
  },
  {
    code: 'ASHRAE',
    name: 'ASHRAE',
    body: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers',
    summary:
      'ASHRAE guidance underpins the airflow, pressurisation and HVAC interface engineering that smoke control depends on.',
    parts: [
      ['ASHRAE Handbook — HVAC Applications', 'Fire and smoke control chapter'],
      ['Handbook of Smoke Control Engineering', 'Design methodology and calculation'],
      ['ASHRAE 62.1', 'Ventilation for acceptable indoor air quality'],
    ],
  },
  {
    code: 'IBC',
    name: 'International Building Code',
    body: 'International Code Council',
    summary:
      'The IBC sets the prescriptive framework for smoke control in jurisdictions that adopt the I-Codes, including atrium, underground and covered mall provisions.',
    parts: [
      ['IBC Chapter 9', 'Fire protection and life safety systems'],
      ['IBC Section 909', 'Smoke control systems'],
      ['IBC Section 404', 'Atriums'],
      ['IBC Section 405', 'Underground buildings'],
    ],
  },
  {
    code: 'SCDF',
    name: 'SCDF Fire Code',
    body: 'Singapore Civil Defence Force',
    summary:
      'The Singapore Fire Code governs smoke control provisions for projects in Singapore, including engineering performance-based submissions.',
    parts: [
      ['Fire Code Chapter 7', 'Mechanical ventilation and smoke control'],
      ['Fire Code Chapter 8', 'Fire safety provisions for specific occupancies'],
      ['Fire Safety Engineering', 'Performance-based submission requirements'],
    ],
  },
];

export const complianceMatrix = {
  columns: ['EN 12101', 'NFPA 92', 'NFPA 130 / 502', 'BS 7346 / BS 9999', 'ASHRAE', 'IBC 909', 'SCDF'],
  rows: [
    { type: 'Shopping Malls & Atria', values: [3, 3, 0, 3, 2, 2, 3] },
    { type: 'Commercial Towers', values: [3, 3, 0, 3, 2, 2, 3] },
    { type: 'Hotels', values: [3, 2, 0, 3, 2, 2, 3] },
    { type: 'Hospitals', values: [3, 3, 0, 2, 3, 2, 3] },
    { type: 'Airports', values: [3, 3, 1, 2, 2, 2, 3] },
    { type: 'Metro & Rail', values: [2, 1, 3, 1, 1, 1, 2] },
    { type: 'Car Parks', values: [3, 2, 0, 3, 2, 2, 3] },
    { type: 'Warehouses', values: [3, 3, 0, 2, 1, 2, 3] },
    { type: 'Industrial Plants', values: [3, 3, 0, 2, 2, 2, 2] },
    { type: 'Data Centres', values: [2, 3, 0, 1, 3, 2, 2] },
  ],
  legend: [
    { level: 3, label: 'Primary basis of design' },
    { level: 2, label: 'Commonly referenced' },
    { level: 1, label: 'Applies in part' },
    { level: 0, label: 'Not typically applicable' },
  ],
};

export const library = [
  {
    category: 'Technical Guides',
    items: [
      { title: 'Smoke control system selection guide', meta: '20 pages · PDF', note: 'Choosing between natural, mechanical and hybrid smoke control strategies.' },
      { title: 'Sizing smoke reservoirs in tall atria', meta: '12 pages · PDF', note: 'Reservoir depth, curtain drop and the practical limits of channelling.' },
      { title: 'Integrated systems testing: a practical checklist', meta: '8 pages · PDF', note: 'What to test, in what order, and what evidence to keep.' },
    ],
  },
  {
    category: 'Design & Compliance',
    items: [
      { title: 'EN 12101 series — what each part covers', meta: '10 pages · PDF', note: 'Curtains, ventilators, powered exhaust, dampers and control equipment.' },
      { title: 'Preparing smoke control information for QP submission', meta: '9 pages · PDF', note: 'Calculations, drawings and documentation a reviewer expects to see.' },
      { title: 'Replacement air: the part that gets forgotten', meta: '7 pages · PDF', note: 'Why inlet provision decides whether an extract system performs.' },
    ],
  },
  {
    category: 'Installation & Maintenance',
    items: [
      { title: 'Smoke curtain installation manual', meta: 'PDF', note: 'Headbox fixing, alignment and commissioning procedure.' },
      { title: 'Smoke ventilator maintenance schedule', meta: 'PDF', note: 'Routine inspection, functional testing and preventive maintenance tasks.' },
      { title: 'Smoke control panel O&M guide', meta: 'PDF', note: 'Fault diagnosis, battery back-up checks and test records.' },
    ],
  },
];

export const downloads = [
  { title: 'Company Profile', type: 'PDF', size: '4.2 MB', desc: 'Capability statement covering our solutions, products and services.' },
  { title: 'Smoke Curtain Catalogue', type: 'PDF', size: '6.8 MB', desc: 'Prime Curtain and the fixed and automatic smoke curtain range.' },
  { title: 'Smoke Ventilator Catalogue', type: 'PDF', size: '5.4 MB', desc: 'Natural roof, louvred and facade ventilator range.' },
  { title: 'Smoke Extraction Fan Datasheets', type: 'PDF', size: '3.1 MB', desc: 'Fan performance data for mechanical smoke extraction systems.' },
  { title: 'Control System Datasheet', type: 'PDF', size: '1.9 MB', desc: 'Smoke control and curtain control panels, interfaces and monitoring.' },
  { title: 'Product Certificates Pack', type: 'ZIP', size: '12.6 MB', desc: 'CE marking, EN 12101 and third-party test certification.' },
  { title: 'Maintenance Schedule Template', type: 'XLSX', size: '0.4 MB', desc: 'Statutory testing register for facilities teams.' },
];

export const faqs = [
  {
    group: 'Smoke control basics',
    items: [
      {
        q: 'What is the difference between smoke ventilation and smoke control?',
        a: 'Smoke ventilation removes smoke from a space. Smoke control is the wider engineering discipline of managing where smoke goes — containing it, directing it, holding it above head height and keeping it out of escape routes. Ventilation is one tool within a smoke control strategy.',
      },
      {
        q: 'Why does a building need smoke control if it has sprinklers?',
        a: 'Sprinklers control fire growth; they do not remove smoke, and the smoke produced remains the principal cause of harm. Most codes require both, and the two systems are designed to work together — sprinkler activation is often part of the smoke control cause-and-effect.',
      },
      {
        q: 'What is a smoke reservoir?',
        a: 'A smoke reservoir is a volume bounded at ceiling level — by structure, downstands or smoke curtains — that holds the buoyant smoke layer in a controlled area so it can be extracted efficiently and kept above the occupied zone.',
      },
    ],
  },
  {
    group: 'System selection',
    items: [
      {
        q: 'Natural or mechanical ventilation — how do we choose?',
        a: 'It depends on building height, roof availability, the required clear layer and the reliability of buoyancy in the design fire. Natural systems are simpler and cheaper to run where the geometry supports them; mechanical systems give predictable performance where it does not. We usually assess both against the fire strategy before recommending.',
      },
      {
        q: 'When is CFD modelling actually necessary?',
        a: 'Whenever the geometry falls outside the assumptions of the standard calculation methods — very large or interconnected volumes, unusual roof forms, transport interchanges — or wherever an authority requires a performance-based demonstration. It is also worth doing voluntarily when it can reduce installed capacity.',
      },
      {
        q: 'Can smoke control be retrofitted to an existing building?',
        a: 'Yes, and it is common in refurbishment and change-of-use projects. The constraints are structural openings, available plant space and shaft routes. We start with a survey and a feasibility study before committing to a strategy.',
      },
    ],
  },
  {
    group: 'Testing & compliance',
    items: [
      {
        q: 'How often must smoke control systems be tested?',
        a: 'Typical practice is a weekly functional test, a more detailed monthly test, and a full annual test with documented results — but the governing requirement is set by the local code and the fire strategy. We build the schedule into the O&M documentation at handover.',
      },
      {
        q: 'What is integrated systems testing?',
        a: 'It is the end-to-end test of the fire alarm, smoke control, sprinkler, lift and access control systems responding together to the agreed cause-and-effect matrix. It is the point at which the design is proven as a system rather than as separate packages.',
      },
      {
        q: 'Which certification should equipment carry?',
        a: 'Smoke control equipment should carry third-party certification against the relevant part of EN 12101 (or the equivalent required by the project code), with test reports traceable to the specific product configuration installed.',
      },
    ],
  },
  {
    group: 'Maintenance',
    items: [
      {
        q: 'What does a maintenance visit cover?',
        a: 'Routine inspection of components, controls, wiring and access; functional testing of automatic activation, manual controls, curtain deployment, fan operation and damper movement; performance verification of airflow and system operating parameters; preventive maintenance; fault diagnosis with repair recommendations; and inspection, testing and servicing records for building management.',
      },
      {
        q: 'Do you train our facilities team on the installed system?',
        a: 'Yes. We provide practical training tailored to the installed system, covering the smoke control strategy and components, automatic and manual operation, emergency procedures, routine checks and maintenance awareness — with hands-on demonstration where applicable. Training can be delivered at commissioning, at handover or during ongoing maintenance.',
      },
    ],
  },
];



export const projectTypes = [
  'System design & engineering',
  'Smoke curtains',
  'Natural ventilation',
  'Smoke ventilation',
  'Mechanical smoke extraction',
  'Installation',
  'Maintenance & statutory testing',
  'Training',
  'Other',
];

export const enquiryRouting = {
  'System design & engineering': { team: 'Engineering & Design' },
  'Smoke curtains': { team: 'Engineering & Design' },
  'Natural ventilation': { team: 'Engineering & Design' },
  'Smoke ventilation': { team: 'Engineering & Design' },
  'Mechanical smoke extraction': { team: 'Engineering & Design' },
  Installation: { team: 'Projects & Installation' },
  'Maintenance & statutory testing': { team: 'Service & Maintenance' },
  Training: { team: 'Service & Maintenance' },
  Other: { team: 'Engineering & Commercial' },
};
