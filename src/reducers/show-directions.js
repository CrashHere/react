import {SHOW_DIRECTIONS_TRUE, SHOW_DIRECTIONS_FALSE} from '../actions'

function showDirections (state = false, action) {
  switch (action.type) {
    case SHOW_DIRECTIONS_TRUE:
      return true

    case SHOW_DIRECTIONS_FALSE:
      return false

    default:
      return state
  }
}

export default showDirections
