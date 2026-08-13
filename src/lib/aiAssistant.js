/* ---------------------------------------------------------------------------
   AI ENGINEERING ASSISTANT — response layer
   ---------------------------------------------------------------------------
   Today this runs entirely in the browser against a rules-based knowledge base
   built from products.js, so the assistant is useful with no backend and no key.

   To switch it to a real model, implement ONE function — `callRemoteModel` —
   and set VITE_ASSISTANT_ENDPOINT. Everything else (streaming UI, history,
   suggested prompts, product context) already works.

   IMPORTANT: never put an API key in this file or any client bundle. Proxy the
   request through your own endpoint and keep the key server-side.
   --------------------------------------------------------------------------- */

import { products, productCategories } from '../data/products';

export const ASSISTANT_ENDPOINT = import.meta.env?.VITE_ASSISTANT_ENDPOINT || '';

/** Compact product context sent to the model as system grounding. */
export function buildContext(product) {
  const base = {
    company: 'Sterling Ventilation Asia Pacific Pte Ltd',
    categories: productCategories.map((c) => c.name),
    catalogue: products.map((p) => ({ name: p.name, model: p.model, slug: p.slug, summary: p.short })),
  };
  if (!product) return base;
  return {
    ...base,
    focus: {
      name: product.name,
      model: product.model,
      tagline: product.tagline,
      summary: product.short,
      specs: product.specs,
      applications: product.applications,
      certifications: product.certifications.map((c) => c.code),
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Remote model hook — implement this to go live.                             */
/* -------------------------------------------------------------------------- */
export async function callRemoteModel({ message, history, product, signal }) {
  if (!ASSISTANT_ENDPOINT) return null;

  const res = await fetch(ASSISTANT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal,
    body: JSON.stringify({
      message,
      history: history.map(({ role, text }) => ({ role, content: text })),
      context: buildContext(product),
    }),
  });

  if (!res.ok) throw new Error(`Assistant endpoint returned ${res.status}`);
  const data = await res.json();
  return { text: data.reply ?? data.text ?? '', links: data.links || [], source: 'model' };
}

/* -------------------------------------------------------------------------- */
/* Local knowledge base                                                        */
/* -------------------------------------------------------------------------- */

const KB = [
  {
    id: 'selection',
    keywords: ['which', 'recommend', 'select', 'choose', 'suitable', 'what product', 'need for'],
    answer: (p) =>
      `System selection follows the building, not the catalogue. We start from the building configuration, the fire strategy, the smoke control objectives and the applicable Singapore requirements, then work out which combination of containment, ventilation and extraction meets them.\n\nOur solutions cover smoke curtains, natural ventilation, smoke ventilation, mechanical ventilation, engineering and system integration, and testing and lifecycle support.\n\nTell me the building type and roughly how large it is and I will narrow it down.${
        p ? `\n\nYou are currently looking at the ${p.name} (${p.model}).` : ''
      }`,
    links: [
      { label: 'All solutions', to: '/solutions' },
      { label: 'All products', to: '/products' },
    ],
  },
  {
    id: 'standards',
    keywords: ['standard', 'certif', 'en 12101', 'compliance', 'code', 'approval', 'scdf', 'fire code'],
    answer: (p) =>
      `Singapore's Fire Code establishes the minimum fire-safety requirements and requires the applicable current referenced codes and standards to be used. The EN 12101 series is the product standard family we work to:\n\n• EN 12101-1 — smoke barriers and curtains\n• EN 12101-2 — natural smoke and heat exhaust ventilators\n• EN 12101-3 — powered smoke and heat exhaust ventilators\n• EN 12101-8 — smoke control dampers\n\nOur Prime Curtain is manufactured and tested in Singapore to comply with EN 12101-1.${
        p ? `\n\nThe ${p.name} carries: ${p.certifications.map((c) => c.code).join(', ')}.` : ''
      }`,
    links: [
      { label: 'Standards reference', to: '/resources/standards' },
      { label: 'Engineering & System Integration', to: '/solutions/engineering-system-integration' },
    ],
  },
  {
    id: 'curtain',
    keywords: ['curtain', 'drop', 'reservoir', 'atrium', 'containment', 'barrier', 'prime'],
    answer: () =>
      `Smoke curtains control the movement and spread of smoke within a building. They form smoke reservoirs, restrict smoke migration and support the effective operation of smoke exhaust systems.\n\nOur Prime Curtain is manufactured and tested in Singapore:\n\n• Typical classification — DH120, complying with EN 12101-1 and EN 13501-1\n• Fabric — fibreglass, double-coated with polyurethane polymer, 0.4 mm\n• Drop — part drop and full drop with controlled speed\n• Fail-safe — gravity to descend, power to hold\n• Interfaces — fire alarm and battery back-up control\n\nSystems are designed around the building geometry and smoke control strategy, considering curtain deployment, smoke layer height, reservoir dimensions, exhaust airflow, replacement air and system activation.`,
    links: [
      { label: 'Prime Curtain', to: '/products/smoke-curtain' },
      { label: 'Smoke Curtains solution', to: '/solutions/smoke-curtains' },
    ],
  },
  {
    id: 'natural',
    keywords: ['natural ventilation', 'louvre', 'actuator', 'window', 'fresh air', 'air quality', 'comfort'],
    answer: () =>
      `Natural ventilation uses wind pressure and temperature differences to introduce fresh outdoor air and remove stale or warm air from occupied spaces.\n\nOur solutions include automated window actuators, natural ventilation louvres, roof ventilators and intelligent control systems. Where appropriate, sensors can be integrated to control ventilation openings based on indoor and outdoor conditions.\n\nEach system is designed around the building layout, ventilation requirements, environmental conditions, control strategy and applicable Singapore codes and regulatory requirements.`,
    links: [
      { label: 'Natural Ventilation solution', to: '/solutions/natural-ventilation' },
      { label: 'Natural ventilation products', to: '/products#natural-ventilation' },
    ],
  },
  {
    id: 'smoke-vent',
    keywords: ['smoke ventilation', 'aov', 'ventilator', 'smoke shaft', 'smoke clearance', 'shev'],
    answer: () =>
      `Smoke ventilation supports safe evacuation and effective fire-fighting operations during a fire.\n\nOur solutions include natural smoke ventilators, mechanical smoke exhaust systems, smoke extraction fans, replacement air systems, smoke control ductwork, smoke reservoirs, smoke shafts and associated control systems.\n\nSystems are engineered for reliable operation during fire conditions, with consideration given to smoke movement, system activation, airflow requirements, discharge arrangements, fire-rated construction, emergency power supply, controls and integration with other fire protection systems.`,
    links: [
      { label: 'Smoke Ventilation solution', to: '/solutions/smoke-ventilation' },
      { label: 'Smoke ventilation products', to: '/products#smoke-ventilation' },
    ],
  },
  {
    id: 'extraction',
    keywords: ['extract', 'extraction', 'fan', 'damper', 'car park', 'basement', 'mechanical'],
    answer: () =>
      `Mechanical smoke control systems use dedicated fans, ductwork, dampers and air supply arrangements to extract smoke from designated areas and provide replacement air where required. They can be applied to corridors, lobbies, staircases, smoke shafts, car parks and other areas in accordance with the building's fire safety strategy.\n\nTypical technical basis:\n\n• Fan certification — EN 12101-3\n• Damper certification — EN 12101-8\n• Duct classification — 1.2 mm thick, fire resistant\n• Control — fire-rated cabling and battery back-up\n• Verification — engineering calculation / CFD\n\nEach system is engineered from the building configuration, smoke control objectives, required airflow and applicable Singapore Fire Code and relevant standards.`,
    links: [
      { label: 'Smoke extraction products', to: '/products#smoke-extraction' },
      { label: 'Mechanical Ventilation solution', to: '/solutions/mechanical-ventilation' },
    ],
  },
  {
    id: 'design',
    keywords: ['design', 'calculation', 'cfd', 'model', 'simulation', 'qp', 'submission', 'drawing'],
    answer: () =>
      `We provide the engineering behind the system — design calculations, smoke control analysis, system layouts, schematics, technical drawings, specifications, equipment selection and control philosophy.\n\nEvery building behaves differently, so our engineers assess the key factors affecting ventilation and smoke movement and use appropriate engineering calculations, modelling and analysis tools to evaluate system performance. For smoke control this may include smoke movement, airflow paths, smoke layer development, extraction rates, replacement air and system interaction.\n\nDesigns are developed to support Qualified Person (QP) submissions and regulatory review where applicable.`,
    links: [
      { label: 'System Design service', to: '/services/system-design' },
      { label: 'Engineering & System Integration', to: '/solutions/engineering-system-integration' },
    ],
  },
  {
    id: 'install',
    keywords: ['install', 'commission', 'site', 'handover', 'coordination'],
    answer: () =>
      `We install engineered smoke control systems, translating approved designs into fully coordinated installations. Our scope covers smoke curtains, smoke ventilation systems, system controls and integration, site coordination, testing and commissioning, and handover and support.\n\nFunctional testing covers equipment, controls, interfaces, activation sequences and system performance prior to handover, and we provide test records, commissioning documentation and technical information at completion.`,
    links: [
      { label: 'Installation service', to: '/services/installation' },
      { label: 'Testing & Lifecycle Support', to: '/solutions/testing-lifecycle-support' },
    ],
  },
  {
    id: 'maintenance',
    keywords: ['maintenance', 'testing', 'service', 'inspect', 'periodic', 'fault', 'training'],
    answer: () =>
      `We provide inspection, testing, servicing and maintenance across the complete system — smoke curtains, smoke ventilators, AOVs, smoke extraction fans, ductwork, dampers, louvres, control panels, sensors and the associated electrical and control interfaces.\n\nOur maintenance services cover routine inspection, functional testing, performance verification, preventive maintenance, fault diagnosis and rectification, and documentation and records.\n\nWe also provide practical training for building owners, facility managers and maintenance teams on the installed system.`,
    links: [
      { label: 'Maintenance service', to: '/services/maintenance' },
      { label: 'Training', to: '/services/training' },
    ],
  },
  {
    id: 'company',
    keywords: ['who are you', 'about', 'company', 'sterling', 'vent engineering', 'distributor', 'coverage', 'where'],
    answer: () =>
      `Sterling Ventilation Asia Pacific Pte Ltd is a Singapore-based specialist in engineered smoke control and ventilation solutions, established in 2026.\n\nWe are the exclusive distributor in Singapore covering Asia and Australia for Vent Engineering, UK, a specialist manufacturer of ventilation products in the industry since 1988. We also manufacture and test our Prime Curtain smoke curtain system in Singapore, designed and tested to comply with EN 12101-1.\n\nWe provide end-to-end services: design and engineering, supply, installation, testing, commissioning, system communication, service and maintenance.`,
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Global coverage', to: '/about/global-coverage' },
    ],
  },
  {
    id: 'price',
    keywords: ['price', 'cost', 'quote', 'budget', 'how much', 'rate', 'lead time', 'delivery', 'how long'],
    answer: (p) =>
      `We do not publish list pricing or standard lead times — smoke control equipment is engineered to the project, so a figure without the design behind it would be misleading.\n\nSend us the building type, approximate area or volume, the fire strategy if one exists, and the programme, and an engineer will come back to you.${
        p ? `\n\nI can route a request for the ${p.name} straight to the engineering team.` : ''
      }`,
    links: [{ label: 'Request a quotation', to: '/contact' }],
  },
];

const GREETING = /^(hi|hello|hey|good (morning|afternoon|evening)|greetings)\b/i;

function scoreEntry(entry, text) {
  return entry.keywords.reduce((n, k) => (text.includes(k) ? n + k.length : n), 0);
}

/** Rules-based answer used when no model endpoint is configured. */
export function localAnswer(message, product) {
  const text = message.toLowerCase().trim();

  if (GREETING.test(text)) {
    return {
      text: `Hello — I am Sterling's engineering assistant.\n\nI can help with solution and product selection, standards and certification, system design, and how our systems are installed, commissioned and maintained.${
        product ? `\n\nYou are viewing the ${product.name} (${product.model}). Ask me anything about it.` : ''
      }`,
      links: [{ label: 'Browse products', to: '/products' }],
      source: 'local',
    };
  }

  // direct product name match
  const named = products.find(
    (p) => text.includes(p.name.toLowerCase()) || text.includes(p.model.toLowerCase())
  );

  const best = KB.map((e) => ({ e, s: scoreEntry(e, text) }))
    .sort((a, b) => b.s - a.s)
    .filter((x) => x.s > 0)[0];

  if (best) {
    return { text: best.e.answer(named || product), links: best.e.links || [], source: 'local' };
  }

  if (named) {
    return {
      text: `${named.name} (${named.model}) — ${named.short}\n\nKey figures:\n${named.quickStats
        .map(([k, v]) => `• ${k}: ${v}`)
        .join('\n')}\n\nCertification: ${named.certifications.map((c) => c.code).join(', ')}.`,
      links: [{ label: `Open ${named.name}`, to: `/products/${named.slug}` }],
      source: 'local',
    };
  }

  return {
    text: `I do not have a prepared answer for that one.\n\nI am strongest on solution and product selection, EN 12101 and Singapore Fire Code requirements, system design, installation, testing and maintenance. If your question is project-specific, the fastest route is our engineering team — technical enquiries are usually answered by an engineer the same working day.`,
    links: [
      { label: 'Send it to an engineer', to: '/contact' },
      { label: 'Technical FAQ', to: '/resources/faq' },
    ],
    source: 'local',
  };
}

/** Public entry point used by the UI. Tries the model, falls back locally. */
export async function askAssistant({ message, history = [], product, signal }) {
  if (ASSISTANT_ENDPOINT) {
    try {
      const remote = await callRemoteModel({ message, history, product, signal });
      if (remote?.text) return remote;
    } catch (err) {
      if (err?.name === 'AbortError') throw err;
      // fall through to the local knowledge base
    }
  }
  await new Promise((r) => setTimeout(r, 420 + Math.min(900, message.length * 12)));
  return localAnswer(message, product);
}

export function suggestedPrompts(product) {
  if (!product) {
    return [
      'Which system suits a basement car park?',
      'What does the Prime Curtain comply with?',
      'Which standards apply in Singapore?',
      'What does your maintenance service cover?',
    ];
  }
  return [
    `What are the key specifications of the ${product.name}?`,
    `Which certifications does the ${product.model} carry?`,
    'Which solution does this belong to?',
    'How is it tested and maintained?',
  ];
}
