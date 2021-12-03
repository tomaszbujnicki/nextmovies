import { useCallback, useEffect, useState } from 'react';
import Background from '../components/Background';

import styles from './styles/DualBackground.module.css';

const DualBackground = ({ src, animationName = 'fade' }) => {
  const [bg, setBg] = useState([
    { key: 0, src: null, className: styles.hidden, display: true },
    { key: 1, src: null, className: styles.hidden, display: false },
  ]);
  const [isRunning, setIsRunning] = useState(false);

  const animate = useCallback(() => {
    setIsRunning(true);

    const entrance = `${styles.animationIn} ${styles[animationName + 'In']}`;
    const exit = `${styles.animationOut} ${styles[animationName + 'Out']}`;

    setBg((state) => [
      { ...state[0], className: bg[0].src === src ? entrance : exit },
      { ...state[1], className: bg[1].src === src ? entrance : exit },
    ]);
  }, [animationName, bg, src]);

  useEffect(() => {
    const updateImage = () => {
      if (bg[0].display) {
        setBg((state) => [
          { ...state[0], display: false },
          { ...state[1], src: src, display: true },
        ]);
      } else {
        setBg((state) => [
          { ...state[0], src: src, display: true },
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
      if (bg[0].src !== src && bg[1].src !== src) {
        updateImage();
      } else if (
        (bg[0].src === src && !bg[0].display) ||
        (bg[1].src === src && !bg[1].display)
      ) {
        toggleDisplay();
      }
    }
  }, [src, animationName, isRunning, bg, animate]);

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
          path={bg.src}
          handleLoad={() => {
            if (bg.src === src) {
              animate();
            }
          }}
        />
      ))}
    </div>
  );
};

export default DualBackground;
