import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Popular from './pages/Popular'
import Feed from './pages/Feed'
import Search from './pages/Search'
import Settings from './pages/Settings'
import './styles/main.scss'


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