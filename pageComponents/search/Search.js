import { useState, useRef } from 'react';
import Head from '../../components/Head';
import Wrapper from '../../components/Wrapper';
import SearchItem from '../../components/SearchItem';
import useFetch from '../../hooks/useFetch';
import styles from './Search.module.css';

const Search = (props) => {
  const [state, setState] = useState({
    media_type: 'movie',
    query: null,
    page: 1,
  });

  const ref = useRef(null);

  const fetchedData = useFetch(state.query);

  const data =
    state.page > 1 && fetchedData ? fetchedData : props[state.media_type];

  const fetch = (page) => {
    if (ref.current) {
      setState((state) => ({
        ...state,
        page: page,
        query: `search/${state.media_type}/&query=${props.query}&page=${page}`,
      }));
    }

    ref.current.scrollIntoView();
  };

  return (
    <Wrapper>
      <Head title={props.query} />

      <h1 className={styles.title}>Results for: {props.query}</h1>

      <div className={styles.root}>
        <div className={styles.sideContainer}>
          <div className={styles.buttonList}>
            <button
              className={
                state.media_type === 'movie'
                  ? styles.button + ' ' + styles.buttonActive
                  : styles.button
              }
              onClick={() => {
                setState({ media_type: 'movie', query: null, page: 1 });
              }}
            >
              <span>Movie</span>
              <span>{props.movie.total_results}</span>
            </button>
            <button
              className={
                state.media_type === 'tv'
                  ? styles.button + ' ' + styles.buttonActive
                  : styles.button
              }
              onClick={() => {
                setState({ media_type: 'tv', query: null, page: 1 });
              }}
            >
              <span>TV Shows</span>
              <span>{props.tv.total_results}</span>
            </button>
            <button
              className={
                state.media_type === 'person'
                  ? styles.button + ' ' + styles.buttonActive
                  : styles.button
              }
              onClick={() => {
                setState({ media_type: 'person', query: null, page: 1 });
              }}
            >
              <span>People</span>
              <span>{props.person.total_results}</span>
            </button>
          </div>
        </div>

        <div ref={ref} className={styles.mainContainer}>
          <Content data={data} media_type={state.media_type} />
          <Pagination
            page={state.page}
            total_pages={data?.total_pages}
            callback={fetch}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Search;

const Content = ({ data, media_type }) => {
  return (
    <div tabIndex="-1">
      {data?.results?.length > 0 && (
        <ul className={styles.list}>
          {data.results.map((item) => (
            <li key={`${media_type}_${item.id}`}>
              <SearchItem {...item} media_type={media_type} />
            </li>
          ))}
        </ul>
      )}

      {data?.results?.length === 0 && (
        <div className={styles.noResults}>No results found.</div>
      )}
    </div>
  );
};

const Pagination = ({ page, total_pages, callback }) => {
  let pages = [];

  if (total_pages < 7) {
    pages = [1, 2, 3, 4, 5, 6];
    pages.length = total_pages;
  } else {
    pages = [
      1,
      2,
      page - 1,
      page,
      page + 1,
      page + 2,
      total_pages - 1,
      total_pages,
    ];

    const uniqueInRange = (value, index, self) => {
      return self.indexOf(value) === index && value > 0 && value <= total_pages;
    };

    pages = pages.filter(uniqueInRange);
  }

  const buttons = [];
  for (let i = 0; i < pages.length; i++) {
    buttons.push(
      <li key={i} className={styles.li}>
        <button
          onClick={() => callback(pages[i])}
          className={
            pages[i] === page
              ? styles.Pagination__element + ' ' + styles.active
              : styles.Pagination__element
          }
        >
          {pages[i]}
        </button>
        {pages[i] + 1 !== pages[i + 1] && i !== pages.length - 1 && (
          <div className={styles.dots}>...</div>
        )}
      </li>
    );
  }

  return <ul className={styles.Pagination}>{buttons}</ul>;
};
