import Image from 'next/image';

const Poster = ({ path, size = 'original' }) => (
  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
    <Image
      layout="fill"
      objectFit="cover"
      src={'http://image.tmdb.org/t/p/' + size + path}
      alt=""
    />
  </div>
);

export default Poster;
