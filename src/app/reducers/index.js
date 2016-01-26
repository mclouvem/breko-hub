import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import { errorReducers as error } from './errorReducers'
import { flashReducers as flash } from './flashReducers'
import { exampleReducers as example } from './exampleReducers'

export default combineReducers({
  error,
  flash,
  example,
  routing: routeReducer,
})
