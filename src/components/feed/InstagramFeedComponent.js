import React from 'react'
import TimeAgo from 'react-timeago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InstagramFeedComponent = (props) => {

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

    return (
        <div className='instagram-component-wrapper'>
            <div className='header'>
                <img src={props.data.media_url} />
                <h3>{props.data.user_name}</h3>
                <a target_="blank" href={props.data.tweet_url}><FontAwesomeIcon className='icon' icon={['fab', 'instagram']} /></a>
            </div>
            <div className='content'>
                <img src={props.data.media_url} />
                <p className='tweet_text'>{props.data.caption}</p>

            </div>
            <div className='meta-data'>
                <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
                    {props.data.likes}
                </span>
                <span className='no-of-comments'> <FontAwesomeIcon className="metaIcon" icon={'comment'} />
                    {props.data.comments}
                </span>
                <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                    <TimeAgo date={props.data.created_at} />
                </span>
            </div>
        </div>
    )
}

export default InstagramFeedComponent
