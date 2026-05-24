import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "@vercel/og";

const fontBold = fs.readFileSync(
	path.resolve("./public/fonts/NotoSansTC-Bold.ttf"),
);
const fontRegular = fs.readFileSync(
	path.resolve("./public/fonts/NotoSansTC-Regular.ttf"),
);

function logo() {
	return {
		type: "div",
		props: {
			style: {
				display: "flex",
				position: "absolute",
				top: "-2rem",
				left: "3rem",
				width: "8rem",
				height: "8rem",
			},
			children: [
				{
					type: "svg",
					props: {
						style: { width: "100%", height: "100%" },
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 60 60",
						children: [
							{
								type: "defs",
								props: {
									children: [
										{
											type: "radialGradient",
											props: {
												id: "a",
												cx: "29.57",
												cy: "-147.74",
												r: "39.06",
												gradientTransform: "translate(0 204.88)",
												gradientUnits: "userSpaceOnUse",
												children: [
													{
														type: "stop",
														props: {
															offset: ".26",
															stopColor: "#b887f7",
															stopOpacity: ".8",
														},
													},
													{
														type: "stop",
														props: {
															offset: ".84",
															stopColor: "#534af7",
															stopOpacity: ".8",
														},
													},
												],
											},
										},
										{
											type: "radialGradient",
											props: {
												id: "c",
												cx: "29.65",
												cy: "-152.73",
												r: "31.87",
												gradientTransform: "translate(0 204.88)",
												gradientUnits: "userSpaceOnUse",
												children: [
													{
														type: "stop",
														props: {
															offset: ".26",
															stopColor: "#b887f7",
															stopOpacity: ".8",
														},
													},
													{
														type: "stop",
														props: {
															offset: ".84",
															stopColor: "#534af7",
															stopOpacity: ".8",
														},
													},
												],
											},
										},
										{
											type: "linearGradient",
											props: {
												id: "b",
												x1: "30",
												x2: "30",
												y1: "53.14",
												y2: "6.93",
												gradientUnits: "userSpaceOnUse",
												children: [
													{
														type: "stop",
														props: {
															offset: "0",
															stopColor: "#b887f7",
															stopOpacity: "0",
														},
													},
													{
														type: "stop",
														props: {
															offset: "1",
															stopColor: "#fff",
															stopOpacity: ".4",
														},
													},
												],
											},
										},
									],
								},
							},
							{
								type: "path",
								props: {
									d: "M54.45 35.73L51.7 24.41c-.29-1.05-.5-2.11-.71-3.2-.22-1.24-1.02-2.33-2.21-3.01L32.45 9.04a5.046 5.046 0 00-4.91 0l-16.33 9.14A4.465 4.465 0 009 21.19c-.21 1.07-.4 2.14-.71 3.2L5.56 35.73c-.29 1.76.52 3.42 2.14 4.35l19.23 10.78a6.254 6.254 0 006.13 0l19.22-10.8c1.64-.92 2.44-2.57 2.16-4.34z",
									fill: "url(#a)",
								},
							},
							{
								type: "path",
								props: {
									d: "M49.95 34.68l-2.24-9.24c-.24-.86-.41-1.72-.58-2.61-.18-1.02-.83-1.9-1.8-2.45L32 12.91a4.123 4.123 0 00-4 0l-13.33 7.46c-.96.54-1.59 1.44-1.8 2.45-.17.87-.32 1.75-.58 2.61l-2.23 9.25c-.24 1.44.42 2.79 1.75 3.55l15.69 8.8c1.55.87 3.45.87 5.01 0l15.68-8.81c1.34-.75 1.99-2.1 1.76-3.54z",
									fill: "url(#c)",
								},
							},
							{
								type: "path",
								props: {
									d: "M38.85 22.39l-2.04-1.18-6.76 2.62 4.3-4.04-2.09-1.2-7 2.47 4.5-3.92-2.03-1.17-5.75 5.63 2.29 1.32 6.37-2.21-3.84 3.67 2.3 1.32 9.75-3.31",
									fill: "#fff",
								},
							},
						],
					},
				},
			],
		},
	};
}

function ogCard(title: string, content: string) {
	return {
		type: "div",
		props: {
			style: {
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				padding: "2rem",
				backgroundImage:
					"linear-gradient(135deg, rgb(20, 0, 57) 0%, rgb(137, 105, 255) 100%)",
			},
			children: [
				{
					type: "div",
					props: {
						style: {
							position: "absolute",
							top: 0,
							left: 0,
							width: "300%",
							height: "300%",
							background:
								"linear-gradient(120deg, rgb(146, 224, 82) 10%, rgb(82, 105, 224) 15%, rgb(82, 84, 224) 20%, rgb(82, 224, 141) 25%, rgb(82, 84, 224) 30%)",
							opacity: 0.3,
							filter: "blur(20px)",
						},
					},
				},
				{
					type: "div",
					props: {
						style: {
							flex: 1,
							display: "flex",
							flexDirection: "column",
							padding: "3rem",
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: "1rem",
							border: "2px solid rgba(255, 255, 255, 0.2)",
							position: "relative",
						},
						children: [
							logo(),
							{
								type: "div",
								props: {
									style: { display: "flex", flexDirection: "column" },
									children: [
										{
											type: "div",
											props: {
												style: {
													marginTop: "3.5rem",
													display: "flex",
													fontWeight: 900,
													lineHeight: 1.1,
													color: "white",
													fontSize: "4rem",
												},
												children: title,
											},
										},
										{
											type: "div",
											props: {
												style: {
													display: "flex",
													fontWeight: 500,
													marginTop: "2rem",
													lineHeight: 1.5,
													color: "white",
													letterSpacing: "1.4px",
													fontSize: "1.5rem",
												},
												children: content,
											},
										},
									],
								},
							},
						],
					},
				},
			],
		},
	};
}

const CACHE_DIR = path.resolve("./public/og-cache");

export async function generateOgImage(title: string, content: string) {
	const hash = crypto
		.createHash("md5")
		.update(title + content)
		.digest("hex");
	const cachePath = path.join(CACHE_DIR, `${hash}.png`);

	if (fs.existsSync(cachePath)) {
		return new Response(fs.readFileSync(cachePath), {
			headers: { "Content-Type": "image/png" },
		});
	}

	// biome-ignore lint/suspicious/noExplicitAny: @vercel/og accepts plain objects but types expect ReactElement
	const imageResponse = new ImageResponse(ogCard(title, content) as any, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: "font-family",
				data: fontBold.buffer as ArrayBuffer,
				weight: 900,
				style: "normal",
			},
			{
				name: "font-family",
				data: fontRegular.buffer as ArrayBuffer,
				weight: 500,
				style: "normal",
			},
		],
	});

	const buffer = Buffer.from(await imageResponse.arrayBuffer());
	fs.mkdirSync(CACHE_DIR, { recursive: true });
	fs.writeFileSync(cachePath, buffer);

	return new Response(buffer, { headers: { "Content-Type": "image/png" } });
}
