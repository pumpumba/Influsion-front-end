import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Popular from './pages/Popular'
import Feed from './pages/Feed'
import Search from './pages/Search'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminPage from './pages/AdminPage'
import AdminLogin from './pages/AdminLogin'
import InfluencerFeed from './pages/InfluencerFeed'
import './styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt, faThumbsUp, faThumbsDown, faEye, faComment} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt, faThumbsUp, faThumbsDown, faEye, faComment)

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          userId: 1
        }
        this.updateUserId = this.updateUserId.bind(this)
    }

    updateUserId(newId) {
        this.setState({userId: newId})
    }


    render() {

        return (
                <Router>

                    <div className="routerDiv">
                        <Route exact path='/' component={() => <Popular updateUserId={this.updateUserId} userId={this.state.userId} />}/>
                        <Route exact path='/feed' component={() => <Feed updateUserId={this.updateUserId} userId={this.state.userId} />} />
                        <Route exact path='/search' component={() => <Search updateUserId={this.updateUserId} userId={this.state.userId} />} />
                        <Route exact path='/settings' component={() => <Settings updateUserId={this.updateUserId} userId={this.state.userId} />} />
                        <Route exact path='/login' component={() => <Login updateUserId={this.updateUserId} userId={this.state.userId} />} />
                        <Route exact path='/register' component={() => <Register updateUserId={this.updateUserId} userId={this.state.userId} />} />
                        <Route exact path='/admin'className="adminRoute" component={() => <AdminPage updateUserId={this.updateUserId} userId={this.state.userId} />} />
                        <Route exact path='/adminlogin' component={() => <AdminLogin updateUserId={this.updateUserId} userId={this.state.userId} />} />
                        <Route path='/influencerid' component={InfluencerFeed} />
                    </div>
                </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('index'))
