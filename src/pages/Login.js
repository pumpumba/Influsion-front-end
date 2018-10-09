import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (<div className="login">
    <h1 className="loginTitle">inFlusion</h1>
    <textarea className="input" placeholder="Username"></textarea>
    <textarea className="input" placeholder="Password"></textarea>
    <Link to={'/feed'}>
      <button className="loginButton" link>Lets go into the wilderness!</button>
    </Link>
    <div className="smallText">
      <p>What is my password?</p>
      <p>It is finally my time - lets get registered</p>
    </div>
  </div>)
}

export default Login
