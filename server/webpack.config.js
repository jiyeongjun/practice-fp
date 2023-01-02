import * as path from "path";
import * as dotenv from 'dotenv';
import miniCssExtractPlugin from 'mini-css-extract-plugin';

dotenv.config();

export default {
  mode: process.env.ENV === 'development' ? process.env.ENV : 'production',
  devtool: process.env.ENV == 'development' ? 'source-map' : undefined,
  entry: {
    main: ['@babel/polyfill', './src/client/main.js', './src/server/style/index.styl'],
  },
  module: {
    rules: [
      {
        test: /\.(styl|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({ filename: 'bundle.css' }),
  ],
  output: {
    filename: 'bundle.js',
    path: process.cwd() + '/dist',
    publicPath: '/',
  },
};