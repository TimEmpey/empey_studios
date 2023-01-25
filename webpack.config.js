const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {               
    contentBase: './dist'    
  },
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'empey_studios',
        template: './src/index.html',
        inject: 'body'
    }),
    new HtmlWebpackPlugin({
        filename: 'about/index.html',
        template: './src/html/about.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'contact/index.html',
        template: './src/html/contact.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'services/index.html',
        template: './src/html/services.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'work/index.html',
        template: './src/html/work.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|avif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
