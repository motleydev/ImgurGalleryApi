'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');
const path = require('path');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      devtool: 'cheap-module-source-map',
      entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
         path.resolve('src/client.js'),
        '../node_modules/material-design-lite/material.min.js',
        '../node_modules/material-design-lite/material.min.css',
        './styles/material-icons.css'
      ],
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      ]
    };
  }
}

module.exports = WebpackDevConfig;
