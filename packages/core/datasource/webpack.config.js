const path = require('path');
const fs = require('fs');
const webpackConfig = require('../../../webpack.base.config.js');

const entries = fs
  .readdirSync('./src')
  .filter((filename) => filename.match(/\.ts$/))
  .map((f) => f.slice(0, -3))
  .reduce(
    (prev, filename) => ({
      ...prev,
      [filename]: path.resolve('.', 'src', filename),
    }),
    {}
  );

module.exports = webpackConfig((config) => {
  const entryConfig = entries;

  config.entry = entryConfig;

  const outputConfig = {
    path: path.resolve('.', 'lib'),
    filename: '[name].build.js',
    library: '',
    libraryTarget: 'commonjs',
  };

  config.output = outputConfig;

  return config;
});
