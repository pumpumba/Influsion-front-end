import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <h3>{this.props.data.user_name}</h3>
          </div>
          <a href={this.props.data.tweet_url}> <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
          <p className='tweet_text'>{this.props.data.tweet_text}</p>
        </div>
        <div className='expanded-view'>
          <h3>{this.props.data.user_name}</h3>
          <img src={this.props.data.user_profile_image_url} />
          <div className='content-container'>
            <a target_="blank" href={this.props.data.tweet_url}><FontAwesomeIcon className='icon' icon={['fab', 'twitter']} /></a>
            <p className='tweet_text'>{this.props.data.tweet_text}</p>
            <span className='hashtags'>{this.props.data.hashtags}</span>
            <div className='meta-data'>
              <span className='no-of-likes'>Likes: {this.props.data.tweet_favorite_count}</span>
              <span className='no-of-retweets'>Retweets: {this.props.data.tweet_retweet_count}</span>
              <span className='time-stamp'>Posted: {this.props.data.tweet_created_at}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeedComponent
