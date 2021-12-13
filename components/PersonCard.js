import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/PersonCard.module.css';
import { ForwardButton } from './Button';

const PersonCard = ({
  id,
  profile_path,
  gender,
  name,
  job,
  character,
  known_for_department,
  cardType = 'default',
}) => {
  const position = job || character || known_for_department;
  const { width, height, classNameContent, classNameBody } = cardData[cardType];

  return (
    <Link href={`/person/${id}`}>
      <a draggable="false" className={styles.root}>
        <div className={classNameContent}>
          <Image
            id={profile_path}
            className={styles.Image}
            placeholder={`profile${gender}.svg`}
            size="w185"
            width={width}
            height={height}
            media="tmdb"
          />
          <div className={classNameBody}>
            <div className={styles.name}>{name}</div>
            <div className={styles.position}>{position}</div>
          </div>
          <ForwardButton className={styles.ForwardButton} tabIndex="-1" />
        </div>
      </a>
    </Link>
  );
};

export default PersonCard;

const cardData = {
  default: {
    width: 185,
    height: 278,
    classNameContent: styles.content,
    classNameBody: styles.body,
  },
  horizontal: {
    width: 80,
    height: 120,
    classNameContent: styles.content + ' ' + styles.contentHorizontal,
    classNameBody: styles.body + ' ' + styles.bodyHorizontal,
  },
};
