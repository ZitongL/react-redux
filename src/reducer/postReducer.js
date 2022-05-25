import { FETCH_POSTS, NEW_POST } from '../actions/type'
//reducer: return a new state
const initialState = {
  items: [],
  item: {},
}

// step3 :
//we need to return a new state based on action type
//Then we need to define actions
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      //return a new state
      return {
        // store the privious state
        ...state,
        //the data from aciton
        items: action.payload,
      }
    case NEW_POST:
      return {
        // store the privious state
        ...state,
        //the data from aciton
        item: action.payload,
      }
    default:
      return state
  }
}

export default postReducer
