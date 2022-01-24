import CardList from '../../components/CardList';
import Head from '../../components/Head';
import Section from '../../components/Section';
import ProductionBanner from '../../components/ProductionBanner';
import styles from './Home.module.css';

const Home = ({
  popularForKids,
  inTheatres,
  popular,
  upcoming,
  tvPopular,
  tvOnAir,
  tvLatest,
}) => {
  return (
    <>
      <Head fullTitle="NextMovies - Movies, TV-Shows, People, Ratings, Reviews" />

      <ProductionBanner data={popular.results} variant="2" type="movie" />

      <Heading />

      <ProductionBanner data={tvPopular.results} variant="1" type="tv" />

      <Section title="Now Playing in Theatres">
        <CardList data={inTheatres.results} type="movie" />
      </Section>

      <Section title="Upcoming Movies">
        <CardList data={upcoming.results} type="movie" />
      </Section>

      <Section title="Popular Movies for Kids">
        <CardList data={popularForKids?.results} type="movie" />
      </Section>
    </>
  );
};

export default Home;

const Heading = () => (
  <h1 className={styles.heading}>
    <span>Discover the best</span>
    <span> Movies and TV Shows </span>
  </h1>
);
