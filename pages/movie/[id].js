import Head from '../../components/Head';
import Link from 'next/link';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';
import ProductionInfo from '../../components/ProductionInfo';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import Details from '../../components/Details';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Button from '../../components/Button';
import CardList from '../../components/CardList';
import styles from './movie.module.css';
import PersonCard from '../../components/PersonCard';
import ProductionCard from '../../components/ProductionCard';
import VideoCard from '../../components/VideoCard';

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

      <Section title="Details">
        <Details />
      </Section>

      <Section title="Videos">
        <CardList
          data={data.videos?.results
            .map((video) => ({
              ...video,
              videoKey: video.key,
            }))
            .reverse()}
          Card={VideoCard}
          cardWidth={480}
        />
      </Section>

      <Section title="Cast">
        <CardList data={data.credits.cast} Card={PersonCard} cardWidth={185} />

        <Button
          className={styles.button}
          onClick={() => setValue(<Cast data={data.credits} />)}
        >
          View full Cast & Crew
        </Button>
      </Section>

      <Section title="Reviews">
        <Reviews />
      </Section>

      <Section title="Similar Movies">
        <CardList
          data={data.recommendations?.results}
          Card={ProductionCard}
          cardWidth={185}
        />
      </Section>
    </>
  );
};

export default Movie;
