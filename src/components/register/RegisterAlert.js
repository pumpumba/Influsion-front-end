import React from 'react'
import {NavLink} from 'react-router-dom'

const RegisterAlert = (props) => {
	if(props.title === 'Welcome!'){
		return(
			<div>
				<h2>{props.title}</h2>
				<NavLink to={props.link}  className='white-button' >{props.btnTxt}</NavLink>
			</div>
		)
	}else {
		return (
			<div>
				<h2>{props.title}</h2>
				<button onClick={props.resetState} className='white-button'>{props.btnTxt}</button>
			</div>
		)
	}
}
export default RegisterAlert
