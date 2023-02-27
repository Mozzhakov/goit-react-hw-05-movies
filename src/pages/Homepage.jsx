import { getTrendMovies } from 'service/movieApi';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList';

export const Homepage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchTdendMovies() {
      const response = await getTrendMovies();
      console.log(response);
      setMovies(response);
    }
    fetchTdendMovies();
  }, []);
  return (
    <main>
      <h1>Trending movies</h1>
      <MovieList movies={movies} />
    </main>
  );
};
