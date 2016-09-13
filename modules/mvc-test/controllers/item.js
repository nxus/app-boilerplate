import {ViewController} from 'nxus-web'

export default class MVCTestItem extends ViewController {

  get modelIdentity() { return 'mvc_test_item' }

  get displayName() { return 'Items' } 

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
