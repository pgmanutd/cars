/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const proxy = require('http-proxy-middleware');
/* eslint-enable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = app => {
  app.use(
    '/api',
    proxy({
      target: process.env.REACT_APP_PROXY_SERVER,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
};
/* eslint-enable @typescript-eslint/explicit-function-return-type */
