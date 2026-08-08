import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
const VisionMission = lazy(() => import('./pages/about/VisionMission'));
const Leadership = lazy(() => import('./pages/about/Leadership'));
const GlobalPresence = lazy(() => import('./pages/about/GlobalPresence'));
const SolutionsIndex = lazy(() => import('./pages/solutions/SolutionsIndex'));
const SolutionDetail = lazy(() => import('./pages/solutions/SolutionDetail'));
const ProductsIndex = lazy(() => import('./pages/products/ProductsIndex'));
const ProductDetail = lazy(() => import('./pages/products/ProductDetail'));
const EngineeringIndex = lazy(() => import('./pages/engineering/EngineeringIndex'));
const EngineeringDetail = lazy(() => import('./pages/engineering/EngineeringDetail'));
const IndustriesIndex = lazy(() => import('./pages/industries/IndustriesIndex'));
const IndustryDetail = lazy(() => import('./pages/industries/IndustryDetail'));
const ProjectsIndex = lazy(() => import('./pages/projects/ProjectsIndex'));
const ProjectDetail = lazy(() => import('./pages/projects/ProjectDetail'));
const ResourcesIndex = lazy(() => import('./pages/resources/ResourcesIndex'));
const Standards = lazy(() => import('./pages/resources/Standards'));
const TechnicalLibrary = lazy(() => import('./pages/resources/TechnicalLibrary'));
const Downloads = lazy(() => import('./pages/resources/Downloads'));
const Faq = lazy(() => import('./pages/resources/Faq'));
const News = lazy(() => import('./pages/resources/News'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    // new page, new layout — let ScrollTrigger recompute its start/end points
    const id = setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => clearTimeout(id);
  }, [pathname, hash]);
  return null;
}

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-navy-950">
      <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 text-navy-400">
        <span className="h-2 w-2 animate-ping rounded-full bg-signal-500" />
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
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/global-presence" element={<GlobalPresence />} />

            <Route path="/solutions" element={<SolutionsIndex />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />

            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:slug" element={<ProductDetail />} />

            <Route path="/engineering" element={<EngineeringIndex />} />
            <Route path="/engineering/:slug" element={<EngineeringDetail />} />

            <Route path="/industries" element={<IndustriesIndex />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />

            <Route path="/projects" element={<ProjectsIndex />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />

            <Route path="/resources" element={<ResourcesIndex />} />
            <Route path="/resources/standards" element={<Standards />} />
            <Route path="/resources/library" element={<TechnicalLibrary />} />
            <Route path="/resources/downloads" element={<Downloads />} />
            <Route path="/resources/faq" element={<Faq />} />
            <Route path="/resources/news" element={<News />} />

            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
