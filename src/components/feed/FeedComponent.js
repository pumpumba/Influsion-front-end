import React from 'react'
import TimeAgo from 'react-timeago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StopPropagation } from 'react-clickable';
import {followInfluencer, unfollowInfluencer} from '../functions/followAndUnfollowInfluencer'
import { Link } from 'react-router-dom'

class FeedComponent extends React.Component {
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

  render() {
    if (this.props.data != null) {
      return (
        <div className='feed-component-wrapper'>
          <div className='header'>
            <img src={this.props.data.user_profile_image_url} />
            <a href={`/${this.props.data.realInfluencerName}`}> {this.props.data.user_name} </a>
            <a target_="blank" href={this.props.data.tweet_url} className="twitter-icon"><FontAwesomeIcon className='icon' icon={['fab', 'twitter']} /></a>
          </div>
          <div className='content'>
            <p className='tweet_text'>{this.props.data.tweet_text}</p>
            <img src={this.props.data.tweet_media} />
          </div>
          <div className='meta-data'>
            <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
              {this.props.data.tweet_favorite_count}
            </span>
            <span className='no-of-retweets'> <FontAwesomeIcon className="metaIcon" icon={'retweet'} />
              {this.props.data.tweet_retweet_count}
            </span>
            <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
              <TimeAgo date={this.props.data.tweet_created_at} />
            </span>
            <StopPropagation>
              <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={this.changeHeart} data-state={this.state.heart && 'active'} />
            </StopPropagation>
          </div>
        </div>
      )
    } else return null
  }
}

export default FeedComponent
