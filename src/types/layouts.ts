export interface GlobalHead {
	title?: string;
	description?: string;
	thumbnail?: {
		width?: number;
		height?: number;
		src: string;
		alt: string;
	};
}

export interface ThemeColor {
	themeColor?: string | undefined;
}

export interface BaseLayout extends GlobalHead, ThemeColor {}
