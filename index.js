/*
* @Author: mike
* @Date:   2016-05-20 06:56:14
* @Last Modified 2016-09-06
* @Last Modified time: 2016-09-06 18:40:33
*/

'use strict';

if(process.env.NODE_ENV != 'production') {
  require('babel-register');
} else {
  process.env['modulesDir'] = __dirname+"/lib"
  var g = require('idle-gc');
  g.start();
} 

var application = require('nxus-core').application

application.start()

