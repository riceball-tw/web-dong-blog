import { defineConfig } from "cypress";
import { loadEnv } from "vite";
import { resolveBase } from "./src/utils/resolve-base.ts";

const { PUBLIC_BASE_URL } = loadEnv(
	process.env.NODE_ENV || "development",
	process.cwd(),
	"",
);

const finalBase = resolveBase(PUBLIC_BASE_URL);

export default defineConfig({
	env: {
		defaultLocale: "zh-tw",
	},
	e2e: {
		baseUrl: `http://localhost:4321${finalBase}`,
	},
});
