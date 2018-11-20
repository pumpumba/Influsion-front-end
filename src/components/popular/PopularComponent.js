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
            backgroundUrl = this.props.data.tweet_media ? this.props.data.tweet_media : this.props.data.postMedia

            if (this.props.data.platform.toLowerCase() == 'youtube') {
                let imageArr = []
                imageArr.push(this.props.data.video_thumbnail_url)
                backgroundUrl = imageArr
            }

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
                        backgroundImage={backgroundUrl}
                        userProfileImageUrl={this.props.data.user_profile_image_url || this.props.data.video_thumbnail_url ||this.props.data.userProfileImageUrl}
                        url={this.props.data.tweet_url || this.props.data.postUrl || this.props.data.video_url}
                        changeHeart={this.changeHeart}
                        caption={this.props.data.tweet_text ||this.props.data.postText}
                        heart={this.state.heart}
                        platform={this.props.data.platform}
                        influencerId={this.props.data.influencerID}
                    />
                    {this.state.open &&
                    <PopularComponentExpandedView
                        userProfileImageUrl={this.props.data.user_profile_image_url || this.props.data.video_thumbnail_url ||this.props.data.userProfileImageUrl}
                        userName={this.props.data.user_name || this.props.data.channel_title || this.props.data.userName}
                        userVerified={this.props.data.user_verified}
                        url={this.props.data.tweet_url || this.props.data.postUrl || this.props.data.video_url}
                        caption={this.props.data.tweet_text || this.props.data.postText || this.props.data.video_description}
                        videoUrl={this.props.data.video_embeded_url}
                        img={backgroundUrl}
                        noOfLikes={this.props.data.tweet_favorite_count || this.props.data.postLikeCount || this.props.data.video_like_count}
                        noOfRetweet={this.props.data.tweet_retweet_count}
                        noOfComments={this.props.data.video_comment_count}
                        noOfViews={this.props.data.video_view_count}
                        timestamp={this.props.data.tweet_created_at || this.props.data.postCreatedAt || this.props.data.video_created_at}
                        changeHeart={this.changeHeart}
                        platform={this.props.data.platform}
                        heart={this.state.heart}
                        influencerId={this.props.data.influencerID}
                    />
                    }
                    <div className='blur-overlay'></div>
                </div>
            )
        } else return null
    }
}

export default PopularComponent
