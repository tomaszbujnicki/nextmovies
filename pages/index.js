import Movie from '../components/Movie';

export default function Home() {
  return (
    <div>
      <h1>Next Movies</h1>
      <Movie id={550} />
      <Movie id={809968} />
      <Movie id={550988} />
    </div>
  );
}
