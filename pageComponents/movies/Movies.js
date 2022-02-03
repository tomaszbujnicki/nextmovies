import { useRef } from 'react';
import Head from '../../components/Head';
import SearchItem from '../../components/SearchItem';
import styles from './Movies.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FilterForm from './FilterForm';

const Movies = ({ data }) => {
  const router = useRouter();
  const ref = useRef(null);

  const query = router.query;

  const queryString = router.asPath
    .replace(/\/movies\??/, '')
    .replace(/&?page=\d*/, '');

  const searchData = (values) => {
    console.log(values);

    let params = '';

    for (const [key, value] of Object.entries(values)) {
      console.log(`${key}: ${value}`);
      if (value?.length > 0) {
        params += key + '=' + value + '&';
      }
    }
    if (params.match('certification')) {
      console.log('YEA');
      params += 'certification_country=US';
    }
    params = params.replace(/\-/g, '.');

    router.push(`/movies?${params}`);
  };

  const page = query.page > 0 ? +query.page : 1;

  const total_pages = data.total_pages < 500 ? data.total_pages : 500;

  return (
    <>
      <Head title="Movies" />
      <div ref={ref} className={styles.root}>
        <aside className={styles.sideContainer}>
          <FilterForm handleSubmit={searchData} query={query} />
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
