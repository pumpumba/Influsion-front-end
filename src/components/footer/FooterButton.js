import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const FooterButton = (props) => {
    return (
        <NavLink exact to={props.link} activeStyle={{ color: '#faa495' }}>
            <FontAwesomeIcon icon={props.icon} />
        </NavLink>
    )
}

export default FooterButton