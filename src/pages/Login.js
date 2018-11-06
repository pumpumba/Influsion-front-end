import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (<div className="login">
    <h1 className="loginTitle">inFlusion</h1>
    <input className="input" placeholder="Username"></input>
    <input className="input" placeholder="Password" type="password"></input>
    <Link to={'/feed'} className="loginButton">
      Lets go into the wilderness!
    </Link>
    <div className="smallText">
      <p>What is my password?</p>
      <Link to={'/register'} className="smallText">
        It is finally my time - lets get registered
      </Link>
    </div>
  </div>)
}

export default Login