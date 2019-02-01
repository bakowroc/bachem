const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config/template.json');

module.exports = {
  entry: './src/index.jsx',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },{
        test: /\.scss$/,
        loaders : [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[folder]__[local]',
              modules: true
            }
          },
          'sass-loader'
        ]
      },{
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },  {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'url-loader?limit=10000',
        'img-loader'
      ]
    }
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bachem - tabliczki znamionowe",
      template: "src/index.ejs",
      filename: path.resolve(__dirname, 'build/index.html'),
    })
  ]
};