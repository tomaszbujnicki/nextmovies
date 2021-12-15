import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/ProductionCard.module.css';
import { Forward } from '../assets/SvgButtons';

const ProductionCard = ({ id, media_type, poster_path }) => {
  return (
    <Link href={`/${media_type}/${id}`}>
      <a draggable="false" className={styles.root}>
        <Image
          id={poster_path}
          className={styles.Image}
          placeholder="default.jpg"
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

export default ProductionCard;
