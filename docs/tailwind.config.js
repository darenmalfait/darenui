const path = require('path')

const defaultTheme = require('tailwindcss/defaultTheme')

const fromRoot = p => path.join(__dirname, p)

module.exports = {
  content: [
    '!**/node_modules/**',
    fromRoot('../node_modules/@daren/**/*.{js,ts,jsx,tsx}'), // path to daren
    fromRoot('./node_modules/@daren/**/*.{js,ts,jsx,tsx}'), // path to daren
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './mdx/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: [
          'var(--font-inter)',
          'Inter var',
          ...defaultTheme.fontFamily.sans,
        ],
        sans: [
          'var(--font-inter)',
          'Inter var',
          ...defaultTheme.fontFamily.sans,
        ],
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
