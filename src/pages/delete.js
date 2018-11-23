import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModifyAlert from './../components/modifyUser/ModifyAlert'
import DeleteForm from './../components/delete/DeleteForm'

class Delete extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            deleteSuccsessfull: false,
            wrongPassword: false
        }
        this.deleteSuccsessfull = this.deleteSuccsessfull.bind(this)
        this.wrongPassword = this.wrongPassword.bind(this)
        this.resetState = this.resetState.bind(this)
        this.logout = this.logout.bind(this)
    }

    deleteSuccsessfull() {
        this.setState({ deleteSuccsessfull: true })
    }

    wrongPassword() {
        this.setState({ wrongPassword: true })
    }

    logout() {
        this.props.updateUserId(0);
    }

    resetState() {
        this.setState({ wrongPassword: false, deleteSuccsessfull: false })
    }

    render() {
        let objToRender;
        if (this.state.deleteSuccsessfull) {
            objToRender = <ModifyAlert title='Account deleted' btnTxt='OK!' link='/login' resetState={this.logout} />
        } else if (this.state.wrongPassword) {
            objToRender = <ModifyAlert title='Wrong password' btnTxt='Try again!' resetState={this.resetState} />
        } else {
            objToRender = <DeleteForm deleteSuccsessfull={this.deleteSuccsessfull} wrongPassword={this.wrongPassword} userId={this.props.userId} />
        }

        return (<div className='bg'>
            <Header />
            <main className='delete'>
                {objToRender}
            </main>
            <Footer />
        </div>)
    }
}
export default Delete
