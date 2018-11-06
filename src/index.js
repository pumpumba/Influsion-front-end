import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Popular from './pages/Popular'
import Feed from './pages/Feed'
import InfluencerFeed from './pages/Influencerfeed'
import Search from './pages/Search'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
import './styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt)

class Index extends React.Component {

    // 0 => not logged in
    constructor(props) {
        super(props)
        this.state = {
            userId: 0
        }
        this.updateUserId = this.updateUserId.bind(this)
    }

    updateUserId(newId) {
        this.setState({ userId: newId })
    }

    checkIfLoggedIn() {
        let curUrl = window.location.href
        if(this.state.userId == 0 && !curUrl.includes('login')) {
            let curUrl = window.location.href.split('/')
            let newUrl = curUrl[0] + '//' + curUrl[2] + '/login'
            console.log(newUrl)
            window.location.replace(newUrl)
        }
    }

    componentDidMount() {
        this.checkIfLoggedIn()
    }

    render() {

        return (
            <Router>
                <div>
                    <Route exact path='/' component={() => <Popular updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/feed' component={() => <Feed updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/search' component={() => <Search updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/settings' component={() => <Settings updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/login' component={() => <Login updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/register' component={() => <Register updateUserId={this.updateUserId} userId={this.state.userId} />} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('index'))
