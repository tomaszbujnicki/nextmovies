import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getImgSrc } from '../utilities';

const DualBackground = ({ path, size = 'original' }) => {
  const [showFirst, setShowFirst] = useState(false);
  const [state, setState] = useState({
    src0: null,
    src1: null,
    isFirstOnTop: true,
  });

  useEffect(() => {
    const src = getImgSrc(path, 'backdrop');

    setState((state) => {
      if (state.src0 === src || state.src1 === src) {
        setShowFirst((val) => !val);
      }

      const imgNum = state.isFirstOnTop ? 'src0' : 'src1';
      return {
        ...state,
        isFirstOnTop: !state.isFirstOnTop,
        [imgNum]: src,
      };
    });
  }, [path, size]);

  return (
    <>
      <Background
        src={state.src0}
        show={showFirst}
        handleLoad={() => {
          console.log('0');
          setShowFirst(true);
        }}
      />
      <Background
        src={state.src1}
        show={!showFirst}
        handleLoad={() => {
          console.log('1');
          setShowFirst(false);
        }}
      />
    </>
  );
};

const Background = ({ src, show, handleLoad }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: '-1',
      margin: 'auto',
      opacity: show ? 1 : 0,
      transition: 'opacity 2s ease-in 0.5s',
    }}
  >
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {src && (
        <Image
          layout="fill"
          objectFit="cover"
          src={src}
          alt=""
          onLoad={(e) => {
            if (e.target.src.indexOf('data:image/gif;base64') < 0) {
              handleLoad();
            }
          }}
        />
      )}
    </div>
  </div>
);

export default DualBackground;
