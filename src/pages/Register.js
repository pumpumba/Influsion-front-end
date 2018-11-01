import React from 'react'
import RegisterForm from './../components/register/RegisterForm'

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            registerSuccsessfull: false,
            registerUnsuccsessfull: false
        }
        this.registerSuccsessfull = this.registerSuccsessfull.bind(this)
        this.registerUnsuccsessfull = this.registerUnsuccsessfull.bind(this)
    }

    registerSuccsessfull() {
        this.setState({
            registerSuccsessfull: true
        })
    }

    registerUnsuccsessfull() {
        this.setState({
            registerUnsuccsessfull: true
        })
    }

    render() {
        let objToRender;

        if (this.state.registerSuccsessfull) {
            objToRender = '<h1>suc</h1>'
        } else if (this.state.registerUnsuccsessfull) {
            objToRender = '<h1>Usuc</h1>'
        } else {
            objToRender =
                <RegisterForm
                    registerSuccsessfull={this.registerSuccsessfull}
                    registerUnsuccsessfull={this.registerUnsuccsessfull}
                />
        }
        return (
            <div>
                {objToRender}
            </div>
        )
    }
}

export default Register