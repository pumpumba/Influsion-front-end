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
                <NavLink to='/' className='white-button'>Go back</NavLink>
            </div>
        )
    }
}

export default NotFound
