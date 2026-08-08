import { Link } from 'react-router-dom';
import Icon from './Icon';

/**
 * Product category card used on the Home page "equipment behind the
 * systems" band. The entire card — image/icon, heading, blurb and the
 * "N products" line — is a single <Link>, so clicking anywhere on it
 * (including the "N products" button) navigates to that category's
 * section on the Products page. `cursor-pointer` is set explicitly in
 * case this is reused somewhere the browser default isn't a pointer.
 */
export default function ProductCategoryCard({ category, items = [] }) {
  return (
    <Link
      to={`/products#${category.id}`}
      className="group flex h-full cursor-pointer flex-col bg-navy-950 p-7 transition-colors hover:bg-navy-900"
    >
      <span className="flex h-12 w-12 items-center justify-center border border-white/15 text-signal-400 transition-all group-hover:border-signal-500 group-hover:bg-signal-600 group-hover:text-white">
        <Icon name={category.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-6 font-display text-[19px] font-semibold leading-tight text-white">
        {category.name}
      </h3>
      <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-navy-300">{category.blurb}</p>
      <span className="mt-6 inline-flex cursor-pointer items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.13em] text-signal-400">
        {items.length} products
        <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
