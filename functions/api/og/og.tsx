/* eslint-disable no-inner-declarations */
import { Hono, Context } from 'hono';
import { ImageResponse } from '@cloudflare/pages-plugin-vercel-og/api';
import React from 'react';
import { githubFonts, googleFont, directFont, getLocalFont, getLocalFonts } from './getFonts';
import { loadImage } from './loadImage';

const app = new Hono();

export default app.get('/', async (c) => {
  try {
    const { mainText, description } = c.req.query();

    // Add input validation
    if (!mainText || !description) {
      throw new Error('Missing required query parameters');
    }

    const SocialCardTemplate = await (async () => {
      const style = c.req.query('style');
      console.log('Selected style:', style);

      switch (style) {
        // case '2':
        //   return Style2();
        // case '3':
        //   return await Style3();
        // case '4':
        //   return Style4();
        default:
          return styleDefault();
      }
    })();

    // ---------------------------------------- //
    // Font Configuration

    // ********************** Google Fonts ********************** //
    const font = await Promise.all([
      googleFont(`${mainText ?? ''}`, 'Noto Sans TC', 900, 'normal'),
      googleFont(`${description ?? ''}`, 'Noto Sans TC', 500, 'normal'),
    ]);

    // ********************** Github Fonts ********************** //
    // const font = await githubFonts();

    // ********************** Direct Font ********************** //
    // const font = await directFont(
    //   'https://github.com/Synesthesias/PLATEAU-SDK-for-Unity-GameSample/raw/refs/heads/main/Assets/Font/DotGothic16-Regular.ttf',
    //   'DotGothic16',
    //   400,
    //   'normal',
    // );

    // ********************** Local Font ********************** //
    // const font = await getLocalFont(c, 'Poppins-Regular.ttf', 400, 'normal');

    // ********************** Local Fonts ********************** //
    // const font = await getLocalFonts(c, [
    //   { path: 'Poppins-Regular.ttf', weight: 400 },
    //   { path: 'Poppins-Medium.ttf', weight: 500 },
    //   { path: 'Poppins-SemiBold.ttf', weight: 600 },
    //   { path: 'Poppins-Bold.ttf', weight: 700 },
    //   { path: 'Poppins-Black.ttf', weight: 900 },
    // ]);

    // END Font Configuration

    // console.log(font);
    // -----------------------------------------

    function styleDefault() {
      // http://127.0.0.1:8787/og?mainText=Building%20the%20Future%20of%20Web%20Development&description=Explore%20modern%20frameworks,%20serverless%20architecture,%20and%20cutting-edge%20tools%20that%20power%20the%20next%20generationof%20web%20applications&footerText=%F0%9F%9A%80%20Powered%20by%20Next.js%20%E2%80%A2%20TypeScript%20%E2%80%A2%20Tailwind%20CSS&style=1

      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            backgroundImage: 'linear-gradient(135deg, rgb(20, 0, 57) 0%, rgb(137, 105, 255) 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '300%',
              height: '300%',
              background:
                'linear-gradient(120deg, rgb(146, 224, 82) 10%, rgb(82, 105, 224) 15%, rgb(82, 84, 224) 20%, rgb(82, 224, 141) 25%, rgb(82, 84, 224) 30%)',
              opacity: 0.3,
              filter: 'blur(20px)',
            }}
          ></div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              padding: '48px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              border: '2px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div
                style={{
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: 'white',
                }}
                tw="text-7xl"
              >
                使用 preload、prefetch、dns源載入順序！
              </div>
              <div
                style={{
                  fontWeight: 500,
                  marginTop: '2rem',
                  lineHeight: 1.5,
                  color: 'white',
                  letterSpacing: 1.4,
                }}
                tw="text-2xl"
              >
                近期看到 Web Dev Simplified
                推出的教學促使我趕緊打開這篇文章記錄其中提到的網頁無障礙需要留意的地方，並且補充上一些我自己實驗有幫助的資訊。無障礙一直是我想重視但實際開發時優先順序總是排在最後的要求，差勁的無障礙對某些使用者來說會嚴重影響到網頁互動的體驗，身為前端讓網頁保持良好的無障礙是基本責任。
              </div>
            </div>
          </div>
        </div>
      );
    }

    return new ImageResponse(SocialCardTemplate, {
      width: 1200,
      height: 630,
      fonts: Array.isArray(font) ? [...font] : [font],
    });
  } catch (error: any) {
    console.error('OG Image generation error:', error);
    return c.json({ error: 'Failed to generate image', details: error.message }, 500);
  }
});
