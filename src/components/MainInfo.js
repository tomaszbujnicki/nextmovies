import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Rating from './Rating';
import styles from './styles/MainInfo.module.css';
import SVG_PeopleProhibited from '../assets/people-prohibited.js';
import SVG_Calendar from '../assets/calendar.js';
import SVG_Clock from '../assets/clock.js';

const MainInfo = ({
  title,
  genres,
  rating,
  releaseDate,
  runtime,
  certification,
}) => {
  return (
    <div className={styles.root}>
      <Title title={title} />

      <Genres genres={genres} />

      <Rating rating={rating} />

      <div className={styles.shortInfo}>
        <ReleaseDate date={releaseDate} />
        <Timer time={runtime} />
        <Certification certification={certification} />
      </div>
    </div>
  );
};

export default MainInfo;

const Title = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

const Genres = ({ genres }) => {
  return (
    <ul className={styles.genres}>
      {genres.map((item, index) => (
        <li key={index} className={styles.genresItem}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

const Certification = ({ certification }) => {
  if (!certification) {
    return null;
  }

  return (
    <Tag>
      <SVG_PeopleProhibited className={styles.svg} />
      {certification}
    </Tag>
  );
};

const Tag = ({ children }) => <div className={styles.tag}>{children}</div>;

const Timer = ({ time }) => {
  if (!time > 0) return null;
  return (
    <Tag>
      <SVG_Clock className={styles.svg} />
      {time}
    </Tag>
  );
};

const ReleaseDate = ({ date }) => {
  if (!date) return null;
  return (
    <Tag>
      <SVG_Calendar className={styles.svg} />
      {new Date(date).toLocaleDateString('en-US')}
    </Tag>
  );
};
