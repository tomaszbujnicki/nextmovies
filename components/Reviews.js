import React from 'react';
import Image from './Image';
import styles from './styles/Reviews.module.css';

const Reviews = ({ data }) => {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {data.results.map((item) => (
          <li key={item.id} className={styles.item}>
            <Review {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

const Review = ({
  content,
  created_at,
  author_details: { rating, avatar_path, username },
}) => {
  return (
    <article className={styles.review}>
      <header className={styles.header}>
        <div className={styles.avatar}>
          <AvatarImage avatar_path={avatar_path} />
        </div>
        <h3 className={styles.username}>{username}</h3>
      </header>

      <p className={styles.content}>{content}</p>

      <footer className={styles.footer}>
        <div className={styles.rating}>{rating}</div>
        <div className={styles.date}>
          {new Date(created_at).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </footer>
    </article>
  );
};

const AvatarImage = ({ avatar_path }) => {
  let path = null;
  let size = '64';
  let media = 'gravatarFull';

  if (avatar_path) {
    if (avatar_path[6] !== ':') {
      media = 'tmdb';
      size = 'w64_and_h64_face';
      path = avatar_path;
    } else {
      path = avatar_path.slice(1);
    }
  }

  return (
    <Image
      id={path}
      className={styles.Image}
      size={size}
      width={64}
      height={64}
      media={media}
    />
  );
};
