export function AnimeList({ animes }: { animes: animeType[] }) {
  return (
    <>
      {animes.map((anime) => {
        return (
          <div key={anime.mal_id}>
            <h1>{anime.title_english}</h1>
            <h2>{anime.title_japanese}</h2>
            <h3>Score: {anime.score}</h3>
            <p>
              Genres:{' '}
              {anime.genres.map((genre) => {
                return (
                  <a key={genre.mal_id} href={genre.url}>
                    {genre.name}{' '}
                  </a>
                );
              })}
            </p>
            <img src={anime.images.webp.large_image_url} alt="" />
          </div>
        );
      })}
    </>
  );
}

export type animeType = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  titles: {
    type: string;
    title: string;
  }[];
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: 'TV';
  source: string;
  episodes: number;
  status: string;
  airing: true;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
      string: string;
    };
  };
  duration: string;
  rating: 'G - All Ages';
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: 'summer' | 'winter' | 'fall' | 'spring';
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  studios: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: {
    mal_id: 0;
    type: string;
    name: string;
    url: string;
  }[];
  streaming: [];
};
