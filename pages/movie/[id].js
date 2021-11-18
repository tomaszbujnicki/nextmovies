import Link from 'next/link';
import Head from 'next/head';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';
import ProductionInfo from './ProductionInfo';
import { getImgSrc } from '../../utilities';
import Cast from '../../containers/Cast';
import Background from '../../components/Background';

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
  const src = getImgSrc({
    path: data.backdrop_path,
    type: 'backdrop',
  });

  console.log(data);
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
          alignItems: 'flex-end',
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
        <Background src={src} />

        <ProductionInfo movie={data} />

        <Recommendations data={data.recommendations?.results} />
      </div>
      <Cast cast={data.credits.cast} />
      <Recommendations data={data.recommendations?.results} />
    </>
  );
};

export default Movie;

const Recommendations = ({ data }) => {
  if (!Array.isArray(data)) return null;
  return (
    <div>
      <ul style={{ color: 'transparent' }}>
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
