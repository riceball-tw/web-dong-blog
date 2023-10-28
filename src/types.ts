export interface BaseLayout {
  test?: string;
  title?: string;
  description?: string;
  themeColor?: string;
  thumbnail?: {
    width?: number;
    height?: number;
    src: string;
    alt: string;
  };
}
