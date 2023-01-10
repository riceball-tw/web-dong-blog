/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  // important: true,
  theme: {
    fontFamily: {
      mono: [
        'Fira Code',
        'JetBrains Mono',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],

      serif: [
        'ui-serif',
        'Noto Serif TC',
        'Noto Serif CJK TC',
        'serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans TC',
        'Noto Sans CJK TC',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    colors: {
      // Basic Setup
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      debug: 'red',

      // Utility Setup
      primary: {
        50: 'var(--primary-color-50)',
        100: 'var(--primary-color-100)',
        200: 'var(--primary-color-200)',
        300: 'var(--primary-color-300)',
        400: 'var(--primary-color-400)',
        500: 'var(--primary-color-500)',
        600: 'var(--primary-color-600)',
        700: 'var(--primary-color-700)',
        800: 'var(--primary-color-800)',
        900: 'var(--primary-color-900)',
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

            img: {
              borderRadius: theme('borderRadius.lg'),
            },
            video: {
              borderRadius: theme('borderRadius.lg'),
            },
            blockquote: {
              padding: '0',
            },
            // Remove code's before and after backtick
            'blockquote p:first-of-type::before': true,
            'blockquote p:last-of-type::after': true,
            'code::before': false,
            'code::after': false,
          },
        },
        lg: {
          css: {
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
              display: 'block',
              padding: theme('spacing.8'),
              overflow: 'auto',
              whiteSpace: 'nowrap',
              borderRadius: theme('borderRadius.lg'),
              borderWidth: theme('width.px'),
              scrollbarWidth: 'thin',
              borderColor: theme('colors.primary[200]'),
            },
            figcaption: {
              borderWidth: theme('width.px'),
              borderTop: 'none',
              padding: theme('spacing.4'),
              borderBottomRightRadius: theme('borderRadius.lg'),
              borderBottomLeftRadius: theme('borderRadius.lg'),
              marginTop: '0',
              backgroundColor: theme('colors.primary[100]'),
              borderColor: theme('colors.primary[200]'),
              '&:hover': {
                backgroundColor: theme('colors.primary[200]'),
              },
            },
            tr: {
              '&:hover': {
                borderRadius: theme('borderRadius.lg'),
                backgroundColor: theme('colors.primary[200]'),
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
            pre: {
              paddingTop: 'none',
              paddingRight: 'none',
              paddingBottom: 'none',
              paddingLeft: 'none',
            },
            ':not(pre) > code': {
              padding: theme('spacing.1'),
              backgroundColor: theme('colors.primary[200]'),
            },
          },
        },
        dark: {
          css: {
            table: {
              backgroundColor: theme('colors.primary[800]'),
              borderColor: theme('colors.primary[700]'),
              '&:hover': {
                borderColor: theme('colors.primary[600]'),
              },
            },
            figcaption: {
              backgroundColor: theme('colors.primary[800]'),
              borderColor: theme('colors.primary[600]'),
              '&:hover': {
                backgroundColor: theme('colors.primary[700]'),
              },
            },
            tr: {
              '&:hover': {
                borderRadius: theme('borderRadius.lg'),
                backgroundColor: theme('colors.primary[700]'),
              },
            },
            ':not(pre) > code': {
              backgroundColor: theme('colors.primary[800]'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
