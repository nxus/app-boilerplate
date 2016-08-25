/*
* @Author: mike
* @Date:   2016-05-20 06:56:14
* @Last Modified 2016-08-25
* @Last Modified time: 2016-08-25 10:34:50
*/

'use strict';

if(process.env.NODE_ENV != 'production') {
  require('babel-register');
  var modulesDir = __dirname+"/modules"
} else {
  var modulesDir = __dirname+"/lib"
  var g = require('idle-gc');
  g.start();
} 

var application = require('nxus-core').application

application.start()

