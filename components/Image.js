import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';

const sources = {
  tmdb: (id, size) => `https://image.tmdb.org/t/p/${size}${id}`,
  gravatar: (id, size) => `https://secure.gravatar.com/avatar/${id}?s=${size}`,
  gravatarFull: (id, size) => `${id}?s=${size}`,
  YouTube: (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  Vimeo: (id) => `https://vumbnail.com/${id}.jpg`,
  placeholder: (name) => `/placeholder/${name}`,
  static: (path) => `/${path}`,
};

const Image = ({
  id,
  media,
  width,
  height,
  onError,
  loading: propsLoading,
  priority,
  className,
  alt = '',
  quality = 100,
  size = 'original',
  layout = 'intrinsic',
  placeholder = 'default.jpg',
}) => {
  const [src, setSrc] = useState(sources.placeholder(placeholder));

  const [loading, setLoading] = useState(propsLoading);

  const errorHandler = onError
    ? onError
    : () => setSrc(sources.placeholder(placeholder));

  useEffect(() => {
    if (id) {
      setSrc(sources[media](id, size));
    }
  }, [id, media, size]);

  useEffect(() => {
    // Skip if image is already eager or has priority (disables lazy loading)
    if (propsLoading === 'eager' || priority) {
      return;
    }

    if (!isMobileConnection()) {
      let clearDefer;
      // Set loading to eager if all resources of document are loaded, but defer it a bit
      const onLoad = () => {
        clearDefer = defer(() => {
          setLoading('eager');
        });
      };

      if (document.readyState === 'complete') {
        onLoad();
      } else {
        window.addEventListener('load', onLoad);
      }

      return () => {
        // Clean up the load event listener and an eventual defer
        window.removeEventListener('load', onLoad);
        if (clearDefer) {
          clearDefer();
        }
      };
    }
  }, [propsLoading, priority]);

  return (
    <div style={{ fontSize: 0 }} className={className}>
      <NextImage
        unoptimized="false"
        src={src}
        onError={errorHandler}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        quality={quality}
        loading={loading}
        draggable="false"
        lazyBoundary="500px"
      />
    </div>
  );
};

export default Image;

const isMobileConnection = () => {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  return (
    connection?.type === 'cellular' ||
    connection?.effectiveType === 'slow-2g' ||
    connection?.effectiveType === '2g' ||
    connection?.effectiveType === '3g' ||
    connection?.saveData === true
  );
};

const defer = (callback) => {
  // Check if we can use requestIdleCallback
  if (window.requestIdleCallback) {
    const handle = window.requestIdleCallback(callback);
    return () => window.cancelIdleCallback(handle);
  }
  // Just defer using setTimeout with some random delay otherwise
  const handle = setTimeout(callback, 2345 + Math.random() * 1000);
  return () => clearTimeout(handle);
};
