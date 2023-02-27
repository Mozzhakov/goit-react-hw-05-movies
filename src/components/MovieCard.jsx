// import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const MovieCard = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  console.log(genres);
  return (
    <>
      <img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      <h1>{title}</h1>
      <p>
        Score: <span>{vote_average}</span>
      </p>
      <h3>Overview: </h3>
      <span>{overview}</span>
      <h3>Genres: </h3>
      <span>
        {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </span>
    </>
  );
};
