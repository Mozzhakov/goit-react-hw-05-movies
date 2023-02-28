import { NavLink, Link } from 'react-router-dom';
import css from '../components/styles.module.css';

export const Header = () => {
  return (
    <header>
      <div className={css.header}>
        <Link to="/" className={css.header__logo}>
          Movies App
        </Link>
        <nav className={css.heared__nav}>
          <ul className={css.heared__list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? css.activeHeared__link : css.heared__link
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? css.activeHeared__link : css.heared__link
                }
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
