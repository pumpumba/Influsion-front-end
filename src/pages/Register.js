import React from 'react'
import RegisterForm from './../components/register/RegisterForm'

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.registerSuccsessfull = this.registerSuccsessfull.bind(this)
        this.registerUnsuccsessfull = this.registerUnsuccsessfull.bind(this)
    }

    registerSuccsessfull() {
        console.log('suc')
    }

    registerUnsuccsessfull() {
        console.log('usuc')
    }

    render() {
        return (
            <RegisterForm
                registerSuccsessfull={this.registerSuccsessfull}
                registerUnsuccsessfull={this.registerUnsuccsessfull}
            />
        )
    }
}

export default Register