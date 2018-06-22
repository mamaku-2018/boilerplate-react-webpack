import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Events = () => {
  return (

    <div className='event-home'>
      <div id='title'>
        <h1 id='event-title'>Event in Cafekihini</h1>
        <img id='event-thought' src='images/event.jpg' alt='thought bubble'/>
      </div>
      <div>
        <h1 id='event-contents'> This is the first cultural event in Cafekihini </h1>
      </div>
      <div>
        <h1 id='event-contents'> 21:00 28/06/2018 </h1>
      </div>
      <div className="eventvid">
        <iframe id="event-video" width="454" height="280" src="https://www.youtube.com/embed/Cof2njz5BBw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Events
