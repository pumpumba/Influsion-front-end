import React from 'react'
import TimeAgo from 'react-timeago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeedComponent = (props) => {

    return (
        <div className='feed-component-wrapper'>
            <div className='header'>
                <img src={props.data.user_profile_image_url} />
                <h3>{props.data.user_name}</h3>
                <a target_="blank" href={props.data.tweet_url}><FontAwesomeIcon className='icon' icon={['fab', 'twitter']} /></a>
            </div>
            <div className='content'>
                <p className='tweet_text'>{props.data.tweet_text}</p>
                <img src={props.data.media[0]} />
            </div>
            <div className='meta-data'>
                <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
                    {props.data.tweet_favorite_count}</span>
                <span className='no-of-retweets'> <FontAwesomeIcon className="metaIcon" icon={'retweet'} />
                    {props.data.tweet_retweet_count}</span>
                <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                    <TimeAgo date={props.data.tweet_created_at} />
                </span>
            </div>
        </div>
    )
}

export default FeedComponent