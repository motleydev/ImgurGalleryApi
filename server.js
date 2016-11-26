/* eslint no-console: 0 */
const path = require('path');
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js')();
const fetch = require('fetch').fetchUrl;
const bodyParser = require("body-parser");


const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    },
     index: "./src/index.html",
  });

  app.use(middleware);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(webpackHotMiddleware(compiler));

// Api Proxy
  app.post('/api', function(req, res) {

     let {imgurGallery, imgurSort, galleryViralCheck} = req.body

    let f =fetch(
      `https://api.imgur.com/3/gallery/${imgurGallery}/${imgurSort}/0?showViral=${galleryViralCheck}.json`,
      {
        method: 'GET',
        headers: {
          'Authorization': 'Client-ID beba972e29f0b1d'
        }
      },
       function(error, meta, body) {
         res.send(body)
      })
  });


  app.get('/', function response(req, res) {
    res.write(fs.readFileSync(path.join(__dirname, 'src/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}



app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

// https://github.com/christianalfoni/webpack-express-boilerplate/blob/master/webpack.config.js
// http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup
// http://madole.github.io/blog/2015/08/26/setting-up-webpack-dev-middleware-in-your-express-application/
//
// https://github.com/react-webpack-generators/generator-react-webpack
// https://github.com/stylesuxx/generator-react-webpack-redux
