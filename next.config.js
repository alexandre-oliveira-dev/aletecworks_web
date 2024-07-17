// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/page',
        destination: '/page',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/page',
        destination: '/page',
      },
    ];
  },
};
