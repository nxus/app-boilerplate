import {BaseModel} from 'nxus-storage'

export default BaseModel.extend({
  identity: 'mvc_test_item',
  attributes: {
    name: 'string',
    number: 'integer'
  }
})
