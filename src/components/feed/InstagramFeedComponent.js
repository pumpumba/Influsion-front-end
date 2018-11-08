import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { followInfluencer, unfollowInfluencer } from '../functions/followAndUnfollowInfluencer'
import { StopPropagation } from 'react-clickable'
import FeedComponentHeader from './components/FeedComponentHeader'

class InstagramFeedComponent extends React.Component {

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
    render() {
        return (
            <div className='instagram-component-wrapper feed-component-wrapper'>
                <FeedComponentHeader
                    inflImgUrl={this.props.data.user_profile_image_url}
                    inflId={this.props.data.realInfluencerName}
                    inflName={this.props.data.user_name}
                    contentUrl={this.props.data.tweet_url}
                    contentUrl={this.props.data.posturl}
                    platform={this.props.data.platform}
                />
                <div className='content'>
                    <img src={this.props.data.post_media} />
                    <p className='instagram_text tweet_text'>{this.props.data.post_text}</p>
                </div>
                <div className='meta-data'>
                    <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
                        {this.props.data.post_like_count}
                    </span>

                    <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                        2 hours ago
                </span>
                    <StopPropagation>
                        <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={this.changeHeart} data-state={this.state.heart && 'active'} />
                    </StopPropagation>
                </div>
            </div>
        )
    }
}

export default InstagramFeedComponent
