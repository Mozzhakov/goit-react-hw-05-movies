import { Routes, Route, Navigate } from 'react-router-dom';
// import { Homepage } from 'pages/Homepage';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Movies } from 'pages/Movies';
import { Layout } from 'layout/Layout';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
import { lazy } from 'react';
import css from './styles.module.css';

const Homepage = lazy(() => import('pages/Homepage'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
