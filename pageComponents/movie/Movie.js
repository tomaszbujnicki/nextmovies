import Head from '../../components/Head';
import ProductionInfo from '../../components/ProductionInfo';
import Details from '../../components/Details';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CardList from '../../components/CardList';
import { CastSection } from './CastSection';
import styles from './Movie.module.css';

const Movie = ({ data }) => {
  console.log(data);

  return (
    <>
      <Head title={`${data.title} (${data.release_date?.slice(0, 4)})`} />

      <Hero img={data.backdrop_path}>
        <div className={styles.hero}>
          <ProductionInfo movie={data} />
        </div>
      </Hero>

      <Section>
        <Details data={data} />
      </Section>

      {data.videos?.results.length > 0 && (
        <Section title="Videos">
          <CardList
            data={data.videos.results
              .map((video) => ({
                ...video,
                videoKey: video.key,
              }))
              .reverse()}
            type="video"
          />
        </Section>
      )}

      {(data.credits?.cast.length > 0 || data.credits?.crew.length > 0) && (
        <CastSection credits={data.credits} />
      )}

      {data.reviews?.results.length > 0 && (
        <Section title="Reviews">
          <CardList data={data.reviews.results} type="review" />
        </Section>
      )}

      {data.recommendations?.results.length > 0 && (
        <Section title="Recommendations">
          <CardList data={data.recommendations.results} type="movie" />
        </Section>
      )}

      {data.similar?.results.length > 0 && (
        <Section title="Similar Movies">
          <CardList data={data.similar.results} type="movie" />
        </Section>
      )}
    </>
  );
};

export default Movie;
