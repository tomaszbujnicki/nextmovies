import Movie from '../../pageComponents/movie/Movie';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';

export async function getServerSideProps(context) {
  const id = context.params.id;

  const data = await getData(
    `movie/${id}`,
    '&append_to_response=credits,videos,similar,recommendations,reviews,keywords,external_ids,images&include_image_language=null'
  );

  if (data) {
    return { props: { data } };
  }

  return redirect();
}

export default Movie;
