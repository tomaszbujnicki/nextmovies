import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/PersonCard.module.css';

const PersonCard = ({ person }) => {
  return (
    <div className={styles.root}>
      <Link href={`/person/${person.id}`}>
        <a draggable="false">
          <Image
            id={person.profile_path}
            placeholder={`profile${person.gender}.svg`}
            size="w185"
            width={185}
            height={278}
            media="tmdb"
          />
          <div className={styles.body}>
            <div className={styles.name}>{person.name}</div>
            <div className={styles.character}>{person.character}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PersonCard;
