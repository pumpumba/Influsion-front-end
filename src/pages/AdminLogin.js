import React from 'react'


class AdminLogin extends React.Component {
  constructor (){
    super()
    this.state = {
        username: '',
        password: '',
        loginFailed: false,
        adminUserId: 0
    }
    this.login = this.login.bind(this)
  }


  login(e){
    e.preventDefault()

  }

  render () {
    return(
      <div className="admin-login-container">
        <div className="loginBox">
          <h1>
            Login
          </h1>
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
          <button className="loginButton" onClick={this.login}>
            Login
          </button>
        </div>
     </div>

    )
  }
}

export default AdminLogin
