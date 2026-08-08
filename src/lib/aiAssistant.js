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

import { products, getProduct, productCategories } from '../data/products';

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
      `System selection starts with three questions: the building volume and clear height you need to protect, the design fire agreed with the fire engineer, and whether buoyancy alone can carry the smoke out.\n\nIf the roof geometry supports it, natural ventilation (SV-SHEV) is simpler and cheaper to run. Where it does not — basements, deep plan, tall atria — mechanical extraction (SV-F400) takes over, almost always with smoke curtains (SV-SC) forming the reservoir.\n\nTell me the building type and approximate volume and I will narrow it down.${
        p ? `\n\nYou are currently looking at the ${p.name} (${p.model}).` : ''
      }`,
    links: [
      { label: 'Solution finder', to: '/solutions' },
      { label: 'All products', to: '/products' },
    ],
  },
  {
    id: 'standards',
    keywords: ['standard', 'certif', 'en 12101', 'nfpa', 'compliance', 'code', 'approval', 'scdf', 'bs '],
    answer: (p) =>
      `Our equipment is certified to the EN 12101 series, which most Asia-Pacific authorities accept directly:\n\n• EN 12101-1 — smoke barriers and curtains\n• EN 12101-2 — natural smoke and heat exhaust ventilators\n• EN 12101-3 — powered smoke exhaust (F300 / F400)\n• EN 12101-6 — pressure differential systems\n• EN 12101-8 — smoke control dampers\n• EN 12101-9 / -10 — control panels and power supplies\n\nNFPA 92, NFPA 204 and NFPA 130 are commonly referenced for design methodology, and SCDF governs Singapore projects.${
        p ? `\n\nThe ${p.name} carries: ${p.certifications.map((c) => c.code).join(', ')}.` : ''
      }`,
    links: [
      { label: 'Standards reference', to: '/resources/standards' },
      { label: 'Compliance consulting', to: '/engineering/compliance-consulting' },
    ],
  },
  {
    id: 'f300',
    keywords: ['f300', 'f400', 'high temperature', 'temperature rating', '300', '400'],
    answer: () =>
      `F300 and F400 are the EN 12101-3 classifications for smoke extract fans.\n\n• F300 — the fan is proven to deliver its duty at 300 °C for 2 hours\n• F400 — same, at 400 °C for 2 hours\n\nThe rating comes from a full-scale fire test of the complete fan, motor and bearing assembly — it cannot be calculated or inferred from component ratings. F300 is typical for car parks; F400 is usually specified where the design fire is larger or the fan sits closer to the reservoir.`,
    links: [{ label: 'Smoke extract fan', to: '/products/smoke-extract-fan' }],
  },
  {
    id: 'aerodynamic',
    keywords: ['aerodynamic', 'free area', 'cv', 'geometric', 'vent area'],
    answer: () =>
      `Aerodynamic free area is the figure your ventilation calculation actually needs — geometric area will over-state performance by a wide margin.\n\nAerodynamic area = geometric area × Cv, where Cv is the discharge coefficient measured by test. A ventilator with 2.0 m² of geometric opening and a Cv of 0.62 gives 1.24 m² of aerodynamic area.\n\nWe only publish tested aerodynamic values. If a competing datasheet quotes geometric area, the two numbers are not comparable.`,
    links: [{ label: 'Smoke ventilator', to: '/products/smoke-ventilator' }],
  },
  {
    id: 'curtain-drop',
    keywords: ['curtain', 'drop', 'reservoir', 'atrium', 'headbox', 'barrier'],
    answer: () =>
      `Smoke curtains form the reservoir that makes extraction achievable. Practical guidance:\n\n• Reservoir depth is typically 10–20% of the ceiling height, and the smoke layer base must stay above head height plus a margin\n• Our SV-SC handles single-panel drops to 8 m and unlimited multi-panel runs\n• Descent is gravity fail-safe at roughly 0.1 m/s — no power needed to deploy\n• The headbox is 165 × 165 mm minimum, which is what you need to reserve in the ceiling void\n\nDeep reservoirs above about 4 m usually need CFD verification rather than the standard calculation.`,
    links: [
      { label: 'Smoke curtain', to: '/products/smoke-curtain' },
      { label: 'CFD modelling', to: '/engineering/smoke-modelling-cfd' },
    ],
  },
  {
    id: 'pressurisation',
    keywords: ['pressuris', 'pressuriz', 'stair', 'door force', 'differential', '50 pa'],
    answer: () =>
      `Pressurisation has to satisfy two criteria at once:\n\n• 50 Pa differential with all doors closed\n• Door opening force ≤ 100 N measured at the handle\n• 0.75–2.0 m/s through the open door, depending on the system class\n\nMost failures happen at the second criterion — a system that holds 50 Pa statically pushes the door force over limit unless the relief modulates. The SV-SPU measures pressure continuously and varies fan speed through the door-opening cycle, so it passes the dynamic test as well as the static one.`,
    links: [{ label: 'Stair pressurisation unit', to: '/products/stair-pressurisation-unit' }],
  },
  {
    id: 'carpark',
    keywords: ['car park', 'carpark', 'jet fan', 'impulse', 'basement', 'parking', 'co sensor'],
    answer: () =>
      `Impulse (jet fan) ventilation replaces car park supply and extract ductwork with directed thrust. The gains are real: slab-to-soffit height recovered, less builders work, and demand-controlled running on CO/NO₂ sensors instead of fixed extract.\n\nThe engineering that matters is the flow field — beam downstands, ramps and column grids create stagnation zones that only show up in CFD. We model every layout before we quote it.\n\nJet fans for fire duty must be F300 rated; ours are, and reversible versions are available for zoned smoke control.`,
    links: [
      { label: 'Car park jet fan', to: '/products/car-park-jet-fan' },
      { label: 'Car park ventilation', to: '/solutions/car-park-ventilation' },
    ],
  },
  {
    id: 'maintenance',
    keywords: ['maintenance', 'testing', 'service', 'weekly', 'annual', 'inspect'],
    answer: () =>
      `Typical statutory regime for smoke control equipment:\n\n• Weekly — functional test of each device, logged\n• Monthly — more detailed operational check\n• Annually — full test including cause-and-effect re-verification, with a written report\n\nThe governing requirement is set by the local code and your fire strategy. Our SV-SCP control panel runs the weekly cycle automatically and logs the result, which turns the record-keeping from a clipboard exercise into a data trail an auditor can accept.`,
    links: [
      { label: 'Smoke control panel', to: '/products/smoke-control-panel' },
      { label: 'FAQ', to: '/resources/faq' },
    ],
  },
  {
    id: 'cfd',
    keywords: ['cfd', 'model', 'simulation', 'fds', 'tenability', 'aset', 'rset'],
    answer: () =>
      `We run CFD when the geometry falls outside the assumptions of the standard calculation methods — large or interconnected volumes, unusual roof forms, transport interchanges — or where an authority requires a performance-based demonstration.\n\nThe output is a documented scenario matrix with visibility, temperature, CO and radiant flux assessed against the tenability criteria in the fire strategy. It regularly reduces installed extract capacity, so it often pays for itself before procurement.`,
    links: [{ label: 'Smoke modelling (CFD)', to: '/engineering/smoke-modelling-cfd' }],
  },
  {
    id: 'lead-time',
    keywords: ['lead time', 'delivery', 'how long', 'programme', 'schedule', 'when can'],
    answer: () =>
      `Indicative lead times, from approved shop drawings:\n\n• Smoke curtains — 8 to 10 weeks\n• Natural ventilators and louvres — 8 to 12 weeks\n• F300 / F400 fans — 10 to 14 weeks\n• Control panels — 6 to 8 weeks\n\nThese move with project size and specification. For a firm programme commitment, send us the schedule and we will confirm against current production.`,
    links: [{ label: 'Contact the team', to: '/contact' }],
  },
  {
    id: 'price',
    keywords: ['price', 'cost', 'quote', 'budget', 'how much', 'rate'],
    answer: (p) =>
      `We do not publish list pricing — smoke control equipment is engineered to the project, so a number without the design behind it would be misleading.\n\nFor a budget figure we need the building type, approximate area or volume, the fire strategy if one exists, and the programme. That is usually enough for a ±15% budget estimate within a few days.${
        p ? `\n\nI can route a request for the ${p.name} straight to the engineering team.` : ''
      }`,
    links: [{ label: 'Request a quotation', to: '/contact' }],
  },
  {
    id: 'bim',
    keywords: ['bim', 'revit', 'cad', 'drawing', 'dwg', 'model file', 'family'],
    answer: () =>
      `Native Revit families with performance parameters are available for every product in the range, along with 2D CAD blocks and installation details.\n\nWe issue them at LOD 300 for coordination and LOD 400 where fabrication-level detail is needed, with access and maintenance zones modelled so the equipment can actually be serviced after handover.`,
    links: [
      { label: 'BIM & Revit', to: '/engineering/bim-revit' },
      { label: 'Downloads', to: '/resources/downloads' },
    ],
  },
  {
    id: 'install',
    keywords: ['install', 'commission', 'site', 'supervision', 'handover', 'testing regime'],
    answer: () =>
      `We supervise installation against approved shop drawings and carry out pre-commissioning, airflow verification and full cause-and-effect testing before the witnessed integrated systems test.\n\nHandover includes as-built drawings, O&M documentation, certification traceable to each installed asset, and the statutory testing schedule set up for the facilities team.`,
    links: [{ label: 'Engineering process', to: '/engineering' }],
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
      text: `Hello — I am Sterling's engineering assistant.\n\nI can help with product selection, standards and certification, performance data, lead times and how our systems are commissioned and maintained.${
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
    text: `I do not have a prepared answer for that one.\n\nI am strongest on product selection, EN 12101 and NFPA requirements, performance data, CFD, lead times, installation and maintenance. If your question is project-specific, the fastest route is our engineering team — technical enquiries are usually answered the same working day.`,
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
      'What is the difference between F300 and F400?',
      'Which standards apply in Singapore?',
      'Do you provide Revit families?',
    ];
  }
  return [
    `What are the key specifications of the ${product.name}?`,
    `Which certifications does the ${product.model} carry?`,
    'What is the typical lead time?',
    'How is it tested and maintained?',
  ];
}
