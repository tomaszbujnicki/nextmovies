import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Next Movies</h1>
      <Link href={`/movie/550988`}>
        <a>title</a>
      </Link>
      <br />
      <Link href={`/movie/809968`}>
        <a>title</a>
      </Link>
      <br />
      <Link href={`/movie/550`}>
        <a>title</a>
      </Link>
      <br />
    </div>
  );
}
