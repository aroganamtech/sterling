export const engineeringServices = [
  {
    slug: 'smoke-modelling-cfd',
    title: 'Smoke Modelling (CFD)',
    icon: 'cfd',
    menuBlurb: 'FDS / CFD simulation of smoke movement and tenability',
    tagline: 'Proving the strategy before anything is installed',
    summary:
      'Computational fluid dynamics simulation of smoke movement, temperature, visibility and tenability under the project design fires.',
    overview: [
      'Hand calculations answer whether a system is plausible. CFD answers whether it works. We build the geometry, apply the agreed design fires, and simulate smoke movement through the space over the evacuation timeline — reporting visibility, temperature, CO exposure and radiant flux against the tenability criteria in the fire strategy.',
      'The output is not a picture. It is evidence: a documented set of scenarios, assumptions and results that an authority can review, and a design that has been optimised — often reducing extract rates and equipment cost — before procurement begins.',
    ],
    deliverables: [
      'Design fire and scenario matrix agreed with the fire engineer',
      'Geometry model built from architectural and MEP information',
      'Transient simulation over the full evacuation timeline',
      'Tenability assessment: visibility, temperature, CO, radiation',
      'Sensitivity studies on fire size, location and system response time',
      'Illustrated technical report suitable for authority submission',
    ],
    tools: ['FDS / PyroSim', 'Ansys Fluent', 'Pathfinder egress modelling', 'Smokeview post-processing'],
    outcomes: [
      { title: 'Right-sized systems', text: 'Extract rates and fan duties justified by analysis rather than rules of thumb.' },
      { title: 'Faster approvals', text: 'Evidence-led submissions reduce authority review cycles.' },
      { title: 'Design confidence', text: 'Failure modes identified on screen, not at commissioning.' },
    ],
  },
  {
    slug: 'performance-based-design',
    title: 'Performance Based Design',
    icon: 'pbd',
    menuBlurb: 'Engineered alternatives where prescriptive codes do not fit',
    tagline: 'Engineering solutions for buildings the code did not anticipate',
    summary:
      'Performance-based fire and smoke control design for complex geometries where prescriptive provisions cannot be applied directly.',
    overview: [
      'Prescriptive codes are written around conventional buildings. Long-span atria, interconnected volumes, transport interchanges and adaptive reuse projects frequently fall outside them. A performance-based approach replaces the prescriptive rule with an explicit demonstration that the required level of safety is achieved.',
      'We define the acceptance criteria with the fire engineer and the authority up front, establish the design fires and scenarios, quantify available and required safe egress time, and document the whole chain of reasoning so that the alternative solution is auditable.',
    ],
    deliverables: [
      'Qualitative design review and scope agreement',
      'Design fire selection with justification',
      'ASET / RSET analysis with margin assessment',
      'Trial design iteration and optimisation',
      'Risk and sensitivity assessment',
      'Alternative solution report for authority acceptance',
    ],
    tools: ['ASET / RSET analysis', 'FDS + Pathfinder coupling', 'Zone models (CFAST)', 'Probabilistic sensitivity studies'],
    outcomes: [
      { title: 'Design freedom', text: 'Architectural intent preserved without compromising life safety.' },
      { title: 'Quantified safety margin', text: 'Safety demonstrated numerically, not asserted.' },
      { title: 'Documented rationale', text: 'A defensible record for approval, insurance and handover.' },
    ],
  },
  {
    slug: 'fire-engineering-support',
    title: 'Fire Engineering Support',
    icon: 'fire',
    menuBlurb: 'Strategy input from concept through commissioning',
    tagline: 'Smoke control input to the fire strategy, at the right stage',
    summary:
      'Specialist smoke control input to the project fire strategy — from concept feasibility through approval, installation and commissioning.',
    overview: [
      'Smoke control decisions made late are expensive. Reservoir depths affect ceiling voids, shaft sizes affect the core, and fan plant affects the roof. Bringing smoke control engineering into the strategy at concept stage removes most of the coordination cost that otherwise appears at tender.',
      'We work alongside the appointed fire engineer and design team throughout: assessing options, checking that the fire strategy is physically buildable, and staying involved through installation and witnessed commissioning.',
    ],
    deliverables: [
      'Concept-stage smoke control options appraisal',
      'Spatial and plant requirement schedules for the design team',
      'Review of fire strategy from a smoke control buildability view',
      'Authority liaison and technical clarification support',
      'Method statements and integrated testing plans',
      'Witnessed commissioning attendance and sign-off support',
    ],
    tools: ['Smoke layer and plume calculations', 'Zone modelling', 'Cause-and-effect matrices', 'Integrated systems testing plans'],
    outcomes: [
      { title: 'Fewer late changes', text: 'Spatial needs captured before the core and ceilings are fixed.' },
      { title: 'Coordinated approvals', text: 'One consistent story across strategy, drawings and commissioning.' },
      { title: 'Smoother handover', text: 'Testing evidence prepared alongside the design, not after it.' },
    ],
  },
  {
    slug: 'bim-revit',
    title: 'BIM & Revit',
    icon: 'bim',
    menuBlurb: 'Coordinated 3D models, families and clash resolution',
    tagline: 'Smoke control modelled properly, coordinated early',
    summary:
      'Native Revit families and fully coordinated 3D models integrating smoke control with architecture, structure and MEP.',
    overview: [
      'Smoke control equipment is bulky, heavy and needs access — and it is usually added to the model last. We deliver native, parameterised Revit content and coordinate it into the federated model at the right level of development, so that fan plant, ductwork, dampers and curtain headboxes have real space allocated to them.',
      'Clash detection is only half the value. The other half is maintainability: access zones, service withdrawal space and lifting routes modelled so that the system can be tested and serviced for its whole life.',
    ],
    deliverables: [
      'Native Revit families with performance parameters',
      'LOD 300 / 400 coordinated models',
      'Clash detection and resolution reports',
      'Access, maintenance and withdrawal zone modelling',
      'Builders work and penetration schedules',
      'COBie / asset data export for handover',
    ],
    tools: ['Autodesk Revit', 'Navisworks', 'BIM 360 / ACC', 'AutoCAD'],
    outcomes: [
      { title: 'Clash-free installation', text: 'Conflicts resolved in the model rather than on site.' },
      { title: 'Accurate builders work', text: 'Penetrations and supports issued early and correctly.' },
      { title: 'Usable asset data', text: 'Handover information structured for the facilities team.' },
    ],
  },
  {
    slug: 'shop-drawings',
    title: 'Shop Drawings',
    icon: 'drawing',
    menuBlurb: 'Installation-ready detail, schedules and as-builts',
    tagline: 'Detail that survives contact with the site',
    summary:
      'Fabrication and installation-level drawings, equipment schedules, wiring diagrams and as-built documentation.',
    overview: [
      'A shop drawing set is where the design becomes buildable. Ours carry the information the installer actually needs — support and fixing details, damper and actuator locations, cable routes, interface points and setting-out dimensions referenced to structure.',
      'The same set is maintained through construction so that the as-built record issued at handover reflects what is genuinely installed, which is what the maintenance and re-testing regime depends on.',
    ],
    deliverables: [
      'Layout, section and setting-out drawings',
      'Fabrication and support detail drawings',
      'Equipment and valve/damper schedules',
      'Control panel and field wiring diagrams',
      'Cause-and-effect matrix drawings',
      'As-built drawings and O&M documentation',
    ],
    tools: ['AutoCAD', 'Revit', 'EPLAN', 'Document control workflows'],
    outcomes: [
      { title: 'Faster installation', text: 'Fewer RFIs and less rework on site.' },
      { title: 'Consistent quality', text: 'Details repeat correctly across large installations.' },
      { title: 'Reliable records', text: 'As-builts that support statutory re-testing for years.' },
    ],
  },
  {
    slug: 'compliance-consulting',
    title: 'Compliance Consulting',
    icon: 'compliance',
    menuBlurb: 'Code interpretation, submissions and authority liaison',
    tagline: 'Navigating EN, NFPA, BS and local codes with confidence',
    summary:
      'Interpretation of local and international fire safety regulation, submission support and authority liaison.',
    overview: [
      'Projects across Asia-Pacific routinely reference more than one code family at once — a Singapore project may sit on SCDF requirements while the client standard calls for NFPA and the equipment is EN certified. Reconciling them without over-engineering is a skill in itself.',
      'We map the applicable requirements, identify where they conflict or overlap, agree the governing basis with the authority, and prepare the submission package that supports it.',
    ],
    deliverables: [
      'Applicable code and standard register',
      'Gap analysis against the current design',
      'Equipment certification and traceability review',
      'Submission drawings and calculation packages',
      'Authority query response and clarification',
      'Compliance and testing close-out register',
    ],
    tools: ['EN 12101 series', 'NFPA 92 / 204 / 130 / 502', 'BS 9999 / BS 7346', 'SCDF Fire Code', 'IBC / ASHRAE'],
    outcomes: [
      { title: 'Predictable approvals', text: 'Requirements agreed early rather than discovered late.' },
      { title: 'No over-specification', text: 'Only the governing requirement is engineered to.' },
      { title: 'Traceable certification', text: 'Every certificate mapped to the installed asset.' },
    ],
  },
];

