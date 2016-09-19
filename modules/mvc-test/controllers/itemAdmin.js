import {AdminController} from 'nxus-admin'

export default class MVCTestItemAdmin extends AdminController {

  constructor() {
    super({
      modelIdentity: 'mvc_test_item'
    })
  }

}
