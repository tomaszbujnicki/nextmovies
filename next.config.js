module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: [
      'image.tmdb.org',
      'i.ytimg.com',
      'vumbnail.com',
      'gravatar.com',
      'secure.gravatar.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/movie/:id(.*\\D+.*)',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/person/:id(.*\\D+.*)',
        destination: '/404',
        permanent: false,
      },
    ];
  },
};
