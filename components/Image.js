import React, { useState } from 'react';
import NextImage from 'next/image';

const sources = {
  tmdb: (id, size) => `http://image.tmdb.org/t/p/${size}${id}`,
  youtube: (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  placeholder: (name) => `/placeholder/${name}.svg`,
  static: (path) => `/${path}`,
};

const Image = ({
  id,
  media,
  style,
  width,
  height,
  alt = '',
  size = 'original',
  placeholder = 'default',
}) => {
  const [src, setSrc] = useState(sources[media](id, size));

  return (
    <div style={{ fontSize: 0, ...style }}>
      <NextImage
        src={src}
        onError={() => setSrc(sources.placeholder(placeholder))}
        alt={alt}
        width={width}
        height={height}
        quality={100}
        draggable="false"
      />
    </div>
  );
};

export default Image;
