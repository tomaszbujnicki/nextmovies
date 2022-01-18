import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/MovieCard.module.css';
import { Forward } from '../assets/SvgButtons';

const MovieCard = ({
  id,
  poster_path,
  backdrop_path,
  size = 'w185',
  horizontal = false,
}) => {
  return (
    <Link href={`/movie/${id}`}>
      <a draggable="false" className={styles.root}>
        <Image
          className={styles.Image}
          media="tmdb"
          layout="responsive"
          placeholder="production.svg"
          size={size}
          width={horizontal ? 780 : 185}
          height={horizontal ? 439 : 278}
          id={horizontal ? backdrop_path : poster_path}
        />
        <Forward className={styles.Forward} />
      </a>
    </Link>
  );
};

export default MovieCard;
