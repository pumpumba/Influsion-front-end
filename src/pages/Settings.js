import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import NavLink from 'react-router-dom/NavLink';

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
                        <button onClick={this.logOut} className='white-button'>Log out</button>
                        <NavLink to='/modify-user' className='white-button'>Edit information</NavLink>
                        <NavLink to='/delete' className='white-button' >Delete account</NavLink>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Settings
