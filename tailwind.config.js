module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './packages/*/**/*.{js,jsx,ts,tsx}',
    './storybook/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('./packages/ui-core')],
}
