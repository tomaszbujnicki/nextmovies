import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './styles/Background.module.css';

const root = 'http://image.tmdb.org/t/p/';

const Background = ({ path, low, high = 'original' }) => {
  const [firstRender, setFirstRender] = useState(true);
  const [isHighLoaded, setIsHighLoaded] = useState(false);
  const [isLowLoaded, setIsLowLoaded] = useState(false);

  useEffect(() => {
    setIsHighLoaded(false);
    setIsLowLoaded(false);
  }, [path]);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  if (!path) return null;

  if (firstRender) return null;

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <Image
          priority
          layout="fill"
          objectFit="cover"
          quality="100"
          src={`${root}${low}${path}`}
          alt=""
          onLoad={(e) => {
            if (e.target.src.indexOf('data:image/gif;base64') < 0) {
              setIsLowLoaded(true);
            }
          }}
          className={isLowLoaded ? styles.show : styles.hide}
        />
        <Image
          priority
          layout="fill"
          objectFit="cover"
          quality="100"
          src={`${root}${high}${path}`}
          alt=""
          onLoad={(e) => {
            if (e.target.src.indexOf('data:image/gif;base64') < 0) {
              setIsHighLoaded(true);
            }
          }}
          className={isHighLoaded ? styles.show : styles.hide}
        />
      </div>
    </div>
  );
};

export default Background;
