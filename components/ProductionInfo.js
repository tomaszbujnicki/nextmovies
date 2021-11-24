import React, { useEffect, useState } from 'react';
import Rating from './Rating';

import styles from './styles/ProductionInfo.module.css';

const Title = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

const Tagline = ({ tagline }) => {
  return <p className={styles.tagline}>{tagline}</p>;
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
  return <p className={styles.timer}>{time}</p>;
};

const Overview = ({ overview }) => {
  return <p className={styles.overview}>{overview}</p>;
};

const ProductionInfo = ({ movie }) => {
  return (
    <div className={styles.root}>
      <Title title={movie.title} />
      <Tagline tagline={movie.tagline} />
      <Genres genres={movie.genres} />
      <Rating end={movie.vote_average * 10} id={movie.id} />
      <Timer time={movie.runtime} />
      <Overview overview={movie.overview} />

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
