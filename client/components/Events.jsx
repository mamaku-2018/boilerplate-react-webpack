import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Events = () => {
  return (
    <div className='event-home'>
      <script src="art-project.js"></script>
      <script src="sound.js"></script>

      <div id='title'>
        <h1 id='event-title'>Event Page</h1>
        <img id='event-thought' src='images/event.jpg' alt='thought bubble'/>
      </div>
      <div>
        <h1 id='event-contents'> This is the first event in DEV Academy </h1>
      </div>
      <div>
        <h1 id='event-contents'> This is the firdsdsddst event in DEV Academy </h1>
      </div>
      <img classNamen ='event-submarine' src='images/submarine.png' id="submarine"/>
      <img classNamen ='event-missile' src="images/missile3.png" width="0" id="seaMissile" />
    </div>
  )
}

export default Events
