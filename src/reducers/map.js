import {MAP} from '../actions'

function map (state = null, action) {
  switch (action.type) {
    case MAP:
      return action.map

    default:
      return state
  }
}

export default map