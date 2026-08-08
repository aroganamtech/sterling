import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SmokeCanvas from '../components/SmokeCanvas';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-navy-950">
      <SmokeCanvas className="absolute inset-0 h-full w-full opacity-70" density={0.8} speed={0.85} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/30" />
      <div className="shell relative py-24">
        <span className="eyebrow-light">Error 404</span>
        <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5rem)] font-semibold uppercase leading-none text-white">
          This page has cleared the building
        </h1>
        <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-navy-200">
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
