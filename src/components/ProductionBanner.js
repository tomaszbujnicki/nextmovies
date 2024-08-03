import styles from './styles/ProductionBanner.module.css';
import MovieCard from './MovieCard';
import TvCard from './TvCard';

const cards = {
  movie: MovieCard,
  tv: TvCard,
};

const ProductionBanner = ({ data, type = 'movie', variant = '1' }) => {
  const Card = cards[type];

  return (
    <div className={styles.root + ' ' + styles['root--variant-' + variant]}>
      {variant === '1' && <Card {...data[1]} size="w500" />}

      <div className={styles.backdropGroup}>
        <Card {...data[2]} size="w780" horizontal />
        <Card {...data[3]} size="w780" horizontal />
      </div>

      <Card {...data[0]} size="w500" />

      <div className={styles.backdropGroup}>
        <Card {...data[4]} size="w780" horizontal />
        <Card {...data[5]} size="w780" horizontal />
      </div>

      {variant === '2' && <Card {...data[1]} size="w500" />}
    </div>
  );
};

export default ProductionBanner;
