import { useEffect, useState } from 'react';
import { getImgSrc } from '../utilities';
import Background from './Background';

const STYLES = {
  faded: {
    show: { opacity: 1, transition: 'opacity 2s ease-in 0.5s' },
    hide: { opacity: 0, transition: 'opacity 2s ease-in 0.5s' },
  },
  open: {
    show: { transform: 'scale(1)', transition: 'transform 2s ease-in 2.5s' },
    hide: { transform: 'scale(0)', transition: 'transform 2s ease-in 0.5s' },
  },
  fromLeft: {
    show: { left: '0', transition: 'left 3s ease 0.5s', zIndex: '10' },
    hide: { left: '100%' },
  },
};

const DualBackground = ({ path, type, id, size, transition = 'fromLeft' }) => {
  const [bg, setBg] = useState([
    { src: null, id: null, display: true },
    { src: null, id: null, display: false },
  ]);
  const [style, setStyle] = useState([
    STYLES[transition].hide,
    STYLES[transition].hide,
  ]);

  useEffect(() => {
    if (bg[0].id === id || bg[1].id === id) {
      if (bg[1].id === id && bg[1].display === false) {
        setBg((prev) => [
          { ...prev[0], display: false },
          { ...prev[1], display: true },
        ]);
        setStyle([STYLES[transition].hide, STYLES[transition].show]);
      } else if (bg[0].id === id && bg[0].display === false) {
        setBg((prev) => [
          { ...prev[0], display: true },
          { ...prev[1], display: false },
        ]);
        setStyle([STYLES[transition].show, STYLES[transition].hide]);
      }
    } else {
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
    }
  }, [path, type, id, size, transition, bg]);

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
        src={bg[0]?.src}
        style={style[0]}
        handleLoad={() => {
          if (bg[0].id === id) {
            setStyle([STYLES[transition].show, STYLES[transition].hide]);
          }
        }}
      />
      <Background
        src={bg[1]?.src}
        style={style[1]}
        handleLoad={() => {
          if (bg[1].id === id) {
            setStyle([STYLES[transition].hide, STYLES[transition].show]);
          }
        }}
      />
    </div>
  );
};

export default DualBackground;
