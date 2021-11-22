import Image from 'next/image';

const URL = 'http://image.tmdb.org/t/p/';

const Background = ({ path, style, handleLoad, ...rest }) => {
  const src = path ? `${URL}original${path}` : null;
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
            layout="fill"
            objectFit="cover"
            quality="100"
            unoptimized={true}
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
