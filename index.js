/*
* @Author: mike
* @Date:   2016-05-20 06:56:14
* @Last Modified 2016-08-02
* @Last Modified time: 2016-08-02 13:02:14
*/

'use strict';

var Application = require('nxus-core').Application

var myApp = new Application({ignore: ['.tmp', new RegExp("\.ejs")]})

myApp.start()