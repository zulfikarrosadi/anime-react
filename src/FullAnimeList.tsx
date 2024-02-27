import { useEffect, useState } from 'react';
import config from './config';
import { AnimeList, animeType } from './components/AnimeList';

export default function FullAnimeList() {
  const [animes, setAnimes] = useState<animeType[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setIsFetching(true);
    const abortController = new AbortController();
    fetch(config.BASE_URL, { signal: abortController.signal })
      .then((responses) => {
        if (!responses.ok) {
          throw new Error(
            "There's an error when fetching data, please try again...",
          );
        }
        return responses.json();
      })
      .then((anime) => {
        setAnimes(anime.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsFetching(false));
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {isFetching && 'Loading...'}
      {error && <p>{error}</p>}
      {animes && <AnimeList animes={animes} />}
    </>
  );
}
