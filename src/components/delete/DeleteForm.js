import React from 'react'
import {Link} from 'react-router-dom'

class DeleteForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            password: '',
            userid: this.props.userId
        }
        this.deleteAccount = this.deleteAccount.bind(this)
    }

    deleteAccount(e) {
      e.preventDefault()
      fetch('http://40.127.101.155/db/delete_user', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ usrid: this.state.userid, password: this.state.password})
      })
      .then(response => response.json())
      .then(response => (response.dbResults.deleteSuccess === undefined)?this.props.deleteSuccsessfull():this.props.wrongPassword())
    }

    render() {
        return (
            <form className="delete-Form">
            <h2 className="delete-Title"> Are you sure that you want to delete your account? </h2>
                <input
                    onChange={(e) => this.setState({ password: e.target.value })}
                    placeholder="Confirm Password"
                    type="password" className="delete-Input">
                </input>
                <div className="delete-Options">
                    <button className="delete-Button" onClick={this.deleteAccount}>Confirm</button>
                    <Link to='/settings' className="delete-Button" > Gosh no, cancel </Link>
                </div>
            </form>
        )
    }
}

export default DeleteForm
