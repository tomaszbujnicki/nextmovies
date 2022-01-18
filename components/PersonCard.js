import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/PersonCard.module.css';
import { Forward } from '../assets/SvgButtons';
import CardLink from './CardLink';

const PersonCard = ({
  id,
  profile_path,
  gender,
  name,
  job,
  character,
  known_for_department,
  cardType = 'default',
  size = 'w185',
}) => {
  const position = job || character || known_for_department;
  const { classNameContent, classNameBody } = cardData[cardType];

  return (
    <CardLink href={`/person/${id}`}>
      <div className={classNameContent}>
        <Image
          id={profile_path}
          className={styles.Image}
          placeholder={`profile${gender}.svg`}
          size={size}
          width={185}
          height={278}
          layout="responsive"
          media="tmdb"
        />
        <div className={classNameBody}>
          <div className={styles.name}>{name}</div>
          <div className={styles.position}>{position}</div>
        </div>
      </div>
    </CardLink>
  );
};

export default PersonCard;

const cardData = {
  default: {
    classNameContent: styles.content,
    classNameBody: styles.body,
  },
  horizontal: {
    classNameContent: styles.content + ' ' + styles.contentHorizontal,
    classNameBody: styles.body + ' ' + styles.bodyHorizontal,
  },
};
