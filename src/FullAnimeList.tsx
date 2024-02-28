import config from './config';
import { AnimeList } from './components/AnimeList';
import fetchAnimes from './fetchAnimes';

export default function FullAnimeList() {
  const { animes, isFetching, error } = fetchAnimes(config.BASE_URL);

  return (
    <>
      {isFetching && 'Loading...'}
      {error && <p>{error.message}</p>}
      {animes && <AnimeList animes={animes} />}
    </>
  );
}
