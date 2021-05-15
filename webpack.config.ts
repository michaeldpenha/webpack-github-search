import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import PrettierPlugin from 'prettier-webpack-plugin';
import webpack from 'webpack';
import dotenv from 'dotenv';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
const envConfig = dotenv.config({ path: __dirname + '/.env' }).parsed;
const envKeys = Object.keys(envConfig).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(envConfig[next]);
  return prev;
}, {});

const webpackConfig = (): Configuration => ({
  entry: './src/index.tsx',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'build.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin(envKeys),
    new PrettierPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      },
    }),
  ],
});

export default webpackConfig;
