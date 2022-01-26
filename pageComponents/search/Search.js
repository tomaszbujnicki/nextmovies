import { useState } from 'react';
import Head from '../../components/Head';
import SearchItem from '../../components/SearchItem';
import styles from './Search.module.css';

const Search = (props) => {
  const [media_type, setMedia_type] = useState('movie');
  return (
    <>
      <Head title={props.query} />

      <div className={styles.root}>
        <div className={styles.sideContainer}>
          <div className={styles.buttonList}>
            <button
              className={
                media_type === 'movie'
                  ? styles.button + ' ' + styles.buttonActive
                  : styles.button
              }
              onClick={() => setMedia_type('movie')}
            >
              <span>Movie</span>
              <span>{props.movie.total_results}</span>
            </button>
            <button
              className={
                media_type === 'tv'
                  ? styles.button + ' ' + styles.buttonActive
                  : styles.button
              }
              onClick={() => setMedia_type('tv')}
            >
              <span>TV Shows</span>
              <span>{props.tv.total_results}</span>
            </button>
            <button
              className={
                media_type === 'person'
                  ? styles.button + ' ' + styles.buttonActive
                  : styles.button
              }
              onClick={() => setMedia_type('person')}
            >
              <span>People</span>
              <span>{props.person.total_results}</span>
            </button>
          </div>
        </div>

        <div className={styles.mainContainer}>
          <Content data={props[media_type]} media_type={media_type} />
        </div>
      </div>
    </>
  );
};

export default Search;

const Content = ({ data, media_type }) => {
  return (
    <div className={styles.content} tabIndex="-1">
      {data?.results?.length > 0 && (
        <ul className={styles.list}>
          {data.results.map((item) => (
            <li key={`${media_type}_${item.id}`}>
              {console.log(`${media_type}_${item.id}`)}
              <SearchItem {...item} media_type={media_type} />
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
