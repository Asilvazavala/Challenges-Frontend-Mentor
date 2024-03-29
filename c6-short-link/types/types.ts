export interface ShortenLink {
  link: string;
  shortLink: string;
  copied: boolean;
}

export interface ShorterLinksContainer {
  handleCopy: (index: number) => void;
  handleCleanHistory: () => void;
  shortenLinks: ShortenLink[];
  isLoading?: boolean;
}

export interface LinkData {
  originalURL: string;
  shortLink: string;
}
