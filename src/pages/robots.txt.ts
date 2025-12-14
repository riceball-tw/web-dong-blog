import type { APIRoute } from "astro";

// cdn-cgi
// https://developers.cloudflare.com/fundamentals/reference/cdn-cgi-endpoint/#disallow-using-robotstxt
const robotsTxt = `
User-agent: *
Allow: /
Disallow: /cdn-cgi/

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

// eslint-disable-next-line import/prefer-default-export
export const GET: APIRoute = () =>
	new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
