import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable'


function ContentPlacer(props) {
    if (props.platform == 'twitter') {
        return (
            <div className='content-container'>
                <p className='tweet_text'>{props.caption}</p>
                <img src={props.img} />
                <div className='meta-data'>
                    <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
                        {props.noOfLikes}</span>
                    <span className='no-of-retweets'> <FontAwesomeIcon className="metaIcon" icon={'retweet'} />
                        {props.noOfRetweet}</span>
                    <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                        <TimeAgo date={props.timestamp} />
                    </span>
                    <StopPropagation>
                        <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={props.changeHeart} data-state={props.heart && 'active'} />
                    </StopPropagation>
                </div>
            </div>
        )

    } else if (props.platform == "instagram") {
        return (
            <div className='content-container'>
                <div className='instagram-text-and-pic'>
                    <img src={props.img} />
                    <p className='tweet_text instagram_text'>{props.caption}</p>
                </div>
                <div className='meta-data'>
                    <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
                        {props.noOfLikes}</span>
                    <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                        2 hours ago
             </span>
                    <StopPropagation>
                        <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={props.changeHeart} data-state={props.heart && 'active'} />
                    </StopPropagation>
                </div>
            </div>
        )
    } else if (props.platform.toLowerCase() == "youtube") {
        return (
            <div className='content-container'>
                <div className='instagram-text-and-pic'>
                    <div className="videoWrapper">
                        <iframe
                            width="560"
                            height="349"
                            src={props.videoUrl}
                            frameBorder="0"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <p className='tweet_text instagram_text'>{props.caption}</p>
                </div>
                <div className='meta-data'>
                    <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'eye'} />
                        {props.noOfViews}
                    </span>
                    <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'comment'} />
                        {props.noOfComments}
                    </span>
                    <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
                        {props.noOfLikes}
                    </span>
                    <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                        <TimeAgo date={props.timestamp} />
                    </span>
                    <StopPropagation>
                        <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={props.changeHeart} data-state={props.heart && 'active'} />
                    </StopPropagation>
                </div>
            </div>
        )
    }

}
class PopularComponentExpandedView extends React.Component {
    constructor() {
        super()

    }

    render() {
        const plat = this.props.platform
        return (
            <div className='expanded-view'>
                <div className='header'>
                    <img src={this.props.userProfileImageUrl} />
                    <a href={`/${this.props.influencerId}`}> {this.props.userName}  </a>
                    {this.props.userVerified && <img className="verifiedIcon" src={require('../../../../img/Twitter_Verified_Badge.svg')} />}
                    <a href={this.props.url}> {this.props.icon} </a>
                </div>
                <ContentPlacer {...this.props} />
            </div>
        )
    }
}


export default PopularComponentExpandedView
