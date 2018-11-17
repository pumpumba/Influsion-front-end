import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import FooterButton from './../components/footer/FooterButton';
import { Link } from 'react-router-dom'

const Settings = (props) => {
  return (
    <div>
      <Header title={'Settings'}/>
      <main>
        <Link to='/login'>Logga in</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Settings