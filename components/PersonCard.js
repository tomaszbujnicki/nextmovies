import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/PersonCard.module.css';

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
  const {
    width,
    height,
    size,
    classNameContent,
    classNameBody,
    classNameName,
    classNamePosition,
  } = cardData[cardType];

  return (
    <div>
      <Link href={`/person/${id}`}>
        <a draggable="false">
          <div className={classNameContent}>
            <Image
              id={profile_path}
              placeholder={`profile${gender}.svg`}
              size={size}
              width={width}
              height={height}
              media="tmdb"
            />
            <div className={classNameBody}>
              <div className={classNameName}>{name}</div>
              <div className={classNamePosition}>{position}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PersonCard;

const cardData = {
  default: {
    width: 185,
    height: 278,
    size: 'w185',
    classNameContent: styles.content,
    classNameBody: styles.body,
    classNameName: styles.name,
    classNamePosition: styles.position,
  },
  horizontal: {
    width: 80,
    height: 120,
    size: 'w185',
    classNameContent: styles.contentHorizontal,
    classNameBody: styles.bodyHorizontal,
    classNameName: styles.nameHorizontal,
    classNamePosition: styles.positionHorizontal,
  },
};
