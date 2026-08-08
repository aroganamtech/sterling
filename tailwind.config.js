/** @type {import('tailwindcss').Config} */

/* ===========================================================================
   STERLING DESIGN SYSTEM
   White + Charcoal + Sterling Blue — modern premium industrial engineering.

   Sterling Blue   #092BA6   primary brand, buttons, section labels
   Charcoal/Navy   #06162A   headings, navigation, dark CTAs
   White           #FFFFFF   main background
   Blue Grey       #EEF1F7   subtle sections, background shapes
   Grey            #7F838A   paragraphs, secondary information
   Red             #E52B32   small accent lines and highlights only

   Token names are retained from the previous system so existing markup keeps
   working; only the values behind them have been remapped.
     navy   -> charcoal / dark surfaces
     signal -> sterling blue (primary brand)
     steel  -> neutral grey (body text, borders)
     ember  -> sterling blue (former product accent)
     ink    -> charcoal neutral (product surfaces)
     accent -> red, sparing use only
   =========================================================================== */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* Charcoal / navy — headings, navigation, dark CTA surfaces */
        navy: {
          50: '#f5f7fb',
          100: '#eef1f7',
          200: '#dce2ed',
          300: '#b9c3d5',
          400: '#8593ac',
          500: '#5a6a85',
          600: '#3c4c67',
          700: '#27364e',
          800: '#142338',
          900: '#0b1e36',
          950: '#06162a',
        },

        /* Sterling blue — primary brand colour */
        signal: {
          50: '#eff3ff',
          100: '#dde5ff',
          200: '#bfceff',
          300: '#94adff',
          400: '#5c7ef7',
          500: '#2e52db',
          600: '#092ba6',
          700: '#0a2489',
          800: '#0c2170',
          900: '#0e1f5c',
        },

        /* Sterling blue (products module accent — formerly ember orange) */
        ember: {
          50: '#eff3ff',
          100: '#dde5ff',
          200: '#bfceff',
          300: '#94adff',
          400: '#2e52db',
          500: '#092ba6',
          600: '#0a2489',
          700: '#0c2170',
          800: '#0e1f5c',
          900: '#0f1c4a',
        },

        /* Charcoal neutral — product surfaces, light by default */
        ink: {
          50: '#f7f8fa',
          100: '#eef1f7',
          200: '#dde2eb',
          300: '#bcc3d0',
          400: '#8b94a5',
          500: '#626c7e',
          600: '#45505f',
          700: '#2c3646',
          800: '#142338',
          900: '#0b1e36',
          950: '#06162a',
        },

        /* Neutral grey — paragraphs, borders, secondary information */
        steel: {
          50: '#f7f8f9',
          100: '#eef1f7',
          200: '#dfe3ea',
          300: '#c4c9d1',
          400: '#9da2aa',
          500: '#7f838a',
          600: '#656970',
          700: '#4e5158',
          800: '#3a3d43',
          900: '#2a2c31',
        },

        /* Red — small accent lines and highlights only */
        accent: {
          50: '#fef3f3',
          100: '#fde4e5',
          200: '#fbcccd',
          300: '#f7a5a7',
          400: '#f06e72',
          500: '#e52b32',
          600: '#ce1f26',
          700: '#ab1a20',
          800: '#8d1a1f',
          900: '#761b20',
        },
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
        /* soft, diffuse — the theme leans on shadow rather than borders */
        card: '0 1px 2px rgba(6,22,42,.04), 0 10px 30px -14px rgba(6,22,42,.16)',
        lift: '0 2px 6px rgba(6,22,42,.06), 0 30px 60px -24px rgba(6,22,42,.24)',
        float: '0 2px 8px rgba(6,22,42,.05), 0 20px 48px -22px rgba(6,22,42,.22)',
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