export const getEngineering = (slug) => engineeringServices.find((s) => s.slug === slug);

export const serviceCapabilities = [
  'Smoke modelling',
  'CFD simulation',
  'Fire engineering',
  'Performance based design',
  'BIM coordination',
  'Airflow calculations',
  'Site survey',
  'Installation supervision',
  'Testing & commissioning',
  'Annual maintenance',
];

export const processSteps = [
  { step: 'Consultation', text: 'Brief, fire strategy review and feasibility discussion with the design team.' },
  { step: 'Site Survey', text: 'Measured survey, existing conditions and constraint assessment.' },
  { step: 'Engineering Design', text: 'System selection, sizing calculations and spatial coordination.' },
  { step: 'CFD Simulation', text: 'Scenario modelling and tenability verification of the proposed design.' },
  { step: 'Approval Drawings', text: 'Submission package, calculations and authority liaison.' },
  { step: 'Manufacturing', text: 'Certified equipment production with documented traceability.' },
  { step: 'Installation', text: 'Supervised installation to approved shop drawings.' },
  { step: 'Testing', text: 'Pre-commissioning checks, airflow and cause-and-effect testing.' },
  { step: 'Commissioning', text: 'Witnessed integrated systems testing and authority handover.' },
  { step: 'Maintenance', text: 'Scheduled statutory testing, servicing and condition monitoring.' },
];
