import styles from './styles/Rating.module.css';
import Empty from '../assets/star-empty.js';
import Half from '../assets/star-half.js';
import Full from '../assets/star.js';

const Rating = ({ rating, size = '' }) => {
  if (!rating) return null;

  const star1 = rating > 1.9 ? <Full /> : <Half />;
  const star2 = rating > 3.7 ? <Full /> : rating > 2.8 ? <Half /> : <Empty />;
  const star3 = rating > 5.5 ? <Full /> : rating > 4.6 ? <Half /> : <Empty />;
  const star4 = rating > 7.3 ? <Full /> : rating > 6.4 ? <Half /> : <Empty />;
  const star5 = rating > 9.1 ? <Full /> : rating > 8.2 ? <Half /> : <Empty />;

  return (
    <div className={styles.root + ' ' + styles[size]}>
      {star1}
      {star2}
      {star3}
      {star4}
      {star5}
    </div>
  );
};

export default Rating;
