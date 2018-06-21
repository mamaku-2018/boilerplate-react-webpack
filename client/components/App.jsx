import React from 'react'
import {HashRouter as Router} from 'react-router-dom'


import Rules from './Rules'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Nav />

        <div className='frame'>
          <div className='content'>
            <Route path='/facilities' component={Facilities} />
            <Route path='/menu' component={Menu} />
            <Route path='/facilities' component={Facilities} />
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
