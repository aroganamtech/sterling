import { Suspense, lazy, useEffect, useState } from 'react';
import fireBlur from '../../assets/hero/fire-blur.jpg';
import fireMid from '../../assets/hero/fire-1400.jpg';
import smokeTex from '../../assets/smoke-texture.jpg';
import { signals, supportsWebGL } from '../../lib/viewportSignals';

const HeroStage = lazy(() => import('./HeroStage'));

/* --------------------------------------------------------------------------
   CSS fallback — used when WebGL is unavailable or the visitor has asked for
   reduced motion. Same five-layer language, no GPU scene.
   -------------------------------------------------------------------------- */
function CssStage({ still }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* Layer 1 — fire */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${still ? '' : 'hero-drift'}`}
        style={{ backgroundImage: `url(${fireMid})` }}
      />
      {/* Layer 4 — heat shimmer (blurred duplicate, screened back in) */}
      {!still ? (
        <div
          className="hero-shimmer absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen blur-[3px]"
          style={{ backgroundImage: `url(${fireMid})` }}
        />
      ) : null}
      {/* Layer 2 — smoke */}
      {!still ? (
        <>
          <div
            className="hero-smoke-a absolute inset-[-25%] bg-cover opacity-30 mix-blend-screen"
            style={{ backgroundImage: `url(${smokeTex})` }}
          />
          <div
            className="hero-smoke-b absolute inset-[-35%] bg-cover opacity-20 mix-blend-screen"
            style={{ backgroundImage: `url(${smokeTex})` }}
          />
          {/* Layer 3 — embers */}
          <div className="hero-embers absolute inset-0" />
        </>
      ) : null}
      {/* Layer 5 — foreground haze */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#07080a] via-[#07080a]/60 to-transparent" />
    </div>
  );
}

export default function CinematicHero({ children, scrollCue = true }) {
  const [mode, setMode] = useState('blur'); // blur | webgl | css

  useEffect(() => {
    // read the preference directly — never depend on init order
    const reduced =
      !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    signals.reduced = reduced;
    const ok = supportsWebGL();
    // give the paint a frame so the blurred placeholder shows instantly
    const id = requestAnimationFrame(() => setMode(ok && !reduced ? 'webgl' : 'css'));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="hero-root relative isolate flex w-full items-center overflow-hidden bg-[#07080a]"
      style={{ height: '100svh', minHeight: '620px' }}
    >
      {/* progressive placeholder — always painted, never removed */}
      <div
        className="absolute inset-0 scale-[1.08] bg-cover bg-center blur-2xl"
        style={{ backgroundImage: `url(${fireBlur})` }}
        aria-hidden="true"
      />

      {mode === 'webgl' ? (
        <Suspense fallback={null}>
          <HeroStage />
        </Suspense>
      ) : mode === 'css' ? (
        <CssStage still={signals.reduced} />
      ) : null}

      {/* cinematic grading */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07080a]/94 via-[#07080a]/38 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/55" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-35" />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      {/* content — parallaxed on a perspective plane, faded on scroll */}
      <div className="shell relative z-10 w-full" style={{ perspective: '1400px' }}>
        <div className="hero-content">{children}</div>
      </div>

      {scrollCue ? (
        <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-400 lg:flex">
          <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
          <span className="hero-scroll-line h-10 w-px" />
        </div>
      ) : null}
    </section>
  );
}
