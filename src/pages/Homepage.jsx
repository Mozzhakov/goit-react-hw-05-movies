import { getTrendMovies } from 'service/movieApi';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList';
import css from '../components/styles.module.css';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchTdendMovies() {
      const response = await getTrendMovies();
      setMovies(response);
    }
    fetchTdendMovies();
  }, []);
  return (
    <main>
      <h1 className={css.homepage__title}>Trending movies</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Homepage;
