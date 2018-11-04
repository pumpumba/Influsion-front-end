import React from 'react'
import RegisterForm from './../components/register/RegisterForm'
import RegisterAlert from './../components/register/RegisterAlert'

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            registerSuccsessfull: false,
            registerUnsuccsessfull: false
        }
        this.registerSuccsessfull = this.registerSuccsessfull.bind(this)
        this.registerUnsuccsessfull = this.registerUnsuccsessfull.bind(this)
        this.resetState = this.resetState.bind(this)
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

    resetState() {
        this.setState({
            registerUnsuccsessfull: false,
            registerSuccsessfull: false
        })
    }

    render() {
        let objToRender;

        if (this.state.registerSuccsessfull) {
            objToRender = <RegisterAlert title='Welcome!' btnTxt='Log in!' link='/login' />
        } else if (this.state.registerUnsuccsessfull) {
            objToRender = <RegisterAlert title='Something went wrong...' btnTxt='Try again!' resetState={this.resetState} />
        } else {
            objToRender =
                <RegisterForm
                    registerSuccsessfull={this.registerSuccsessfull}
                    registerUnsuccsessfull={this.registerUnsuccsessfull}
                />
        }

        return (
            <div className='register'>
                <h1>inFlusion</h1>
                {objToRender}
            </div>
        )
    }
}

export default Register