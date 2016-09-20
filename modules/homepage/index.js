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
import {admin} from 'nxus-admin'

export default class Homepage extends NxusModule {
  constructor(app) {
    super(app)

    this.log.debug('Loading Homepage')

    router.route("/hi", (req, res) => {
      res.send("Hi")
    }) 

    templater.template(__dirname+"/templates/homepage.ejs", 'page')
    templater.template(__dirname+"/templates/my-admin-page.ejs")

    router.route("/", ::this.homepage)

    clientjs.includeScript('homepage', __dirname+"/client/component.js")

    admin.page({route: '/my-page', icon: 'fa fa-question', order: 1}, 'my-admin-page')

    admin.page('my-direct-page', (req, res, next) => {
      res.send('test')
      next()
    })

    admin.page('my-redirect-page', (req, res, next) => {
      res.redirect('/admin')
      next()
    })

    admin.page('my-text-page', (req, res) => {
      return 'text'
    })

    admin.page('my-promise-page', (req, res) => {
      return Promise.resolve('promise text')
    })

    admin.page('my-object-page', (req, res) => {
      return {blah: 'doh'}
    })

    admin.manage('other_item')
  }

  homepage (req, res) {
    templater.render("homepage", {title: 'Welcome to Nxus', greeting: "Hi"}).then(::res.send)
  }
}
