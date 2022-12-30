import webpack from "webpack";
import * as dotenv from 'dotenv';

dotenv.config();

export default {
  mode: process.env.ENV === 'development' ? process.env.ENV : 'production',
  devtool: process.env.ENV == 'development' ? 'source-map' : undefined,
  entry: [
    './src/clientSide/main.js',
  ],
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: process.cwd() + '/dist',
  },
};