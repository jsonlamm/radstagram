'use strict';

const LiveReloadPlugin = require('webpack-livereload-plugin');
const devMode = process.env.NODE_ENV === 'development';
const path = require('path');

const USE_FAST_SOURCE_MAPS = false;

module.exports = {
  // mode: 'development',
  entry: './src/app.js',
  devtool:
    devMode && USE_FAST_SOURCE_MAPS ?
      'cheap-module-eval-source-map' :
      'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            // plugins: [require('babel-plugin-transform-obj-r-s')]
          }
        }
      }
    ]
  },
  plugins: devMode ? [
    new LiveReloadPlugin({
      appendScriptTag: true,
      // port: 3000
    }),
    {
      apply: (compiler) => {
        compiler.plugin('compilation', function () {
          // This is just a utility, not part of the server
          // eslint-disable-next-line no-console
          console.log(new Date(), 'Build Started!');
        });
      }
    }
  ] : []
}
