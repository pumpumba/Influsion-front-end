import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Popular from './pages/Popular'
import Feed from './pages/Feed'
import Search from './pages/Search'
import Settings from './pages/Settings'
import Delete from './pages/Delete'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminPage from './pages/AdminPage'
import AdminLogin from './pages/AdminLogin'
import ModifyUser from './pages/ModifyUser'
import NotFound from './pages/NotFound'
import InfluencerFeed from './pages/InfluencerFeed'
import './styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt, faThumbsUp, faThumbsDown, faEye, faComment, faPlay, faHashtag} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faStar, faHeart, faSearch, faCogs, faRetweet, faCalendarAlt, faThumbsUp, faThumbsDown, faEye, faComment, faPlay, faHashtag)

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: 0,
            adminId: 0
        }
        this.updateUserId = this.updateUserId.bind(this)
        this.updateAdminId = this.updateAdminId.bind(this)
    }

    updateUserId(newId) {
        this.setState({ userId: newId })
        localStorage.setItem('userId', newId)
    }

    updateAdminId(newId) {
        this.setState({ adminId: newId })
        localStorage.setItem('adminId', newId)
    }

    componentWillMount() {
        if (localStorage.getItem('userId') != null && this.state.userId == 0) {
            this.setState({
                userId: localStorage.getItem('userId')
            })
        }
        if (localStorage.getItem('adminId') != null && this.state.adminId == 0) {
            this.setState({
                adminId: localStorage.getItem('adminId')
            })
        }
    }

    render() {
        if (this.state.adminId==0 && this.state.userId==0) {
            return (
                <Router>
                  <Switch>
                      <Route path='/adminlogin' render={(props) => <AdminLogin {...props} updateAdminId={this.updateAdminId} adminId={this.state.adminId} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route path='/admin' render={(props) => <AdminLogin {...props} updateAdminId={this.updateAdminId} adminId={this.state.adminId} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/register' render={(props) => <Register {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route path='/' component={() => <Login updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route path='/*' render={(props) => <NotFound {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    </Switch>
                </Router>
            )
        } else if (this.state.adminId==1 && this.state.userId==0) {
          return (
              <Router>
                <Switch>
                    <Route exact path='/admin' className="adminRoute" render={(props) => <AdminPage {...props} updateAdminId={this.updateAdminId} adminId={this.state.adminId}  updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route exact path='/' className="adminRoute" render={(props) => <AdminPage {...props} updateAdminId={this.updateAdminId} adminId={this.state.adminId} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route exact path='/admin-settings' render={(props) => <AdminSettings {...props} updateAdminId={this.updateAdminId} adminId={this.state.adminId} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route exact path='/admin-promote' render={(props) => <AdminPromote {...props} updateAdminId={this.updateAdminId} adminId={this.state.adminId} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route exact path='/admin-block' render={(props) => <AdminBlock {...props} updateAdminId={this.updateAdminId} adminId={this.state.adminId} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route exact path='/admin-create' render={(props) => <AdminCreate {...props} updateAdminId={this.updateAdminId} adminId={this.state.adminId} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route exact path='/admin-search' render={(props) => <AdminSearch {...props} updateAdminId={this.updateAdminId} adminId={this.state.adminId} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route exact path='/register' render={(props) => <Register {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                    <Route path='/:influencerid' render={(props) => <InfluencerFeed {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                </Switch>
              </Router>
          )
        } else {
            return (
              <Router>
                  <Switch>
                      <Route exact path='/' render={(props) => <Popular {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/feed' render={(props) => <Feed {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/search' render={(props) => <Search {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/settings' render={(props) => <Settings {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/delete' render={(props) => <Delete {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/login' component={() => <Settings updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route exact path='/register' render={(props) => <Register {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route path='/modify-user' render={(props) => <ModifyUser {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route path='/infl/:influencerid' render={(props) => <InfluencerFeed {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} /><Route path='/NotFound' render={(props) => <NotFound {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                      <Route render={(props) => <NotFound {...props} updateUserId={this.updateUserId} userId={this.state.userId} />} />
                  </Switch>
              </Router>
            )
        }
    }
}

ReactDOM.render(<Index />, document.getElementById('index'))
