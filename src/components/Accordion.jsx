import { useState } from 'react';
import Icon from './Icon';

export default function Accordion({ items, defaultOpen = null }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="divide-y divide-steel-200 border-y border-steel-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span
                className={`font-display text-[18px] font-semibold leading-snug transition-colors md:text-[20px] ${
                  isOpen ? 'text-signal-700' : 'text-navy-900'
                }`}
              >
                {item.q}
              </span>
              <span
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border transition-all ${
                  isOpen ? 'rotate-45 border-signal-600 text-signal-600' : 'border-steel-300 text-steel-500'
                }`}
              >
                <Icon name="close" className="h-3.5 w-3.5 rotate-45" strokeWidth={1.8} />
              </span>
            </button>
            <div
              className="grid transition-all duration-400 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 text-[15px] leading-relaxed text-steel-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
