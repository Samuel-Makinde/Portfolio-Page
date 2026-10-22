/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        canvas: '#f3f0e8',
        ink: '#12151a',
        muted: '#5c6570',
        line: '#d9d4c8',
        navy: '#172033',
        'navy-soft': '#1f2a40',
        accent: '#2c5bff',
        'accent-soft': '#e8eeff',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(18, 21, 26, 0.04), 0 12px 32px rgba(18, 21, 26, 0.06)',
      },
    },
  },
  plugins: [],
};
