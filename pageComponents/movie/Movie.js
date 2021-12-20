import Head from '../../components/Head';
import ProductionInfo from '../../components/ProductionInfo';
import Reviews from '../../components/Reviews';
import Details from '../../components/Details';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CardList from '../../components/CardList';
import { CastSection } from './CastSection';
import styles from './Movie.module.css';

const Movie = ({ data }) => {
  //console.log(data);

  return (
    <>
      <Head title={`${data.title} (${data.release_date?.slice(0, 4)})`} />

      <Hero img={data.backdrop_path}>
        <div className={styles.hero}>
          <ProductionInfo movie={data} />
        </div>
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
          type="video"
        />
      </Section>

      <CastSection credits={data.credits} />

      <Section title="Reviews">
        <Reviews />
      </Section>

      <Section title="Recommendations">
        <CardList data={data.recommendations?.results} type="movie" />
      </Section>

      <Section title="Similar Movies">
        <CardList data={data.similar?.results} type="movie" />
      </Section>
    </>
  );
};

export default Movie;
