import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeAgo from 'react-timeago'
import { StopPropagation } from 'react-clickable';
import PopularComponentClosedView from './popularSubComponents/PopularComponentClosedView'
import PopularComponentExpandedView from './popularSubComponents/PopularComponentExpandedView'

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
                    <PopularComponentClosedView
                        backgroundImage={this.props.data.platformcontent.tweet_media}
                        userProfileImageUrl={this.props.data.platformcontent.user_profile_image_url}
                        url={this.props.data.platformcontent.tweet_url}
                        changeHeart={this.changeHeart}
                        caption={this.props.data.platformcontent.tweet_text}
                    />
                    <PopularComponentExpandedView
                        userProfileImageUrl={this.props.data.platformcontent.user_profile_image_url}
                        userName={this.props.data.platformcontent.user_name}
                        userVerified={this.props.data.platformcontent.user_verified}
                        url={this.props.data.platformcontent.tweet_url}
                        caption={this.props.data.platformcontent.tweet_text}
                        img={this.props.data.platformcontent.tweet_media[0]}
                        noOfLikes={this.props.data.platformcontent.tweet_favorite_count}
                        noOfRetweet={this.props.data.platformcontent.tweet_retweet_count}
                        timestamp={this.props.data.platformcontent.tweet_created_at}
                        changeHeart={this.changeHeart}
                    />
                    <div className='blur-overlay'></div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default PopularComponent
