# **[WebDong](https://www.webdong.dev/en/) - Discover Interesting Things Around The Web**

[Posts](https://www.webdong.dev/en/post/) /
[Toolbox](https://www.webdong.dev/en/toolbox/) /
[ShortPosts](https://www.webdong.dev/en/shortpost/)

## Motivation

I was a frontend teaching assistant before, to share learning for students so I build this web related blog: [Experience Summary as a Teaching Assistant at Hexschool](https://www.webdong.dev/en/post/my-experience-in-hexschool/)

## Getting Started

> [!NOTE]
>
> - Q: Why is every page has 2 version, one in `src/pages` folder and one in `src/pages/[language]` folder?
>   - A: To support i18n, we need to have a `src/pages/[language]` folder to generate different pages of languages. In the future they will be merge together, user will be redirect to related lang. For smooth i18n transition and avoid too much breaking changes(redirect). That's the workaround for now.
> - Q: Why is i18n key naming so random?
>   - A: [human readable and random ids for messages by default](https://github.com/opral/monorepo/issues/1892#issuecomment-1858038586)

### Commands

Replace pnpm with your choice of npm / yarn

| Command            | Action                                                                                                  |
| :----------------- | :------------------------------------------------------------------------------------------------------ |
| `pnpm dev`         | Starts local dev server at `localhost:4321`                                                             |
| `pnpm build`       | Build your production site to `./dist/`, also generating [pagefind](https://pagefind.app/) search index |
| `pnpm typecheck`   | Run type-checking                                                                                       |
| `pnpm lint`        | Run ESLint check                                                                                        |
| `pnpm prettier`    | Run Prettier check                                                                                      |
| `pnpm lighthouse`  | Run [lighthouse](https://github.com/GoogleChrome/lighthouse) check                                      |
| `pnpm postinstall` | Run [pagefind](https://pagefind.app/) search index                                                      |

### Development

```bash
# 1. Clone the repository
git clone https://github.com/riceball-tw/web-dong-blog.git .

# 2. Install dependencies
pnpm install

# 3. Copy the environment variables and fill out
cp .env.example .env

# 4. Run the development server
pnpm run dev
```

### Build

```bash
# Deploy the contents of the `./dist` folder wherever you like.
pnpm install
pnpm build
pnpm preview
```

## License

The source code in this repository is licensed under the MIT License.
Non-code content (e.g., images, videos, articles) is <a href='https://creativecommons.org/licenses/by-nc/4.0/'>CC BY-NC 4.0</a>.
