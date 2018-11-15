import React from 'react'
import {Link} from 'react-router-dom'

class DeleteForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            password: '',
            userid: 70
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
      .then(response => (response.dbResults.deleteSuccess) ? this.props.deleteSuccsessfull() : this.props.wrongPassword())
    }


    render() {
        return (
            <form className="deleteForm">
                <input
                    onChange={(e) => this.setState({ password: e.target.value })}
                    placeholder="Confirm Password"
                    type="password" className="deleteInput">
                </input>
                <div className="deleteOptions">
                    <Link  to='/delete' className="deleteButton">Confirm</Link>
                    <Link to='/settings' className="deleteButton" > Gosh no, cancel </Link>
                </div>
            </form>
        )
    }
}

export default DeleteForm
