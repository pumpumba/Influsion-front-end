import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable';

class PopularComponentExpandedView extends React.Component {

    render() {
        return (
            <div className='expanded-view'>
                <div className='header'>
                    <img src={this.props.userProfileImageUrl} />
                    <a href={`/${this.props.influencerId}`}> {this.props.userName}  </a>
                    {this.props.userVerified && <img className="verifiedIcon" src={require('../../../../img/Twitter_Verified_Badge.svg')} />}
                    <a href={this.props.url}> <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
                </div>
                <div className='content-container'>
                    <p className='tweet_text'>{this.props.caption}</p>
                    <img src={this.props.img} />
                    <div className='meta-data'>
                        <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
                            {this.props.noOfLikes}</span>
                        <span className='no-of-retweets'> <FontAwesomeIcon className="metaIcon" icon={'retweet'} />
                            {this.props.noOfRetweet}</span>
                        <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                            <TimeAgo date={this.props.timestamp} />
                        </span>
                        <StopPropagation>
                            <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={this.props.changeHeart} data-state={this.props.heart && 'active'} />
                        </StopPropagation>
                    </div>
                </div>
            </div>
        )
    }
}


export default PopularComponentExpandedView
