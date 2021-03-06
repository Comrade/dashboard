// This file is part of Pa11y Dashboard.
//
// Pa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.

'use strict';

const bodyParser = require('body-parser');
const compression = require('compression');
const createClient = require('pa11y-webservice-client-node');
const EventEmitter = require('events').EventEmitter;
const express = require('express');
const hbs = require('express-hbs');
const http = require('http');
const pkg = require('./package.json');

var auth = require("http-auth");
var basic = auth.basic({
  authRealm: "Private area",
  file: __dirname + "/htpasswd",
  authType: "basic"
});

module.exports = initApp;

// Initialise the application
function initApp(config, callback) {
	config = defaultConfig(config);

	let webserviceUrl = config.webservice;
	if (typeof webserviceUrl === 'object') {
		webserviceUrl = `http://${webserviceUrl.host}:${webserviceUrl.port}/`;
	}

	const app = new EventEmitter();
	app.address = null;
	app.express = express();
    app.express.use(auth.connect(basic));
	app.server = http.createServer(app.express);

    // app.server = http.createServer(function(request, response) {
    //   basic.apply(request, response, function(username) {
    //     response.writeHead(200, {"Content-Type": "text/plain"});
    //     response.write("Hello " + username);
    //     response.end();
    //   });
    // });

	app.webservice = createClient(webserviceUrl);

	// Compression
	app.express.use(compression());

	// Public files
	app.express.use(express.static(`${__dirname}/public`, {
		maxAge: (process.env.NODE_ENV === 'production' ? 604800000 : 0)
	}));

	// General express config
	app.express.disable('x-powered-by');
	app.express.use(bodyParser.urlencoded({
		extended: true
	}));

	// View engine
	app.express.engine('html', hbs.express4({
		extname: '.html',
		contentHelperName: 'content',
		layoutsDir: `${__dirname}/view/layout`,
		partialsDir: `${__dirname}/view/partial`,
		defaultLayout: `${__dirname}/view/layout/default`
	}));
	app.express.set('views', `${__dirname}/view`);
	app.express.set('view engine', 'html');

	// View helpers
	require('./view/helper/date')(hbs);
	require('./view/helper/string')(hbs);
	require('./view/helper/url')(hbs);

	// Populate view locals
	app.express.locals = {
		lang: 'en',
		year: (new Date()).getFullYear(),
		version: pkg.version,
		repo: pkg.homepage,
		bugtracker: pkg.bugs,
		noindex: config.noindex,
		readonly: config.readonly,
		siteMessage: config.siteMessage,
		settings: {}
	};

	app.express.use((req, res, next) => {
		res.locals.isHomePage = (req.path === '/');
		res.locals.host = req.hostname;
		next();
	});

	// Load routes
	require('./route/index')(app);
	require('./route/task/index')(app);
	require('./route/result/index')(app);
	require('./route/result/download')(app);
	if (!config.readonly) {
		require('./route/new')(app);
		require('./route/task/delete')(app);
		require('./route/task/run')(app);
		require('./route/task/edit')(app);
		require('./route/task/ignore')(app);
		require('./route/task/unignore')(app);
	}

	// Error handling
	app.express.get('*', (req, res) => {
		res.status(404);
		res.render('404');
	});
	app.express.use((err, req, res, next) => {
		/* jshint unused: false */
		if (err.code === 'ECONNREFUSED') {
			err = new Error('Could not connect to Pa11y Webservice');
		}
		app.emit('route-error', err);
		if (process.env.NODE_ENV !== 'production') {
			res.locals.error = err;
		}
		res.status(500);
		res.render('500');
	});

	app.server.listen(config.port, err => {
		const address = app.server.address();
		app.address = `http://${address.address}:${address.port}`;
		callback(err, app);
	});

}

// Get default configurations
function defaultConfig(config) {
	if (typeof config.noindex !== 'boolean') {
		config.noindex = true;
	}
	if (typeof config.readonly !== 'boolean') {
		config.readonly = false;
	}
	return config;
}
