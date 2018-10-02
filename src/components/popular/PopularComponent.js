import React from 'react'

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
    const backgroundImage = {
      backgroundImage: 'url(' + this.props.data.content.tweet_img_url + ')'
    }

    return (
      <div
        className='feed-component-wrapper'
        style={backgroundImage}
        data-state={this.state.open && 'open'}
        onClick={this.onClick}
      >
        <div className='expanded-view'>
          <h3>{this.props.data.name}</h3>
          <span className='social-media-source'>{this.props.data.content.source}</span>
          <span className='time-stamp'>{this.props.data.content.time_stamp}</span>
          <p className='tweet_text'>{this.props.data.content.tweet_text}</p>
          <span className='hashtags'>{this.props.data.content.tweet_hashtags}</span>
          <span className='no-of-likes'>{this.props.data.content.tweet_no_likes}</span>
          <span className='no-of-retweets'>{this.props.data.content.tweet_no_retweets}</span>
        </div>
      </div>
    )
  }
}

export default FeedComponent