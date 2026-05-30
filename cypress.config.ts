import { defineConfig } from "cypress";
import { loadEnv } from "vite";
import { resolveBase } from "./src/utils/resolve-base.ts";

const { BASE_URL } = loadEnv(
	process.env.NODE_ENV || "development",
	process.cwd(),
	"",
);

const finalBase = resolveBase(BASE_URL);

export default defineConfig({
	env: {
		defaultLocale: "zh-tw",
	},
	e2e: {
		baseUrl: `http://localhost:4321${finalBase}`,
	},
});
