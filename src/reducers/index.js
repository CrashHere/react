import {combineReducers} from 'redux'

import errorMessage from './error-message'
import map from './map'
import showDirections from './show-directions'

export default combineReducers({
  errorMessage,
  map,
  showDirections,
})
