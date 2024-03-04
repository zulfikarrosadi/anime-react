import { Outlet, NavLink } from 'react-router-dom';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <>
      <h1>Hello Home</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={'/animes'}>Animes</NavLink>
          </li>
          <li>
            <NavLink to={'/animes/schedule'}>Schedule</NavLink>
          </li>
        </ul>
      </nav>
      <SearchBar />
      <Outlet />
    </>
  );
}
