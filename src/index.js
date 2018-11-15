import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Popular from './pages/Popular'
import Feed from './pages/Feed'
import Search from './pages/Search'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
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
        localStorage.setItem('userId', userInfo.usrid)
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
                    <Route path='/' component={() => <Login updateUserId={this.updateUserId} userId={this.state.userId} />} />
                </Router>
            )
        }

        return (
            <Router>
                <div>
                    <Route exact path='/' render={(props) => <Popular {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/feed' render={(props) => <Feed {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/search' render={(props) => <Search {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/:influencerid' render={(props) => <InfluencerFeed {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/settings' render={(props) => <Settings {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/login' render={(props) => <Settings {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/register' render={(props) => <Register {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('index'))