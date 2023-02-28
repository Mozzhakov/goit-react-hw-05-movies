import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'service/movieApi';
import css from './styles.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCast() {
      const response = await getMovieCast(movieId);
      setCast(response.cast);
    }
    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      {cast.length > 0 ? (
        <ul className={css.cast__list}>
          {cast.map(element => {
            return (
              <li key={element.cast_id} className={css.cast__item}>
                <img
                  src={
                    element.profile_path
                      ? `https://image.tmdb.org/t/p/original/${element.profile_path}`
                      : `${require('../images/no-picture.jpg')}`
                  }
                  alt={element.name}
                  width="100"
                />
                <p>{element.name}</p>
                <p className={css.cast__hero}>{element.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.reviews__errorText}>No cast yet</p>
      )}
    </div>
  );
};

export default Cast;
