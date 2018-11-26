import React from 'react'
import {NavLink} from 'react-router-dom'
import {BACKEND_URL} from '../../constants'

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
        fetch(BACKEND_URL + 'db/delete_user', {
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
            <div>

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

                <div className='NotFound'>
                    <img className='NotFound-img' src='../../img/404Jonas.png/'></img>
                    <h2>404<br /> page not found</h2>
                    <NavLink to='/popular' className='white-button'>Go back</NavLink>
                </div>
            </div>
        )
    }
}

export default DeleteForm
