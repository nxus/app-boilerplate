/*
* @Author: mike
* @Date:   2016-05-19 21:26:41
* @Last Modified 2016-05-19
* @Last Modified time: 2016-05-19 21:49:43
*/

'use strict';

module.exports = function(app) {
  app.get('router').route('/', function(req, res) {
    app.get('templater').render('page', {
      title: 'Hello',
      content: 'World'
    }).then(res.send.bind(res))
  })
}