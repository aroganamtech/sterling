import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Native lazy-loaded image with an async decode, a shimmering skeleton while it
 * resolves, and a fade-in once painted. Falls back to a labelled placeholder if
 * the asset is missing.
 */
export default function LazyImage({
  src,
  alt = '',
  className = '',
  imgClassName = 'h-full w-full object-contain',
  eager = false,
  ratio = 'aspect-[4/3]',
  caption,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-steel-50 ${ratio} ${className}`}>
      {!loaded && !failed ? (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-steel-100 via-steel-50 to-steel-100" />
      ) : null}

      {failed ? (
        <div className="absolute inset-0 grid place-items-center text-[11px] uppercase tracking-widest2 text-steel-400">
          Image unavailable
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={eager ? 'high' : 'low'}
          draggable="false"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={imgClassName}
        />
      )}

      {caption ? (
        <span className="pointer-events-none absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-widest2 text-steel-500">
          {caption}
        </span>
      ) : null}
    </div>
  );
}
