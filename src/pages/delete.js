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
          username:'',
          password: '',
          userid: 49,
          wrongPassword: false
        }
        this.deleteSuccsessfull = this.deleteSuccsessfull.bind(this)
        this.deleteUnsuccsessfull = this.deleteUnsuccsessfull.bind(this)
        this.resetState = this.resetState.bind(this)
        this.wrongPassword = this.wrongPassword.bind(this)
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

    wrongPassword(){
        this.setState({
            wrongPassword: true
        })
    }

    resetState() {
        this.setState({
            deleteUnsuccsessfull: false,
            deleteSuccsessfull: false
        })
    }

    checkPassword(e){
        e.preventDefault()
        fetch('http://40.127.101.155/db/login/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username : this.state.username, password : this.state.confirmPassword})
        })
            .then(response => response.json())
            .then(response => (response.dbResults.loginSuccess) ? this.deleteAccount(e) : this.wrongPassword())
            .catch(error => this.loginUnsuccsessfull())
    }

    deleteAccount(e) {
      e.preventDefault()
      fetch('http://40.127.101.155/db/delete_user', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ usrid: this.state.userid, password: e.password})
      })
      .then(response => response.json())
      .then(response => (response.createSuccess) ? this.props.deleteSuccsessfull() : this.props.deleteUnsuccsessfull())
    }

componentDidMount(){
        var url = "http://40.127.101.155/db/get_user?usrid=" + this.state.userid
        console.log(url)
        fetch(url, {
            params: this.state.userid
        })
        .then(data => data.json())
        .then(data => {
            this.setState({
                username: data.rows[0].usrname,
                email: data.rows[0].email,
                age: data.rows[0].age,
                sex: data.rows[0].sex
            })
        })
        .then(data => console.log(data.rows))

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
                    type="password" className="deleteInput">
                </input>
        }

        return (
            <div className="bg">
                <main className="delete">
                    <h2 className="deleteTitle"> Are you sure that you want to delete your account? </h2>
                    {objToRender}
                    <div className="deleteOptions">
                        <Link onClick={this.deleteAccount}  to='/delete' className="deleteButton">Confirm</Link>
                        <Link to='/settings' className="deleteButton" > Gosh no, cancel </Link>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}




export default Delete
