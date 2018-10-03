import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Popular from './pages/Popular'
import Feed from './pages/Feed'
import Search from './pages/Search'
import Settings from './pages/Settings'
import './styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Index = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Popular} />
        <Route exact path='/feed' component={Feed} />
        <Route path='/search' component={Search} />
        <Route path='/settings' component={Settings} />
      </div>
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('index'))
