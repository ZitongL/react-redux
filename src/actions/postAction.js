import { FETCH_POSTS, NEW_POST } from './type'

//step4:
//we define the asyn action function here
//the structure of this function is :
//  const funcName = ()=>{
//     return (dispatch)=>{
//         dispatch(aciton Object)
//     }
// }
//Then we need to trigger these actions in react Components
export const fetchPost = () => (dispatch) => {
  //   console.log('123')
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => {
      //dispatch action to the reducer
      dispatch(
        //action object
        {
          //action type
          type: FETCH_POSTS,
          //data
          payload: posts,
        },
      )
    })
}

export const createPost = (post) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((newPost) =>
      dispatch({
        type: NEW_POST,
        payload: newPost,
      }),
    )
}
