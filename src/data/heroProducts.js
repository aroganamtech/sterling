/* ---------------------------------------------------------------------------
   HERO PRODUCT SHOWCASE

   The four photographs supplied by the client, in the order they were given.
   They drive the animated product stack on the home page hero.

   TODO — the `name` and `blurb` fields below describe what is visible in each
   photograph. Replace them with the confirmed product names (and, if you want
   the cards to link through, add a `to: '/products/<slug>'` to each entry —
   ProductShowcase already renders the card as a link when `to` is present).
   --------------------------------------------------------------------------- */

import louvredVentilator from '../assets/hero/products/01-louvred-ventilator.webp';
import roofVentOpen from '../assets/hero/products/02-roof-vent-open.webp';
import roofVentClosed from '../assets/hero/products/03-roof-vent-closed.webp';
import louvreWindow from '../assets/hero/products/04-louvre-window.webp';

export const heroProducts = [
  {
    id: 'louvred-ventilator',
    name: 'Louvred Ventilator',
    blurb: 'Natural ventilation and smoke exhaust',
    image: louvredVentilator,
  },
  {
    id: 'roof-vent-open',
    name: 'Top-Hung Roof Vent',
    blurb: 'Automatic opening vent, driven to the fire position',
    image: roofVentOpen,
  },
  {
    id: 'roof-vent-closed',
    name: 'Roof Ventilation Unit',
    blurb: 'Daily ventilation with smoke ventilation duty',
    image: roofVentClosed,
  },
  {
    id: 'louvre-window',
    name: 'Louvre Window Unit',
    blurb: 'Controlled ventilation openings in the facade',
    image: louvreWindow,
  },
];
