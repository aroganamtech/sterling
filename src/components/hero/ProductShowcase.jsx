import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Icon from '../Icon';
import { heroProducts } from '../../data/heroProducts';

/* ---------------------------------------------------------------------------
   Hero product showcase — one large product presented at a time.

   Timing:  the active product sits perfectly still for DISPLAY_MS, then the
   next one slides into the identical position over TRANSITION_S. Nothing
   floats, drifts or moves while a product is on screen.

   Interaction: autoplay, clickable indicator, numeric counter, previous / next
   buttons, touch or pointer swipe, pause on hover and on keyboard focus. Any
   manual change restarts the dwell so the chosen product gets its full moment.

   2D only — CSS transforms via framer-motion. No canvas, WebGL, 3D or particles.
   --------------------------------------------------------------------------- */

const DISPLAY_MS = 1900; // product held still
const TRANSITION_S = 0.7; // slide duration
const EASE = [0.22, 1, 0.36, 1];
const SWIPE_THRESHOLD = 48;

const slide = {
  enter: (dir) => ({ x: dir >= 0 ? '60%' : '-60%', opacity: 0, scale: 0.97 }),
  center: { x: '0%', opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir >= 0 ? '-60%' : '60%', opacity: 0, scale: 0.97 }),
};

const caption = {
  enter: { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function ProductShowcase() {
  const reduced = useReducedMotion();
  const total = Array.isArray(heroProducts) ? heroProducts.length : 0;

  const [[active, dir], setSlide] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState({});
  const drag = useRef(null);

  const product = total ? heroProducts[Math.min(active, total - 1)] : null;

  const go = useCallback(
    (target, direction) => {
      setSlide(([current]) => {
        const t = ((target % total) + total) % total;
        if (t === current) return [current, direction];
        return [t, direction ?? (t > current ? 1 : -1)];
      });
    },
    [total]
  );

  const next = useCallback(() => go(active + 1, 1), [go, active]);
  const prev = useCallback(() => go(active - 1, -1), [go, active]);

  /* autoplay — keyed on `active`, so a manual change restarts the dwell */
  useEffect(() => {
    if (reduced || paused || total < 2) return undefined;
    const id = setTimeout(() => setSlide(([c]) => [(c + 1) % total, 1]), DISPLAY_MS + TRANSITION_S * 1000);
    return () => clearTimeout(id);
  }, [active, paused, reduced, total]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  /* preload every slide so a transition never shows a blank frame */
  useEffect(() => {
    heroProducts.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  /* pointer + touch swipe */
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

  /* Pause on keyboard focus only — a mouse click also focuses the button, and
     latching pause on that would stop autoplay once the pointer left. */
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

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={onFocus}
      onBlurCapture={() => setPaused(false)}
    >
      {/* soft lighting behind the product */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-16 bottom-0 opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(58% 52% at 52% 42%, rgba(200,16,46,.14), transparent 72%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[680px]">
        {/* ------------------------------ stage ------------------------------ */}
        <div
          className="relative h-[min(36vh,285px)] w-full touch-pan-y select-none overflow-hidden border border-steel-200 bg-white shadow-[0_40px_90px_-35px_rgba(11,23,36,.22)] sm:h-[min(46vh,380px)] md:h-[min(52vh,460px)] lg:h-[min(56vh,540px)]"
          style={{ minHeight: 220 }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            drag.current = null;
          }}
          onKeyDown={onKeyDown}
          role="group"
          aria-roledescription="carousel"
          aria-label="Product showcase"
          tabIndex={0}
        >
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={product.id}
              custom={dir}
              variants={slide}
              initial={reduced ? false : 'enter'}
              animate="center"
              exit={reduced ? { opacity: 0 } : 'exit'}
              transition={{
                duration: reduced ? 0 : TRANSITION_S,
                ease: EASE,
                opacity: { duration: reduced ? 0 : TRANSITION_S * 0.75, ease: 'easeInOut' },
              }}
              className="absolute inset-0 bg-gradient-to-b from-white via-white to-steel-100"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50" />

              {failed[product.id] ? (
                <div className="absolute inset-0 grid place-items-center px-8 text-center">
                  <span className="font-display text-[20px] font-semibold text-navy-900">{product.name}</span>
                </div>
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  width="1200"
                  height="1000"
                  decoding="async"
                  draggable="false"
                  onError={() => setFailed((f) => ({ ...f, [product.id]: true }))}
                  className="absolute inset-0 h-full w-full object-contain p-3 sm:p-4"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* previous / next */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous product"
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-steel-200 bg-white/90 text-navy-800 backdrop-blur transition-colors hover:border-signal-600 hover:text-signal-600 md:h-11 md:w-11"
          >
            <Icon name="chevronRight" className="h-4 w-4 rotate-180" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next product"
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-steel-200 bg-white/90 text-navy-800 backdrop-blur transition-colors hover:border-signal-600 hover:text-signal-600 md:h-11 md:w-11"
          >
            <Icon name="chevronRight" className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        {/* --------------------------- name + counter ------------------------- */}
        <div className="relative mt-5 flex items-start justify-between gap-6">
          <div className="min-h-[42px] min-w-0 flex-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={product.id}
                variants={caption}
                initial={reduced ? false : 'enter'}
                animate="center"
                exit={reduced ? { opacity: 0 } : 'exit'}
                transition={{ duration: reduced ? 0 : 0.34, ease: 'easeOut' }}
              >
                <p className="truncate font-display text-[19px] font-semibold uppercase tracking-[0.06em] text-navy-900 md:text-[22px]">
                  {product.name}
                </p>
                <p className="mt-1 truncate text-[13px] leading-snug text-steel-500">{product.blurb}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="shrink-0 pt-1 font-display text-[15px] font-semibold tabular-nums text-navy-900 md:text-[17px]">
            {String(active + 1).padStart(2, '0')}
            <span className="text-steel-500"> / {String(total).padStart(2, '0')}</span>
          </p>
        </div>

        {/* ---------------------------- indicators --------------------------- */}
        <div className="relative mt-3 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            {heroProducts.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => go(i, i > active ? 1 : -1)}
                aria-label={`Show ${p.name}`}
                aria-current={i === active}
                className="group py-2"
              >
                <span
                  className={`block h-[3px] transition-all duration-500 ${
                    i === active ? 'w-10 bg-signal-600' : 'w-4 bg-steel-300 group-hover:bg-steel-400'
                  }`}
                />
              </button>
            ))}
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-steel-500 transition-colors hover:text-signal-600"
          >
            View all products
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>

        <p className="sr-only" aria-live="polite">
          {`Product ${active + 1} of ${total}: ${product.name}`}
        </p>
      </div>
    </div>
  );
}
