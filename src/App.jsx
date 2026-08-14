import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { startViewportSignals } from './lib/viewportSignals';

gsap.registerPlugin(ScrollTrigger);

/* Route-level code splitting. The home page ships in the initial bundle;
   everything else — including the animation-heavy Products module — loads on
   demand, which keeps first paint fast. */
const About = lazy(() => import('./pages/about/About'));
const SolutionsIndex = lazy(() => import('./pages/solutions/SolutionsIndex'));
const ProductsIndex = lazy(() => import('./pages/products/ProductsIndex'));
const ProductDetail = lazy(() => import('./pages/products/ProductDetail'));
const ServicesIndex = lazy(() => import('./pages/services/ServicesIndex'));
const ResourcesIndex = lazy(() => import('./pages/resources/ResourcesIndex'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/* Solutions and Services sub-pages now live as sections on their respective
   single index pages (#slug) rather than as separate /solutions/:slug and
   /services/:slug routes — these previous URLs, and anything already linking
   to them (header mega-menu, footer, AI assistant), still resolve via a
   same-page redirect built from the existing :slug param. */
function SolutionRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/solutions#${slug}`} replace />;
}
function ServiceRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/services#${slug}`} replace />;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // The target page can still be a lazy chunk in flight (e.g. the old
      // /about/vision, /about/leadership and /about/global-coverage URLs now
      // redirect to /about#<section> — About.jsx may not have finished
      // loading yet when this effect first runs). Retry briefly instead of
      // giving up on the first miss; once the element is found this behaves
      // exactly as before, including on the very first check.
      let cancelled = false;
      let attempts = 0;
      const tryScroll = () => {
        if (cancelled) return;
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 40) {
          attempts += 1;
          setTimeout(tryScroll, 50);
        }
      };
      tryScroll();
      return () => {
        cancelled = true;
      };
    }
    // `'instant' in window` never matched (window has no such property), so this
    // always fell through to 'auto' — which inherits the site-wide CSS
    // `scroll-behavior: smooth`, turning every route-change reset into an
    // animated scroll. That animation gets interrupted by the incoming page's
    // layout settling in, so it sometimes stalls partway down instead of
    // reaching the top. 'instant' is a real ScrollBehavior value and bypasses
    // the CSS smooth behavior, giving an immediate, uninterruptible jump.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // new page, new layout — let ScrollTrigger recompute its start/end points
    const id = setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => clearTimeout(id);
  }, [pathname, hash]);
  return null;
}

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white">
      <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-steel-500">
        <span className="h-2 w-2 animate-ping rounded-full bg-signal-600" />
        Loading
      </span>
    </div>
  );
}

export default function App() {
  useEffect(() => startViewportSignals(), []);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            {/* Vision, Leadership and Global Coverage now live as sections on the single
                About page (#vision-mission / #leadership / #global-coverage) rather than
                as separate routes — these previous URLs, and anything already linking to
                them (header menu, footer, AI assistant), still resolve via redirect. */}
            <Route path="/about/vision" element={<Navigate to="/about#vision-mission" replace />} />
            <Route path="/about/leadership" element={<Navigate to="/about#leadership" replace />} />
            <Route path="/about/global-coverage" element={<Navigate to="/about#global-coverage" replace />} />
            <Route path="/about/vision-mission" element={<Navigate to="/about#vision-mission" replace />} />
            <Route path="/about/global-presence" element={<Navigate to="/about#global-coverage" replace />} />

            <Route path="/solutions" element={<SolutionsIndex />} />
            <Route path="/solutions/:slug" element={<SolutionRedirect />} />

            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:slug" element={<ProductDetail />} />

            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceRedirect />} />

            <Route path="/resources" element={<ResourcesIndex />} />
            {/* Standards, Technical Library, Downloads and FAQ now live as sections on
                the single Resources page (#standards / #library / #downloads / #faq). */}
            <Route path="/resources/standards" element={<Navigate to="/resources#standards" replace />} />
            <Route path="/resources/library" element={<Navigate to="/resources#library" replace />} />
            <Route path="/resources/downloads" element={<Navigate to="/resources#downloads" replace />} />
            <Route path="/resources/faq" element={<Navigate to="/resources#faq" replace />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
