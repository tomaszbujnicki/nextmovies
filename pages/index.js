import Home from '../pageComponents/home/Home';
import getData from '../adapters/getData';

export async function getServerSideProps() {
  const [
    popularForKids,
    inTheatres,
    popular,
    upcoming,
    tvPopular,
    tvOnAir,
    tvLatest,
  ] = await Promise.all([
    getData(
      `discover/movie`,
      '&certification_country=US&certification.lte=G&sort_by=popularity.desc'
    ),
    getData(`movie/now_playing`, '&region=US'),
    getData(`movie/popular`),
    getData(`movie/upcoming`, '&region=US'),

    getData(`tv/popular`),
    getData(`tv/on_the_air`),
    getData(`tv/latest`),
  ]);

  return {
    props: {
      popularForKids,
      inTheatres,
      popular,
      upcoming,
      tvPopular,
      tvOnAir,
      tvLatest,
    },
  };
}

export default Home;
