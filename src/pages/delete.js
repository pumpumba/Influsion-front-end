import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Delete = (props) => {
    return (<div>
        <Header/>
        <main className="delete">
            <h1 className="title">Byebye!</h1>
            <p> Your account has been deleted. </p>
            <p>  We are sad you have left, we
                  welcome you back with open arms any time!
            </p>
            <Link to={'/register'} className="deleteButton">
              You´re right - lets go again!
            </Link>
        </main>
        <Footer/>
    </div>)
}



export default Delete
