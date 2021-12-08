import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/ActorCard.module.css';

const ActorCard = ({ id, profile_path, gender, name, character }) => {
  return (
    <div className={styles.root}>
      <Link href={`/person/${id}`}>
        <a draggable="false">
          <Image
            id={profile_path}
            placeholder={`profile${gender}.svg`}
            size="w185"
            width={185}
            height={278}
            media="tmdb"
          />
          <div className={styles.body}>
            <div className={styles.name}>{name}</div>
            <div className={styles.character}>{character}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ActorCard;
