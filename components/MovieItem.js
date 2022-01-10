import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/MovieItem.module.css';

const MovieItem = ({ id, poster_path, title, release_date, genre_ids }) => {
  return (
    <Link href={`/movie/${id}`}>
      <a draggable="false" className={styles.root}>
        <Image
          id={poster_path}
          className={styles.Image}
          placeholder="production.svg"
          size="w92"
          width={92}
          height={138}
          media="tmdb"
        />
        <div className={styles.body}>
          <div>{title}</div>
          <div>{release_date?.slice(0, 4)}</div>
          <div>{genre_ids}</div>
        </div>
      </a>
    </Link>
  );
};

export default MovieItem;
