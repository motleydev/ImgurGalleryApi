/* eslint no-console: 0 */
const path = require('path');
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const fetch = require('fetch').fetchUrl;
const bodyParser = require("body-parser");
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (isDeveloping) {
  const config = require('./webpack.config.js')();
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
    //  index: "./src/index.html",
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('/', function response(req, res) {
    res.write(fs.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('/', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}


  app.post('/api', function(req, res) {

    let {imgurGallery, imgurSort, imgurWindow, galleryViralCheck} = req.body

    let url = `https://api.imgur.com/3/gallery/${imgurGallery}/${imgurSort}/${imgurWindow}0?showViral=${galleryViralCheck}.json`

    let f =fetch(
      url,
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


app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
