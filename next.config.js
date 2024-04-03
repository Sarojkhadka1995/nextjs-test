/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  webpack: (config, { dev, isServer, webpack }) => {
    if (!dev && !isServer) {
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_BUILD_ID': JSON.stringify(webpack.ids),
      }));
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_BUILD_TIME': JSON.stringify(Date.now()),
      }));
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_REFRESH_TOKEN': JSON.stringify(Date.now()),
      }));
    }
    return config;
  },
  async afterBuild({ dir }) {
    try {
      const { default: router } = await import('next/router');
      router.refresh();
    } catch (error) {
      // Handle any errors that might occur during router refresh
      console.error('Error refreshing router:', error);
    }
  },
};
