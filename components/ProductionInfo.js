import React, { useEffect, useState } from 'react';
import Rating from './Rating';
import styles from './styles/ProductionInfo.module.css';
import SVG_PeopleProhibited from '../assets/people-prohibited.svg';
import SVG_Calendar from '../assets/calendar.svg';
import SVG_Clock from '../assets/clock.svg';

const ProductionInfo = ({ movie }) => {
  console.log(movie);
  return (
    <div className={styles.root}>
      <Title title={movie.title || movie.name} />

      <Genres genres={movie.genres} />

      <Rating rating={movie.vote_average} />

      <div className={styles.shortInfo}>
        <ReleaseDate date={movie.release_date} />
        <Timer time={movie.runtime} />
        <Certification globalReleaseDates={movie.release_dates.results} />
      </div>

      {/*
          <Tagline tagline={movie.tagline} />
      <Overview overview={movie.overview} /> */}

      {/* <div>
        {belongs_to_collection ? belongs_to_collection.name : 'no collection'}
      </div>
      <div>
        {budget > 0
          ? budget.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })
          : '-'}
      </div>
      {homepage && (
        <div>
          <a target="_blank" href={homepage} rel="noopener noreferrer">
            homepage
          </a>
        </div>
      )} */}
    </div>
  );
};

export default ProductionInfo;

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

const Certification = ({ globalReleaseDates }) => {
  const regionObject = globalReleaseDates.find(
    (releaseDates) => releaseDates.iso_3166_1 === 'US'
  );

  if (!regionObject) {
    return null;
  }

  const regionReleaseDates = regionObject.release_dates;
  const certification = regionReleaseDates[0].certification;

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
