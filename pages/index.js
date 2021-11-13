import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Next Movies</h1>
      <Link href={`/movie/550988`}>
        <a>Free Guy</a>
      </Link>
      <br />
      <Link href={`/movie/618353`}>
        <a>Batman</a>
      </Link>
      <br />
      <Link href={`/movie/565028`}>
        <a>Candyman</a>
      </Link>
      <br />
      <Link href={`/movie/497698`}>
        <a>Black Widow</a>
      </Link>
      <br />
      <Link href={`/movie/843906`}>
        <a>
          Straight Outta Nowhere: Scooby-Doo! Meets Courage the Cowardly Dog
        </a>
      </Link>
      <br />
      <Link href={`/movie/10338`}>
        <a>
          Those Magnificent Men in Their Flying Machines or How I Flew from
          London to Paris in 25 hours 11 minutes
        </a>
      </Link>
      <br />
    </div>
  );
}
