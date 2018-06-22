import React from 'react'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      meow: new Audio('../public/audio/Cat_Meow.mp3')
    }
    this.playSound = this.playSound.bind(this)
  }
  playSound () {
    this.state.meow.play()
  }

  render () {
    return (
      <div className='content-home'>
        <div id='title'>
          <img id='thought' onMouseOver={this.playSound} src='images/thought.png' alt='thought bubble'/>
          <h1 id='main-title'>Cafe Kihini</h1>
        </div>
        <img id='toast' src='images/toaster.png' alt='toaster'/>
      </div>
    )
  }
}

export default Home
