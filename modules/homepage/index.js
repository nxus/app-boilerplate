/*
* @Author: mike
* @Date:   2016-05-19 21:26:41
* @Last Modified 2016-09-13
* @Last Modified time: 2016-09-13 14:05:17
*/

'use strict';

import {application, NxusModule} from 'nxus-core'

import {router} from 'nxus-router'

import {templater} from 'nxus-templater'
import {clientjs} from 'nxus-clientjs'

export default class Homepage extends NxusModule {
  constructor(app) {
    super(app)

    this.log.debug('Loading Homepage')

    router.route("/hi", (req, res) => {
      res.send("Hi")
    }) 

    templater.templateDir(__dirname+"/templates", "page", "ejs")

    router.route("/", ::this.homepage)

    clientjs.includeScript('homepage', __dirname+"/client/component.js")
  }

  homepage (req, res) {
    templater.render("homepage", {greeting: "Hi"}).then(::res.send)
  }
}
