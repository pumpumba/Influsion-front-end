import React from 'react'

const RegisterAlert = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>
			<a href={props.link} onClick={props.resetState}>{props.btnTxt}</a>
		</div>
	)
}
export default RegisterAlert
