import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(element => {
        return (
          <li key={element.id}>
            <Link to={`/movies/${element.id}`} state={{ from: location }}>
              {element.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
