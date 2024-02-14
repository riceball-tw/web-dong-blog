import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  // https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
  param: 'route',

  pages: import.meta.glob('/src/content/post/**/*.{md,mdx}', { eager: true }),

  getImageOptions: (path, page) => ({
    title: page.frontmatter.titleTC,
    description: page.frontmatter.excerpt,
    logo: {
      path: './public/images/brand/logo.png',
      size: [100, 100],
    },
    bgGradient: [
      [255, 255, 255],
      [83, 74, 247],
    ],
    // border: {
    //   color: [83, 74, 247],
    //   width: 50,
    //   side: 'block-end',
    // },
    font: {
      title: {
        color: [83, 74, 247],
        families: ['Noto Sans TC'],
        weight: 'Bold',
        lineHeight: 1.2,
      },
      description: {
        color: [240, 240, 240],
        size: 30,
        families: ['Noto Sans TC'],
        weight: 'Normal',
        lineHeight: 1.6,
      },
    },
    fonts: [
      // https://fontsource.org/fonts/noto-sans-tc
      'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-tc@4.5.12/files/noto-sans-tc-all-700-normal.woff',
      'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-tc@4.5.12/files/noto-sans-tc-all-400-normal.woff',
    ],
  }),
});
