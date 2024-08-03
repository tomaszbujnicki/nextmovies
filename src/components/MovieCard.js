import React from 'react';
import Image from './Image';
import CardLink from './CardLink';
import styles from './styles/MovieCard.module.css';

const MovieCard = ({
  id,
  poster_path,
  backdrop_path,
  size = 'w342',
  horizontal = false,
}) => {
  return (
    <CardLink href={`/movie/${id}`}>
      <Image
        media="tmdb"
        layout="responsive"
        placeholder="production.svg"
        size={size}
        width={horizontal ? 780 : 185}
        height={horizontal ? 439 : 278}
        id={horizontal ? backdrop_path : poster_path}
      />
    </CardLink>
  );
};

export default MovieCard;
