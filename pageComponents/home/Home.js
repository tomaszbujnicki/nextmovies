import Head from '../../components/Head';
import Section from '../../components/Section';

const Home = ({ data }) => {
  console.log(data);

  return (
    <>
      <Head fullTitle="NextMovies - Movies, TV-Shows, People, Ratings, Reviews" />

      <Section title="Details"></Section>
    </>
  );
};

export default Home;
