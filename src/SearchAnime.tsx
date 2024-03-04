import { useLoaderData } from 'react-router-dom';
import { AnimeList, animeType } from './components/AnimeList';

export default function SearchAnime() {
  const searchResult = useLoaderData() as animeType[];

  return (
    <>
      <AnimeList animes={searchResult} />
    </>
  );
}
