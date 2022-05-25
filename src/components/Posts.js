import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/postAction'
class Posts extends Component {
  componentDidMount() {
    //step6 :
    // trigger action
    this.props.fetchPost()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item) {
      this.props.items.unshift(nextProps.item)
    }
  }
  render() {
    const postItems = this.props.items.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}
//step 7:
//we'll get a new state from the reducer.
//So we need to make the state to the props here
const mapStateToProps = (state) => {
  return {
    // key (the name we want use in this react components : this.props.items)
    //value:
    //state: the rootReducer Object
    //posts: The posts here is because is the key to the postReducer(child Reducer)
    //Thus, in my view, the state.posts is the new state from postReducer what has changed in this app
    //we can use the key to access to the value
    items: state.posts.items,
    item: state.posts.item,
  }
}

//Step8:
//cuz the new state or action dispatch returned can be accessed by using this.props
//we need to use PropTypes to define these props type.
Posts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
}
//Step 5 :
//if we want to trigger the action function,we need to connect them
//using connect(mapState,mapDispatch)(MyComponents) from react-redux
//now We can use this.props.fetchPost to trigger the action function
//connect the action with components
export default connect(mapStateToProps, { fetchPost })(Posts)
