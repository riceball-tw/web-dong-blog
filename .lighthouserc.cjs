module.exports = {
	ci: {
		collect: {
			numberOfRuns: 1,
			startServerCommand: "astro preview",
			url: [
				"http://localhost:4321/zh-tw/",
				"http://localhost:4321/zh-tw/post",
				"http://localhost:4321/zh-tw/post/rendering-pattern/", // Complex post demo
				"http://localhost:4321/zh-tw/toolbox",
				"http://localhost:4321/zh-tw/shortpost",
			],
		},
		assert: {
			preset: "lighthouse:no-pwa",
			assertions: {
				"csp-xss": "warn",
				"total-byte-weight": "off", // TODO: enable this when this bug is fixed: https://github.com/GoogleChrome/lighthouse-ci/issues/1001
				"identical-links-same-purpose": "off",
				"landmark-one-main": "off",
				"color-contrast": "warn", // WCAG contrast might not be useful now, wait for WCAG3 or APCA?
				"image-size-responsive": "warn", // Some pages use external image that cannot be controlled
				"non-composited-animations": "warn",
				"offscreen-images": "warn", // Optional Optimization
				"bf-cache": "warn", // Optional Optimization
				"uses-rel-preconnect": "warn", // Optional Optimization
				"unused-css-rules": "warn", // Optional Optimization
				"uses-optimized-images": "warn", // Optional Optimization
				"link-text": "warn", // Optional Optimization
			},
		},
		upload: {
			// target: 'temporary-public-storage',
			target: "lhci",
			serverBaseUrl: process.env.PUBLIC_LHCI_BASE_URL,
			token: process.env.LHCI_TOKEN,
		},
		server: {
			// server options here
		},
		wizard: {
			// wizard options here
		},
	},
};
