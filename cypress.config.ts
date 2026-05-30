import { defineConfig } from "cypress";
import { loadEnv } from "vite";

const { BASE_URL } = loadEnv(
	process.env.NODE_ENV || "development",
	process.cwd(),
	"",
);

// Match the same base URL logic used in astro.config.mjs so Cypress
// visits the correct paths when BASE_URL is set (e.g. /dong/).
// Uses Vite's loadEnv which reads .env files and respects process.env.
const finalBase = BASE_URL
	? `/${BASE_URL}/`.replace(/\/{2,}/g, "/")
	: "/";

export default defineConfig({
	env: {
		defaultLocale: "zh-tw",
	},
	e2e: {
		baseUrl: `http://localhost:4321${finalBase}`,
	},
});
