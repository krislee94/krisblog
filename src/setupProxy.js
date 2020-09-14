const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://www.web-jshtml.cn/api/react",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
