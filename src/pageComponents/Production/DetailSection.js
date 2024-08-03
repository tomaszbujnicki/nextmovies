import React from 'react';
import Image from '../../components/Image';
import styles from './DetailSection.module.css';
import SVG_Instagram from '../../assets/instagram.js';
import SVG_Facebook from '../../assets/facebook.js';
import SVG_Twitter from '../../assets/twitter.js';
import SVG_Link from '../../assets/link.js';
import Link from 'next/link';
import { LANGUAGES } from '../../constants';
import Section from '../../components/Section';

const DetailSection = ({
  poster,
  overview,
  tagline,
  homepage,
  externals,
  keywords,
  budget,
  revenue,
  originalLanguage,
  crew,
  type,
}) => {
  return (
    <Section>
      <div className={styles.main}>
        <Poster path={poster} />
        <Overview overview={overview} tagline={tagline} />
        <List
          budget={budget}
          revenue={revenue}
          originalLanguage={originalLanguage}
          crew={crew}
        />
        <div>
          <Externals externals={externals} homepage={homepage} />
          <Keywords keywords={keywords} type={type} />
        </div>
      </div>
    </Section>
  );
};

export default DetailSection;

const Poster = ({ path }) => {
  return (
    <div className={styles.Poster}>
      <Image
        id={path}
        placeholder="production.svg"
        size="w500"
        width={342}
        height={513}
        media="tmdb"
        layout="responsive"
        alt=""
      />
    </div>
  );
};

const intToCurrency = (int) =>
  int.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

const List = ({ budget, revenue, originalLanguage, crew }) => {
  const directors = [];
  const writers = [];

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

  return (
    <dl className={styles.list}>
      {directors.length > 0 && (
        <div>
          <dt>Director{directors.length > 1 && 's'}:</dt>
          <dd>
            {directors.map((person, i) => (
              <div key={i}>
                <Link href={`/person/${person.id}`} className={styles.link}>
                  {person.name}
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
                <Link href={`/person/${person.id}`} className={styles.link}>
                  {person.name}
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

      {originalLanguage && (
        <div>
          <dt>Original Language:</dt>
          <dd>{LANGUAGES[originalLanguage]}</dd>
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

const Keywords = ({ keywords, type }) => {
  let productionType = type === 'movie' ? 'movies' : 'tv-shows';
  return (
    <ul className={styles.keywords}>
      {keywords.map((item, index) => (
        <li key={index} className={styles.keyword}>
          <Link href={`/${productionType}?with_keywords=${item.id}`}>
            {item.name}
          </Link>
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
