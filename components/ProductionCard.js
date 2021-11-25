import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/ProductionCard.module.css';

const ProductionCard = ({ production }) => {
  return (
    <div className={styles.root}>
      <Link href={`/${production.media_type}/${production.id}`}>
        <a draggable="false">
          <Image
            path={production.poster_path}
            type="poster"
            size="w185"
            width={185}
            height={278}
          />
        </a>
      </Link>
    </div>
  );
};

export default ProductionCard;
