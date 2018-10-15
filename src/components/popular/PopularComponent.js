import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable';

class PopularComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      heart: false,
    }

    this.onClick = this.onClick.bind(this)
    this.changeHeart = this.changeHeart.bind(this)
  }

  onClick() {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  changeHeart() {
    this.setState(prevState => ({
      heart: !prevState.heart
    }))
  }

  render() {
    const styles = {
      backgroundImage: 'url(' + this.props.data.tweet_media[0] + ')',
      order: this.props.order
    }

    return (
      <div
        className='popular-component-wrapper'
        style={styles}
        data-state={this.state.open ? 'open' : 'closed'}
        onClick={this.onClick}
      >
        <div className='closed-view'>
          <div className='header'>
            <img src={this.props.data.user_profile_image_url} />
          </div>
            <StopPropagation>
              <a href={this.props.data.tweet_url}> <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
              <FontAwesomeIcon icon={'heart'} className="follow_heart"  onClick={this.changeHeart}  data-state={this.state.heart && 'active'} />
            </StopPropagation>
            {(this.props.data.tweet_media.length <= 0) ? <div className='text-wrapper'> <p className='tweet-text'>{this.props.data.tweet_text}</p> </div>: ''} 
        </div>
        <div className='expanded-view'>
          <div className='header'>
            <img src={this.props.data.user_profile_image_url} />
            <h3>{this.props.data.user_name}</h3>
            {this.props.data.user_verified && <img className="verifiedIcon" src={require('../../../img/Twitter_Verified_Badge.svg')} />}
            <StopPropagation>
              <a target_="blank" href={this.props.data.tweet_url}><FontAwesomeIcon className='icon' icon={['fab', 'twitter']} /></a>
            </StopPropagation>
          </div>
          <div className='content-container'>
            <p className='tweet_text'>{this.props.data.tweet_text}</p>
            <img src={this.props.data.tweet_media[0]} />
            <div className='meta-data'>
              <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
                {this.props.data.tweet_favorite_count}</span>
              <span className='no-of-retweets'> <FontAwesomeIcon className="metaIcon" icon={'retweet'} />
                {this.props.data.tweet_retweet_count}</span>
              <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                <TimeAgo date={this.props.data.tweet_created_at} />
              </span>
              <StopPropagation>
                <FontAwesomeIcon icon={'heart'} className="follow_heart"  onClick={this.changeHeart}  data-state={this.state.heart && 'active'} />
              </StopPropagation>
            </div>
          </div>
        </div>
        <div className='blur-overlay'></div>
      </div>
    )
  }
}

export default PopularComponent
