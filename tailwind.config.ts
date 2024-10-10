import type { Config } from 'tailwindcss';
import type { PluginUtils } from 'tailwindcss/types/config';
import defaultTheme from 'tailwindcss/defaultTheme';
import TailwindShadcnConfig from './tailwind-shadcn-config.ts';

export default {
  presets: [TailwindShadcnConfig],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './astro.config.mjs'],
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
      navbar: {
        DEFAULT: 'hsl(var(--navbar))',
        foreground: 'hsl(var(--navbar-foreground))',
      },
      blockquote: {
        DEFAULT: 'hsl(var(--blockquote))',
        foreground: 'hsl(var(--blockquote-foreground))',
      },
      'primary-active': {
        DEFAULT: 'hsl(var(--primary-active))',
      },
      highlight: 'hsl(var(--highlight))',
    },
    extend: {
      // variable colors with <alpha-value> not working with theme function on plugins
      // https://github.com/tailwindlabs/tailwindcss/issues/9143#issuecomment-1579382345
      typography: ({ theme }: PluginUtils) => ({
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
            video: {
              borderRadius: theme('borderRadius.lg'),
            },
            code: {
              borderRadius: theme('borderRadius.lg'),
              scrollbarWidth: 'thin',
            },
            // Inline Codeblock
            ':not(pre) > code': {
              '@apply p-1 bg-primary text-foreground bg-opacity-20 border border-primary border-opacity-40': {},
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
