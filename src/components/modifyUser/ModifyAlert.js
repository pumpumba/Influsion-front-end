import React from 'react'

const ModifyAlert = (props) => {
	return (
		<div className="modifyForm">
			<h2 className="inputTitle">{props.title}</h2>
			<a className="modButton" href={props.link} onClick={props.resetState}>{props.btnTxt}</a>
		</div>
	)
}
export default ModifyAlert
