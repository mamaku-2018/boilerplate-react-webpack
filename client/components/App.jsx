import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Facilities from './Facilities'
import Events from './Events'
import Rules from './Rules'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Nav />

        <div className='frame'>
          <div className='content'>
            <Route path='/facilities' component={Facilities} />
            <Route path='/menu' component={Menu} />
            <Route path='/events' component={Events} />
            <Route path='/rules' component={Rules} />
            <Route path='/' component={Home} />

          </div>
        </div>

      </div>
    </Router>
  )
}

export default App
