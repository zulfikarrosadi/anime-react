import { useEffect, useMemo, useState } from 'react';
import { animeType } from './components/AnimeList';

export default function fetchAnimes(url: string) {
  const abortController = new AbortController();
  const [animes, setAnimes] = useState<animeType[]>();
  const [error, setError] = useState<Error>();
  const [isFetching, setIsFetching] = useState(false);

  const fetchDataInternal = useMemo(
    () => async () => {
      setIsFetching((prevIsFetching) => {
        return (prevIsFetching = true);
      });
      try {
        const responses = await fetch(url, { signal: abortController.signal });
        const animes = await responses.json();
        return { animes, isFetching, error: null };
      } catch (error: any) {
        return { animes: null, isFetching, error };
      }
    },
    [url],
  );

  useEffect(() => {
    fetchDataInternal().then((responses) => {
      setAnimes(responses.animes.data);
      setError(responses.error);
      setIsFetching((prevIsFetching) => {
        return (prevIsFetching = false);
      });
    });
  }, [url, fetchDataInternal]);

  return { animes, isFetching, error };
}

export interface AnimeData {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  } & animeType;
}
