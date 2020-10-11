const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js'
  },
  // https://www.npmjs.com/package/babel-plugin-root-import does not work with other file besides js/jsx
  // use this instead: https://webpack.js.org/configuration/resolve/#resolvealias
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'styled-components': path.resolve('./node_modules/styled-components')
    }
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devtool: 'cheap-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader?name=images/[name].[ext]&publicPath=./',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(ttf|woff|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]&publicPath=./'
      },
      {
        test: /\.pdf$/,
        use: 'file-loader?name=Pdfs/[name].[ext]&publicPath=./'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Alexander',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.ejs',
      favicon: './src/favicon.png'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
      ignoreOrder: false
    })
  ]
};
