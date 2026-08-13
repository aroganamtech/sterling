import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../Icon';
import LazyImage from './LazyImage';
import { coverFor } from '../../lib/productImages';
import { EASE } from '../../lib/motion';

/**
 * Expandable product list, one panel per category.
 * `defaultOpen` accepts a category id; pass null for all-collapsed.
 */
export default function CategoryAccordion({ categories = [], defaultOpen, multiple = true }) {
  const [open, setOpen] = useState(() => new Set(defaultOpen ? [defaultOpen] : []));

  const toggle = (id) =>
    setOpen((prev) => {
      const next = multiple ? new Set(prev) : new Set();
      if (prev.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="divide-y divide-steel-200 border-y border-steel-200">
      {categories.map((cat, ci) => {
        const isOpen = open.has(cat.id);
        return (
          <div key={cat.id}>
            <button
              type="button"
              onClick={() => toggle(cat.id)}
              aria-expanded={isOpen}
              aria-controls={`panel-${cat.id}`}
              className="group flex w-full items-center gap-5 py-7 text-left md:gap-8"
            >
              <span className="font-display text-[13px] font-semibold text-signal-600">
                {String(ci + 1).padStart(2, '0')}
              </span>

              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center border transition-colors ${
                  isOpen ? 'border-signal-500 bg-signal-600 text-white' : 'border-steel-200 text-navy-700 group-hover:border-navy-300'
                }`}
              >
                <Icon name={cat.icon} className="h-5 w-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-display text-[22px] font-semibold leading-tight text-navy-900 transition-colors group-hover:text-signal-700 md:text-[26px]">
                  {cat.name}
                </span>
                <span className="mt-1 block text-[13.5px] text-steel-500">{cat.blurb}</span>
              </span>

              <span className="hidden shrink-0 border border-steel-200 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-steel-500 sm:block">
                {cat.items.length} products
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors ${
                  isOpen ? 'border-signal-500 text-signal-600' : 'border-steel-200 text-steel-400'
                }`}
              >
                <Icon name="close" className="h-3.5 w-3.5 rotate-45" strokeWidth={1.8} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`panel-${cat.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.42, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pb-8">
                  <ul className="grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.items.map((p, i) => (
                      <motion.li
                        key={p.slug}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: EASE, delay: 0.05 + i * 0.05 }}
                      >
                        <Link
                          to={`/products/${p.slug}`}
                          className="group/item flex h-full items-start gap-4 bg-white p-5 transition-colors hover:bg-steel-50"
                        >
                          <span className="relative w-24 shrink-0 overflow-hidden border border-steel-200">
                            <LazyImage
                              src={coverFor(p.slug)}
                              alt=""
                              ratio="aspect-[4/3]"
                              imgClassName="h-full w-full object-contain p-1.5 transition-transform duration-500 group-hover/item:scale-105"
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-signal-600">
                              {p.model}
                            </span>
                            <span className="mt-1 block font-display text-[16.5px] font-semibold leading-tight text-navy-900 group-hover/item:text-signal-700">
                              {p.name}
                            </span>
                            <span className="mt-1.5 block text-[12.5px] leading-snug text-steel-500">
                              {p.tagline}
                            </span>
                          </span>
                          <Icon
                            name="arrow"
                            className="mt-1 h-4 w-4 shrink-0 text-steel-300 transition-all group-hover/item:translate-x-1 group-hover/item:text-signal-600"
                          />
                        </Link>
                      </motion.li>
                    ))}
                    {Array.from({ length: (3 - (cat.items.length % 3)) % 3 }).map((_, i) => (
                      <li key={`filler-${i}`} className="hidden bg-white sm:block" aria-hidden="true" />
                    ))}
                  </ul>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
