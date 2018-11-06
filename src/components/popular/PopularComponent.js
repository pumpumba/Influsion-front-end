import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable';

class PopularComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            heart: false
        }

        this.onClick = this.onClick.bind(this)
        this.changeHeart = this.changeHeart.bind(this)
    }

    onClick() {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    changeHeart() {
        this.setState(prevState => ({
            heart: !prevState.heart
        }))
    }

    render() {
        if (this.props.data.platformcontent != null) {
            const styles = {
                backgroundImage: 'url(' + this.props.data.platformcontent.tweet_media[0] + ')'
            }
            return (
                <div
                    className='popular-component-wrapper'
                    style={styles}
                    data-state={this.state.open ? 'open' : 'closed'}
                    onClick={this.onClick}
                >
                    <div className='closed-view'>
                        <div className='header'>
                            <img src={this.props.data.platformcontent.user_profile_image_url} />
                        </div>
                        <StopPropagation>
                            <a href={this.props.data.platformcontent.tweet_url}> <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
                            <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={this.changeHeart} data-state={this.state.heart && 'active'} />
                        </StopPropagation>
                        {(this.props.data.platformcontent.tweet_media.length <= 0) ? <div className='text-wrapper'> <p className='tweet-text'>{this.props.data.platformcontent.tweet_text}</p> </div> : ''}
                    </div>
                    <div className='expanded-view'>
                        <div className='header'>
                            <img src={this.props.data.platformcontent.user_profile_image_url} />
                            <a href={this.props.data.platformcontent.user_screen_name.toLowerCase()}> {this.props.data.platformcontent.user_name} </a>
                            {this.props.data.platformcontent.user_verified && <img className="verifiedIcon" src={require('../../../img/Twitter_Verified_Badge.svg')} />}
                            <a href={this.props.data.platformcontent.tweet_url}> <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
                        </div>
                        <div className='content-container'>
                            <p className='tweet_text'>{this.props.data.platformcontent.tweet_text}</p>
                            <img src={this.props.data.platformcontent.tweet_media[0]} />
                            <div className='meta-data'>
                                <span className='no-of-likes'><FontAwesomeIcon className="metaIcon" icon={'heart'} />
                                    {this.props.data.platformcontent.tweet_favorite_count}</span>
                                <span className='no-of-retweets'> <FontAwesomeIcon className="metaIcon" icon={'retweet'} />
                                    {this.props.data.platformcontent.tweet_retweet_count}</span>
                                <span className='time-stamp'><FontAwesomeIcon className="metaIcon" icon={'calendar-alt'} />
                                    <TimeAgo date={this.props.data.platformcontent.tweet_created_at} />
                                </span>
                                <StopPropagation>
                                    <FontAwesomeIcon icon={'heart'} className="follow_heart" onClick={this.changeHeart} data-state={this.state.heart && 'active'} />
                                </StopPropagation>
                            </div>
                        </div>
                    </div>
                    <div className='blur-overlay'></div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default PopularComponent
