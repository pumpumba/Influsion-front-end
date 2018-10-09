import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

class FooterButton extends React.Component {

render (){
    return (
          <NavLink exact to={this.props.link} activeStyle={{color: '#faa495'}}> <FontAwesomeIcon icon={this.props.icon} /> </NavLink>
    )
  }
}

export default FooterButton
