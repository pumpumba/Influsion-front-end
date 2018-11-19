import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ModifyForm from './../components/modifyUser/ModifyForm'
import ModifyAlert from './../components/modifyUser/ModifyAlert'

class ModifyUser extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            modSuccsessfull: false,
            modUnsuccsessfull: false,
            wrongPassword: false
        }
        this.modSuccsessfull = this.modSuccsessfull.bind(this)
        this.modUnsuccsessfull = this.modUnsuccsessfull.bind(this)
        this.wrongPassword = this.wrongPassword.bind(this)
        this.resetState = this.resetState.bind(this)
    }

    wrongPassword(){
        this.setState({
            wrongPassword: true
        })
    }

    modSuccsessfull() {
        this.setState({
            modSuccsessfull: true
        })
    }

    modUnsuccsessfull() {
        this.setState({
            modUnsuccsessfull: true
        })
    }

    resetState() {
        this.setState({
            modUnsuccsessfull: false,
            modSuccsessfull: false,
            wrongPassword: false
        })
    }

    render() {
        let objToRender;

        if (this.state.modSuccsessfull) {
            objToRender = <ModifyAlert title='Changes made!' btnTxt='OK!' link='/settings' />
        } else if (this.state.modUnsuccsessfull) {
            objToRender = <ModifyAlert title='Something went wrong...' btnTxt='Try again!' resetState={this.resetState} />
        } else if(this.state.wrongPassword){
            objToRender = <ModifyAlert title="Wrong password" btnTxt='Try again!' resetState={this.resetState}/>
        } else {
            objToRender =
                <ModifyForm
                    modSuccsessfull={this.modSuccsessfull}
                    modUnsuccsessfull={this.modUnsuccsessfull}
                    wrongPassword={this.wrongPassword}
                    userId={this.props.userId}
                />
        }

        return (
            <div>
                <Header />
                <main className="modify">
                    {objToRender}
                </main>
                <Footer/>
            </div>
        )
    }
}



export default ModifyUser
