import React from 'react';
import { z } from 'zod';
// https://vercel.com/docs/og-image-generation/og-image-api
import { ImageResponse } from '@cloudflare/pages-plugin-vercel-og/api';

// eslint-disable-next-line import/prefer-default-export, no-undef
export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  const { searchParams } = url;

  const searchParamsSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    subtitle: z.string().optional(),
    bgColor: z
      .string()
      .regex(/^([0-9a-fA-F]{6})$/, 'Invalid bgColor hex')
      .transform((val) => `#${val}`),
    themeColor: z
      .string()
      .regex(/^([0-9a-fA-F]{6})$/, 'Invalid themeColor hex')
      .transform((val) => `#${val}`),
  });

  const result = searchParamsSchema.safeParse({
    title: searchParams.get('title'),
    subtitle: searchParams.get('subtitle'),
    bgColor: searchParams.get('bgColor'),
    themeColor: searchParams.get('themeColor'),
  });

  if (!result.success) {
    return new Response(JSON.stringify(result.error.format()), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ogImage = result.data;

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: ogImage.bgColor,
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
        }}
      >
        <div
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '0.5rem',
            backgroundImage: ``,
            backgroundSize: '96px 96px',
            backgroundRepeat: 'no-repeat',
            backgroundColor: ogImage.themeColor,
          }}
        />
        <div
          style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 64, lineHeight: 1 }}>{ogImage.title}</p>
          <p style={{ fontSize: 32, fontFamily: 'Noto Sans TC Regular' }}>{ogImage.subtitle}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
};
