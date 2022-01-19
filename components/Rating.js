import { Star } from '../assets/SvgButtons';
import styles from './styles/Rating.module.css';

const Rating = ({ rating }) => {
  if (!rating) return null;

  return (
    <div className={styles.root}>
      <Star full={rating > 1.9} half={true} />
      <Star full={rating > 3.7} half={rating > 2.8} />
      <Star full={rating > 5.5} half={rating > 4.6} />
      <Star full={rating > 7.3} half={rating > 6.4} />
      <Star full={rating > 9.1} half={rating > 8.2} />
    </div>
  );
};

export default Rating;
