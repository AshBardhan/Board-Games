var env = process.env.NODE_ENV || 'dev';
var config = require('../config/' + env + 'Config');

module.exports = config;