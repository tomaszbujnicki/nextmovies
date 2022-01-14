import Home from '../pageComponents/home/Home';
import getData from '../adapters/getData';

export async function getServerSideProps() {
  const [popularForKids, inTheatres, popular, upcoming] = await Promise.all([
    getData(
      `discover/movie`,
      '&certification_country=US&certification.lte=G&sort_by=popularity.desc'
    ),
    getData(`movie/now_playing`, '&region=US'),
    getData(`movie/popular`),
    getData(`movie/upcoming`, '&region=US'),
  ]);

  return {
    props: {
      popularForKids,
      inTheatres,
      popular,
      upcoming,
    },
  };
}

export default Home;
