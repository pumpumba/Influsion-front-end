import React from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

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
            <form className='white-form'>
            <h2 className="delete-Title"> Are you sure that you want to delete your account? </h2>
                <input
                    onChange={(e) => this.setState({ password: e.target.value })}
                    placeholder='Confirm Password'
                    type='password' >
                </input>
                <div className='delete-Options'>
                    <button className='white-button' onClick={this.deleteAccount}>Confirm</button>
                    <NavLink to='/settings' className='white-button' > Gosh no, cancel </NavLink>
                </div>
            </form>
        )
    }
}

export default DeleteForm
