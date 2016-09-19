import {ViewController} from 'nxus-web'

export default class MVCTestItem extends ViewController {

  constructor() {
    super({
//      modelIdentity: 'mvc_test_item',
      displayName: 'Items'
    })
  }

  detail(req, res, query) {
    return super.detail(req, res, query).then((ctx) => {
      // let object = ctx.object
      return {
        custom: "Customizing",
        ...ctx
      }
    })
  }
}
