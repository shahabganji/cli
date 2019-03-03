var path = require('path');
var fs = require('fs');

// hide warning //
var emitter = require('events');
emitter.defaultMaxListeners = 20;

var appRoot = 'dist/lib/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

var paths = {
  root: appRoot,
  source: appRoot + '**/*.js',
  doc:'./doc',
  specs: 'spec/**/*.js',
  packageName: pkg.name
};

module.exports = paths;
