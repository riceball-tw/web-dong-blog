export interface BaseLayout extends GlobalHead {
  themeColor?: string;
}

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
