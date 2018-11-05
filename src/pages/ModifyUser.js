import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Settings = (props) => {
    return (<div>
        <Header/>
        <main>
            <h1 className="title">Settings</h1>

            <p className="inputTitle">Enter new username</p>
            <input className="input" placeholder="Username"></input>

            <p className="inputTitle">Enter new password</p>
            <input className="input" placeholder="Password"></input>

            <p className="inputTitle">Enter new asername</p>
            <input className="input" placeholder="Age"></input>

            <p className="inputTitle">Enter new sex</p>
            <select name="sex" className="input">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <p className="inputTitle">Enter new email</p>
            <input className="input" placeholder="Email"></input>

            <button>Send Changes</button>
        </main>
        <Footer/>
    </div>)
}



export default Settings
