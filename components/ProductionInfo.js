import React, { useEffect, useState } from 'react';
import Rating from './Rating';
import { Timer as TimerSvg, People as PeopleSvg } from '../assets/SvgButtons';
import styles from './styles/ProductionInfo.module.css';
import { MOVIE_CERTYFICATION } from '../constants';
import Tag from './Tag';

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
      <PeopleSvg />
      {certyfication}
    </Tag>
  );
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

const Timer = ({ time }) => {
  if (!time > 0) return null;
  return <Tag svg="Timer">{time}</Tag>;
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
