export interface BitlyResponse {
  ok: boolean;
  id?: string;
  link?: string;
};

export interface ShortenLink {
  link: string;
  shortLink: string;
  copied: boolean;
};

export interface ShorterLinksContainer {
  handleCopy: (index: number) => void,
  handleCleanHistory: () => void,
  shortenLinks: ShortenLink[]
};