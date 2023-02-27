import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movieApi';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieReviews() {
      const response = await getMovieReviews(movieId);
      console.log(response);
      setReviews(response);
    }
    fetchMovieReviews();
  }, [movieId]);
  return (
    <ul>
      {reviews.map(el => {
        return (
          <li>
            <h4>Author: {el.name}</h4>
            <p>{el.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
