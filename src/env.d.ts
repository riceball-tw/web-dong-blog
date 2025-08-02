/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// eslint-disable-next-line no-unused-vars
interface Window {
	theme: {
		// eslint-disable-next-line no-unused-vars
		setTheme: (theme: "auto" | "dark" | "light") => void;
		getTheme: () => "auto" | "dark" | "light";
		getSystemTheme: () => "light" | "dark";
		getDefaultTheme: () => "auto" | "dark" | "light";
	};
}
