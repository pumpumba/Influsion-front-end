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
      /*
      this.deleteSuccsessfull = this.deleteSuccsessfull.bind(this)
      this.deleteUnsuccsessfull = this.deleteUnsuccsessfull.bind(this)
      this.resetState = this.resetState.bind(this)*/
    }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  /*
  deleteSuccsessfull() {
      this.setState({
          deleteSuccsessfull: true
      })
  }

  deleteUnsuccsessfull() {
      this.setState({
          deleteUnsuccsessfull: true
      })
  }

  resetState() {
      this.setState({
          deleteUnsuccsessfull: false,
          deleteSuccsessfull: false
      })

  deleteAccount (e) {
    e.preventDefault()
    fetch('http://40.127.101.155/db/delete_user', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usrid: this.props.userID, password: e.password)
    })
    .then(response => response.json())
    .then(response => (response.createSuccess) ? this.props.deleteSuccsessfull() : this.props.deleteUnsuccsessfull())
  } */

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
                  <input
                      onChange={(e) => this.setState({ password: e.target.value })}
                      placeholder="Confirm Password"
                      type="password"></input>
                  </form>
                  <div className="confirmOptions">
                  <Link /*onClick={this.deleteAccount()}*/  to='/delete' className="setting">Confirm</Link>
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
