import React, { useEffect, useState } from 'react';
import Rating from '../../containers/Rating';

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
  const [state, setState] = useState(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setOpacity(1);
      setState({ ...movie });
    }, 5000);
    return () => {
      clearTimeout(id);
      setOpacity(0);
    };
  }, [movie]);

  return (
    <div className={styles.container} style={{ opacity }}>
      {state && (
        <>
          <Title title={state.title} />
          <Tagline tagline={state.tagline} />
          <Genres genres={state.genres} />
          <Rating end={state.vote_average * 10} id={state.id} />
          <Timer time={state.runtime} />
          <Overview overview={state.overview} />
        </>
      )}

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
