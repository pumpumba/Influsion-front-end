import React from 'react'

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
      if( this.state.username.length <= 1) {
        this.setState({ usernameError: 'Ditt användarnamn är för kort.'})
      } else {
        this.setState({usernameError: ''})
      }
    }

    validatePassword(input) {
      if( this.state.password.length <= 6) {
        this.setState({ passwordError: 'Ditt lösenord är för kort.'})
      } else if (!this.hasNumber(this.state.password)) {
        this.setState({ passwordError: 'Ditt lösenord saknar siffror.'})
      } else if (this.hasCharacter(this.state.password)) {
        this.setState({ passwordError: 'Ditt lösenord saknar bokstäver.'})
      } else {
        this.setState({passwordError: ''})
      }
    }

    validateEmail(input) {
      if(!this.isEmail(this.state.email)) {
        this.setState({ emailError: 'Det är inte en rimlig adress.'})
      } else {
        this.setState({emailError: ''})
      }
    }

    //Check if a string contains any characters.
    hasCharacter(myString) {
      return /^[^a-zA-Z]*$/.test(myString)
    }

    //Check if a string contains any integers.
    hasNumber(myString) {
      return /\d/.test(myString)
    }

    //Check if it is a valid email.
    isEmail(email) {
      return /\S+@\S+/.test(email)
    }

    render() {
        return (
            <form>
                <h2>Register</h2>
                <input
                    onChange={(e) => this.setState({ username: e.target.value }, this.validateUsername() )}
                    placeholder="Username"
                    type="text"
                >
                </input>
                {this.state.usernameError &&
                <span className='error'>{this.state.usernameError}</span>
                }
                <input
                    onChange={(e) => this.setState({ password: e.target.value }, this.validatePassword() )}
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
                <select name="sex">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button onClick={this.registerNewUser}>Register</button>
            </form>
        )
    }
}

export default RegisterForm
