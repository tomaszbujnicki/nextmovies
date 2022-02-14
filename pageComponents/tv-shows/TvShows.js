import Head from '../../components/Head';
import SearchItem from '../../components/SearchItem';
import styles from './TvShows.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FilterForm from './FilterForm';

const getParam = (key, value) => {
  switch (key) {
    case 'with_genres':
      if (value?.length > 0) {
        return 'with_genres=' + value + '&';
      }
      return '';

    case 'with_keywords':
      if (value?.length > 0) {
        const keywords = value.map((keyword) => keyword.id);
        return 'with_keywords=' + keywords + '&';
      }
      return '';

    case 'certification':
      if (value?.length > 0) {
        return 'certification=' + value + '&certification_country=US&';
      }
      return '';

    case 'primary_release_date_gte':
      if (value?.length === 4) {
        return 'primary_release_date.gte=' + value + '-01-01&';
      }
      return '';

    case 'primary_release_date_lte':
      if (value?.length === 4) {
        return 'primary_release_date.lte=' + value + '-12-31&';
      }
      return '';

    case 'vote_average_gte':
      if (parseFloat(value) <= 10) {
        return 'vote_average.gte=' + value + '&';
      }
      return '';

    case 'vote_average_lte':
      if (parseFloat(value) >= 1 && parseFloat(value) < 10) {
        return 'vote_average.lte=' + value + '&';
      }
      return '';

    default:
      return '';
  }
};

const TvShows = ({ data }) => {
  const router = useRouter();

  const query = router.query;

  const queryString = router.asPath
    .replace(/\/movies\??/, '')
    .replace(/&?page=\d*/, '');

  const searchData = (values) => {
    console.log(values);

    let params = '';

    for (const [key, value] of Object.entries(values)) {
      console.log(`${key}: ${value}`);

      params += getParam(key, value);
    }

    router.push(`/tv-shows?${params}`);
  };

  const page = query.page > 0 ? +query.page : 1;

  const total_pages = data.total_pages < 500 ? data.total_pages : 500;

  return (
    <>
      <Head title="Tv-Shows" />

      <h1 className={styles.title}>Tv-Shows</h1>

      <div className={styles.root}>
        <aside className={styles.sideContainer}>
          <FilterForm handleSubmit={searchData} query={query} />
        </aside>

        <div className={styles.mainContainer}>
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

export default TvShows;

const Content = ({ data }) => {
  return (
    <div tabIndex="-1">
      {data?.results?.length > 0 && (
        <ul className={styles.list}>
          {data.results.map((item) => (
            <li key={item.id}>
              <SearchItem {...item} media_type="tv" />
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
