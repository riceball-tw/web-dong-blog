import { ImageResponse } from "@cloudflare/pages-plugin-vercel-og/api";
import { Hono } from "hono";

type Env = {
	OG_LIMITER: {
		limit: (options: { key: string }) => Promise<{ success: boolean }>;
	};
	ASSETS: any;
};

// Adapted getLocalFonts for Worker
const getLocalFonts = async (
	fonts: { path: string; weight: number; style?: string }[],
): Promise<
	Array<{ data: ArrayBuffer; name: string; style: string; weight: number }>
> => {
	const fontPromises = fonts.map(async ({ path, weight, style = "normal" }) => {
		const name = "font-family";

		// Fetch from main site (assume deployed to Pages)
		const baseUrl = "https://www.webdong.dev";
		const response = await fetch(`${baseUrl}/fonts/${path}`);

		if (!response.ok) {
			throw new Error(
				`Failed to load font: ${path} - Status: ${response.status} ${response.statusText}`,
			);
		}

		const data = await response.arrayBuffer();

		return {
			data,
			name,
			style,
			weight,
		};
	});

	return Promise.all(fontPromises);
};

const Logo = () => (
	<div
		style={{
			display: "flex",
			position: "absolute",
			top: "-2rem",
			left: "3rem",
			width: "8rem",
			height: "8rem",
			borderRadius: "1rem",
			backgroundSize: "8rem 8rem",
			backgroundRepeat: "no-repeat",
		}}
	>
		<svg
			style={{ width: "100%", height: "100%" }}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 60 60"
		>
			<title>Logo</title>
			<defs>
				<radialGradient
					id="prefix__a"
					cx="29.57"
					cy="-147.74"
					r="39.06"
					fx="29.57"
					fy="-147.74"
					gradientTransform="translate(0 204.88)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset=".26" stopColor="#b887f7" stopOpacity=".8" />
					<stop offset=".84" stopColor="#534af7" stopOpacity=".8" />
				</radialGradient>
				<radialGradient
					id="prefix__c"
					cx="29.65"
					cy="-152.73"
					r="31.87"
					fx="29.65"
					fy="-152.73"
					gradientTransform="translate(0 204.88)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset=".26" stopColor="#b887f7" stopOpacity=".8" />
					<stop offset=".84" stopColor="#534af7" stopOpacity=".8" />
				</radialGradient>
				<linearGradient
					id="prefix__b"
					x1="30"
					x2="30"
					y1="53.14"
					y2="6.93"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#b887f7" stopOpacity="0" />
					<stop offset="1" stopColor="#fff" stopOpacity=".4" />
				</linearGradient>
				<clipPath id="prefix__d">
					<path
						d="M20.01 20.46l7.72-4.49 11.12 6.42-7.73 4.48-11.11-6.41z"
						fill="none"
					/>
				</clipPath>
			</defs>
			<path
				d="M54.45 35.73L51.7 24.41c-.29-1.05-.5-2.11-.71-3.2-.22-1.24-1.02-2.33-2.21-3.01L32.45 9.04a5.046 5.046 0 00-4.91 0l-16.33 9.14A4.465 4.465 0 009 21.19c-.21 1.07-.4 2.14-.71 3.2L5.56 35.73c-.29 1.76.52 3.42 2.14 4.35l19.23 10.78a6.254 6.254 0 006.13 0l19.22-10.8c1.64-.92 2.44-2.57 2.16-4.34z"
				fill="url(#prefix__a)"
			/>
			<path
				d="M29.99 8.41c.85 0 1.69.21 2.45.64l16.33 9.16c1.19.67 1.99 1.76 2.21 3.01.21 1.09.41 2.14.71 3.2l2.75 11.32c.28 1.76-.52 3.42-2.16 4.34l-19.22 10.8c-.95.54-2.01.8-3.07.8s-2.12-.27-3.07-.8L7.69 40.1c-1.62-.93-2.44-2.59-2.14-4.35l2.73-11.34c.31-1.05.5-2.13.71-3.2a4.518 4.518 0 012.21-3.01l16.33-9.14a5.09 5.09 0 012.45-.64m0-1.48c-1.11 0-2.21.28-3.17.82L10.48 16.9c-1.51.85-2.58 2.3-2.94 4l-.08.42c-.18.93-.35 1.81-.6 2.66v.04l-.02.04L4.11 35.4v.05l-.02.05c-.4 2.38.7 4.64 2.86 5.88L26.2 52.17c1.15.65 2.46.99 3.79.99s2.64-.34 3.79-.99l19.21-10.8c2.16-1.21 3.27-3.45 2.9-5.86v-.06l-.02-.06-2.75-11.32c-.29-1.04-.48-2.03-.69-3.12-.3-1.66-1.37-3.13-2.94-4.02L33.16 7.77c-.97-.54-2.07-.82-3.18-.82z"
				fill="url(#prefix__b)"
			/>
			<path
				d="M49.95 34.68l-2.24-9.24c-.24-.86-.41-1.72-.58-2.61-.18-1.02-.83-1.9-1.8-2.45L32 12.91a4.123 4.123 0 00-4 0l-13.33 7.46c-.96.54-1.59 1.44-1.8 2.45-.17.87-.32 1.75-.58 2.61l-2.23 9.25c-.24 1.44.42 2.79 1.75 3.55l15.69 8.8c1.55.87 3.45.87 5.01 0l15.68-8.81c1.34-.75 1.99-2.1 1.76-3.54z"
				fill="url(#prefix__c)"
			/>
			<g clipPath="url(#prefix__d)">
				<path
					d="M38.85 22.39l-2.04-1.18-6.76 2.62 4.3-4.04-2.09-1.2-7 2.47 4.5-3.92-2.03-1.17-5.75 5.63 2.29 1.32 6.37-2.21-3.84 3.67 2.3 1.32 9.75-3.31"
					fill="#fff"
				/>
			</g>
		</svg>
	</div>
);

