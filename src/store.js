import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index.js'
const initialState = {}
const middleware = [thunk]
// step 1. create a redux store , pass the root Reducer
// then we need to define the root Reducer(./reducer/index.js)
export const store = createStore(
  rootReducer, // reducer
  initialState, //state
  applyMiddleware(...middleware), //middleware
)
