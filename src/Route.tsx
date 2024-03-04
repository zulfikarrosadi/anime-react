import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import FullAnimeList from './FullAnimeList.tsx';
import ScheduleAnime from './ScheduleAnime.tsx';
import ErrorPage from './ErrorPage.tsx';
import SearchAnime from './SearchAnime.tsx';
import { searchAnimeLoader } from './components/SearchBar.tsx';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/animes',
        element: <FullAnimeList />,
      },
      {
        path: '/animes/schedule',
        element: <ScheduleAnime />,
      },
      {
        path: '/animes/search',
        element: <SearchAnime />,
        loader: searchAnimeLoader,
      },
    ],
  },
]);
