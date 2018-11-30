import React from 'react'
import {NavLink} from 'react-router-dom'
import {BACKEND_URL} from './../../constants'

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
            ageError: '',
            sex: 'Male',
            registerOK: false
        }

        this.registerNewUser = this.registerNewUser.bind(this)
        this.validateUsername = this.validateUsername.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.validateAge = this.validateAge.bind(this)
        this.hasNumber = this.hasNumber.bind(this)
        this.hasCharacter = this.hasCharacter.bind(this)
        this.isEmail = this.isEmail.bind(this)
        this.registerOK = this.registerOK.bind(this)
        this.register = this.register.bind(this)
    }

    registerOK(){
        if( this.state.username != '' &&
            this.state.password != '' &&
            this.state.age != '' &&
            this.state.email != '' &&
            this.state.usernameError === '' &&
            this.state.passwordError === '' &&
            this.state.emailError === ''
        ){
            return true
        }else{
            return false
        }
    }

    register(e){
        if(this.registerOK()){
            this.registerNewUser(e)
        }
    }

    registerNewUser(e) {
        e.preventDefault()
        fetch(BACKEND_URL + 'db/register_user/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(response => (response.createSuccess) ? this.props.registerSuccsessfull(this.state.username,this.state.password) : this.props.registerUnsuccsessfull())
    }

    validateUsername(input) {
        if (this.state.username.length <= 1) {
            this.setState({ usernameError: 'Your username is too short.' })
        } else {
            this.setState({ usernameError: '' })
        }
    }

    validatePassword(input) {
        if (this.state.password.length <= 6) {
            this.setState({ passwordError: 'Your password needs to be at least 8 characters, of both letters ans numbers. ' })
        } else if (!this.hasNumber(this.state.password)) {
            this.setState({ passwordError: 'You need to have at least two numbers :(' })
        } else if (this.hasCharacter(this.state.password)) {
            this.setState({ passwordError: 'You need to have at least two letters..' })
        } else {
            this.setState({ passwordError: '' })
        }
    }

    validateEmail(input) {
        if (!this.isEmail(this.state.email)) {
            this.setState({ emailError: 'That´s not what we call a proper email.. ' })
        } else {
            this.setState({ emailError: '' })
        }
    }

    validateAge(input){
        if(this.state.age < 13){
            this.setState({ageError:'You have to be older than 13'})
        }else if (this.state.age > 164) {
            this.setState({ageError:'How are you still alive!?'})
        }else{
            this.setState({ageError:''})
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
                    onChange={(e) => this.setState({ age: e.target.value }, this.validateAge())}
                    placeholder="Age"
                >
                </input>
                {this.state.ageError &&
                    <span className='error'>{this.state.ageError}</span>
                }
                <select name="sex"
                onChange={(e) => this.setState({ sex: e.target.value })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button onClick={this.register}>Register</button>
                <NavLink to="/login" className="small-text">Back to login</NavLink>
            </form>
        )
    }
}

export default RegisterForm
