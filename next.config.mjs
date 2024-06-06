const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/next.portfolio/" : "",
  basePath: isProd ? "/next.portfolio" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
};
