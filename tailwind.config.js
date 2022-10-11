module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './packages/*/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('./packages/ui-core')],
}
