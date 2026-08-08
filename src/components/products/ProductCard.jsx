import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../Icon';
import LazyImage from './LazyImage';
import { coverFor } from '../../lib/productImages';
import { EASE } from '../../lib/motion';

export default function ProductCard({ product, index = 0, compact = false }) {
  const cover = coverFor(product.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE, delay: (index % 4) * 0.07 }}
    >
      <Link
        to={`/products/${product.slug}`}
        className="group flex h-full flex-col border border-steel-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div className="relative overflow-hidden border-b border-steel-200 bg-steel-50">
          <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50" />
          <LazyImage
            src={cover}
            alt={`${product.name} technical illustration`}
            ratio={compact ? 'aspect-[16/9]' : 'aspect-[4/3]'}
            imgClassName="relative h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 bg-signal-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
            {product.model}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-[19px] font-semibold uppercase leading-tight text-navy-900 transition-colors group-hover:text-signal-700">
            {product.name}
          </h3>
          <p className="mt-2 text-[12.5px] uppercase tracking-[0.1em] text-signal-600">{product.tagline}</p>
          {!compact ? (
            <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-steel-500">{product.short}</p>
          ) : (
            <div className="flex-1" />
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {product.certifications.slice(0, 2).map((c) => (
              <span
                key={c.code}
                className="border border-steel-200 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-steel-500"
              >
                {c.code}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.13em] text-navy-800 group-hover:text-signal-600">
            View product
            <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
