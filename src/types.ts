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

export interface BaseLayout extends GlobalHead, themeColor {}

export interface CategoryList {
  categoryHref?: string;
  category?: string;
}

export interface TagsList {
  tagHrefs?: string[] | undefined;
  tags?: string[];
}
