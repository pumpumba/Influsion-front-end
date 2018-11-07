import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Settings extends React.Component {
  constructor () {
    super()
    this.state = {
      isHidden: true,
      password: ''
      }
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  deleteAccount () {
    /db/delete_user
  }


  render() {
    return (
     <div
     className="Settings"
     hidden-state={this.state.isHidden ? 'hidden' : 'visible'}
     onClick={this.onClick}
     >
        <Header/>
        <main>
            <h1 className="title">Settings</h1>
            <Link to='/login' className="setting">Log in</Link>
            <Link to='/modifyUser' className="setting">Edit information</Link>
            <Link className="setting" onClick={this.toggleHidden.bind(this)} to='/settings'>
                Delete account :'(
            </Link>
            <div className="DeleteComponent">
                  <h2> Are you sure that you want to delete your account? </h2>
                  <form>
                      <h2>Register</h2>
                      <input
                          onChange={(e) => this.setState({ username: e.target.value })}
                          placeholder="Username"
                      >
                      </input>
                  </form>
                  <div className="confirmOptions">
                  <Link onClick={this.deleteAccount()}to='/delete' className="setting">Confirm</Link>
                  <Link onClick={this.toggleHidden.bind(this)} to='/settings' className="setting" > Gosh no, cancel </Link>
                  </div>
            </div>
            <div className='blur-overlay'></div>
        </main>
        <Footer/>
    </div>
  )
  }
}

export default Settings
