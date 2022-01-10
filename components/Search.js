import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../assets/SvgButtons';
import useFetch from '../hooks/useFetch';
import MovieItem from './MovieItem';
import styles from './styles/Search.module.css';

const Search = ({ isOpen }) => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState(null);
  const data = useFetch(query);

  console.log(data);

  useEffect(() => {
    if (!isOpen) {
      setQuery(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const trimedValue = value.trim();
      if (trimedValue.length > 0) {
        setQuery(`search/${value}`);
      } else {
        setQuery(null);
      }
    }, 200);
    return () => clearTimeout(timeout);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(`search/${value}`);
  };

  return (
    <div className={isOpen ? styles.root : `${styles.root} ${styles.hide}`}>
      {isOpen && (
        <div className={styles.bar}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              autoFocus
              onChange={handleChange}
              className={styles.input}
              type="text"
              id="search"
              name="search"
              placeholder="Search for Movies, Tv-Shows, People"
            />
            <button className={styles.button} type="submit">
              <SearchIcon className={styles.svg} />
            </button>
          </form>
        </div>
      )}
      {data && <Content data={data} />}
    </div>
  );
};

export default Search;

const Content = ({ data }) => {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {data.results.map((item) => (
          <li key={`${item.media_type}_${item.id}`}>
            {item.media_type === 'movie' ? (
              <MovieItem {...item} />
            ) : item.media_type === 'tv' ? (
              <Tv data={item} />
            ) : item.media_type === 'person' ? (
              <Person data={item} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Person = ({ data }) => {
  return <>Person: {data.name}</>;
};
const Tv = ({ data }) => {
  return <>Tv: {data.name}</>;
};
