const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const breakpoints = require('./src/breakpoints');

module.exports = plugin(
  ({ addBase, addUtilities }) => {
    addUtilities({
      '.focus-ring': {
        '@apply focus:outline-none focus-within:outline-none transition duration-300 disabled:ring-0 hover:ring-2 focus:ring-2 focus-within:ring-2 group-hover:ring-2 group-focus:ring-2 hover:ring-accent focus:ring-accent focus-within:ring-accent group-hover:ring-accent group-focus:ring-accent ring-accent ring-offset-4 ring-offset-white':
          {},
      },
      '.set-color-accent-danger': {
        '--color-accent': 'var(--color-danger)',
      },
      '.set-color-accent-success': {
        '--color-accent': 'var(--color-success)',
      },
    });

    addBase({
      html: {
        '@apply text-primary antialiased bg-primary font-sans': {},
      },
      body: {
        position: 'relative',
        minHeight: '100%',
      },
    });
  },
  {
    mode: 'jit',
    variants: {
      opacity: ['responsive', 'hover', 'focus', 'dark', 'group-hover'],
      boxShadow: ['responsive', 'hover', 'focus', 'dark'],
    },
    theme: {
      extend: {
        fontFamily: {
          title: [...defaultTheme.fontFamily.sans],
          sans: [...defaultTheme.fontFamily.sans],
          serif: [...defaultTheme.fontFamily.serif],
        },
        typography: theme => {
          const fontSize = size => {
            const result = theme(`fontSize.${size}`);
            return Array.isArray(result) ? result[0] : result;
          };

          const breakout = {
            marginLeft: 0,
            marginRight: 0,
            gridColumn: '2 / span 10',
          };

          return {
            DEFAULT: {
              css: {
                '> *': {
                  gridColumn: '1 / -1',

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    gridColumn: '3 / span 8',
                  },
                },
                p: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  fontSize: fontSize('lg'),
                },
                '> div': {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  fontSize: fontSize('lg'),
                },
                strong: {
                  fontWeight: theme('fontWeight.medium'),
                  fontSize: fontSize('lg'),
                },
                hr: {
                  marginTop: theme('spacing.8'),
                  marginBottom: theme('spacing.16'),
                },
                pre: {
                  color: 'var(--base05)',
                  backgroundColor: 'var(--base00)',
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                  marginLeft: `-${theme('spacing.10vw')}`,
                  marginRight: `-${theme('spacing.10vw')}`,
                  padding: theme('spacing.8'),
                  borderRadius: 0,

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    borderRadius: theme('borderRadius.lg'),
                    ...breakout,
                  },
                },
                ul: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                },
                ol: {
                  marginTop: 0,
                  marginBottom: theme('spacing.8'),
                },
                'h1, h2, h3, h4, h5, h6': {
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: theme('fontWeight.normal'),

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontWeight: theme('fontWeight.medium'),
                  },
                },
                // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
                'h1, h2': {
                  // https://github.com/tailwindlabs/tailwindcss-typography/issues/14#issuecomment-658261095
                  fontFamily: `${theme('fontFamily.title')}`,
                  fontSize: fontSize('2xl'),
                  marginTop: theme('spacing.20'),
                  marginBottom: theme('spacing.10'),

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('3xl'),
                  },
                },
                h3: {
                  fontSize: fontSize('xl'),
                  marginTop: theme('spacing.16'),
                  marginBottom: theme('spacing.10'),

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('2xl'),
                  },
                },
                'h4, h5, h6': {
                  fontSize: fontSize('lg'),

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    fontSize: fontSize('xl'),
                  },
                },
                img: {
                  // images are wrapped in <p>, which already has margin
                  marginTop: 0,
                  marginBottom: 0,
                  borderRadius: theme('borderRadius.lg'),
                },
              },
            },
          };
        },
        backgroundColor: {
          primary: {
            DEFAULT: 'var(--colors-background-500)',
            100: 'var(--colors-background-100)',
            400: 'var(--colors-background-400)',
            500: 'var(--colors-background-500)',
          },
        },
        textColor: {
          primary: {
            DEFAULT: 'var(--colors-text-500)',
            50: 'var(--colors-text-50)',
            100: 'var(--colors-text-100)',
            200: 'var(--colors-text-200)',
            300: 'var(--colors-text-300)',
            400: 'var(--colors-text-400)',
            500: 'var(--colors-text-500)',
          },
        },
        borderColor: {
          primary: {
            DEFAULT: 'var(--colors-text-500)',
            50: 'var(--colors-text-50)',
            100: 'var(--colors-text-100)',
            200: 'var(--colors-text-200)',
            300: 'var(--colors-text-300)',
            400: 'var(--colors-text-400)',
            500: 'var(--colors-text-500)',
          },
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          link: 'var(--colors-link)',
          danger: {
            DEFAULT: 'var(--colors-danger-500)',
            100: 'var(--colors-danger-100)',
            500: 'var(--colors-danger-500)',
            900: 'var(--colors-danger-900)',
          },
          success: {
            DEFAULT: 'var(--colors-success-500)',
            100: 'var(--colors-success-100)',
            500: 'var(--colors-success-500)',
            900: 'var(--colors-success-900)',
          },
        },
        spacing: {
          '5vw': '5vw', // pull featured sections and navbar in the margin
          '8vw': '8vw', // positions hero img inside the margin
          '10vw': '10vw', // page margin
        },
        zIndex: {
          '-1': '-10',
        },
        screens: {
          xsm: breakpoints.xsm,
          sm: breakpoints.sm,
          md: breakpoints.md,
          lg: breakpoints.lg,
          xl: breakpoints.xl,
          '2xl': breakpoints.xxl,
          wd: breakpoints.wd,
        },
        keyframes: {
          'fade-in-down': {
            '0%': {
              opacity: `0`,
              transform: `translateY(-10px)`,
            },
            '100%': {
              opacity: `1`,
              transform: `translateY(0)`,
            },
          },
          'fade-out-down': {
            from: {
              opacity: `1`,
              transform: `translateY(0px)`,
            },
            to: {
              opacity: `0`,
              transform: `translateY(10px)`,
            },
          },
          'fade-in-up': {
            '0%': {
              opacity: `0`,
              transform: `translateY(10px)`,
            },
            '100%': {
              opacity: `1`,
              transform: `translateY(0)`,
            },
          },
          'fade-out-up': {
            from: {
              opacity: `1`,
              transform: `translateY(0px)`,
            },
            to: {
              opacity: `0`,
              transform: `translateY(10px)`,
            },
          },
          shake: {
            '0%, 100%': {
              transform: `translateX(0)`,
            },
            '20%, 60%': {
              transform: `translateX(-10px)`,
            },
            '40%, 80%': {
              transform: `translateX(10px)`,
            },
          },
          stroke: {
            '100%': {
              'stroke-dashoffset': '0',
            },
          },
          scale: {
            '0%, 100%': {
              transform: 'none',
            },
            '50%': {
              transform: 'scale3d(1.1, 1.1, 1)',
            },
          },
        },
        animation: {
          'fade-in-down': `fade-in-down 0.2s forwards`,
          'fade-out-down': `fade-out-down 0.2s forwards`,
          'fade-in-up': `fade-in-up 0.2s forwards`,
          'fade-out-up': `fade-out-up 0.2s forwards`,
          shake: `shake 0.5s forwards`,
          stroke: `stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) forwards;`,
          scale: `scale .3s ease-in-out`,
        },
      },
    },
  },
);
