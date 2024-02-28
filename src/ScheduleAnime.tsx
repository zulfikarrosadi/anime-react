import { useState, ChangeEvent } from 'react';
import config from './config';
import fetchAnimes from './fetchAnimes';
import { AnimeList } from './components/AnimeList';

export default function ScheduleAnime() {
  const [day, setDay] = useState(getDay(new Date().getDay()));
  const { animes, isFetching, error } = fetchAnimes(
    `${config.SCHEDULE_ANIME_URL}${day}`,
  );

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
      {error && <p>{error.message}</p>}
      {isFetching && 'Loading...'}
      {animes && <AnimeList animes={animes} />}
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
