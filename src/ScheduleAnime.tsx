import { useState, useEffect, ChangeEvent } from 'react';
import config from './config';
import { animeType } from './FullAnimeList';

export default function ScheduleAnime() {
  const [anime, setAnime] = useState<animeType[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [day, setDay] = useState(getDay(new Date().getDay()));

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${config.SCHEDULE_ANIME_URL}${day}`, {
      signal: abortController.signal,
    })
      .then((responses) => {
        setIsFetching(true);
        return responses.json();
      })
      .then((anime) => setAnime(anime.data))
      .catch((error) => setError(error))
      .finally(() => {
        console.log(anime);
        setIsFetching(false);
      });
    console.log(day);
  }, [day]);

  function handleDayChange(e: ChangeEvent<HTMLSelectElement>) {
    setDay(getDay(Number(e.target.value)));
    console.log('handleDayChange', e.target.value);
  }

  return (
    <>
      <select
        name="days"
        id="days"
        value={new Date().getDay()}
        onChange={(e) => handleDayChange(e)}
      >
        <option value="0">sunday</option>
        <option value="1">monday</option>
        <option value="2">tuesday</option>
        <option value="3">wednesday</option>
        <option value="4">thursday</option>
        <option value="5">friday</option>
        <option value="6">saturday</option>
      </select>
      {isFetching && <p>'Loading...'</p>}
      {error && <p>{error}</p>}
      {anime &&
        anime.map((data) => {
          return (
            <div key={data.mal_id}>
              <h1>{data.title_english}</h1>
              <h2>{data.title_japanese}</h2>
              <h3>Score: {data.score}</h3>
              <p>
                Genres:{' '}
                {data.genres.map((genre) => {
                  return (
                    <a key={genre.mal_id} href={genre.url}>
                      {genre.name}{' '}
                    </a>
                  );
                })}
              </p>
              <img src={data.images.webp.large_image_url} alt="" />
            </div>
          );
        })}
    </>
  );
}

function getDay(dayInNumber: number) {
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  return days[dayInNumber];
}
