import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './styles.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(element => {
        return (
          <li key={element.id}>
            <Link
              to={`/movies/${element.id}`}
              state={{ from: location }}
              className={css.homepage__link}
            >
              {element.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
