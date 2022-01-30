import { useRef, useState, useEffect } from 'react';
import Head from '../../components/Head';
import SearchItem from '../../components/SearchItem';
import styles from './Movies.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MOVIE_GENRES_ARRAY, MOVIE_CERTIFICATION_ARRAY } from '../../constants';
import Rating from '../../components/Rating';

const Movies = ({ data }) => {
  const router = useRouter();
  const ref = useRef(null);

  const query = router.query;

  const queryString = router.asPath
    .replace(/\/movies\??/, '')
    .replace(/&?page=\d*/, '');

  const page = query.page > 0 ? +query.page : 1;

  const total_pages = data.total_pages < 500 ? data.total_pages : 500;

  return (
    <>
      <Head title="Movies" />
      <div ref={ref} className={styles.root}>
        <aside className={styles.sideContainer}>
          <h2>Filters</h2>
          <form className={styles.form}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Genres</legend>
              <ul className={styles.checkboxList}>
                {MOVIE_GENRES_ARRAY.map((genre) => (
                  <li key={genre.id} className={styles.checkboxItem}>
                    <input
                      className={styles.checkboxItemInput}
                      type="checkbox"
                      id={`genre_${genre.id}`}
                      name="genre"
                      value={genre.id}
                    />
                    <label
                      className={styles.checkboxItemLabel}
                      htmlFor={`genre_${genre.id}`}
                    >
                      {genre.name}
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Release Dates</legend>
            </fieldset>

            <RatingFieldset />

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Certifications</legend>
              <ul className={styles.checkboxList}>
                {MOVIE_CERTIFICATION_ARRAY.map((certification) => (
                  <li key={certification.order} className={styles.checkboxItem}>
                    <input
                      className={styles.checkboxItemInput}
                      type="checkbox"
                      id={`certification_${certification.order}`}
                      name="certification"
                      value={certification.order}
                    />
                    <label
                      className={styles.checkboxItemLabel}
                      htmlFor={`certification_${certification.order}`}
                    >
                      {certification.certification}
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Keywords</legend>
            </fieldset>
          </form>
        </aside>

        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Movies</h1>
          <Content data={data} />
          <Pagination
            total_pages={total_pages}
            query={queryString}
            page={page}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;

const Content = ({ data }) => {
  return (
    <div className={styles.content} tabIndex="-1">
      {data?.results?.length > 0 && (
        <ul className={styles.list}>
          {data.results.map((item) => (
            <li key={item.id}>
              <SearchItem {...item} media_type="movie" />
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

const Pagination = ({ total_pages, query, page }) => {
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
        <Link href={`/movies?${query}&page=${pages[i]}`}>
          <a
            className={
              pages[i] === page
                ? styles.Pagination__element + ' ' + styles.active
                : styles.Pagination__element
            }
          >
            {pages[i]}
          </a>
        </Link>

        {pages[i] + 1 !== pages[i + 1] && i !== pages.length - 1 && (
          <div className={styles.dots}>...</div>
        )}
      </li>
    );
  }

  return <ul className={styles.Pagination}>{buttons}</ul>;
};

const RatingFieldset = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const refMin = useRef(null);
  const refMax = useRef(null);

  useEffect(() => {
    refMin.current.value = min;
    refMax.current.value = max;
  }, [min, max]);

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Rating</legend>
      <div className={styles.ratingContainer}>
        <label htmlFor="rating" className={styles.ratingLabel}>
          Minimum Stars
        </label>
        <input
          ref={refMin}
          type="range"
          id="rating"
          name="rating"
          min="1"
          max="10"
          step="1"
          className={styles.ratingInput}
          onChange={({ target }) => {
            if (+target.value > max) {
              setMin(+max);
              refMin.current.value = max;
            } else {
              setMin(+target.value);
            }
          }}
        />
        <Rating rating={min} />
      </div>
      <div className={styles.ratingContainer}>
        <label htmlFor="rating" className={styles.ratingLabel}>
          Maximum Stars
        </label>
        <input
          ref={refMax}
          type="range"
          id="rating"
          name="rating"
          min="1"
          max="10"
          step="1"
          className={styles.ratingInput}
          onChange={({ target }) => {
            if (+target.value < min) {
              setMax(+min);
              refMax.current.value = min;
            } else {
              setMax(+target.value);
            }
          }}
        />
        <Rating rating={max} />
      </div>
    </fieldset>
  );
};
