import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REDUCED =
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Kept for components that need a boolean (counters, canvases, diagrams).
 * Unchanged API — still IntersectionObserver, still cheap.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12, ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options.rootMargin, options.threshold]); // eslint-disable-line react-hooks/exhaustive-deps

  return [ref, inView];
}

/**
 * Why these animations are built "paused animation + standalone trigger"
 * instead of passing `scrollTrigger:` straight into the timeline/tween vars:
 *
 * When ScrollTrigger is attached to an animation via vars, its constructor
 * does this (ScrollTrigger.js, end of the init block):
 *
 *     if (animation && animation.add && !change) {   // i.e. it's a TIMELINE
 *       gsap.delayedCall(0.01, self.update);
 *       change = 0.01;
 *       start = end = 0;                             // <- end is 0 for ~10ms
 *     } else {
 *       self.refresh();                              // tweens refresh now
 *     }
 *
 * So a timeline-attached trigger sits in GSAP's internal `_triggers` array
 * with `end === 0` for about 10ms. Any trigger created during that window
 * runs refresh(), which walks `_triggers` backwards and hits line 1412:
 *
 *     curTrigger = _triggers[i];
 *     curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
 *
 * Falsy `end` means it recursively force-refreshes each pending trigger, and
 * that reentrant cascade is where `_triggers` gets mutated underneath the
 * walk — `_triggers[i]` comes back undefined and reading `.end` off it throws
 * "Cannot read properties of undefined (reading 'end')".
 *
 * A standalone ScrollTrigger.create() has no `animation`, so it takes the
 * `else` branch and refreshes synchronously. Nothing this file creates ever
 * sits in `_triggers` with a falsy `end`, so the recursive branch on 1412 is
 * never entered and the crash is unreachable. The animation is built paused
 * and played from the trigger's callback instead, which looks identical.
 *
 * `once: true` is also avoided: it makes a trigger kill() itself on
 * completion, splicing it out of `_triggers` — the other way that array
 * shrinks mid-walk. A play-once guard flag gives the same behaviour without
 * ever mutating the array.
 */
const START = 0.88; // matches start: 'top 88%'

function playOnceOnEnter(el, animation) {
  let played = false;
  const play = () => {
    if (played) return;
    played = true;
    animation.play();
  };

  // Geometric fallback. On a client-side route change the page mounts while
  // the window is still scrolled to the previous route's position, then
  // ScrollToTop resets to 0 and App.jsx refreshes 120ms later. A trigger
  // created during that window can be measured against stale layout and end
  // up neither active nor "entered", so no callback ever fires and the
  // content stays at opacity 0 — a blank page until something forces a
  // scroll. Reading the element's own box sidesteps all of that.
  const playIfOnScreen = () => {
    if (played || !el.isConnected) return;
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight * START) play();
  };

  let st;
  try {
    st = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      onEnter: play,
      onEnterBack: play,
      // Fires on every ScrollTrigger.refresh(), including the one App.jsx runs
      // after each route change, once start/end have been recomputed properly.
      onRefresh: (self) => {
        if (self.progress > 0 || self.isActive) play();
        else playIfOnScreen();
      },
    });
  } catch (err) {
    // Anything thrown out of GSAP's internals here would propagate through
    // React's render and unmount the whole tree — a blank white page, because
    // every section on the page is wrapped in one of these. Content is worth
    // more than the animation: show it, un-animated, and move on.
    if (import.meta.env && import.meta.env.DEV) console.warn('[Reveal] ScrollTrigger failed, showing content unanimated:', err);
    play();
    return { kill: () => {} };
  }

  // Mounted already scrolled past the start point (route change, back/forward
  // navigation, refresh mid-page): no enter event will ever fire, so settle it.
  if (st.progress > 0 || st.isActive) play();

  // One more pass after layout settles, for anything the trigger missed.
  const raf = requestAnimationFrame(playIfOnScreen);
  const timer = setTimeout(playIfOnScreen, 200);

  return {
    kill: () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      st.kill();
    },
  };
}

/**
 * Section transition.
 *
 * Same props as before, so every page picks up the upgrade without edits —
 * but now driven by GSAP ScrollTrigger: fade + upward motion on a long
 * expo-style ease, and children marked `data-stagger` cascade automatically.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  y = 26,
  stagger = 0.075,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (REDUCED) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const targets = el.querySelectorAll('[data-stagger]');
    let st;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'expo.out', duration: 1.05 },
      });

      // `delay` used to be a timeline vars option; on a paused timeline that
      // offset is consumed before play() is ever called, so express it as a
      // real gap at the head of the timeline instead.
      if (delay) tl.to({}, { duration: delay / 1000 });

      tl.fromTo(
        el,
        { opacity: 0, y, willChange: 'transform, opacity' },
        { opacity: 1, y: 0, clearProps: 'willChange' }
      );

      if (targets.length) {
        tl.fromTo(
          targets,
          { opacity: 0, y: y * 0.7 },
          { opacity: 1, y: 0, stagger, duration: 0.85 },
          '-=0.78'
        );
      }

      st = playOnceOnEnter(el, tl);
    }, el);

    return () => {
      st && st.kill();
      ctx.revert();
    };
  }, [delay, y, stagger]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: REDUCED ? 1 : 0 }}>
      {children}
    </Tag>
  );
}

/**
 * Drop-in for lists: every direct child animates in sequence.
 * Used where a grid should cascade rather than arrive as one block.
 */
export function RevealGroup({ children, className = '', stagger = 0.08, y = 24, as: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || REDUCED) return;

    // Callers legitimately pass empty arrays (`features = []`,
    // `applications = []`, ...). gsap.fromTo() with no targets still builds a
    // tween and still attaches a trigger, for an animation with nothing to
    // animate — pure churn in `_triggers`. Skip it.
    const items = Array.from(el.children);
    if (!items.length) return;

    let st;
    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'expo.out',
          stagger,
          paused: true,
        }
      );

      st = playOnceOnEnter(el, tween);
    }, el);

    return () => {
      st && st.kill();
      ctx.revert();
    };
  }, [stagger, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
