import React from 'react'

class Register extends React.Component {

    constructor(props) {
        super(props)
    }

    registerNewUser(e) {
        e.preventDefault()
        console.log('hej')
    }

    render() {
        return (
            <form className="register">
                <h1>inFlusion</h1>
                <h2>Register</h2>
                <input placeholder="Username"></input>
                <input placeholder="Password" type="password"></input>
                <input placeholder="Email"></input>
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
