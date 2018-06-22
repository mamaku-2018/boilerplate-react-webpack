import React from 'react'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      word: 'Cafe Kihini'
    }
    this.changeWord = this.changeWord.bind(this)
    this.endWord = this.endWord.bind(this)
  }

  changeWord () {
    this.setState({
      word: 'Meow Meow'
    })
  }

  endWord () {
    this.setState({
      word: 'Come eat!'
    })
  }

  render () {
    return (
      <div className='content-home'>
        <div id='title' onMouseOver={this.changeWord} onMouseLeave={this.endWord}>
          <img id='thought' src='images/thought.png' alt='thought bubble'/>
          <h1 id='main-title'>{this.state.word}</h1>
        </div>
        <img id='toast' src='images/toaster.png' alt='toaster'/>
      </div>
    )
  }
}

export default Home
