import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './styles/Background.module.css';

const root = 'http://image.tmdb.org/t/p/';

const Background = ({
  path,
  style,
  low,
  high = 'original',
  handleLoad,
  ...rest
}) => {
  const [oldPath, setOldPath] = useState(null);
  const [isHighLoaded, setIsHighLoaded] = useState(false);
  const [isLowLoaded, setIsLowLoaded] = useState(false);

  useEffect(() => {
    setOldPath(path);
    return () => {
      setIsHighLoaded(false);
      setIsLowLoaded(false);
    };
  }, [path]);

  if (oldPath === null) return null;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '-1',
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          priority
          layout="fill"
          objectFit="cover"
          quality="100"
          src={`${root}${low}${path}`}
          alt=""
          onLoad={(e) => {
            if (e.target.src.indexOf('data:image/gif;base64') < 0) {
              console.log('Low Loaded');
              setIsLowLoaded(true);
            }
          }}
          className={styles.blur}
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
              console.log('High Loaded');
              setIsHighLoaded(true);
            }
          }}
          className={
            isLowLoaded && !isHighLoaded
              ? styles.hidden + ' ' + styles.high
              : styles.high
          }
        />
      </div>
    </div>
  );
};

export default Background;
