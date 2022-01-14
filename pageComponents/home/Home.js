import CardList from '../../components/CardList';
import Head from '../../components/Head';
import Section from '../../components/Section';
import ProductionBanner from '../../components/ProductionBanner';

const Home = ({ popularForKids, inTheatres, popular, upcoming }) => {
  return (
    <>
      <Head fullTitle="NextMovies - Movies, TV-Shows, People, Ratings, Reviews" />

      <ProductionBanner movies={popular.results} />

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
