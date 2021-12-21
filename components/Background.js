import Image from 'next/image';
import { useEffect, useState } from 'react';

const root = 'http://image.tmdb.org/t/p/';

const Background = ({ path, style, handleLoad, ...rest }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setSrc(`${root}w300${path}`);
  }, [path]);

  if (src === null) return null;

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
        {src && (
          <Image
            priority
            layout="fill"
            objectFit="cover"
            quality="100"
            src={src}
            alt=""
            onLoad={(e) => {
              if (e.target.src.indexOf('data:image/gif;base64') < 0) {
                setSrc(`${root}original${path}`);

                if (handleLoad) {
                  handleLoad();
                }
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Background;
