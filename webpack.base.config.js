const path = require('path');

const webpack = require('webpack');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const pkgPath = path.resolve('./').split('/');
const PACKAGE_NAME = pkgPath[pkgPath.length - 1];

console.log('=== BUILDING FOR ', PACKAGE_NAME, ' ===');

const commonConfig = {
  entry: path.resolve('./', 'src', 'index.ts'),

  externals: /^\@alvin\/./i,

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    symlinks: true,
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /\.story.*/],
        use: {
          loader: 'awesome-typescript-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
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
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new PeerDepsExternalsPlugin(),
    new UglifyJSPlugin({
      parallel: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
  ],

  output: {
    path: path.resolve('./', 'lib'),
    filename: 'package.build.js',
    library: '',
    libraryTarget: 'commonjs',
  },
};

module.exports = commonConfig;
