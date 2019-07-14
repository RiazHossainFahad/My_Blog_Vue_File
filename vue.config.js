module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://myblog.com',
        changeOrigin: true,
      },
    },
  },
};
