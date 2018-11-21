import React from 'react'

const ModifyAlert = (props) => {
	return (
		<div className="modify">
			<h2 className="input-Title">{props.title}</h2>
			<button href={props.link} onClick={props.resetState}>{props.btnTxt}</button>
		</div>
	)
}
export default ModifyAlert
