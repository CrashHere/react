import {combineReducers} from 'redux'

import errorMessage from './error-message'
import map from './map'

export default combineReducers({
  errorMessage,
  map
})