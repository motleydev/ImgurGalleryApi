'use strict';

/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class WebpackDistConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      // cache: false,
      devtool: 'source-map',
      entry: [
        path.resolve('src/client.js'),
        '../node_modules/material-design-lite/material.min.js',
        '../node_modules/material-design-lite/material.min.css',
        './styles/material-icons.css'
      ],
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
        }),
        new HtmlWebpackPlugin({
          template: './index.html',
          inject: 'body',
          filename: 'index.html'
        }),
        // new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin()
      ]
    };

    // Deactivate hot-reloading if we run dist build on the dev server
    // this.config.devServer.hot = false;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dist';
  }
}

module.exports = WebpackDistConfig;
