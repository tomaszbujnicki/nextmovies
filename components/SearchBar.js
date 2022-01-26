import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import SVG_Search from '../assets/search.svg';
import useFetch from '../hooks/useFetch';
import SearchItem from './SearchItem';
import Modal from './Modal';
import styles from './styles/SearchBar.module.css';

const SearchBar = ({ isOpen, closeCallback }) => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState(null);
  const data = useFetch(query);
  const childRef = useRef(null);
  const router = useRouter();

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
        setQuery(`search/${trimedValue}`);
      } else {
        setQuery(null);
      }
    }, 200);
    return () => clearTimeout(timeout);
  }, [value]);

  const handleChange = (e) => {
    childRef.current.scrollTop = 0;
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    router.push(`/search/${query}`);
  };

  const Bar = (
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
        <SVG_Search className={styles.svg} />
      </button>
    </form>
  );

  return (
    <>
      {isOpen && (
        <Modal
          forwardedRef={childRef}
          closeCallback={closeCallback}
          barContent={Bar}
        >
          <div className={styles.bar}></div>
          <Content data={data} />
        </Modal>
      )}
    </>
  );
};

export default SearchBar;

const Content = ({ data }) => {
  if (!data) return null;
  return (
    <div className={styles.content} tabIndex="-1">
      {data?.results?.length > 0 && (
        <ul className={styles.list}>
          {data.results.map((item) => (
            <li key={`${item.media_type}_${item.id}`}>
              <SearchItem {...item} />
            </li>
          ))}
        </ul>
      )}

      {data.results.length === 0 && (
        <div className={styles.noResults}>No results found.</div>
      )}
    </div>
  );
};
