const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = defaultConfig.module.rules.filter(
    (d) => String(d.test) !== String(/\.css$/)
  );

  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve('awesome-typescript-loader'),
  });

  // defaultConfig.module.rules.push({
  //   test: /\.css$/,
  //   oneOf: [
  //     {
  //       resourceQuery: /^\?raw$/,
  //       use: [
  //         'isomorphic-style-loader',
  //         {
  //           loader: 'typings-for-css-modules-loader',
  //           options: {
  //             modules: false,
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       use: [
  //         'isomorphic-style-loader',
  //         {
  //           loader: 'typings-for-css-modules-loader',
  //           options: {
  //             modules: true,
  //             namedExport: true,
  //             // sourceMap: !!dev,
  //             // minimize: !dev,
  //             // localIdentName: '[name]-[local]-[hash:base64:5]',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // });
  defaultConfig.module.rules.push({
    test: /\.css$/,
    oneOf: [
      {
        resourceQuery: /raw/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              // sourceMap: !!dev,
              // minimize: !dev,
              // localIdentName: '[name]-[local]-[hash:base64:5]',
            },
          },
        ],
      },
    ],
  });

  defaultConfig.plugins.push(new TSDocgenPlugin());

  // defaultConfig.plugins.push(new ExtractTextWebpackPlugin('style.css'));

  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.css');

  return defaultConfig;
};
