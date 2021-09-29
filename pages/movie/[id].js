import { useRouter } from 'next/dist/client/router';
import useFetch from '../../hooks/useFetch';

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie] = useFetch('movie/' + id);

  if (movie === null) {
    return <div>Loading...</div>;
  }

  if (movie === undefined) {
    return <div>no data</div>;
  }

  return (
    <div>
      <Details movie={movie} />
    </div>
  );
};

export default Movie;

const Details = ({ movie }) => {
  const {
    adult,
    original_title,
    backdrop_path,
    belongs_to_collection,
    budget,
    genres,
    homepage,
  } = movie;

  console.log(movie);

  return (
    <div>
      <h3>{original_title}</h3>
      <div>{adult ? '18+' : 'all'}</div>
      {backdrop_path && <div>{backdrop_path}</div>}
      <div>
        {belongs_to_collection ? belongs_to_collection.name : 'no collection'}
      </div>
      <div>{budget && budget.toLocaleString()}</div>
      <div>
        {genres &&
          genres.map((item, index) => <span key={index}>{item.name}, </span>)}
      </div>
      {homepage && (
        <div>
          <a href={homepage}>homepage</a>
        </div>
      )}
    </div>
  );
};
