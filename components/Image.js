import React from 'react';
import NextImage from 'next/image';

const URL = 'http://image.tmdb.org/t/p/';
const STATIC = '/placeholder/';

const Image = ({
  path,
  width,
  height,
  alt = '',
  size = 'original',
  type = 'default',
  style = {},
}) => {
  const src = path ? `${URL}${size}${path}` : `${STATIC}${type}.svg`;

  return (
    <div
      style={{
        width: width,
        height: height,
        position: 'relative',
        overflow: 'hidden',

        ...style,
      }}
    >
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable="false"
      />
    </div>
  );
};

export default Image;
