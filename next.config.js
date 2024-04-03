/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  webpack: (config, { dev, isServer, webpack }) => {
    // Run custom code after each build
    if (!dev && !isServer) {
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_BUILD_ID': JSON.stringify(webpack.ids)
      }));
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_BUILD_TIME': JSON.stringify(Date.now())
      }));
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_REFRESH_TOKEN': JSON.stringify(Date.now())
      }));
    }
    return config;
  },
  onDemandEntries: {
    // Run router.refresh() after each build
    async done({ dev, dir, isFirstCompilation, compiler, revalidate }) {
      if (!dev) {
        // Access the router from Next.js
        const { default: router } = await import('next/router');
        router.refresh(); // Refresh the router
      }
    },
  },

};
