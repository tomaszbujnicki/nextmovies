import { getRandomIntInclusive } from '.';

const images = {
  base_url: 'http://image.tmdb.org/t/p/',
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile_sizes: ['w45', 'w185', 'h632', 'original'],
  still_sizes: ['w92', 'w185', 'w300', 'original'],
};

const defaultImagesCount = {
  backdrop: 6,
  poster: 6,
  logo: 0,
  profile: 0,
  still: 0,
};

const getImgSrc = (path, type = 'backdrop', size = 'original') => {
  let src = '';

  if (typeof path === 'string') {
    src = images.base_url + size + path;
  } else {
    const id = getRandomIntInclusive(1, defaultImagesCount[type]);
    src = `/default-img/${type}${id}.jpg`;
  }

  return src;
};

export default getImgSrc;
