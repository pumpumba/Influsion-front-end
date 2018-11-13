import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ModifyAlert from './../components/modifyUser/ModifyAlert'

class Delete extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          isHidden: true,
          password: ''
        }
        this.deleteSuccsessfull = this.deleteSuccsessfull.bind(this)
        this.deleteUnsuccsessfull = this.deleteUnsuccsessfull.bind(this)
        this.resetState = this.resetState.bind(this)
    }


    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }

    deleteSuccsessfull() {
        this.setState({
            deleteSuccsessfull: true
        })
    }

    deleteUnsuccsessfull() {
        this.setState({
            deleteUnsuccsessfull: true
        })
    }

    resetState() {
        this.setState({
            deleteUnsuccsessfull: false,
            deleteSuccsessfull: false
        })
    }

    deleteAccount(e) {
      e.preventDefault()
      fetch('http://40.127.101.155/db/delete_user', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ usrid: this.props.userID, password: e.password})
      })
      .then(response => response.json())
      .then(response => (response.createSuccess) ? this.props.deleteSuccsessfull() : this.props.deleteUnsuccsessfull())
    }


    render() {
        let objToRender;
        if (this.state.modSuccsessfull) {
            objToRender = <ModifyAlert title='Changes made!' btnTxt='OK!' link='/settings' />
        } else if (this.state.modUnsuccsessfull) {
            objToRender = <ModifyAlert title='Something went wrong...' btnTxt='Try again!' resetState={this.resetState} />
        } else {
            objToRender =
                <input
                    onChange={(e) => this.setState({ password: e.target.value })}
                    placeholder="Confirm Password"
                    type="password" className="input">
                </input>
        }

        return (
            <div>
                <main className="delete">
                    <h2 className="inputTitle"> Are you sure that you want to delete your account? </h2>
                    {objToRender}
                    <div className="confirmOptions">
                        <Link onClick={this.deleteAccount}  to='/delete' className="setting">Confirm</Link>
                        <Link to='/settings' className="setting" > Gosh no, cancel </Link>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}




export default Delete
