import React from 'react';
import Image from './Image';
import styles from './styles/Details.module.css';

const Details = ({ data }) => {
  return (
    <div className={styles.root}>
      <Poster path={data.poster_path} />
      <Keywords keywords={data.keywords.keywords} />
      <Externals externals={data.external_ids} homepage={data.homepage} />
      <div className={styles.info}></div>
    </div>
  );
};

export default Details;

const Poster = ({ path }) => {
  return (
    <div className={styles.Poster}>
      <Image
        id={path}
        placeholder={`production.svg`}
        size="w342"
        width={342}
        height={513}
        media="tmdb"
      />
    </div>
  );
};

const Keywords = ({ keywords }) => {
  return (
    <ul className={styles.keywords}>
      {keywords.map((item, index) => (
        <li key={index} className={styles.keyword}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

const Externals = ({ externals, homepage }) => {
  const facebook = externals.facebook_id;
  const instagram = externals.instagram_id;
  const twitter = externals.twitter_id;

  return (
    <div>
      {homepage && <div>{homepage}</div>}
      {facebook && <div>{facebook}</div>}
      {instagram && <div>{instagram}</div>}
      {twitter && <div>{twitter}</div>}
    </div>
  );
};
