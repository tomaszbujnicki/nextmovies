import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from './styles/SearchItem.module.css';
import { MOVIE_GENRES, TV_GENRES } from '../constants';

const SearchItem = ({
  id,
  media_type,
  poster_path,
  profile_path,
  title,
  name,
  release_date,
  genre_ids,
  known_for_department,
  known_for,
  gender,
  first_air_date,
}) => {
  return (
    <Link href={`/${media_type}/${id}`}>
      <a draggable="false" className={styles.root}>
        <div className={styles.image}>
          <Image
            id={poster_path || profile_path}
            placeholder={
              media_type === 'person'
                ? `profile${gender}.svg`
                : 'production.svg'
            }
            size="w185"
            width={92}
            height={138}
            media="tmdb"
            layout="responsive"
          />
        </div>

        <div className={styles.body}>
          {media_type === 'movie' ? (
            <Movie
              title={title}
              release_date={release_date}
              genre_ids={genre_ids}
            />
          ) : media_type === 'tv' ? (
            <Tv
              name={name}
              genre_ids={genre_ids}
              first_air_date={first_air_date}
            />
          ) : media_type === 'person' ? (
            <Person
              job={known_for_department}
              name={name}
              known_for={known_for}
            />
          ) : null}
        </div>
      </a>
    </Link>
  );
};

export default SearchItem;

const Person = ({ name, job, known_for }) => {
  return (
    <>
      <div className={styles.title}>{name}</div>
      <div>{job}</div>
      <ul className={styles.list}>
        {known_for.map((production, index) => (
          <li key={index} className={styles.listItem}>
            {production.title || production.name}
          </li>
        ))}
      </ul>
    </>
  );
};
const Tv = ({ name, genre_ids, first_air_date }) => {
  return (
    <>
      <div className={styles.title}>{name}</div>
      <div>{first_air_date?.slice(0, 4)}</div>
      <ul className={styles.list}>
        {genre_ids.map((id) => (
          <li key={id} className={styles.listItem}>
            {TV_GENRES[id]}
          </li>
        ))}
      </ul>
    </>
  );
};

const Movie = ({ title, release_date, genre_ids }) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div>{release_date?.slice(0, 4)}</div>
      <ul className={styles.list}>
        {genre_ids.map((id) => (
          <li key={id} className={styles.listItem}>
            {MOVIE_GENRES[id]}
          </li>
        ))}
      </ul>
    </>
  );
};
