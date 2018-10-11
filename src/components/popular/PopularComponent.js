import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'

class FeedComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const styles = {
      backgroundImage: 'url(' + this.props.data.tweet_media[0] + ')',
      order: this.props.order
    }

    return (
      <div
        className='feed-component-wrapper'
        style={styles}
        data-state={this.state.open ? 'open' : 'closed'}
        onClick={this.onClick}
      >
        <div className='closed-view'>
          <div className='header'>
            <img src={this.props.data.user_profile_image_url} />
          </div>

          <a href={this.props.data.tweet_url}> <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
          {(this.props.data.tweet_media.length <= 0) ? <p className='tweet_text'>{this.props.data.tweet_text}</p> : ''}

        </div>
        <div className='expanded-view'>
          <div className='header'>
            <img src={this.props.data.user_profile_image_url} />
            <h3>{this.props.data.user_name}</h3>
            {this.props.data.user_verified && <img className="verifiedIcon" src={require('../../../img/Twitter_Verified_Badge.svg')} />}
            <a target_="blank" href={this.props.data.tweet_url}><FontAwesomeIcon className='icon' icon={['fab', 'twitter']} /></a>
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
            </div>
          </div>
        </div>
        <div className='blur-overlay'></div>
      </div>
    )
  }
}

export default FeedComponent
