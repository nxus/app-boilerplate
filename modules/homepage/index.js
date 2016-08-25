/*
* @Author: mike
* @Date:   2016-05-19 21:26:41
* @Last Modified 2016-08-25
* @Last Modified time: 2016-08-25 10:41:01
*/

'use strict';

import {application, NxusModule} from 'nxus-core'

export default class Homepage extends NxusModule {
  constructor(app) {
    super(app)

    this.log.debug('Loading Homepage')
  }
}