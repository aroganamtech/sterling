/* ---------------------------------------------------------------------------
   Shared, render-free viewport signals.

   Pointer position, scroll offset and hero progress are updated in a single
   requestAnimationFrame loop and read directly by the WebGL scene and by CSS
   custom properties. Nothing here triggers a React re-render — which is what
   keeps the hero at 60fps while everything moves.
   --------------------------------------------------------------------------- */

export const signals = {
  // raw pointer, normalised -1 … 1
  pointerX: 0,
  pointerY: 0,
  // eased pointer — what animations actually consume
  x: 0,
  y: 0,
  // scroll
  scrollY: 0,
  // 0 at the top of the hero, 1 once it has scrolled fully out
  heroProgress: 0,
  // 1 while the hero is on screen, 0 once it is not (used to idle the canvas)
  heroVisible: 1,
  // seconds since start
  time: 0,
  // resolved eagerly so consumers can branch before the loop starts
  reduced:
    typeof window !== 'undefined' && !!window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
};

const EASE = 0.055;
let started = false;
let raf = 0;
let last = 0;

function onPointerMove(e) {
  const w = window.innerWidth || 1;
  const h = window.innerHeight || 1;
  signals.pointerX = (e.clientX / w) * 2 - 1;
  signals.pointerY = (e.clientY / h) * 2 - 1;
}

function onDeviceOrientation(e) {
  if (e.gamma == null || e.beta == null) return;
  signals.pointerX = Math.max(-1, Math.min(1, e.gamma / 35));
  signals.pointerY = Math.max(-1, Math.min(1, (e.beta - 45) / 45));
}

function onScroll() {
  signals.scrollY = window.scrollY || 0;
  const vh = window.innerHeight || 1;
  signals.heroProgress = Math.min(1, Math.max(0, signals.scrollY / vh));
  signals.heroVisible = signals.scrollY < vh * 1.15 ? 1 : 0;
}

function tick(t) {
  const dt = last ? Math.min(0.05, (t - last) / 1000) : 0.016;
  last = t;
  signals.time += dt;

  const k = signals.reduced ? 1 : 1 - Math.pow(1 - EASE, dt * 60);
  signals.x += (signals.pointerX - signals.x) * k;
  signals.y += (signals.pointerY - signals.y) * k;

  const root = document.documentElement;
  root.style.setProperty('--mx', signals.x.toFixed(4));
  root.style.setProperty('--my', signals.y.toFixed(4));
  root.style.setProperty('--hero-progress', signals.heroProgress.toFixed(4));

  raf = requestAnimationFrame(tick);
}

export function startViewportSignals() {
  if (started || typeof window === 'undefined') return () => {};
  started = true;

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
  raf = requestAnimationFrame(tick);

  return () => {
    started = false;
    cancelAnimationFrame(raf);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('deviceorientation', onDeviceOrientation);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

/** WebGL capability probe, cached. */
let webgl = null;
export function supportsWebGL() {
  if (webgl !== null) return webgl;
  try {
    const c = document.createElement('canvas');
    webgl = !!(
      window.WebGLRenderingContext &&
      (c.getContext('webgl2') || c.getContext('webgl') || c.getContext('experimental-webgl'))
    );
  } catch {
    webgl = false;
  }
  return webgl;
}

/** Rough device-tier heuristic used to scale particle counts. */
export function deviceTier() {
  if (typeof navigator === 'undefined') return 'high';
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;
  const narrow = typeof window !== 'undefined' && window.innerWidth < 820;
  if (narrow || cores <= 4 || mem <= 4) return 'low';
  if (cores <= 8) return 'mid';
  return 'high';
}
