import { MovieCard } from 'components/MovieCard';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { GoBackBtn } from 'components/GoBackBtn';
import { getFullInfo } from 'service/movieApi';
import { AdditionalInformation } from 'components/AdditionalInformation';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    async function fetchFullInfo() {
      const response = await getFullInfo(movieId);
      setDetails(response);
    }
    fetchFullInfo();
  }, [movieId]);

  return (
    <div>
      <GoBackBtn path={location?.state?.from ?? '/'} />
      <MovieCard movieDetails={details} />
      <AdditionalInformation />
      <Outlet />
    </div>
  );
};
export default MovieDetails;
