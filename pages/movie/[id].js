import Link from 'next/link';
import Head from 'next/head';
import getData from '../../adapters/getData';
import DualBackground from '../../containers/DualBackground';

import styles from './movie.module.css';

export async function getServerSideProps(context) {
  const id = context.params.id;
  const data = await getData(
    `movie/${id}`,
    '&append_to_response=credits,videos,recommendations'
  );
  return { props: { data, id } };
}

const Movie = ({ data, id }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>
          {data.title} ({data.release_date.slice(0, 4)}) - NextMovies
        </title>
      </Head>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
        <DualBackground path={data?.backdrop_path} id={id} type="backdrop" />

        <Details movie={data} />

        <Recommendations data={data?.recommendations?.results} />
      </div>

      <div style={{ fontSize: 150, color: 'white' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        ></div>
      </div>
    </>
  );
};

export default Movie;

const Recommendations = ({ data }) => {
  if (!Array.isArray(data)) return null;
  return (
    <div>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Details = ({ movie }) => {
  const {
    adult,
    title,
    backdrop_path,
    poster_path,
    belongs_to_collection,
    budget,
    genres,
    homepage,
  } = movie;

  return (
    <div className={styles.details}>
      <h3 style={{ fontSize: 40, padding: 20 }}>{title}</h3>
      <div>{adult ? '18+' : 'all'}</div>

      <div>
        {belongs_to_collection ? belongs_to_collection.name : 'no collection'}
      </div>
      <div>
        {budget > 0
          ? budget.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })
          : '-'}
      </div>
      <div>
        {genres &&
          genres.map((item, index) => <span key={index}>{item.name}, </span>)}
      </div>
      {homepage && (
        <div>
          <a target="_blank" href={homepage} rel="noopener noreferrer">
            homepage
          </a>
        </div>
      )}
    </div>
  );
};
