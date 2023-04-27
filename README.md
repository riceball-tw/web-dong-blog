<h1 align="center">
  🚀 Astro Theme - Dong 🟪
</h1>

Astro Theme Dong is a basic theme built with the Astro framework. Use it to create an easy-to-use blog or website.

## Key Features
- TailwindCSS Utility classes
- Accessible, semantic HTML markup
- Responsive & SEO-friendly
- Dark / Light mode
- MD & [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) posts
- Pagination
- [Automatic RSS feed](https://docs.astro.build/en/guides/rss)
- Shiki code syntax styling
- Auto-generated [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Demo 💻

Check out my personal bolg [Demo](https://www.webdong.dev/), hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

## Quick start

[Create a new repo](https://github.com/riceball-tw/astro-blog/generate) from this template.

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/riceball-tw/astro-blog) 

## Commands
Replace yarn with your choice of npm / pnpm

| Command        | Action                                                         |
| :------------- | :------------------------------------------------------------- |
| `yarn`         | Installs dependencies                                          |
| `yarn dev`     | Starts local dev server at `localhost:3000`                    |
| `yarn build`   | Build your production site to `./dist/`                        |
| `yarn preview` | Preview your build locally, before deploying                   |
| `yarn sync`    | Generate types based on your config in `src/content/config.ts` |

## Configure

- Edit the config file `src/site.config.ts` for basic site meta data
- Update file `globalConfig.ts` site property with your own domain
- Create / edit posts for your blog within `src/content/post/` with .md/mdx file(s). See [below](#adding-posts) for more details.

## Adding posts

This theme utilises [Content Collections](https://docs.astro.build/en/guides/content-collections/) to organise Markdown and/or MDX files, as well as type-checking frontmatter with a schema -> `src/content/config.ts`.

Adding a post is a simple as adding your .md(x) file(s) to the `src/content/post` folder, the filename of which will be used as the slug/url. The two posts included with this template are there as an example of how to structure your frontmatter. Additionally, the [Astro docs](https://docs.astro.build/en/guides/markdown-content/) has a detailed section on markdown pages.

### Frontmatter

TODO... Please Check `src/content/config.ts` for more information

## Deploy

[Astro docs](https://docs.astro.build/en/guides/deploy/) has a great section and breakdown of how to deploy your own Astro site on various platforms and their idiosyncrasies.

By default the site will be built (see [Commands](#commands) section above) to a `/dist` directory.

## Acknowledgment

This theme is inspired by [Astro Theme Cactus](https://github.com/chrismwilliams/astro-theme-cactus)

## License

MIT
