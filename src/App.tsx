import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>Hello Home</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/animes'}>Animes</Link>
          </li>
          <li>
            <Link to={'/animes/schedule'}>Schedule</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
