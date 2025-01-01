/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-dark': 'rgb(var(--forest-dark) / <alpha-value>)',
        'forest-light': 'rgb(var(--forest-light) / <alpha-value>)',
        'forest-accent': 'rgb(var(--forest-accent) / <alpha-value>)',
        'forest-accent-dark': 'rgb(var(--forest-accent-dark) / <alpha-value>)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}