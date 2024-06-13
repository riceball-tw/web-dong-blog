import { getCollection } from 'astro:content';

async function getPosts() {
  const avaliablePosts = await getCollection('post', (post) =>
    import.meta.env.MODE === 'production' ? !post.data.isDraft : true,
  );
  return avaliablePosts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    titleTC: post.data.titleTC,
    excerpt: post.data.excerpt,
    themeColor: post.data.themeColor,
  }));
}

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  return new Response(JSON.stringify(await getPosts()), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
