const proxy = require('http-proxy-middleware');

const API_BASE_PATH = '/api';

module.exports = app => {
  app.use(
    API_BASE_PATH,
    proxy({
      target: process.env.REACT_APP_PROXY_SERVER,
      changeOrigin: true,
      pathRewrite: {
        [`^${API_BASE_PATH}`]: '/',
      },
    }),
  );
};

module.exports.API_BASE_PATH = API_BASE_PATH;
