import { useState } from 'react';
import Icon from '../Icon';

export const BROCHURE_URL = '/brochures/sterling-ventilation-product-brochure.pdf';

/**
 * Download Brochure CTA.
 * Fetches the PDF as a blob so the browser saves it with a product-specific
 * filename, and falls back to opening it in a new tab if the fetch is blocked.
 */
export default function BrochureButton({ product, className = 'btn-ink', label = 'Download Brochure' }) {
  const [state, setState] = useState('idle'); // idle | loading | done | error

  const filename = product
    ? `Sterling-Ventilation-${product.model}-${product.name.replace(/\s+/g, '-')}-Brochure.pdf`
    : 'Sterling-Ventilation-Product-Brochure.pdf';

  const download = async () => {
    if (state === 'loading') return;
    setState('loading');
    try {
      const res = await fetch(BROCHURE_URL);
      if (!res.ok) throw new Error(String(res.status));
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
      setState('done');
      setTimeout(() => setState('idle'), 2600);
    } catch {
      window.open(BROCHURE_URL, '_blank', 'noopener');
      setState('idle');
    }
  };

  return (
    <button type="button" onClick={download} className={className} aria-live="polite">
      <Icon
        name={state === 'done' ? 'check' : 'download'}
        className={`h-4 w-4 ${state === 'loading' ? 'animate-bounce' : ''}`}
        strokeWidth={2}
      />
      {state === 'loading' ? 'Preparing…' : state === 'done' ? 'Downloaded' : label}
    </button>
  );
}
