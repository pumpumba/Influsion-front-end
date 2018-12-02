import React from 'react'
import RegisterForm from './../components/register/RegisterForm'
import RegisterAlert from './../components/register/RegisterAlert'
import { NavLink } from 'react-router-dom'
import {BACKEND_URL} from './../constants'

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            registerSuccsessfull: false,
            registerUnsuccsessfull: false,
            username: '',
            password: ''
        }
        this.registerSuccsessfull = this.registerSuccsessfull.bind(this)
        this.registerUnsuccsessfull = this.registerUnsuccsessfull.bind(this)
        this.resetState = this.resetState.bind(this)
        this.setRegister = this.setRegister.bind(this)
        this.login = this.login.bind(this)
    }

    setRegister() {
        this.setState({
            registerSuccsessfull: true
        })
    }

    registerSuccsessfull(_username,_password){
        this.setRegister()
        this.login(_username,_password)
    }

    login(_username,_password) {
        fetch(BACKEND_URL + 'db/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username : _username, password :_password})
        })
            .then(response => response.json())
            .then(response => (response.dbResults.loginSuccess) ?  this.props.updateUserId(response.dbResults.usrid) :console.log('cant log in'))
    }

    registerUnsuccsessfull() {
        this.setState({
            registerUnsuccsessfull: true
        })
    }

    resetState() {
        this.setState({
            registerUnsuccsessfull: false,
            registerSuccsessfull: false
        })
    }

    render() {
        let objToRender;

        if (this.state.registerSuccsessfull) {
            objToRender = <RegisterAlert title='Welcome!' btnTxt='OK!' link='/'/>
        } else if (this.state.registerUnsuccsessfull) {
            objToRender = <RegisterAlert title='Something went wrong...' btnTxt='Try again!' resetState={this.resetState}/>
        } else {
            objToRender =
                <RegisterForm
                    registerSuccsessfull={this.registerSuccsessfull}
                    registerUnsuccsessfull={this.registerUnsuccsessfull}
                    updateUserId={this.props.updateUserId}
                />
        }

        return (
            <div className='register mobile-page'>
                <h1>inFlusion</h1>
                {objToRender}
            </div>
        )
    }
}

export default Register
