import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Facilities = (props) => {
  return (
    <div className='facback'>
      <div clasName='Heading'>
        <h1>Our Facilities</h1>
      </div>
      <div className='fac-pic'>
        <img src='../../images/panslab.jpeg'/>
      </div>
      <div className='fac-sparkle'>
        <img src='../../images/fac-sparlkle.gif'/>
      </div>
      <div className='fac-plunger'>
        <img src='../../images/fac-plunger.png'/>
      </div>
      <div className='fac-list'>
        <ul>
          <li>3 x fridges</li>
          <li>1 x electrical stovetop element</li>
          <li>1 x toaster</li>
          <li>1 x microwave</li>
          <li>1 x jug</li>
          <li>1 x sandwhich press/grill</li>
          <li>coffee devices include:</li>
          <li>plunger</li>
          <li>stovetop</li>
          <li>compostable/recyclable waste management system</li>
        </ul>
      </div>
      <div className='contact'>
        <p> If there are any issues with our kihini facilities please inform Marion. Thank you!
        </p>
      </div>
    </div>
  )
}

export default Facilities
