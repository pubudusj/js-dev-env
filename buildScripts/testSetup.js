// This file is not transpiled. So must use CommonJS and ES5

// Register babel to transpile the tests before run
require('babel-register')();

// Disable web pack features that Mocha doesn't understand.
require.extensions[".css"] = function() {};
