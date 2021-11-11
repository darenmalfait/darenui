module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './packages/*/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('./packages/ui-core')],
};
