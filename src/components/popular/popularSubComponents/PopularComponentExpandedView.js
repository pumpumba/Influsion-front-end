import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable'


function ContentPlacer(props) {
    return (
        <div className='content-container'>
            {props.platform == 'twitter' && <p>{props.caption}</p>}
            <img src={props.img} />
            {props.videoUrl &&
                <div className="youtube-video-container">
                    <iframe
                        width="560"
                        height="349"
                        src={props.videoUrl}
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>
                </div>
            }
            {props.platform != 'twitter' && <p>{props.caption}</p>}
            <div className='meta-data'>
                {props.noOfViews &&
                    <span>
                        <FontAwesomeIcon className="metaIcon" icon={'eye'} />
                        {props.noOfViews}
                    </span>
                }
                {props.noOfComments &&
                    <span>
                        <FontAwesomeIcon className="metaIcon" icon={'comment'} />
                        {props.noOfComments}
                    </span>
                }
                {props.noOfLikes &&
                    <span>
                        <FontAwesomeIcon className="metaIcon" icon={'heart'} />
                        {props.noOfLikes}
                    </span>
                }
                {props.noOfRetweet &&
                    <span>
                        <FontAwesomeIcon className="metaIcon" icon={'retweet'} />
                        {props.noOfRetweet}
                    </span>
                }
                <span>
                    <FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                    <TimeAgo date={props.timestamp} />
                </span>
                <StopPropagation>
                    <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={props.changeHeart} data-state={props.heart && 'active'} />
                </StopPropagation>
            </div>
        </div>
    )
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
