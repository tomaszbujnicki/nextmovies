import React from 'react';
import Image from './Image';
import CardLink from './CardLink';
import SVG_Production_SVG from '../assets/placeholder/production.svg';
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
        placeholder={`data:image/${SVG_Production_SVG}`}
        size={size}
        width={horizontal ? 780 : 185}
        height={horizontal ? 439 : 278}
        id={horizontal ? backdrop_path : poster_path}
        alt=""
      />
    </CardLink>
  );
};

export default TvCard;
