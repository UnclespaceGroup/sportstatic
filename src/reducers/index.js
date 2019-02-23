import * as types from '../constants'
import { initialStore } from '../store'

export default (state = initialStore, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return{
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}