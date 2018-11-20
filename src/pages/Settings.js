import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    this.props.updateUserId(0)
  }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className='settings'>
                        <h1>Settings</h1>
                        <Link to='/login' className='white-button'>Log in</Link>
                        <button onClick={this.logOut} className='white-button'>Log out</button>
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
