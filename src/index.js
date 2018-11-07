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
import './styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt)

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
                    <div>
                        <Route exact path='/' component={() => <Popular updateUserId={this.updateUserId} userId={this.state.userId} />}/>
                        <Route path='/feed' component={() => <Feed updateUserId={this.updateUserId} userId={this.state.userId} />} />
                        <Route path='/:influencerid' component={() => <InfluencerFeed updateUserId={this.updateUserId} userId={this.state.userId} />} />
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
