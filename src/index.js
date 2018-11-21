import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Popular from './pages/Popular'
import Feed from './pages/Feed'
import Search from './pages/Search'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
import ModifyUser from './pages/ModifyUser'
import Delete from './pages/Delete'
import InfluencerFeed from './pages/InfluencerFeed'
import './styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt, faThumbsUp, faThumbsDown, faEye, faComment } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt, faThumbsUp, faThumbsDown, faEye, faComment)

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: 0
        }
        this.updateUserId = this.updateUserId.bind(this)
    }

    updateUserId(newId) {
        this.setState({ userId: newId })
        localStorage.setItem('userId', newId)
    }

    componentWillMount() {
        if (localStorage.getItem('userId') != null && this.state.userId == 0) {
            this.setState({
                userId: localStorage.getItem('userId')
            })
        }
    }

    render() {
        if (this.state.userId == 0) {
            return (
                <Router>
                    <Switch>
                        <Route path='/register' render={(props) => <Register {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                        <Route path='/' component={() => <Login updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    </Switch>
                </Router>
            )
        }else{
            return (
              <Router>
                  <Switch>
                      <Route exact path='/' render={(props) => <Popular {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/feed' render={(props) => <Feed {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/search' render={(props) => <Search {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/settings' render={(props) => <Settings {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/login' component={() => <Settings updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/register' render={(props) => <Register {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route path='/delete' render={(props) => <Delete {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route path='/modify-user' render={(props) => <ModifyUser {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route path='/:influencerid' render={(props) => <InfluencerFeed {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                  </Switch>
              </Router>
            )
        }
    }
}

ReactDOM.render(<Index />, document.getElementById('index'))