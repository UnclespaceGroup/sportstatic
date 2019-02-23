import * as types from '../constants'
import { initialStore } from '../store'

export default (state = initialStore, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        ...action.payload
      }
    case types.ADD_RESULT:
      const data = action.payload
      console.log(data)
      const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
      const currentObject = {mass: data.mass, count: data.count}

      const current = state.profile[data.type][date]
        ? state.profile[data.type][date].approach.concat(currentObject)
        : [{currentObject}]


      return {
        ...state,
        profile: {
          ...state.profile,
          [data.type]: {
            ...state.profile[data.type],
            [date]: {
              date: date,
              approach: current
            }
          }
        }
      }
    default:
      return state
  }
}