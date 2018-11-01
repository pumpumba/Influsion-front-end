import React from 'react'

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            age: '',
            sex: false
        }

        this.registerNewUser = this.registerNewUser.bind(this)
        this.registerSuccsessfull = this.registerSuccsessfull.bind(this)
        this.registerUnsuccsessfull = this.registerUnsuccsessfull.bind(this)
    }

    registerNewUser(e) {
        e.preventDefault()
        fetch('http://40.127.101.155/db/register_user/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(response => (response.createSuccess) ? this.registerSuccsessfull() : this.registerUnsuccsessfull())
    }

    registerSuccsessfull() {
        console.log('suc')
    }

    registerUnsuccsessfull() {
        console.log('usuc')
    }

    render() {
        return (
            <form className="register">
                <h1>inFlusion</h1>
                <h2>Register</h2>
                <input
                    onChange={(e) => this.setState({ username: e.target.value })}
                    placeholder="Username"
                >
                </input>
                <input
                    onChange={(e) => this.setState({ password: e.target.value })}
                    placeholder="Password"
                    type="password"></input>
                <input
                    onChange={(e) => this.setState({ email: e.target.value })}
                    placeholder="Email"
                >
                </input>
                <input
                    onChange={(e) => this.setState({ age: e.target.value })}
                    placeholder="Age"
                >
                </input>
                <select name="sex">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button onClick={this.registerNewUser}>Register</button>
            </form>
        )
    }
}

export default Register