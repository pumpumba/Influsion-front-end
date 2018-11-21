import React from 'react'
import { followInfluencer, unfollowInfluencer } from '../functions/followAndUnfollowInfluencer'
import FeedComponentHeader from './components/FeedComponentHeader'
import FeedComponentContent from './components/FeedComponentContent'
import FeedComponentMeta from './components/FeedComponentMeta'

class FeedComponent extends React.Component {
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
            unfollowInfluencer(this.props.userId, this.props.data.influencerID)
        } else {
            followInfluencer(this.props.userId, this.props.data.influencerID)
        }
    }

    render() {
        if (this.props.data != null) {
            return (
                <div className='feed-component-wrapper'>
                    <FeedComponentHeader
                        inflImgUrl={this.props.data.user_profile_image_url || this.props.data.video_thumbnail_url ||this.props.data.userProfileImageUrl}
                        inflId={this.props.data.influencerID}
                        inflName={this.props.data.user_name || this.props.data.channel_title || this.props.data.userName}
                        contentUrl={this.props.data.tweet_url || this.props.data.postUrl || this.props.data.video_url}
                        platform={this.props.platform}
                    />
                    <FeedComponentContent
                        caption={this.props.data.tweet_text ||this.props.data.postText || this.props.data.video_description}
                        imageUrl={this.props.data.tweet_media || this.props.data.postMedia}
                        videoUrl={this.props.data.video_embeded_url}
                    />
                    <FeedComponentMeta
                        noOfLikes={this.props.data.tweet_favorite_count || this.props.data.postLikeCount || this.props.data.video_like_count}
                        noOfRetweets={this.props.data.tweet_retweet_count}
                        timeStamp={this.props.data.tweet_created_at || this.props.data.postCreatedAt || this.props.data.video_created_at}
                        changeHeart={this.changeHeart}
                        heart={this.state.heart}
                    />
                </div>
            )
        } else return null
    }
}

export default FeedComponent
