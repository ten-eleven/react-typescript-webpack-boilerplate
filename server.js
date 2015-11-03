var webpack = require('webpack');
var WebpackConfig = require("webpack-config");
var path = require("path");

var env = {
  production: process.env.NODE_ENV === 'production'
};

if (!env.production) {

	var config = new WebpackConfig().extend('webpack.dev.config');
  var WebpackDevServer = require('webpack-dev-server');

	new WebpackDevServer(webpack(config), {
		publicPath: config.output.publicPath,
		hot: true,
		historyApiFallback: true
	}).listen(3000, 'localhost', function (err, result) {
		if (err) {
			console.log(err);
		}

		console.log('Listening at localhost:3000');
	});

} else {
	var express = require('express');
	var app = express();

  app.use("/static",express.static(__dirname + '/dist'));

	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, "index.html"));
	});

	var port = Number(process.env.PORT || 3001);
	app.listen(port, function () {
	  console.log('server running at localhost:3001, go refresh and see magic');
	});

}
