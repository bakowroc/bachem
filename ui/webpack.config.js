const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:8000'
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      }, {
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
      }, {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }, {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
    }
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bachem - tabliczki znamionowe",
      template: "./src/index.ejs",
      filename: path.resolve(__dirname, 'dist/index.html'),
    })
  ]
};