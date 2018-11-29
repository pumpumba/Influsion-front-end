import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable'
import { NavLink } from 'react-router-dom'


function ContentPlacer(props) {
    return (
        <div className='content-container'>
            {props.platform == 'twitter' && <p>{props.caption}</p>}
            {props.videoUrl ?
                <div className="youtube-video-container">
                    <iframe
                        width="560"
                        height="349"
                        src={props.videoUrl}
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>
                </div>
                :
                (props.img[0] ? (props.img[0].includes("mp4") ?
                    <iframe
                        autoplay="false"
                        width="320"
                        height="400"
                        frameBorder="0"
                        allowFullScreen={false}
                        src={props.img[0]}>
                    </iframe>
                    :
                    <img src={props.img[0]} />
                ) : '')

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
                    <NavLink to={`/infl/${this.props.influencerId}`}> {this.props.userName}  </NavLink>
                    {this.props.userVerified && <img className="verifiedIcon" src={require('../../../../img/Twitter_Verified_Badge.svg')} />}
                    <a href={this.props.url} className='platform-link'>
                        <FontAwesomeIcon icon={['fab', `${this.props.platform.toLowerCase()}`]} />
                    </a>
                </div>
                <ContentPlacer {...this.props} />
            </div>
        )
    }
}


export default PopularComponentExpandedView
