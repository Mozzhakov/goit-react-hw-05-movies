import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movieApi';
import { nanoid } from 'nanoid';
import css from './styles.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieReviews() {
      const response = await getMovieReviews(movieId);
      setReviews(response.results);
    }
    fetchMovieReviews();
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.reviews__list}>
          {reviews.map(el => {
            return (
              <li key={nanoid()}>
                <b>Author: {el.author}</b>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.reviews__errorText}>No reviews yet</p>
      )}
    </>
  );
};

export default Reviews;
