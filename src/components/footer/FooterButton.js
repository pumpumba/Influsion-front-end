import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FooterButton extends React.Component {
render (){
    return (
        <div className="FooterButton">
          <Link to={this.props.link}> <FontAwesomeIcon icon={this.props.icon} /> </Link>
        </div>
    )
  }
}

export default FooterButton
