import React from 'react'
import {BACKEND_URL} from './../../constants'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class PromotedListComponent extends React.Component {
  constructor(props){
    super(props);
    this.deleteAd = this.deleteAd.bind(this)
  }

  deleteAd() {
    console.log("delete the ad")
      fetch(BACKEND_URL + 'db/remove_promote_tag_post_following/', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({postid: this.props.postid})
    })

    fetch(BACKEND_URL + 'db/remove_promote_tag_post_popular/', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({postid: this.props.postid})
  })
}

  render () {
    
    return (
      <div className="promoted-list-component">
        <p>{this.props.postid}</p>
        <p>{this.props.influencerName}</p>
        {this.props.popular ? 'Popular' : ''}
        {this.props.popular && this.props.following ? ' & ' : ''}
        {this.props.following ? 'Following feed' : ''}
        <p>{this.props.nrlikes}</p>
        <span onClick={this.deleteAd}> <FontAwesomeIcon className="trashIcon" icon={'trash'}/></span>
      </div>
    );

  }
}

export default PromotedListComponent;
