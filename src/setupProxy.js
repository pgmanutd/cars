/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware');
/* eslint-enable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */

const API_BASE_PATH = '/api';

module.exports = (app) => {
  app.use(
    API_BASE_PATH,
    createProxyMiddleware({
      target: process.env.REACT_APP_PROXY_SERVER,
      changeOrigin: true,
      pathRewrite: {
        [`^${API_BASE_PATH}`]: '/',
      },
    }),
  );
};

module.exports.API_BASE_PATH = API_BASE_PATH;
