// og-image-generator-cloudflare-worker
// https://github.com/mohdlatif/og-image-generator-cloudflare-worker/tree/main
import { Hono } from "hono";
import { cache } from "hono/cache";
import { handle } from "hono/cloudflare-pages";
import og from "./og";

const app = new Hono().basePath("/api/og");

app.use(
	"*",
	cache({
		cacheName: "og-image",
		cacheControl: "max-age=86400", // 24 hours
	}),
);

app.route("/", og);

export const onRequest = handle(app);