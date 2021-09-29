import useFetch from '../hooks/useFetch';

const Movie = ({ id }) => {
  const [data] = useFetch('movie/' + id);
  const [imagesData] = useFetch('movie/' + id + '/images');

  if (data === null) {
    return <div>Loading...</div>;
  }

  if (data === undefined) {
    return <div>no data</div>;
  }
  console.log(imagesData);
  console.log(data);
  const title = data?.original_title || '';
  const {
    adult,
    original_title,
    backdrop_path,
    belongs_to_collection,
    budget,
    genres,
    homepage,
  } = data;

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        <li>{adult ? '18+' : 'all'}</li>
        <li>{original_title}</li>
        <li>{backdrop_path}</li>
        <li>
          {belongs_to_collection ? belongs_to_collection.name : 'no collection'}
        </li>
        <li>{budget.toLocaleString()}</li>
        <li>
          {genres.map((item, index) => (
            <span key={index}>{item.name}, </span>
          ))}
        </li>
        <li>{homepage && <a href={homepage}>homepage</a>}</li>
      </ul>
    </div>
  );
};

export default Movie;
