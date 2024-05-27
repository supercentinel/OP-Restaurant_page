 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
     rules: [
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         use: ['asset/resource'],
       },
     ],
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
     ],
   },
 };
