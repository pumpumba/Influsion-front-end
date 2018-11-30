import React from 'react'
import {BACKEND_URL} from './../../constants'

class ModifyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usrid: this.props.userId,
            loginusername:'',
            username: '',
            password: '',
            email: '',
            age: 0,
            sex: '',
            confirmPassword: ''
        }
        this.sendChanges = this.sendChanges.bind(this)
        this.confirmChanges = this.confirmChanges.bind(this)
        this.checkPasswordEmpty = this.checkPasswordEmpty.bind(this)
        this.validateUsername = this.validateUsername.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.validateAge = this.validateAge.bind(this)
        this.hasNumber = this.hasNumber.bind(this)
        this.hasCharacter = this.hasCharacter.bind(this)
        this.isEmail = this.isEmail.bind(this)
    }

    checkPasswordEmpty(e){
        console.log(this.state)
        if(this.state.password === ""){
            this.setState({
                password: this.state.confirmPassword
            })
        }
        this.confirmChanges(e)
    }

    confirmChanges(e) {
        e.preventDefault()
        fetch(BACKEND_URL + 'db/login/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: this.state.loginusername, password: this.state.confirmPassword })
        })
            .then(response => response.json())
            .then(response => (response.dbResults.loginSuccess) ? this.sendChanges(e) : this.props.wrongPassword())
            .catch(error => this.props.wrongPassword())
    }

    sendChanges(e) {
        fetch(BACKEND_URL + 'db/modify_user/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(response => (response.updateSuccess) ? this.props.modSuccsessfull() : this.props.modUnsuccsessfull())
    }

    componentDidMount() {
        const url = BACKEND_URL + 'db/get_user?usrid=' + this.state.usrid
        fetch(url, {
            params: this.state.userid
        })
            .then(data => data.json())
            .then(data => {
                this.setState({
                    username: data[0].usrname,
                    loginusername: data[0].usrname,
                    email: data[0].email,
                    age: data[0].age,
                    sex: data[0].sex
                })
            })
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

    validateAge(input){
        if(this.state.age < 13){
            this.setState({ageError:' \n You have to be older than 13'})
        }else if (this.state.age > 164) {
            this.setState({ageError:' \n How are you still alive!?'})
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
            <form className='white-form'>

                <span className="mod-title">Enter new username</span>
                {this.state.usernameError &&
                    <span className='error'>{this.state.usernameError}</span>
                }
                <input
                    onChange={(e) => this.setState({ username: e.target.value }, this.validateUsername())}
                    placeholder="Username"
                    type="text"
                >
                </input>

                <span className="mod-title">Enter new password</span>
                {this.state.passwordError &&
                    <span className='error'>{this.state.passwordError}</span>
                }
                <input
                    onChange={(e) => this.setState({ password: e.target.value }, this.validatePassword())}
                    placeholder="Password"
                    type="password"
                >
                </input>

                <span className="mod-title">Enter new email</span>
                {this.state.emailError &&
                    <span className='error'>{this.state.emailError}</span>
                }
                <input
                    onChange={(e) => this.setState({ email: e.target.value }, this.validateEmail())}
                    placeholder="Email"
                    type="text"
                >
                </input>

                <span className="mod-title">Enter new age</span>
                {this.state.ageError &&
                    <span className='error'>{this.state.ageError}</span>
                }
                <input
                    onChange={(e) => this.setState({ age: e.target.value }, this.validateAge())}
                    placeholder="Age"
                >
                </input>


                <span className="mod-title">Enter new sex</span>
                <select name="sex"
                onChange={(e) => this.setState({ sex: e.target.value })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <div className="confirm-Form">
                    <span>Enter password to confirm</span>
                    <input className="input-Confirm" placeholder="Password" type="password"
                        onChange={(e) => this.setState({ confirmPassword: e.target.value})}
                    ></input>
                <button className="white-button" onClick={this.checkPasswordEmpty}>Confirm</button>
                </div>
            </form>
        )
    }
}

export default ModifyForm
