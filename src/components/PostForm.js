import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postAction'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    //get the current state
    const post = {
      title: this.state.title,
      body: this.state.body,
    }
    this.props.createPost(post)
  }
  render() {
    return (
      <div>
        <h1>Add content</h1>

        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">title</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="body">body</label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}
export default connect(null, { createPost })(PostForm)
