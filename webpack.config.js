const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app:[
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js']
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    publicPath:'/',
    filename: '[name].bundle.js',
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

  devtool:'inline-source-map',


  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:['babel-loader', "eslint-loader"]
      },
      {
        test:/\.(jpe?g|png|svg|gif)$/i,
        exclude:/node_modules/,
        use:[
          'file-loader?name=[name].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(ttf|woff|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },

  devServer:{
    contentBase:path.join(__dirname,'dist'),
    publicPath:'/',
    compress:true,
    inline:true,
    hot: true,
    open:true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:'Alexander',
      minify: {
        collapseWhitespace:true
      },
      hash: true,
      template: './src/index.ejs',
      favicon: './src/favicon.png'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};
