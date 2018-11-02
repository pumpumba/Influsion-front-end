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
            objToRender = <RegisterAlert title='Congrats' />
        } else if (this.state.registerUnsuccsessfull) {
            objToRender = <RegisterAlert title='Something went wrong' />
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