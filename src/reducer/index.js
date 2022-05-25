import { combineReducers } from 'redux'
import postReducer from './postReducer.js'
//step 2:
//define and return the rootReducer, we use combineReducers from redux to
//to combine all children reducer as key(name) : value(reducer)
//Then we need to define the child reducer
export default combineReducers({
  //posts Reducer used to change the posts state
  posts: postReducer,
})
