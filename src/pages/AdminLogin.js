import React from 'react'


class AdminLogin extends React.Component {
  constructor (props){
    super(props)
    this.state = {
        username: '',
        password: '',
        loginFailed: false,
        loginTrue: false,
        adminUserId: 0
    }
    this.login = this.login.bind(this)
    this.adminloginSuccess = this.adminloginSuccess.bind(this)
  }


  login(e){
    e.preventDefault()
    if (this.state.username == 'admin' && this.state.password =='1234') {
      this.adminloginSuccess()
      window.location.href = '/admin'
    } else {
      this.setState({
        loginFailed: true
      })
    }
  }

  adminloginSuccess() {
    this.props.updateAdminId(1)
  }

  render () {
    return(
      <div className="admin-login-container">
        <div className="adminloginTitle">
          <h1>inFlusion</h1>
          <h2> Admin Login</h2>
        </div>
        <div>
          <input
            onChange={(e) => this.setState({ username: e.target.value })}
            className="login-input"
            type="text"
            placeholder="username"

          />
          <input
            onChange={(e) => this.setState({ password: e.target.value })}
            className="login-input"
            type="password"
            placeholder="password"
          />
          {this.state.loginFailed && <p className='error-msg'> Incorrect username or password. Please try again</p>}
          <button className="loginButton" onClick={this.login}>
            Login
          </button>
        </div>
        <a className='small-text' href='/'> Leave Admin mode </a>
     </div>

    )
  }
}

export default AdminLogin
