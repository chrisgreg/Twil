#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREDENTIAL_FILE = '.twilcredentials.json';
var credentials = (0, _utils.readCredentials)(CREDENTIAL_FILE);
var twitter = (0, _utils.createTwitterClient)(credentials);

_commander2.default.command('t [status]').description('Tweet your status').action(function (cmd) {
  (0, _utils.tweet)(twitter, cmd);
});

_commander2.default.parse(process.argv);