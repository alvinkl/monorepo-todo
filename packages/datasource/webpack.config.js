const path = require('path');
const webpackBaseConfig = require('../../webpack.base.config.js');

const entryConfig = {
  shared: path.resolve('.', 'src', 'shared.ts'),
  todo: path.resolve('.', 'src', 'todo.ts'),
};

const outputConfig = {
  path: path.resolve('.', 'lib'),
  filename: '[name].build.js',
  library: '',
  libraryTarget: 'commonjs',
};

module.exports = Object.assign({}, webpackBaseConfig, {
  entry: entryConfig,
  output: outputConfig,
});
