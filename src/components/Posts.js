import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/postAction'
class Posts extends Component {
  componentDidMount() {
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

const mapStateToProps = (state) => {
  return {
    items: state.posts.items,
    item: state.posts.item,
  }
}
Posts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
}
//connect the action with components
export default connect(mapStateToProps, { fetchPost })(Posts)
