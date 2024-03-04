import { Form } from 'react-router-dom';
import config from '../config';

export default function SearchBar() {
  return (
    <>
      <Form action="/animes/search" method="get">
        <label htmlFor="animeTitle">Title</label>
        <input
          type="text"
          id="animeTitle"
          name="animeTitle"
          placeholder="Search your favorite anime"
        />
        <button>Search</button>
      </Form>
    </>
  );
}

export async function searchAnimeLoader({ request }) {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get('animeTitle');

  const responses = await fetch(`${config.BASE_URL}?q=${searchTerm}`);
  const anime = await responses.json();

  return anime.data;
}
