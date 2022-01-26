import Search from '../../pageComponents/search/Search';
import getData from '../../adapters/getData';

export async function getServerSideProps(context) {
  const query = context.params.query;

  const [movie, tv, person] = await Promise.all([
    getData(`search/movie`, `&query=${query}`),
    getData(`search/tv`, `&query=${query}`),
    getData(`search/person`, `&query=${query}`),
  ]);

  return {
    props: {
      query,
      movie,
      tv,
      person,
    },
  };
}

export default Search;
