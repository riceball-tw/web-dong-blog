/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  important: true,
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', 'Fira Code', ...defaultTheme.fontFamily.mono],
      serif: [...defaultTheme.fontFamily.serif],
      sans: ['Noto Sans CJK TC', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      debug: 'red',
      primary: {
        50: 'rgb(var(--primary-color-50) / <alpha-value>)',
        100: 'rgb(var(--primary-color-100) / <alpha-value>)',
        200: 'rgb(var(--primary-color-200) / <alpha-value>)',
        300: 'rgb(var(--primary-color-300) / <alpha-value>)',
        400: 'rgb(var(--primary-color-400) / <alpha-value>)',
        500: 'rgb(var(--primary-color-500) / <alpha-value>)',
        600: 'rgb(var(--primary-color-600) / <alpha-value>)',
        700: 'rgb(var(--primary-color-700) / <alpha-value>)',
        800: 'rgb(var(--primary-color-800) / <alpha-value>)',
        900: 'rgb(var(--primary-color-900) / <alpha-value>)',
        1000: 'rgb(var(--primary-color-1000) / <alpha-value>)',
      },
      secondary: {
        light: 'rgb(var(--secondary-color-light) / <alpha-value>)',
        DEFAULT: 'rgb(var(--secondary-color) / <alpha-value>)',
      },
      accent: {
        light: 'rgb(var(--accent-color-light) / <alpha-value>)',
        DEFAULT: 'rgb(var(--accent-color) / <alpha-value>)',
      },
    },
    extend: {
      gridTemplateColumns: {
        gallery: 'repeat(auto-fit, minmax(300px, 1fr))',
        'gallery-lg': 'repeat(auto-fit, minmax(450px, 1fr))',
      },

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.primary[800]'),
            '--tw-prose-headings': theme('colors.primary[900]'),
            '--tw-prose-lead': theme('colors.primary[700]'),
            '--tw-prose-links': theme('colors.primary[900]'),
            '--tw-prose-bold': theme('colors.primary[900]'),
            '--tw-prose-counters': theme('colors.primary[600]'),
            '--tw-prose-bullets': theme('colors.primary[400]'),
            '--tw-prose-hr': theme('colors.primary[300]'),
            '--tw-prose-quotes': theme('colors.primary[900]'),
            '--tw-prose-quote-borders': theme('colors.primary[300]'),
            '--tw-prose-captions': theme('colors.primary[700]'),
            '--tw-prose-code': theme('colors.primary[900]'),
            '--tw-prose-pre-code': theme('colors.primary[100]'),
            '--tw-prose-pre-bg': theme('colors.primary[900]'),
            '--tw-prose-th-borders': theme('colors.primary[300]'),
            '--tw-prose-td-borders': theme('colors.primary[300]'),
            '--tw-prose-invert-body': theme('colors.primary[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.primary[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.primary[400]'),
            '--tw-prose-invert-bullets': theme('colors.primary[600]'),
            '--tw-prose-invert-hr': theme('colors.primary[700]'),
            '--tw-prose-invert-quotes': theme('colors.primary[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.primary[700]'),
            '--tw-prose-invert-captions': theme('colors.primary[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.primary[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.primary[600]'),
            '--tw-prose-invert-td-borders': theme('colors.primary[600]'),
            'blockquote p:first-of-type::before': true,
            'blockquote p:last-of-type::after': true,
            'code::before': false,
            'code::after': false,
            img: {
              borderRadius: theme('borderRadius.lg'),
            },
            video: {
              borderRadius: theme('borderRadius.lg'),
            },
            blockquote: {
              textAlign: 'center',
              paddingLeft: 'none',
              border: 'none',
              padding: '1rem',
              fontSize: '1.5rem',
              fontStyle: 'normal',
              '&::before': {
                content: "'* * *'",
                opacity: 0.3,
              },
              '&::after': {
                content: "'* * *'",
                opacity: 0.3,
              },
            },
            table: {
              '@apply border-primary-200': {},
              display: 'block',
              paddingTop: theme('spacing.8'),
              paddingBottom: theme('spacing.8'),
              overflow: 'auto',
              whiteSpace: 'nowrap',
              borderRadius: theme('borderRadius.lg'),
              borderWidth: theme('width.px'),
              scrollbarWidth: 'thin',
            },
            tr: {
              '@apply border-primary-200 block px-4 mx-8': {},
              '&:hover': {
                '@apply bg-primary-100': {},
              },
            },
            td: {
              padding: theme('spacing.5'),
            },
            th: {
              padding: theme('spacing.5'),
            },
            code: {
              borderRadius: theme('borderRadius.lg'),
              scrollbarWidth: 'thin',
            },

            ':not(pre) > code': {
              padding: theme('spacing.1'),
              '@apply bg-primary-200 bg-opacity-60 border border-primary-300': {},
            },
          },
        },
        dark: {
          css: {
            table: {
              '@apply bg-primary-900 border-primary-800': {},
              '&:hover': {
                '@apply border-primary-700': {},
              },
            },
            figcaption: {
              '@apply border-primary-600': {},
            },
            tr: {
              '@apply border-primary-700': {},
              '&:hover': {
                '@apply bg-primary-800': {},
              },
            },
            ':not(pre) > code': {
              '@apply bg-primary-800 bg-opacity-60 border border-primary-700': {},
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
