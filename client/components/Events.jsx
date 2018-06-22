import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Events = () => {
  return (
    <div className='event-home'>
      <div id='title'>
        <h1 id='event-title'>Event Page</h1>
        <img id='event-thought' src='images/event.jpg' alt='thought bubble'/>
      </div>
      <div>
        <h1 id='event-title'>Cultural event</h1>
      </div>
    </div>
  )
}

export default Events
