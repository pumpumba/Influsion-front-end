import React from 'react'
import TimeAgo from 'react-timeago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StopPropagation } from 'react-clickable';

class FeedComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heart: true
    }

    this.changeHeart = this.changeHeart.bind(this)
  }

  unfollowInfluencer() {
     fetch('http://40.127.101.155/db/unfollow_influencer', {
       method: 'post',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({user_id: this.props.userID, influencer_id: this.props.data.inflid})
     })
     .then(response => response.json())
     .then(data => this.setState({ data }))
  }

  followInfluencer() {
     fetch('http://40.127.101.155/db/add_follow_influencer', {
       method: 'post',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({user_id: this.props.userID, influencer_id: this.props.data.inflid})
     })
     .then(response => response.json())
     .then(data => this.setState({ data }))
  }

    changeHeart() {
      this.setState(prevState => ({
        heart: !prevState.heart
      }))
      this.props.data.USRFOLLOWINGINFLUENCER ? unfollowInfluencer() : followInfluencer()
    }

    render () {
      return (
        <div className='feed-component-wrapper'>
            <div className='header'>
                <img src={this.props.data.user_profile_image_url} />
                <h3>{this.props.data.user_name}</h3>
                <a target_="blank" href={this.props.data.tweet_url}><FontAwesomeIcon className='icon' icon={['fab', 'twitter']} /></a>
            </div>
            <div className='content'>
                <p className='tweet_text'>{this.props.data.tweet_text}</p>
                <img src={this.props.data.tweet_media[0]} />
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
                  <FontAwesomeIcon icon={'heart'} className="follow_heart"  onClick={this.changeHeart}  data-state={this.state.heart && 'active'} />
                </StopPropagation>
            </div>
        </div>
    )
  }
}

export default FeedComponent
