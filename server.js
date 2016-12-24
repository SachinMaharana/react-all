let express = require('express');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpack = require('webpack');
let webpackConfig = require('./webpack.config.js');
let app = express();

let compiler = webpack(webpackConfig);


app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

let server = app.listen(3000, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
