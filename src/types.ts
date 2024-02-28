export interface BaseLayout extends GlobalHead, themeColor {}

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

export interface themeColor {
  themeColor?: string | undefined;
}
