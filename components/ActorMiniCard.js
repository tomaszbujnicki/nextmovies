import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/ActorMiniCard.module.css';

const ActorMiniCard = ({ id, profile_path, gender, name, character }) => {
  return (
    <div className={styles.root}>
      <Link href={`/person/${id}`}>
        <a draggable="false">
          <Image
            id={profile_path}
            placeholder={`profile${gender}.svg`}
            size="w45"
            width={45}
            height={67}
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

export default ActorMiniCard;
