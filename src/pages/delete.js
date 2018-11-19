import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ModifyAlert from './../components/modifyUser/ModifyAlert'
import DeleteForm from './../components/delete/DeleteForm'

class Delete extends React.Component {

constructor(props){
    super(props)
    this.state = {
      deleteSuccsessfull: false,
      wrongPassword: false
    }
    this.deleteSuccsessfull = this.deleteSuccsessfull.bind(this)
    this.wrongPassword = this.wrongPassword.bind(this)
    this.resetState = this.resetState.bind(this)
}

deleteSuccsessfull() {
    console.log("Delete")
}

wrongPassword(){
    this.setState({
        wrongPassword: true
    })
}

resetState() {
    this.setState({
        wrongPassword: false,
        deleteSuccsessfull: false
    })
}

render() {
    let objToRender;
    if (this.state.deleteSuccsessfull) {
        objToRender = <ModifyAlert title='Account deleted' btnTxt='OK!' link='/settings' />
    } else if(this.state.wrongPassword){
        objToRender = <ModifyAlert title="Wrong password" btnTxt='Try again!' resetState={this.resetState}/>
    } else {
        objToRender =<DeleteForm modSuccsessfull={this.deleteSuccsessfull}
        wrongPassword={this.wrongPassword}
        userId={this.props.userId}/>
    }

    return (
        <div className="bg">
            <main className="delete">
                <h2 className="delete-Title"> Are you sure that you want to delete your account? </h2>
                {objToRender}
            </main>
            <Footer/>
        </div>
    )
}
}
export default Delete
