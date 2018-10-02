import React from 'react'

const FeedComponent = (props) => {
  console.log(props.data)

  const backgroundImage = {
    backgroundImage: 'url(' + props.data.content.tweet_img_url + ')'
  }
  return (

    <div className='feed-component-wrapper' style={backgroundImage}>
      <div className='expanded-view'>
        <h3>{props.data.name}</h3>
        <span className='social-media-source'>{props.data.content.source}</span>
        <span className='time-stamp'>{props.data.content.time_stamp}</span>
        <p className='tweet_text'>{props.data.content.tweet_text}</p>
        <span className='hashtags'>{props.data.content.tweet_hashtags}</span>
        <span className='no-of-likes'>{props.data.content.tweet_no_likes}</span>
        <span className='no-of-retweets'>{props.data.content.tweet_no_retweets}</span>
      </div>
    </div>
  )
}

export default FeedComponent