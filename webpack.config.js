module.exports = {
  entry: {
    timeline: './js/timeline.js',
    followers: './js/followers.js'
  },
  output: {
    path: './js/',
    publicPath: '/js/',
    filename: '[name].bundle.js',
  },
  devServer: {
    inline: true,
    port: 8000,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
