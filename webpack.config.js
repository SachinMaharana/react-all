var webpack = require('webpack');
var path = require('path');

var BUILD = path.resolve(__dirname + '/www')
var APP = path.resolve(__dirname + '/src')

var config = {
    entry: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', APP + '/main.jsx'],
    output: {
        path: BUILD,
        filename: 'bundle.js'
    },
    resolve: {
   extensions: ['', '.js', '.jsx']
 },
    plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
],
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP,
            loaders: ['react-hot', 'babel']
        }]
    }
}

module.exports = config;
