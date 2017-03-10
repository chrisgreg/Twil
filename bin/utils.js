'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tweet = exports.createTwitterClient = exports.readCredentials = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _cliSpinner = require('cli-spinner');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readCredentials = exports.readCredentials = function readCredentials(credentialFile) {
  var filePath = _path2.default.join(process.env.HOME, credentialFile);
  var fileContent = _fs2.default.readFileSync(filePath);
  return JSON.parse(fileContent);
};

var createTwitterClient = exports.createTwitterClient = function createTwitterClient(credentials) {
  return new _twitter2.default(credentials);
};

var escapeQuotes = function escapeQuotes(str) {
  return str.replace(/[\""]/g, '\\"');
};
var log = function log(msg) {
  return console.log(_chalk2.default.green(msg));
};
var info = function info(msg) {
  return console.log(_chalk2.default.blue(msg));
};
var error = function error(msg) {
  return console.log(_chalk2.default.red(msg));
};

var tweet = exports.tweet = function tweet(twitter, message) {
  var progress = new _cliSpinner.Spinner(_chalk2.default.blue('%s Tweeting..'));
  progress.setSpinnerString('|/-\\');
  progress.start();

  var sanitisedMessage = escapeQuotes(message);
  var params = { status: sanitisedMessage };

  twitter.post('statuses/update', params).then(function (tweet) {
    progress.stop(true);
    info('-> ' + sanitisedMessage);
    log('\nTweet successful');
  }).catch(function (err) {
    progress.stop(true);
    error(err[0].message);
    throw err;
  });
};