import { useEffect, useState } from 'react';
import { getImgSrc } from '../utilities';
import Background from '../components/Background';

import styles from './DualBackground.module.css';

const DualBackground = ({
  path,
  type,
  id,
  size,
  animationName = 'slideInRight',
}) => {
  const [bg, setBg] = useState([
    { src: null, id: null, display: true },
    { src: null, id: null, display: false },
  ]);
  const [className, setClassName] = useState([null, null]);
  const [isAnimates, setIsAnimates] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      const src = getImgSrc({
        path: path,
        type: type,
        id: id,
      });

      if (bg[0].display) {
        setBg((prev) => [
          { ...prev[0], display: false },
          { src: src, id: id, display: true },
        ]);
      } else {
        setBg((prev) => [
          { src: src, id: id, display: true },
          { ...prev[1], display: false },
        ]);
      }
    };

    const toggleDisplay = () => {
      setBg((prev) => [
        { ...prev[0], display: !prev[0].display },
        { ...prev[1], display: !prev[1].display },
      ]);
      if (bg[0].id === id) {
        setIsAnimates(true);
        setClassName([
          styles.animationIn + ' ' + styles[animationName],
          styles.animationOut,
        ]);
      } else {
        setIsAnimates(true);
        setClassName([
          styles.animationOut,
          styles.animationIn + ' ' + styles[animationName],
        ]);
      }
    };

    if (!isAnimates) {
      if (bg[0].id !== id && bg[1].id !== id) {
        updateImage();
      } else if (
        (bg[0].id === id && !bg[0].display) ||
        (bg[1].id === id && !bg[1].display)
      ) {
        toggleDisplay();
      }
    }
  }, [path, type, id, size, animationName, isAnimates, bg]);

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
      <Background
        className={className[0]}
        handleAnimationEnd={() => setIsAnimates(false)}
        src={bg[0]?.src}
        handleLoad={() => {
          if (bg[0].id === id) {
            setIsAnimates(true);
            setClassName([
              styles.animationIn + ' ' + styles[animationName],
              styles.animationOut,
            ]);
          }
        }}
      />
      <Background
        className={className[1]}
        handleAnimationEnd={() => setIsAnimates(false)}
        src={bg[1]?.src}
        handleLoad={() => {
          if (bg[1].id === id) {
            setIsAnimates(true);
            setClassName([
              styles.animationOut,
              styles.animationIn + ' ' + styles[animationName],
            ]);
          }
        }}
      />
    </div>
  );
};

export default DualBackground;
