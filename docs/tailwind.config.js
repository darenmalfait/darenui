const path = require('path')

const defaultTheme = require('tailwindcss/defaultTheme')

const fromRoot = p => path.join(__dirname, p)

module.exports = {
  content: [
    '!**/node_modules/**',
    fromRoot('../node_modules/@daren/**/*.{js,ts,jsx,tsx}'), // path to daren
    fromRoot('./node_modules/@daren/**/*.{js,ts,jsx,tsx}'), // path to daren
    fromRoot('./app/**/*.{js,jsx,ts,tsx,mdx}'),
  ],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ['Inter', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  typography: theme => ({
    DEFAULT: {
      css: {
        h1: {
          ...theme('fontSize.2xl')[1],
          marginBottom: theme('spacing.2'),
        },
      },
    },
  }),
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@daren/ui-core'),
  ],
}
