/*
* @Author: mike
* @Date:   2016-05-19 21:27:06
* @Last Modified 2016-05-19
* @Last Modified time: 2016-05-19 21:27:59
*/

'use strict';

import chai from 'chai'
chai.should()

import {request} from 'nxus-tester'

describe("Homepage", function() {
  this.timeout(3000)
  it("loads", function(done) {
    request.get(
      {
        url: '/',
        followRedirect: false
      },
      function(err, res, body) {
        if (err) done(err)
        res.statusCode.should.equal(200)
        done();
    })
  })
})