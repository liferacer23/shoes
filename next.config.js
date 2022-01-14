module.exports = {
  reactStrictMode: true,
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
     
    }
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
}
