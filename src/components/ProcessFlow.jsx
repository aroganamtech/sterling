import { useInView } from './Reveal';
import { processSteps } from '../data/engineering';

export default function ProcessFlow() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className="relative">
      {/* vertical rail (mobile / tablet) */}
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/12 lg:hidden" />
      <div
        className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-signal-500 to-signal-700 transition-all duration-[2400ms] ease-out lg:hidden"
        style={{ height: inView ? 'calc(100% - 16px)' : 0 }}
      />

      <ol className="relative grid gap-7 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-14">
        {processSteps.map((s, i) => (
          <li
            key={s.step}
            className="relative flex gap-5 lg:block"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity .6s ease ${i * 100}ms, transform .6s cubic-bezier(.22,1,.36,1) ${i * 100}ms`,
            }}
          >
            {/* horizontal rail segment (desktop) */}
            <span className="pointer-events-none absolute left-0 right-[-20px] top-[19px] hidden h-px bg-white/12 lg:block" />
            <span
              className="pointer-events-none absolute left-0 right-[-20px] top-[19px] hidden h-px origin-left bg-signal-600 transition-transform duration-700 ease-out lg:block"
              style={{
                transform: inView ? 'scaleX(1)' : 'scaleX(0)',
                transitionDelay: `${i * 130}ms`,
              }}
            />

            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 bg-navy-950 font-display text-[15px] font-semibold text-signal-400">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="lg:mt-6 lg:pr-4">
              <p className="font-display text-[17px] font-semibold tracking-wide text-white">{s.step}</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-navy-300">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
