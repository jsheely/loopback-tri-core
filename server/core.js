'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var debug = require('debug')('app:core');
var config = require('./config/index');

var app = loopback();

module.exports = {
    loopback: app,
    config: config
};

boot(app, __dirname);

app.start = function () {
    console.log('Core Initialized.');
};

if (require.main === module || (
    require.main.filename.indexOf('interceptor.js') !== -1 &&
    (require.main.children || []).indexOf(module) !== -1)
) {
    app.start();
}
