import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/MovieCard.module.css';
import { Forward } from '../assets/SvgButtons';

const MovieCard = ({ id, poster_path }) => {
  return (
    <Link href={`/movie/${id}`}>
      <a draggable="false" className={styles.root}>
        <Image
          id={poster_path}
          className={styles.Image}
          placeholder="production.svg"
          size="w185"
          width={185}
          height={278}
          media="tmdb"
        />
        <Forward className={styles.Forward} />
      </a>
    </Link>
  );
};

export default MovieCard;
