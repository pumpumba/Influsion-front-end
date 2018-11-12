import React from 'react'
import PopularComponentClosedView from './popularSubComponents/PopularComponentClosedView'
import PopularComponentExpandedView from './popularSubComponents/PopularComponentExpandedView'
import { followInfluencer, unfollowInfluencer } from '../functions/followAndUnfollowInfluencer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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

    componentWillMount() {
        this.setState(({
            heart: this.props.userFollowing
        }))
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
        if (this.state.heart) {
            unfollowInfluencer(this.props.userId, this.props.data.realInfluencerName)
        } else {
            followInfluencer(this.props.userId, this.props.data.realInfluencerName)
        }
    }

    render() {
        if (this.props.data != null) {

            let backgroundUrl = ['']
            backgroundUrl = this.props.data.tweet_media ? this.props.data.tweet_media : this.props.data.post_media

            let styles = null

            if (backgroundUrl) {
                styles = {
                    backgroundImage: 'url(' + backgroundUrl[0] + ')'
                }
            }

            return (
                <div
                    className='popular-component-wrapper'
                    style={styles}
                    data-state={this.state.open ? 'open' : 'closed'}
                    onClick={this.onClick}
                >
                    <PopularComponentClosedView
                        backgroundImage={this.props.data.tweet_media || this.props.data.post_media}
                        userProfileImageUrl={this.props.data.user_profile_image_url}
                        url={this.props.data.tweet_url || this.props.data.post_url}
                        changeHeart={this.changeHeart}
                        caption={this.props.data.tweet_text}
                        heart={this.state.heart}
                        platform={this.props.data.platform}
                        influencerId={this.props.data.realInfluencerName}
                    />
                    <PopularComponentExpandedView
                        userProfileImageUrl={this.props.data.user_profile_image_url}
                        userName={this.props.data.user_name}
                        userVerified={this.props.data.user_verified}
                        url={this.props.data.tweet_url || this.props.data.post_url}
                        caption={this.props.data.tweet_text || this.props.data.post_text}
                        img={this.props.data.tweet_media || this.props.data.post_media}
                        noOfLikes={this.props.data.tweet_favorite_count || this.props.data.post_like_count}
                        noOfRetweet={this.props.data.tweet_retweet_count}
                        timestamp={this.props.data.tweet_created_at || this.props.data.post_created_at}
                        changeHeart={this.changeHeart}
                        platform={this.props.data.platform}
                        heart={this.state.heart}
                        influencerId={this.props.data.realInfluencerName}
                    />
                    <div className='blur-overlay'></div>
                </div>
            )
        } else return null
    }
}

export default PopularComponent
