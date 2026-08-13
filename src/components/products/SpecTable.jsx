import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../../lib/motion';

export default function SpecTable({ groups = [] }) {
  const [active, setActive] = useState(0);
  if (!groups.length) return null;
  const group = groups[active];

  return (
    <div className="border border-steel-200">
      {/* tabs */}
      <div className="flex flex-wrap border-b border-steel-200">
        {groups.map((g, i) => (
          <button
            key={g.group}
            type="button"
            onClick={() => setActive(i)}
            className={`relative px-6 py-4 text-[11.5px] font-semibold uppercase tracking-[0.13em] transition-colors ${
              i === active ? 'text-signal-600' : 'text-steel-500 hover:text-navy-950'
            }`}
          >
            {g.group}
            {i === active ? (
              <motion.span
                layoutId="spec-tab"
                className="absolute inset-x-0 bottom-0 h-[2px] bg-signal-600"
                transition={{ duration: 0.35, ease: EASE }}
              />
            ) : null}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.dl
          key={group.group}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="divide-y divide-steel-200"
        >
          {group.rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-8">
              <dt className="text-[13px] uppercase tracking-[0.08em] text-steel-500">{k}</dt>
              <dd className="text-[14.5px] font-medium text-white">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </AnimatePresence>
    </div>
  );
}
