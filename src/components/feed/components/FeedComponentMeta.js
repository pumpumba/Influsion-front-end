import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable'


const FeedComponentMeta = (props) => {

    return (
        <div className='meta-data'>
            <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
              {props.noOfLikes}
            </span>
            <span className='no-of-retweets'> <FontAwesomeIcon className="metaIcon" icon={'retweet'} />
              {props.noOfRetweets}
            </span>
            <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
              <TimeAgo date={props.timeStamp} />
            </span>
            <StopPropagation>
              <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={props.changeHeart} data-state={props.heart && 'active'} />
            </StopPropagation>
          </div>
    )
}
export default FeedComponentMeta