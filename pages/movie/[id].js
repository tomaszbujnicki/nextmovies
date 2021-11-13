import Link from 'next/link';
import Head from 'next/head';
import getData from '../../adapters/getData';
import DualBackground from '../../containers/DualBackground';

import redirect from '../../utilities/redirect';

import ProductionInfo from './ProductionInfo';

export async function getServerSideProps(context) {
  const id = context.params.id;

  const data = await getData(
    `movie/${id}`,
    '&append_to_response=credits,videos,recommendations'
  );

  if (data) {
    return { props: { data } };
  }

  return redirect();
}

const Movie = ({ data }) => {
  return (
    <>
      <Head>
        <title>
          {data.title} ({data.release_date?.slice(0, 4)}) - NextMovies
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
        <DualBackground
          path={data.backdrop_path}
          id={data.id}
          type="backdrop"
        />

        <ProductionInfo movie={data} />

        <Recommendations data={data.recommendations?.results} />
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
              <a>{movie.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
