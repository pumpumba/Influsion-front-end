import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class ModifyUser extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            usrid: 43,
            username: 'jonas',
            password: '1234',
            email: 'jonasolaussen@gmail.se',
            age: '23',
            sex: 'Male'
        }
        this.sendChanges = this.sendChanges.bind(this);
    }

    sendChanges(e){
        {/*Add code for DB interaction*/}
        fetch('http://40.127.101.155/db/modify_user/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }

    render() {
        return (<div>
        <Header/>
        <main>
            <h1 className="title">Settings</h1>

            <p className="inputTitle">Enter new username</p>
            <input className="input" placeholder="Username"
            onChange={(e) => this.setState({ username: e.target.value })}
            ></input>

            <p className="inputTitle">Enter new password</p>
            <input className="input" placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
            ></input>

            <p className="inputTitle">Enter new age</p>
            <input className="input" placeholder="Age"
            onChange={(e) => this.setState({ age: e.target.value })}
            ></input>

            <p className="inputTitle">Enter new sex</p>
            <select name="sex" className="input"
            onChange={(e) => this.setState({ sex: e.target.value })}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>

            <p className="inputTitle">Enter new email</p>
            <input className="input" placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
            ></input>

            <button onClick={this.sendChanges}>Send Changes</button>
        </main>
        <Footer/>
    </div>)}
}



export default ModifyUser
