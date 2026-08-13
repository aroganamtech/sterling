import ProductShowcase from './ProductShowcase';

/* ---------------------------------------------------------------------------
   Home hero — one full-viewport composition: copy on the left, the automatic
   product showcase on the right. Both sit inside this single section, so the
   visitor sees the heading, the paragraph, the CTAs and the live product
   without scrolling.

   Height is the viewport minus the sticky header (74px, 122px once the utility
   bar appears at lg), and the grid is vertically centred inside it. The
   showcase sizes itself from viewport height, so it always fits alongside the
   copy rather than pushing below the fold.

   Background is a light, premium engineering surface — white into very light
   grey, a faint technical grid and a soft red glow behind the product. No
   canvas, shaders, particles or smoke.
   --------------------------------------------------------------------------- */

export default function HeroSection({ children }) {
  return (
    <section className="relative isolate flex w-full items-center overflow-hidden bg-white min-h-[calc(100svh-74px)] lg:min-h-[calc(100svh-122px)]">
      {/* engineering grid */}
      <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60" aria-hidden="true" />

      {/* depth gradients — light grey wash behind the copy, soft red glow behind the product */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(62% 80% at 82% 42%, rgba(200,16,46,.07), transparent 66%), linear-gradient(100deg, rgba(247,248,250,1) 0%, rgba(247,248,250,.4) 38%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-steel-100 to-transparent"
        aria-hidden="true"
      />

      <div className="shell relative z-10 w-full">
        <div className="grid w-full items-center gap-6 py-8 sm:gap-10 sm:py-10 md:grid-cols-[44fr_56fr] md:gap-8 md:py-8 lg:grid-cols-[45fr_55fr] lg:gap-10 lg:py-10 xl:gap-14">
          <div className="min-w-0">{children}</div>
          <div className="min-w-0 lg:pl-2">
            <ProductShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
