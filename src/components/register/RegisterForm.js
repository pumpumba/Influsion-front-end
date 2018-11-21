import React from 'react'
import {NavLink} from 'react-router-dom'

class RegisterForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            usernameError: '',
            password: '',
            passwordError: '',
            email: '',
            emailError: '',
            age: '',
            sex: 'Male'
        }

        this.registerNewUser = this.registerNewUser.bind(this)
        this.validateUsername = this.validateUsername.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.hasNumber = this.hasNumber.bind(this)
        this.hasCharacter = this.hasCharacter.bind(this)
        this.isEmail = this.isEmail.bind(this)
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
            .then(response => (response.createSuccess) ? this.props.registerSuccsessfull() : this.props.registerUnsuccsessfull())
            .catch(error => this.props.registerUnsuccsessfull())
    }

    validateUsername(input) {
        if (this.state.username.length <= 1) {
            this.setState({ usernameError: '\n Your username is too short.' })
        } else {
            this.setState({ usernameError: '' })
        }
    }

    validatePassword(input) {
        if (this.state.password.length <= 6) {
            this.setState({ passwordError: '\n Your password needs to be at least 8 characters, of both letters ans numbers. ' })
        } else if (!this.hasNumber(this.state.password)) {
            this.setState({ passwordError: '\n You need to have at least two numbers :(' })
        } else if (this.hasCharacter(this.state.password)) {
            this.setState({ passwordError: '\n You need to have at least two letters..' })
        } else {
            this.setState({ passwordError: '' })
        }
    }

    validateEmail(input) {
        if (!this.isEmail(this.state.email)) {
            this.setState({ emailError: ' \n That´s not what we call a proper email.. ' })
        } else {
            this.setState({ emailError: '' })
        }
    }

    hasCharacter(myString) {
        return /^[^a-zA-Z]*$/.test(myString)
    }

    hasNumber(myString) {
        return /\d/.test(myString)
    }

    isEmail(email) {
        return /\S+@\S+/.test(email)
    }

    render() {
        return (
            <form>
                <h2>Register</h2>
                <input
                    onChange={(e) => this.setState({ username: e.target.value }, this.validateUsername())}
                    placeholder="Username"
                    type="text"
                >
                </input>
                {this.state.usernameError &&
                    <span className='error'>{this.state.usernameError}</span>
                }
                <input
                    onChange={(e) => this.setState({ password: e.target.value }, this.validatePassword())}
                    placeholder="Password"
                    type="password"
                >
                </input>
                {this.state.passwordError &&
                    <span className='error'>{this.state.passwordError}</span>
                }
                <input
                    onChange={(e) => this.setState({ email: e.target.value }, this.validateEmail())}
                    placeholder="Email"
                    type="text"
                >
                </input>
                {this.state.emailError &&
                    <span className='error'>{this.state.emailError}</span>
                }
                <input
                    onChange={(e) => this.setState({ age: e.target.value })}
                    placeholder="Age"
                >
                </input>
                <select name="sex"
                onChange={(e) => this.setState({ sex: e.target.value })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button onClick={this.registerNewUser}>Register</button>
                <NavLink to="/login" className="small-text">Back to login</NavLink>
            </form>
        )
    }
}

export default RegisterForm
