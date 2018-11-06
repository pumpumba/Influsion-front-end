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
            <Link to='/login' className="setting">Log in</Link>
            <Link to='/feed' className="setting">Log out</Link>
            <Link to='/modifyUser' className="setting">Edit information</Link>
            <Link to='/modifyUser' className="setting">Delete account</Link>
        </main>
        <Footer/>
    </div>)
}



export default Settings
