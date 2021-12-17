import Home from '../pageComponents/home/Home';
import getData from '../adapters/getData';

export async function getServerSideProps() {
  const id = 155;

  const data = await getData(
    `movie/`,
    '&append_to_response=credits,videos,similar,recommendations,images&include_image_language=null'
  );

  if (data) {
    return { props: { data } };
  }
  return { props: {} };
}

export default Home;
