import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (<div className="login">
    <h1 className="loginTitle">Register</h1>
    <input className="input" placeholder="Username"></input>
    <input className="input" placeholder="Password" type="password"></input>
    <input className="input" placeholder="Email"></input>
    <input className="input" placeholder="Sex"></input>

    <select name="Country" className="input">
        <option value="Sweden">Sweden</option>
        <option value="Norway">Norway</option>
        <option value="Finland">Finland</option>
        <option value="Denmark">Denmark</option>
    </select>

    <select name="City" className="input">
        <option value="Stockholm">Stockholm</option>
        <option value="Göteborg">Göteborg</option>
        <option value="Linköping">Linköping</option>
        <option value="Luleå">Luleå</option>
    </select>

    <Link to={'/feed'} className="loginButton">
      Register!
    </Link>
  </div>)
}

export default Login
