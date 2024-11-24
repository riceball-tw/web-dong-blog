import { type CollectionEntry } from 'astro:content';
import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';
import { publishedPosts } from '@/utils/getPosts.ts';
import { currentLocaleWebsiteConfig } from '@/utils/getWebsiteConfig.ts';
import { defaultLocale, stripLanguageCode } from '@/utils/i18n.ts';

interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<'post'> };
}

export async function GET({ props }: Props) {
  const { post } = props;
  const NotoSansBold = fs.readFileSync(path.resolve('./fonts/NotoSansTC-Bold.ttf'));
  const NotoSansRegular = fs.readFileSync(path.resolve('./fonts/NotoSansTC-Regular.ttf'));
  // TODO: Hardcoded post image, waiting to switch to iconify icon
  const logoImageBase64 = fs.readFileSync(`./public/images/icons/document.svg`).toString('base64');
  const { themeColor } = (await currentLocaleWebsiteConfig(defaultLocale)).data.brand;

  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: 'div',
    key: 'og',
    props: {
      children: [
        {
          type: 'div',
          props: {
            tw: 'w-[96px] h-[96px] rounded-lg',
            style: {
              backgroundImage: `url('data:image/svg+xml;base64,${logoImageBase64}')`,
              backgroundSize: '96px 96px',
              backgroundRepeat: 'no-repeat',
              backgroundColor: post.data.themeColor,
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center',
            },
            children: [
              {
                type: 'p',
                props: {
                  style: { fontSize: 64, lineHeight: 1 },
                  children: post.data.headline,
                },
              },
              {
                type: 'p',
                props: {
                  style: { fontSize: 32, fontFamily: 'Noto Sans TC Regular' },
                  children: post.data.subHeadline,
                },
              },
            ],
          },
        },
      ],
      style: {
        backgroundColor: themeColor,
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: '20px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontFamily: 'Noto Sans TC Bold',
      },
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Noto Sans TC Bold',
        data: NotoSansBold.buffer,
        style: 'normal',
      },
      {
        name: 'Noto Sans TC Regular',
        data: NotoSansRegular.buffer,
        style: 'normal',
      },
    ],
  });
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  return publishedPosts.map((post) => ({
    params: { slug: stripLanguageCode(post.slug) },
    props: { post },
  }));
}
