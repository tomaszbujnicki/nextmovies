import { useCallback, useEffect, useState } from 'react';
import { getImgSrc, getRandomIntInclusive } from '../utilities';
import Background from '../components/Background';

import styles from './DualBackground.module.css';

const ANIMATIONS = [
  'zoom',
  'fade',
  'slideLeft',
  'slideBottom',
  'flipX',
  'flipY',
];
const randomAnimation = () =>
  ANIMATIONS[getRandomIntInclusive(0, ANIMATIONS.length - 1)];

const DualBackground = ({ path, type, id, size, animationName = 'fade' }) => {
  const [bg, setBg] = useState([
    { key: 0, src: null, id: null, className: styles.hidden, display: true },
    { key: 1, src: null, id: null, className: styles.hidden, display: false },
  ]);
  const [isRunning, setIsRunning] = useState(false);

  const animate = useCallback(() => {
    setIsRunning(true);

    const entrance = `${styles.animationIn} ${styles[animationName + 'In']}`;
    const exit = `${styles.animationOut} ${styles[animationName + 'Out']}`;

    setBg((state) => [
      { ...state[0], className: bg[0].id === id ? entrance : exit },
      { ...state[1], className: bg[1].id === id ? entrance : exit },
    ]);
  }, [animationName, bg, id]);

  useEffect(() => {
    const updateImage = () => {
      const src = getImgSrc({
        path: path,
        type: type,
        id: id,
      });

      if (bg[0].display) {
        setBg((state) => [
          { ...state[0], display: false },
          { ...state[1], src: src, id: id, display: true },
        ]);
      } else {
        setBg((state) => [
          { ...state[0], src: src, id: id, display: true },
          { ...state[1], display: false },
        ]);
      }
    };

    const toggleDisplay = () => {
      setBg((state) => [
        { ...state[0], display: !state[0].display },
        { ...state[1], display: !state[1].display },
      ]);
      animate();
    };

    if (!isRunning) {
      if (bg[0].id !== id && bg[1].id !== id) {
        updateImage();
      } else if (
        (bg[0].id === id && !bg[0].display) ||
        (bg[1].id === id && !bg[1].display)
      ) {
        toggleDisplay();
      }
    }
  }, [path, type, id, size, animationName, isRunning, bg, animate]);

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '-1',
      }}
    >
      {bg.map((bg) => (
        <Background
          key={bg.key}
          className={bg.className}
          onAnimationEnd={() => setIsRunning(false)}
          src={bg.src}
          handleLoad={() => {
            if (bg.id === id) {
              animate();
            }
          }}
        />
      ))}
    </div>
  );
};

export default DualBackground;
