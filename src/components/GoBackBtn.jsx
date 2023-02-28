import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './styles.module.css';

export const GoBackBtn = ({ path }) => {
  return (
    <Link to={path} className={css.goBackBtn}>
      Go back
    </Link>
  );
};

GoBackBtn.propTypes = {
  path: PropTypes.object.isRequired,
};
