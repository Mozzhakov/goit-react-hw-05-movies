import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'service/movieApi';
import { SearchForm } from 'components/SearchForm';
import { MovieList } from 'components/MovieList';

export const Movies = () => {
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
    <>
      <h1>Search movies</h1>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};
