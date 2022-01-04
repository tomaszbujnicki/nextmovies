import Head from '../../components/Head';
import ProductionInfo from '../../components/ProductionInfo';
import Reviews from '../../components/Reviews';
import Details from '../../components/Details';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CardList from '../../components/CardList';
import { CastSection } from './CastSection';
import styles from './Tv.module.css';

const Tv = ({ data }) => {
  console.log(data);

  return (
    <>
      <Head title={`${data.name} (${data.first_air_date?.slice(0, 4)})`} />

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
        <CardList data={data.recommendations?.results} type="tv" />
      </Section>

      <Section title="Similar TV Shows">
        <CardList data={data.similar?.results} type="tv" />
      </Section>
    </>
  );
};

export default Tv;
