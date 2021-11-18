import React from 'react';
import Image from 'next/image';

const URL = 'http://image.tmdb.org/t/p/';
const STATIC = '/placeholder/';

const MyImage = ({
  path,
  width,
  height,
  alt = '',
  size = 'original',
  type = 'default',
}) => {
  const src = path ? `${URL}${size}${path}` : `${STATIC}${type}.svg`;

  console.log(src);

  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default MyImage;
