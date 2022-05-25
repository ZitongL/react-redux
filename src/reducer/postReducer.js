import { FETCH_POSTS, NEW_POST } from '../actions/type'
//reducer: return a new state
const initialState = {
  items: [],
  item: {},
}

const postReducer = (state = initialState, action) => {
  //   console.log('reducers')
  switch (action.type) {
    case FETCH_POSTS:
      //return a new state
      return {
        ...state,
        items: action.payload,
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state
  }
}

export default postReducer
