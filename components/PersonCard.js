import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './PersonCard.module.css';

const PersonCard = ({ person }) => {
  return (
    <div className={styles.root}>
      <Link href={`/person/${person.id}`}>
        <a className={styles.container}>
          <Image
            path={person.profile_path}
            type={`profile${person.gender}`}
            size="w185"
            width={185}
            height={278}
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
