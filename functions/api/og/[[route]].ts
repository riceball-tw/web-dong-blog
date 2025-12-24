// og-image-generator-cloudflare-worker
// https://github.com/mohdlatif/og-image-generator-cloudflare-worker/tree/main
import { Hono } from "hono";
import { cache } from "hono/cache";
import { handle } from "hono/cloudflare-pages";
import og from "./og";

type Env = {
	OG_LIMITER: {
		limit: (options: { key: string }) => Promise<{ success: boolean }>;
	};
};

const app = new Hono<{ Bindings: Env }>().basePath("/api/og");

app.use("*", async (c, next) => {
	const ip = c.req.header("cf-connecting-ip") ?? "anonymous";
	try {
		const { success } = await c.env.OG_LIMITER.limit({ key: ip });
		if (!success) {
			return c.json({ error: "Rate limit exceeded" }, 429);
		}
	} catch (e) {
		console.error("Rate limiter error:", e);
		// Fail open if rate limiter fails
	}
	await next();
});

app.use(
	"*",
	cache({
		cacheName: "og-image",
		cacheControl: "max-age=86400", // 24 hours
	}),
);

app.route("/", og);

export const onRequest = handle(app);
