import PropTypes from 'prop-types';
import css from './styles.module.css';

export const MovieCard = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <div className={css.movieCard}>
      <div>
        <img
          alt={title}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : `${require('../images/no-picture.jpg')}`
          }
          width="240"
          className={css.movieCard__img}
        />
      </div>
      <div>
        <h1 className={css.movieCard__title}>{title}</h1>
        <p>
          Score: <span>{vote_average}</span>
        </p>
        <h3>Overview: </h3>
        <span>{overview}</span>
        <h3>Genres: </h3>
        <span>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
