import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.login = this.login.bind(this)
    }

    login(e) {
        e.preventDefault()
        fetch('http://40.127.101.155/db/login/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }

    render() {
        return (
            <div className="login">
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
                <div className="smallText">
                    <p>What is my password?</p>
                    <Link to={'/register'} className="smallText">
                        It is finally my time - lets get registered
                </Link>
                </div>
            </div>
        )
    }
}

export default Login