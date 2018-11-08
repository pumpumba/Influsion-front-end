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
            unfollowInfluencer(this.props.userId, this.props.data.realInfluencerName)
        } else {
            followInfluencer(this.props.userId, this.props.data.realInfluencerName)
        }
    }

    render() {
        if (this.props.data != null) {
            return (
                <div className='feed-component-wrapper'>
                    <FeedComponentHeader
                        inflImgUrl={this.props.data.user_profile_image_url}
                        inflId={this.props.data.realInfluencerName}
                        inflName={this.props.data.user_name}
                        contentUrl={this.props.data.tweet_url}
                        contentUrl={this.props.data.post_url}
                        platform={this.props.platform}
                    />
                    <FeedComponentContent
                        caption={this.props.data.tweet_text}
                        imageUrl={this.props.data.tweet_media}
                        imageUrl={this.props.data.post_media}
                    />
                    <FeedComponentMeta
                        noOfLikes={this.props.data.tweet_favorite_count}
                        noOfRetweets={this.props.data.tweet_retweet_count}
                        timeStamp={this.props.data.tweet_created_at}
                        changeHeart={this.changeHeart}
                        heart={this.state.heart}
                    />
                </div>
            )
        } else return null
    }
}

export default FeedComponent