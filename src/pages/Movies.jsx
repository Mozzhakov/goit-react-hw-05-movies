import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'service/movieApi';
import { SearchForm } from 'components/SearchForm';
import { MovieList } from 'components/MovieList';
import css from '../components/styles.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = value => {
    setSearchParams({ query: value });
  };
  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    async function fetchMovies() {
      const response = await getMovies(query);
      setMovies(response);
    }
    fetchMovies();
  }, [query]);
  return (
    <div>
      <h1 className={css.movies__title}>Search movies</h1>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && <MovieList movies={movies} />}
    </div>
  );
};
export default Movies;
