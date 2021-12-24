import Home from '../pageComponents/home/Home';
import getData from '../adapters/getData';

export async function getServerSideProps() {
  const [popularity, popularKids, inTheatres] = await Promise.all([
    getData(`discover/movie`, '&sort_by=popularity.desc'),
    getData(
      `discover/movie`,
      '&certification_country=US&certification.lte=G&sort_by=popularity.desc'
    ),
    getData(
      `discover/movie`,
      '&primary_release_date.gte=2021-12-01&primary_release_date.lte=2021-12-24'
    ),
  ]);

  if (true) {
    return {
      props: {
        popularity,
        popularKids,
        inTheatres,
      },
    };
  }
  return { props: {} };
}

export default Home;
