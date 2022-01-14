import Image from './Image';
import styles from './styles/ProductionBanner.module.css';

const ProductionBanner = ({ movies }) => {
  return (
    <div className={styles.root}>
      <Poster path={movies[0].poster_path} />

      <div className={styles.backdropGroup}>
        <Backdrop path={movies[2].backdrop_path} />
        <Backdrop path={movies[3].backdrop_path} />
      </div>

      <Poster path={movies[1].poster_path} />

      <div className={styles.backdropGroup}>
        <Backdrop path={movies[4].backdrop_path} />
        <Backdrop path={movies[5].backdrop_path} />
      </div>
    </div>
  );
};

export default ProductionBanner;

const Poster = ({ path }) => (
  <div>
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

const Backdrop = ({ path }) => (
  <div>
    <Image
      id={path}
      placeholder={`backdrop.svg`}
      size="w780"
      width={444}
      height={250}
      media="tmdb"
      layout="responsive"
    />
  </div>
);
