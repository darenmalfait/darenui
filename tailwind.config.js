module.exports = {
  mode: 'jit',
  content: ['./packages/*/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('./packages/ui-core')],
}
