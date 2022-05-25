import logo from './logo.svg'
import './App.css'
import Posts from './components/Posts'
import { Component } from 'react'
//react and reducer
import { Provider } from 'react-redux'
//import the redux store
import { store } from './store'
import PostForm from './components/PostForm'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    )
  }
}

export default App
