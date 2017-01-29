module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/bin`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: 'style!css'
      }, {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
