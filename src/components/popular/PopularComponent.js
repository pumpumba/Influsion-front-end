import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FeedComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      nextComponentOrder: this.props.order + 1
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    let newNextComponentOrder = 0;

    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const styles = {
      backgroundImage: 'url(' + this.props.data.content.tweet_img_url + ')',
      order: this.props.order
    }

    return (
      <div
        className='feed-component-wrapper'
        style={styles}
        data-state={this.state.open && 'open'}
        onClick={this.onClick}
      >
        <div className='expanded-view'>
          <h3>{this.props.data.name}</h3>
          <img src={this.props.data.content.tweet_img_url} />
          <div className='content-container'>
            <FontAwesomeIcon className='icon' icon={['fab', this.props.data.content.source]} />
            <p className='tweet_text'>{this.props.data.content.tweet_text}</p>
            <span className='hashtags'>{this.props.data.content.tweet_hashtags}</span>
            <div className='meta-data'>
              <span className='no-of-likes'>Likes: {this.props.data.content.tweet_no_likes}</span>
              <span className='no-of-retweets'>Retweets: {this.props.data.content.tweet_no_retweets}</span>
              <span className='time-stamp'>Posted: {this.props.data.content.time_stamp}</span>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default FeedComponent