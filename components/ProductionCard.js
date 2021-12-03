import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/ProductionCard.module.css';

const ProductionCard = ({ id, media_type, poster_path }) => {
  return (
    <div className={styles.root}>
      <Link href={`/${media_type}/${id}`}>
        <a draggable="false">
          <Image
            id={poster_path}
            placeholder="default.jpg"
            size="w185"
            width={185}
            height={278}
            media="tmdb"
          />
        </a>
      </Link>
    </div>
  );
};

export default ProductionCard;
