import DualBackground from '../../components/DualBackground';
import Link from 'next/link';
import getData from '../../adapters/getData';

import FullscreenToggler from '../../components/FullscreenToggler';
import FullHeightHero from '../../components/FullHeightHero';

export async function getServerSideProps(context) {
  const id = context.params.id;
  const data = await getData(
    `movie/${id}`,
    '&append_to_response=credits,videos'
  );
  return { props: { data } };
}

const Movie = ({ data }) => {
  return (
    <>
      <FullHeightHero style={{ display: 'flex', alignItems: 'center' }}>
        <DualBackground path={data?.backdrop_path} />
        <FullscreenToggler />
      </FullHeightHero>
      <div style={{ fontSize: 150, color: 'white' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            border: '2px solid green',
          }}
        ></div>

        <Details movie={data} />

        <Link href={`/movie/550988`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/809968`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/550989`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/703771`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/618353`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/618353`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/618353`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/618353`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/618353`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/618353`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/446130`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/428495`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/21575`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/446289`}>
          <a>title</a>
        </Link>
        <br />
        <Link href={`/movie/618353`}>
          <a>title</a>
        </Link>
      </div>
    </>
  );
};

export default Movie;

const Details = ({ movie }) => {
  const {
    adult,
    title,
    backdrop_path,
    poster_path,
    belongs_to_collection,
    budget,
    genres,
    homepage,
  } = movie;

  return (
    <div style={{ color: 'white', padding: '100px', fontSize: 18 }}>
      <h3 style={{ fontSize: 40, padding: 20 }}>{title}</h3>
      <div>{adult ? '18+' : 'all'}</div>

      <div>
        {belongs_to_collection ? belongs_to_collection.name : 'no collection'}
      </div>
      <div>
        {budget > 0
          ? budget.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })
          : '-'}
      </div>
      <div>
        {genres &&
          genres.map((item, index) => <span key={index}>{item.name}, </span>)}
      </div>
      {homepage && (
        <div>
          <a target="_blank" href={homepage} rel="noopener noreferrer">
            homepage
          </a>
        </div>
      )}
    </div>
  );
};
