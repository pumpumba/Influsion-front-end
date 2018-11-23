import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loginFailed: false
        }
        this.login = this.login.bind(this)
        this.loginSuccsessfull = this.loginSuccsessfull.bind(this)
        this.loginUnsuccsessfull = this.loginUnsuccsessfull.bind(this)
    }

    login(e) {
        e.preventDefault()
        fetch('http://40.127.101.155/db/login/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username : this.state.username, password : this.state.password})
        })
            .then(response => response.json())
            .then(response => (response.dbResults.loginSuccess) ? this.loginSuccsessfull(response.dbResults) : this.loginUnsuccsessfull())
            .catch(error => this.loginUnsuccsessfull())
    }

    loginSuccsessfull(userInfo) {
        this.props.updateUserId(userInfo.usrid)
    }

    loginUnsuccsessfull() {
      this.setState({
        loginFailed: true
      })
    }

    render() {
        return (
            <div className="login mobile-page">
                <h1 className="loginTitle">inFlusion</h1>
                <input
                    placeholder="Username"
                    onChange={(e) => this.setState({ username: e.target.value })}
                >
                </input>
                <input
                    onChange={(e) => this.setState({ password: e.target.value })}
                    placeholder="Password"
                    type="password">
                </input>
                <button onClick={this.login}>
                    Lets go into the wilderness!
                </button>
                {this.state.loginFailed && <span className='error-msg'>Something went wrong... Please try again</span>}

                <div className="small-text">
                    <p>What is my password?</p>
                    <Link to={'/register'} className="small-text">
                        It is finally my time -
                    </Link>
                    <br/>
                    <Link to={'/register'} className="small-text">
                        let's get registered
                    </Link>
                </div>
            </div>
        )
    }
}

export default Login
