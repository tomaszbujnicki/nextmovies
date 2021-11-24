import Head from '../../components/Head';
import Link from 'next/link';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';
import ProductionInfo from '../../components/ProductionInfo';
import Cast from '../../components/Cast';
import Background from '../../components/Background';
import Recommendations from '../../components/Recommendations';

export async function getServerSideProps(context) {
  const id = context.params.id;

  const data = await getData(
    `movie/${id}`,
    '&append_to_response=credits,videos,recommendations,images&include_image_language=null'
  );

  if (data) {
    return { props: { data } };
  }

  return redirect();
}

const Movie = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head title={`${data.title} (${data.release_date?.slice(0, 4)})`} />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
        <Background path={data.backdrop_path} />

        <ProductionInfo movie={data} />
      </div>
      <Cast cast={data.credits.cast} />
      <Recommendations data={data.recommendations?.results} />
    </>
  );
};

export default Movie;
