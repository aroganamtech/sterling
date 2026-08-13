import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../Icon';
import LazyImage from './LazyImage';
import { EASE, modalBackdrop } from '../../lib/motion';

export default function ProductGallery({ images = [], name = '', model }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const count = images.length;

  const next = useCallback(() => setActive((i) => (i + 1) % Math.max(1, count)), [count]);
  const prev = useCallback(() => setActive((i) => (i - 1 + Math.max(1, count)) % Math.max(1, count)), [count]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setZoom(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => {
    document.body.style.overflow = zoom ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [zoom]);

  if (!count) {
    return <div className="aspect-[4/3] w-full border border-steel-200 bg-white" />;
  }

  const current = images[active];

  return (
    <div>
      {/* stage */}
      <div className="group relative border border-steel-200 bg-white">
        <div className="pointer-events-none absolute left-0 top-0 z-10 flex items-center gap-2 p-4">
          {model ? (
            <span className="rounded-full bg-signal-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              {model}
            </span>
          ) : null}
          <span className="border border-steel-200 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-steel-600">
            {current.label}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.995 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <LazyImage
              src={current.src}
              alt={current.alt || `${name} ${current.label}`}
              eager={active === 0}
              ratio="aspect-[4/3]"
              imgClassName="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* controls */}
        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-steel-200 bg-white/90 text-navy-950 opacity-0 backdrop-blur transition hover:border-signal-600 hover:text-signal-700 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <Icon name="chevronRight" className="h-4 w-4 rotate-180" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-steel-200 bg-white/90 text-navy-950 opacity-0 backdrop-blur transition hover:border-signal-600 hover:text-signal-700 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <Icon name="chevronRight" className="h-4 w-4" strokeWidth={2} />
            </button>
          </>
        ) : null}

        <button
          type="button"
          onClick={() => setZoom(true)}
          aria-label="Enlarge image"
          className="absolute bottom-3 right-3 z-10 flex h-11 w-11 items-center justify-center border border-steel-200 bg-white/90 text-steel-600 backdrop-blur transition hover:border-signal-600 hover:text-signal-700"
        >
          <Icon name="target" className="h-4 w-4" />
        </button>
      </div>

      {/* thumbnails */}
      {count > 1 ? (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${img.label}`}
              aria-current={i === active}
              className={`relative border transition-all ${
                i === active ? 'border-signal-600' : 'border-steel-200 hover:border-steel-300'
              }`}
            >
              <LazyImage
                src={img.src}
                alt=""
                ratio="aspect-[4/3]"
                imgClassName="h-full w-full object-cover"
              />
              <span
                className={`block px-2 py-2 text-center text-[9.5px] font-semibold uppercase tracking-[0.12em] ${
                  i === active ? 'text-signal-600' : 'text-steel-500'
                }`}
              >
                {img.label}
              </span>
            </button>
          ))}
        </div>
      ) : null}

      {/* lightbox */}
      <AnimatePresence>
        {zoom ? (
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={() => setZoom(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`${name} enlarged image`}
          >
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt || name}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="max-h-full max-w-full border border-steel-200"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setZoom(false)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-steel-200 text-navy-950 transition hover:border-signal-600 hover:text-signal-700"
            >
              <Icon name="close" className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
