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
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader',
      },
    ],
  },

  plugins: [
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
    libraryTarget: 'commonjs',
  },
};

module.exports = commonConfig;
