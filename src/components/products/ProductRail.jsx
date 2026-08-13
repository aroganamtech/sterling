import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Icon from '../Icon';
import { coverFor } from '../../lib/productImages';

/* ---------------------------------------------------------------------------
   Product rail — the Products page product browser.

   A three-up cinematic rail: the active product is held in the centre at full
   scale while the previous and next products sit partially visible either
   side, scaled and dimmed to give depth. Deliberately distinct from the
   landing page hero showcase, which presents a single product in a fixed
   frame with no neighbours.

   Behaviour: advances every ADVANCE_MS, loops continuously, and restarts its
   dwell after any manual change so a chosen product gets its full moment.
   Autoplay pauses on hover, on keyboard focus, when the tab is hidden and
   when the rail is scrolled out of view — several rails share a page, so an
   off-screen rail must not animate.

   Reads existing product data and existing product illustrations only.
   --------------------------------------------------------------------------- */

const ADVANCE_MS = 2000;
const TRANSITION_S = 0.72;
const EASE = [0.22, 1, 0.36, 1];
const SWIPE_THRESHOLD = 44;

/* how far a neighbour sits from the centre, as a share of its own width */
const NEIGHBOUR_OFFSET = 72;

const info = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function ProductRail({ items = [], categoryName = '' }) {
  const reduced = useReducedMotion();
  const total = items.length;

  const [[active, dir], setSlide] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const drag = useRef(null);
  const stageRef = useRef(null);

  const covers = useMemo(() => items.map((p) => coverFor(p.slug)), [items]);
  const product = total ? items[Math.min(active, total - 1)] : null;

  const go = useCallback(
    (target, direction) => {
      if (total < 2) return;
      setSlide(([current]) => {
        const t = ((target % total) + total) % total;
        if (t === current) return [current, direction ?? 1];
        return [t, direction ?? (t > current ? 1 : -1)];
      });
    },
    [total]
  );

  const next = useCallback(() => go(active + 1, 1), [go, active]);
  const prev = useCallback(() => go(active - 1, -1), [go, active]);

  /* autoplay — keyed on `active`, so a manual change restarts the dwell */
  useEffect(() => {
    if (reduced || paused || !visible || total < 2) return undefined;
    const id = setTimeout(() => setSlide(([c]) => [(c + 1) % total, 1]), ADVANCE_MS);
    return () => clearTimeout(id);
  }, [active, paused, visible, reduced, total]);

  /* only the rail actually on screen animates */
  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => setVisible(e.isIntersecting)), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  /* preload the illustrations so a transition never shows a blank frame */
  useEffect(() => {
    covers.forEach((src) => {
      if (!src) return;
      const img = new Image();
      img.src = src;
    });
  }, [covers]);

  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e) => {
    const start = drag.current;
    drag.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  const onFocus = (e) => {
    if (typeof e.target?.matches === 'function' && e.target.matches(':focus-visible')) setPaused(true);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  if (!product) return null;

  /* shortest signed distance from the active index, so the rail wraps */
  const offsetOf = (i) => {
    let d = i - active;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={onFocus}
      onBlurCapture={() => setPaused(false)}
    >
      {/* ------------------------------ rail head ----------------------------- */}
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="label">{categoryName} products</p>
          <p className="mt-2 font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-steel-500">
            <span className="tabular-nums text-navy-900">{String(active + 1).padStart(2, '0')}</span>
            <span className="mx-1.5">/</span>
            <span className="tabular-nums">{String(total).padStart(2, '0')}</span>
          </p>
        </div>

        {total > 1 ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label={`Previous ${categoryName} product`}
              className="flex h-11 w-11 items-center justify-center border border-steel-200 bg-white text-navy-800 transition-colors hover:border-signal-600 hover:text-signal-600"
            >
              <Icon name="chevronRight" className="h-4 w-4 rotate-180" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={`Next ${categoryName} product`}
              className="flex h-11 w-11 items-center justify-center border border-steel-200 bg-white text-navy-800 transition-colors hover:border-signal-600 hover:text-signal-600"
            >
              <Icon name="chevronRight" className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        ) : null}
      </div>

      {/* -------------------------------- stage ------------------------------- */}
      <div
        ref={stageRef}
        className="relative mt-7 h-[290px] touch-pan-y select-none overflow-hidden sm:h-[350px] lg:h-[410px]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          drag.current = null;
        }}
        onKeyDown={onKeyDown}
        role="group"
        aria-roledescription="carousel"
        aria-label={`${categoryName} product rail`}
        tabIndex={0}
      >
        {/* soft engineering light behind the active product */}
        <div
          className="pointer-events-none absolute inset-0 opacity-80 blur-3xl"
          style={{ background: 'radial-gradient(46% 46% at 50% 48%, rgba(200,16,46,.09), transparent 72%)' }}
          aria-hidden="true"
        />

        {items.map((p, i) => {
          const d = offsetOf(i);
          const isActive = d === 0;
          const isNeighbour = Math.abs(d) === 1;
          const cover = covers[i];

          return (
            <motion.div
              key={p.slug}
              className="absolute top-0 h-full w-[76%] max-w-[520px] sm:w-[62%] lg:w-[46%]"
              style={{ left: '50%', zIndex: isActive ? 30 : 10 }}
              initial={false}
              animate={{
                x: `${-50 + d * NEIGHBOUR_OFFSET}%`,
                scale: isActive ? 1 : 0.82,
                opacity: isActive ? 1 : isNeighbour ? 0.42 : 0,
              }}
              transition={{
                duration: reduced ? 0 : TRANSITION_S,
                ease: EASE,
                opacity: { duration: reduced ? 0 : TRANSITION_S * 0.8, ease: 'easeInOut' },
              }}
              aria-hidden={!isActive}
            >
              <div
                className={`relative flex h-full flex-col overflow-hidden bg-steel-50 transition-shadow duration-500 ${
                  isActive
                    ? 'border border-steel-200 shadow-[0_44px_90px_-40px_rgba(11,23,36,.34)]'
                    : 'border border-steel-200/70'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-[0.55]" />

                {isActive ? (
                  <span className="absolute left-0 top-6 z-10 bg-signal-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {p.model}
                  </span>
                ) : null}

                {cover ? (
                  <img
                    src={cover}
                    alt={isActive ? `${p.name} technical illustration` : ''}
                    decoding="async"
                    draggable="false"
                    className="relative h-full w-full object-contain p-4 sm:p-5"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center px-8 text-center">
                    <span className="font-display text-[18px] font-semibold text-navy-900">{p.name}</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* -------------------------- active product info ------------------------ */}
      <div className="mt-9 grid gap-8 border-t border-steel-200 pt-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div className="min-h-[132px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={product.slug}
              variants={info}
              initial={reduced ? false : 'enter'}
              animate="center"
              exit={reduced ? { opacity: 0 } : 'exit'}
              transition={{ duration: reduced ? 0 : 0.36, ease: 'easeOut' }}
            >
              <p className="text-[10.5px] font-bold uppercase tracking-widest2 text-signal-600">{categoryName}</p>
              <h3 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.05rem)] font-semibold leading-[1.1] text-navy-900">
                {product.name}
              </h3>
              <p className="mt-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-steel-500">
                {product.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-steel-600">{product.short}</p>

              <Link
                to={`/products/${product.slug}`}
                className="link-arrow mt-6"
                aria-label={`View ${product.name}`}
              >
                View product
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* quick stats travel with the active product */}
        <div className="min-h-[132px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.dl
              key={product.slug}
              variants={info}
              initial={reduced ? false : 'enter'}
              animate="center"
              exit={reduced ? { opacity: 0 } : 'exit'}
              transition={{ duration: reduced ? 0 : 0.36, ease: 'easeOut', delay: reduced ? 0 : 0.04 }}
              className="grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2"
            >
              {product.quickStats.slice(0, 4).map(([k, v]) => (
                <div key={k} className="bg-white px-5 py-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-widest2 text-steel-500">{k}</dt>
                  <dd className="mt-1.5 font-display text-[15px] font-semibold leading-snug text-navy-900">{v}</dd>
                </div>
              ))}
            </motion.dl>
          </AnimatePresence>
        </div>
      </div>

      {/* ----------------------------- indicators ----------------------------- */}
      {total > 1 ? (
        <div className="mt-8 flex items-center gap-2.5">
          {items.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => go(i, i > active ? 1 : -1)}
              aria-label={`Show ${p.name}`}
              aria-current={i === active}
              className="group py-2"
            >
              <span
                className={`block h-[3px] transition-all duration-500 ${
                  i === active ? 'w-12 bg-signal-600' : 'w-5 bg-steel-300 group-hover:bg-steel-400'
                }`}
              />
            </button>
          ))}
        </div>
      ) : null}

      <p className="sr-only" aria-live="polite">
        {`${categoryName} product ${active + 1} of ${total}: ${product.name}`}
      </p>
    </div>
  );
}
