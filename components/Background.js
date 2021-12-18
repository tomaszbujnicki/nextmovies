import Image from 'next/image';

const Background = ({ path, style, handleLoad, ...rest }) => {
  if (typeof path !== 'string') return null;

  const src = `http://image.tmdb.org/t/p/original${path}`;

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
                if (handleLoad) handleLoad();
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Background;
