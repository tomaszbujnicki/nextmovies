import Image from './Image';
import styles from './styles/ReviweCard.module.css';
import ReactMarkdown from 'react-markdown';
import removeEmoji from '../utilities/removeEmoji';
import { Star } from '../assets/SvgButtons';
import Modal from './Modal';
import { useState } from 'react';

const ReviweCard = ({
  content,
  created_at,
  author_details: { rating, avatar_path, username },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const text = removeEmoji(content).replace(/\<em\>|\<\/em\>/g, '');
  const displayShort = text.length > 800;

  return (
    <>
      <Review
        text={text}
        created_at={created_at}
        rating={rating}
        avatar_path={avatar_path}
        username={username}
        displayShort={displayShort}
        setIsModalOpen={setIsModalOpen}
      />

      {isModalOpen && (
        <Modal closeCallback={() => setIsModalOpen(false)}>
          <Review
            text={text}
            created_at={created_at}
            rating={rating}
            avatar_path={avatar_path}
            username={username}
            displayShort={false}
          />
        </Modal>
      )}
    </>
  );
};

export default ReviweCard;

const Review = ({
  text,
  created_at,
  rating,
  avatar_path,
  username,
  displayShort,
  setIsModalOpen,
}) => {
  return (
    <article className={styles.root}>
      <Header avatar_path={avatar_path} username={username} />

      {displayShort ? (
        <ShortContent text={text} setIsModalOpen={setIsModalOpen} />
      ) : (
        <FullContent text={text} />
      )}

      <Footer date={created_at} rating={rating} />
    </article>
  );
};

const Header = ({ username, avatar_path }) => {
  const author = removeEmoji(username);

  return (
    <header className={styles.header}>
      <div className={styles.avatar}>
        <AvatarImage avatar_path={avatar_path} />
      </div>
      <h3 className={styles.author}>{author}</h3>
    </header>
  );
};

const Footer = ({ rating, date }) => {
  return (
    <footer className={styles.footer}>
      <UserRating rating={rating} />
      <div className={styles.date}>
        {new Date(date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </div>
    </footer>
  );
};

const FullContent = ({ text }) => {
  return (
    <div className={styles.content}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

const ShortContent = ({ text, setIsModalOpen }) => {
  const shortText = text.substring(0, 750) + '...';

  return (
    <div className={styles.content}>
      <ReactMarkdown>{shortText}</ReactMarkdown>
      <button className={styles.button} onClick={() => setIsModalOpen(true)}>
        Read more
      </button>
    </div>
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

const UserRating = ({ rating }) => {
  if (!rating) return null;

  return (
    <div className={styles.rating}>
      <Star half={rating === 1} empty={rating < 1} />
      <Star half={rating === 3} empty={rating < 3} />
      <Star half={rating === 5} empty={rating < 5} />
      <Star half={rating === 7} empty={rating < 7} />
      <Star half={rating === 9} empty={rating < 9} />
    </div>
  );
};
