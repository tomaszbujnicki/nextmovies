import React from 'react';
import Image from './Image';
import CardLink from './CardLink';
import styles from './styles/TvCard.module.css';

const TvCard = ({
  id,
  poster_path,
  backdrop_path,
  size = 'w342',
  horizontal = false,
}) => {
  return (
    <CardLink href={`/tv/${id}`}>
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
    </CardLink>
  );
};

export default TvCard;
