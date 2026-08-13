import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-40" />
      <div className="shell relative py-24">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-none text-navy-900">
          This page has cleared the building
        </h1>
        <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-steel-600">
          The page you were looking for is not here. Try the solutions index, or tell us what you were trying to find
          and we will point you to it.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">
            Back to home
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link to="/solutions" className="btn-ghost">
            Explore solutions
          </Link>
          <Link to="/contact" className="btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
