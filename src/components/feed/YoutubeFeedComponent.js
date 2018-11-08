import React from 'react'
import TimeAgo from 'react-timeago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StopPropagation } from 'react-clickable';
import {followInfluencer, unfollowInfluencer} from '../functions/followAndUnfollowInfluencer'
import { Link } from 'react-router-dom'

class YoutubeFeedComponent extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      heart: true
    }

    this.changeHeart = this.changeHeart.bind(this)
  }
  changeHeart() {
    this.setState(prevState => ({
      heart: !prevState.heart
    }))
    if (this.state.heart) {
      unfollowInfluencer(this.props.userId, this.props.data.realInfluencerName)
    } else {
      followInfluencer(this.props.userId, this.props.data.realInfluencerName)
    }
  }

render(){
  return (
      <div className='youtube-component-wrapper feed-component-wrapper'>
        <div className='header'>
            <img src={this.props.data.video_thumbnail_url} />
            <h3>{this.props.data.channel_title}</h3>
            <a target_="blank" href={this.props.data.video_url} className="youtube-icon"> <FontAwesomeIcon className='icon' icon={['fab','youtube']} /></a>
        </div>
          <div className='youtube-content content'>
              <iframe className="videoFrame" allow="fullscreen" src={this.props.data.video_embeded_url}> </iframe>
          </div>
          <div className='meta-data'>
            <p><FontAwesomeIcon className='icon' icon={['fas','eye']} /> {this.props.data.video_view_count}</p>
            <p><FontAwesomeIcon className='icon' icon={['fas','thumbs-up']} /> {this.props.data.video_like_count}</p>
            <p><FontAwesomeIcon className='icon' icon={['fas','thumbs-down']} /> {this.props.data.video_dislike_count}</p>
            <StopPropagation>
              <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={this.changeHeart} data-state={this.state.heart && 'active'} />
            </StopPropagation>
          </div>
      </div>
  )

}
}
export default YoutubeFeedComponent
