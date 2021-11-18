/* {
  base_url: 'http://image.tmdb.org/t/p/',
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile_sizes: ['w45', 'w185', 'h632', 'original'],
  still_sizes: ['w92', 'w185', 'w300', 'original'],
}; */

const defaultImages = {
  backdrop: 6,
  poster: 6,
  logo: 0,
  profile: 0,
  still: 0,
};

const DOMAIN_ROOT = 'http://image.tmdb.org/t/p/';
const STATIC_ROOT = '/placeholder/';
const DEFAULT_IMG = '/default.jpg';

const getImgSrc = ({ path, type, size = 'original' }) => {
  if (typeof path === 'string') {
    return DOMAIN_ROOT + 'original' + path;
  }

  if (type in defaultImages) {
    return `${STATIC_ROOT}${type}.svg`;
  }

  return DEFAULT_IMG;
};

export default getImgSrc;
