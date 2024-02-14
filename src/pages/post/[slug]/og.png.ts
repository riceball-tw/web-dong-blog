import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';
import globalConfig from '@/globalConfig';

interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<'post'> };
}

export async function GET({ props }: Props) {
  const { post } = props;
  const { themeColor } = post.data;
  const NotoSansBold = fs.readFileSync(path.resolve('./fonts/NotoSansTC-Bold.ttf'));
  const NotoSansRegular = fs.readFileSync(path.resolve('./fonts/NotoSansTC-Regular.ttf'));
  const logoImageBase64 = fs.readFileSync(`./public/${post.data.featureIcon.url}`).toString('base64');

  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: 'div',
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
              backgroundColor: themeColor,
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
                  children: post.data.titleTC,
                },
              },
              {
                type: 'p',
                props: {
                  style: { fontSize: 32, fontFamily: 'Noto Sans TC Regular' },
                  children: post.data.title,
                },
              },
            ],
          },
        },
      ],
      style: {
        backgroundColor: globalConfig.brand.themeColor,
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
  const blogPosts = await getCollection('post');
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
