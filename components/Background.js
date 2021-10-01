import Image from 'next/image';
import { useEffect, useState } from 'react';

const Background = ({ path, size = 'original' }) => {
  const [opacity0, setOpacity0] = useState(0);
  const [opacity1, setOpacity1] = useState(0);
  const [state, setState] = useState({
    src0: 'http://image.tmdb.org/t/p/',
    src1: 'http://image.tmdb.org/t/p/',
    isFirstOnTop: true,
  });

  useEffect(() => {
    if (typeof path === 'string') {
      setState((state) => {
        if (
          state.src0 === 'http://image.tmdb.org/t/p/' + size + path ||
          state.src1 === 'http://image.tmdb.org/t/p/' + size + path
        ) {
          setOpacity0((val) => (val === 0 ? 1 : 0));
          setOpacity1((val) => (val === 0 ? 1 : 0));
        }

        const src = state.isFirstOnTop ? 'src0' : 'src1';
        return {
          ...state,
          isFirstOnTop: !state.isFirstOnTop,
          [src]: 'http://image.tmdb.org/t/p/' + size + path,
        };
      });
    }
  }, [path, size]);

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '-1',
          margin: 'auto',
          opacity: opacity0,
          transition: 'opacity 2s ease-in',
        }}
      >
        <h1
          style={{
            zIndex: 9999,
            color: 'red',
            position: 'relative',
            marginLeft: 400,
          }}
        >
          0
        </h1>
        <Image
          layout="fill"
          objectFit="cover"
          src={state.src0}
          alt=""
          onLoad={(e) => {
            if (e.target.src.indexOf('data:image/gif;base64') < 0) {
              setOpacity0(1);
              setOpacity1(0);
            }
          }}
        />
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '-1',
          margin: 'auto',
          opacity: opacity1,
          transition: 'opacity 2s ease-in',
        }}
      >
        <h1
          style={{
            zIndex: 9999,
            color: 'red',
            position: 'relative',
            marginLeft: 400,
          }}
        >
          1
        </h1>
        <Image
          layout="fill"
          objectFit="cover"
          src={state.src1}
          alt=""
          onLoad={(e) => {
            if (e.target.src.indexOf('data:image/gif;base64') < 0) {
              setOpacity0(0);
              setOpacity1(1);
            }
          }}
        />
      </div>
    </>
  );
};

export default Background;
