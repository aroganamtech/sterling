/** @type {import('tailwindcss').Config} */

/* ===========================================================================
   STERLING DESIGN SYSTEM  —  Black + Fire Red + White + Grey

     Primary Black      #050505   dark surfaces, hero, technical sections
     Navigation Black   #000000   header, footer base
     Fire Red           #C8102E   CTAs, accents, active states, section labels
     Red Hover          #E0002A   hover / active interaction only
     White              #FFFFFF   main content areas
     Light Grey         #F2F2F2   secondary / alternating sections
     Border Grey        #D9D9D9   dividers and hairlines
     Primary Text       #222222
     Secondary Text     #666666

   SINGLE SOURCE OF TRUTH
   Every value below is read from a CSS custom property declared in
   src/index.css under "STERLING COLOUR SYSTEM". Change the channel triplet
   there and the whole site — Tailwind classes included — follows. Nothing in
   this file hardcodes a colour.

   Token names are inherited from the previous system so existing markup keeps
   working; only the values behind them changed:
     navy / ink  -> carbon (black surfaces + dark text)
     signal      -> fire red (primary brand accent)
     ember       -> fire red (products module accent)
     steel       -> neutral grey (body text, borders, light sections)
     accent      -> fire red
   =========================================================================== */

const c = (name) => `rgb(var(--sv-${name}) / <alpha-value>)`;

/* carbon — black surfaces at the dark end, readable text at the mid/dark end */
const carbon = {
  50: c('carbon-50'),
  100: c('carbon-100'),
  200: c('carbon-200'),
  300: c('carbon-300'),
  400: c('carbon-400'),
  500: c('carbon-500'),
  600: c('carbon-600'),
  700: c('carbon-700'),
  800: c('carbon-800'),
  900: c('carbon-900'),
  950: c('carbon-950'),
  1000: c('carbon-1000'),
};

/* fire red — the single Sterling accent */
const fire = {
  50: c('red-50'),
  100: c('red-100'),
  200: c('red-200'),
  300: c('red-300'),
  400: c('red-400'), // lightened brand red — AA-safe for small text on black
  500: c('red-500'), // #E0002A hover / highlight
  600: c('red-600'), // #C8102E primary
  700: c('red-700'),
  800: c('red-800'),
  900: c('red-900'),
};

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* dark surfaces, headings and navigation */
        navy: carbon,

        /* product-module surfaces — same carbon ramp */
        ink: carbon,

        /* primary brand accent */
        signal: fire,

        /* products module accent — same fire red */
        ember: fire,

        /* small accent rules and highlights */
        accent: fire,

        /* neutral grey — paragraphs, borders, light sections */
        steel: {
          50: c('grey-50'),
          100: c('grey-100'),
          200: c('grey-200'),
          300: c('grey-300'),
          400: c('grey-400'),
          500: c('grey-500'),
          600: c('grey-600'),
          700: c('grey-700'),
          800: c('grey-800'),
          900: c('grey-900'),
        },
      },

      /* Tailwind's preflight default is gray-200 — pin it to Sterling border grey
         so a bare `border` class can never introduce an off-palette colour. */
      borderColor: {
        DEFAULT: c('grey-200'),
      },

      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },

      letterSpacing: {
        widest2: '0.18em',
      },

      borderRadius: {
        card: '20px',
        'card-lg': '24px',
        btn: '10px',
      },

      maxWidth: {
        shell: '1360px',
      },

      boxShadow: {
        /* neutral black shadows — no colour cast */
        card: '0 1px 2px rgba(5,5,5,.05), 0 10px 30px -14px rgba(5,5,5,.18)',
        lift: '0 2px 6px rgba(5,5,5,.07), 0 30px 60px -24px rgba(5,5,5,.26)',
        float: '0 2px 8px rgba(5,5,5,.06), 0 20px 48px -22px rgba(5,5,5,.24)',
      },

      keyframes: {
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(.85)', opacity: '.6' },
          '100%': { transform: 'scale(2.1)', opacity: '0' },
        },
      },

      animation: {
        floatUp: 'floatUp .7s cubic-bezier(.22,1,.36,1) both',
        drift: 'drift 7s ease-in-out infinite',
        sweep: 'sweep 2.8s ease-in-out infinite',
        pulseRing: 'pulseRing 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
};
