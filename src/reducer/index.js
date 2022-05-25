import { combineReducers } from 'redux'
import postReducer from './postReducer.js'

//define and return the rootReducer
export default combineReducers({
  //posts Reducer used to change the posts state
  posts: postReducer,
})
