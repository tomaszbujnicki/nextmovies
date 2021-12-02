import Head from '../../components/Head';
import Link from 'next/link';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';
import ProductionInfo from '../../components/ProductionInfo';
import Cast from '../../components/Cast';
import Recommendations from '../../components/Recommendations';
import Reviews from '../../components/Reviews';
import Videos from '../../components/Videos';
import Details from '../../components/Details';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

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

      <Hero
        img={data.backdrop_path}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <ProductionInfo movie={data} />
      </Hero>

      <Details />
      <Videos data={data.videos?.results} />
      <Cast cast={data.credits.cast} />
      <Reviews />

      <Section title="Similar Movies">
        <Recommendations data={data.recommendations?.results} />
      </Section>
    </>
  );
};

export default Movie;
