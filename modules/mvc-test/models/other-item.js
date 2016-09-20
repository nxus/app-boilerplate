import {BaseModel} from 'nxus-storage'

export default BaseModel.extend({
  identity: 'other_item',
  attributes: {
    name: 'string',
    number: 'number'
  }
})
