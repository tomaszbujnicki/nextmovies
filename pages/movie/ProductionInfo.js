import React, { useEffect, useState } from 'react';
import ProgressBar from '../../components/ProgressBar';

import styles from './ProductionInfo.module.css';

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
  const {
    id,
    title,
    tagline,
    backdrop_path,
    poster_path,
    belongs_to_collection,
    budget,
    genres,
    overview,
    vote_average,
    runtime,
    homepage,
  } = movie;

  return (
    <div className={styles.container}>
      <Title title={title} />
      <Tagline tagline={tagline} />
      <Genres genres={genres} />
      <ProgressBar end={vote_average * 10} id={id} />
      <Timer time={runtime} />
      <Overview overview={overview} />

      <div>
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
      )}
    </div>
  );
};

export default ProductionInfo;
