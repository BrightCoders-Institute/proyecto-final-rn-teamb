export interface PodcastEpisode {
  name: string;
  publisher: string;
  images: {url: string}[];
}

export interface Track {
  name: string;
  artists: {name: string}[];
  album: {images: {url: string}[]};
}

export interface Story {
  id: string;
  title: string;
  story: string;
  author: string;
  moral: string;
}
