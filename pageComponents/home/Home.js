import CardList from '../../components/CardList';
import Head from '../../components/Head';
import Section from '../../components/Section';

const Home = ({ popularity, popularKids, inTheatres }) => {
  return (
    <>
      <Head fullTitle="NextMovies - Movies, TV-Shows, People, Ratings, Reviews" />

      <Section title="inTheatres">
        <CardList data={inTheatres.results} type="movie" />
      </Section>

      <Section title="popularity">
        <CardList data={popularity.results} type="movie" />
      </Section>

      <Section title="popularKids">
        <CardList data={popularKids?.results} type="movie" />
      </Section>
    </>
  );
};

export default Home;
