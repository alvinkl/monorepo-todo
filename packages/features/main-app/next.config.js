const withTypescript = require('@zeit/next-typescript');
// const withCSS = require('@zeit/next-css');
const glob = require('glob-promise');
const { join } = require('path');

const webpackConfig = function(config, { dev }) {
  const cssConfig = {
    test: /\.css$/,
    use: [
      'isomorphic-style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          namedExport: true,
          sourceMap: !!dev,
          minimize: !dev,
          localIdentName: '[name]-[local]-[hash:base64:5]',
        },
      },
    ],
  };

  config.module.rules.push(cssConfig);

  return config;
};

const webpackDevMiddlewareConfig = config => {
  return config;
};

module.exports = withTypescript({
  webpack: webpackConfig,
  webpackDevMiddleware: webpackDevMiddlewareConfig,
});
