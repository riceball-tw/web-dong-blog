export default {
  setting: {
    paginationSize: 15,
    projectUpdateBadgeUrl: 'https://github.com/riceball-tw/astro-blog/commits/main',
    editorTheme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  brand: {
    name: 'WebDong',
    nameTC: '網頁東東',
    short: 'WD',
    slogan: '親切簡單描述如何建構網頁',
    description:
      '是什麼原因導致網頁建構上遭遇瓶頸？以及如何突破？網頁東東用最親切簡單的方式描述如何設計與架構網頁，著重於圖像化以及實例操作，累積教學上的經驗降低每次學習新事物的成本',
    themeColor: '#0d0a28',
    thumbnail: {
      width: 1200,
      height: 630,
      src: '/images/brand/default-og.jpg',
      alt: '網頁東東橫幅',
    },
    copyright: {
      title: 'CC BY-NC 4.0',
      url: 'https://creativecommons.org/licenses/by-nc/4.0/deed.zh_TW',
    },
    socials: [
      {
        name: 'Thread',
        iconName: 'simple-icons:threads',
        url: 'https://www.threads.net/@webdong.dev',
      },
      {
        name: 'GitHub',
        iconName: 'simple-icons:github',
        url: 'https://github.com/riceball-tw',
      },
      {
        name: 'RSS',
        iconName: 'simple-icons:rss',
        imgUrl: '/images/global/social/rss.svg',
        url: '/rss.xml',
      },
    ],
  },
};
