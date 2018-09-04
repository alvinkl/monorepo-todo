const path = require('path');
const webpackConfig = require('../../../webpack.base.config.js');

module.exports = webpackConfig((config) => {
  // Don't remove the ##ENTRY--CONFIG##
  // as it's being used by script to automatically
  // add new entry point for new datasource
  const entryConfig = {
    //##ENTRY--CONFIG##
    shared: path.resolve('.', 'src', 'shared.ts'),
    todo: path.resolve('.', 'src', 'todo.ts'),
  };

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
