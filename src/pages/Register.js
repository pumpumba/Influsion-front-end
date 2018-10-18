import React from 'react'
import { Link } from 'react-router-dom'

const Register = (props) => {

    return (
        <div className="register">
            <h1 className="register-title">Register</h1>
            <input placeholder="Username"></input>
            <input placeholder="Password" type="password"></input>
            <input placeholder="Email"></input>
            <select name="sex">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <select name="Country">
                <option value="Sweden">Sweden</option>
                <option value="Norway">Norway</option>
                <option value="Finland">Finland</option>
                <option value="Denmark">Denmark</option>
            </select>

            <select name="City">
                <option value="Stockholm">Stockholm</option>
                <option value="Göteborg">Göteborg</option>
                <option value="Linköping">Linköping</option>
                <option value="Luleå">Luleå</option>
            </select>

            <Link to={'/feed'} className="register-button">
                Register!
            </Link>
        </div>
    )
}

export default Register
