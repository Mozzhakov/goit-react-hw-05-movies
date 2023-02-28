import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './styles.module.css';

export const AdditionalInformation = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';
  return (
    <div>
      <h2 className={css.additional__title}>Additional information</h2>
      <ul>
        <li>
          <Link
            to="cast"
            state={{ from: backLink }}
            className={css.additional__link}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            state={{ from: backLink }}
            className={css.additional__link}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};
