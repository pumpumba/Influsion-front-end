import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

class Settings extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className='settings'>
                        <h1>Settings</h1>
                        <Link to='/login' className='white-button'>Log in</Link>
                        <Link to='/feed' className='white-button'>Log out</Link>
                        <Link to='/modifyUser' className='white-button'>Edit information</Link>
                        <Link to='/delete' className='white-button' >Delete account</Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Settings