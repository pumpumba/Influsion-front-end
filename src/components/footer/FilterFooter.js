import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
var twitter = true;
var instagram = true;
var  youtube = true;

class FilterFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      twitterS: true,
      instagram: true,
      youtube: true
    };

    this.changeTwitter() = this.changeTwitter().bind(this);
    this.changeInstagram() = this.changeInstagram().bind(this);
    this.changeYoutube() = this.changeYoutube().bind(this);
  }

  changeTwitter() {
    this.setState({twitterS: !twitterS});
    twitter != twitter;
    console.log(twitter);
  }

  changeInstagram() {
    instagram = !instagram;
    console.log(instagram);
  }

  changeYoutube() {
    youtube = !youtube;
    console.log(youtube);
  }

  render() {
    return (<div className="FiltFooter">
      <FontAwesomeIcon icon={['fab', 'twitter']} className="footItem footStart" onClick={this.changeTwitter} style={{color: twitter? '#faa495' : '#E0E0EB'}}/>
      <FontAwesomeIcon icon={['fab', 'instagram']} className="footItem footMid" onClick={this.changeInstagram} style={{color: instagram? '#faa495' : '#E0E0EB'}}/>
      <FontAwesomeIcon icon={['fab', 'youtube']} className="footItem footEnd" onClick={this.changeYoutube} style={{color: youtube? '#faa495' : '#E0E0EB'}}/>
    </div>)
  }
}

export default FilterFooter
