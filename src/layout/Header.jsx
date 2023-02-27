import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Movies App</Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
