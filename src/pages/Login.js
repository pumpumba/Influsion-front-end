import React from 'react'
import { Link } from 'react-router-dom'
import {BACKEND_URL} from './../constants'

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
        this.setUnsuccsessfull = this.setUnsuccsessfull.bind(this)
        this.resetError = this.resetError.bind(this)
    }

    login(e) {
        e.preventDefault()
        fetch(BACKEND_URL + 'db/login/', {
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

    loginUnsuccsessfull(e) {
      this.setUnsuccsessfull()
      this.resetError(e)
    }

    setUnsuccsessfull(){
        this.setState({
          loginFailed: true,
          errorCounter: this.state.errorCounter+1
        })
    }

    resetError(e){
        setTimeout(function(){
             this.setState({loginFailed:false});
        }.bind(this),1984);
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
                {this.state.loginFailed && <span className='error-msg'>Something went wrong...Please try again</span>}

                <div className="small-text">
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
