import TvShows from '../../pageComponents/tv-shows/TvShows';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';

export async function getServerSideProps(context) {
  const query = context.resolvedUrl.replace('/tv-shows?', '');

  if (query === '/tv-shows') {
    const data = await getData(`discover/tv`);
    return { props: { data } };
  }

  const data = await getData(`discover/tv`, `&${query}`);

  if (data) {
    return { props: { data } };
  }

  return redirect({ destination: '/tv-shows' });
}

export default TvShows;
