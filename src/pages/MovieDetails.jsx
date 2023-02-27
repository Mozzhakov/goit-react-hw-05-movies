import { MovieCard } from 'components/MovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFullInfo } from 'service/movieApi';
import { AdditionalInformation } from 'components/AdditionalInformation';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchFullInfo() {
      const response = await getFullInfo(movieId);
      console.log(response);
      setDetails(response);
    }
    fetchFullInfo();
  }, [movieId]);

  return (
    <div>
      <MovieCard movieDetails={details} />
      <AdditionalInformation />
    </div>
  );
};
