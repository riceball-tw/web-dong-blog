import type { Config } from 'tailwindcss';
import type { PluginUtils } from 'tailwindcss/types/config';
import defaultTheme from 'tailwindcss/defaultTheme';

const colors = {
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
};

export default {
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
      ...colors,
      surface: {
        lowest: 'var(--color-surface-lowest)',
        low: 'var(--color-surface-low)',
        DEFAULT: 'var(--color-surface-color)',
        high: 'var(--color-surface-high)',
        highest: 'var(--color-surface-highest)',
        inverse: 'var(--color-inverse-surface)',
      },
      brand: {
        DEFAULT: 'var(--color-brand)',
        background: 'var(--color-brand-background)',
      },

      highlight: 'var(--color-highlight)',
    },
    extend: {
      // variable colors with <alpha-value> not working with theme function on plugins
      // https://github.com/tailwindlabs/tailwindcss/issues/9143#issuecomment-1579382345
      typography: ({ theme }: PluginUtils) => ({
        xl: {
          css: {
            img: {
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.0'),
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
            '--tw-prose-body': theme('colors.surface.inverse'),
            '--tw-prose-headings': theme('colors.surface.inverse'),
            '--tw-prose-lead': theme('colors.surface.inverse'),
            '--tw-prose-links': theme('colors.surface.inverse'),
            '--tw-prose-bold': theme('colors.highlight'),
            '--tw-prose-counters': theme('colors.primary[600] / 1'),
            '--tw-prose-bullets': theme('colors.primary[400] / 1'),
            '--tw-prose-hr': theme('colors.primary[300] / 1'),
            '--tw-prose-quotes': theme('colors.primary[900] / 1'),
            '--tw-prose-quote-borders': theme('colors.primary[300] / 1'),
            '--tw-prose-captions': theme('colors.primary[700] / 1'),
            '--tw-prose-code': theme('colors.primary[900] / 1'),
            '--tw-prose-pre-code': theme('colors.primary[100] / 1'),
            '--tw-prose-pre-bg': theme('colors.primary[900] / 1'),
            '--tw-prose-th-borders': theme('colors.primary[300] / 1'),
            '--tw-prose-td-borders': theme('colors.primary[200] / 1'),

            // Dark Mode
            '--tw-prose-invert-body': theme('colors.surface.inverse'),
            '--tw-prose-invert-headings': 'white',
            '--tw-prose-invert-lead': theme('colors.surface.inverse'),
            '--tw-prose-invert-links': theme('colors.surface.inverse'),
            '--tw-prose-invert-bold': theme('colors.highlight'),
            '--tw-prose-invert-counters': theme('colors.surface.inverse'),
            '--tw-prose-invert-bullets': theme('colors.primary[600] / 1'),
            '--tw-prose-invert-hr': theme('colors.surface.inverse'),
            '--tw-prose-invert-quotes': theme('colors.surface.inverse'),
            '--tw-prose-invert-quote-borders': theme('colors.surface.inverse'),
            '--tw-prose-invert-captions': theme('colors.surface.inverse'),
            '--tw-prose-invert-code': theme('colors.surface.inverse'),
            '--tw-prose-invert-pre-code': theme('colors.surface.inverse'),
            '--tw-prose-invert-pre-bg': theme('colors.surface.inverse'),
            '--tw-prose-invert-th-borders': theme('colors.surface.inverse'),
            '--tw-prose-invert-td-borders': theme('colors.surface.inverse'),
            'blockquote p:first-of-type::before': true,
            'blockquote p:last-of-type::after': true,
            'code::before': false,
            'code::after': false,
            video: {
              borderRadius: theme('borderRadius.lg'),
            },
            code: {
              borderRadius: theme('borderRadius.lg'),
              scrollbarWidth: 'thin',
            },
            ':not(pre) > code': {
              '@apply p-1 bg-primary-200 dark:bg-primary-800 bg-opacity-60 border border-primary-300 dark:border-primary-700 hover:bg-primary-200 hover:border-primary-400 dark:hover:bg-primary-700 dark:hover:border-primary-600 transition-colors':
                {},
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-fluid-type')({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: '', // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.5],
        '2xl': [3, 1.5],
        '3xl': [4, 1.5],
        '4xl': [5, 1.4],
        '5xl': [6, 1.4],
        '6xl': [7, 1.3],
        '7xl': [8, 1.3],
        '8xl': [9, 1.2],
        '9xl': [10, 1.2],
      },
    }),
  ],
} satisfies Config;
