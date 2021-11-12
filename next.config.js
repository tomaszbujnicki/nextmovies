module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  async redirects() {
    return [
      {
        source: '/movie/:id(.*\\D+.*)',
        destination: '/bob',
        permanent: false,
      },
    ];
  },
};
