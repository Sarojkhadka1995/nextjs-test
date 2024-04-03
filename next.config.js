/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  // Other configurations...
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'must-revalidate',
          },
        ],
      },
      // Add other routes as needed
    ];
  },
};
