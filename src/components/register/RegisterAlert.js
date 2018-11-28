import React from 'react'

const RegisterAlert = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>
			<button href={props.link} onClick={props.resetState} className='white-button'>{props.btnTxt}</button>
		</div>
	)
}
export default RegisterAlert
