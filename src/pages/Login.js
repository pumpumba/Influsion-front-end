import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (<div className="login">
    <h1 className="loginTitle">inFlusion</h1>
    <input className="input" placeholder="Username"></input>
    <input className="input" placeholder="Password" type="password"></input>
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
