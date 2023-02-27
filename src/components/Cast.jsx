import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'service/movieApi';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    async function fetchMovieCast() {
      const response = await getMovieCast(movieId);
      console.log(response);
      setCast(response.cast);
    }
    fetchMovieCast();
  }, [movieId]);
  return (
    <ul>
      {cast.map(element => {
        return (
          <li key={element.cast_id}>
            <img alt={element.name} width="185" />
            <p>{element.name}</p>
            <p>{element.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
