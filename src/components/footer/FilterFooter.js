import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class FilterFooter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      twitter: true,
      instagram: true,
      youtube: true
    }

    this.changeTwitter = this.changeTwitter.bind(this)
    this.changeInstagram = this.changeInstagram.bind(this)
    this.changeYoutube = this.changeYoutube.bind(this)
  }

  changeTwitter() {
    this.setState(prevState => ({
      twitter: !prevState.twitter
    }))
  }

  changeInstagram() {
    this.setState(prevState => ({
      instagram: !prevState.instagram
    }))
  }

  changeYoutube() {
    this.setState(prevState => ({
      youtube: !prevState.youtube
    }))
  }

  render() {
    return (<div className="FiltFooter">
      <FontAwesomeIcon
        icon={['fab', 'twitter']}
        className="footItem footStart"
        onClick={this.changeTwitter}
        data-state={this.state.twitter && 'active'}
      />
      <FontAwesomeIcon
        icon={['fab', 'instagram']}
        className="footItem footMid"
        onClick={this.changeInstagram}
        data-state={this.state.instagram && 'active'}
      />
      <FontAwesomeIcon
        icon={['fab', 'youtube']}
        className="footItem footEnd"
        onClick={this.changeYoutube}
        data-state={this.state.youtube && 'active'}
      />
    </div>)
  }
}

export default FilterFooter
