import { useState } from 'react';
import css from './styles.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          placeholder="Enter movie name"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className={css.form__input}
        />
        <button type="submit" className={css.form__btn}>
          Search
        </button>
      </form>
    </div>
  );
};
