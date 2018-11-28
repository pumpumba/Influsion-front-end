import React from 'react'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import image from './../../img/404Jonas.png'

class NotFound extends React.Component {
    render() {
        return (
            <div className='NotFound'>
                <img className='NotFound-img' src={image}></img>
                <p className="Inspiration">&quot;If you were to be lost in the river, Jonas, <br/>your memories would not be lost with you. Memories are forever&quot;</p>
                <NavLink to='/' className='white-button'>Go back</NavLink>
            </div>
        )
    }
}

export default NotFound
