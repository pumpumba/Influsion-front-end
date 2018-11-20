import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import { Link } from 'react-router-dom'

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
        <Header title={'Settings'} />
        <main>
          <Link to='/login'>Logga in</Link>
          <button onClick={this.logOut}>Logga ut</button>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Settings