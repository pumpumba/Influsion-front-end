import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Popular from './pages/Popular'
import Feed from './pages/Feed'
import InfluencerFeed from './pages/Influencerfeed'
import Search from './pages/Search'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
import ModifyUser from './pages/ModifyUser'
import Delete from './pages/Delete'
import './styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt)

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          userId: 0
        }
        this.updateUserId = this.updateUserId.bind(this)
    }

    updateUserId(newId) {
        this.setState({userId: newId})
    }


    render() {
  return(
    <Router>
      <div>
        <Route exact path='/' component={Popular} />
        <Route path='/feed' component={Feed} />
        <Route path='/search' component={Search} />
        <Route path='/settings' component={Settings} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/modifyUser' component={ModifyUser} />
        <Route path='/delete' component={Delete} />
      </div>
    </Router>
  )
 }
}

ReactDOM.render(<Index />, document.getElementById('index'))
