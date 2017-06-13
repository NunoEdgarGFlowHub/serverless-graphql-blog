module.exports = {
  entry: './index.js',
  target: 'node',
  module: {
    loaders: [ {
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    } ]
  }
};
