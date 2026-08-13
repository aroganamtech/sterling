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
      className="group flex h-full cursor-pointer flex-col bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="flex h-12 w-12 items-center justify-center border border-steel-200 text-signal-600 transition-all group-hover:border-signal-600 group-hover:bg-signal-600 group-hover:text-white">
        <Icon name={category.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-6 font-display text-[19px] font-semibold leading-tight text-navy-900">
        {category.name}
      </h3>
      <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-steel-500">{category.blurb}</p>
      <span className="mt-6 inline-flex cursor-pointer items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.13em] text-signal-600">
        {items.length} products
        <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