const OGCard = ({ title, content }: { title: string; content: string }) => (
	<div
		style={{
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			padding: "2rem",
			backgroundImage:
				"linear-gradient(135deg, rgb(20, 0, 57) 0%, rgb(137, 105, 255) 100%)",
		}}
	>
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "300%",
				height: "300%",
				background:
					"linear-gradient(120deg, rgb(146, 224, 82) 10%, rgb(82, 105, 224) 15%, rgb(82, 84, 224) 20%, rgb(82, 224, 141) 25%, rgb(82, 84, 224) 30%)",
				opacity: 0.3,
				filter: "blur(20px)",
			}}
		/>
		<div
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				padding: "3rem",
				backgroundColor: "rgba(255, 255, 255, 0.1)",
				borderRadius: "1rem",
				border: "2px solid rgba(255, 255, 255, 0.2)",
			}}
		>
			<Logo />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div
					style={{
						marginTop: "3.5rem",
						display: "flex",
						fontWeight: 900,
						lineHeight: 1.1,
						color: "white",
					}}
					tw="text-7xl"
				>
					{title}
				</div>
				<div
					style={{
						display: "flex",
						fontWeight: 500,
						marginTop: "2rem",
						lineHeight: 1.5,
						color: "white",
						letterSpacing: 1.4,
					}}
					tw="text-2xl"
				>
					{content}
				</div>
			</div>
		</div>
	</div>
);

const app = new Hono<{ Bindings: Env }>();

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
	return await next();
});

app.get("/", async (c) => {
	try {
		const { title, content } = c.req.query();

		if (!title || !content) {
			throw new Error("Missing required query parameters");
		}

		const fonts = await getLocalFonts([
			{ path: "NotoSansTC-Bold.ttf", weight: 900 },
			{ path: "NotoSansTC-Regular.ttf", weight: 500 },
		]);

		return new ImageResponse(<OGCard title={title} content={content} />, {
			width: 1200,
			height: 630,
			fonts: fonts as any,
		});
	} catch (error: any) {
		console.error("OG Image generation error:", error);
		return c.json(
			{ error: "Failed to generate image", details: error.message },
			500,
		);
	}
});

export default app;
