import Head from '../../components/Head';
import Link from 'next/link';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';
import ProductionInfo from '../../components/ProductionInfo';
import Cast from '../../components/Cast';
import Background from '../../components/Background';
import Recommendations from '../../components/Recommendations';
import Reviews from '../../components/Reviews';
import Videos from '../../components/Videos';
import Details from '../../components/Details';
import { useRef } from 'react';

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
  const heroElement = useRef(null);
  if (heroElement.current) heroElement.current.scrollIntoView();
  console.log(data);
  return (
    <>
      <Head title={`${data.title} (${data.release_date?.slice(0, 4)})`} />
      <div
        ref={heroElement}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Background path={data.backdrop_path} />

        <ProductionInfo movie={data} />
      </div>
      <Details />
      <Videos data={data.videos?.results} />
      <Cast cast={data.credits.cast} />
      <Reviews />
      <Recommendations data={data.recommendations?.results} />
    </>
  );
};

export default Movie;
