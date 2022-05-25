import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index.js'
const initialState = {}
const middleware = [thunk]
export const store = createStore(
  rootReducer, // reducer
  initialState, //state
  applyMiddleware(...middleware), //middleware
)
