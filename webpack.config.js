var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './scss/app.scss',
  module: {
    rules: [
      // Extracts the compiled CSS from the SASS files defined in the entry
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          [
            'css-loader',
            'sass-loader'
          ]
        ),
      }
    ],
  },
  plugins: [
    // Where the compiled SASS is saved to
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    })
  ],
  devServer: {
    host: '0.0.0.0',
  }
};