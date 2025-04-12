// tailwind.config.ts
import type { Config } from 'tailwindcss';
// @ts-expect-error
// tailwindcss-fluid-type has no type, so ignore ts-error
import fluidType from 'tailwindcss-fluid-type';

export default {
  theme: {
    extend: {
      // variable colors with <alpha-value> not working with theme function on plugins
      // https://github.com/tailwindlabs/tailwindcss/issues/9143#issuecomment-1579382345
      typography: ({ theme }) => ({
        '2xl': {
          css: {
            img: {
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.0'),
            },
          },
        },
        xl: {
          css: {
            '*': {
              gridColumn: '2',
            },
            img: {
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.0'),
            },
            'h2:first-of-type': {
              marginTop: 0,
            },
          },
        },
        DEFAULT: {
          css: {
            img: {
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.0'),
            },
            // Light Mode
            '--tw-prose-body': theme('colors.foreground'),
            '--tw-prose-headings': theme('colors.foreground'),
            '--tw-prose-lead': theme('colors.foreground'),
            '--tw-prose-links': theme('colors.foreground'),
            '--tw-prose-bold': theme('colors.highlight'),
            '--tw-prose-counters': theme('colors.foreground'),
            '--tw-prose-bullets': theme('colors.highlight / 0.4'),
            '--tw-prose-hr': theme('colors.foreground / 0.4'),
            '--tw-prose-quotes': theme('colors.foreground'),
            '--tw-prose-quote-borders': theme('colors.border'),
            '--tw-prose-captions': theme('colors.foreground'),
            '--tw-prose-code': theme('colors.foreground'),
            '--tw-prose-pre-code': theme('colors.foreground'),
            '--tw-prose-pre-bg': theme('colors.background'),
            '--tw-prose-th-borders': theme('colors.border'),
            '--tw-prose-td-borders': theme('colors.border'),

            'blockquote p:first-of-type::before': true,
            'blockquote p:last-of-type::after': true,
            'code::before': false,
            'code::after': false,
            'h2:first-of-type': {
              marginTop: 0,
            },
            kbd: {
              padding: theme('spacing.1'),
              background: 'oklch(0.639 0.258 287.2 / 20%);',
              border: '1px solid oklch(0.639 0.258 287.2 / 40%)',
              color: theme('colors.foreground'),
              // '@apply p-1 bg-primary text-foreground bg-opacity-20 border border-primary border-opacity-40 shadow-none': {},
            },
            video: {
              borderRadius: theme('borderRadius.lg'),
            },
            code: {
              borderRadius: theme('borderRadius.lg'),
              scrollbarWidth: 'thin',
            },
            // Inline Codeblock
            ':not(pre) > code': {
              padding: theme('spacing.1'),
              background: 'oklch(0.639 0.258 287.2 / 20%);',
              border: '1px solid oklch(0.639 0.258 287.2 / 40%)',
              // '@apply p-1 bg-primary text-foreground bg-opacity-20 border border-primary border-opacity-40': {},
            },
          },
        },
      }),
    },
  },
  plugins: [
    fluidType({
      corePlugins: {
        fontsize: false,
        lineHeight: false,
      },
      settings: {
        fontSizeMin: 1.125,
        fontSizeMax: 1.25,
        ratioMin: 1.125,
        ratioMax: 1.2,
        screenMin: 20,
        screenMax: 96,
        unit: 'rem',
        prefix: '',
        extendValues: true,
      },
      values: {
        xs: -2,
        sm: -1,
        base: 0,
        lg: 1,
        xl: 2,
        '2xl': 3,
        '3xl': 4,
        '4xl': 5,
        '5xl': 6,
        '6xl': 7,
        '7xl': 8,
        '8xl': 9,
        '9xl': 10,
      },
    }),
  ],
} satisfies Config;
