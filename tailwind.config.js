/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f2f5fa',
          100: '#e2e9f4',
          200: '#c3d0e6',
          300: '#93a9cd',
          400: '#5d7cae',
          500: '#3a5b91',
          600: '#294677',
          700: '#1f3560',
          800: '#17274a',
          900: '#111d38',
          950: '#0a1327',
        },
        signal: {
          50: '#fef2f3',
          100: '#fde3e5',
          200: '#fbccd1',
          300: '#f7a4ae',
          400: '#f07084',
          500: '#e2405d',
          600: '#c8102e',
          700: '#a80d27',
          800: '#8b0f25',
          900: '#761124',
        },
        /* Products module — orange / black / white engineering theme */
        ember: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff6a13',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e9eaec',
          200: '#cfd1d5',
          300: '#a6a9b0',
          400: '#74787f',
          500: '#565a61',
          600: '#3d4046',
          700: '#2a2d33',
          800: '#1a1c20',
          900: '#121317',
          950: '#0b0c0e',
        },
        steel: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d6dae3',
          300: '#b3bbcb',
          400: '#8a96ad',
          500: '#6b7893',
          600: '#556079',
          700: '#464e62',
          800: '#3c4353',
          900: '#353a47',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.24em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,29,56,.06), 0 12px 32px -12px rgba(16,29,56,.18)',
        lift: '0 2px 4px rgba(16,29,56,.08), 0 28px 56px -20px rgba(16,29,56,.32)',
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
