import Reveal from './Reveal';

export function SectionHead({ eyebrow, title, lede, align = 'left', light = false, className = '' }) {
  const alignCls = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';
  return (
    <Reveal className={`${alignCls} ${className}`}>
      {eyebrow ? (
        <span className={light ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</span>
      ) : null}
      <h2 className={`h2 mt-5 ${light ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
      {lede ? (
        <p className={`lede mt-5 ${light ? 'text-navy-200' : ''} ${align === 'center' ? 'mx-auto' : ''}`}>{lede}</p>
      ) : null}
    </Reveal>
  );
}

export default function Section({
  children,
  className = '',
  tone = 'light',
  id,
  padded = true,
}) {
  const tones = {
    light: 'bg-white',
    tint: 'bg-navy-50',
    steel: 'bg-steel-50',
    dark: 'bg-navy-950 text-white',
    navy: 'bg-navy-900 text-white',
  };
  return (
    <section id={id} className={`relative ${tones[tone] || tones.light} ${padded ? 'py-20 md:py-28' : ''} ${className}`}>
      {children}
    </section>
  );
}
