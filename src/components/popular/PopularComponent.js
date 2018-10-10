import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'

class FeedComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      closed: true
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    let newNextComponentOrder = 0;

    this.setState(prevState => ({
      open: !prevState.open,
      closed: !prevState.closed
    }))
  }

  render() {
    const styles = {
      backgroundImage: 'url(' + this.props.data.user_profile_image_url + ')',
      order: this.props.order
    }

    return (
      <div
        className='feed-component-wrapper'
        style={styles}
        data-state={this.state.open ? 'open' : 'closed'}
        onClick={this.onClick}
      >
        <div className='expanded-view'>
          <h3>{this.props.data.user_name}</h3>
          <img src={this.props.data.user_profile_image_url} />
          <div className='content-container'>
            <a target_="blank" href={this.props.data.tweet_url}><FontAwesomeIcon className='icon' icon={['fab', 'twitter']} /></a>
            <p className='tweet_text'>{this.props.data.tweet_text}</p>
            <span className='hashtags'>{this.props.data.hashtags}</span>
            <div className='meta-data'>
              <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'}/>
                {this.props.data.tweet_favorite_count}</span>
              <span className='no-of-retweets'> <FontAwesomeIcon className="metaIcon" icon={'retweet'}/>
                {this.props.data.tweet_retweet_count}</span>
              <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'}/> 
                <TimeAgo date={this.props.data.tweet_created_at}/>
              </span>
            </div>
          </div>
        </div>
        <div className='closed-view'>
          <a href={this.props.data.tweet_url}> <FontAwesomeIcon icon={['fab', 'twitter']}/> </a>
        </div>
      </div>
    )
  }
}

export default FeedComponent
