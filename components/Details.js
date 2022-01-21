import React from 'react';
import Image from './Image';
import styles from './styles/Details.module.css';
import SVG_Instagram from '../assets/instagram.svg';
import SVG_Facebook from '../assets/facebook.svg';
import SVG_Twitter from '../assets/twitter.svg';
import SVG_Link from '../assets/link.svg';
import Link from 'next/dist/client/link';
import { LANGUAGES } from '../constants';

const Details = ({ data }) => {
  return (
    <div className={styles.root}>
      <Poster path={data.poster_path} />
      <Overview overview={data.overview} tagline={data.tagline} />
      <List data={data} />
      <div>
        <Externals externals={data.external_ids} homepage={data.homepage} />
        <Keywords keywords={data.keywords.keywords} />
      </div>
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
        size="w500"
        width={342}
        height={513}
        media="tmdb"
        layout="responsive"
      />
    </div>
  );
};

{
  /* <div>
        {belongs_to_collection ? belongs_to_collection.name : 'no collection'}
      </div>
 */
}

const intToCurrency = (int) =>
  int.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

const List = ({ data }) => {
  const budget = data.budget;
  const revenue = data.revenue;
  const language = data.original_language;
  const directors = [];
  const writers = [];

  const crew = data.credits.crew;
  console.log(crew);
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].job === 'Director') {
      directors.push(crew[i]);
    }
    if (crew[i].job === 'Screenplay') {
      writers.push(crew[i]);
    }
    if (crew[i].job === 'Writer') {
      writers.push(crew[i]);
    }
  }

  console.log(directors, writers);

  return (
    <dl className={styles.list}>
      {directors.length > 0 && (
        <div>
          <dt>Director{directors.length > 1 && 's'}:</dt>
          <dd>
            {directors.map((person, i) => (
              <div key={i}>
                <Link href={`/person/${person.id}`}>
                  <a className={styles.link}>{person.name}</a>
                </Link>
              </div>
            ))}
          </dd>
        </div>
      )}

      {writers.length > 0 && (
        <div>
          <dt>Writer{writers.length > 1 && 's'}:</dt>
          <dd>
            {writers.map((person, i) => (
              <div key={i}>
                <Link href={`/person/${person.id}`}>
                  <a className={styles.link}>{person.name}</a>
                </Link>
              </div>
            ))}
          </dd>
        </div>
      )}

      {revenue > 0 && (
        <div>
          <dt>Revenue:</dt>
          <dd>{intToCurrency(revenue)}</dd>
        </div>
      )}

      {budget > 0 && (
        <div>
          <dt>Budget:</dt>
          <dd>{intToCurrency(budget)}</dd>
        </div>
      )}

      {language && (
        <div>
          <dt>Original Language:</dt>
          <dd>{LANGUAGES[language]}</dd>
        </div>
      )}
    </dl>
  );
};

const Overview = ({ overview, tagline }) => {
  return (
    <div className={styles.overview}>
      <h3 className={styles.tagline}>{tagline ? tagline : 'Storyline'}</h3>
      <p>{overview}</p>
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
    <ul className={styles.externals}>
      {homepage && (
        <li>
          <a
            className={styles.external__link}
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG_Link />
          </a>
        </li>
      )}
      {facebook && (
        <li>
          <a
            className={styles.external__link}
            href={`https://facebook.com/${facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG_Facebook />
          </a>
        </li>
      )}
      {twitter && (
        <li>
          <a
            className={styles.external__link}
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG_Twitter />
          </a>
        </li>
      )}
      {instagram && (
        <li>
          <a
            className={styles.external__link}
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG_Instagram />
          </a>
        </li>
      )}
    </ul>
  );
};
