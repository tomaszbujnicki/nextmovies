import React, { useEffect, useState, useRef } from 'react';
import { SearchIcon } from '../assets/SvgButtons';
import useFetch from '../hooks/useFetch';
import SearchItem from './SearchItem';
import styles from './styles/Search.module.css';

const Search = ({ isOpen }) => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState(null);
  const data = useFetch(query);
  const ref = useRef(null);

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
    <>
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
      </div>
      {isOpen && <Content data={data} />}
    </>
  );
};

export default Search;

const Content = ({ data }) => {
  const expanded = styles.content;
  const collapsed = styles.content + ' ' + styles.collapse;

  return (
    <div className={data ? expanded : collapsed}>
      <div className={styles.inner} tabIndex="-1">
        {data?.results?.length > 0 && (
          <ul className={styles.list}>
            {data.results.map((item) => (
              <li key={`${item.media_type}_${item.id}`}>
                <SearchItem {...item} />
              </li>
            ))}
          </ul>
        )}

        {data?.results?.length === 0 && (
          <div className={styles.noResults}>No results found.</div>
        )}
      </div>
    </div>
  );
};
