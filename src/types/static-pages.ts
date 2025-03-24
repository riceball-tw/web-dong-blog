import type { InferGetStaticPropsType } from 'astro';
import { getStaticPaths as PostGetStaticPaths } from '@/pages/post/[...slug].astro';
import { getStaticPaths as ShortpostGetStaticPaths } from '@/pages/shortpost/[...slug].astro';

export type PostPage = InferGetStaticPropsType<typeof PostGetStaticPaths>['post'];

export type ShortpostPage = InferGetStaticPropsType<typeof ShortpostGetStaticPaths>['shortpost'];
