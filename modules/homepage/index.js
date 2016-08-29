/*
* @Author: mike
* @Date:   2016-05-19 21:26:41
* @Last Modified 2016-08-25
* @Last Modified time: 2016-08-25 10:41:01
*/

'use strict';

import {application, NxusModule} from 'nxus-core'

import {router} from 'nxus-router'

import {templater} from 'nxus-templater'

export default class Homepage extends NxusModule {
  constructor(app) {
    super(app)

    this.log.debug('Loading Homepage')

    router.route("/hi", (req, res) => {
      res.send("Hi")
    })

    templater.templateDir(__dirname+"/templates", "page", "ejs")

    router.route("/", ::this.homepage)
  }

  homepage (req, res) {
    templater.render("homepage", {greeting: "Hi"}).then(::res.send)
  }
}
