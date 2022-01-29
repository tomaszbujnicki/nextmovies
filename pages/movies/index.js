import Movies from '../../pageComponents/movies/Movies';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';

export async function getServerSideProps(context) {
  const query = context.resolvedUrl.replace('/movies?', '');

  if (query === '/movies') {
    const data = await getData(`discover/movie`);
    return { props: { data } };
  }

  const data = await getData(`discover/movie`, `&${query}`);

  if (data) {
    return { props: { data } };
  }

  return redirect({ destination: '/movies' });
}

export default Movies;
