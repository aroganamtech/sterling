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
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
        defaults: { ease: 'expo.out', duration: 1.05 },
        delay: delay / 1000,
      });

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
    }, el);

    return () => ctx.revert();
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
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'expo.out',
          stagger,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [stagger, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
