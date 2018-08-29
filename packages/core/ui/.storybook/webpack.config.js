const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = defaultConfig.module.rules.filter(
    d => String(d.test) !== String(/\.css$/)
  );

  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve('awesome-typescript-loader'),
  });

  defaultConfig.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'typings-for-css-modules-loader',
        options: {
          modules: true,
          namedExport: true,
        },
      },
    ],
  });

  defaultConfig.plugins.push(new TSDocgenPlugin());

  // defaultConfig.plugins.push(new ExtractTextWebpackPlugin('style.css'));

  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.css');

  return defaultConfig;
};
