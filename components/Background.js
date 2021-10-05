import Image from 'next/image';

const Background = ({
  src,
  style,
  className,
  handleLoad,
  handleAnimationEnd,
}) => {
  return (
    <div
      className={className}
      onAnimationEnd={handleAnimationEnd}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '-1',
        ...style,
      }}
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
                handleLoad();
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Background;
