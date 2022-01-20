import React, { useEffect, useState } from 'react';
import Rating from './Rating';
import styles from './styles/ProductionInfo.module.css';
import { MOVIE_CERTYFICATION } from '../constants';
import LockEye from '../assets/exit-fullscreen.svg';
import SVG_Calendar from '../assets/calendar.svg';
import SVG_Clock from '../assets/clock.svg';

const Title = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

const Tagline = ({ tagline }) => {
  return <p className={styles.tagline}>{tagline}</p>;
};

const Certyfication = ({ certyfication }) => {
  console.log(certyfication);
  if (!certyfication) return null;
  return (
    <Tag>
      <LockEye className={styles.svg} />
      {certyfication}
    </Tag>
  );
};

const Tag = ({ children }) => <div className={styles.tag}>{children}</div>;

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

const Overview = ({ overview }) => {
  return <p className={styles.overview}>{overview}</p>;
};

const ProductionInfo = ({ movie }) => {
  console.log(movie);
  console.log(movie.release_dates.results[0].release_dates[0].certification);
  return (
    <div className={styles.root}>
      <Title title={movie.title || movie.name} />

      <Genres genres={movie.genres} />

      <Rating rating={movie.vote_average} />

      <Timer time={movie.runtime} />
      <Certyfication
        certyfication={
          movie.release_dates.results[0].release_dates[0].certification
        }
      />
      <ReleaseDate date={movie.release_date} />

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
